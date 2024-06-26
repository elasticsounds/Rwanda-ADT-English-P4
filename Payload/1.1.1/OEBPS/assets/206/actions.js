pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 55886;
pubcoder.page.title = pubcoder.page.title || "206";
pubcoder.page.number = pubcoder.page.number || 206;
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
var obj56045_onTap_activeActionGroupIndex = -1;
var obj56045_onTap_runningActionsCount = 0;
var obj56045_onTap_loopCount = 0;
var obj56042_onTap_activeActionGroupIndex = -1;
var obj56042_onTap_runningActionsCount = 0;
var obj56042_onTap_loopCount = 0;
var obj56038_onTap_activeActionGroupIndex = -1;
var obj56038_onTap_runningActionsCount = 0;
var obj56038_onTap_loopCount = 0;
var obj55969_onDrag_activeActionGroupIndex = -1;
var obj55969_onDrag_runningActionsCount = 0;
var obj55969_onDrag_loopCount = 0;
var obj55969_onTouchDown_activeActionGroupIndex = -1;
var obj55969_onTouchDown_runningActionsCount = 0;
var obj55969_onTouchDown_loopCount = 0;
var obj55969_SCActionDragDrop55972_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj55969_SCActionDragDrop55972_droppedOutsideTargetActions_runningActionsCount = 0;
var obj55969_SCActionDragDrop55972_droppedOutsideTargetActions_loopCount = 0;
var obj55969_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj55969_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj55969_droppedInsideTargetActions_3_loopCount = 0;
var obj55969_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj55969_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj55969_droppedInsideTargetActions_2_loopCount = 0;
var obj55969_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj55969_droppedInsideTargetActions_runningActionsCount = 0;
var obj55969_droppedInsideTargetActions_loopCount = 0;
var obj55926_onDrag_activeActionGroupIndex = -1;
var obj55926_onDrag_runningActionsCount = 0;
var obj55926_onDrag_loopCount = 0;
var obj55926_onTouchDown_activeActionGroupIndex = -1;
var obj55926_onTouchDown_runningActionsCount = 0;
var obj55926_onTouchDown_loopCount = 0;
var obj55926_SCActionDragDrop55929_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj55926_SCActionDragDrop55929_droppedOutsideTargetActions_runningActionsCount = 0;
var obj55926_SCActionDragDrop55929_droppedOutsideTargetActions_loopCount = 0;
var obj55926_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj55926_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj55926_droppedInsideTargetActions_3_loopCount = 0;
var obj55926_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj55926_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj55926_droppedInsideTargetActions_2_loopCount = 0;
var obj55926_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj55926_droppedInsideTargetActions_runningActionsCount = 0;
var obj55926_droppedInsideTargetActions_loopCount = 0;
var obj55887_onDrag_activeActionGroupIndex = -1;
var obj55887_onDrag_runningActionsCount = 0;
var obj55887_onDrag_loopCount = 0;
var obj55887_onTouchDown_activeActionGroupIndex = -1;
var obj55887_onTouchDown_runningActionsCount = 0;
var obj55887_onTouchDown_loopCount = 0;
var obj55887_SCActionDragDrop55890_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj55887_SCActionDragDrop55890_droppedOutsideTargetActions_runningActionsCount = 0;
var obj55887_SCActionDragDrop55890_droppedOutsideTargetActions_loopCount = 0;
var obj55887_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj55887_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj55887_droppedInsideTargetActions_3_loopCount = 0;
var obj55887_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj55887_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj55887_droppedInsideTargetActions_2_loopCount = 0;
var obj55887_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj55887_droppedInsideTargetActions_runningActionsCount = 0;
var obj55887_droppedInsideTargetActions_loopCount = 0;
var obj68334_onTap_activeActionGroupIndex = -1;
var obj68334_onTap_runningActionsCount = 0;
var obj68334_onTap_loopCount = 0;
var obj68326_onTap_activeActionGroupIndex = -1;
var obj68326_onTap_runningActionsCount = 0;
var obj68326_onTap_loopCount = 0;
var obj89353_onTap_activeActionGroupIndex = -1;
var obj89353_onTap_runningActionsCount = 0;
var obj89353_onTap_loopCount = 0;
var obj89348_onTap_activeActionGroupIndex = -1;
var obj89348_onTap_runningActionsCount = 0;
var obj89348_onTap_loopCount = 0;
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
		
obj56045_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56045_onTap_activeActionGroupIndex = -1;
		$("#obj56045").trigger("obj56045_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56045) {
				console.warn("de-queueing event obj56045." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56045").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56045_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_56047();
function goToPage_56047() {
	window.obj56045_onTap_runningActionsCount = obj56045_onTap_runningActionsCount + 1;
	$("#anchor1209")[0].click();
	window.obj56045_onTap_runningActionsCount = window.obj56045_onTap_runningActionsCount - 1;
if (window.obj56045_onTap_runningActionsCount < 0) {
	window.obj56045_onTap_runningActionsCount = 0;
} else if (window.obj56045_onTap_runningActionsCount == 0) {
	obj56045_onTap_actionGroup1();
}
}





















};
obj56045_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj56045_onTap_activeActionGroupIndex = -1;
		$("#obj56045").trigger("obj56045_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56045) {
				console.warn("de-queueing event obj56045." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56045").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56045_onTap_activeActionGroupIndex = 1;
	





















};
obj56042_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56042_onTap_activeActionGroupIndex = -1;
		$("#obj56042").trigger("obj56042_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56042) {
				console.warn("de-queueing event obj56042." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56042").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56042_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_56044();
function goToPage_56044() {
	window.obj56042_onTap_runningActionsCount = obj56042_onTap_runningActionsCount + 1;
	$("#anchor1210")[0].click();
	window.obj56042_onTap_runningActionsCount = window.obj56042_onTap_runningActionsCount - 1;
if (window.obj56042_onTap_runningActionsCount < 0) {
	window.obj56042_onTap_runningActionsCount = 0;
} else if (window.obj56042_onTap_runningActionsCount == 0) {
	obj56042_onTap_actionGroup1();
}
}





















};
obj56042_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj56042_onTap_activeActionGroupIndex = -1;
		$("#obj56042").trigger("obj56042_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56042) {
				console.warn("de-queueing event obj56042." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56042").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56042_onTap_activeActionGroupIndex = 1;
	





















};
obj56038_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56038_onTap_activeActionGroupIndex = -1;
		$("#obj56038").trigger("obj56038_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56038) {
				console.warn("de-queueing event obj56038." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56038").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56038_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_56040();
function goToPage_56040() {
	window.obj56038_onTap_runningActionsCount = obj56038_onTap_runningActionsCount + 1;
	$("#anchor1211")[0].click();
	window.obj56038_onTap_runningActionsCount = window.obj56038_onTap_runningActionsCount - 1;
if (window.obj56038_onTap_runningActionsCount < 0) {
	window.obj56038_onTap_runningActionsCount = 0;
} else if (window.obj56038_onTap_runningActionsCount == 0) {
	obj56038_onTap_actionGroup1();
}
}





















};
obj56038_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj56038_onTap_activeActionGroupIndex = -1;
		$("#obj56038").trigger("obj56038_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56038) {
				console.warn("de-queueing event obj56038." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56038").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56038_onTap_activeActionGroupIndex = 1;
	





















};
obj55969_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55969_onTouchDown_activeActionGroupIndex = -1;
		$("#obj55969").trigger("obj55969_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55969) {
				console.warn("de-queueing event obj55969." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55969").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55969_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj55969");
//	action: dragDrop
//	target: obj55969 
dragDrop_55972();
function dragDrop_55972() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj55969_onTouchDown_runningActionsCount = obj55969_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj55969');
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
	  	containerNode = $('#obj56028');
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
    	window.obj55969_onTouchDown_runningActionsCount = window.obj55969_onTouchDown_runningActionsCount - 1;
if (window.obj55969_onTouchDown_runningActionsCount < 0) {
	window.obj55969_onTouchDown_runningActionsCount = 0;
} else if (window.obj55969_onTouchDown_runningActionsCount == 0) {
	obj55969_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj56016","#obj56020","#obj56018");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_55972 = false;
    	var dropped_id_55972;
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
					dropped_55972 = true;
					dropped_id_55972 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_55972) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj55969").trigger('SCActionDragDrop55972_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj55969_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj55969_onTouchDown_activeActionGroupIndex = -1;
		$("#obj55969").trigger("obj55969_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55969) {
				console.warn("de-queueing event obj55969." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55969").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55969_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj55969_SCActionDragDrop55972_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55969_SCActionDragDrop55972_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj55969").trigger("obj55969_SCActionDragDrop55972_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55969) {
				console.warn("de-queueing event obj55969." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55969").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55969_SCActionDragDrop55972_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj55969 
move_92845();
function move_92845() {
	window.obj55969_SCActionDragDrop55972_droppedOutsideTargetActions_runningActionsCount = obj55969_SCActionDragDrop55972_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj55969");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 64;
	var moveY = 588;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj55969_SCActionDragDrop55972_droppedOutsideTargetActions_runningActionsCount = window.obj55969_SCActionDragDrop55972_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj55969_SCActionDragDrop55972_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj55969_SCActionDragDrop55972_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj55969_SCActionDragDrop55972_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj55969_SCActionDragDrop55972_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj55969_SCActionDragDrop55972_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj55969_SCActionDragDrop55972_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj55969").trigger("obj55969_SCActionDragDrop55972_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55969) {
				console.warn("de-queueing event obj55969." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55969").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55969_SCActionDragDrop55972_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj55969_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55969_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj55969").trigger("obj55969_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55969) {
				console.warn("de-queueing event obj55969." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55969").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55969_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_55995();
function runjs_55995() {
	window.obj55969_droppedInsideTargetActions_3_runningActionsCount = obj55969_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj56018").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj55969_droppedInsideTargetActions_3_runningActionsCount = window.obj55969_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55969_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55969_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55969_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55969_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj55969_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55969_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj55969").trigger("obj55969_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55969) {
				console.warn("de-queueing event obj55969." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55969").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55969_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_55996();
function runjs_55996() {
	window.obj55969_droppedInsideTargetActions_3_runningActionsCount = obj55969_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj56018").css("border-color", "#C00000"); $("#obj56018").css("border-width", "2px"); $("#obj56018").css("border-style", "solid"); $("#obj56018").css("border-radius", "10px"); $("#obj56018").css("-webkit-border-radius", "10px"); $("#obj56018").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj55969_droppedInsideTargetActions_3_runningActionsCount = window.obj55969_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55969_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55969_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55969_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55969_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj55969_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55969_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj55969").trigger("obj55969_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55969) {
				console.warn("de-queueing event obj55969." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55969").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55969_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj56012 
hide_55997();
function hide_55997() {
	var selector = "#obj56012";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj55969_droppedInsideTargetActions_3_runningActionsCount = obj55969_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj55969_droppedInsideTargetActions_3_runningActionsCount = window.obj55969_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55969_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55969_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55969_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55969_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_55997(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj55969_droppedInsideTargetActions_3_runningActionsCount = window.obj55969_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55969_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55969_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55969_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55969_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj55969_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55969_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj55969").trigger("obj55969_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55969) {
				console.warn("de-queueing event obj55969." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55969").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55969_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_55998();
function runjs_55998() {
	window.obj55969_droppedInsideTargetActions_3_runningActionsCount = obj55969_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj55969").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj55969_droppedInsideTargetActions_3_runningActionsCount = window.obj55969_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55969_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55969_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55969_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55969_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj55969_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55969_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj55969").trigger("obj55969_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55969) {
				console.warn("de-queueing event obj55969." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55969").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55969_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_55999();
function switchText_55999() {
	window.obj55969_droppedInsideTargetActions_3_runningActionsCount = obj55969_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj55967_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj55967_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj55967").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj55967_content");
			setTimeout(function () {
				window.obj55969_droppedInsideTargetActions_3_runningActionsCount = window.obj55969_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55969_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55969_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55969_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55969_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj55967 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj55969_droppedInsideTargetActions_3_runningActionsCount = window.obj55969_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55969_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55969_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55969_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55969_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj55969_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55969_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj55969").trigger("obj55969_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55969) {
				console.warn("de-queueing event obj55969." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55969").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55969_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj55969 
move_56000();
function move_56000() {
	window.obj55969_droppedInsideTargetActions_3_runningActionsCount = obj55969_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj55969");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 64;
	var moveY = 588;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj55969_droppedInsideTargetActions_3_runningActionsCount = window.obj55969_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55969_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55969_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55969_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55969_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj55969_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55969_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj55969").trigger("obj55969_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55969) {
				console.warn("de-queueing event obj55969." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55969").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55969_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_56001();
function runjs_56001() {
	window.obj55969_droppedInsideTargetActions_3_runningActionsCount = obj55969_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj56018").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj55969_droppedInsideTargetActions_3_runningActionsCount = window.obj55969_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55969_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55969_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55969_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55969_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj55969_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55969_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj55969").trigger("obj55969_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55969) {
				console.warn("de-queueing event obj55969." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55969").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55969_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_56002();
function runjs_56002() {
	window.obj55969_droppedInsideTargetActions_3_runningActionsCount = obj55969_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj56018").css("border-color", "#000000"); $("#obj56018").css("border-width", "1px"); $("#obj56018").css("border-style", "solid"); $("#obj56018").css("border-radius", "10px"); $("#obj56018").css("-webkit-border-radius", "10px"); $("#obj56018").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj55969_droppedInsideTargetActions_3_runningActionsCount = window.obj55969_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55969_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55969_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55969_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55969_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj55969_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55969_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj55969").trigger("obj55969_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55969) {
				console.warn("de-queueing event obj55969." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55969").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55969_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj56012
(function(){
	window.obj55969_droppedInsideTargetActions_3_runningActionsCount = obj55969_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj56012";
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
					window.obj55969_droppedInsideTargetActions_3_runningActionsCount = window.obj55969_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55969_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55969_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55969_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55969_droppedInsideTargetActions_3_actionGroup9();
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
				window.obj55969_droppedInsideTargetActions_3_runningActionsCount = window.obj55969_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55969_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55969_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55969_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55969_droppedInsideTargetActions_3_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj55969_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55969_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj55969").trigger("obj55969_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55969) {
				console.warn("de-queueing event obj55969." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55969").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55969_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_56004();
function runjs_56004() {
	window.obj55969_droppedInsideTargetActions_3_runningActionsCount = obj55969_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj55969").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj55969_droppedInsideTargetActions_3_runningActionsCount = window.obj55969_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55969_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55969_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55969_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55969_droppedInsideTargetActions_3_actionGroup10();
}
	}, 1);
}







};
obj55969_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55969_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj55969").trigger("obj55969_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55969) {
				console.warn("de-queueing event obj55969." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55969").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55969_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_56005();
function runjs_56005() {
	window.obj55969_droppedInsideTargetActions_3_runningActionsCount = obj55969_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj55969").css("border-color", "rgba(0,0,0,0)"); $("#obj55969").css("border-width", "0px"); $("#obj55969").css("border-style", "solid"); $("#obj55969").css("border-radius", "10px"); $("#obj55969").css("-webkit-border-radius", "10px"); $("#obj55969").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj55969_droppedInsideTargetActions_3_runningActionsCount = window.obj55969_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55969_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55969_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55969_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55969_droppedInsideTargetActions_3_actionGroup11();
}
	}, 1);
}







};
obj55969_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55969_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj55969").trigger("obj55969_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55969) {
				console.warn("de-queueing event obj55969." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55969").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55969_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj55966 
playAudio_56006();
function playAudio_56006() {
	window.obj55969_droppedInsideTargetActions_3_runningActionsCount = obj55969_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj55966")[0];
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
		    window.obj55969_droppedInsideTargetActions_3_runningActionsCount = window.obj55969_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55969_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55969_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55969_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55969_droppedInsideTargetActions_3_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj55969_droppedInsideTargetActions_3_runningActionsCount = window.obj55969_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55969_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55969_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55969_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55969_droppedInsideTargetActions_3_actionGroup12();
}
	}
}









};
obj55969_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55969_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj55969").trigger("obj55969_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55969) {
				console.warn("de-queueing event obj55969." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55969").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55969_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_56007();
function switchText_56007() {
	window.obj55969_droppedInsideTargetActions_3_runningActionsCount = obj55969_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj55967_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj55967_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj55967").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj55967_content");
			setTimeout(function () {
				window.obj55969_droppedInsideTargetActions_3_runningActionsCount = window.obj55969_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55969_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55969_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55969_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55969_droppedInsideTargetActions_3_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj55967 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj55969_droppedInsideTargetActions_3_runningActionsCount = window.obj55969_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55969_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55969_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55969_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55969_droppedInsideTargetActions_3_actionGroup13();
}
		}, 1);
	}
}






};
obj55969_droppedInsideTargetActions_3_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj55969_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj55969").trigger("obj55969_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55969) {
				console.warn("de-queueing event obj55969." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55969").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55969_droppedInsideTargetActions_3_activeActionGroupIndex = 13;
	





















};
obj55969_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55969_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj55969").trigger("obj55969_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55969) {
				console.warn("de-queueing event obj55969." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55969").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55969_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_55981();
function runjs_55981() {
	window.obj55969_droppedInsideTargetActions_2_runningActionsCount = obj55969_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj56020").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj55969_droppedInsideTargetActions_2_runningActionsCount = window.obj55969_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55969_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55969_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55969_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55969_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj55969_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55969_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj55969").trigger("obj55969_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55969) {
				console.warn("de-queueing event obj55969." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55969").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55969_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_55982();
function runjs_55982() {
	window.obj55969_droppedInsideTargetActions_2_runningActionsCount = obj55969_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj56020").css("border-color", "#C00000"); $("#obj56020").css("border-width", "2px"); $("#obj56020").css("border-style", "solid"); $("#obj56020").css("border-radius", "10px"); $("#obj56020").css("-webkit-border-radius", "10px"); $("#obj56020").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj55969_droppedInsideTargetActions_2_runningActionsCount = window.obj55969_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55969_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55969_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55969_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55969_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj55969_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55969_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj55969").trigger("obj55969_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55969) {
				console.warn("de-queueing event obj55969." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55969").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55969_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj56014 
hide_55983();
function hide_55983() {
	var selector = "#obj56014";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj55969_droppedInsideTargetActions_2_runningActionsCount = obj55969_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj55969_droppedInsideTargetActions_2_runningActionsCount = window.obj55969_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55969_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55969_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55969_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55969_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_55983(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj55969_droppedInsideTargetActions_2_runningActionsCount = window.obj55969_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55969_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55969_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55969_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55969_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj55969_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55969_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj55969").trigger("obj55969_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55969) {
				console.warn("de-queueing event obj55969." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55969").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55969_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_55984();
function runjs_55984() {
	window.obj55969_droppedInsideTargetActions_2_runningActionsCount = obj55969_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj55969").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj55969_droppedInsideTargetActions_2_runningActionsCount = window.obj55969_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55969_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55969_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55969_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55969_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj55969_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55969_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj55969").trigger("obj55969_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55969) {
				console.warn("de-queueing event obj55969." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55969").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55969_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_55985();
function switchText_55985() {
	window.obj55969_droppedInsideTargetActions_2_runningActionsCount = obj55969_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj55967_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj55967_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj55967").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj55967_content");
			setTimeout(function () {
				window.obj55969_droppedInsideTargetActions_2_runningActionsCount = window.obj55969_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55969_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55969_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55969_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55969_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj55967 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj55969_droppedInsideTargetActions_2_runningActionsCount = window.obj55969_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55969_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55969_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55969_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55969_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj55969_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55969_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj55969").trigger("obj55969_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55969) {
				console.warn("de-queueing event obj55969." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55969").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55969_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj55969 
move_55986();
function move_55986() {
	window.obj55969_droppedInsideTargetActions_2_runningActionsCount = obj55969_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj55969");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 64;
	var moveY = 588;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj55969_droppedInsideTargetActions_2_runningActionsCount = window.obj55969_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55969_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55969_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55969_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55969_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj55969_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55969_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj55969").trigger("obj55969_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55969) {
				console.warn("de-queueing event obj55969." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55969").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55969_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_55987();
function runjs_55987() {
	window.obj55969_droppedInsideTargetActions_2_runningActionsCount = obj55969_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj56020").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj55969_droppedInsideTargetActions_2_runningActionsCount = window.obj55969_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55969_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55969_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55969_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55969_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj55969_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55969_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj55969").trigger("obj55969_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55969) {
				console.warn("de-queueing event obj55969." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55969").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55969_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_55988();
function runjs_55988() {
	window.obj55969_droppedInsideTargetActions_2_runningActionsCount = obj55969_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj56020").css("border-color", "#000000"); $("#obj56020").css("border-width", "1px"); $("#obj56020").css("border-style", "solid"); $("#obj56020").css("border-radius", "10px"); $("#obj56020").css("-webkit-border-radius", "10px"); $("#obj56020").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj55969_droppedInsideTargetActions_2_runningActionsCount = window.obj55969_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55969_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55969_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55969_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55969_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj55969_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55969_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj55969").trigger("obj55969_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55969) {
				console.warn("de-queueing event obj55969." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55969").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55969_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj56014
(function(){
	window.obj55969_droppedInsideTargetActions_2_runningActionsCount = obj55969_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj56014";
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
					window.obj55969_droppedInsideTargetActions_2_runningActionsCount = window.obj55969_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55969_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55969_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55969_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55969_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj55969_droppedInsideTargetActions_2_runningActionsCount = window.obj55969_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55969_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55969_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55969_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55969_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj55969_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55969_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj55969").trigger("obj55969_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55969) {
				console.warn("de-queueing event obj55969." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55969").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55969_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_55990();
function runjs_55990() {
	window.obj55969_droppedInsideTargetActions_2_runningActionsCount = obj55969_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj55969").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj55969_droppedInsideTargetActions_2_runningActionsCount = window.obj55969_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55969_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55969_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55969_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55969_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj55969_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55969_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj55969").trigger("obj55969_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55969) {
				console.warn("de-queueing event obj55969." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55969").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55969_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_55991();
function runjs_55991() {
	window.obj55969_droppedInsideTargetActions_2_runningActionsCount = obj55969_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj55969").css("border-color", "rgba(0,0,0,0)"); $("#obj55969").css("border-width", "0px"); $("#obj55969").css("border-style", "solid"); $("#obj55969").css("border-radius", "10px"); $("#obj55969").css("-webkit-border-radius", "10px"); $("#obj55969").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj55969_droppedInsideTargetActions_2_runningActionsCount = window.obj55969_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55969_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55969_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55969_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55969_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj55969_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55969_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj55969").trigger("obj55969_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55969) {
				console.warn("de-queueing event obj55969." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55969").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55969_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj55966 
playAudio_55992();
function playAudio_55992() {
	window.obj55969_droppedInsideTargetActions_2_runningActionsCount = obj55969_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj55966")[0];
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
		    window.obj55969_droppedInsideTargetActions_2_runningActionsCount = window.obj55969_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55969_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55969_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55969_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55969_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj55969_droppedInsideTargetActions_2_runningActionsCount = window.obj55969_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55969_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55969_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55969_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55969_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj55969_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55969_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj55969").trigger("obj55969_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55969) {
				console.warn("de-queueing event obj55969." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55969").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55969_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_55993();
function switchText_55993() {
	window.obj55969_droppedInsideTargetActions_2_runningActionsCount = obj55969_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj55967_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj55967_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj55967").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj55967_content");
			setTimeout(function () {
				window.obj55969_droppedInsideTargetActions_2_runningActionsCount = window.obj55969_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55969_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55969_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55969_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55969_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj55967 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj55969_droppedInsideTargetActions_2_runningActionsCount = window.obj55969_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55969_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55969_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55969_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55969_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj55969_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj55969_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj55969").trigger("obj55969_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55969) {
				console.warn("de-queueing event obj55969." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55969").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55969_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj55969_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55969_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj55969").trigger("obj55969_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55969) {
				console.warn("de-queueing event obj55969." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55969").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55969_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_55974();
function runjs_55974() {
	window.obj55969_droppedInsideTargetActions_runningActionsCount = obj55969_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj56016").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj55969_droppedInsideTargetActions_runningActionsCount = window.obj55969_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj55969_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj55969_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj55969_droppedInsideTargetActions_runningActionsCount == 0) {
	obj55969_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj55969_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55969_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj55969").trigger("obj55969_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55969) {
				console.warn("de-queueing event obj55969." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55969").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55969_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_55975();
function runjs_55975() {
	window.obj55969_droppedInsideTargetActions_runningActionsCount = obj55969_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj56016").css("border-color", "#058E3F"); $("#obj56016").css("border-width", "2px"); $("#obj56016").css("border-style", "solid"); $("#obj56016").css("border-radius", "10px"); $("#obj56016").css("-webkit-border-radius", "10px"); $("#obj56016").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj55969_droppedInsideTargetActions_runningActionsCount = window.obj55969_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj55969_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj55969_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj55969_droppedInsideTargetActions_runningActionsCount == 0) {
	obj55969_droppedInsideTargetActions_actionGroup2();
}
	}, 1);
}







};
obj55969_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55969_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj55969").trigger("obj55969_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55969) {
				console.warn("de-queueing event obj55969." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55969").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55969_droppedInsideTargetActions_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj56010 
hide_55976();
function hide_55976() {
	var selector = "#obj56010";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj55969_droppedInsideTargetActions_runningActionsCount = obj55969_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj55969_droppedInsideTargetActions_runningActionsCount = window.obj55969_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj55969_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj55969_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj55969_droppedInsideTargetActions_runningActionsCount == 0) {
	obj55969_droppedInsideTargetActions_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_55976(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj55969_droppedInsideTargetActions_runningActionsCount = window.obj55969_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj55969_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj55969_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj55969_droppedInsideTargetActions_runningActionsCount == 0) {
	obj55969_droppedInsideTargetActions_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj55969_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55969_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj55969").trigger("obj55969_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55969) {
				console.warn("de-queueing event obj55969." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55969").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55969_droppedInsideTargetActions_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_55977();
function runjs_55977() {
	window.obj55969_droppedInsideTargetActions_runningActionsCount = obj55969_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj55969").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj55969_droppedInsideTargetActions_runningActionsCount = window.obj55969_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj55969_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj55969_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj55969_droppedInsideTargetActions_runningActionsCount == 0) {
	obj55969_droppedInsideTargetActions_actionGroup4();
}
	}, 1);
}







};
obj55969_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55969_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj55969").trigger("obj55969_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55969) {
				console.warn("de-queueing event obj55969." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55969").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55969_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_55978();
function switchText_55978() {
	window.obj55969_droppedInsideTargetActions_runningActionsCount = obj55969_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj55967_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj55967_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj55967").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj55967_content");
			setTimeout(function () {
				window.obj55969_droppedInsideTargetActions_runningActionsCount = window.obj55969_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj55969_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj55969_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj55969_droppedInsideTargetActions_runningActionsCount == 0) {
	obj55969_droppedInsideTargetActions_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj55967 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj55969_droppedInsideTargetActions_runningActionsCount = window.obj55969_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj55969_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj55969_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj55969_droppedInsideTargetActions_runningActionsCount == 0) {
	obj55969_droppedInsideTargetActions_actionGroup5();
}
		}, 1);
	}
}






};
obj55969_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55969_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj55969").trigger("obj55969_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55969) {
				console.warn("de-queueing event obj55969." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55969").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55969_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj55965 
playAudio_55979();
function playAudio_55979() {
	window.obj55969_droppedInsideTargetActions_runningActionsCount = obj55969_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj55965")[0];
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
		    window.obj55969_droppedInsideTargetActions_runningActionsCount = window.obj55969_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj55969_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj55969_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj55969_droppedInsideTargetActions_runningActionsCount == 0) {
	obj55969_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj55969_droppedInsideTargetActions_runningActionsCount = window.obj55969_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj55969_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj55969_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj55969_droppedInsideTargetActions_runningActionsCount == 0) {
	obj55969_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj55969_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj55969_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj55969").trigger("obj55969_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55969) {
				console.warn("de-queueing event obj55969." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55969").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55969_droppedInsideTargetActions_activeActionGroupIndex = 6;
	





















};
obj55926_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55926_onTouchDown_activeActionGroupIndex = -1;
		$("#obj55926").trigger("obj55926_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55926) {
				console.warn("de-queueing event obj55926." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55926").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55926_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj55926");
//	action: dragDrop
//	target: obj55926 
dragDrop_55929();
function dragDrop_55929() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj55926_onTouchDown_runningActionsCount = obj55926_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj55926');
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
	  	containerNode = $('#obj56028');
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
    	window.obj55926_onTouchDown_runningActionsCount = window.obj55926_onTouchDown_runningActionsCount - 1;
if (window.obj55926_onTouchDown_runningActionsCount < 0) {
	window.obj55926_onTouchDown_runningActionsCount = 0;
} else if (window.obj55926_onTouchDown_runningActionsCount == 0) {
	obj55926_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj56018","#obj56020","#obj56016");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_55929 = false;
    	var dropped_id_55929;
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
					dropped_55929 = true;
					dropped_id_55929 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_55929) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj55926").trigger('SCActionDragDrop55929_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj55926_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj55926_onTouchDown_activeActionGroupIndex = -1;
		$("#obj55926").trigger("obj55926_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55926) {
				console.warn("de-queueing event obj55926." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55926").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55926_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj55926_SCActionDragDrop55929_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55926_SCActionDragDrop55929_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj55926").trigger("obj55926_SCActionDragDrop55929_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55926) {
				console.warn("de-queueing event obj55926." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55926").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55926_SCActionDragDrop55929_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj55926 
move_92847();
function move_92847() {
	window.obj55926_SCActionDragDrop55929_droppedOutsideTargetActions_runningActionsCount = obj55926_SCActionDragDrop55929_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj55926");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 233;
	var moveY = 587;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj55926_SCActionDragDrop55929_droppedOutsideTargetActions_runningActionsCount = window.obj55926_SCActionDragDrop55929_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj55926_SCActionDragDrop55929_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj55926_SCActionDragDrop55929_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj55926_SCActionDragDrop55929_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj55926_SCActionDragDrop55929_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj55926_SCActionDragDrop55929_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj55926_SCActionDragDrop55929_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj55926").trigger("obj55926_SCActionDragDrop55929_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55926) {
				console.warn("de-queueing event obj55926." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55926").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55926_SCActionDragDrop55929_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj55926_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55926_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj55926").trigger("obj55926_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55926) {
				console.warn("de-queueing event obj55926." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55926").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55926_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_55952();
function runjs_55952() {
	window.obj55926_droppedInsideTargetActions_3_runningActionsCount = obj55926_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj56016").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj55926_droppedInsideTargetActions_3_runningActionsCount = window.obj55926_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55926_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55926_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55926_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55926_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj55926_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55926_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj55926").trigger("obj55926_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55926) {
				console.warn("de-queueing event obj55926." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55926").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55926_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_55953();
function runjs_55953() {
	window.obj55926_droppedInsideTargetActions_3_runningActionsCount = obj55926_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj56016").css("border-color", "#C00000"); $("#obj56016").css("border-width", "2px"); $("#obj56016").css("border-style", "solid"); $("#obj56016").css("border-radius", "10px"); $("#obj56016").css("-webkit-border-radius", "10px"); $("#obj56016").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj55926_droppedInsideTargetActions_3_runningActionsCount = window.obj55926_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55926_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55926_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55926_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55926_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj55926_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55926_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj55926").trigger("obj55926_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55926) {
				console.warn("de-queueing event obj55926." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55926").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55926_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj56010 
hide_55954();
function hide_55954() {
	var selector = "#obj56010";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj55926_droppedInsideTargetActions_3_runningActionsCount = obj55926_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj55926_droppedInsideTargetActions_3_runningActionsCount = window.obj55926_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55926_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55926_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55926_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55926_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_55954(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj55926_droppedInsideTargetActions_3_runningActionsCount = window.obj55926_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55926_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55926_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55926_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55926_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj55926_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55926_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj55926").trigger("obj55926_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55926) {
				console.warn("de-queueing event obj55926." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55926").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55926_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_55955();
function runjs_55955() {
	window.obj55926_droppedInsideTargetActions_3_runningActionsCount = obj55926_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj55926").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj55926_droppedInsideTargetActions_3_runningActionsCount = window.obj55926_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55926_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55926_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55926_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55926_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj55926_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55926_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj55926").trigger("obj55926_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55926) {
				console.warn("de-queueing event obj55926." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55926").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55926_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_55956();
function switchText_55956() {
	window.obj55926_droppedInsideTargetActions_3_runningActionsCount = obj55926_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj55967_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj55967_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj55967").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj55967_content");
			setTimeout(function () {
				window.obj55926_droppedInsideTargetActions_3_runningActionsCount = window.obj55926_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55926_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55926_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55926_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55926_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj55967 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj55926_droppedInsideTargetActions_3_runningActionsCount = window.obj55926_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55926_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55926_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55926_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55926_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj55926_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55926_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj55926").trigger("obj55926_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55926) {
				console.warn("de-queueing event obj55926." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55926").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55926_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj55926 
move_55957();
function move_55957() {
	window.obj55926_droppedInsideTargetActions_3_runningActionsCount = obj55926_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj55926");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 233;
	var moveY = 587;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj55926_droppedInsideTargetActions_3_runningActionsCount = window.obj55926_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55926_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55926_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55926_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55926_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj55926_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55926_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj55926").trigger("obj55926_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55926) {
				console.warn("de-queueing event obj55926." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55926").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55926_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_55958();
function runjs_55958() {
	window.obj55926_droppedInsideTargetActions_3_runningActionsCount = obj55926_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj56016").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj55926_droppedInsideTargetActions_3_runningActionsCount = window.obj55926_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55926_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55926_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55926_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55926_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj55926_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55926_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj55926").trigger("obj55926_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55926) {
				console.warn("de-queueing event obj55926." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55926").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55926_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_55959();
function runjs_55959() {
	window.obj55926_droppedInsideTargetActions_3_runningActionsCount = obj55926_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj56016").css("border-color", "#000000"); $("#obj56016").css("border-width", "1px"); $("#obj56016").css("border-style", "solid"); $("#obj56016").css("border-radius", "10px"); $("#obj56016").css("-webkit-border-radius", "10px"); $("#obj56016").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj55926_droppedInsideTargetActions_3_runningActionsCount = window.obj55926_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55926_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55926_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55926_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55926_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj55926_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55926_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj55926").trigger("obj55926_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55926) {
				console.warn("de-queueing event obj55926." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55926").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55926_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj56010
(function(){
	window.obj55926_droppedInsideTargetActions_3_runningActionsCount = obj55926_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj56010";
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
					window.obj55926_droppedInsideTargetActions_3_runningActionsCount = window.obj55926_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55926_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55926_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55926_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55926_droppedInsideTargetActions_3_actionGroup9();
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
				window.obj55926_droppedInsideTargetActions_3_runningActionsCount = window.obj55926_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55926_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55926_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55926_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55926_droppedInsideTargetActions_3_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj55926_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55926_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj55926").trigger("obj55926_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55926) {
				console.warn("de-queueing event obj55926." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55926").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55926_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_55961();
function runjs_55961() {
	window.obj55926_droppedInsideTargetActions_3_runningActionsCount = obj55926_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj55926").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj55926_droppedInsideTargetActions_3_runningActionsCount = window.obj55926_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55926_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55926_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55926_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55926_droppedInsideTargetActions_3_actionGroup10();
}
	}, 1);
}







};
obj55926_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55926_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj55926").trigger("obj55926_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55926) {
				console.warn("de-queueing event obj55926." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55926").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55926_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_55962();
function runjs_55962() {
	window.obj55926_droppedInsideTargetActions_3_runningActionsCount = obj55926_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj55926").css("border-color", "rgba(0,0,0,0)"); $("#obj55926").css("border-width", "0px"); $("#obj55926").css("border-style", "solid"); $("#obj55926").css("border-radius", "10px"); $("#obj55926").css("-webkit-border-radius", "10px"); $("#obj55926").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj55926_droppedInsideTargetActions_3_runningActionsCount = window.obj55926_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55926_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55926_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55926_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55926_droppedInsideTargetActions_3_actionGroup11();
}
	}, 1);
}







};
obj55926_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55926_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj55926").trigger("obj55926_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55926) {
				console.warn("de-queueing event obj55926." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55926").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55926_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj55966 
playAudio_55963();
function playAudio_55963() {
	window.obj55926_droppedInsideTargetActions_3_runningActionsCount = obj55926_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj55966")[0];
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
		    window.obj55926_droppedInsideTargetActions_3_runningActionsCount = window.obj55926_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55926_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55926_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55926_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55926_droppedInsideTargetActions_3_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj55926_droppedInsideTargetActions_3_runningActionsCount = window.obj55926_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55926_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55926_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55926_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55926_droppedInsideTargetActions_3_actionGroup12();
}
	}
}









};
obj55926_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55926_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj55926").trigger("obj55926_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55926) {
				console.warn("de-queueing event obj55926." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55926").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55926_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_55964();
function switchText_55964() {
	window.obj55926_droppedInsideTargetActions_3_runningActionsCount = obj55926_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj55967_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj55967_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj55967").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj55967_content");
			setTimeout(function () {
				window.obj55926_droppedInsideTargetActions_3_runningActionsCount = window.obj55926_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55926_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55926_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55926_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55926_droppedInsideTargetActions_3_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj55967 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj55926_droppedInsideTargetActions_3_runningActionsCount = window.obj55926_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55926_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55926_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55926_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55926_droppedInsideTargetActions_3_actionGroup13();
}
		}, 1);
	}
}






};
obj55926_droppedInsideTargetActions_3_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj55926_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj55926").trigger("obj55926_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55926) {
				console.warn("de-queueing event obj55926." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55926").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55926_droppedInsideTargetActions_3_activeActionGroupIndex = 13;
	





















};
obj55926_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55926_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj55926").trigger("obj55926_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55926) {
				console.warn("de-queueing event obj55926." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55926").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55926_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_55938();
function runjs_55938() {
	window.obj55926_droppedInsideTargetActions_2_runningActionsCount = obj55926_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj56020").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj55926_droppedInsideTargetActions_2_runningActionsCount = window.obj55926_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55926_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55926_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55926_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55926_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj55926_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55926_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj55926").trigger("obj55926_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55926) {
				console.warn("de-queueing event obj55926." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55926").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55926_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_55939();
function runjs_55939() {
	window.obj55926_droppedInsideTargetActions_2_runningActionsCount = obj55926_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj56020").css("border-color", "#C00000"); $("#obj56020").css("border-width", "2px"); $("#obj56020").css("border-style", "solid"); $("#obj56020").css("border-radius", "10px"); $("#obj56020").css("-webkit-border-radius", "10px"); $("#obj56020").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj55926_droppedInsideTargetActions_2_runningActionsCount = window.obj55926_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55926_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55926_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55926_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55926_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj55926_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55926_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj55926").trigger("obj55926_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55926) {
				console.warn("de-queueing event obj55926." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55926").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55926_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj56014 
hide_55940();
function hide_55940() {
	var selector = "#obj56014";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj55926_droppedInsideTargetActions_2_runningActionsCount = obj55926_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj55926_droppedInsideTargetActions_2_runningActionsCount = window.obj55926_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55926_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55926_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55926_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55926_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_55940(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj55926_droppedInsideTargetActions_2_runningActionsCount = window.obj55926_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55926_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55926_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55926_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55926_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj55926_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55926_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj55926").trigger("obj55926_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55926) {
				console.warn("de-queueing event obj55926." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55926").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55926_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_55941();
function runjs_55941() {
	window.obj55926_droppedInsideTargetActions_2_runningActionsCount = obj55926_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj55926").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj55926_droppedInsideTargetActions_2_runningActionsCount = window.obj55926_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55926_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55926_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55926_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55926_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj55926_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55926_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj55926").trigger("obj55926_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55926) {
				console.warn("de-queueing event obj55926." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55926").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55926_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_55942();
function switchText_55942() {
	window.obj55926_droppedInsideTargetActions_2_runningActionsCount = obj55926_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj55967_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj55967_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj55967").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj55967_content");
			setTimeout(function () {
				window.obj55926_droppedInsideTargetActions_2_runningActionsCount = window.obj55926_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55926_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55926_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55926_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55926_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj55967 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj55926_droppedInsideTargetActions_2_runningActionsCount = window.obj55926_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55926_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55926_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55926_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55926_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj55926_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55926_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj55926").trigger("obj55926_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55926) {
				console.warn("de-queueing event obj55926." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55926").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55926_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj55926 
move_55943();
function move_55943() {
	window.obj55926_droppedInsideTargetActions_2_runningActionsCount = obj55926_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj55926");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 233;
	var moveY = 587;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj55926_droppedInsideTargetActions_2_runningActionsCount = window.obj55926_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55926_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55926_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55926_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55926_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj55926_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55926_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj55926").trigger("obj55926_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55926) {
				console.warn("de-queueing event obj55926." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55926").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55926_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_55944();
function runjs_55944() {
	window.obj55926_droppedInsideTargetActions_2_runningActionsCount = obj55926_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj56020").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj55926_droppedInsideTargetActions_2_runningActionsCount = window.obj55926_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55926_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55926_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55926_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55926_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj55926_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55926_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj55926").trigger("obj55926_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55926) {
				console.warn("de-queueing event obj55926." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55926").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55926_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_55945();
function runjs_55945() {
	window.obj55926_droppedInsideTargetActions_2_runningActionsCount = obj55926_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj56020").css("border-color", "#000000"); $("#obj56020").css("border-width", "1px"); $("#obj56020").css("border-style", "solid"); $("#obj56020").css("border-radius", "10px"); $("#obj56020").css("-webkit-border-radius", "10px"); $("#obj56020").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj55926_droppedInsideTargetActions_2_runningActionsCount = window.obj55926_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55926_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55926_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55926_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55926_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj55926_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55926_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj55926").trigger("obj55926_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55926) {
				console.warn("de-queueing event obj55926." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55926").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55926_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj56014
(function(){
	window.obj55926_droppedInsideTargetActions_2_runningActionsCount = obj55926_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj56014";
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
					window.obj55926_droppedInsideTargetActions_2_runningActionsCount = window.obj55926_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55926_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55926_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55926_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55926_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj55926_droppedInsideTargetActions_2_runningActionsCount = window.obj55926_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55926_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55926_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55926_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55926_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj55926_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55926_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj55926").trigger("obj55926_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55926) {
				console.warn("de-queueing event obj55926." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55926").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55926_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_55947();
function runjs_55947() {
	window.obj55926_droppedInsideTargetActions_2_runningActionsCount = obj55926_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj55926").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj55926_droppedInsideTargetActions_2_runningActionsCount = window.obj55926_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55926_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55926_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55926_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55926_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj55926_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55926_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj55926").trigger("obj55926_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55926) {
				console.warn("de-queueing event obj55926." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55926").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55926_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_55948();
function runjs_55948() {
	window.obj55926_droppedInsideTargetActions_2_runningActionsCount = obj55926_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj55926").css("border-color", "rgba(0,0,0,0)"); $("#obj55926").css("border-width", "0px"); $("#obj55926").css("border-style", "solid"); $("#obj55926").css("border-radius", "10px"); $("#obj55926").css("-webkit-border-radius", "10px"); $("#obj55926").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj55926_droppedInsideTargetActions_2_runningActionsCount = window.obj55926_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55926_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55926_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55926_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55926_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj55926_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55926_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj55926").trigger("obj55926_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55926) {
				console.warn("de-queueing event obj55926." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55926").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55926_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj55966 
playAudio_55949();
function playAudio_55949() {
	window.obj55926_droppedInsideTargetActions_2_runningActionsCount = obj55926_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj55966")[0];
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
		    window.obj55926_droppedInsideTargetActions_2_runningActionsCount = window.obj55926_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55926_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55926_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55926_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55926_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj55926_droppedInsideTargetActions_2_runningActionsCount = window.obj55926_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55926_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55926_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55926_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55926_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj55926_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55926_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj55926").trigger("obj55926_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55926) {
				console.warn("de-queueing event obj55926." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55926").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55926_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_55950();
function switchText_55950() {
	window.obj55926_droppedInsideTargetActions_2_runningActionsCount = obj55926_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj55967_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj55967_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj55967").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj55967_content");
			setTimeout(function () {
				window.obj55926_droppedInsideTargetActions_2_runningActionsCount = window.obj55926_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55926_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55926_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55926_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55926_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj55967 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj55926_droppedInsideTargetActions_2_runningActionsCount = window.obj55926_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55926_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55926_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55926_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55926_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj55926_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj55926_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj55926").trigger("obj55926_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55926) {
				console.warn("de-queueing event obj55926." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55926").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55926_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj55926_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55926_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj55926").trigger("obj55926_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55926) {
				console.warn("de-queueing event obj55926." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55926").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55926_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_55931();
function runjs_55931() {
	window.obj55926_droppedInsideTargetActions_runningActionsCount = obj55926_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj56018").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj55926_droppedInsideTargetActions_runningActionsCount = window.obj55926_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj55926_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj55926_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj55926_droppedInsideTargetActions_runningActionsCount == 0) {
	obj55926_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj55926_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55926_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj55926").trigger("obj55926_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55926) {
				console.warn("de-queueing event obj55926." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55926").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55926_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_55932();
function runjs_55932() {
	window.obj55926_droppedInsideTargetActions_runningActionsCount = obj55926_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj56018").css("border-color", "#058E3F"); $("#obj56018").css("border-width", "2px"); $("#obj56018").css("border-style", "solid"); $("#obj56018").css("border-radius", "10px"); $("#obj56018").css("-webkit-border-radius", "10px"); $("#obj56018").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj55926_droppedInsideTargetActions_runningActionsCount = window.obj55926_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj55926_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj55926_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj55926_droppedInsideTargetActions_runningActionsCount == 0) {
	obj55926_droppedInsideTargetActions_actionGroup2();
}
	}, 1);
}







};
obj55926_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55926_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj55926").trigger("obj55926_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55926) {
				console.warn("de-queueing event obj55926." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55926").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55926_droppedInsideTargetActions_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj56012 
hide_55933();
function hide_55933() {
	var selector = "#obj56012";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj55926_droppedInsideTargetActions_runningActionsCount = obj55926_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj55926_droppedInsideTargetActions_runningActionsCount = window.obj55926_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj55926_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj55926_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj55926_droppedInsideTargetActions_runningActionsCount == 0) {
	obj55926_droppedInsideTargetActions_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_55933(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj55926_droppedInsideTargetActions_runningActionsCount = window.obj55926_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj55926_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj55926_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj55926_droppedInsideTargetActions_runningActionsCount == 0) {
	obj55926_droppedInsideTargetActions_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj55926_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55926_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj55926").trigger("obj55926_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55926) {
				console.warn("de-queueing event obj55926." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55926").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55926_droppedInsideTargetActions_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_55934();
function runjs_55934() {
	window.obj55926_droppedInsideTargetActions_runningActionsCount = obj55926_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj55926").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj55926_droppedInsideTargetActions_runningActionsCount = window.obj55926_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj55926_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj55926_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj55926_droppedInsideTargetActions_runningActionsCount == 0) {
	obj55926_droppedInsideTargetActions_actionGroup4();
}
	}, 1);
}







};
obj55926_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55926_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj55926").trigger("obj55926_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55926) {
				console.warn("de-queueing event obj55926." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55926").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55926_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_55935();
function switchText_55935() {
	window.obj55926_droppedInsideTargetActions_runningActionsCount = obj55926_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj55967_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj55967_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj55967").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj55967_content");
			setTimeout(function () {
				window.obj55926_droppedInsideTargetActions_runningActionsCount = window.obj55926_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj55926_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj55926_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj55926_droppedInsideTargetActions_runningActionsCount == 0) {
	obj55926_droppedInsideTargetActions_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj55967 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj55926_droppedInsideTargetActions_runningActionsCount = window.obj55926_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj55926_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj55926_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj55926_droppedInsideTargetActions_runningActionsCount == 0) {
	obj55926_droppedInsideTargetActions_actionGroup5();
}
		}, 1);
	}
}






};
obj55926_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55926_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj55926").trigger("obj55926_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55926) {
				console.warn("de-queueing event obj55926." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55926").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55926_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj55965 
playAudio_55936();
function playAudio_55936() {
	window.obj55926_droppedInsideTargetActions_runningActionsCount = obj55926_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj55965")[0];
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
		    window.obj55926_droppedInsideTargetActions_runningActionsCount = window.obj55926_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj55926_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj55926_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj55926_droppedInsideTargetActions_runningActionsCount == 0) {
	obj55926_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj55926_droppedInsideTargetActions_runningActionsCount = window.obj55926_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj55926_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj55926_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj55926_droppedInsideTargetActions_runningActionsCount == 0) {
	obj55926_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj55926_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj55926_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj55926").trigger("obj55926_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55926) {
				console.warn("de-queueing event obj55926." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55926").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55926_droppedInsideTargetActions_activeActionGroupIndex = 6;
	





















};
obj55887_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55887_onTouchDown_activeActionGroupIndex = -1;
		$("#obj55887").trigger("obj55887_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55887) {
				console.warn("de-queueing event obj55887." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55887").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55887_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj55887");
//	action: dragDrop
//	target: obj55887 
dragDrop_55890();
function dragDrop_55890() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj55887_onTouchDown_runningActionsCount = obj55887_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj55887');
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
	  	containerNode = $('#obj56028');
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
    	window.obj55887_onTouchDown_runningActionsCount = window.obj55887_onTouchDown_runningActionsCount - 1;
if (window.obj55887_onTouchDown_runningActionsCount < 0) {
	window.obj55887_onTouchDown_runningActionsCount = 0;
} else if (window.obj55887_onTouchDown_runningActionsCount == 0) {
	obj55887_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj56020","#obj56018","#obj56016");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_55890 = false;
    	var dropped_id_55890;
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
					dropped_55890 = true;
					dropped_id_55890 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_55890) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj55887").trigger('SCActionDragDrop55890_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj55887_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj55887_onTouchDown_activeActionGroupIndex = -1;
		$("#obj55887").trigger("obj55887_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55887) {
				console.warn("de-queueing event obj55887." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55887").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55887_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj55887_SCActionDragDrop55890_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55887_SCActionDragDrop55890_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj55887").trigger("obj55887_SCActionDragDrop55890_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55887) {
				console.warn("de-queueing event obj55887." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55887").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55887_SCActionDragDrop55890_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj55887 
move_92849();
function move_92849() {
	window.obj55887_SCActionDragDrop55890_droppedOutsideTargetActions_runningActionsCount = obj55887_SCActionDragDrop55890_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj55887");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 393;
	var moveY = 587;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj55887_SCActionDragDrop55890_droppedOutsideTargetActions_runningActionsCount = window.obj55887_SCActionDragDrop55890_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj55887_SCActionDragDrop55890_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj55887_SCActionDragDrop55890_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj55887_SCActionDragDrop55890_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj55887_SCActionDragDrop55890_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj55887_SCActionDragDrop55890_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj55887_SCActionDragDrop55890_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj55887").trigger("obj55887_SCActionDragDrop55890_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55887) {
				console.warn("de-queueing event obj55887." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55887").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55887_SCActionDragDrop55890_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj55887_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55887_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj55887").trigger("obj55887_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55887) {
				console.warn("de-queueing event obj55887." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55887").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55887_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_55913();
function runjs_55913() {
	window.obj55887_droppedInsideTargetActions_3_runningActionsCount = obj55887_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj56016").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj55887_droppedInsideTargetActions_3_runningActionsCount = window.obj55887_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55887_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55887_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55887_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55887_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj55887_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55887_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj55887").trigger("obj55887_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55887) {
				console.warn("de-queueing event obj55887." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55887").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55887_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_55914();
function runjs_55914() {
	window.obj55887_droppedInsideTargetActions_3_runningActionsCount = obj55887_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj56016").css("border-color", "#C00000"); $("#obj56016").css("border-width", "2px"); $("#obj56016").css("border-style", "solid"); $("#obj56016").css("border-radius", "10px"); $("#obj56016").css("-webkit-border-radius", "10px"); $("#obj56016").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj55887_droppedInsideTargetActions_3_runningActionsCount = window.obj55887_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55887_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55887_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55887_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55887_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj55887_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55887_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj55887").trigger("obj55887_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55887) {
				console.warn("de-queueing event obj55887." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55887").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55887_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj56010 
hide_55915();
function hide_55915() {
	var selector = "#obj56010";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj55887_droppedInsideTargetActions_3_runningActionsCount = obj55887_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj55887_droppedInsideTargetActions_3_runningActionsCount = window.obj55887_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55887_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55887_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55887_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55887_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_55915(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj55887_droppedInsideTargetActions_3_runningActionsCount = window.obj55887_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55887_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55887_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55887_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55887_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj55887_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55887_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj55887").trigger("obj55887_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55887) {
				console.warn("de-queueing event obj55887." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55887").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55887_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_55916();
function runjs_55916() {
	window.obj55887_droppedInsideTargetActions_3_runningActionsCount = obj55887_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj55887").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj55887_droppedInsideTargetActions_3_runningActionsCount = window.obj55887_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55887_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55887_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55887_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55887_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj55887_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55887_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj55887").trigger("obj55887_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55887) {
				console.warn("de-queueing event obj55887." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55887").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55887_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_55917();
function switchText_55917() {
	window.obj55887_droppedInsideTargetActions_3_runningActionsCount = obj55887_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj55967_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj55967_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj55967").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj55967_content");
			setTimeout(function () {
				window.obj55887_droppedInsideTargetActions_3_runningActionsCount = window.obj55887_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55887_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55887_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55887_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55887_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj55967 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj55887_droppedInsideTargetActions_3_runningActionsCount = window.obj55887_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55887_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55887_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55887_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55887_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj55887_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55887_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj55887").trigger("obj55887_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55887) {
				console.warn("de-queueing event obj55887." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55887").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55887_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj55887 
move_55918();
function move_55918() {
	window.obj55887_droppedInsideTargetActions_3_runningActionsCount = obj55887_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj55887");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 393;
	var moveY = 587;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj55887_droppedInsideTargetActions_3_runningActionsCount = window.obj55887_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55887_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55887_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55887_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55887_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj55887_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55887_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj55887").trigger("obj55887_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55887) {
				console.warn("de-queueing event obj55887." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55887").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55887_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_55919();
function runjs_55919() {
	window.obj55887_droppedInsideTargetActions_3_runningActionsCount = obj55887_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj56016").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj55887_droppedInsideTargetActions_3_runningActionsCount = window.obj55887_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55887_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55887_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55887_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55887_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj55887_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55887_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj55887").trigger("obj55887_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55887) {
				console.warn("de-queueing event obj55887." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55887").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55887_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_55920();
function runjs_55920() {
	window.obj55887_droppedInsideTargetActions_3_runningActionsCount = obj55887_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj56016").css("border-color", "#000000"); $("#obj56016").css("border-width", "1px"); $("#obj56016").css("border-style", "solid"); $("#obj56016").css("border-radius", "10px"); $("#obj56016").css("-webkit-border-radius", "10px"); $("#obj56016").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj55887_droppedInsideTargetActions_3_runningActionsCount = window.obj55887_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55887_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55887_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55887_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55887_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj55887_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55887_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj55887").trigger("obj55887_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55887) {
				console.warn("de-queueing event obj55887." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55887").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55887_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj56010
(function(){
	window.obj55887_droppedInsideTargetActions_3_runningActionsCount = obj55887_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj56010";
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
					window.obj55887_droppedInsideTargetActions_3_runningActionsCount = window.obj55887_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55887_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55887_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55887_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55887_droppedInsideTargetActions_3_actionGroup9();
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
				window.obj55887_droppedInsideTargetActions_3_runningActionsCount = window.obj55887_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55887_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55887_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55887_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55887_droppedInsideTargetActions_3_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj55887_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55887_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj55887").trigger("obj55887_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55887) {
				console.warn("de-queueing event obj55887." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55887").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55887_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_55922();
function runjs_55922() {
	window.obj55887_droppedInsideTargetActions_3_runningActionsCount = obj55887_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj55887").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj55887_droppedInsideTargetActions_3_runningActionsCount = window.obj55887_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55887_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55887_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55887_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55887_droppedInsideTargetActions_3_actionGroup10();
}
	}, 1);
}







};
obj55887_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55887_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj55887").trigger("obj55887_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55887) {
				console.warn("de-queueing event obj55887." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55887").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55887_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_55923();
function runjs_55923() {
	window.obj55887_droppedInsideTargetActions_3_runningActionsCount = obj55887_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj55887").css("border-color", "rgba(0,0,0,0)"); $("#obj55887").css("border-width", "0px"); $("#obj55887").css("border-style", "solid"); $("#obj55887").css("border-radius", "10px"); $("#obj55887").css("-webkit-border-radius", "10px"); $("#obj55887").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj55887_droppedInsideTargetActions_3_runningActionsCount = window.obj55887_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55887_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55887_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55887_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55887_droppedInsideTargetActions_3_actionGroup11();
}
	}, 1);
}







};
obj55887_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55887_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj55887").trigger("obj55887_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55887) {
				console.warn("de-queueing event obj55887." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55887").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55887_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj55966 
playAudio_55924();
function playAudio_55924() {
	window.obj55887_droppedInsideTargetActions_3_runningActionsCount = obj55887_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj55966")[0];
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
		    window.obj55887_droppedInsideTargetActions_3_runningActionsCount = window.obj55887_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55887_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55887_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55887_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55887_droppedInsideTargetActions_3_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj55887_droppedInsideTargetActions_3_runningActionsCount = window.obj55887_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55887_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55887_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55887_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55887_droppedInsideTargetActions_3_actionGroup12();
}
	}
}









};
obj55887_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55887_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj55887").trigger("obj55887_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55887) {
				console.warn("de-queueing event obj55887." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55887").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55887_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_55925();
function switchText_55925() {
	window.obj55887_droppedInsideTargetActions_3_runningActionsCount = obj55887_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj55967_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj55967_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj55967").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj55967_content");
			setTimeout(function () {
				window.obj55887_droppedInsideTargetActions_3_runningActionsCount = window.obj55887_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55887_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55887_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55887_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55887_droppedInsideTargetActions_3_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj55967 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj55887_droppedInsideTargetActions_3_runningActionsCount = window.obj55887_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55887_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55887_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55887_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55887_droppedInsideTargetActions_3_actionGroup13();
}
		}, 1);
	}
}






};
obj55887_droppedInsideTargetActions_3_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj55887_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj55887").trigger("obj55887_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55887) {
				console.warn("de-queueing event obj55887." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55887").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55887_droppedInsideTargetActions_3_activeActionGroupIndex = 13;
	





















};
obj55887_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55887_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj55887").trigger("obj55887_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55887) {
				console.warn("de-queueing event obj55887." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55887").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55887_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_55899();
function runjs_55899() {
	window.obj55887_droppedInsideTargetActions_2_runningActionsCount = obj55887_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj56018").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj55887_droppedInsideTargetActions_2_runningActionsCount = window.obj55887_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55887_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55887_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55887_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55887_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj55887_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55887_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj55887").trigger("obj55887_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55887) {
				console.warn("de-queueing event obj55887." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55887").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55887_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_55900();
function runjs_55900() {
	window.obj55887_droppedInsideTargetActions_2_runningActionsCount = obj55887_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj56018").css("border-color", "#C00000"); $("#obj56018").css("border-width", "2px"); $("#obj56018").css("border-style", "solid"); $("#obj56018").css("border-radius", "10px"); $("#obj56018").css("-webkit-border-radius", "10px"); $("#obj56018").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj55887_droppedInsideTargetActions_2_runningActionsCount = window.obj55887_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55887_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55887_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55887_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55887_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj55887_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55887_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj55887").trigger("obj55887_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55887) {
				console.warn("de-queueing event obj55887." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55887").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55887_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj56012 
hide_55901();
function hide_55901() {
	var selector = "#obj56012";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj55887_droppedInsideTargetActions_2_runningActionsCount = obj55887_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj55887_droppedInsideTargetActions_2_runningActionsCount = window.obj55887_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55887_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55887_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55887_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55887_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_55901(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj55887_droppedInsideTargetActions_2_runningActionsCount = window.obj55887_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55887_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55887_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55887_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55887_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj55887_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55887_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj55887").trigger("obj55887_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55887) {
				console.warn("de-queueing event obj55887." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55887").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55887_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_55902();
function runjs_55902() {
	window.obj55887_droppedInsideTargetActions_2_runningActionsCount = obj55887_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj55887").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj55887_droppedInsideTargetActions_2_runningActionsCount = window.obj55887_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55887_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55887_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55887_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55887_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj55887_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55887_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj55887").trigger("obj55887_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55887) {
				console.warn("de-queueing event obj55887." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55887").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55887_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_55903();
function switchText_55903() {
	window.obj55887_droppedInsideTargetActions_2_runningActionsCount = obj55887_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj55967_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj55967_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj55967").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj55967_content");
			setTimeout(function () {
				window.obj55887_droppedInsideTargetActions_2_runningActionsCount = window.obj55887_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55887_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55887_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55887_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55887_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj55967 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj55887_droppedInsideTargetActions_2_runningActionsCount = window.obj55887_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55887_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55887_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55887_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55887_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj55887_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55887_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj55887").trigger("obj55887_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55887) {
				console.warn("de-queueing event obj55887." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55887").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55887_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj55887 
move_55904();
function move_55904() {
	window.obj55887_droppedInsideTargetActions_2_runningActionsCount = obj55887_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj55887");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 393;
	var moveY = 587;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj55887_droppedInsideTargetActions_2_runningActionsCount = window.obj55887_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55887_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55887_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55887_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55887_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj55887_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55887_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj55887").trigger("obj55887_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55887) {
				console.warn("de-queueing event obj55887." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55887").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55887_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_55905();
function runjs_55905() {
	window.obj55887_droppedInsideTargetActions_2_runningActionsCount = obj55887_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj56018").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj55887_droppedInsideTargetActions_2_runningActionsCount = window.obj55887_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55887_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55887_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55887_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55887_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj55887_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55887_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj55887").trigger("obj55887_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55887) {
				console.warn("de-queueing event obj55887." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55887").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55887_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_55906();
function runjs_55906() {
	window.obj55887_droppedInsideTargetActions_2_runningActionsCount = obj55887_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj56018").css("border-color", "#000000"); $("#obj56018").css("border-width", "1px"); $("#obj56018").css("border-style", "solid"); $("#obj56018").css("border-radius", "10px"); $("#obj56018").css("-webkit-border-radius", "10px"); $("#obj56018").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj55887_droppedInsideTargetActions_2_runningActionsCount = window.obj55887_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55887_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55887_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55887_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55887_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj55887_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55887_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj55887").trigger("obj55887_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55887) {
				console.warn("de-queueing event obj55887." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55887").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55887_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj56012
(function(){
	window.obj55887_droppedInsideTargetActions_2_runningActionsCount = obj55887_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj56012";
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
					window.obj55887_droppedInsideTargetActions_2_runningActionsCount = window.obj55887_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55887_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55887_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55887_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55887_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj55887_droppedInsideTargetActions_2_runningActionsCount = window.obj55887_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55887_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55887_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55887_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55887_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj55887_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55887_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj55887").trigger("obj55887_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55887) {
				console.warn("de-queueing event obj55887." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55887").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55887_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_55908();
function runjs_55908() {
	window.obj55887_droppedInsideTargetActions_2_runningActionsCount = obj55887_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj55887").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj55887_droppedInsideTargetActions_2_runningActionsCount = window.obj55887_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55887_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55887_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55887_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55887_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj55887_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55887_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj55887").trigger("obj55887_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55887) {
				console.warn("de-queueing event obj55887." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55887").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55887_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_55909();
function runjs_55909() {
	window.obj55887_droppedInsideTargetActions_2_runningActionsCount = obj55887_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj55887").css("border-color", "rgba(0,0,0,0)"); $("#obj55887").css("border-width", "0px"); $("#obj55887").css("border-style", "solid"); $("#obj55887").css("border-radius", "10px"); $("#obj55887").css("-webkit-border-radius", "10px"); $("#obj55887").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj55887_droppedInsideTargetActions_2_runningActionsCount = window.obj55887_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55887_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55887_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55887_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55887_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj55887_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55887_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj55887").trigger("obj55887_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55887) {
				console.warn("de-queueing event obj55887." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55887").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55887_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj55966 
playAudio_55910();
function playAudio_55910() {
	window.obj55887_droppedInsideTargetActions_2_runningActionsCount = obj55887_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj55966")[0];
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
		    window.obj55887_droppedInsideTargetActions_2_runningActionsCount = window.obj55887_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55887_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55887_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55887_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55887_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj55887_droppedInsideTargetActions_2_runningActionsCount = window.obj55887_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55887_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55887_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55887_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55887_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj55887_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55887_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj55887").trigger("obj55887_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55887) {
				console.warn("de-queueing event obj55887." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55887").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55887_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_55911();
function switchText_55911() {
	window.obj55887_droppedInsideTargetActions_2_runningActionsCount = obj55887_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj55967_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj55967_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj55967").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj55967_content");
			setTimeout(function () {
				window.obj55887_droppedInsideTargetActions_2_runningActionsCount = window.obj55887_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55887_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55887_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55887_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55887_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj55967 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj55887_droppedInsideTargetActions_2_runningActionsCount = window.obj55887_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55887_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55887_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55887_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55887_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj55887_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj55887_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj55887").trigger("obj55887_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55887) {
				console.warn("de-queueing event obj55887." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55887").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55887_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj55887_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55887_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj55887").trigger("obj55887_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55887) {
				console.warn("de-queueing event obj55887." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55887").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55887_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_55892();
function runjs_55892() {
	window.obj55887_droppedInsideTargetActions_runningActionsCount = obj55887_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj56020").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj55887_droppedInsideTargetActions_runningActionsCount = window.obj55887_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj55887_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj55887_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj55887_droppedInsideTargetActions_runningActionsCount == 0) {
	obj55887_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj55887_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55887_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj55887").trigger("obj55887_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55887) {
				console.warn("de-queueing event obj55887." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55887").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55887_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_55893();
function runjs_55893() {
	window.obj55887_droppedInsideTargetActions_runningActionsCount = obj55887_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj56020").css("border-color", "#058E3F"); $("#obj56020").css("border-width", "2px"); $("#obj56020").css("border-style", "solid"); $("#obj56020").css("border-radius", "10px"); $("#obj56020").css("-webkit-border-radius", "10px"); $("#obj56020").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj55887_droppedInsideTargetActions_runningActionsCount = window.obj55887_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj55887_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj55887_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj55887_droppedInsideTargetActions_runningActionsCount == 0) {
	obj55887_droppedInsideTargetActions_actionGroup2();
}
	}, 1);
}







};
obj55887_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55887_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj55887").trigger("obj55887_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55887) {
				console.warn("de-queueing event obj55887." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55887").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55887_droppedInsideTargetActions_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj56014 
hide_55894();
function hide_55894() {
	var selector = "#obj56014";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj55887_droppedInsideTargetActions_runningActionsCount = obj55887_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj55887_droppedInsideTargetActions_runningActionsCount = window.obj55887_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj55887_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj55887_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj55887_droppedInsideTargetActions_runningActionsCount == 0) {
	obj55887_droppedInsideTargetActions_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_55894(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj55887_droppedInsideTargetActions_runningActionsCount = window.obj55887_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj55887_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj55887_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj55887_droppedInsideTargetActions_runningActionsCount == 0) {
	obj55887_droppedInsideTargetActions_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj55887_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55887_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj55887").trigger("obj55887_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55887) {
				console.warn("de-queueing event obj55887." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55887").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55887_droppedInsideTargetActions_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_55895();
function runjs_55895() {
	window.obj55887_droppedInsideTargetActions_runningActionsCount = obj55887_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj55887").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj55887_droppedInsideTargetActions_runningActionsCount = window.obj55887_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj55887_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj55887_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj55887_droppedInsideTargetActions_runningActionsCount == 0) {
	obj55887_droppedInsideTargetActions_actionGroup4();
}
	}, 1);
}







};
obj55887_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55887_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj55887").trigger("obj55887_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55887) {
				console.warn("de-queueing event obj55887." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55887").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55887_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_55896();
function switchText_55896() {
	window.obj55887_droppedInsideTargetActions_runningActionsCount = obj55887_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj55967_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj55967_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj55967").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj55967_content");
			setTimeout(function () {
				window.obj55887_droppedInsideTargetActions_runningActionsCount = window.obj55887_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj55887_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj55887_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj55887_droppedInsideTargetActions_runningActionsCount == 0) {
	obj55887_droppedInsideTargetActions_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj55967 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj55887_droppedInsideTargetActions_runningActionsCount = window.obj55887_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj55887_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj55887_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj55887_droppedInsideTargetActions_runningActionsCount == 0) {
	obj55887_droppedInsideTargetActions_actionGroup5();
}
		}, 1);
	}
}






};
obj55887_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55887_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj55887").trigger("obj55887_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55887) {
				console.warn("de-queueing event obj55887." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55887").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55887_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj55965 
playAudio_55897();
function playAudio_55897() {
	window.obj55887_droppedInsideTargetActions_runningActionsCount = obj55887_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj55965")[0];
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
		    window.obj55887_droppedInsideTargetActions_runningActionsCount = window.obj55887_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj55887_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj55887_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj55887_droppedInsideTargetActions_runningActionsCount == 0) {
	obj55887_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj55887_droppedInsideTargetActions_runningActionsCount = window.obj55887_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj55887_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj55887_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj55887_droppedInsideTargetActions_runningActionsCount == 0) {
	obj55887_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj55887_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj55887_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj55887").trigger("obj55887_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55887) {
				console.warn("de-queueing event obj55887." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55887").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55887_droppedInsideTargetActions_activeActionGroupIndex = 6;
	





















};
obj68334_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68334_onTap_activeActionGroupIndex = -1;
		$("#obj68334").trigger("obj68334_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68334) {
				console.warn("de-queueing event obj68334." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68334").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68334_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj68334 
hide_68337();
function hide_68337() {
	var selector = "#obj68334";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj68334_onTap_runningActionsCount = obj68334_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj68334_onTap_runningActionsCount = window.obj68334_onTap_runningActionsCount - 1;
if (window.obj68334_onTap_runningActionsCount < 0) {
	window.obj68334_onTap_runningActionsCount = 0;
} else if (window.obj68334_onTap_runningActionsCount == 0) {
	obj68334_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_68337(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj68334_onTap_runningActionsCount = window.obj68334_onTap_runningActionsCount - 1;
if (window.obj68334_onTap_runningActionsCount < 0) {
	window.obj68334_onTap_runningActionsCount = 0;
} else if (window.obj68334_onTap_runningActionsCount == 0) {
	obj68334_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj68340 
stopMovie_68336();
function stopMovie_68336() {
	window.obj68334_onTap_runningActionsCount = obj68334_onTap_runningActionsCount + 1;
	var myVideo = $("#obj68340")[0];
	myVideo.pause();
	window.obj68334_onTap_runningActionsCount = window.obj68334_onTap_runningActionsCount - 1;
if (window.obj68334_onTap_runningActionsCount < 0) {
	window.obj68334_onTap_runningActionsCount = 0;
} else if (window.obj68334_onTap_runningActionsCount == 0) {
	obj68334_onTap_actionGroup1();
}
}
















};
obj68334_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68334_onTap_activeActionGroupIndex = -1;
		$("#obj68334").trigger("obj68334_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68334) {
				console.warn("de-queueing event obj68334." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68334").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68334_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj68326
(function(){
	window.obj68334_onTap_runningActionsCount = obj68334_onTap_runningActionsCount + 1;

	var selector = "#obj68326";
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
					window.obj68334_onTap_runningActionsCount = window.obj68334_onTap_runningActionsCount - 1;
if (window.obj68334_onTap_runningActionsCount < 0) {
	window.obj68334_onTap_runningActionsCount = 0;
} else if (window.obj68334_onTap_runningActionsCount == 0) {
	obj68334_onTap_actionGroup2();
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
				window.obj68334_onTap_runningActionsCount = window.obj68334_onTap_runningActionsCount - 1;
if (window.obj68334_onTap_runningActionsCount < 0) {
	window.obj68334_onTap_runningActionsCount = 0;
} else if (window.obj68334_onTap_runningActionsCount == 0) {
	obj68334_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj68334_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68334_onTap_activeActionGroupIndex = -1;
		$("#obj68334").trigger("obj68334_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68334) {
				console.warn("de-queueing event obj68334." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68334").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68334_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj68340 
move_68339();
function move_68339() {
	window.obj68334_onTap_runningActionsCount = obj68334_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj68340");
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
			window.obj68334_onTap_runningActionsCount = window.obj68334_onTap_runningActionsCount - 1;
if (window.obj68334_onTap_runningActionsCount < 0) {
	window.obj68334_onTap_runningActionsCount = 0;
} else if (window.obj68334_onTap_runningActionsCount == 0) {
	obj68334_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj68334_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj68334_onTap_activeActionGroupIndex = -1;
		$("#obj68334").trigger("obj68334_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68334) {
				console.warn("de-queueing event obj68334." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68334").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68334_onTap_activeActionGroupIndex = 3;
	





















};
obj68326_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68326_onTap_activeActionGroupIndex = -1;
		$("#obj68326").trigger("obj68326_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68326) {
				console.warn("de-queueing event obj68326." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68326").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68326_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj68326 
hide_68329();
function hide_68329() {
	var selector = "#obj68326";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj68326_onTap_runningActionsCount = obj68326_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj68326_onTap_runningActionsCount = window.obj68326_onTap_runningActionsCount - 1;
if (window.obj68326_onTap_runningActionsCount < 0) {
	window.obj68326_onTap_runningActionsCount = 0;
} else if (window.obj68326_onTap_runningActionsCount == 0) {
	obj68326_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_68329(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj68326_onTap_runningActionsCount = window.obj68326_onTap_runningActionsCount - 1;
if (window.obj68326_onTap_runningActionsCount < 0) {
	window.obj68326_onTap_runningActionsCount = 0;
} else if (window.obj68326_onTap_runningActionsCount == 0) {
	obj68326_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj68340 
playPauseMovie_68328();
function playPauseMovie_68328() {
	window.obj68326_onTap_runningActionsCount = obj68326_onTap_runningActionsCount + 1;
	var myVideo = $("#obj68340")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj68326_onTap_runningActionsCount = window.obj68326_onTap_runningActionsCount - 1;
if (window.obj68326_onTap_runningActionsCount < 0) {
	window.obj68326_onTap_runningActionsCount = 0;
} else if (window.obj68326_onTap_runningActionsCount == 0) {
	obj68326_onTap_actionGroup1();
}
}

















};
obj68326_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68326_onTap_activeActionGroupIndex = -1;
		$("#obj68326").trigger("obj68326_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68326) {
				console.warn("de-queueing event obj68326." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68326").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68326_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj68334
(function(){
	window.obj68326_onTap_runningActionsCount = obj68326_onTap_runningActionsCount + 1;

	var selector = "#obj68334";
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
					window.obj68326_onTap_runningActionsCount = window.obj68326_onTap_runningActionsCount - 1;
if (window.obj68326_onTap_runningActionsCount < 0) {
	window.obj68326_onTap_runningActionsCount = 0;
} else if (window.obj68326_onTap_runningActionsCount == 0) {
	obj68326_onTap_actionGroup2();
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
				window.obj68326_onTap_runningActionsCount = window.obj68326_onTap_runningActionsCount - 1;
if (window.obj68326_onTap_runningActionsCount < 0) {
	window.obj68326_onTap_runningActionsCount = 0;
} else if (window.obj68326_onTap_runningActionsCount == 0) {
	obj68326_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj68326_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68326_onTap_activeActionGroupIndex = -1;
		$("#obj68326").trigger("obj68326_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68326) {
				console.warn("de-queueing event obj68326." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68326").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68326_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj68340 
move_68331();
function move_68331() {
	window.obj68326_onTap_runningActionsCount = obj68326_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj68340");
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
			window.obj68326_onTap_runningActionsCount = window.obj68326_onTap_runningActionsCount - 1;
if (window.obj68326_onTap_runningActionsCount < 0) {
	window.obj68326_onTap_runningActionsCount = 0;
} else if (window.obj68326_onTap_runningActionsCount == 0) {
	obj68326_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj68326_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj68326_onTap_activeActionGroupIndex = -1;
		$("#obj68326").trigger("obj68326_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68326) {
				console.warn("de-queueing event obj68326." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68326").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68326_onTap_activeActionGroupIndex = 3;
	





















};
obj89353_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89353_onTap_activeActionGroupIndex = -1;
		$("#obj89353").trigger("obj89353_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89353) {
				console.warn("de-queueing event obj89353." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89353").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89353_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj89358 
stopAudio_89355();
function stopAudio_89355() {
	window.obj89353_onTap_runningActionsCount = obj89353_onTap_runningActionsCount + 1;
	var myAudio = $("#obj89358")[0];
	myAudio.pause();
	window.obj89353_onTap_runningActionsCount = window.obj89353_onTap_runningActionsCount - 1;
if (window.obj89353_onTap_runningActionsCount < 0) {
	window.obj89353_onTap_runningActionsCount = 0;
} else if (window.obj89353_onTap_runningActionsCount == 0) {
	obj89353_onTap_actionGroup1();
}
}








};
obj89353_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89353_onTap_activeActionGroupIndex = -1;
		$("#obj89353").trigger("obj89353_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89353) {
				console.warn("de-queueing event obj89353." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89353").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89353_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj89353 
hide_89356();
function hide_89356() {
	var selector = "#obj89353";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj89353_onTap_runningActionsCount = obj89353_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj89353_onTap_runningActionsCount = window.obj89353_onTap_runningActionsCount - 1;
if (window.obj89353_onTap_runningActionsCount < 0) {
	window.obj89353_onTap_runningActionsCount = 0;
} else if (window.obj89353_onTap_runningActionsCount == 0) {
	obj89353_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_89356(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj89353_onTap_runningActionsCount = window.obj89353_onTap_runningActionsCount - 1;
if (window.obj89353_onTap_runningActionsCount < 0) {
	window.obj89353_onTap_runningActionsCount = 0;
} else if (window.obj89353_onTap_runningActionsCount == 0) {
	obj89353_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj89353_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89353_onTap_activeActionGroupIndex = -1;
		$("#obj89353").trigger("obj89353_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89353) {
				console.warn("de-queueing event obj89353." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89353").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89353_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj89348
(function(){
	window.obj89353_onTap_runningActionsCount = obj89353_onTap_runningActionsCount + 1;

	var selector = "#obj89348";
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
					window.obj89353_onTap_runningActionsCount = window.obj89353_onTap_runningActionsCount - 1;
if (window.obj89353_onTap_runningActionsCount < 0) {
	window.obj89353_onTap_runningActionsCount = 0;
} else if (window.obj89353_onTap_runningActionsCount == 0) {
	obj89353_onTap_actionGroup3();
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
				window.obj89353_onTap_runningActionsCount = window.obj89353_onTap_runningActionsCount - 1;
if (window.obj89353_onTap_runningActionsCount < 0) {
	window.obj89353_onTap_runningActionsCount = 0;
} else if (window.obj89353_onTap_runningActionsCount == 0) {
	obj89353_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj89353_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj89353_onTap_activeActionGroupIndex = -1;
		$("#obj89353").trigger("obj89353_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89353) {
				console.warn("de-queueing event obj89353." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89353").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89353_onTap_activeActionGroupIndex = 3;
	





















};
obj89348_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89348_onTap_activeActionGroupIndex = -1;
		$("#obj89348").trigger("obj89348_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89348) {
				console.warn("de-queueing event obj89348." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89348").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89348_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj89348 
hide_89350();
function hide_89350() {
	var selector = "#obj89348";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj89348_onTap_runningActionsCount = obj89348_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj89348_onTap_runningActionsCount = window.obj89348_onTap_runningActionsCount - 1;
if (window.obj89348_onTap_runningActionsCount < 0) {
	window.obj89348_onTap_runningActionsCount = 0;
} else if (window.obj89348_onTap_runningActionsCount == 0) {
	obj89348_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_89350(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj89348_onTap_runningActionsCount = window.obj89348_onTap_runningActionsCount - 1;
if (window.obj89348_onTap_runningActionsCount < 0) {
	window.obj89348_onTap_runningActionsCount = 0;
} else if (window.obj89348_onTap_runningActionsCount == 0) {
	obj89348_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj89348_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89348_onTap_activeActionGroupIndex = -1;
		$("#obj89348").trigger("obj89348_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89348) {
				console.warn("de-queueing event obj89348." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89348").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89348_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj89353
(function(){
	window.obj89348_onTap_runningActionsCount = obj89348_onTap_runningActionsCount + 1;

	var selector = "#obj89353";
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
					window.obj89348_onTap_runningActionsCount = window.obj89348_onTap_runningActionsCount - 1;
if (window.obj89348_onTap_runningActionsCount < 0) {
	window.obj89348_onTap_runningActionsCount = 0;
} else if (window.obj89348_onTap_runningActionsCount == 0) {
	obj89348_onTap_actionGroup2();
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
				window.obj89348_onTap_runningActionsCount = window.obj89348_onTap_runningActionsCount - 1;
if (window.obj89348_onTap_runningActionsCount < 0) {
	window.obj89348_onTap_runningActionsCount = 0;
} else if (window.obj89348_onTap_runningActionsCount == 0) {
	obj89348_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj89348_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89348_onTap_activeActionGroupIndex = -1;
		$("#obj89348").trigger("obj89348_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89348) {
				console.warn("de-queueing event obj89348." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89348").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89348_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj89358 
playAudio_89352();
function playAudio_89352() {
	window.obj89348_onTap_runningActionsCount = obj89348_onTap_runningActionsCount + 1;
	var myAudio = $("#obj89358")[0];
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
		    window.obj89348_onTap_runningActionsCount = window.obj89348_onTap_runningActionsCount - 1;
if (window.obj89348_onTap_runningActionsCount < 0) {
	window.obj89348_onTap_runningActionsCount = 0;
} else if (window.obj89348_onTap_runningActionsCount == 0) {
	obj89348_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj89348_onTap_runningActionsCount = window.obj89348_onTap_runningActionsCount - 1;
if (window.obj89348_onTap_runningActionsCount < 0) {
	window.obj89348_onTap_runningActionsCount = 0;
} else if (window.obj89348_onTap_runningActionsCount == 0) {
	obj89348_onTap_actionGroup3();
}
	}
}









};
obj89348_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj89348_onTap_activeActionGroupIndex = -1;
		$("#obj89348").trigger("obj89348_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89348) {
				console.warn("de-queueing event obj89348." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89348").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89348_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj56045: Event Touch Down
 *
 */
$("#obj56045").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj56045_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj56045_onTap is still running");
	return;
}
var obj56045_onTap_runningActionsCount = 0;
var obj56045_onTap_loopCount = 0;
obj56045_onTap_actionGroup0();
});










/*
 *
 *   obj56042: Event Touch Down
 *
 */
$("#obj56042").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj56042_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj56042_onTap is still running");
	return;
}
var obj56042_onTap_runningActionsCount = 0;
var obj56042_onTap_loopCount = 0;
obj56042_onTap_actionGroup0();
});










/*
 *
 *   obj56038: Event Touch Down
 *
 */
$("#obj56038").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj56038_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj56038_onTap is still running");
	return;
}
var obj56038_onTap_runningActionsCount = 0;
var obj56038_onTap_loopCount = 0;
obj56038_onTap_actionGroup0();
});

































































































































































/*
 *
 *   obj55969: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj55969");
	var winTarget = document.getElementById("obj55969");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj55969").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj55969_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj55969_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj55969_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj55969_onTouchDown is still running");
	return;
}
var obj55969_onTouchDown_runningActionsCount = 0;
var obj55969_onTouchDown_loopCount = 0;
obj55969_onTouchDown_actionGroup0();
});



/*
 *
 *   obj55969: Event SCActionDragDrop55972_droppedOutsideTargetActions
 *
 */
$("#obj55969").bind("SCActionDragDrop55972_droppedOutsideTargetActions", function(event) {
	if (window.obj55969_SCActionDragDrop55972_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj55969_SCActionDragDrop55972_droppedOutsideTargetActions is still running");
	return;
}
var obj55969_SCActionDragDrop55972_droppedOutsideTargetActions_runningActionsCount = 0;
var obj55969_SCActionDragDrop55972_droppedOutsideTargetActions_loopCount = 0;
obj55969_SCActionDragDrop55972_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj55969: Event droppedInsideTargetActions_3
 *
 */
$("#obj55969").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj55969_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj55969_droppedInsideTargetActions_3 is still running");
	return;
}
var obj55969_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj55969_droppedInsideTargetActions_3_loopCount = 0;
obj55969_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj55969: Event droppedInsideTargetActions_2
 *
 */
$("#obj55969").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj55969_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj55969_droppedInsideTargetActions_2 is still running");
	return;
}
var obj55969_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj55969_droppedInsideTargetActions_2_loopCount = 0;
obj55969_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj55969: Event droppedInsideTargetActions
 *
 */
$("#obj55969").bind("droppedInsideTargetActions", function(event) {
	if (window.obj55969_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj55969_droppedInsideTargetActions is still running");
	return;
}
var obj55969_droppedInsideTargetActions_runningActionsCount = 0;
var obj55969_droppedInsideTargetActions_loopCount = 0;
obj55969_droppedInsideTargetActions_actionGroup0();
});




































/*
 *
 *   obj55926: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj55926");
	var winTarget = document.getElementById("obj55926");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj55926").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj55926_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj55926_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj55926_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj55926_onTouchDown is still running");
	return;
}
var obj55926_onTouchDown_runningActionsCount = 0;
var obj55926_onTouchDown_loopCount = 0;
obj55926_onTouchDown_actionGroup0();
});



/*
 *
 *   obj55926: Event SCActionDragDrop55929_droppedOutsideTargetActions
 *
 */
$("#obj55926").bind("SCActionDragDrop55929_droppedOutsideTargetActions", function(event) {
	if (window.obj55926_SCActionDragDrop55929_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj55926_SCActionDragDrop55929_droppedOutsideTargetActions is still running");
	return;
}
var obj55926_SCActionDragDrop55929_droppedOutsideTargetActions_runningActionsCount = 0;
var obj55926_SCActionDragDrop55929_droppedOutsideTargetActions_loopCount = 0;
obj55926_SCActionDragDrop55929_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj55926: Event droppedInsideTargetActions_3
 *
 */
$("#obj55926").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj55926_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj55926_droppedInsideTargetActions_3 is still running");
	return;
}
var obj55926_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj55926_droppedInsideTargetActions_3_loopCount = 0;
obj55926_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj55926: Event droppedInsideTargetActions_2
 *
 */
$("#obj55926").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj55926_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj55926_droppedInsideTargetActions_2 is still running");
	return;
}
var obj55926_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj55926_droppedInsideTargetActions_2_loopCount = 0;
obj55926_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj55926: Event droppedInsideTargetActions
 *
 */
$("#obj55926").bind("droppedInsideTargetActions", function(event) {
	if (window.obj55926_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj55926_droppedInsideTargetActions is still running");
	return;
}
var obj55926_droppedInsideTargetActions_runningActionsCount = 0;
var obj55926_droppedInsideTargetActions_loopCount = 0;
obj55926_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj55887: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj55887");
	var winTarget = document.getElementById("obj55887");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj55887").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj55887_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj55887_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj55887_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj55887_onTouchDown is still running");
	return;
}
var obj55887_onTouchDown_runningActionsCount = 0;
var obj55887_onTouchDown_loopCount = 0;
obj55887_onTouchDown_actionGroup0();
});



/*
 *
 *   obj55887: Event SCActionDragDrop55890_droppedOutsideTargetActions
 *
 */
$("#obj55887").bind("SCActionDragDrop55890_droppedOutsideTargetActions", function(event) {
	if (window.obj55887_SCActionDragDrop55890_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj55887_SCActionDragDrop55890_droppedOutsideTargetActions is still running");
	return;
}
var obj55887_SCActionDragDrop55890_droppedOutsideTargetActions_runningActionsCount = 0;
var obj55887_SCActionDragDrop55890_droppedOutsideTargetActions_loopCount = 0;
obj55887_SCActionDragDrop55890_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj55887: Event droppedInsideTargetActions_3
 *
 */
$("#obj55887").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj55887_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj55887_droppedInsideTargetActions_3 is still running");
	return;
}
var obj55887_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj55887_droppedInsideTargetActions_3_loopCount = 0;
obj55887_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj55887: Event droppedInsideTargetActions_2
 *
 */
$("#obj55887").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj55887_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj55887_droppedInsideTargetActions_2 is still running");
	return;
}
var obj55887_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj55887_droppedInsideTargetActions_2_loopCount = 0;
obj55887_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj55887: Event droppedInsideTargetActions
 *
 */
$("#obj55887").bind("droppedInsideTargetActions", function(event) {
	if (window.obj55887_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj55887_droppedInsideTargetActions is still running");
	return;
}
var obj55887_droppedInsideTargetActions_runningActionsCount = 0;
var obj55887_droppedInsideTargetActions_loopCount = 0;
obj55887_droppedInsideTargetActions_actionGroup0();
});





/*
 *
 *   obj68334: Event Touch Down
 *
 */
$("#obj68334").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj68334_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj68334_onTap is still running");
	return;
}
var obj68334_onTap_runningActionsCount = 0;
var obj68334_onTap_loopCount = 0;
obj68334_onTap_actionGroup0();
});










/*
 *
 *   obj68326: Event Touch Down
 *
 */
$("#obj68326").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj68326_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj68326_onTap is still running");
	return;
}
var obj68326_onTap_runningActionsCount = 0;
var obj68326_onTap_loopCount = 0;
obj68326_onTap_actionGroup0();
});










/*
 *
 *   obj89353: Event Touch Down
 *
 */
$("#obj89353").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj89353_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj89353_onTap is still running");
	return;
}
var obj89353_onTap_runningActionsCount = 0;
var obj89353_onTap_loopCount = 0;
obj89353_onTap_actionGroup0();
});










/*
 *
 *   obj89348: Event Touch Down
 *
 */
$("#obj89348").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj89348_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj89348_onTap is still running");
	return;
}
var obj89348_onTap_runningActionsCount = 0;
var obj89348_onTap_loopCount = 0;
obj89348_onTap_actionGroup0();
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
	
$("#obj56061").trigger('SCEventShow');
$("#obj56045").trigger('SCEventShow');
$("#obj56042").trigger('SCEventShow');
$("#obj56038").trigger('SCEventShow');
$("#obj56036").trigger('SCEventShow');
$("#obj56034").trigger('SCEventShow');
$("#obj56032").trigger('SCEventShow');
$("#obj56030").trigger('SCEventShow');
$("#obj56028").trigger('SCEventShow');
$("#obj56026").trigger('SCEventShow');
$("#obj56024").trigger('SCEventShow');
$("#obj56022").trigger('SCEventShow');
$("#obj56020").trigger('SCEventShow');
$("#obj56018").trigger('SCEventShow');
$("#obj56016").trigger('SCEventShow');
$("#obj56014").trigger('SCEventShow');
$("#obj56012").trigger('SCEventShow');
$("#obj56010").trigger('SCEventShow');
$("#obj56008").trigger('SCEventShow');
$("#obj55969").trigger('SCEventShow');
$("#obj55967").trigger('SCEventShow');
$("#obj55966").trigger('SCEventShow');
$("#obj55965").trigger('SCEventShow');
$("#obj55926").trigger('SCEventShow');
$("#obj55887").trigger('SCEventShow');
$("#obj68334").trigger('SCEventShow');
$("#obj68326").trigger('SCEventShow');
$("#obj89353").trigger('SCEventShow');
$("#obj89348").trigger('SCEventShow');
$("#obj89358").trigger('SCEventShow');
$("#obj95041").trigger('SCEventShow');
$("#obj68340").trigger('SCEventShow');
	
});