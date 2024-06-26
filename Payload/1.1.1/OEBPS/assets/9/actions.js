pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 760;
pubcoder.page.title = pubcoder.page.title || "9";
pubcoder.page.number = pubcoder.page.number || 9;
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
var obj766_onTap_activeActionGroupIndex = -1;
var obj766_onTap_runningActionsCount = 0;
var obj766_onTap_loopCount = 0;
var obj763_onTap_activeActionGroupIndex = -1;
var obj763_onTap_runningActionsCount = 0;
var obj763_onTap_loopCount = 0;
var obj769_onTap_activeActionGroupIndex = -1;
var obj769_onTap_runningActionsCount = 0;
var obj769_onTap_loopCount = 0;
var obj806_onDrag_activeActionGroupIndex = -1;
var obj806_onDrag_runningActionsCount = 0;
var obj806_onDrag_loopCount = 0;
var obj806_onTouchDown_activeActionGroupIndex = -1;
var obj806_onTouchDown_runningActionsCount = 0;
var obj806_onTouchDown_loopCount = 0;
var obj806_SCActionDragDrop850_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj806_SCActionDragDrop850_droppedOutsideTargetActions_runningActionsCount = 0;
var obj806_SCActionDragDrop850_droppedOutsideTargetActions_loopCount = 0;
var obj806_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj806_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj806_droppedInsideTargetActions_3_loopCount = 0;
var obj806_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj806_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj806_droppedInsideTargetActions_2_loopCount = 0;
var obj806_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj806_droppedInsideTargetActions_runningActionsCount = 0;
var obj806_droppedInsideTargetActions_loopCount = 0;
var obj808_onDrag_activeActionGroupIndex = -1;
var obj808_onDrag_runningActionsCount = 0;
var obj808_onDrag_loopCount = 0;
var obj808_onTouchDown_activeActionGroupIndex = -1;
var obj808_onTouchDown_runningActionsCount = 0;
var obj808_onTouchDown_loopCount = 0;
var obj808_SCActionDragDrop861_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj808_SCActionDragDrop861_droppedOutsideTargetActions_runningActionsCount = 0;
var obj808_SCActionDragDrop861_droppedOutsideTargetActions_loopCount = 0;
var obj808_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj808_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj808_droppedInsideTargetActions_3_loopCount = 0;
var obj808_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj808_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj808_droppedInsideTargetActions_2_loopCount = 0;
var obj808_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj808_droppedInsideTargetActions_runningActionsCount = 0;
var obj808_droppedInsideTargetActions_loopCount = 0;
var obj947_onDrag_activeActionGroupIndex = -1;
var obj947_onDrag_runningActionsCount = 0;
var obj947_onDrag_loopCount = 0;
var obj947_onTouchDown_activeActionGroupIndex = -1;
var obj947_onTouchDown_runningActionsCount = 0;
var obj947_onTouchDown_loopCount = 0;
var obj947_SCActionDragDrop950_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj947_SCActionDragDrop950_droppedOutsideTargetActions_runningActionsCount = 0;
var obj947_SCActionDragDrop950_droppedOutsideTargetActions_loopCount = 0;
var obj947_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj947_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj947_droppedInsideTargetActions_3_loopCount = 0;
var obj947_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj947_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj947_droppedInsideTargetActions_2_loopCount = 0;
var obj947_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj947_droppedInsideTargetActions_runningActionsCount = 0;
var obj947_droppedInsideTargetActions_loopCount = 0;
var obj65102_onTap_activeActionGroupIndex = -1;
var obj65102_onTap_runningActionsCount = 0;
var obj65102_onTap_loopCount = 0;
var obj65094_onTap_activeActionGroupIndex = -1;
var obj65094_onTap_runningActionsCount = 0;
var obj65094_onTap_loopCount = 0;
var obj86889_onTap_activeActionGroupIndex = -1;
var obj86889_onTap_runningActionsCount = 0;
var obj86889_onTap_loopCount = 0;
var obj86884_onTap_activeActionGroupIndex = -1;
var obj86884_onTap_runningActionsCount = 0;
var obj86884_onTap_loopCount = 0;
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
		
obj766_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj766_onTap_activeActionGroupIndex = -1;
		$("#obj766").trigger("obj766_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 766) {
				console.warn("de-queueing event obj766." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj766").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj766_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_768();
function goToPage_768() {
	window.obj766_onTap_runningActionsCount = obj766_onTap_runningActionsCount + 1;
	$("#anchor60")[0].click();
	window.obj766_onTap_runningActionsCount = window.obj766_onTap_runningActionsCount - 1;
if (window.obj766_onTap_runningActionsCount < 0) {
	window.obj766_onTap_runningActionsCount = 0;
} else if (window.obj766_onTap_runningActionsCount == 0) {
	obj766_onTap_actionGroup1();
}
}





















};
obj766_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj766_onTap_activeActionGroupIndex = -1;
		$("#obj766").trigger("obj766_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 766) {
				console.warn("de-queueing event obj766." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj766").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj766_onTap_activeActionGroupIndex = 1;
	





















};
obj763_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj763_onTap_activeActionGroupIndex = -1;
		$("#obj763").trigger("obj763_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 763) {
				console.warn("de-queueing event obj763." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj763").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj763_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_765();
function goToPage_765() {
	window.obj763_onTap_runningActionsCount = obj763_onTap_runningActionsCount + 1;
	$("#anchor61")[0].click();
	window.obj763_onTap_runningActionsCount = window.obj763_onTap_runningActionsCount - 1;
if (window.obj763_onTap_runningActionsCount < 0) {
	window.obj763_onTap_runningActionsCount = 0;
} else if (window.obj763_onTap_runningActionsCount == 0) {
	obj763_onTap_actionGroup1();
}
}





















};
obj763_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj763_onTap_activeActionGroupIndex = -1;
		$("#obj763").trigger("obj763_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 763) {
				console.warn("de-queueing event obj763." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj763").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj763_onTap_activeActionGroupIndex = 1;
	





















};
obj769_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj769_onTap_activeActionGroupIndex = -1;
		$("#obj769").trigger("obj769_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 769) {
				console.warn("de-queueing event obj769." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj769").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj769_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_771();
function goToPage_771() {
	window.obj769_onTap_runningActionsCount = obj769_onTap_runningActionsCount + 1;
	$("#anchor62")[0].click();
	window.obj769_onTap_runningActionsCount = window.obj769_onTap_runningActionsCount - 1;
if (window.obj769_onTap_runningActionsCount < 0) {
	window.obj769_onTap_runningActionsCount = 0;
} else if (window.obj769_onTap_runningActionsCount == 0) {
	obj769_onTap_actionGroup1();
}
}





















};
obj769_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj769_onTap_activeActionGroupIndex = -1;
		$("#obj769").trigger("obj769_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 769) {
				console.warn("de-queueing event obj769." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj769").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj769_onTap_activeActionGroupIndex = 1;
	





















};
obj806_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj806_onTouchDown_activeActionGroupIndex = -1;
		$("#obj806").trigger("obj806_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 806) {
				console.warn("de-queueing event obj806." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj806").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj806_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj806");
//	action: dragDrop
//	target: obj806 
dragDrop_850();
function dragDrop_850() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj806_onTouchDown_runningActionsCount = obj806_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj806');
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
	  	containerNode = $('#obj798');
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
    	window.obj806_onTouchDown_runningActionsCount = window.obj806_onTouchDown_runningActionsCount - 1;
if (window.obj806_onTouchDown_runningActionsCount < 0) {
	window.obj806_onTouchDown_runningActionsCount = 0;
} else if (window.obj806_onTouchDown_runningActionsCount == 0) {
	obj806_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj816","#obj812","#obj896");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_850 = false;
    	var dropped_id_850;
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
					dropped_850 = true;
					dropped_id_850 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_850) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj806").trigger('SCActionDragDrop850_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj806_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj806_onTouchDown_activeActionGroupIndex = -1;
		$("#obj806").trigger("obj806_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 806) {
				console.warn("de-queueing event obj806." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj806").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj806_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj806_SCActionDragDrop850_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj806_SCActionDragDrop850_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj806").trigger("obj806_SCActionDragDrop850_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 806) {
				console.warn("de-queueing event obj806." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj806").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj806_SCActionDragDrop850_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj806 
move_92077();
function move_92077() {
	window.obj806_SCActionDragDrop850_droppedOutsideTargetActions_runningActionsCount = obj806_SCActionDragDrop850_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj806");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 193;
	var moveY = 542;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj806_SCActionDragDrop850_droppedOutsideTargetActions_runningActionsCount = window.obj806_SCActionDragDrop850_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj806_SCActionDragDrop850_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj806_SCActionDragDrop850_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj806_SCActionDragDrop850_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj806_SCActionDragDrop850_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj806_SCActionDragDrop850_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj806_SCActionDragDrop850_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj806").trigger("obj806_SCActionDragDrop850_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 806) {
				console.warn("de-queueing event obj806." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj806").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj806_SCActionDragDrop850_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj806_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj806_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj806").trigger("obj806_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 806) {
				console.warn("de-queueing event obj806." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj806").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj806_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_1057();
function runjs_1057() {
	window.obj806_droppedInsideTargetActions_3_runningActionsCount = obj806_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj806").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj806_droppedInsideTargetActions_3_runningActionsCount = window.obj806_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj806_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj806_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj806_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj806_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj806_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj806_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj806").trigger("obj806_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 806) {
				console.warn("de-queueing event obj806." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj806").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj806_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_1058();
function runjs_1058() {
	window.obj806_droppedInsideTargetActions_3_runningActionsCount = obj806_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj896").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj806_droppedInsideTargetActions_3_runningActionsCount = window.obj806_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj806_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj806_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj806_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj806_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj806_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj806_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj806").trigger("obj806_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 806) {
				console.warn("de-queueing event obj806." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj806").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj806_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	















//	action: Switch Text
switchText_1059();
function switchText_1059() {
	window.obj806_droppedInsideTargetActions_3_runningActionsCount = obj806_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #ffffff;\">They understand why certain things are the way they are</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj806_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj806_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj806").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj806_content");
			setTimeout(function () {
				window.obj806_droppedInsideTargetActions_3_runningActionsCount = window.obj806_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj806_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj806_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj806_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj806_droppedInsideTargetActions_3_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj806 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj806_droppedInsideTargetActions_3_runningActionsCount = window.obj806_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj806_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj806_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj806_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj806_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
	}
}






};
obj806_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj806_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj806").trigger("obj806_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 806) {
				console.warn("de-queueing event obj806." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj806").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj806_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj822 
hide_1060();
function hide_1060() {
	var selector = "#obj822";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj806_droppedInsideTargetActions_3_runningActionsCount = obj806_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj806_droppedInsideTargetActions_3_runningActionsCount = window.obj806_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj806_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj806_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj806_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj806_droppedInsideTargetActions_3_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_1060(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj806_droppedInsideTargetActions_3_runningActionsCount = window.obj806_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj806_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj806_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj806_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj806_droppedInsideTargetActions_3_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj806_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj806_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj806").trigger("obj806_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 806) {
				console.warn("de-queueing event obj806." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj806").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj806_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_1061();
function switchText_1061() {
	window.obj806_droppedInsideTargetActions_3_runningActionsCount = obj806_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj982_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj982_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj982").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj982_content");
			setTimeout(function () {
				window.obj806_droppedInsideTargetActions_3_runningActionsCount = window.obj806_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj806_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj806_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj806_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj806_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj982 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj806_droppedInsideTargetActions_3_runningActionsCount = window.obj806_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj806_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj806_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj806_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj806_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj806_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj806_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj806").trigger("obj806_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 806) {
				console.warn("de-queueing event obj806." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj806").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj806_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj806 
move_1062();
function move_1062() {
	window.obj806_droppedInsideTargetActions_3_runningActionsCount = obj806_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj806");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 193;
	var moveY = 542;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj806_droppedInsideTargetActions_3_runningActionsCount = window.obj806_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj806_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj806_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj806_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj806_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj806_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj806_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj806").trigger("obj806_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 806) {
				console.warn("de-queueing event obj806." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj806").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj806_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	

//	action: show 
//	selector: #obj822
(function(){
	window.obj806_droppedInsideTargetActions_3_runningActionsCount = obj806_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj822";
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
					window.obj806_droppedInsideTargetActions_3_runningActionsCount = window.obj806_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj806_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj806_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj806_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj806_droppedInsideTargetActions_3_actionGroup7();
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
				window.obj806_droppedInsideTargetActions_3_runningActionsCount = window.obj806_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj806_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj806_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj806_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj806_droppedInsideTargetActions_3_actionGroup7();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();











//	action: playAudio
//	target: obj834 
playAudio_1067();
function playAudio_1067() {
	window.obj806_droppedInsideTargetActions_3_runningActionsCount = obj806_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj834")[0];
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
		    window.obj806_droppedInsideTargetActions_3_runningActionsCount = window.obj806_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj806_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj806_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj806_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj806_droppedInsideTargetActions_3_actionGroup7();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj806_droppedInsideTargetActions_3_runningActionsCount = window.obj806_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj806_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj806_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj806_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj806_droppedInsideTargetActions_3_actionGroup7();
}
	}
}


//	action: Run JavaScript
runjs_1063();
function runjs_1063() {
	window.obj806_droppedInsideTargetActions_3_runningActionsCount = obj806_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj806").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj806_droppedInsideTargetActions_3_runningActionsCount = window.obj806_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj806_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj806_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj806_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj806_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}
//	action: Run JavaScript
runjs_1064();
function runjs_1064() {
	window.obj806_droppedInsideTargetActions_3_runningActionsCount = obj806_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj896").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj806_droppedInsideTargetActions_3_runningActionsCount = window.obj806_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj806_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj806_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj806_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj806_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}

//	action: Switch Text
switchText_1066();
function switchText_1066() {
	window.obj806_droppedInsideTargetActions_3_runningActionsCount = obj806_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p style=\"text-align: center;\"><span style=\"font-family: Roboto; font-size: 16px;\">They understand why certain things are the way they are</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj806_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj806_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj806").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj806_content");
			setTimeout(function () {
				window.obj806_droppedInsideTargetActions_3_runningActionsCount = window.obj806_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj806_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj806_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj806_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj806_droppedInsideTargetActions_3_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj806 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj806_droppedInsideTargetActions_3_runningActionsCount = window.obj806_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj806_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj806_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj806_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj806_droppedInsideTargetActions_3_actionGroup7();
}
		}, 1);
	}
}






};
obj806_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj806_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj806").trigger("obj806_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 806) {
				console.warn("de-queueing event obj806." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj806").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj806_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Switch Text
switchText_1068();
function switchText_1068() {
	window.obj806_droppedInsideTargetActions_3_runningActionsCount = obj806_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj982_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj982_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj982").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj982_content");
			setTimeout(function () {
				window.obj806_droppedInsideTargetActions_3_runningActionsCount = window.obj806_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj806_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj806_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj806_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj806_droppedInsideTargetActions_3_actionGroup8();
}
			}, 1);
		});
	} else {
		$("#obj982 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj806_droppedInsideTargetActions_3_runningActionsCount = window.obj806_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj806_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj806_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj806_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj806_droppedInsideTargetActions_3_actionGroup8();
}
		}, 1);
	}
}






};
obj806_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj806_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj806").trigger("obj806_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 806) {
				console.warn("de-queueing event obj806." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj806").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj806_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	





















};
obj806_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj806_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj806").trigger("obj806_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 806) {
				console.warn("de-queueing event obj806." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj806").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj806_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_1044();
function runjs_1044() {
	window.obj806_droppedInsideTargetActions_2_runningActionsCount = obj806_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj806").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj806_droppedInsideTargetActions_2_runningActionsCount = window.obj806_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj806_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj806_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj806_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj806_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj806_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj806_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj806").trigger("obj806_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 806) {
				console.warn("de-queueing event obj806." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj806").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj806_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_1045();
function runjs_1045() {
	window.obj806_droppedInsideTargetActions_2_runningActionsCount = obj806_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj812").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj806_droppedInsideTargetActions_2_runningActionsCount = window.obj806_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj806_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj806_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj806_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj806_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj806_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj806_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj806").trigger("obj806_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 806) {
				console.warn("de-queueing event obj806." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj806").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj806_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	















//	action: Switch Text
switchText_1046();
function switchText_1046() {
	window.obj806_droppedInsideTargetActions_2_runningActionsCount = obj806_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #ffffff;\">They understand why certain things are the way they are</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj806_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj806_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj806").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj806_content");
			setTimeout(function () {
				window.obj806_droppedInsideTargetActions_2_runningActionsCount = window.obj806_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj806_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj806_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj806_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj806_droppedInsideTargetActions_2_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj806 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj806_droppedInsideTargetActions_2_runningActionsCount = window.obj806_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj806_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj806_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj806_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj806_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
	}
}






};
obj806_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj806_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj806").trigger("obj806_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 806) {
				console.warn("de-queueing event obj806." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj806").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj806_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj814 
hide_1047();
function hide_1047() {
	var selector = "#obj814";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj806_droppedInsideTargetActions_2_runningActionsCount = obj806_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj806_droppedInsideTargetActions_2_runningActionsCount = window.obj806_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj806_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj806_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj806_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj806_droppedInsideTargetActions_2_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_1047(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj806_droppedInsideTargetActions_2_runningActionsCount = window.obj806_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj806_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj806_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj806_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj806_droppedInsideTargetActions_2_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj806_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj806_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj806").trigger("obj806_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 806) {
				console.warn("de-queueing event obj806." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj806").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj806_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_1048();
function switchText_1048() {
	window.obj806_droppedInsideTargetActions_2_runningActionsCount = obj806_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj982_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj982_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj982").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj982_content");
			setTimeout(function () {
				window.obj806_droppedInsideTargetActions_2_runningActionsCount = window.obj806_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj806_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj806_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj806_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj806_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj982 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj806_droppedInsideTargetActions_2_runningActionsCount = window.obj806_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj806_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj806_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj806_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj806_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj806_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj806_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj806").trigger("obj806_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 806) {
				console.warn("de-queueing event obj806." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj806").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj806_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj806 
move_1049();
function move_1049() {
	window.obj806_droppedInsideTargetActions_2_runningActionsCount = obj806_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj806");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 193;
	var moveY = 542;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj806_droppedInsideTargetActions_2_runningActionsCount = window.obj806_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj806_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj806_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj806_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj806_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj806_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj806_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj806").trigger("obj806_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 806) {
				console.warn("de-queueing event obj806." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj806").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj806_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	

//	action: show 
//	selector: #obj814
(function(){
	window.obj806_droppedInsideTargetActions_2_runningActionsCount = obj806_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj814";
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
					window.obj806_droppedInsideTargetActions_2_runningActionsCount = window.obj806_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj806_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj806_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj806_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj806_droppedInsideTargetActions_2_actionGroup7();
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
				window.obj806_droppedInsideTargetActions_2_runningActionsCount = window.obj806_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj806_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj806_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj806_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj806_droppedInsideTargetActions_2_actionGroup7();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();











//	action: playAudio
//	target: obj834 
playAudio_1054();
function playAudio_1054() {
	window.obj806_droppedInsideTargetActions_2_runningActionsCount = obj806_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj834")[0];
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
		    window.obj806_droppedInsideTargetActions_2_runningActionsCount = window.obj806_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj806_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj806_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj806_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj806_droppedInsideTargetActions_2_actionGroup7();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj806_droppedInsideTargetActions_2_runningActionsCount = window.obj806_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj806_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj806_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj806_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj806_droppedInsideTargetActions_2_actionGroup7();
}
	}
}


//	action: Run JavaScript
runjs_1050();
function runjs_1050() {
	window.obj806_droppedInsideTargetActions_2_runningActionsCount = obj806_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj806").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj806_droppedInsideTargetActions_2_runningActionsCount = window.obj806_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj806_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj806_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj806_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj806_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}
//	action: Run JavaScript
runjs_1051();
function runjs_1051() {
	window.obj806_droppedInsideTargetActions_2_runningActionsCount = obj806_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj812").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj806_droppedInsideTargetActions_2_runningActionsCount = window.obj806_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj806_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj806_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj806_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj806_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}

//	action: Switch Text
switchText_1053();
function switchText_1053() {
	window.obj806_droppedInsideTargetActions_2_runningActionsCount = obj806_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p style=\"text-align: center;\"><span style=\"font-family: Roboto; font-size: 16px;\">They understand why certain things are the way they are</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj806_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj806_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj806").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj806_content");
			setTimeout(function () {
				window.obj806_droppedInsideTargetActions_2_runningActionsCount = window.obj806_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj806_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj806_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj806_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj806_droppedInsideTargetActions_2_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj806 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj806_droppedInsideTargetActions_2_runningActionsCount = window.obj806_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj806_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj806_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj806_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj806_droppedInsideTargetActions_2_actionGroup7();
}
		}, 1);
	}
}






};
obj806_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj806_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj806").trigger("obj806_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 806) {
				console.warn("de-queueing event obj806." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj806").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj806_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Switch Text
switchText_1055();
function switchText_1055() {
	window.obj806_droppedInsideTargetActions_2_runningActionsCount = obj806_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj982_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj982_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj982").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj982_content");
			setTimeout(function () {
				window.obj806_droppedInsideTargetActions_2_runningActionsCount = window.obj806_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj806_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj806_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj806_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj806_droppedInsideTargetActions_2_actionGroup8();
}
			}, 1);
		});
	} else {
		$("#obj982 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj806_droppedInsideTargetActions_2_runningActionsCount = window.obj806_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj806_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj806_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj806_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj806_droppedInsideTargetActions_2_actionGroup8();
}
		}, 1);
	}
}






};
obj806_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj806_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj806").trigger("obj806_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 806) {
				console.warn("de-queueing event obj806." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj806").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj806_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	





















};
obj806_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj806_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj806").trigger("obj806_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 806) {
				console.warn("de-queueing event obj806." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj806").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj806_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_855();
function runjs_855() {
	window.obj806_droppedInsideTargetActions_runningActionsCount = obj806_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj806").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj806_droppedInsideTargetActions_runningActionsCount = window.obj806_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj806_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj806_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj806_droppedInsideTargetActions_runningActionsCount == 0) {
	obj806_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj806_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj806_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj806").trigger("obj806_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 806) {
				console.warn("de-queueing event obj806." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj806").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj806_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_1098();
function switchText_1098() {
	window.obj806_droppedInsideTargetActions_runningActionsCount = obj806_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Correct, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj982_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj982_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj982").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj982_content");
			setTimeout(function () {
				window.obj806_droppedInsideTargetActions_runningActionsCount = window.obj806_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj806_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj806_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj806_droppedInsideTargetActions_runningActionsCount == 0) {
	obj806_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj982 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj806_droppedInsideTargetActions_runningActionsCount = window.obj806_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj806_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj806_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj806_droppedInsideTargetActions_runningActionsCount == 0) {
	obj806_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj806_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj806_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj806").trigger("obj806_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 806) {
				console.warn("de-queueing event obj806." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj806").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj806_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_856();
function runjs_856() {
	window.obj806_droppedInsideTargetActions_runningActionsCount = obj806_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj816").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj806_droppedInsideTargetActions_runningActionsCount = window.obj806_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj806_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj806_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj806_droppedInsideTargetActions_runningActionsCount == 0) {
	obj806_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj806_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj806_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj806").trigger("obj806_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 806) {
				console.warn("de-queueing event obj806." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj806").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj806_droppedInsideTargetActions_activeActionGroupIndex = 3;
	















//	action: Switch Text
switchText_857();
function switchText_857() {
	window.obj806_droppedInsideTargetActions_runningActionsCount = obj806_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p style=\"text-align: center; line-height: 1;\"><span style=\"color: #ffffff; font-size: 16px;\"><strong><span style=\"font-family: Roboto;\">They understand why</span></strong></span></p><p style=\"text-align: center; line-height: 1;\"><span style=\"color: #ffffff; font-size: 16px;\"><strong><span style=\"font-family: Roboto;\">certain things are the way</span></strong></span></p><p style=\"text-align: center; line-height: 1;\"><span style=\"color: #ffffff; font-size: 16px;\"><strong><span style=\"font-family: Roboto;\">they are</span></strong></span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj806_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj806_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj806").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj806_content");
			setTimeout(function () {
				window.obj806_droppedInsideTargetActions_runningActionsCount = window.obj806_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj806_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj806_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj806_droppedInsideTargetActions_runningActionsCount == 0) {
	obj806_droppedInsideTargetActions_actionGroup4();
}
			}, 1);
		});
	} else {
		$("#obj806 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj806_droppedInsideTargetActions_runningActionsCount = window.obj806_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj806_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj806_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj806_droppedInsideTargetActions_runningActionsCount == 0) {
	obj806_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
	}
}






};
obj806_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj806_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj806").trigger("obj806_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 806) {
				console.warn("de-queueing event obj806." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj806").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj806_droppedInsideTargetActions_activeActionGroupIndex = 4;
	

//	action: hide
//	selector: obj#obj818 
hide_858();
function hide_858() {
	var selector = "#obj818";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj806_droppedInsideTargetActions_runningActionsCount = obj806_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj806_droppedInsideTargetActions_runningActionsCount = window.obj806_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj806_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj806_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj806_droppedInsideTargetActions_runningActionsCount == 0) {
	obj806_droppedInsideTargetActions_actionGroup5();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_858(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj806_droppedInsideTargetActions_runningActionsCount = window.obj806_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj806_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj806_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj806_droppedInsideTargetActions_runningActionsCount == 0) {
	obj806_droppedInsideTargetActions_actionGroup5();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj806_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj806_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj806").trigger("obj806_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 806) {
				console.warn("de-queueing event obj806." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj806").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj806_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj846 
playAudio_859();
function playAudio_859() {
	window.obj806_droppedInsideTargetActions_runningActionsCount = obj806_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj846")[0];
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
		    window.obj806_droppedInsideTargetActions_runningActionsCount = window.obj806_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj806_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj806_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj806_droppedInsideTargetActions_runningActionsCount == 0) {
	obj806_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj806_droppedInsideTargetActions_runningActionsCount = window.obj806_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj806_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj806_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj806_droppedInsideTargetActions_runningActionsCount == 0) {
	obj806_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj806_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj806_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj806").trigger("obj806_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 806) {
				console.warn("de-queueing event obj806." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj806").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj806_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_1099();
function switchText_1099() {
	window.obj806_droppedInsideTargetActions_runningActionsCount = obj806_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj982_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj982_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj982").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj982_content");
			setTimeout(function () {
				window.obj806_droppedInsideTargetActions_runningActionsCount = window.obj806_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj806_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj806_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj806_droppedInsideTargetActions_runningActionsCount == 0) {
	obj806_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj982 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj806_droppedInsideTargetActions_runningActionsCount = window.obj806_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj806_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj806_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj806_droppedInsideTargetActions_runningActionsCount == 0) {
	obj806_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj806_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj806_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj806").trigger("obj806_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 806) {
				console.warn("de-queueing event obj806." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj806").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj806_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj808_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj808_onTouchDown_activeActionGroupIndex = -1;
		$("#obj808").trigger("obj808_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 808) {
				console.warn("de-queueing event obj808." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj808").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj808_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj808");
//	action: dragDrop
//	target: obj808 
dragDrop_861();
function dragDrop_861() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj808_onTouchDown_runningActionsCount = obj808_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj808');
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
	  	containerNode = $('#obj798');
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
    	window.obj808_onTouchDown_runningActionsCount = window.obj808_onTouchDown_runningActionsCount - 1;
if (window.obj808_onTouchDown_runningActionsCount < 0) {
	window.obj808_onTouchDown_runningActionsCount = 0;
} else if (window.obj808_onTouchDown_runningActionsCount == 0) {
	obj808_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj896","#obj812","#obj816");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_861 = false;
    	var dropped_id_861;
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
					dropped_861 = true;
					dropped_id_861 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_861) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj808").trigger('SCActionDragDrop861_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj808_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj808_onTouchDown_activeActionGroupIndex = -1;
		$("#obj808").trigger("obj808_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 808) {
				console.warn("de-queueing event obj808." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj808").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj808_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj808_SCActionDragDrop861_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj808_SCActionDragDrop861_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj808").trigger("obj808_SCActionDragDrop861_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 808) {
				console.warn("de-queueing event obj808." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj808").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj808_SCActionDragDrop861_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj808 
move_92084();
function move_92084() {
	window.obj808_SCActionDragDrop861_droppedOutsideTargetActions_runningActionsCount = obj808_SCActionDragDrop861_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj808");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 85;
	var moveY = 617;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj808_SCActionDragDrop861_droppedOutsideTargetActions_runningActionsCount = window.obj808_SCActionDragDrop861_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj808_SCActionDragDrop861_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj808_SCActionDragDrop861_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj808_SCActionDragDrop861_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj808_SCActionDragDrop861_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj808_SCActionDragDrop861_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj808_SCActionDragDrop861_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj808").trigger("obj808_SCActionDragDrop861_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 808) {
				console.warn("de-queueing event obj808." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj808").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj808_SCActionDragDrop861_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj808_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj808_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj808").trigger("obj808_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 808) {
				console.warn("de-queueing event obj808." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj808").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj808_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_1083();
function runjs_1083() {
	window.obj808_droppedInsideTargetActions_3_runningActionsCount = obj808_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj808").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj808_droppedInsideTargetActions_3_runningActionsCount = window.obj808_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj808_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj808_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj808_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj808_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj808_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj808_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj808").trigger("obj808_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 808) {
				console.warn("de-queueing event obj808." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj808").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj808_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_1084();
function runjs_1084() {
	window.obj808_droppedInsideTargetActions_3_runningActionsCount = obj808_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj816").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj808_droppedInsideTargetActions_3_runningActionsCount = window.obj808_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj808_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj808_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj808_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj808_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj808_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj808_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj808").trigger("obj808_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 808) {
				console.warn("de-queueing event obj808." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj808").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj808_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	















//	action: Switch Text
switchText_1085();
function switchText_1085() {
	window.obj808_droppedInsideTargetActions_3_runningActionsCount = obj808_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-size: 18px; font-family: Roboto; color: #ffffff;\">They study the wonderful dance and the right ways of speaking Kinyarwanda</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj808_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj808_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj808").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj808_content");
			setTimeout(function () {
				window.obj808_droppedInsideTargetActions_3_runningActionsCount = window.obj808_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj808_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj808_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj808_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj808_droppedInsideTargetActions_3_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj808 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj808_droppedInsideTargetActions_3_runningActionsCount = window.obj808_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj808_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj808_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj808_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj808_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
	}
}






};
obj808_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj808_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj808").trigger("obj808_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 808) {
				console.warn("de-queueing event obj808." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj808").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj808_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj818 
hide_1086();
function hide_1086() {
	var selector = "#obj818";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj808_droppedInsideTargetActions_3_runningActionsCount = obj808_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj808_droppedInsideTargetActions_3_runningActionsCount = window.obj808_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj808_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj808_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj808_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj808_droppedInsideTargetActions_3_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_1086(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj808_droppedInsideTargetActions_3_runningActionsCount = window.obj808_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj808_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj808_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj808_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj808_droppedInsideTargetActions_3_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj808_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj808_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj808").trigger("obj808_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 808) {
				console.warn("de-queueing event obj808." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj808").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj808_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_1087();
function switchText_1087() {
	window.obj808_droppedInsideTargetActions_3_runningActionsCount = obj808_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj982_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj982_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj982").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj982_content");
			setTimeout(function () {
				window.obj808_droppedInsideTargetActions_3_runningActionsCount = window.obj808_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj808_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj808_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj808_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj808_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj982 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj808_droppedInsideTargetActions_3_runningActionsCount = window.obj808_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj808_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj808_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj808_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj808_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj808_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj808_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj808").trigger("obj808_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 808) {
				console.warn("de-queueing event obj808." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj808").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj808_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj808 
move_1088();
function move_1088() {
	window.obj808_droppedInsideTargetActions_3_runningActionsCount = obj808_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj808");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 85;
	var moveY = 617;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj808_droppedInsideTargetActions_3_runningActionsCount = window.obj808_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj808_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj808_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj808_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj808_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj808_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj808_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj808").trigger("obj808_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 808) {
				console.warn("de-queueing event obj808." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj808").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj808_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	

//	action: show 
//	selector: #obj818
(function(){
	window.obj808_droppedInsideTargetActions_3_runningActionsCount = obj808_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj818";
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
					window.obj808_droppedInsideTargetActions_3_runningActionsCount = window.obj808_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj808_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj808_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj808_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj808_droppedInsideTargetActions_3_actionGroup7();
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
				window.obj808_droppedInsideTargetActions_3_runningActionsCount = window.obj808_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj808_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj808_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj808_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj808_droppedInsideTargetActions_3_actionGroup7();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();











//	action: playAudio
//	target: obj834 
playAudio_1093();
function playAudio_1093() {
	window.obj808_droppedInsideTargetActions_3_runningActionsCount = obj808_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj834")[0];
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
		    window.obj808_droppedInsideTargetActions_3_runningActionsCount = window.obj808_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj808_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj808_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj808_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj808_droppedInsideTargetActions_3_actionGroup7();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj808_droppedInsideTargetActions_3_runningActionsCount = window.obj808_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj808_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj808_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj808_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj808_droppedInsideTargetActions_3_actionGroup7();
}
	}
}


//	action: Run JavaScript
runjs_1089();
function runjs_1089() {
	window.obj808_droppedInsideTargetActions_3_runningActionsCount = obj808_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj808").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj808_droppedInsideTargetActions_3_runningActionsCount = window.obj808_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj808_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj808_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj808_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj808_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}
//	action: Run JavaScript
runjs_1090();
function runjs_1090() {
	window.obj808_droppedInsideTargetActions_3_runningActionsCount = obj808_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj816").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj808_droppedInsideTargetActions_3_runningActionsCount = window.obj808_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj808_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj808_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj808_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj808_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}

//	action: Switch Text
switchText_1092();
function switchText_1092() {
	window.obj808_droppedInsideTargetActions_3_runningActionsCount = obj808_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p style=\"text-align: center;\"><span style=\"font-family: Roboto; font-size: 16px;\">They study the wonderful dance and the right ways of speaking Kinyarwanda</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj808_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj808_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj808").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj808_content");
			setTimeout(function () {
				window.obj808_droppedInsideTargetActions_3_runningActionsCount = window.obj808_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj808_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj808_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj808_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj808_droppedInsideTargetActions_3_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj808 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj808_droppedInsideTargetActions_3_runningActionsCount = window.obj808_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj808_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj808_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj808_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj808_droppedInsideTargetActions_3_actionGroup7();
}
		}, 1);
	}
}






};
obj808_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj808_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj808").trigger("obj808_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 808) {
				console.warn("de-queueing event obj808." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj808").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj808_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Switch Text
switchText_1094();
function switchText_1094() {
	window.obj808_droppedInsideTargetActions_3_runningActionsCount = obj808_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj982_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj982_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj982").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj982_content");
			setTimeout(function () {
				window.obj808_droppedInsideTargetActions_3_runningActionsCount = window.obj808_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj808_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj808_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj808_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj808_droppedInsideTargetActions_3_actionGroup8();
}
			}, 1);
		});
	} else {
		$("#obj982 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj808_droppedInsideTargetActions_3_runningActionsCount = window.obj808_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj808_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj808_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj808_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj808_droppedInsideTargetActions_3_actionGroup8();
}
		}, 1);
	}
}






};
obj808_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj808_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj808").trigger("obj808_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 808) {
				console.warn("de-queueing event obj808." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj808").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj808_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	





















};
obj808_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj808_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj808").trigger("obj808_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 808) {
				console.warn("de-queueing event obj808." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj808").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj808_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_1070();
function runjs_1070() {
	window.obj808_droppedInsideTargetActions_2_runningActionsCount = obj808_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj808").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj808_droppedInsideTargetActions_2_runningActionsCount = window.obj808_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj808_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj808_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj808_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj808_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj808_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj808_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj808").trigger("obj808_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 808) {
				console.warn("de-queueing event obj808." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj808").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj808_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_1071();
function runjs_1071() {
	window.obj808_droppedInsideTargetActions_2_runningActionsCount = obj808_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj812").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj808_droppedInsideTargetActions_2_runningActionsCount = window.obj808_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj808_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj808_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj808_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj808_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj808_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj808_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj808").trigger("obj808_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 808) {
				console.warn("de-queueing event obj808." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj808").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj808_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	















//	action: Switch Text
switchText_1072();
function switchText_1072() {
	window.obj808_droppedInsideTargetActions_2_runningActionsCount = obj808_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-size: 18px; font-family: Roboto; color: #ffffff;\">They study the wonderful dance and the right ways of speaking Kinyarwanda</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj808_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj808_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj808").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj808_content");
			setTimeout(function () {
				window.obj808_droppedInsideTargetActions_2_runningActionsCount = window.obj808_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj808_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj808_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj808_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj808_droppedInsideTargetActions_2_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj808 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj808_droppedInsideTargetActions_2_runningActionsCount = window.obj808_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj808_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj808_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj808_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj808_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
	}
}






};
obj808_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj808_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj808").trigger("obj808_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 808) {
				console.warn("de-queueing event obj808." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj808").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj808_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj814 
hide_1073();
function hide_1073() {
	var selector = "#obj814";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj808_droppedInsideTargetActions_2_runningActionsCount = obj808_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj808_droppedInsideTargetActions_2_runningActionsCount = window.obj808_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj808_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj808_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj808_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj808_droppedInsideTargetActions_2_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_1073(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj808_droppedInsideTargetActions_2_runningActionsCount = window.obj808_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj808_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj808_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj808_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj808_droppedInsideTargetActions_2_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj808_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj808_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj808").trigger("obj808_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 808) {
				console.warn("de-queueing event obj808." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj808").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj808_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_1074();
function switchText_1074() {
	window.obj808_droppedInsideTargetActions_2_runningActionsCount = obj808_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj982_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj982_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj982").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj982_content");
			setTimeout(function () {
				window.obj808_droppedInsideTargetActions_2_runningActionsCount = window.obj808_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj808_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj808_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj808_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj808_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj982 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj808_droppedInsideTargetActions_2_runningActionsCount = window.obj808_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj808_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj808_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj808_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj808_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj808_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj808_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj808").trigger("obj808_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 808) {
				console.warn("de-queueing event obj808." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj808").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj808_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj808 
move_1075();
function move_1075() {
	window.obj808_droppedInsideTargetActions_2_runningActionsCount = obj808_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj808");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 85;
	var moveY = 617;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj808_droppedInsideTargetActions_2_runningActionsCount = window.obj808_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj808_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj808_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj808_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj808_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj808_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj808_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj808").trigger("obj808_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 808) {
				console.warn("de-queueing event obj808." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj808").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj808_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	

//	action: show 
//	selector: #obj814
(function(){
	window.obj808_droppedInsideTargetActions_2_runningActionsCount = obj808_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj814";
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
					window.obj808_droppedInsideTargetActions_2_runningActionsCount = window.obj808_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj808_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj808_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj808_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj808_droppedInsideTargetActions_2_actionGroup7();
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
				window.obj808_droppedInsideTargetActions_2_runningActionsCount = window.obj808_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj808_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj808_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj808_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj808_droppedInsideTargetActions_2_actionGroup7();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();











//	action: playAudio
//	target: obj834 
playAudio_1080();
function playAudio_1080() {
	window.obj808_droppedInsideTargetActions_2_runningActionsCount = obj808_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj834")[0];
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
		    window.obj808_droppedInsideTargetActions_2_runningActionsCount = window.obj808_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj808_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj808_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj808_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj808_droppedInsideTargetActions_2_actionGroup7();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj808_droppedInsideTargetActions_2_runningActionsCount = window.obj808_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj808_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj808_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj808_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj808_droppedInsideTargetActions_2_actionGroup7();
}
	}
}


//	action: Run JavaScript
runjs_1076();
function runjs_1076() {
	window.obj808_droppedInsideTargetActions_2_runningActionsCount = obj808_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj808").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj808_droppedInsideTargetActions_2_runningActionsCount = window.obj808_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj808_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj808_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj808_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj808_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}
//	action: Run JavaScript
runjs_1077();
function runjs_1077() {
	window.obj808_droppedInsideTargetActions_2_runningActionsCount = obj808_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj812").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj808_droppedInsideTargetActions_2_runningActionsCount = window.obj808_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj808_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj808_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj808_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj808_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}

//	action: Switch Text
switchText_1079();
function switchText_1079() {
	window.obj808_droppedInsideTargetActions_2_runningActionsCount = obj808_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p style=\"text-align: center;\"><span style=\"font-family: Roboto; font-size: 16px;\">They study the wonderful dance and the right ways of speaking Kinyarwanda</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj808_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj808_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj808").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj808_content");
			setTimeout(function () {
				window.obj808_droppedInsideTargetActions_2_runningActionsCount = window.obj808_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj808_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj808_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj808_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj808_droppedInsideTargetActions_2_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj808 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj808_droppedInsideTargetActions_2_runningActionsCount = window.obj808_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj808_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj808_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj808_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj808_droppedInsideTargetActions_2_actionGroup7();
}
		}, 1);
	}
}






};
obj808_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj808_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj808").trigger("obj808_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 808) {
				console.warn("de-queueing event obj808." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj808").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj808_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Switch Text
switchText_1081();
function switchText_1081() {
	window.obj808_droppedInsideTargetActions_2_runningActionsCount = obj808_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj982_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj982_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj982").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj982_content");
			setTimeout(function () {
				window.obj808_droppedInsideTargetActions_2_runningActionsCount = window.obj808_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj808_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj808_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj808_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj808_droppedInsideTargetActions_2_actionGroup8();
}
			}, 1);
		});
	} else {
		$("#obj982 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj808_droppedInsideTargetActions_2_runningActionsCount = window.obj808_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj808_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj808_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj808_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj808_droppedInsideTargetActions_2_actionGroup8();
}
		}, 1);
	}
}






};
obj808_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj808_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj808").trigger("obj808_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 808) {
				console.warn("de-queueing event obj808." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj808").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj808_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	





















};
obj808_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj808_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj808").trigger("obj808_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 808) {
				console.warn("de-queueing event obj808." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj808").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj808_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_863();
function runjs_863() {
	window.obj808_droppedInsideTargetActions_runningActionsCount = obj808_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj808").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj808_droppedInsideTargetActions_runningActionsCount = window.obj808_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj808_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj808_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj808_droppedInsideTargetActions_runningActionsCount == 0) {
	obj808_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj808_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj808_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj808").trigger("obj808_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 808) {
				console.warn("de-queueing event obj808." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj808").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj808_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_1102();
function switchText_1102() {
	window.obj808_droppedInsideTargetActions_runningActionsCount = obj808_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Correct, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj982_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj982_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj982").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj982_content");
			setTimeout(function () {
				window.obj808_droppedInsideTargetActions_runningActionsCount = window.obj808_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj808_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj808_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj808_droppedInsideTargetActions_runningActionsCount == 0) {
	obj808_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj982 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj808_droppedInsideTargetActions_runningActionsCount = window.obj808_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj808_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj808_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj808_droppedInsideTargetActions_runningActionsCount == 0) {
	obj808_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj808_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj808_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj808").trigger("obj808_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 808) {
				console.warn("de-queueing event obj808." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj808").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj808_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_864();
function runjs_864() {
	window.obj808_droppedInsideTargetActions_runningActionsCount = obj808_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj896").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj808_droppedInsideTargetActions_runningActionsCount = window.obj808_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj808_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj808_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj808_droppedInsideTargetActions_runningActionsCount == 0) {
	obj808_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj808_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj808_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj808").trigger("obj808_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 808) {
				console.warn("de-queueing event obj808." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj808").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj808_droppedInsideTargetActions_activeActionGroupIndex = 3;
	















//	action: Switch Text
switchText_928();
function switchText_928() {
	window.obj808_droppedInsideTargetActions_runningActionsCount = obj808_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p style=\"text-align: center; line-height: 1;\"><span style=\"color: #ffffff; font-size: 16px;\"><strong><span style=\"font-family: Roboto;\">They study the wonderful dance and the right ways of speaking Kinyarwanda</span></strong></span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj808_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj808_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj808").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj808_content");
			setTimeout(function () {
				window.obj808_droppedInsideTargetActions_runningActionsCount = window.obj808_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj808_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj808_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj808_droppedInsideTargetActions_runningActionsCount == 0) {
	obj808_droppedInsideTargetActions_actionGroup4();
}
			}, 1);
		});
	} else {
		$("#obj808 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj808_droppedInsideTargetActions_runningActionsCount = window.obj808_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj808_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj808_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj808_droppedInsideTargetActions_runningActionsCount == 0) {
	obj808_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
	}
}






};
obj808_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj808_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj808").trigger("obj808_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 808) {
				console.warn("de-queueing event obj808." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj808").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj808_droppedInsideTargetActions_activeActionGroupIndex = 4;
	

//	action: hide
//	selector: obj#obj822 
hide_866();
function hide_866() {
	var selector = "#obj822";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj808_droppedInsideTargetActions_runningActionsCount = obj808_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj808_droppedInsideTargetActions_runningActionsCount = window.obj808_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj808_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj808_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj808_droppedInsideTargetActions_runningActionsCount == 0) {
	obj808_droppedInsideTargetActions_actionGroup5();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_866(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj808_droppedInsideTargetActions_runningActionsCount = window.obj808_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj808_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj808_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj808_droppedInsideTargetActions_runningActionsCount == 0) {
	obj808_droppedInsideTargetActions_actionGroup5();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj808_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj808_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj808").trigger("obj808_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 808) {
				console.warn("de-queueing event obj808." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj808").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj808_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj846 
playAudio_867();
function playAudio_867() {
	window.obj808_droppedInsideTargetActions_runningActionsCount = obj808_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj846")[0];
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
		    window.obj808_droppedInsideTargetActions_runningActionsCount = window.obj808_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj808_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj808_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj808_droppedInsideTargetActions_runningActionsCount == 0) {
	obj808_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj808_droppedInsideTargetActions_runningActionsCount = window.obj808_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj808_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj808_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj808_droppedInsideTargetActions_runningActionsCount == 0) {
	obj808_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj808_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj808_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj808").trigger("obj808_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 808) {
				console.warn("de-queueing event obj808." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj808").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj808_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_1103();
function switchText_1103() {
	window.obj808_droppedInsideTargetActions_runningActionsCount = obj808_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj982_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj982_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj982").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj982_content");
			setTimeout(function () {
				window.obj808_droppedInsideTargetActions_runningActionsCount = window.obj808_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj808_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj808_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj808_droppedInsideTargetActions_runningActionsCount == 0) {
	obj808_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj982 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj808_droppedInsideTargetActions_runningActionsCount = window.obj808_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj808_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj808_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj808_droppedInsideTargetActions_runningActionsCount == 0) {
	obj808_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj808_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj808_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj808").trigger("obj808_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 808) {
				console.warn("de-queueing event obj808." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj808").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj808_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj947_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj947_onTouchDown_activeActionGroupIndex = -1;
		$("#obj947").trigger("obj947_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 947) {
				console.warn("de-queueing event obj947." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj947").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj947_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj947");
//	action: dragDrop
//	target: obj947 
dragDrop_950();
function dragDrop_950() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj947_onTouchDown_runningActionsCount = obj947_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj947');
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
	  	containerNode = $('#obj798');
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
    	window.obj947_onTouchDown_runningActionsCount = window.obj947_onTouchDown_runningActionsCount - 1;
if (window.obj947_onTouchDown_runningActionsCount < 0) {
	window.obj947_onTouchDown_runningActionsCount = 0;
} else if (window.obj947_onTouchDown_runningActionsCount == 0) {
	obj947_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj812","#obj816","#obj896");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_950 = false;
    	var dropped_id_950;
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
					dropped_950 = true;
					dropped_id_950 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_950) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj947").trigger('SCActionDragDrop950_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj947_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj947_onTouchDown_activeActionGroupIndex = -1;
		$("#obj947").trigger("obj947_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 947) {
				console.warn("de-queueing event obj947." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj947").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj947_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj947_SCActionDragDrop950_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj947_SCActionDragDrop950_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj947").trigger("obj947_SCActionDragDrop950_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 947) {
				console.warn("de-queueing event obj947." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj947").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj947_SCActionDragDrop950_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj947 
move_92082();
function move_92082() {
	window.obj947_SCActionDragDrop950_droppedOutsideTargetActions_runningActionsCount = obj947_SCActionDragDrop950_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj947");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 312;
	var moveY = 617;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj947_SCActionDragDrop950_droppedOutsideTargetActions_runningActionsCount = window.obj947_SCActionDragDrop950_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj947_SCActionDragDrop950_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj947_SCActionDragDrop950_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj947_SCActionDragDrop950_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj947_SCActionDragDrop950_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj947_SCActionDragDrop950_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj947_SCActionDragDrop950_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj947").trigger("obj947_SCActionDragDrop950_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 947) {
				console.warn("de-queueing event obj947." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj947").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj947_SCActionDragDrop950_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj947_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj947_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj947").trigger("obj947_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 947) {
				console.warn("de-queueing event obj947." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj947").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj947_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_1031();
function runjs_1031() {
	window.obj947_droppedInsideTargetActions_3_runningActionsCount = obj947_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj947").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj947_droppedInsideTargetActions_3_runningActionsCount = window.obj947_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj947_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj947_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj947_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj947_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj947_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj947_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj947").trigger("obj947_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 947) {
				console.warn("de-queueing event obj947." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj947").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj947_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_1032();
function runjs_1032() {
	window.obj947_droppedInsideTargetActions_3_runningActionsCount = obj947_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj896").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj947_droppedInsideTargetActions_3_runningActionsCount = window.obj947_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj947_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj947_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj947_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj947_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj947_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj947_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj947").trigger("obj947_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 947) {
				console.warn("de-queueing event obj947." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj947").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj947_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	















//	action: Switch Text
switchText_1033();
function switchText_1033() {
	window.obj947_droppedInsideTargetActions_3_runningActionsCount = obj947_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"color: #ffffff;\"><strong><span style=\"font-family: Roboto; font-size: 18px;\">They study the world and the places and the way things work politically, socially and economically</span></strong></span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj947_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj947_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj947").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj947_content");
			setTimeout(function () {
				window.obj947_droppedInsideTargetActions_3_runningActionsCount = window.obj947_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj947_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj947_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj947_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj947_droppedInsideTargetActions_3_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj947 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj947_droppedInsideTargetActions_3_runningActionsCount = window.obj947_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj947_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj947_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj947_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj947_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
	}
}






};
obj947_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj947_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj947").trigger("obj947_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 947) {
				console.warn("de-queueing event obj947." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj947").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj947_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj822 
hide_1034();
function hide_1034() {
	var selector = "#obj822";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj947_droppedInsideTargetActions_3_runningActionsCount = obj947_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj947_droppedInsideTargetActions_3_runningActionsCount = window.obj947_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj947_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj947_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj947_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj947_droppedInsideTargetActions_3_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_1034(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj947_droppedInsideTargetActions_3_runningActionsCount = window.obj947_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj947_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj947_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj947_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj947_droppedInsideTargetActions_3_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj947_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj947_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj947").trigger("obj947_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 947) {
				console.warn("de-queueing event obj947." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj947").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj947_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_1035();
function switchText_1035() {
	window.obj947_droppedInsideTargetActions_3_runningActionsCount = obj947_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj982_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj982_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj982").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj982_content");
			setTimeout(function () {
				window.obj947_droppedInsideTargetActions_3_runningActionsCount = window.obj947_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj947_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj947_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj947_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj947_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj982 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj947_droppedInsideTargetActions_3_runningActionsCount = window.obj947_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj947_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj947_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj947_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj947_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj947_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj947_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj947").trigger("obj947_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 947) {
				console.warn("de-queueing event obj947." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj947").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj947_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj947 
move_1036();
function move_1036() {
	window.obj947_droppedInsideTargetActions_3_runningActionsCount = obj947_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj947");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 312;
	var moveY = 617;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj947_droppedInsideTargetActions_3_runningActionsCount = window.obj947_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj947_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj947_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj947_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj947_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj947_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj947_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj947").trigger("obj947_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 947) {
				console.warn("de-queueing event obj947." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj947").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj947_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	

//	action: show 
//	selector: #obj822
(function(){
	window.obj947_droppedInsideTargetActions_3_runningActionsCount = obj947_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj822";
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
					window.obj947_droppedInsideTargetActions_3_runningActionsCount = window.obj947_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj947_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj947_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj947_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj947_droppedInsideTargetActions_3_actionGroup7();
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
				window.obj947_droppedInsideTargetActions_3_runningActionsCount = window.obj947_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj947_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj947_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj947_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj947_droppedInsideTargetActions_3_actionGroup7();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();











//	action: playAudio
//	target: obj834 
playAudio_1041();
function playAudio_1041() {
	window.obj947_droppedInsideTargetActions_3_runningActionsCount = obj947_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj834")[0];
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
		    window.obj947_droppedInsideTargetActions_3_runningActionsCount = window.obj947_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj947_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj947_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj947_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj947_droppedInsideTargetActions_3_actionGroup7();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj947_droppedInsideTargetActions_3_runningActionsCount = window.obj947_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj947_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj947_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj947_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj947_droppedInsideTargetActions_3_actionGroup7();
}
	}
}


//	action: Run JavaScript
runjs_1037();
function runjs_1037() {
	window.obj947_droppedInsideTargetActions_3_runningActionsCount = obj947_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj947").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj947_droppedInsideTargetActions_3_runningActionsCount = window.obj947_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj947_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj947_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj947_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj947_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}
//	action: Run JavaScript
runjs_1038();
function runjs_1038() {
	window.obj947_droppedInsideTargetActions_3_runningActionsCount = obj947_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj896").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj947_droppedInsideTargetActions_3_runningActionsCount = window.obj947_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj947_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj947_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj947_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj947_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}

//	action: Switch Text
switchText_1040();
function switchText_1040() {
	window.obj947_droppedInsideTargetActions_3_runningActionsCount = obj947_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p style=\"text-align: center; line-height: 1;\"><span style=\"font-family: Roboto; font-size: 16px;\">They study the world and the places and the way things work politically, socially and economically</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj947_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj947_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj947").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj947_content");
			setTimeout(function () {
				window.obj947_droppedInsideTargetActions_3_runningActionsCount = window.obj947_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj947_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj947_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj947_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj947_droppedInsideTargetActions_3_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj947 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj947_droppedInsideTargetActions_3_runningActionsCount = window.obj947_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj947_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj947_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj947_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj947_droppedInsideTargetActions_3_actionGroup7();
}
		}, 1);
	}
}






};
obj947_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj947_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj947").trigger("obj947_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 947) {
				console.warn("de-queueing event obj947." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj947").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj947_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Switch Text
switchText_1042();
function switchText_1042() {
	window.obj947_droppedInsideTargetActions_3_runningActionsCount = obj947_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj982_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj982_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj982").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj982_content");
			setTimeout(function () {
				window.obj947_droppedInsideTargetActions_3_runningActionsCount = window.obj947_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj947_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj947_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj947_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj947_droppedInsideTargetActions_3_actionGroup8();
}
			}, 1);
		});
	} else {
		$("#obj982 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj947_droppedInsideTargetActions_3_runningActionsCount = window.obj947_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj947_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj947_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj947_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj947_droppedInsideTargetActions_3_actionGroup8();
}
		}, 1);
	}
}






};
obj947_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj947_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj947").trigger("obj947_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 947) {
				console.warn("de-queueing event obj947." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj947").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj947_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	





















};
obj947_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj947_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj947").trigger("obj947_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 947) {
				console.warn("de-queueing event obj947." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj947").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj947_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_958();
function runjs_958() {
	window.obj947_droppedInsideTargetActions_2_runningActionsCount = obj947_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj947").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj947_droppedInsideTargetActions_2_runningActionsCount = window.obj947_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj947_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj947_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj947_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj947_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj947_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj947_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj947").trigger("obj947_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 947) {
				console.warn("de-queueing event obj947." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj947").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj947_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_959();
function runjs_959() {
	window.obj947_droppedInsideTargetActions_2_runningActionsCount = obj947_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj816").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj947_droppedInsideTargetActions_2_runningActionsCount = window.obj947_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj947_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj947_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj947_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj947_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj947_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj947_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj947").trigger("obj947_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 947) {
				console.warn("de-queueing event obj947." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj947").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj947_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	















//	action: Switch Text
switchText_1001();
function switchText_1001() {
	window.obj947_droppedInsideTargetActions_2_runningActionsCount = obj947_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"color: #ffffff;\"><strong><span style=\"font-family: Roboto; font-size: 18px;\">They study the world and the places and the way things work politically, socially and economically</span></strong></span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj947_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj947_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj947").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj947_content");
			setTimeout(function () {
				window.obj947_droppedInsideTargetActions_2_runningActionsCount = window.obj947_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj947_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj947_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj947_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj947_droppedInsideTargetActions_2_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj947 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj947_droppedInsideTargetActions_2_runningActionsCount = window.obj947_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj947_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj947_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj947_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj947_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
	}
}






};
obj947_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj947_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj947").trigger("obj947_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 947) {
				console.warn("de-queueing event obj947." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj947").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj947_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj818 
hide_1002();
function hide_1002() {
	var selector = "#obj818";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj947_droppedInsideTargetActions_2_runningActionsCount = obj947_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj947_droppedInsideTargetActions_2_runningActionsCount = window.obj947_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj947_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj947_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj947_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj947_droppedInsideTargetActions_2_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_1002(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj947_droppedInsideTargetActions_2_runningActionsCount = window.obj947_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj947_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj947_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj947_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj947_droppedInsideTargetActions_2_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj947_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj947_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj947").trigger("obj947_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 947) {
				console.warn("de-queueing event obj947." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj947").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj947_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_1003();
function switchText_1003() {
	window.obj947_droppedInsideTargetActions_2_runningActionsCount = obj947_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj982_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj982_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj982").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj982_content");
			setTimeout(function () {
				window.obj947_droppedInsideTargetActions_2_runningActionsCount = window.obj947_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj947_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj947_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj947_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj947_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj982 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj947_droppedInsideTargetActions_2_runningActionsCount = window.obj947_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj947_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj947_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj947_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj947_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj947_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj947_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj947").trigger("obj947_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 947) {
				console.warn("de-queueing event obj947." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj947").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj947_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj947 
move_1004();
function move_1004() {
	window.obj947_droppedInsideTargetActions_2_runningActionsCount = obj947_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj947");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 312;
	var moveY = 617;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj947_droppedInsideTargetActions_2_runningActionsCount = window.obj947_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj947_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj947_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj947_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj947_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}













//	action: Run JavaScript
runjs_1005();
function runjs_1005() {
	window.obj947_droppedInsideTargetActions_2_runningActionsCount = obj947_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj947").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj947_droppedInsideTargetActions_2_runningActionsCount = window.obj947_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj947_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj947_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj947_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj947_droppedInsideTargetActions_2_actionGroup6();
}
	}, 1);
}







};
obj947_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj947_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj947").trigger("obj947_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 947) {
				console.warn("de-queueing event obj947." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj947").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj947_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_1006();
function runjs_1006() {
	window.obj947_droppedInsideTargetActions_2_runningActionsCount = obj947_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj816").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj947_droppedInsideTargetActions_2_runningActionsCount = window.obj947_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj947_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj947_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj947_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj947_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj947_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj947_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj947").trigger("obj947_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 947) {
				console.warn("de-queueing event obj947." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj947").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj947_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	

//	action: show 
//	selector: #obj818
(function(){
	window.obj947_droppedInsideTargetActions_2_runningActionsCount = obj947_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj818";
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
					window.obj947_droppedInsideTargetActions_2_runningActionsCount = window.obj947_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj947_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj947_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj947_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj947_droppedInsideTargetActions_2_actionGroup8();
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
				window.obj947_droppedInsideTargetActions_2_runningActionsCount = window.obj947_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj947_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj947_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj947_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj947_droppedInsideTargetActions_2_actionGroup8();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj947_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj947_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj947").trigger("obj947_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 947) {
				console.warn("de-queueing event obj947." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj947").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj947_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	















//	action: Switch Text
switchText_1008();
function switchText_1008() {
	window.obj947_droppedInsideTargetActions_2_runningActionsCount = obj947_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p style=\"text-align: center; line-height: 1;\"><span style=\"font-family: Roboto; font-size: 16px;\">They study the world and the places and the way things work politically, socially and economically</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj947_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj947_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj947").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj947_content");
			setTimeout(function () {
				window.obj947_droppedInsideTargetActions_2_runningActionsCount = window.obj947_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj947_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj947_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj947_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj947_droppedInsideTargetActions_2_actionGroup9();
}
			}, 1);
		});
	} else {
		$("#obj947 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj947_droppedInsideTargetActions_2_runningActionsCount = window.obj947_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj947_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj947_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj947_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj947_droppedInsideTargetActions_2_actionGroup9();
}
		}, 1);
	}
}






};
obj947_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj947_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj947").trigger("obj947_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 947) {
				console.warn("de-queueing event obj947." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj947").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj947_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	












//	action: playAudio
//	target: obj834 
playAudio_1014();
function playAudio_1014() {
	window.obj947_droppedInsideTargetActions_2_runningActionsCount = obj947_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj834")[0];
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
		    window.obj947_droppedInsideTargetActions_2_runningActionsCount = window.obj947_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj947_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj947_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj947_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj947_droppedInsideTargetActions_2_actionGroup10();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj947_droppedInsideTargetActions_2_runningActionsCount = window.obj947_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj947_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj947_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj947_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj947_droppedInsideTargetActions_2_actionGroup10();
}
	}
}









};
obj947_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj947_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj947").trigger("obj947_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 947) {
				console.warn("de-queueing event obj947." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj947").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj947_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Switch Text
switchText_1010();
function switchText_1010() {
	window.obj947_droppedInsideTargetActions_2_runningActionsCount = obj947_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj982_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj982_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj982").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj982_content");
			setTimeout(function () {
				window.obj947_droppedInsideTargetActions_2_runningActionsCount = window.obj947_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj947_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj947_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj947_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj947_droppedInsideTargetActions_2_actionGroup11();
}
			}, 1);
		});
	} else {
		$("#obj982 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj947_droppedInsideTargetActions_2_runningActionsCount = window.obj947_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj947_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj947_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj947_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj947_droppedInsideTargetActions_2_actionGroup11();
}
		}, 1);
	}
}






};
obj947_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj947_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj947").trigger("obj947_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 947) {
				console.warn("de-queueing event obj947." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj947").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj947_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	





















};
obj947_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj947_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj947").trigger("obj947_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 947) {
				console.warn("de-queueing event obj947." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj947").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj947_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_952();
function runjs_952() {
	window.obj947_droppedInsideTargetActions_runningActionsCount = obj947_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj947").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj947_droppedInsideTargetActions_runningActionsCount = window.obj947_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj947_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj947_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj947_droppedInsideTargetActions_runningActionsCount == 0) {
	obj947_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj947_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj947_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj947").trigger("obj947_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 947) {
				console.warn("de-queueing event obj947." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj947").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj947_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_1100();
function switchText_1100() {
	window.obj947_droppedInsideTargetActions_runningActionsCount = obj947_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Correct, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj982_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj982_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj982").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj982_content");
			setTimeout(function () {
				window.obj947_droppedInsideTargetActions_runningActionsCount = window.obj947_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj947_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj947_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj947_droppedInsideTargetActions_runningActionsCount == 0) {
	obj947_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj982 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj947_droppedInsideTargetActions_runningActionsCount = window.obj947_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj947_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj947_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj947_droppedInsideTargetActions_runningActionsCount == 0) {
	obj947_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj947_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj947_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj947").trigger("obj947_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 947) {
				console.warn("de-queueing event obj947." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj947").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj947_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_953();
function runjs_953() {
	window.obj947_droppedInsideTargetActions_runningActionsCount = obj947_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj812").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj947_droppedInsideTargetActions_runningActionsCount = window.obj947_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj947_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj947_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj947_droppedInsideTargetActions_runningActionsCount == 0) {
	obj947_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj947_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj947_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj947").trigger("obj947_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 947) {
				console.warn("de-queueing event obj947." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj947").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj947_droppedInsideTargetActions_activeActionGroupIndex = 3;
	















//	action: Switch Text
switchText_954();
function switchText_954() {
	window.obj947_droppedInsideTargetActions_runningActionsCount = obj947_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p style=\"text-align: center; line-height: 1;\"><span style=\"font-family: Roboto; font-size: 16px;\"><strong><span style=\"color: #ffffff;\">They study the world and </span></strong></span></p><p style=\"text-align: center; line-height: 1;\"><span style=\"font-family: Roboto; font-size: 16px;\"><strong><span style=\"color: #ffffff;\">the places andthe way </span></strong></span></p><p style=\"text-align: center; line-height: 1;\"><span style=\"font-family: Roboto; font-size: 16px;\"><strong><span style=\"color: #ffffff;\">things work politically, </span></strong></span></p><p style=\"text-align: center; line-height: 1;\"><span style=\"font-family: Roboto; font-size: 16px;\"><strong><span style=\"color: #ffffff;\">socially and economically.</span></strong></span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj947_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj947_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj947").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj947_content");
			setTimeout(function () {
				window.obj947_droppedInsideTargetActions_runningActionsCount = window.obj947_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj947_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj947_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj947_droppedInsideTargetActions_runningActionsCount == 0) {
	obj947_droppedInsideTargetActions_actionGroup4();
}
			}, 1);
		});
	} else {
		$("#obj947 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj947_droppedInsideTargetActions_runningActionsCount = window.obj947_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj947_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj947_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj947_droppedInsideTargetActions_runningActionsCount == 0) {
	obj947_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
	}
}






};
obj947_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj947_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj947").trigger("obj947_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 947) {
				console.warn("de-queueing event obj947." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj947").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj947_droppedInsideTargetActions_activeActionGroupIndex = 4;
	

//	action: hide
//	selector: obj#obj814 
hide_955();
function hide_955() {
	var selector = "#obj814";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj947_droppedInsideTargetActions_runningActionsCount = obj947_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj947_droppedInsideTargetActions_runningActionsCount = window.obj947_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj947_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj947_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj947_droppedInsideTargetActions_runningActionsCount == 0) {
	obj947_droppedInsideTargetActions_actionGroup5();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_955(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj947_droppedInsideTargetActions_runningActionsCount = window.obj947_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj947_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj947_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj947_droppedInsideTargetActions_runningActionsCount == 0) {
	obj947_droppedInsideTargetActions_actionGroup5();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj947_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj947_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj947").trigger("obj947_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 947) {
				console.warn("de-queueing event obj947." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj947").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj947_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj846 
playAudio_956();
function playAudio_956() {
	window.obj947_droppedInsideTargetActions_runningActionsCount = obj947_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj846")[0];
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
		    window.obj947_droppedInsideTargetActions_runningActionsCount = window.obj947_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj947_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj947_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj947_droppedInsideTargetActions_runningActionsCount == 0) {
	obj947_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj947_droppedInsideTargetActions_runningActionsCount = window.obj947_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj947_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj947_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj947_droppedInsideTargetActions_runningActionsCount == 0) {
	obj947_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj947_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj947_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj947").trigger("obj947_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 947) {
				console.warn("de-queueing event obj947." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj947").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj947_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_1101();
function switchText_1101() {
	window.obj947_droppedInsideTargetActions_runningActionsCount = obj947_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj982_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj982_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj982").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj982_content");
			setTimeout(function () {
				window.obj947_droppedInsideTargetActions_runningActionsCount = window.obj947_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj947_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj947_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj947_droppedInsideTargetActions_runningActionsCount == 0) {
	obj947_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj982 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj947_droppedInsideTargetActions_runningActionsCount = window.obj947_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj947_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj947_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj947_droppedInsideTargetActions_runningActionsCount == 0) {
	obj947_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj947_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj947_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj947").trigger("obj947_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 947) {
				console.warn("de-queueing event obj947." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj947").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj947_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj65102_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj65102_onTap_activeActionGroupIndex = -1;
		$("#obj65102").trigger("obj65102_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65102) {
				console.warn("de-queueing event obj65102." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65102").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65102_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj65102 
hide_65105();
function hide_65105() {
	var selector = "#obj65102";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj65102_onTap_runningActionsCount = obj65102_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj65102_onTap_runningActionsCount = window.obj65102_onTap_runningActionsCount - 1;
if (window.obj65102_onTap_runningActionsCount < 0) {
	window.obj65102_onTap_runningActionsCount = 0;
} else if (window.obj65102_onTap_runningActionsCount == 0) {
	obj65102_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_65105(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj65102_onTap_runningActionsCount = window.obj65102_onTap_runningActionsCount - 1;
if (window.obj65102_onTap_runningActionsCount < 0) {
	window.obj65102_onTap_runningActionsCount = 0;
} else if (window.obj65102_onTap_runningActionsCount == 0) {
	obj65102_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj65108 
stopMovie_65104();
function stopMovie_65104() {
	window.obj65102_onTap_runningActionsCount = obj65102_onTap_runningActionsCount + 1;
	var myVideo = $("#obj65108")[0];
	myVideo.pause();
	window.obj65102_onTap_runningActionsCount = window.obj65102_onTap_runningActionsCount - 1;
if (window.obj65102_onTap_runningActionsCount < 0) {
	window.obj65102_onTap_runningActionsCount = 0;
} else if (window.obj65102_onTap_runningActionsCount == 0) {
	obj65102_onTap_actionGroup1();
}
}
















};
obj65102_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj65102_onTap_activeActionGroupIndex = -1;
		$("#obj65102").trigger("obj65102_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65102) {
				console.warn("de-queueing event obj65102." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65102").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65102_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj65094
(function(){
	window.obj65102_onTap_runningActionsCount = obj65102_onTap_runningActionsCount + 1;

	var selector = "#obj65094";
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
					window.obj65102_onTap_runningActionsCount = window.obj65102_onTap_runningActionsCount - 1;
if (window.obj65102_onTap_runningActionsCount < 0) {
	window.obj65102_onTap_runningActionsCount = 0;
} else if (window.obj65102_onTap_runningActionsCount == 0) {
	obj65102_onTap_actionGroup2();
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
				window.obj65102_onTap_runningActionsCount = window.obj65102_onTap_runningActionsCount - 1;
if (window.obj65102_onTap_runningActionsCount < 0) {
	window.obj65102_onTap_runningActionsCount = 0;
} else if (window.obj65102_onTap_runningActionsCount == 0) {
	obj65102_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj65102_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj65102_onTap_activeActionGroupIndex = -1;
		$("#obj65102").trigger("obj65102_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65102) {
				console.warn("de-queueing event obj65102." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65102").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65102_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj65108 
move_65107();
function move_65107() {
	window.obj65102_onTap_runningActionsCount = obj65102_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj65108");
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
			window.obj65102_onTap_runningActionsCount = window.obj65102_onTap_runningActionsCount - 1;
if (window.obj65102_onTap_runningActionsCount < 0) {
	window.obj65102_onTap_runningActionsCount = 0;
} else if (window.obj65102_onTap_runningActionsCount == 0) {
	obj65102_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj65102_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj65102_onTap_activeActionGroupIndex = -1;
		$("#obj65102").trigger("obj65102_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65102) {
				console.warn("de-queueing event obj65102." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65102").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65102_onTap_activeActionGroupIndex = 3;
	





















};
obj65094_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj65094_onTap_activeActionGroupIndex = -1;
		$("#obj65094").trigger("obj65094_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65094) {
				console.warn("de-queueing event obj65094." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65094").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65094_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj65094 
hide_65097();
function hide_65097() {
	var selector = "#obj65094";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj65094_onTap_runningActionsCount = obj65094_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj65094_onTap_runningActionsCount = window.obj65094_onTap_runningActionsCount - 1;
if (window.obj65094_onTap_runningActionsCount < 0) {
	window.obj65094_onTap_runningActionsCount = 0;
} else if (window.obj65094_onTap_runningActionsCount == 0) {
	obj65094_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_65097(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj65094_onTap_runningActionsCount = window.obj65094_onTap_runningActionsCount - 1;
if (window.obj65094_onTap_runningActionsCount < 0) {
	window.obj65094_onTap_runningActionsCount = 0;
} else if (window.obj65094_onTap_runningActionsCount == 0) {
	obj65094_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj65108 
playPauseMovie_65096();
function playPauseMovie_65096() {
	window.obj65094_onTap_runningActionsCount = obj65094_onTap_runningActionsCount + 1;
	var myVideo = $("#obj65108")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj65094_onTap_runningActionsCount = window.obj65094_onTap_runningActionsCount - 1;
if (window.obj65094_onTap_runningActionsCount < 0) {
	window.obj65094_onTap_runningActionsCount = 0;
} else if (window.obj65094_onTap_runningActionsCount == 0) {
	obj65094_onTap_actionGroup1();
}
}

















};
obj65094_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj65094_onTap_activeActionGroupIndex = -1;
		$("#obj65094").trigger("obj65094_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65094) {
				console.warn("de-queueing event obj65094." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65094").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65094_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj65102
(function(){
	window.obj65094_onTap_runningActionsCount = obj65094_onTap_runningActionsCount + 1;

	var selector = "#obj65102";
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
					window.obj65094_onTap_runningActionsCount = window.obj65094_onTap_runningActionsCount - 1;
if (window.obj65094_onTap_runningActionsCount < 0) {
	window.obj65094_onTap_runningActionsCount = 0;
} else if (window.obj65094_onTap_runningActionsCount == 0) {
	obj65094_onTap_actionGroup2();
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
				window.obj65094_onTap_runningActionsCount = window.obj65094_onTap_runningActionsCount - 1;
if (window.obj65094_onTap_runningActionsCount < 0) {
	window.obj65094_onTap_runningActionsCount = 0;
} else if (window.obj65094_onTap_runningActionsCount == 0) {
	obj65094_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj65094_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj65094_onTap_activeActionGroupIndex = -1;
		$("#obj65094").trigger("obj65094_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65094) {
				console.warn("de-queueing event obj65094." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65094").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65094_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj65108 
move_65099();
function move_65099() {
	window.obj65094_onTap_runningActionsCount = obj65094_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj65108");
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
			window.obj65094_onTap_runningActionsCount = window.obj65094_onTap_runningActionsCount - 1;
if (window.obj65094_onTap_runningActionsCount < 0) {
	window.obj65094_onTap_runningActionsCount = 0;
} else if (window.obj65094_onTap_runningActionsCount == 0) {
	obj65094_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj65094_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj65094_onTap_activeActionGroupIndex = -1;
		$("#obj65094").trigger("obj65094_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65094) {
				console.warn("de-queueing event obj65094." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65094").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65094_onTap_activeActionGroupIndex = 3;
	





















};
obj86889_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86889_onTap_activeActionGroupIndex = -1;
		$("#obj86889").trigger("obj86889_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86889) {
				console.warn("de-queueing event obj86889." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86889").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86889_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj86894 
stopAudio_86891();
function stopAudio_86891() {
	window.obj86889_onTap_runningActionsCount = obj86889_onTap_runningActionsCount + 1;
	var myAudio = $("#obj86894")[0];
	myAudio.pause();
	window.obj86889_onTap_runningActionsCount = window.obj86889_onTap_runningActionsCount - 1;
if (window.obj86889_onTap_runningActionsCount < 0) {
	window.obj86889_onTap_runningActionsCount = 0;
} else if (window.obj86889_onTap_runningActionsCount == 0) {
	obj86889_onTap_actionGroup1();
}
}








};
obj86889_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86889_onTap_activeActionGroupIndex = -1;
		$("#obj86889").trigger("obj86889_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86889) {
				console.warn("de-queueing event obj86889." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86889").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86889_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj86889 
hide_86892();
function hide_86892() {
	var selector = "#obj86889";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj86889_onTap_runningActionsCount = obj86889_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj86889_onTap_runningActionsCount = window.obj86889_onTap_runningActionsCount - 1;
if (window.obj86889_onTap_runningActionsCount < 0) {
	window.obj86889_onTap_runningActionsCount = 0;
} else if (window.obj86889_onTap_runningActionsCount == 0) {
	obj86889_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_86892(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj86889_onTap_runningActionsCount = window.obj86889_onTap_runningActionsCount - 1;
if (window.obj86889_onTap_runningActionsCount < 0) {
	window.obj86889_onTap_runningActionsCount = 0;
} else if (window.obj86889_onTap_runningActionsCount == 0) {
	obj86889_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj86889_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86889_onTap_activeActionGroupIndex = -1;
		$("#obj86889").trigger("obj86889_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86889) {
				console.warn("de-queueing event obj86889." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86889").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86889_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj86884
(function(){
	window.obj86889_onTap_runningActionsCount = obj86889_onTap_runningActionsCount + 1;

	var selector = "#obj86884";
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
					window.obj86889_onTap_runningActionsCount = window.obj86889_onTap_runningActionsCount - 1;
if (window.obj86889_onTap_runningActionsCount < 0) {
	window.obj86889_onTap_runningActionsCount = 0;
} else if (window.obj86889_onTap_runningActionsCount == 0) {
	obj86889_onTap_actionGroup3();
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
				window.obj86889_onTap_runningActionsCount = window.obj86889_onTap_runningActionsCount - 1;
if (window.obj86889_onTap_runningActionsCount < 0) {
	window.obj86889_onTap_runningActionsCount = 0;
} else if (window.obj86889_onTap_runningActionsCount == 0) {
	obj86889_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj86889_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj86889_onTap_activeActionGroupIndex = -1;
		$("#obj86889").trigger("obj86889_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86889) {
				console.warn("de-queueing event obj86889." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86889").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86889_onTap_activeActionGroupIndex = 3;
	





















};
obj86884_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86884_onTap_activeActionGroupIndex = -1;
		$("#obj86884").trigger("obj86884_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86884) {
				console.warn("de-queueing event obj86884." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86884").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86884_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj86884 
hide_86886();
function hide_86886() {
	var selector = "#obj86884";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj86884_onTap_runningActionsCount = obj86884_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj86884_onTap_runningActionsCount = window.obj86884_onTap_runningActionsCount - 1;
if (window.obj86884_onTap_runningActionsCount < 0) {
	window.obj86884_onTap_runningActionsCount = 0;
} else if (window.obj86884_onTap_runningActionsCount == 0) {
	obj86884_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_86886(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj86884_onTap_runningActionsCount = window.obj86884_onTap_runningActionsCount - 1;
if (window.obj86884_onTap_runningActionsCount < 0) {
	window.obj86884_onTap_runningActionsCount = 0;
} else if (window.obj86884_onTap_runningActionsCount == 0) {
	obj86884_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj86884_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86884_onTap_activeActionGroupIndex = -1;
		$("#obj86884").trigger("obj86884_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86884) {
				console.warn("de-queueing event obj86884." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86884").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86884_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj86889
(function(){
	window.obj86884_onTap_runningActionsCount = obj86884_onTap_runningActionsCount + 1;

	var selector = "#obj86889";
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
					window.obj86884_onTap_runningActionsCount = window.obj86884_onTap_runningActionsCount - 1;
if (window.obj86884_onTap_runningActionsCount < 0) {
	window.obj86884_onTap_runningActionsCount = 0;
} else if (window.obj86884_onTap_runningActionsCount == 0) {
	obj86884_onTap_actionGroup2();
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
				window.obj86884_onTap_runningActionsCount = window.obj86884_onTap_runningActionsCount - 1;
if (window.obj86884_onTap_runningActionsCount < 0) {
	window.obj86884_onTap_runningActionsCount = 0;
} else if (window.obj86884_onTap_runningActionsCount == 0) {
	obj86884_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj86884_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86884_onTap_activeActionGroupIndex = -1;
		$("#obj86884").trigger("obj86884_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86884) {
				console.warn("de-queueing event obj86884." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86884").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86884_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj86894 
playAudio_86888();
function playAudio_86888() {
	window.obj86884_onTap_runningActionsCount = obj86884_onTap_runningActionsCount + 1;
	var myAudio = $("#obj86894")[0];
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
		    window.obj86884_onTap_runningActionsCount = window.obj86884_onTap_runningActionsCount - 1;
if (window.obj86884_onTap_runningActionsCount < 0) {
	window.obj86884_onTap_runningActionsCount = 0;
} else if (window.obj86884_onTap_runningActionsCount == 0) {
	obj86884_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj86884_onTap_runningActionsCount = window.obj86884_onTap_runningActionsCount - 1;
if (window.obj86884_onTap_runningActionsCount < 0) {
	window.obj86884_onTap_runningActionsCount = 0;
} else if (window.obj86884_onTap_runningActionsCount == 0) {
	obj86884_onTap_actionGroup3();
}
	}
}









};
obj86884_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj86884_onTap_activeActionGroupIndex = -1;
		$("#obj86884").trigger("obj86884_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86884) {
				console.warn("de-queueing event obj86884." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86884").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86884_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj766: Event Touch Down
 *
 */
$("#obj766").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj766_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj766_onTap is still running");
	return;
}
var obj766_onTap_runningActionsCount = 0;
var obj766_onTap_loopCount = 0;
obj766_onTap_actionGroup0();
});










/*
 *
 *   obj763: Event Touch Down
 *
 */
$("#obj763").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj763_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj763_onTap is still running");
	return;
}
var obj763_onTap_runningActionsCount = 0;
var obj763_onTap_loopCount = 0;
obj763_onTap_actionGroup0();
});










/*
 *
 *   obj769: Event Touch Down
 *
 */
$("#obj769").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj769_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj769_onTap is still running");
	return;
}
var obj769_onTap_runningActionsCount = 0;
var obj769_onTap_loopCount = 0;
obj769_onTap_actionGroup0();
});









































































































































































































/*
 *
 *   obj806: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj806");
	var winTarget = document.getElementById("obj806");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj806").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj806_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj806_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj806_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj806_onTouchDown is still running");
	return;
}
var obj806_onTouchDown_runningActionsCount = 0;
var obj806_onTouchDown_loopCount = 0;
obj806_onTouchDown_actionGroup0();
});



/*
 *
 *   obj806: Event SCActionDragDrop850_droppedOutsideTargetActions
 *
 */
$("#obj806").bind("SCActionDragDrop850_droppedOutsideTargetActions", function(event) {
	if (window.obj806_SCActionDragDrop850_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj806_SCActionDragDrop850_droppedOutsideTargetActions is still running");
	return;
}
var obj806_SCActionDragDrop850_droppedOutsideTargetActions_runningActionsCount = 0;
var obj806_SCActionDragDrop850_droppedOutsideTargetActions_loopCount = 0;
obj806_SCActionDragDrop850_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj806: Event droppedInsideTargetActions_3
 *
 */
$("#obj806").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj806_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj806_droppedInsideTargetActions_3 is still running");
	return;
}
var obj806_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj806_droppedInsideTargetActions_3_loopCount = 0;
obj806_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj806: Event droppedInsideTargetActions_2
 *
 */
$("#obj806").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj806_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj806_droppedInsideTargetActions_2 is still running");
	return;
}
var obj806_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj806_droppedInsideTargetActions_2_loopCount = 0;
obj806_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj806: Event droppedInsideTargetActions
 *
 */
$("#obj806").bind("droppedInsideTargetActions", function(event) {
	if (window.obj806_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj806_droppedInsideTargetActions is still running");
	return;
}
var obj806_droppedInsideTargetActions_runningActionsCount = 0;
var obj806_droppedInsideTargetActions_loopCount = 0;
obj806_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj808: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj808");
	var winTarget = document.getElementById("obj808");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj808").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj808_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj808_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj808_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj808_onTouchDown is still running");
	return;
}
var obj808_onTouchDown_runningActionsCount = 0;
var obj808_onTouchDown_loopCount = 0;
obj808_onTouchDown_actionGroup0();
});



/*
 *
 *   obj808: Event SCActionDragDrop861_droppedOutsideTargetActions
 *
 */
$("#obj808").bind("SCActionDragDrop861_droppedOutsideTargetActions", function(event) {
	if (window.obj808_SCActionDragDrop861_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj808_SCActionDragDrop861_droppedOutsideTargetActions is still running");
	return;
}
var obj808_SCActionDragDrop861_droppedOutsideTargetActions_runningActionsCount = 0;
var obj808_SCActionDragDrop861_droppedOutsideTargetActions_loopCount = 0;
obj808_SCActionDragDrop861_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj808: Event droppedInsideTargetActions_3
 *
 */
$("#obj808").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj808_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj808_droppedInsideTargetActions_3 is still running");
	return;
}
var obj808_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj808_droppedInsideTargetActions_3_loopCount = 0;
obj808_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj808: Event droppedInsideTargetActions_2
 *
 */
$("#obj808").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj808_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj808_droppedInsideTargetActions_2 is still running");
	return;
}
var obj808_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj808_droppedInsideTargetActions_2_loopCount = 0;
obj808_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj808: Event droppedInsideTargetActions
 *
 */
$("#obj808").bind("droppedInsideTargetActions", function(event) {
	if (window.obj808_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj808_droppedInsideTargetActions is still running");
	return;
}
var obj808_droppedInsideTargetActions_runningActionsCount = 0;
var obj808_droppedInsideTargetActions_loopCount = 0;
obj808_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj947: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj947");
	var winTarget = document.getElementById("obj947");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj947").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj947_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj947_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj947_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj947_onTouchDown is still running");
	return;
}
var obj947_onTouchDown_runningActionsCount = 0;
var obj947_onTouchDown_loopCount = 0;
obj947_onTouchDown_actionGroup0();
});



/*
 *
 *   obj947: Event SCActionDragDrop950_droppedOutsideTargetActions
 *
 */
$("#obj947").bind("SCActionDragDrop950_droppedOutsideTargetActions", function(event) {
	if (window.obj947_SCActionDragDrop950_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj947_SCActionDragDrop950_droppedOutsideTargetActions is still running");
	return;
}
var obj947_SCActionDragDrop950_droppedOutsideTargetActions_runningActionsCount = 0;
var obj947_SCActionDragDrop950_droppedOutsideTargetActions_loopCount = 0;
obj947_SCActionDragDrop950_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj947: Event droppedInsideTargetActions_3
 *
 */
$("#obj947").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj947_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj947_droppedInsideTargetActions_3 is still running");
	return;
}
var obj947_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj947_droppedInsideTargetActions_3_loopCount = 0;
obj947_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj947: Event droppedInsideTargetActions_2
 *
 */
$("#obj947").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj947_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj947_droppedInsideTargetActions_2 is still running");
	return;
}
var obj947_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj947_droppedInsideTargetActions_2_loopCount = 0;
obj947_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj947: Event droppedInsideTargetActions
 *
 */
$("#obj947").bind("droppedInsideTargetActions", function(event) {
	if (window.obj947_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj947_droppedInsideTargetActions is still running");
	return;
}
var obj947_droppedInsideTargetActions_runningActionsCount = 0;
var obj947_droppedInsideTargetActions_loopCount = 0;
obj947_droppedInsideTargetActions_actionGroup0();
});





/*
 *
 *   obj65102: Event Touch Down
 *
 */
$("#obj65102").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj65102_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj65102_onTap is still running");
	return;
}
var obj65102_onTap_runningActionsCount = 0;
var obj65102_onTap_loopCount = 0;
obj65102_onTap_actionGroup0();
});










/*
 *
 *   obj65094: Event Touch Down
 *
 */
$("#obj65094").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj65094_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj65094_onTap is still running");
	return;
}
var obj65094_onTap_runningActionsCount = 0;
var obj65094_onTap_loopCount = 0;
obj65094_onTap_actionGroup0();
});










/*
 *
 *   obj86889: Event Touch Down
 *
 */
$("#obj86889").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj86889_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj86889_onTap is still running");
	return;
}
var obj86889_onTap_runningActionsCount = 0;
var obj86889_onTap_loopCount = 0;
obj86889_onTap_actionGroup0();
});










/*
 *
 *   obj86884: Event Touch Down
 *
 */
$("#obj86884").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj86884_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj86884_onTap is still running");
	return;
}
var obj86884_onTap_runningActionsCount = 0;
var obj86884_onTap_loopCount = 0;
obj86884_onTap_actionGroup0();
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
	
$("#obj761").trigger('SCEventShow');
$("#obj766").trigger('SCEventShow');
$("#obj763").trigger('SCEventShow');
$("#obj769").trigger('SCEventShow');
$("#obj786").trigger('SCEventShow');
$("#obj792").trigger('SCEventShow');
$("#obj790").trigger('SCEventShow');
$("#obj788").trigger('SCEventShow');
$("#obj798").trigger('SCEventShow');
$("#obj812").trigger('SCEventShow');
$("#obj814").trigger('SCEventShow');
$("#obj816").trigger('SCEventShow');
$("#obj818").trigger('SCEventShow');
$("#obj824").trigger('SCEventShow');
$("#obj826").trigger('SCEventShow');
$("#obj828").trigger('SCEventShow');
$("#obj831").trigger('SCEventShow');
$("#obj834").trigger('SCEventShow');
$("#obj835").trigger('SCEventShow');
$("#obj846").trigger('SCEventShow');
$("#obj896").trigger('SCEventShow');
$("#obj822").trigger('SCEventShow');
$("#obj982").trigger('SCEventShow');
$("#obj806").trigger('SCEventShow');
$("#obj808").trigger('SCEventShow');
$("#obj947").trigger('SCEventShow');
$("#obj65102").trigger('SCEventShow');
$("#obj65094").trigger('SCEventShow');
$("#obj86889").trigger('SCEventShow');
$("#obj86884").trigger('SCEventShow');
$("#obj86894").trigger('SCEventShow');
$("#obj94647").trigger('SCEventShow');
$("#obj65108").trigger('SCEventShow');
	
});