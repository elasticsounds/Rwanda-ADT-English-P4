pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 4664;
pubcoder.page.title = pubcoder.page.title || "27";
pubcoder.page.number = pubcoder.page.number || 27;
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
var obj4918_onTap_activeActionGroupIndex = -1;
var obj4918_onTap_runningActionsCount = 0;
var obj4918_onTap_loopCount = 0;
var obj4915_onTap_activeActionGroupIndex = -1;
var obj4915_onTap_runningActionsCount = 0;
var obj4915_onTap_loopCount = 0;
var obj4921_onTap_activeActionGroupIndex = -1;
var obj4921_onTap_runningActionsCount = 0;
var obj4921_onTap_loopCount = 0;
var obj4754_onDrag_activeActionGroupIndex = -1;
var obj4754_onDrag_runningActionsCount = 0;
var obj4754_onDrag_loopCount = 0;
var obj4754_onTouchDown_activeActionGroupIndex = -1;
var obj4754_onTouchDown_runningActionsCount = 0;
var obj4754_onTouchDown_loopCount = 0;
var obj4754_SCActionDragDrop4757_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj4754_SCActionDragDrop4757_droppedOutsideTargetActions_runningActionsCount = 0;
var obj4754_SCActionDragDrop4757_droppedOutsideTargetActions_loopCount = 0;
var obj4754_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj4754_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj4754_droppedInsideTargetActions_3_loopCount = 0;
var obj4754_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj4754_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj4754_droppedInsideTargetActions_2_loopCount = 0;
var obj4754_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj4754_droppedInsideTargetActions_runningActionsCount = 0;
var obj4754_droppedInsideTargetActions_loopCount = 0;
var obj4940_onDrag_activeActionGroupIndex = -1;
var obj4940_onDrag_runningActionsCount = 0;
var obj4940_onDrag_loopCount = 0;
var obj4940_onTouchDown_activeActionGroupIndex = -1;
var obj4940_onTouchDown_runningActionsCount = 0;
var obj4940_onTouchDown_loopCount = 0;
var obj4940_SCActionDragDrop4943_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj4940_SCActionDragDrop4943_droppedOutsideTargetActions_runningActionsCount = 0;
var obj4940_SCActionDragDrop4943_droppedOutsideTargetActions_loopCount = 0;
var obj4940_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj4940_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj4940_droppedInsideTargetActions_3_loopCount = 0;
var obj4940_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj4940_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj4940_droppedInsideTargetActions_2_loopCount = 0;
var obj4940_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj4940_droppedInsideTargetActions_runningActionsCount = 0;
var obj4940_droppedInsideTargetActions_loopCount = 0;
var obj4993_onDrag_activeActionGroupIndex = -1;
var obj4993_onDrag_runningActionsCount = 0;
var obj4993_onDrag_loopCount = 0;
var obj4993_onTouchDown_activeActionGroupIndex = -1;
var obj4993_onTouchDown_runningActionsCount = 0;
var obj4993_onTouchDown_loopCount = 0;
var obj4993_SCActionDragDrop4996_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj4993_SCActionDragDrop4996_droppedOutsideTargetActions_runningActionsCount = 0;
var obj4993_SCActionDragDrop4996_droppedOutsideTargetActions_loopCount = 0;
var obj4993_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj4993_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj4993_droppedInsideTargetActions_3_loopCount = 0;
var obj4993_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj4993_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj4993_droppedInsideTargetActions_2_loopCount = 0;
var obj4993_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj4993_droppedInsideTargetActions_runningActionsCount = 0;
var obj4993_droppedInsideTargetActions_loopCount = 0;
var obj65390_onTap_activeActionGroupIndex = -1;
var obj65390_onTap_runningActionsCount = 0;
var obj65390_onTap_loopCount = 0;
var obj65382_onTap_activeActionGroupIndex = -1;
var obj65382_onTap_runningActionsCount = 0;
var obj65382_onTap_loopCount = 0;
var obj89828_onTap_activeActionGroupIndex = -1;
var obj89828_onTap_runningActionsCount = 0;
var obj89828_onTap_loopCount = 0;
var obj89823_onTap_activeActionGroupIndex = -1;
var obj89823_onTap_runningActionsCount = 0;
var obj89823_onTap_loopCount = 0;
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
		
obj4918_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4918_onTap_activeActionGroupIndex = -1;
		$("#obj4918").trigger("obj4918_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4918) {
				console.warn("de-queueing event obj4918." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4918").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4918_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_4920();
function goToPage_4920() {
	window.obj4918_onTap_runningActionsCount = obj4918_onTap_runningActionsCount + 1;
	$("#anchor161")[0].click();
	window.obj4918_onTap_runningActionsCount = window.obj4918_onTap_runningActionsCount - 1;
if (window.obj4918_onTap_runningActionsCount < 0) {
	window.obj4918_onTap_runningActionsCount = 0;
} else if (window.obj4918_onTap_runningActionsCount == 0) {
	obj4918_onTap_actionGroup1();
}
}





















};
obj4918_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4918_onTap_activeActionGroupIndex = -1;
		$("#obj4918").trigger("obj4918_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4918) {
				console.warn("de-queueing event obj4918." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4918").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4918_onTap_activeActionGroupIndex = 1;
	





















};
obj4915_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4915_onTap_activeActionGroupIndex = -1;
		$("#obj4915").trigger("obj4915_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4915) {
				console.warn("de-queueing event obj4915." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4915").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4915_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_4917();
function goToPage_4917() {
	window.obj4915_onTap_runningActionsCount = obj4915_onTap_runningActionsCount + 1;
	$("#anchor162")[0].click();
	window.obj4915_onTap_runningActionsCount = window.obj4915_onTap_runningActionsCount - 1;
if (window.obj4915_onTap_runningActionsCount < 0) {
	window.obj4915_onTap_runningActionsCount = 0;
} else if (window.obj4915_onTap_runningActionsCount == 0) {
	obj4915_onTap_actionGroup1();
}
}





















};
obj4915_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4915_onTap_activeActionGroupIndex = -1;
		$("#obj4915").trigger("obj4915_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4915) {
				console.warn("de-queueing event obj4915." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4915").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4915_onTap_activeActionGroupIndex = 1;
	





















};
obj4921_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4921_onTap_activeActionGroupIndex = -1;
		$("#obj4921").trigger("obj4921_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4921) {
				console.warn("de-queueing event obj4921." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4921").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4921_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_4923();
function goToPage_4923() {
	window.obj4921_onTap_runningActionsCount = obj4921_onTap_runningActionsCount + 1;
	$("#anchor163")[0].click();
	window.obj4921_onTap_runningActionsCount = window.obj4921_onTap_runningActionsCount - 1;
if (window.obj4921_onTap_runningActionsCount < 0) {
	window.obj4921_onTap_runningActionsCount = 0;
} else if (window.obj4921_onTap_runningActionsCount == 0) {
	obj4921_onTap_actionGroup1();
}
}





















};
obj4921_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4921_onTap_activeActionGroupIndex = -1;
		$("#obj4921").trigger("obj4921_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4921) {
				console.warn("de-queueing event obj4921." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4921").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4921_onTap_activeActionGroupIndex = 1;
	





















};
obj4754_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4754_onTouchDown_activeActionGroupIndex = -1;
		$("#obj4754").trigger("obj4754_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4754) {
				console.warn("de-queueing event obj4754." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4754").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4754_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj4754");
//	action: dragDrop
//	target: obj4754 
dragDrop_4757();
function dragDrop_4757() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj4754_onTouchDown_runningActionsCount = obj4754_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj4754');
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
	  	containerNode = $('#obj4665');
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
    	window.obj4754_onTouchDown_runningActionsCount = window.obj4754_onTouchDown_runningActionsCount - 1;
if (window.obj4754_onTouchDown_runningActionsCount < 0) {
	window.obj4754_onTouchDown_runningActionsCount = 0;
} else if (window.obj4754_onTouchDown_runningActionsCount == 0) {
	obj4754_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj4687","#obj4689","#obj4685");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_4757 = false;
    	var dropped_id_4757;
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
					dropped_4757 = true;
					dropped_id_4757 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_4757) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj4754").trigger('SCActionDragDrop4757_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj4754_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4754_onTouchDown_activeActionGroupIndex = -1;
		$("#obj4754").trigger("obj4754_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4754) {
				console.warn("de-queueing event obj4754." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4754").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4754_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj4754_SCActionDragDrop4757_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4754_SCActionDragDrop4757_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj4754").trigger("obj4754_SCActionDragDrop4757_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4754) {
				console.warn("de-queueing event obj4754." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4754").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4754_SCActionDragDrop4757_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj4754 
move_92164();
function move_92164() {
	window.obj4754_SCActionDragDrop4757_droppedOutsideTargetActions_runningActionsCount = obj4754_SCActionDragDrop4757_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj4754");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 67;
	var moveY = 567;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj4754_SCActionDragDrop4757_droppedOutsideTargetActions_runningActionsCount = window.obj4754_SCActionDragDrop4757_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj4754_SCActionDragDrop4757_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj4754_SCActionDragDrop4757_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj4754_SCActionDragDrop4757_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj4754_SCActionDragDrop4757_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj4754_SCActionDragDrop4757_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4754_SCActionDragDrop4757_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj4754").trigger("obj4754_SCActionDragDrop4757_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4754) {
				console.warn("de-queueing event obj4754." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4754").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4754_SCActionDragDrop4757_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj4754_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4754_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj4754").trigger("obj4754_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4754) {
				console.warn("de-queueing event obj4754." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4754").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4754_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_5084();
function runjs_5084() {
	window.obj4754_droppedInsideTargetActions_3_runningActionsCount = obj4754_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj4685").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj4754_droppedInsideTargetActions_3_runningActionsCount = window.obj4754_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj4754_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj4754_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj4754_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj4754_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj4754_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4754_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj4754").trigger("obj4754_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4754) {
				console.warn("de-queueing event obj4754." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4754").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4754_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_5085();
function runjs_5085() {
	window.obj4754_droppedInsideTargetActions_3_runningActionsCount = obj4754_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj4685").css("border-color", "#C00000"); $("#obj4685").css("border-width", "2px"); $("#obj4685").css("border-style", "solid"); $("#obj4685").css("border-radius", "10px"); $("#obj4685").css("-webkit-border-radius", "10px"); $("#obj4685").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj4754_droppedInsideTargetActions_3_runningActionsCount = window.obj4754_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj4754_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj4754_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj4754_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj4754_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj4754_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4754_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj4754").trigger("obj4754_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4754) {
				console.warn("de-queueing event obj4754." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4754").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4754_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj4695 
hide_5086();
function hide_5086() {
	var selector = "#obj4695";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj4754_droppedInsideTargetActions_3_runningActionsCount = obj4754_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj4754_droppedInsideTargetActions_3_runningActionsCount = window.obj4754_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj4754_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj4754_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj4754_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj4754_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_5086(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj4754_droppedInsideTargetActions_3_runningActionsCount = window.obj4754_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj4754_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj4754_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj4754_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj4754_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj4754_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4754_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj4754").trigger("obj4754_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4754) {
				console.warn("de-queueing event obj4754." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4754").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4754_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_5087();
function runjs_5087() {
	window.obj4754_droppedInsideTargetActions_3_runningActionsCount = obj4754_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj4754").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj4754_droppedInsideTargetActions_3_runningActionsCount = window.obj4754_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj4754_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj4754_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj4754_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj4754_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj4754_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4754_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj4754").trigger("obj4754_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4754) {
				console.warn("de-queueing event obj4754." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4754").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4754_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_5088();
function switchText_5088() {
	window.obj4754_droppedInsideTargetActions_3_runningActionsCount = obj4754_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj4938_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj4938_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj4938").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj4938_content");
			setTimeout(function () {
				window.obj4754_droppedInsideTargetActions_3_runningActionsCount = window.obj4754_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj4754_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj4754_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj4754_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj4754_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj4938 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj4754_droppedInsideTargetActions_3_runningActionsCount = window.obj4754_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj4754_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj4754_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj4754_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj4754_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj4754_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4754_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj4754").trigger("obj4754_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4754) {
				console.warn("de-queueing event obj4754." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4754").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4754_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj4754 
move_5089();
function move_5089() {
	window.obj4754_droppedInsideTargetActions_3_runningActionsCount = obj4754_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj4754");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 67;
	var moveY = 567;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj4754_droppedInsideTargetActions_3_runningActionsCount = window.obj4754_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj4754_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj4754_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj4754_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj4754_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj4754_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4754_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj4754").trigger("obj4754_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4754) {
				console.warn("de-queueing event obj4754." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4754").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4754_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_5090();
function runjs_5090() {
	window.obj4754_droppedInsideTargetActions_3_runningActionsCount = obj4754_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj4685").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj4754_droppedInsideTargetActions_3_runningActionsCount = window.obj4754_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj4754_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj4754_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj4754_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj4754_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj4754_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4754_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj4754").trigger("obj4754_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4754) {
				console.warn("de-queueing event obj4754." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4754").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4754_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_5091();
function runjs_5091() {
	window.obj4754_droppedInsideTargetActions_3_runningActionsCount = obj4754_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj4685").css("border-color", "#000000"); $("#obj4685").css("border-width", "1px"); $("#obj4685").css("border-style", "solid"); $("#obj4685").css("border-radius", "10px"); $("#obj4685").css("-webkit-border-radius", "10px"); $("#obj4685").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj4754_droppedInsideTargetActions_3_runningActionsCount = window.obj4754_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj4754_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj4754_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj4754_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj4754_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj4754_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4754_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj4754").trigger("obj4754_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4754) {
				console.warn("de-queueing event obj4754." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4754").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4754_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj4695
(function(){
	window.obj4754_droppedInsideTargetActions_3_runningActionsCount = obj4754_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj4695";
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
					window.obj4754_droppedInsideTargetActions_3_runningActionsCount = window.obj4754_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj4754_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj4754_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj4754_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj4754_droppedInsideTargetActions_3_actionGroup9();
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
				window.obj4754_droppedInsideTargetActions_3_runningActionsCount = window.obj4754_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj4754_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj4754_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj4754_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj4754_droppedInsideTargetActions_3_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj4754_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4754_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj4754").trigger("obj4754_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4754) {
				console.warn("de-queueing event obj4754." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4754").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4754_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_5093();
function runjs_5093() {
	window.obj4754_droppedInsideTargetActions_3_runningActionsCount = obj4754_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj4754").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj4754_droppedInsideTargetActions_3_runningActionsCount = window.obj4754_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj4754_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj4754_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj4754_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj4754_droppedInsideTargetActions_3_actionGroup10();
}
	}, 1);
}







};
obj4754_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4754_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj4754").trigger("obj4754_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4754) {
				console.warn("de-queueing event obj4754." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4754").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4754_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_5094();
function runjs_5094() {
	window.obj4754_droppedInsideTargetActions_3_runningActionsCount = obj4754_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj4754").css("border-color", "rgba(0,0,0,0)"); $("#obj4754").css("border-width", "0px"); $("#obj4754").css("border-style", "solid"); $("#obj4754").css("border-radius", "10px"); $("#obj4754").css("-webkit-border-radius", "10px"); $("#obj4754").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj4754_droppedInsideTargetActions_3_runningActionsCount = window.obj4754_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj4754_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj4754_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj4754_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj4754_droppedInsideTargetActions_3_actionGroup11();
}
	}, 1);
}







};
obj4754_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4754_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj4754").trigger("obj4754_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4754) {
				console.warn("de-queueing event obj4754." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4754").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4754_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj5053 
playAudio_5095();
function playAudio_5095() {
	window.obj4754_droppedInsideTargetActions_3_runningActionsCount = obj4754_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj5053")[0];
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
		    window.obj4754_droppedInsideTargetActions_3_runningActionsCount = window.obj4754_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj4754_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj4754_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj4754_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj4754_droppedInsideTargetActions_3_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj4754_droppedInsideTargetActions_3_runningActionsCount = window.obj4754_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj4754_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj4754_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj4754_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj4754_droppedInsideTargetActions_3_actionGroup12();
}
	}
}









};
obj4754_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4754_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj4754").trigger("obj4754_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4754) {
				console.warn("de-queueing event obj4754." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4754").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4754_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_5096();
function switchText_5096() {
	window.obj4754_droppedInsideTargetActions_3_runningActionsCount = obj4754_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj4938_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj4938_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj4938").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj4938_content");
			setTimeout(function () {
				window.obj4754_droppedInsideTargetActions_3_runningActionsCount = window.obj4754_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj4754_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj4754_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj4754_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj4754_droppedInsideTargetActions_3_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj4938 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj4754_droppedInsideTargetActions_3_runningActionsCount = window.obj4754_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj4754_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj4754_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj4754_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj4754_droppedInsideTargetActions_3_actionGroup13();
}
		}, 1);
	}
}






};
obj4754_droppedInsideTargetActions_3_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4754_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj4754").trigger("obj4754_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4754) {
				console.warn("de-queueing event obj4754." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4754").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4754_droppedInsideTargetActions_3_activeActionGroupIndex = 13;
	





















};
obj4754_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4754_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj4754").trigger("obj4754_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4754) {
				console.warn("de-queueing event obj4754." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4754").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4754_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_5070();
function runjs_5070() {
	window.obj4754_droppedInsideTargetActions_2_runningActionsCount = obj4754_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj4689").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj4754_droppedInsideTargetActions_2_runningActionsCount = window.obj4754_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj4754_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj4754_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj4754_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj4754_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj4754_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4754_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj4754").trigger("obj4754_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4754) {
				console.warn("de-queueing event obj4754." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4754").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4754_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_5071();
function runjs_5071() {
	window.obj4754_droppedInsideTargetActions_2_runningActionsCount = obj4754_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj4689").css("border-color", "#C00000"); $("#obj4689").css("border-width", "2px"); $("#obj4689").css("border-style", "solid"); $("#obj4689").css("border-radius", "10px"); $("#obj4689").css("-webkit-border-radius", "10px"); $("#obj4689").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj4754_droppedInsideTargetActions_2_runningActionsCount = window.obj4754_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj4754_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj4754_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj4754_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj4754_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj4754_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4754_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj4754").trigger("obj4754_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4754) {
				console.warn("de-queueing event obj4754." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4754").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4754_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj4691 
hide_5072();
function hide_5072() {
	var selector = "#obj4691";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj4754_droppedInsideTargetActions_2_runningActionsCount = obj4754_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj4754_droppedInsideTargetActions_2_runningActionsCount = window.obj4754_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj4754_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj4754_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj4754_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj4754_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_5072(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj4754_droppedInsideTargetActions_2_runningActionsCount = window.obj4754_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj4754_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj4754_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj4754_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj4754_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj4754_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4754_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj4754").trigger("obj4754_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4754) {
				console.warn("de-queueing event obj4754." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4754").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4754_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_5073();
function runjs_5073() {
	window.obj4754_droppedInsideTargetActions_2_runningActionsCount = obj4754_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj4754").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj4754_droppedInsideTargetActions_2_runningActionsCount = window.obj4754_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj4754_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj4754_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj4754_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj4754_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj4754_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4754_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj4754").trigger("obj4754_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4754) {
				console.warn("de-queueing event obj4754." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4754").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4754_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_5074();
function switchText_5074() {
	window.obj4754_droppedInsideTargetActions_2_runningActionsCount = obj4754_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj4938_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj4938_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj4938").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj4938_content");
			setTimeout(function () {
				window.obj4754_droppedInsideTargetActions_2_runningActionsCount = window.obj4754_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj4754_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj4754_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj4754_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj4754_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj4938 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj4754_droppedInsideTargetActions_2_runningActionsCount = window.obj4754_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj4754_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj4754_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj4754_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj4754_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj4754_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4754_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj4754").trigger("obj4754_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4754) {
				console.warn("de-queueing event obj4754." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4754").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4754_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj4754 
move_5075();
function move_5075() {
	window.obj4754_droppedInsideTargetActions_2_runningActionsCount = obj4754_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj4754");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 67;
	var moveY = 567;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj4754_droppedInsideTargetActions_2_runningActionsCount = window.obj4754_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj4754_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj4754_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj4754_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj4754_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj4754_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4754_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj4754").trigger("obj4754_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4754) {
				console.warn("de-queueing event obj4754." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4754").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4754_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_5076();
function runjs_5076() {
	window.obj4754_droppedInsideTargetActions_2_runningActionsCount = obj4754_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj4689").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj4754_droppedInsideTargetActions_2_runningActionsCount = window.obj4754_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj4754_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj4754_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj4754_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj4754_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj4754_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4754_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj4754").trigger("obj4754_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4754) {
				console.warn("de-queueing event obj4754." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4754").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4754_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_5077();
function runjs_5077() {
	window.obj4754_droppedInsideTargetActions_2_runningActionsCount = obj4754_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj4689").css("border-color", "#000000"); $("#obj4689").css("border-width", "1px"); $("#obj4689").css("border-style", "solid"); $("#obj4689").css("border-radius", "10px"); $("#obj4689").css("-webkit-border-radius", "10px"); $("#obj4689").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj4754_droppedInsideTargetActions_2_runningActionsCount = window.obj4754_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj4754_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj4754_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj4754_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj4754_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj4754_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4754_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj4754").trigger("obj4754_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4754) {
				console.warn("de-queueing event obj4754." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4754").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4754_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj4691
(function(){
	window.obj4754_droppedInsideTargetActions_2_runningActionsCount = obj4754_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj4691";
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
					window.obj4754_droppedInsideTargetActions_2_runningActionsCount = window.obj4754_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj4754_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj4754_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj4754_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj4754_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj4754_droppedInsideTargetActions_2_runningActionsCount = window.obj4754_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj4754_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj4754_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj4754_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj4754_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj4754_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4754_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj4754").trigger("obj4754_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4754) {
				console.warn("de-queueing event obj4754." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4754").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4754_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_5079();
function runjs_5079() {
	window.obj4754_droppedInsideTargetActions_2_runningActionsCount = obj4754_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj4754").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj4754_droppedInsideTargetActions_2_runningActionsCount = window.obj4754_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj4754_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj4754_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj4754_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj4754_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj4754_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4754_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj4754").trigger("obj4754_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4754) {
				console.warn("de-queueing event obj4754." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4754").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4754_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_5080();
function runjs_5080() {
	window.obj4754_droppedInsideTargetActions_2_runningActionsCount = obj4754_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj4754").css("border-color", "rgba(0,0,0,0)"); $("#obj4754").css("border-width", "0px"); $("#obj4754").css("border-style", "solid"); $("#obj4754").css("border-radius", "10px"); $("#obj4754").css("-webkit-border-radius", "10px"); $("#obj4754").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj4754_droppedInsideTargetActions_2_runningActionsCount = window.obj4754_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj4754_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj4754_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj4754_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj4754_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj4754_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4754_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj4754").trigger("obj4754_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4754) {
				console.warn("de-queueing event obj4754." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4754").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4754_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj5053 
playAudio_5081();
function playAudio_5081() {
	window.obj4754_droppedInsideTargetActions_2_runningActionsCount = obj4754_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj5053")[0];
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
		    window.obj4754_droppedInsideTargetActions_2_runningActionsCount = window.obj4754_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj4754_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj4754_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj4754_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj4754_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj4754_droppedInsideTargetActions_2_runningActionsCount = window.obj4754_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj4754_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj4754_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj4754_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj4754_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj4754_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4754_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj4754").trigger("obj4754_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4754) {
				console.warn("de-queueing event obj4754." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4754").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4754_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_5082();
function switchText_5082() {
	window.obj4754_droppedInsideTargetActions_2_runningActionsCount = obj4754_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj4938_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj4938_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj4938").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj4938_content");
			setTimeout(function () {
				window.obj4754_droppedInsideTargetActions_2_runningActionsCount = window.obj4754_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj4754_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj4754_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj4754_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj4754_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj4938 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj4754_droppedInsideTargetActions_2_runningActionsCount = window.obj4754_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj4754_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj4754_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj4754_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj4754_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj4754_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4754_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj4754").trigger("obj4754_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4754) {
				console.warn("de-queueing event obj4754." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4754").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4754_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj4754_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4754_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj4754").trigger("obj4754_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4754) {
				console.warn("de-queueing event obj4754." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4754").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4754_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_5056();
function runjs_5056() {
	window.obj4754_droppedInsideTargetActions_runningActionsCount = obj4754_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj4687").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj4754_droppedInsideTargetActions_runningActionsCount = window.obj4754_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj4754_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj4754_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj4754_droppedInsideTargetActions_runningActionsCount == 0) {
	obj4754_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj4754_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4754_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj4754").trigger("obj4754_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4754) {
				console.warn("de-queueing event obj4754." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4754").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4754_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_5060();
function switchText_5060() {
	window.obj4754_droppedInsideTargetActions_runningActionsCount = obj4754_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj4938_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj4938_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj4938").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj4938_content");
			setTimeout(function () {
				window.obj4754_droppedInsideTargetActions_runningActionsCount = window.obj4754_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj4754_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj4754_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj4754_droppedInsideTargetActions_runningActionsCount == 0) {
	obj4754_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj4938 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj4754_droppedInsideTargetActions_runningActionsCount = window.obj4754_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj4754_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj4754_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj4754_droppedInsideTargetActions_runningActionsCount == 0) {
	obj4754_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj4754_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4754_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj4754").trigger("obj4754_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4754) {
				console.warn("de-queueing event obj4754." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4754").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4754_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_5057();
function runjs_5057() {
	window.obj4754_droppedInsideTargetActions_runningActionsCount = obj4754_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj4687").css("border-color", "#058E3F"); $("#obj4687").css("border-width", "2px"); $("#obj4687").css("border-style", "solid"); $("#obj4687").css("border-radius", "10px"); $("#obj4687").css("-webkit-border-radius", "10px"); $("#obj4687").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj4754_droppedInsideTargetActions_runningActionsCount = window.obj4754_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj4754_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj4754_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj4754_droppedInsideTargetActions_runningActionsCount == 0) {
	obj4754_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj4754_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4754_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj4754").trigger("obj4754_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4754) {
				console.warn("de-queueing event obj4754." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4754").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4754_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj4693 
hide_5058();
function hide_5058() {
	var selector = "#obj4693";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj4754_droppedInsideTargetActions_runningActionsCount = obj4754_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj4754_droppedInsideTargetActions_runningActionsCount = window.obj4754_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj4754_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj4754_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj4754_droppedInsideTargetActions_runningActionsCount == 0) {
	obj4754_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_5058(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj4754_droppedInsideTargetActions_runningActionsCount = window.obj4754_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj4754_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj4754_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj4754_droppedInsideTargetActions_runningActionsCount == 0) {
	obj4754_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj4754_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4754_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj4754").trigger("obj4754_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4754) {
				console.warn("de-queueing event obj4754." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4754").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4754_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_5059();
function runjs_5059() {
	window.obj4754_droppedInsideTargetActions_runningActionsCount = obj4754_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj4754").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj4754_droppedInsideTargetActions_runningActionsCount = window.obj4754_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj4754_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj4754_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj4754_droppedInsideTargetActions_runningActionsCount == 0) {
	obj4754_droppedInsideTargetActions_actionGroup5();
}
	}, 1);
}







};
obj4754_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4754_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj4754").trigger("obj4754_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4754) {
				console.warn("de-queueing event obj4754." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4754").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4754_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj5054 
playAudio_5061();
function playAudio_5061() {
	window.obj4754_droppedInsideTargetActions_runningActionsCount = obj4754_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj5054")[0];
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
		    window.obj4754_droppedInsideTargetActions_runningActionsCount = window.obj4754_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj4754_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj4754_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj4754_droppedInsideTargetActions_runningActionsCount == 0) {
	obj4754_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj4754_droppedInsideTargetActions_runningActionsCount = window.obj4754_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj4754_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj4754_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj4754_droppedInsideTargetActions_runningActionsCount == 0) {
	obj4754_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj4754_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4754_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj4754").trigger("obj4754_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4754) {
				console.warn("de-queueing event obj4754." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4754").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4754_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90111();
function switchText_90111() {
	window.obj4754_droppedInsideTargetActions_runningActionsCount = obj4754_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj4938_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj4938_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj4938").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj4938_content");
			setTimeout(function () {
				window.obj4754_droppedInsideTargetActions_runningActionsCount = window.obj4754_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj4754_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj4754_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj4754_droppedInsideTargetActions_runningActionsCount == 0) {
	obj4754_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj4938 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj4754_droppedInsideTargetActions_runningActionsCount = window.obj4754_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj4754_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj4754_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj4754_droppedInsideTargetActions_runningActionsCount == 0) {
	obj4754_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj4754_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4754_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj4754").trigger("obj4754_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4754) {
				console.warn("de-queueing event obj4754." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4754").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4754_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj4940_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4940_onTouchDown_activeActionGroupIndex = -1;
		$("#obj4940").trigger("obj4940_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4940) {
				console.warn("de-queueing event obj4940." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4940").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4940_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj4940");
//	action: dragDrop
//	target: obj4940 
dragDrop_4943();
function dragDrop_4943() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj4940_onTouchDown_runningActionsCount = obj4940_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj4940');
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
	  	containerNode = $('#obj4665');
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
    	window.obj4940_onTouchDown_runningActionsCount = window.obj4940_onTouchDown_runningActionsCount - 1;
if (window.obj4940_onTouchDown_runningActionsCount < 0) {
	window.obj4940_onTouchDown_runningActionsCount = 0;
} else if (window.obj4940_onTouchDown_runningActionsCount == 0) {
	obj4940_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj4689","#obj4687","#obj4685");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_4943 = false;
    	var dropped_id_4943;
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
					dropped_4943 = true;
					dropped_id_4943 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_4943) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj4940").trigger('SCActionDragDrop4943_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj4940_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4940_onTouchDown_activeActionGroupIndex = -1;
		$("#obj4940").trigger("obj4940_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4940) {
				console.warn("de-queueing event obj4940." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4940").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4940_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj4940_SCActionDragDrop4943_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4940_SCActionDragDrop4943_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj4940").trigger("obj4940_SCActionDragDrop4943_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4940) {
				console.warn("de-queueing event obj4940." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4940").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4940_SCActionDragDrop4943_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj4940 
move_92166();
function move_92166() {
	window.obj4940_SCActionDragDrop4943_droppedOutsideTargetActions_runningActionsCount = obj4940_SCActionDragDrop4943_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj4940");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 230;
	var moveY = 567;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj4940_SCActionDragDrop4943_droppedOutsideTargetActions_runningActionsCount = window.obj4940_SCActionDragDrop4943_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj4940_SCActionDragDrop4943_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj4940_SCActionDragDrop4943_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj4940_SCActionDragDrop4943_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj4940_SCActionDragDrop4943_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj4940_SCActionDragDrop4943_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4940_SCActionDragDrop4943_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj4940").trigger("obj4940_SCActionDragDrop4943_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4940) {
				console.warn("de-queueing event obj4940." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4940").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4940_SCActionDragDrop4943_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj4940_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4940_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj4940").trigger("obj4940_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4940) {
				console.warn("de-queueing event obj4940." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4940").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4940_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_5112();
function runjs_5112() {
	window.obj4940_droppedInsideTargetActions_3_runningActionsCount = obj4940_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj4685").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj4940_droppedInsideTargetActions_3_runningActionsCount = window.obj4940_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj4940_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj4940_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj4940_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj4940_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj4940_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4940_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj4940").trigger("obj4940_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4940) {
				console.warn("de-queueing event obj4940." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4940").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4940_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_5113();
function runjs_5113() {
	window.obj4940_droppedInsideTargetActions_3_runningActionsCount = obj4940_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj4685").css("border-color", "#C00000"); $("#obj4685").css("border-width", "2px"); $("#obj4685").css("border-style", "solid"); $("#obj4685").css("border-radius", "10px"); $("#obj4685").css("-webkit-border-radius", "10px"); $("#obj4685").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj4940_droppedInsideTargetActions_3_runningActionsCount = window.obj4940_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj4940_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj4940_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj4940_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj4940_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj4940_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4940_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj4940").trigger("obj4940_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4940) {
				console.warn("de-queueing event obj4940." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4940").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4940_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj4695 
hide_5114();
function hide_5114() {
	var selector = "#obj4695";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj4940_droppedInsideTargetActions_3_runningActionsCount = obj4940_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj4940_droppedInsideTargetActions_3_runningActionsCount = window.obj4940_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj4940_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj4940_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj4940_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj4940_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_5114(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj4940_droppedInsideTargetActions_3_runningActionsCount = window.obj4940_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj4940_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj4940_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj4940_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj4940_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj4940_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4940_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj4940").trigger("obj4940_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4940) {
				console.warn("de-queueing event obj4940." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4940").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4940_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_5115();
function runjs_5115() {
	window.obj4940_droppedInsideTargetActions_3_runningActionsCount = obj4940_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj4940").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj4940_droppedInsideTargetActions_3_runningActionsCount = window.obj4940_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj4940_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj4940_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj4940_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj4940_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj4940_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4940_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj4940").trigger("obj4940_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4940) {
				console.warn("de-queueing event obj4940." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4940").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4940_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_5116();
function switchText_5116() {
	window.obj4940_droppedInsideTargetActions_3_runningActionsCount = obj4940_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj4938_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj4938_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj4938").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj4938_content");
			setTimeout(function () {
				window.obj4940_droppedInsideTargetActions_3_runningActionsCount = window.obj4940_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj4940_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj4940_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj4940_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj4940_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj4938 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj4940_droppedInsideTargetActions_3_runningActionsCount = window.obj4940_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj4940_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj4940_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj4940_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj4940_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj4940_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4940_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj4940").trigger("obj4940_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4940) {
				console.warn("de-queueing event obj4940." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4940").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4940_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj4940 
move_5117();
function move_5117() {
	window.obj4940_droppedInsideTargetActions_3_runningActionsCount = obj4940_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj4940");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 230;
	var moveY = 567;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj4940_droppedInsideTargetActions_3_runningActionsCount = window.obj4940_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj4940_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj4940_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj4940_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj4940_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj4940_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4940_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj4940").trigger("obj4940_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4940) {
				console.warn("de-queueing event obj4940." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4940").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4940_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_5118();
function runjs_5118() {
	window.obj4940_droppedInsideTargetActions_3_runningActionsCount = obj4940_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj4685").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj4940_droppedInsideTargetActions_3_runningActionsCount = window.obj4940_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj4940_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj4940_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj4940_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj4940_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj4940_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4940_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj4940").trigger("obj4940_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4940) {
				console.warn("de-queueing event obj4940." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4940").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4940_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_5119();
function runjs_5119() {
	window.obj4940_droppedInsideTargetActions_3_runningActionsCount = obj4940_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj4685").css("border-color", "#000000"); $("#obj4685").css("border-width", "1px"); $("#obj4685").css("border-style", "solid"); $("#obj4685").css("border-radius", "10px"); $("#obj4685").css("-webkit-border-radius", "10px"); $("#obj4685").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj4940_droppedInsideTargetActions_3_runningActionsCount = window.obj4940_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj4940_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj4940_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj4940_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj4940_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj4940_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4940_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj4940").trigger("obj4940_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4940) {
				console.warn("de-queueing event obj4940." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4940").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4940_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj4695
(function(){
	window.obj4940_droppedInsideTargetActions_3_runningActionsCount = obj4940_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj4695";
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
					window.obj4940_droppedInsideTargetActions_3_runningActionsCount = window.obj4940_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj4940_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj4940_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj4940_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj4940_droppedInsideTargetActions_3_actionGroup9();
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
				window.obj4940_droppedInsideTargetActions_3_runningActionsCount = window.obj4940_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj4940_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj4940_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj4940_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj4940_droppedInsideTargetActions_3_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj4940_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4940_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj4940").trigger("obj4940_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4940) {
				console.warn("de-queueing event obj4940." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4940").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4940_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_5121();
function runjs_5121() {
	window.obj4940_droppedInsideTargetActions_3_runningActionsCount = obj4940_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj4940").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj4940_droppedInsideTargetActions_3_runningActionsCount = window.obj4940_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj4940_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj4940_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj4940_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj4940_droppedInsideTargetActions_3_actionGroup10();
}
	}, 1);
}







};
obj4940_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4940_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj4940").trigger("obj4940_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4940) {
				console.warn("de-queueing event obj4940." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4940").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4940_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_5122();
function runjs_5122() {
	window.obj4940_droppedInsideTargetActions_3_runningActionsCount = obj4940_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj4940").css("border-color", "rgba(0,0,0,0)"); $("#obj4940").css("border-width", "0px"); $("#obj4940").css("border-style", "solid"); $("#obj4940").css("border-radius", "10px"); $("#obj4940").css("-webkit-border-radius", "10px"); $("#obj4940").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj4940_droppedInsideTargetActions_3_runningActionsCount = window.obj4940_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj4940_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj4940_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj4940_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj4940_droppedInsideTargetActions_3_actionGroup11();
}
	}, 1);
}







};
obj4940_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4940_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj4940").trigger("obj4940_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4940) {
				console.warn("de-queueing event obj4940." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4940").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4940_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj5053 
playAudio_5123();
function playAudio_5123() {
	window.obj4940_droppedInsideTargetActions_3_runningActionsCount = obj4940_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj5053")[0];
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
		    window.obj4940_droppedInsideTargetActions_3_runningActionsCount = window.obj4940_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj4940_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj4940_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj4940_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj4940_droppedInsideTargetActions_3_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj4940_droppedInsideTargetActions_3_runningActionsCount = window.obj4940_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj4940_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj4940_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj4940_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj4940_droppedInsideTargetActions_3_actionGroup12();
}
	}
}









};
obj4940_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4940_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj4940").trigger("obj4940_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4940) {
				console.warn("de-queueing event obj4940." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4940").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4940_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_5124();
function switchText_5124() {
	window.obj4940_droppedInsideTargetActions_3_runningActionsCount = obj4940_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj4938_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj4938_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj4938").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj4938_content");
			setTimeout(function () {
				window.obj4940_droppedInsideTargetActions_3_runningActionsCount = window.obj4940_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj4940_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj4940_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj4940_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj4940_droppedInsideTargetActions_3_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj4938 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj4940_droppedInsideTargetActions_3_runningActionsCount = window.obj4940_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj4940_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj4940_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj4940_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj4940_droppedInsideTargetActions_3_actionGroup13();
}
		}, 1);
	}
}






};
obj4940_droppedInsideTargetActions_3_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4940_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj4940").trigger("obj4940_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4940) {
				console.warn("de-queueing event obj4940." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4940").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4940_droppedInsideTargetActions_3_activeActionGroupIndex = 13;
	





















};
obj4940_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4940_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj4940").trigger("obj4940_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4940) {
				console.warn("de-queueing event obj4940." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4940").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4940_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_5098();
function runjs_5098() {
	window.obj4940_droppedInsideTargetActions_2_runningActionsCount = obj4940_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj4687").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj4940_droppedInsideTargetActions_2_runningActionsCount = window.obj4940_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj4940_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj4940_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj4940_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj4940_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj4940_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4940_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj4940").trigger("obj4940_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4940) {
				console.warn("de-queueing event obj4940." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4940").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4940_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_5099();
function runjs_5099() {
	window.obj4940_droppedInsideTargetActions_2_runningActionsCount = obj4940_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj4687").css("border-color", "#C00000"); $("#obj4687").css("border-width", "2px"); $("#obj4687").css("border-style", "solid"); $("#obj4687").css("border-radius", "10px"); $("#obj4687").css("-webkit-border-radius", "10px"); $("#obj4687").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj4940_droppedInsideTargetActions_2_runningActionsCount = window.obj4940_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj4940_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj4940_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj4940_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj4940_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj4940_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4940_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj4940").trigger("obj4940_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4940) {
				console.warn("de-queueing event obj4940." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4940").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4940_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj4693 
hide_5100();
function hide_5100() {
	var selector = "#obj4693";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj4940_droppedInsideTargetActions_2_runningActionsCount = obj4940_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj4940_droppedInsideTargetActions_2_runningActionsCount = window.obj4940_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj4940_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj4940_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj4940_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj4940_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_5100(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj4940_droppedInsideTargetActions_2_runningActionsCount = window.obj4940_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj4940_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj4940_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj4940_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj4940_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj4940_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4940_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj4940").trigger("obj4940_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4940) {
				console.warn("de-queueing event obj4940." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4940").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4940_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_5101();
function runjs_5101() {
	window.obj4940_droppedInsideTargetActions_2_runningActionsCount = obj4940_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj4940").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj4940_droppedInsideTargetActions_2_runningActionsCount = window.obj4940_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj4940_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj4940_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj4940_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj4940_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj4940_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4940_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj4940").trigger("obj4940_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4940) {
				console.warn("de-queueing event obj4940." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4940").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4940_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_5102();
function switchText_5102() {
	window.obj4940_droppedInsideTargetActions_2_runningActionsCount = obj4940_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj4938_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj4938_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj4938").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj4938_content");
			setTimeout(function () {
				window.obj4940_droppedInsideTargetActions_2_runningActionsCount = window.obj4940_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj4940_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj4940_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj4940_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj4940_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj4938 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj4940_droppedInsideTargetActions_2_runningActionsCount = window.obj4940_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj4940_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj4940_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj4940_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj4940_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj4940_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4940_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj4940").trigger("obj4940_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4940) {
				console.warn("de-queueing event obj4940." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4940").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4940_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj4940 
move_5103();
function move_5103() {
	window.obj4940_droppedInsideTargetActions_2_runningActionsCount = obj4940_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj4940");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 230;
	var moveY = 567;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj4940_droppedInsideTargetActions_2_runningActionsCount = window.obj4940_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj4940_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj4940_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj4940_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj4940_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj4940_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4940_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj4940").trigger("obj4940_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4940) {
				console.warn("de-queueing event obj4940." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4940").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4940_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_5104();
function runjs_5104() {
	window.obj4940_droppedInsideTargetActions_2_runningActionsCount = obj4940_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj4687").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj4940_droppedInsideTargetActions_2_runningActionsCount = window.obj4940_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj4940_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj4940_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj4940_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj4940_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj4940_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4940_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj4940").trigger("obj4940_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4940) {
				console.warn("de-queueing event obj4940." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4940").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4940_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_5105();
function runjs_5105() {
	window.obj4940_droppedInsideTargetActions_2_runningActionsCount = obj4940_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj4687").css("border-color", "#000000"); $("#obj4687").css("border-width", "1px"); $("#obj4687").css("border-style", "solid"); $("#obj4687").css("border-radius", "10px"); $("#obj4687").css("-webkit-border-radius", "10px"); $("#obj4687").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj4940_droppedInsideTargetActions_2_runningActionsCount = window.obj4940_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj4940_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj4940_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj4940_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj4940_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj4940_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4940_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj4940").trigger("obj4940_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4940) {
				console.warn("de-queueing event obj4940." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4940").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4940_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj4693
(function(){
	window.obj4940_droppedInsideTargetActions_2_runningActionsCount = obj4940_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj4693";
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
					window.obj4940_droppedInsideTargetActions_2_runningActionsCount = window.obj4940_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj4940_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj4940_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj4940_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj4940_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj4940_droppedInsideTargetActions_2_runningActionsCount = window.obj4940_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj4940_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj4940_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj4940_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj4940_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj4940_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4940_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj4940").trigger("obj4940_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4940) {
				console.warn("de-queueing event obj4940." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4940").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4940_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_5107();
function runjs_5107() {
	window.obj4940_droppedInsideTargetActions_2_runningActionsCount = obj4940_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj4940").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj4940_droppedInsideTargetActions_2_runningActionsCount = window.obj4940_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj4940_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj4940_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj4940_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj4940_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj4940_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4940_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj4940").trigger("obj4940_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4940) {
				console.warn("de-queueing event obj4940." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4940").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4940_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_5108();
function runjs_5108() {
	window.obj4940_droppedInsideTargetActions_2_runningActionsCount = obj4940_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj4940").css("border-color", "rgba(0,0,0,0)"); $("#obj4940").css("border-width", "0px"); $("#obj4940").css("border-style", "solid"); $("#obj4940").css("border-radius", "10px"); $("#obj4940").css("-webkit-border-radius", "10px"); $("#obj4940").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj4940_droppedInsideTargetActions_2_runningActionsCount = window.obj4940_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj4940_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj4940_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj4940_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj4940_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj4940_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4940_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj4940").trigger("obj4940_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4940) {
				console.warn("de-queueing event obj4940." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4940").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4940_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj5053 
playAudio_5109();
function playAudio_5109() {
	window.obj4940_droppedInsideTargetActions_2_runningActionsCount = obj4940_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj5053")[0];
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
		    window.obj4940_droppedInsideTargetActions_2_runningActionsCount = window.obj4940_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj4940_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj4940_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj4940_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj4940_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj4940_droppedInsideTargetActions_2_runningActionsCount = window.obj4940_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj4940_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj4940_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj4940_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj4940_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj4940_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4940_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj4940").trigger("obj4940_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4940) {
				console.warn("de-queueing event obj4940." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4940").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4940_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_5110();
function switchText_5110() {
	window.obj4940_droppedInsideTargetActions_2_runningActionsCount = obj4940_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj4938_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj4938_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj4938").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj4938_content");
			setTimeout(function () {
				window.obj4940_droppedInsideTargetActions_2_runningActionsCount = window.obj4940_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj4940_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj4940_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj4940_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj4940_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj4938 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj4940_droppedInsideTargetActions_2_runningActionsCount = window.obj4940_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj4940_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj4940_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj4940_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj4940_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj4940_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4940_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj4940").trigger("obj4940_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4940) {
				console.warn("de-queueing event obj4940." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4940").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4940_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj4940_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4940_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj4940").trigger("obj4940_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4940) {
				console.warn("de-queueing event obj4940." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4940").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4940_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_5047();
function runjs_5047() {
	window.obj4940_droppedInsideTargetActions_runningActionsCount = obj4940_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj4689").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj4940_droppedInsideTargetActions_runningActionsCount = window.obj4940_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj4940_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj4940_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj4940_droppedInsideTargetActions_runningActionsCount == 0) {
	obj4940_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj4940_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4940_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj4940").trigger("obj4940_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4940) {
				console.warn("de-queueing event obj4940." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4940").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4940_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_5051();
function switchText_5051() {
	window.obj4940_droppedInsideTargetActions_runningActionsCount = obj4940_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj4938_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj4938_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj4938").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj4938_content");
			setTimeout(function () {
				window.obj4940_droppedInsideTargetActions_runningActionsCount = window.obj4940_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj4940_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj4940_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj4940_droppedInsideTargetActions_runningActionsCount == 0) {
	obj4940_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj4938 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj4940_droppedInsideTargetActions_runningActionsCount = window.obj4940_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj4940_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj4940_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj4940_droppedInsideTargetActions_runningActionsCount == 0) {
	obj4940_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj4940_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4940_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj4940").trigger("obj4940_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4940) {
				console.warn("de-queueing event obj4940." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4940").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4940_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_5048();
function runjs_5048() {
	window.obj4940_droppedInsideTargetActions_runningActionsCount = obj4940_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj4689").css("border-color", "#058E3F"); $("#obj4689").css("border-width", "2px"); $("#obj4689").css("border-style", "solid"); $("#obj4689").css("border-radius", "10px"); $("#obj4689").css("-webkit-border-radius", "10px"); $("#obj4689").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj4940_droppedInsideTargetActions_runningActionsCount = window.obj4940_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj4940_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj4940_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj4940_droppedInsideTargetActions_runningActionsCount == 0) {
	obj4940_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj4940_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4940_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj4940").trigger("obj4940_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4940) {
				console.warn("de-queueing event obj4940." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4940").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4940_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj4691 
hide_5049();
function hide_5049() {
	var selector = "#obj4691";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj4940_droppedInsideTargetActions_runningActionsCount = obj4940_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj4940_droppedInsideTargetActions_runningActionsCount = window.obj4940_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj4940_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj4940_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj4940_droppedInsideTargetActions_runningActionsCount == 0) {
	obj4940_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_5049(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj4940_droppedInsideTargetActions_runningActionsCount = window.obj4940_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj4940_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj4940_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj4940_droppedInsideTargetActions_runningActionsCount == 0) {
	obj4940_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj4940_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4940_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj4940").trigger("obj4940_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4940) {
				console.warn("de-queueing event obj4940." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4940").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4940_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_5050();
function runjs_5050() {
	window.obj4940_droppedInsideTargetActions_runningActionsCount = obj4940_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj4940").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj4940_droppedInsideTargetActions_runningActionsCount = window.obj4940_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj4940_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj4940_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj4940_droppedInsideTargetActions_runningActionsCount == 0) {
	obj4940_droppedInsideTargetActions_actionGroup5();
}
	}, 1);
}







};
obj4940_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4940_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj4940").trigger("obj4940_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4940) {
				console.warn("de-queueing event obj4940." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4940").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4940_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj5054 
playAudio_5052();
function playAudio_5052() {
	window.obj4940_droppedInsideTargetActions_runningActionsCount = obj4940_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj5054")[0];
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
		    window.obj4940_droppedInsideTargetActions_runningActionsCount = window.obj4940_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj4940_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj4940_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj4940_droppedInsideTargetActions_runningActionsCount == 0) {
	obj4940_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj4940_droppedInsideTargetActions_runningActionsCount = window.obj4940_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj4940_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj4940_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj4940_droppedInsideTargetActions_runningActionsCount == 0) {
	obj4940_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj4940_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4940_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj4940").trigger("obj4940_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4940) {
				console.warn("de-queueing event obj4940." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4940").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4940_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90112();
function switchText_90112() {
	window.obj4940_droppedInsideTargetActions_runningActionsCount = obj4940_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj4938_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj4938_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj4938").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj4938_content");
			setTimeout(function () {
				window.obj4940_droppedInsideTargetActions_runningActionsCount = window.obj4940_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj4940_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj4940_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj4940_droppedInsideTargetActions_runningActionsCount == 0) {
	obj4940_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj4938 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj4940_droppedInsideTargetActions_runningActionsCount = window.obj4940_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj4940_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj4940_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj4940_droppedInsideTargetActions_runningActionsCount == 0) {
	obj4940_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj4940_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4940_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj4940").trigger("obj4940_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4940) {
				console.warn("de-queueing event obj4940." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4940").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4940_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj4993_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4993_onTouchDown_activeActionGroupIndex = -1;
		$("#obj4993").trigger("obj4993_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4993) {
				console.warn("de-queueing event obj4993." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4993").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4993_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj4993");
//	action: dragDrop
//	target: obj4993 
dragDrop_4996();
function dragDrop_4996() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj4993_onTouchDown_runningActionsCount = obj4993_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj4993');
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
	  	containerNode = $('#obj4665');
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
    	window.obj4993_onTouchDown_runningActionsCount = window.obj4993_onTouchDown_runningActionsCount - 1;
if (window.obj4993_onTouchDown_runningActionsCount < 0) {
	window.obj4993_onTouchDown_runningActionsCount = 0;
} else if (window.obj4993_onTouchDown_runningActionsCount == 0) {
	obj4993_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj4685","#obj4689","#obj4687");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_4996 = false;
    	var dropped_id_4996;
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
					dropped_4996 = true;
					dropped_id_4996 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_4996) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj4993").trigger('SCActionDragDrop4996_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj4993_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4993_onTouchDown_activeActionGroupIndex = -1;
		$("#obj4993").trigger("obj4993_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4993) {
				console.warn("de-queueing event obj4993." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4993").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4993_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj4993_SCActionDragDrop4996_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4993_SCActionDragDrop4996_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj4993").trigger("obj4993_SCActionDragDrop4996_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4993) {
				console.warn("de-queueing event obj4993." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4993").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4993_SCActionDragDrop4996_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj4993 
move_92168();
function move_92168() {
	window.obj4993_SCActionDragDrop4996_droppedOutsideTargetActions_runningActionsCount = obj4993_SCActionDragDrop4996_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj4993");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 391;
	var moveY = 567;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj4993_SCActionDragDrop4996_droppedOutsideTargetActions_runningActionsCount = window.obj4993_SCActionDragDrop4996_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj4993_SCActionDragDrop4996_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj4993_SCActionDragDrop4996_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj4993_SCActionDragDrop4996_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj4993_SCActionDragDrop4996_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj4993_SCActionDragDrop4996_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4993_SCActionDragDrop4996_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj4993").trigger("obj4993_SCActionDragDrop4996_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4993) {
				console.warn("de-queueing event obj4993." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4993").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4993_SCActionDragDrop4996_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj4993_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4993_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj4993").trigger("obj4993_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4993) {
				console.warn("de-queueing event obj4993." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4993").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4993_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_5140();
function runjs_5140() {
	window.obj4993_droppedInsideTargetActions_3_runningActionsCount = obj4993_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj4687").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj4993_droppedInsideTargetActions_3_runningActionsCount = window.obj4993_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj4993_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj4993_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj4993_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj4993_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj4993_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4993_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj4993").trigger("obj4993_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4993) {
				console.warn("de-queueing event obj4993." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4993").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4993_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_5141();
function runjs_5141() {
	window.obj4993_droppedInsideTargetActions_3_runningActionsCount = obj4993_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj4687").css("border-color", "#C00000"); $("#obj4687").css("border-width", "2px"); $("#obj4687").css("border-style", "solid"); $("#obj4687").css("border-radius", "10px"); $("#obj4687").css("-webkit-border-radius", "10px"); $("#obj4687").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj4993_droppedInsideTargetActions_3_runningActionsCount = window.obj4993_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj4993_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj4993_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj4993_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj4993_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj4993_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4993_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj4993").trigger("obj4993_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4993) {
				console.warn("de-queueing event obj4993." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4993").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4993_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj4693 
hide_5142();
function hide_5142() {
	var selector = "#obj4693";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj4993_droppedInsideTargetActions_3_runningActionsCount = obj4993_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj4993_droppedInsideTargetActions_3_runningActionsCount = window.obj4993_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj4993_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj4993_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj4993_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj4993_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_5142(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj4993_droppedInsideTargetActions_3_runningActionsCount = window.obj4993_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj4993_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj4993_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj4993_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj4993_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj4993_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4993_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj4993").trigger("obj4993_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4993) {
				console.warn("de-queueing event obj4993." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4993").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4993_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_5143();
function runjs_5143() {
	window.obj4993_droppedInsideTargetActions_3_runningActionsCount = obj4993_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj4993").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj4993_droppedInsideTargetActions_3_runningActionsCount = window.obj4993_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj4993_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj4993_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj4993_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj4993_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj4993_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4993_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj4993").trigger("obj4993_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4993) {
				console.warn("de-queueing event obj4993." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4993").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4993_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_5144();
function switchText_5144() {
	window.obj4993_droppedInsideTargetActions_3_runningActionsCount = obj4993_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj4938_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj4938_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj4938").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj4938_content");
			setTimeout(function () {
				window.obj4993_droppedInsideTargetActions_3_runningActionsCount = window.obj4993_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj4993_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj4993_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj4993_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj4993_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj4938 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj4993_droppedInsideTargetActions_3_runningActionsCount = window.obj4993_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj4993_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj4993_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj4993_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj4993_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj4993_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4993_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj4993").trigger("obj4993_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4993) {
				console.warn("de-queueing event obj4993." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4993").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4993_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj4993 
move_5145();
function move_5145() {
	window.obj4993_droppedInsideTargetActions_3_runningActionsCount = obj4993_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj4993");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 391;
	var moveY = 567;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj4993_droppedInsideTargetActions_3_runningActionsCount = window.obj4993_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj4993_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj4993_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj4993_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj4993_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj4993_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4993_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj4993").trigger("obj4993_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4993) {
				console.warn("de-queueing event obj4993." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4993").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4993_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_5146();
function runjs_5146() {
	window.obj4993_droppedInsideTargetActions_3_runningActionsCount = obj4993_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj4687").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj4993_droppedInsideTargetActions_3_runningActionsCount = window.obj4993_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj4993_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj4993_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj4993_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj4993_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj4993_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4993_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj4993").trigger("obj4993_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4993) {
				console.warn("de-queueing event obj4993." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4993").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4993_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_5147();
function runjs_5147() {
	window.obj4993_droppedInsideTargetActions_3_runningActionsCount = obj4993_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj4687").css("border-color", "#000000"); $("#obj4687").css("border-width", "1px"); $("#obj4687").css("border-style", "solid"); $("#obj4687").css("border-radius", "10px"); $("#obj4687").css("-webkit-border-radius", "10px"); $("#obj4687").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj4993_droppedInsideTargetActions_3_runningActionsCount = window.obj4993_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj4993_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj4993_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj4993_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj4993_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj4993_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4993_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj4993").trigger("obj4993_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4993) {
				console.warn("de-queueing event obj4993." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4993").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4993_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj4693
(function(){
	window.obj4993_droppedInsideTargetActions_3_runningActionsCount = obj4993_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj4693";
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
					window.obj4993_droppedInsideTargetActions_3_runningActionsCount = window.obj4993_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj4993_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj4993_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj4993_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj4993_droppedInsideTargetActions_3_actionGroup9();
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
				window.obj4993_droppedInsideTargetActions_3_runningActionsCount = window.obj4993_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj4993_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj4993_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj4993_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj4993_droppedInsideTargetActions_3_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj4993_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4993_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj4993").trigger("obj4993_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4993) {
				console.warn("de-queueing event obj4993." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4993").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4993_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_5149();
function runjs_5149() {
	window.obj4993_droppedInsideTargetActions_3_runningActionsCount = obj4993_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj4993").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj4993_droppedInsideTargetActions_3_runningActionsCount = window.obj4993_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj4993_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj4993_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj4993_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj4993_droppedInsideTargetActions_3_actionGroup10();
}
	}, 1);
}







};
obj4993_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4993_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj4993").trigger("obj4993_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4993) {
				console.warn("de-queueing event obj4993." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4993").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4993_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_5150();
function runjs_5150() {
	window.obj4993_droppedInsideTargetActions_3_runningActionsCount = obj4993_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj4993").css("border-color", "rgba(0,0,0,0)"); $("#obj4993").css("border-width", "0px"); $("#obj4993").css("border-style", "solid"); $("#obj4993").css("border-radius", "10px"); $("#obj4993").css("-webkit-border-radius", "10px"); $("#obj4993").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj4993_droppedInsideTargetActions_3_runningActionsCount = window.obj4993_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj4993_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj4993_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj4993_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj4993_droppedInsideTargetActions_3_actionGroup11();
}
	}, 1);
}







};
obj4993_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4993_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj4993").trigger("obj4993_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4993) {
				console.warn("de-queueing event obj4993." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4993").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4993_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj5053 
playAudio_5151();
function playAudio_5151() {
	window.obj4993_droppedInsideTargetActions_3_runningActionsCount = obj4993_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj5053")[0];
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
		    window.obj4993_droppedInsideTargetActions_3_runningActionsCount = window.obj4993_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj4993_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj4993_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj4993_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj4993_droppedInsideTargetActions_3_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj4993_droppedInsideTargetActions_3_runningActionsCount = window.obj4993_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj4993_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj4993_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj4993_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj4993_droppedInsideTargetActions_3_actionGroup12();
}
	}
}









};
obj4993_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4993_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj4993").trigger("obj4993_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4993) {
				console.warn("de-queueing event obj4993." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4993").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4993_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_5152();
function switchText_5152() {
	window.obj4993_droppedInsideTargetActions_3_runningActionsCount = obj4993_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj4938_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj4938_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj4938").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj4938_content");
			setTimeout(function () {
				window.obj4993_droppedInsideTargetActions_3_runningActionsCount = window.obj4993_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj4993_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj4993_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj4993_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj4993_droppedInsideTargetActions_3_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj4938 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj4993_droppedInsideTargetActions_3_runningActionsCount = window.obj4993_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj4993_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj4993_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj4993_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj4993_droppedInsideTargetActions_3_actionGroup13();
}
		}, 1);
	}
}






};
obj4993_droppedInsideTargetActions_3_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4993_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj4993").trigger("obj4993_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4993) {
				console.warn("de-queueing event obj4993." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4993").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4993_droppedInsideTargetActions_3_activeActionGroupIndex = 13;
	





















};
obj4993_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4993_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj4993").trigger("obj4993_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4993) {
				console.warn("de-queueing event obj4993." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4993").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4993_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_5126();
function runjs_5126() {
	window.obj4993_droppedInsideTargetActions_2_runningActionsCount = obj4993_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj4689").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj4993_droppedInsideTargetActions_2_runningActionsCount = window.obj4993_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj4993_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj4993_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj4993_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj4993_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj4993_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4993_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj4993").trigger("obj4993_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4993) {
				console.warn("de-queueing event obj4993." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4993").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4993_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_5127();
function runjs_5127() {
	window.obj4993_droppedInsideTargetActions_2_runningActionsCount = obj4993_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj4689").css("border-color", "#C00000"); $("#obj4689").css("border-width", "2px"); $("#obj4689").css("border-style", "solid"); $("#obj4689").css("border-radius", "10px"); $("#obj4689").css("-webkit-border-radius", "10px"); $("#obj4689").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj4993_droppedInsideTargetActions_2_runningActionsCount = window.obj4993_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj4993_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj4993_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj4993_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj4993_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj4993_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4993_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj4993").trigger("obj4993_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4993) {
				console.warn("de-queueing event obj4993." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4993").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4993_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj4691 
hide_5128();
function hide_5128() {
	var selector = "#obj4691";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj4993_droppedInsideTargetActions_2_runningActionsCount = obj4993_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj4993_droppedInsideTargetActions_2_runningActionsCount = window.obj4993_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj4993_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj4993_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj4993_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj4993_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_5128(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj4993_droppedInsideTargetActions_2_runningActionsCount = window.obj4993_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj4993_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj4993_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj4993_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj4993_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj4993_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4993_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj4993").trigger("obj4993_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4993) {
				console.warn("de-queueing event obj4993." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4993").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4993_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_5129();
function runjs_5129() {
	window.obj4993_droppedInsideTargetActions_2_runningActionsCount = obj4993_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj4993").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj4993_droppedInsideTargetActions_2_runningActionsCount = window.obj4993_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj4993_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj4993_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj4993_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj4993_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj4993_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4993_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj4993").trigger("obj4993_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4993) {
				console.warn("de-queueing event obj4993." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4993").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4993_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_5130();
function switchText_5130() {
	window.obj4993_droppedInsideTargetActions_2_runningActionsCount = obj4993_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj4938_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj4938_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj4938").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj4938_content");
			setTimeout(function () {
				window.obj4993_droppedInsideTargetActions_2_runningActionsCount = window.obj4993_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj4993_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj4993_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj4993_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj4993_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj4938 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj4993_droppedInsideTargetActions_2_runningActionsCount = window.obj4993_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj4993_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj4993_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj4993_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj4993_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj4993_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4993_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj4993").trigger("obj4993_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4993) {
				console.warn("de-queueing event obj4993." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4993").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4993_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj4993 
move_5131();
function move_5131() {
	window.obj4993_droppedInsideTargetActions_2_runningActionsCount = obj4993_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj4993");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 391;
	var moveY = 567;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj4993_droppedInsideTargetActions_2_runningActionsCount = window.obj4993_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj4993_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj4993_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj4993_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj4993_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj4993_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4993_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj4993").trigger("obj4993_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4993) {
				console.warn("de-queueing event obj4993." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4993").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4993_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_5132();
function runjs_5132() {
	window.obj4993_droppedInsideTargetActions_2_runningActionsCount = obj4993_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj4689").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj4993_droppedInsideTargetActions_2_runningActionsCount = window.obj4993_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj4993_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj4993_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj4993_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj4993_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj4993_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4993_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj4993").trigger("obj4993_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4993) {
				console.warn("de-queueing event obj4993." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4993").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4993_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_5133();
function runjs_5133() {
	window.obj4993_droppedInsideTargetActions_2_runningActionsCount = obj4993_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj4689").css("border-color", "#000000"); $("#obj4689").css("border-width", "1px"); $("#obj4689").css("border-style", "solid"); $("#obj4689").css("border-radius", "10px"); $("#obj4689").css("-webkit-border-radius", "10px"); $("#obj4689").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj4993_droppedInsideTargetActions_2_runningActionsCount = window.obj4993_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj4993_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj4993_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj4993_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj4993_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj4993_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4993_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj4993").trigger("obj4993_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4993) {
				console.warn("de-queueing event obj4993." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4993").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4993_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj4691
(function(){
	window.obj4993_droppedInsideTargetActions_2_runningActionsCount = obj4993_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj4691";
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
					window.obj4993_droppedInsideTargetActions_2_runningActionsCount = window.obj4993_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj4993_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj4993_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj4993_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj4993_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj4993_droppedInsideTargetActions_2_runningActionsCount = window.obj4993_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj4993_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj4993_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj4993_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj4993_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj4993_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4993_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj4993").trigger("obj4993_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4993) {
				console.warn("de-queueing event obj4993." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4993").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4993_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_5135();
function runjs_5135() {
	window.obj4993_droppedInsideTargetActions_2_runningActionsCount = obj4993_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj4993").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj4993_droppedInsideTargetActions_2_runningActionsCount = window.obj4993_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj4993_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj4993_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj4993_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj4993_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj4993_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4993_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj4993").trigger("obj4993_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4993) {
				console.warn("de-queueing event obj4993." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4993").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4993_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_5136();
function runjs_5136() {
	window.obj4993_droppedInsideTargetActions_2_runningActionsCount = obj4993_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj4993").css("border-color", "rgba(0,0,0,0)"); $("#obj4993").css("border-width", "0px"); $("#obj4993").css("border-style", "solid"); $("#obj4993").css("border-radius", "10px"); $("#obj4993").css("-webkit-border-radius", "10px"); $("#obj4993").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj4993_droppedInsideTargetActions_2_runningActionsCount = window.obj4993_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj4993_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj4993_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj4993_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj4993_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj4993_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4993_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj4993").trigger("obj4993_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4993) {
				console.warn("de-queueing event obj4993." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4993").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4993_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj5053 
playAudio_5137();
function playAudio_5137() {
	window.obj4993_droppedInsideTargetActions_2_runningActionsCount = obj4993_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj5053")[0];
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
		    window.obj4993_droppedInsideTargetActions_2_runningActionsCount = window.obj4993_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj4993_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj4993_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj4993_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj4993_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj4993_droppedInsideTargetActions_2_runningActionsCount = window.obj4993_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj4993_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj4993_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj4993_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj4993_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj4993_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4993_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj4993").trigger("obj4993_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4993) {
				console.warn("de-queueing event obj4993." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4993").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4993_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_5138();
function switchText_5138() {
	window.obj4993_droppedInsideTargetActions_2_runningActionsCount = obj4993_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj4938_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj4938_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj4938").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj4938_content");
			setTimeout(function () {
				window.obj4993_droppedInsideTargetActions_2_runningActionsCount = window.obj4993_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj4993_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj4993_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj4993_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj4993_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj4938 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj4993_droppedInsideTargetActions_2_runningActionsCount = window.obj4993_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj4993_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj4993_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj4993_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj4993_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj4993_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4993_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj4993").trigger("obj4993_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4993) {
				console.warn("de-queueing event obj4993." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4993").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4993_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj4993_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4993_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj4993").trigger("obj4993_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4993) {
				console.warn("de-queueing event obj4993." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4993").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4993_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_5063();
function runjs_5063() {
	window.obj4993_droppedInsideTargetActions_runningActionsCount = obj4993_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj4685").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj4993_droppedInsideTargetActions_runningActionsCount = window.obj4993_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj4993_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj4993_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj4993_droppedInsideTargetActions_runningActionsCount == 0) {
	obj4993_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj4993_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4993_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj4993").trigger("obj4993_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4993) {
				console.warn("de-queueing event obj4993." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4993").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4993_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_5067();
function switchText_5067() {
	window.obj4993_droppedInsideTargetActions_runningActionsCount = obj4993_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj4938_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj4938_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj4938").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj4938_content");
			setTimeout(function () {
				window.obj4993_droppedInsideTargetActions_runningActionsCount = window.obj4993_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj4993_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj4993_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj4993_droppedInsideTargetActions_runningActionsCount == 0) {
	obj4993_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj4938 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj4993_droppedInsideTargetActions_runningActionsCount = window.obj4993_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj4993_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj4993_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj4993_droppedInsideTargetActions_runningActionsCount == 0) {
	obj4993_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj4993_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4993_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj4993").trigger("obj4993_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4993) {
				console.warn("de-queueing event obj4993." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4993").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4993_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_5064();
function runjs_5064() {
	window.obj4993_droppedInsideTargetActions_runningActionsCount = obj4993_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj4685").css("border-color", "#058E3F"); $("#obj4685").css("border-width", "2px"); $("#obj4685").css("border-style", "solid"); $("#obj4685").css("border-radius", "10px"); $("#obj4685").css("-webkit-border-radius", "10px"); $("#obj4685").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj4993_droppedInsideTargetActions_runningActionsCount = window.obj4993_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj4993_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj4993_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj4993_droppedInsideTargetActions_runningActionsCount == 0) {
	obj4993_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj4993_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4993_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj4993").trigger("obj4993_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4993) {
				console.warn("de-queueing event obj4993." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4993").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4993_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj4695 
hide_5065();
function hide_5065() {
	var selector = "#obj4695";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj4993_droppedInsideTargetActions_runningActionsCount = obj4993_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj4993_droppedInsideTargetActions_runningActionsCount = window.obj4993_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj4993_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj4993_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj4993_droppedInsideTargetActions_runningActionsCount == 0) {
	obj4993_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_5065(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj4993_droppedInsideTargetActions_runningActionsCount = window.obj4993_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj4993_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj4993_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj4993_droppedInsideTargetActions_runningActionsCount == 0) {
	obj4993_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj4993_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4993_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj4993").trigger("obj4993_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4993) {
				console.warn("de-queueing event obj4993." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4993").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4993_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_5066();
function runjs_5066() {
	window.obj4993_droppedInsideTargetActions_runningActionsCount = obj4993_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj4993").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj4993_droppedInsideTargetActions_runningActionsCount = window.obj4993_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj4993_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj4993_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj4993_droppedInsideTargetActions_runningActionsCount == 0) {
	obj4993_droppedInsideTargetActions_actionGroup5();
}
	}, 1);
}







};
obj4993_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4993_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj4993").trigger("obj4993_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4993) {
				console.warn("de-queueing event obj4993." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4993").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4993_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj5054 
playAudio_5068();
function playAudio_5068() {
	window.obj4993_droppedInsideTargetActions_runningActionsCount = obj4993_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj5054")[0];
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
		    window.obj4993_droppedInsideTargetActions_runningActionsCount = window.obj4993_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj4993_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj4993_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj4993_droppedInsideTargetActions_runningActionsCount == 0) {
	obj4993_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj4993_droppedInsideTargetActions_runningActionsCount = window.obj4993_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj4993_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj4993_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj4993_droppedInsideTargetActions_runningActionsCount == 0) {
	obj4993_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj4993_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4993_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj4993").trigger("obj4993_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4993) {
				console.warn("de-queueing event obj4993." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4993").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4993_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90113();
function switchText_90113() {
	window.obj4993_droppedInsideTargetActions_runningActionsCount = obj4993_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj4938_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj4938_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj4938").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj4938_content");
			setTimeout(function () {
				window.obj4993_droppedInsideTargetActions_runningActionsCount = window.obj4993_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj4993_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj4993_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj4993_droppedInsideTargetActions_runningActionsCount == 0) {
	obj4993_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj4938 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj4993_droppedInsideTargetActions_runningActionsCount = window.obj4993_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj4993_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj4993_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj4993_droppedInsideTargetActions_runningActionsCount == 0) {
	obj4993_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj4993_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4993_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj4993").trigger("obj4993_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4993) {
				console.warn("de-queueing event obj4993." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4993").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4993_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj65390_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj65390_onTap_activeActionGroupIndex = -1;
		$("#obj65390").trigger("obj65390_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65390) {
				console.warn("de-queueing event obj65390." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65390").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65390_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj65390 
hide_65393();
function hide_65393() {
	var selector = "#obj65390";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj65390_onTap_runningActionsCount = obj65390_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj65390_onTap_runningActionsCount = window.obj65390_onTap_runningActionsCount - 1;
if (window.obj65390_onTap_runningActionsCount < 0) {
	window.obj65390_onTap_runningActionsCount = 0;
} else if (window.obj65390_onTap_runningActionsCount == 0) {
	obj65390_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_65393(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj65390_onTap_runningActionsCount = window.obj65390_onTap_runningActionsCount - 1;
if (window.obj65390_onTap_runningActionsCount < 0) {
	window.obj65390_onTap_runningActionsCount = 0;
} else if (window.obj65390_onTap_runningActionsCount == 0) {
	obj65390_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj65396 
stopMovie_65392();
function stopMovie_65392() {
	window.obj65390_onTap_runningActionsCount = obj65390_onTap_runningActionsCount + 1;
	var myVideo = $("#obj65396")[0];
	myVideo.pause();
	window.obj65390_onTap_runningActionsCount = window.obj65390_onTap_runningActionsCount - 1;
if (window.obj65390_onTap_runningActionsCount < 0) {
	window.obj65390_onTap_runningActionsCount = 0;
} else if (window.obj65390_onTap_runningActionsCount == 0) {
	obj65390_onTap_actionGroup1();
}
}
















};
obj65390_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj65390_onTap_activeActionGroupIndex = -1;
		$("#obj65390").trigger("obj65390_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65390) {
				console.warn("de-queueing event obj65390." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65390").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65390_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj65382
(function(){
	window.obj65390_onTap_runningActionsCount = obj65390_onTap_runningActionsCount + 1;

	var selector = "#obj65382";
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
					window.obj65390_onTap_runningActionsCount = window.obj65390_onTap_runningActionsCount - 1;
if (window.obj65390_onTap_runningActionsCount < 0) {
	window.obj65390_onTap_runningActionsCount = 0;
} else if (window.obj65390_onTap_runningActionsCount == 0) {
	obj65390_onTap_actionGroup2();
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
				window.obj65390_onTap_runningActionsCount = window.obj65390_onTap_runningActionsCount - 1;
if (window.obj65390_onTap_runningActionsCount < 0) {
	window.obj65390_onTap_runningActionsCount = 0;
} else if (window.obj65390_onTap_runningActionsCount == 0) {
	obj65390_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj65390_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj65390_onTap_activeActionGroupIndex = -1;
		$("#obj65390").trigger("obj65390_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65390) {
				console.warn("de-queueing event obj65390." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65390").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65390_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj65396 
move_65395();
function move_65395() {
	window.obj65390_onTap_runningActionsCount = obj65390_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj65396");
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
			window.obj65390_onTap_runningActionsCount = window.obj65390_onTap_runningActionsCount - 1;
if (window.obj65390_onTap_runningActionsCount < 0) {
	window.obj65390_onTap_runningActionsCount = 0;
} else if (window.obj65390_onTap_runningActionsCount == 0) {
	obj65390_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj65390_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj65390_onTap_activeActionGroupIndex = -1;
		$("#obj65390").trigger("obj65390_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65390) {
				console.warn("de-queueing event obj65390." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65390").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65390_onTap_activeActionGroupIndex = 3;
	





















};
obj65382_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj65382_onTap_activeActionGroupIndex = -1;
		$("#obj65382").trigger("obj65382_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65382) {
				console.warn("de-queueing event obj65382." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65382").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65382_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj65382 
hide_65385();
function hide_65385() {
	var selector = "#obj65382";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj65382_onTap_runningActionsCount = obj65382_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj65382_onTap_runningActionsCount = window.obj65382_onTap_runningActionsCount - 1;
if (window.obj65382_onTap_runningActionsCount < 0) {
	window.obj65382_onTap_runningActionsCount = 0;
} else if (window.obj65382_onTap_runningActionsCount == 0) {
	obj65382_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_65385(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj65382_onTap_runningActionsCount = window.obj65382_onTap_runningActionsCount - 1;
if (window.obj65382_onTap_runningActionsCount < 0) {
	window.obj65382_onTap_runningActionsCount = 0;
} else if (window.obj65382_onTap_runningActionsCount == 0) {
	obj65382_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj65396 
playPauseMovie_65384();
function playPauseMovie_65384() {
	window.obj65382_onTap_runningActionsCount = obj65382_onTap_runningActionsCount + 1;
	var myVideo = $("#obj65396")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj65382_onTap_runningActionsCount = window.obj65382_onTap_runningActionsCount - 1;
if (window.obj65382_onTap_runningActionsCount < 0) {
	window.obj65382_onTap_runningActionsCount = 0;
} else if (window.obj65382_onTap_runningActionsCount == 0) {
	obj65382_onTap_actionGroup1();
}
}

















};
obj65382_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj65382_onTap_activeActionGroupIndex = -1;
		$("#obj65382").trigger("obj65382_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65382) {
				console.warn("de-queueing event obj65382." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65382").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65382_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj65390
(function(){
	window.obj65382_onTap_runningActionsCount = obj65382_onTap_runningActionsCount + 1;

	var selector = "#obj65390";
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
					window.obj65382_onTap_runningActionsCount = window.obj65382_onTap_runningActionsCount - 1;
if (window.obj65382_onTap_runningActionsCount < 0) {
	window.obj65382_onTap_runningActionsCount = 0;
} else if (window.obj65382_onTap_runningActionsCount == 0) {
	obj65382_onTap_actionGroup2();
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
				window.obj65382_onTap_runningActionsCount = window.obj65382_onTap_runningActionsCount - 1;
if (window.obj65382_onTap_runningActionsCount < 0) {
	window.obj65382_onTap_runningActionsCount = 0;
} else if (window.obj65382_onTap_runningActionsCount == 0) {
	obj65382_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj65382_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj65382_onTap_activeActionGroupIndex = -1;
		$("#obj65382").trigger("obj65382_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65382) {
				console.warn("de-queueing event obj65382." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65382").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65382_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj65396 
move_65387();
function move_65387() {
	window.obj65382_onTap_runningActionsCount = obj65382_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj65396");
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
			window.obj65382_onTap_runningActionsCount = window.obj65382_onTap_runningActionsCount - 1;
if (window.obj65382_onTap_runningActionsCount < 0) {
	window.obj65382_onTap_runningActionsCount = 0;
} else if (window.obj65382_onTap_runningActionsCount == 0) {
	obj65382_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj65382_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj65382_onTap_activeActionGroupIndex = -1;
		$("#obj65382").trigger("obj65382_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65382) {
				console.warn("de-queueing event obj65382." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65382").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65382_onTap_activeActionGroupIndex = 3;
	





















};
obj89828_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89828_onTap_activeActionGroupIndex = -1;
		$("#obj89828").trigger("obj89828_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89828) {
				console.warn("de-queueing event obj89828." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89828").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89828_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj89833 
stopAudio_89830();
function stopAudio_89830() {
	window.obj89828_onTap_runningActionsCount = obj89828_onTap_runningActionsCount + 1;
	var myAudio = $("#obj89833")[0];
	myAudio.pause();
	window.obj89828_onTap_runningActionsCount = window.obj89828_onTap_runningActionsCount - 1;
if (window.obj89828_onTap_runningActionsCount < 0) {
	window.obj89828_onTap_runningActionsCount = 0;
} else if (window.obj89828_onTap_runningActionsCount == 0) {
	obj89828_onTap_actionGroup1();
}
}








};
obj89828_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89828_onTap_activeActionGroupIndex = -1;
		$("#obj89828").trigger("obj89828_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89828) {
				console.warn("de-queueing event obj89828." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89828").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89828_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj89828 
hide_89831();
function hide_89831() {
	var selector = "#obj89828";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj89828_onTap_runningActionsCount = obj89828_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj89828_onTap_runningActionsCount = window.obj89828_onTap_runningActionsCount - 1;
if (window.obj89828_onTap_runningActionsCount < 0) {
	window.obj89828_onTap_runningActionsCount = 0;
} else if (window.obj89828_onTap_runningActionsCount == 0) {
	obj89828_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_89831(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj89828_onTap_runningActionsCount = window.obj89828_onTap_runningActionsCount - 1;
if (window.obj89828_onTap_runningActionsCount < 0) {
	window.obj89828_onTap_runningActionsCount = 0;
} else if (window.obj89828_onTap_runningActionsCount == 0) {
	obj89828_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj89828_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89828_onTap_activeActionGroupIndex = -1;
		$("#obj89828").trigger("obj89828_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89828) {
				console.warn("de-queueing event obj89828." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89828").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89828_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj89823
(function(){
	window.obj89828_onTap_runningActionsCount = obj89828_onTap_runningActionsCount + 1;

	var selector = "#obj89823";
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
					window.obj89828_onTap_runningActionsCount = window.obj89828_onTap_runningActionsCount - 1;
if (window.obj89828_onTap_runningActionsCount < 0) {
	window.obj89828_onTap_runningActionsCount = 0;
} else if (window.obj89828_onTap_runningActionsCount == 0) {
	obj89828_onTap_actionGroup3();
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
				window.obj89828_onTap_runningActionsCount = window.obj89828_onTap_runningActionsCount - 1;
if (window.obj89828_onTap_runningActionsCount < 0) {
	window.obj89828_onTap_runningActionsCount = 0;
} else if (window.obj89828_onTap_runningActionsCount == 0) {
	obj89828_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj89828_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj89828_onTap_activeActionGroupIndex = -1;
		$("#obj89828").trigger("obj89828_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89828) {
				console.warn("de-queueing event obj89828." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89828").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89828_onTap_activeActionGroupIndex = 3;
	





















};
obj89823_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89823_onTap_activeActionGroupIndex = -1;
		$("#obj89823").trigger("obj89823_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89823) {
				console.warn("de-queueing event obj89823." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89823").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89823_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj89823 
hide_89825();
function hide_89825() {
	var selector = "#obj89823";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj89823_onTap_runningActionsCount = obj89823_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj89823_onTap_runningActionsCount = window.obj89823_onTap_runningActionsCount - 1;
if (window.obj89823_onTap_runningActionsCount < 0) {
	window.obj89823_onTap_runningActionsCount = 0;
} else if (window.obj89823_onTap_runningActionsCount == 0) {
	obj89823_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_89825(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj89823_onTap_runningActionsCount = window.obj89823_onTap_runningActionsCount - 1;
if (window.obj89823_onTap_runningActionsCount < 0) {
	window.obj89823_onTap_runningActionsCount = 0;
} else if (window.obj89823_onTap_runningActionsCount == 0) {
	obj89823_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj89823_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89823_onTap_activeActionGroupIndex = -1;
		$("#obj89823").trigger("obj89823_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89823) {
				console.warn("de-queueing event obj89823." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89823").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89823_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj89828
(function(){
	window.obj89823_onTap_runningActionsCount = obj89823_onTap_runningActionsCount + 1;

	var selector = "#obj89828";
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
					window.obj89823_onTap_runningActionsCount = window.obj89823_onTap_runningActionsCount - 1;
if (window.obj89823_onTap_runningActionsCount < 0) {
	window.obj89823_onTap_runningActionsCount = 0;
} else if (window.obj89823_onTap_runningActionsCount == 0) {
	obj89823_onTap_actionGroup2();
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
				window.obj89823_onTap_runningActionsCount = window.obj89823_onTap_runningActionsCount - 1;
if (window.obj89823_onTap_runningActionsCount < 0) {
	window.obj89823_onTap_runningActionsCount = 0;
} else if (window.obj89823_onTap_runningActionsCount == 0) {
	obj89823_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj89823_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89823_onTap_activeActionGroupIndex = -1;
		$("#obj89823").trigger("obj89823_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89823) {
				console.warn("de-queueing event obj89823." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89823").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89823_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj89833 
playAudio_89827();
function playAudio_89827() {
	window.obj89823_onTap_runningActionsCount = obj89823_onTap_runningActionsCount + 1;
	var myAudio = $("#obj89833")[0];
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
		    window.obj89823_onTap_runningActionsCount = window.obj89823_onTap_runningActionsCount - 1;
if (window.obj89823_onTap_runningActionsCount < 0) {
	window.obj89823_onTap_runningActionsCount = 0;
} else if (window.obj89823_onTap_runningActionsCount == 0) {
	obj89823_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj89823_onTap_runningActionsCount = window.obj89823_onTap_runningActionsCount - 1;
if (window.obj89823_onTap_runningActionsCount < 0) {
	window.obj89823_onTap_runningActionsCount = 0;
} else if (window.obj89823_onTap_runningActionsCount == 0) {
	obj89823_onTap_actionGroup3();
}
	}
}









};
obj89823_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj89823_onTap_activeActionGroupIndex = -1;
		$("#obj89823").trigger("obj89823_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89823) {
				console.warn("de-queueing event obj89823." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89823").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89823_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj4918: Event Touch Down
 *
 */
$("#obj4918").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj4918_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj4918_onTap is still running");
	return;
}
var obj4918_onTap_runningActionsCount = 0;
var obj4918_onTap_loopCount = 0;
obj4918_onTap_actionGroup0();
});










/*
 *
 *   obj4915: Event Touch Down
 *
 */
$("#obj4915").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj4915_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj4915_onTap is still running");
	return;
}
var obj4915_onTap_runningActionsCount = 0;
var obj4915_onTap_loopCount = 0;
obj4915_onTap_actionGroup0();
});










/*
 *
 *   obj4921: Event Touch Down
 *
 */
$("#obj4921").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj4921_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj4921_onTap is still running");
	return;
}
var obj4921_onTap_runningActionsCount = 0;
var obj4921_onTap_loopCount = 0;
obj4921_onTap_actionGroup0();
});

































































































































































/*
 *
 *   obj4754: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj4754");
	var winTarget = document.getElementById("obj4754");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj4754").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj4754_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj4754_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj4754_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj4754_onTouchDown is still running");
	return;
}
var obj4754_onTouchDown_runningActionsCount = 0;
var obj4754_onTouchDown_loopCount = 0;
obj4754_onTouchDown_actionGroup0();
});



/*
 *
 *   obj4754: Event SCActionDragDrop4757_droppedOutsideTargetActions
 *
 */
$("#obj4754").bind("SCActionDragDrop4757_droppedOutsideTargetActions", function(event) {
	if (window.obj4754_SCActionDragDrop4757_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj4754_SCActionDragDrop4757_droppedOutsideTargetActions is still running");
	return;
}
var obj4754_SCActionDragDrop4757_droppedOutsideTargetActions_runningActionsCount = 0;
var obj4754_SCActionDragDrop4757_droppedOutsideTargetActions_loopCount = 0;
obj4754_SCActionDragDrop4757_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj4754: Event droppedInsideTargetActions_3
 *
 */
$("#obj4754").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj4754_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj4754_droppedInsideTargetActions_3 is still running");
	return;
}
var obj4754_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj4754_droppedInsideTargetActions_3_loopCount = 0;
obj4754_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj4754: Event droppedInsideTargetActions_2
 *
 */
$("#obj4754").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj4754_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj4754_droppedInsideTargetActions_2 is still running");
	return;
}
var obj4754_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj4754_droppedInsideTargetActions_2_loopCount = 0;
obj4754_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj4754: Event droppedInsideTargetActions
 *
 */
$("#obj4754").bind("droppedInsideTargetActions", function(event) {
	if (window.obj4754_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj4754_droppedInsideTargetActions is still running");
	return;
}
var obj4754_droppedInsideTargetActions_runningActionsCount = 0;
var obj4754_droppedInsideTargetActions_loopCount = 0;
obj4754_droppedInsideTargetActions_actionGroup0();
});
















/*
 *
 *   obj4940: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj4940");
	var winTarget = document.getElementById("obj4940");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj4940").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj4940_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj4940_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj4940_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj4940_onTouchDown is still running");
	return;
}
var obj4940_onTouchDown_runningActionsCount = 0;
var obj4940_onTouchDown_loopCount = 0;
obj4940_onTouchDown_actionGroup0();
});



/*
 *
 *   obj4940: Event SCActionDragDrop4943_droppedOutsideTargetActions
 *
 */
$("#obj4940").bind("SCActionDragDrop4943_droppedOutsideTargetActions", function(event) {
	if (window.obj4940_SCActionDragDrop4943_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj4940_SCActionDragDrop4943_droppedOutsideTargetActions is still running");
	return;
}
var obj4940_SCActionDragDrop4943_droppedOutsideTargetActions_runningActionsCount = 0;
var obj4940_SCActionDragDrop4943_droppedOutsideTargetActions_loopCount = 0;
obj4940_SCActionDragDrop4943_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj4940: Event droppedInsideTargetActions_3
 *
 */
$("#obj4940").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj4940_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj4940_droppedInsideTargetActions_3 is still running");
	return;
}
var obj4940_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj4940_droppedInsideTargetActions_3_loopCount = 0;
obj4940_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj4940: Event droppedInsideTargetActions_2
 *
 */
$("#obj4940").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj4940_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj4940_droppedInsideTargetActions_2 is still running");
	return;
}
var obj4940_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj4940_droppedInsideTargetActions_2_loopCount = 0;
obj4940_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj4940: Event droppedInsideTargetActions
 *
 */
$("#obj4940").bind("droppedInsideTargetActions", function(event) {
	if (window.obj4940_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj4940_droppedInsideTargetActions is still running");
	return;
}
var obj4940_droppedInsideTargetActions_runningActionsCount = 0;
var obj4940_droppedInsideTargetActions_loopCount = 0;
obj4940_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj4993: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj4993");
	var winTarget = document.getElementById("obj4993");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj4993").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj4993_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj4993_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj4993_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj4993_onTouchDown is still running");
	return;
}
var obj4993_onTouchDown_runningActionsCount = 0;
var obj4993_onTouchDown_loopCount = 0;
obj4993_onTouchDown_actionGroup0();
});



/*
 *
 *   obj4993: Event SCActionDragDrop4996_droppedOutsideTargetActions
 *
 */
$("#obj4993").bind("SCActionDragDrop4996_droppedOutsideTargetActions", function(event) {
	if (window.obj4993_SCActionDragDrop4996_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj4993_SCActionDragDrop4996_droppedOutsideTargetActions is still running");
	return;
}
var obj4993_SCActionDragDrop4996_droppedOutsideTargetActions_runningActionsCount = 0;
var obj4993_SCActionDragDrop4996_droppedOutsideTargetActions_loopCount = 0;
obj4993_SCActionDragDrop4996_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj4993: Event droppedInsideTargetActions_3
 *
 */
$("#obj4993").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj4993_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj4993_droppedInsideTargetActions_3 is still running");
	return;
}
var obj4993_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj4993_droppedInsideTargetActions_3_loopCount = 0;
obj4993_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj4993: Event droppedInsideTargetActions_2
 *
 */
$("#obj4993").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj4993_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj4993_droppedInsideTargetActions_2 is still running");
	return;
}
var obj4993_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj4993_droppedInsideTargetActions_2_loopCount = 0;
obj4993_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj4993: Event droppedInsideTargetActions
 *
 */
$("#obj4993").bind("droppedInsideTargetActions", function(event) {
	if (window.obj4993_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj4993_droppedInsideTargetActions is still running");
	return;
}
var obj4993_droppedInsideTargetActions_runningActionsCount = 0;
var obj4993_droppedInsideTargetActions_loopCount = 0;
obj4993_droppedInsideTargetActions_actionGroup0();
});

























/*
 *
 *   obj65390: Event Touch Down
 *
 */
$("#obj65390").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj65390_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj65390_onTap is still running");
	return;
}
var obj65390_onTap_runningActionsCount = 0;
var obj65390_onTap_loopCount = 0;
obj65390_onTap_actionGroup0();
});










/*
 *
 *   obj65382: Event Touch Down
 *
 */
$("#obj65382").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj65382_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj65382_onTap is still running");
	return;
}
var obj65382_onTap_runningActionsCount = 0;
var obj65382_onTap_loopCount = 0;
obj65382_onTap_actionGroup0();
});










/*
 *
 *   obj89828: Event Touch Down
 *
 */
$("#obj89828").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj89828_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj89828_onTap is still running");
	return;
}
var obj89828_onTap_runningActionsCount = 0;
var obj89828_onTap_loopCount = 0;
obj89828_onTap_actionGroup0();
});










/*
 *
 *   obj89823: Event Touch Down
 *
 */
$("#obj89823").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj89823_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj89823_onTap is still running");
	return;
}
var obj89823_onTap_runningActionsCount = 0;
var obj89823_onTap_loopCount = 0;
obj89823_onTap_actionGroup0();
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
	
$("#obj4913").trigger('SCEventShow');
$("#obj4918").trigger('SCEventShow');
$("#obj4915").trigger('SCEventShow');
$("#obj4921").trigger('SCEventShow');
$("#obj4673").trigger('SCEventShow');
$("#obj4667").trigger('SCEventShow');
$("#obj4669").trigger('SCEventShow');
$("#obj4671").trigger('SCEventShow');
$("#obj4665").trigger('SCEventShow');
$("#obj4675").trigger('SCEventShow');
$("#obj4677").trigger('SCEventShow');
$("#obj4679").trigger('SCEventShow');
$("#obj4689").trigger('SCEventShow');
$("#obj4687").trigger('SCEventShow');
$("#obj4685").trigger('SCEventShow');
$("#obj4691").trigger('SCEventShow');
$("#obj4693").trigger('SCEventShow');
$("#obj4695").trigger('SCEventShow');
$("#obj4699").trigger('SCEventShow');
$("#obj4754").trigger('SCEventShow');
$("#obj4938").trigger('SCEventShow');
$("#obj4940").trigger('SCEventShow');
$("#obj4993").trigger('SCEventShow');
$("#obj5053").trigger('SCEventShow');
$("#obj5054").trigger('SCEventShow');
$("#obj65390").trigger('SCEventShow');
$("#obj65382").trigger('SCEventShow');
$("#obj89828").trigger('SCEventShow');
$("#obj89823").trigger('SCEventShow');
$("#obj89833").trigger('SCEventShow');
$("#obj94683").trigger('SCEventShow');
$("#obj65396").trigger('SCEventShow');
	
});