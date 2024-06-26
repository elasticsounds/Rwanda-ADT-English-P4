pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 17572;
pubcoder.page.title = pubcoder.page.title || "66";
pubcoder.page.number = pubcoder.page.number || 66;
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
var obj75046_onTap_activeActionGroupIndex = -1;
var obj75046_onTap_runningActionsCount = 0;
var obj75046_onTap_loopCount = 0;
var obj75043_onTap_activeActionGroupIndex = -1;
var obj75043_onTap_runningActionsCount = 0;
var obj75043_onTap_loopCount = 0;
var obj75039_onTap_activeActionGroupIndex = -1;
var obj75039_onTap_runningActionsCount = 0;
var obj75039_onTap_loopCount = 0;
var obj74974_onDrag_activeActionGroupIndex = -1;
var obj74974_onDrag_runningActionsCount = 0;
var obj74974_onDrag_loopCount = 0;
var obj74974_onTouchDown_activeActionGroupIndex = -1;
var obj74974_onTouchDown_runningActionsCount = 0;
var obj74974_onTouchDown_loopCount = 0;
var obj74974_SCActionDragDrop74977_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj74974_SCActionDragDrop74977_droppedOutsideTargetActions_runningActionsCount = 0;
var obj74974_SCActionDragDrop74977_droppedOutsideTargetActions_loopCount = 0;
var obj74974_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj74974_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj74974_droppedInsideTargetActions_2_loopCount = 0;
var obj74974_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj74974_droppedInsideTargetActions_runningActionsCount = 0;
var obj74974_droppedInsideTargetActions_loopCount = 0;
var obj74949_onDrag_activeActionGroupIndex = -1;
var obj74949_onDrag_runningActionsCount = 0;
var obj74949_onDrag_loopCount = 0;
var obj74949_onTouchDown_activeActionGroupIndex = -1;
var obj74949_onTouchDown_runningActionsCount = 0;
var obj74949_onTouchDown_loopCount = 0;
var obj74949_SCActionDragDrop74952_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj74949_SCActionDragDrop74952_droppedOutsideTargetActions_runningActionsCount = 0;
var obj74949_SCActionDragDrop74952_droppedOutsideTargetActions_loopCount = 0;
var obj74949_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj74949_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj74949_droppedInsideTargetActions_2_loopCount = 0;
var obj74949_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj74949_droppedInsideTargetActions_runningActionsCount = 0;
var obj74949_droppedInsideTargetActions_loopCount = 0;
var obj74931_onTap_activeActionGroupIndex = -1;
var obj74931_onTap_runningActionsCount = 0;
var obj74931_onTap_loopCount = 0;
var obj74923_onTap_activeActionGroupIndex = -1;
var obj74923_onTap_runningActionsCount = 0;
var obj74923_onTap_loopCount = 0;
var obj87623_onTap_activeActionGroupIndex = -1;
var obj87623_onTap_runningActionsCount = 0;
var obj87623_onTap_loopCount = 0;
var obj87618_onTap_activeActionGroupIndex = -1;
var obj87618_onTap_runningActionsCount = 0;
var obj87618_onTap_loopCount = 0;
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
		
obj75046_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75046_onTap_activeActionGroupIndex = -1;
		$("#obj75046").trigger("obj75046_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75046) {
				console.warn("de-queueing event obj75046." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75046").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75046_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_75048();
function goToPage_75048() {
	window.obj75046_onTap_runningActionsCount = obj75046_onTap_runningActionsCount + 1;
	$("#anchor393")[0].click();
	window.obj75046_onTap_runningActionsCount = window.obj75046_onTap_runningActionsCount - 1;
if (window.obj75046_onTap_runningActionsCount < 0) {
	window.obj75046_onTap_runningActionsCount = 0;
} else if (window.obj75046_onTap_runningActionsCount == 0) {
	obj75046_onTap_actionGroup1();
}
}





















};
obj75046_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj75046_onTap_activeActionGroupIndex = -1;
		$("#obj75046").trigger("obj75046_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75046) {
				console.warn("de-queueing event obj75046." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75046").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75046_onTap_activeActionGroupIndex = 1;
	





















};
obj75043_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75043_onTap_activeActionGroupIndex = -1;
		$("#obj75043").trigger("obj75043_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75043) {
				console.warn("de-queueing event obj75043." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75043").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75043_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_75045();
function goToPage_75045() {
	window.obj75043_onTap_runningActionsCount = obj75043_onTap_runningActionsCount + 1;
	$("#anchor394")[0].click();
	window.obj75043_onTap_runningActionsCount = window.obj75043_onTap_runningActionsCount - 1;
if (window.obj75043_onTap_runningActionsCount < 0) {
	window.obj75043_onTap_runningActionsCount = 0;
} else if (window.obj75043_onTap_runningActionsCount == 0) {
	obj75043_onTap_actionGroup1();
}
}





















};
obj75043_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj75043_onTap_activeActionGroupIndex = -1;
		$("#obj75043").trigger("obj75043_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75043) {
				console.warn("de-queueing event obj75043." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75043").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75043_onTap_activeActionGroupIndex = 1;
	





















};
obj75039_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75039_onTap_activeActionGroupIndex = -1;
		$("#obj75039").trigger("obj75039_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75039) {
				console.warn("de-queueing event obj75039." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75039").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75039_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_75041();
function goToPage_75041() {
	window.obj75039_onTap_runningActionsCount = obj75039_onTap_runningActionsCount + 1;
	$("#anchor395")[0].click();
	window.obj75039_onTap_runningActionsCount = window.obj75039_onTap_runningActionsCount - 1;
if (window.obj75039_onTap_runningActionsCount < 0) {
	window.obj75039_onTap_runningActionsCount = 0;
} else if (window.obj75039_onTap_runningActionsCount == 0) {
	obj75039_onTap_actionGroup1();
}
}





















};
obj75039_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj75039_onTap_activeActionGroupIndex = -1;
		$("#obj75039").trigger("obj75039_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75039) {
				console.warn("de-queueing event obj75039." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75039").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75039_onTap_activeActionGroupIndex = 1;
	





















};
obj74974_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74974_onTouchDown_activeActionGroupIndex = -1;
		$("#obj74974").trigger("obj74974_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74974) {
				console.warn("de-queueing event obj74974." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74974").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74974_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj74974");
//	action: dragDrop
//	target: obj74974 
dragDrop_74977();
function dragDrop_74977() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj74974_onTouchDown_runningActionsCount = obj74974_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj74974');
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
	  	containerNode = $('#obj75029');
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
    	window.obj74974_onTouchDown_runningActionsCount = window.obj74974_onTouchDown_runningActionsCount - 1;
if (window.obj74974_onTouchDown_runningActionsCount < 0) {
	window.obj74974_onTouchDown_runningActionsCount = 0;
} else if (window.obj74974_onTouchDown_runningActionsCount == 0) {
	obj74974_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj75005","#obj75007");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_74977 = false;
    	var dropped_id_74977;
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
					dropped_74977 = true;
					dropped_id_74977 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_74977) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj74974").trigger('SCActionDragDrop74977_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj74974_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj74974_onTouchDown_activeActionGroupIndex = -1;
		$("#obj74974").trigger("obj74974_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74974) {
				console.warn("de-queueing event obj74974." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74974").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74974_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj74974_SCActionDragDrop74977_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74974_SCActionDragDrop74977_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj74974").trigger("obj74974_SCActionDragDrop74977_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74974) {
				console.warn("de-queueing event obj74974." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74974").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74974_SCActionDragDrop74977_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj74974 
move_92308();
function move_92308() {
	window.obj74974_SCActionDragDrop74977_droppedOutsideTargetActions_runningActionsCount = obj74974_SCActionDragDrop74977_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj74974");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 139;
	var moveY = 661;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj74974_SCActionDragDrop74977_droppedOutsideTargetActions_runningActionsCount = window.obj74974_SCActionDragDrop74977_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj74974_SCActionDragDrop74977_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj74974_SCActionDragDrop74977_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj74974_SCActionDragDrop74977_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj74974_SCActionDragDrop74977_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj74974_SCActionDragDrop74977_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj74974_SCActionDragDrop74977_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj74974").trigger("obj74974_SCActionDragDrop74977_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74974) {
				console.warn("de-queueing event obj74974." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74974").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74974_SCActionDragDrop74977_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj74974_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74974_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj74974").trigger("obj74974_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74974) {
				console.warn("de-queueing event obj74974." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74974").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74974_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_74986();
function runjs_74986() {
	window.obj74974_droppedInsideTargetActions_2_runningActionsCount = obj74974_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj75007").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj74974_droppedInsideTargetActions_2_runningActionsCount = window.obj74974_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74974_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74974_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74974_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74974_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj74974_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74974_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj74974").trigger("obj74974_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74974) {
				console.warn("de-queueing event obj74974." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74974").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74974_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_74987();
function runjs_74987() {
	window.obj74974_droppedInsideTargetActions_2_runningActionsCount = obj74974_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj75007").css("border-color", "#C00000"); $("#obj75007").css("border-width", "2px"); $("#obj75007").css("border-style", "solid"); $("#obj75007").css("border-radius", "10px"); $("#obj75007").css("-webkit-border-radius", "10px"); $("#obj75007").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj74974_droppedInsideTargetActions_2_runningActionsCount = window.obj74974_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74974_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74974_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74974_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74974_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj74974_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74974_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj74974").trigger("obj74974_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74974) {
				console.warn("de-queueing event obj74974." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74974").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74974_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj75003 
hide_74988();
function hide_74988() {
	var selector = "#obj75003";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj74974_droppedInsideTargetActions_2_runningActionsCount = obj74974_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj74974_droppedInsideTargetActions_2_runningActionsCount = window.obj74974_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74974_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74974_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74974_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74974_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_74988(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj74974_droppedInsideTargetActions_2_runningActionsCount = window.obj74974_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74974_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74974_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74974_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74974_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj74974_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74974_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj74974").trigger("obj74974_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74974) {
				console.warn("de-queueing event obj74974." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74974").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74974_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_74989();
function runjs_74989() {
	window.obj74974_droppedInsideTargetActions_2_runningActionsCount = obj74974_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj74974").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj74974_droppedInsideTargetActions_2_runningActionsCount = window.obj74974_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74974_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74974_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74974_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74974_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj74974_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74974_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj74974").trigger("obj74974_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74974) {
				console.warn("de-queueing event obj74974." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74974").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74974_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_74990();
function switchText_74990() {
	window.obj74974_droppedInsideTargetActions_2_runningActionsCount = obj74974_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj75025_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj75025_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj75025").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj75025_content");
			setTimeout(function () {
				window.obj74974_droppedInsideTargetActions_2_runningActionsCount = window.obj74974_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74974_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74974_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74974_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74974_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj75025 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj74974_droppedInsideTargetActions_2_runningActionsCount = window.obj74974_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74974_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74974_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74974_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74974_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj74974_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74974_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj74974").trigger("obj74974_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74974) {
				console.warn("de-queueing event obj74974." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74974").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74974_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj74974 
move_74991();
function move_74991() {
	window.obj74974_droppedInsideTargetActions_2_runningActionsCount = obj74974_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj74974");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 139;
	var moveY = 661;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj74974_droppedInsideTargetActions_2_runningActionsCount = window.obj74974_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74974_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74974_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74974_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74974_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj74974_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74974_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj74974").trigger("obj74974_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74974) {
				console.warn("de-queueing event obj74974." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74974").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74974_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_74992();
function runjs_74992() {
	window.obj74974_droppedInsideTargetActions_2_runningActionsCount = obj74974_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj75007").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj74974_droppedInsideTargetActions_2_runningActionsCount = window.obj74974_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74974_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74974_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74974_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74974_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj74974_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74974_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj74974").trigger("obj74974_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74974) {
				console.warn("de-queueing event obj74974." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74974").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74974_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_74993();
function runjs_74993() {
	window.obj74974_droppedInsideTargetActions_2_runningActionsCount = obj74974_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj75007").css("border-color", "#000000"); $("#obj75007").css("border-width", "1px"); $("#obj75007").css("border-style", "solid"); $("#obj75007").css("border-radius", "10px"); $("#obj75007").css("-webkit-border-radius", "10px"); $("#obj75007").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj74974_droppedInsideTargetActions_2_runningActionsCount = window.obj74974_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74974_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74974_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74974_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74974_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj74974_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74974_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj74974").trigger("obj74974_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74974) {
				console.warn("de-queueing event obj74974." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74974").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74974_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj75003
(function(){
	window.obj74974_droppedInsideTargetActions_2_runningActionsCount = obj74974_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj75003";
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
					window.obj74974_droppedInsideTargetActions_2_runningActionsCount = window.obj74974_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74974_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74974_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74974_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74974_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj74974_droppedInsideTargetActions_2_runningActionsCount = window.obj74974_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74974_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74974_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74974_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74974_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj74974_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74974_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj74974").trigger("obj74974_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74974) {
				console.warn("de-queueing event obj74974." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74974").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74974_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_74995();
function runjs_74995() {
	window.obj74974_droppedInsideTargetActions_2_runningActionsCount = obj74974_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj74974").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj74974_droppedInsideTargetActions_2_runningActionsCount = window.obj74974_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74974_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74974_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74974_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74974_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj74974_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74974_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj74974").trigger("obj74974_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74974) {
				console.warn("de-queueing event obj74974." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74974").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74974_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_74996();
function runjs_74996() {
	window.obj74974_droppedInsideTargetActions_2_runningActionsCount = obj74974_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj74974").css("border-color", "rgba(0,0,0,0)"); $("#obj74974").css("border-width", "0px"); $("#obj74974").css("border-style", "solid"); $("#obj74974").css("border-radius", "10px"); $("#obj74974").css("-webkit-border-radius", "10px"); $("#obj74974").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj74974_droppedInsideTargetActions_2_runningActionsCount = window.obj74974_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74974_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74974_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74974_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74974_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj74974_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74974_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj74974").trigger("obj74974_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74974) {
				console.warn("de-queueing event obj74974." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74974").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74974_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj75024 
playAudio_74997();
function playAudio_74997() {
	window.obj74974_droppedInsideTargetActions_2_runningActionsCount = obj74974_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj75024")[0];
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
		    window.obj74974_droppedInsideTargetActions_2_runningActionsCount = window.obj74974_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74974_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74974_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74974_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74974_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj74974_droppedInsideTargetActions_2_runningActionsCount = window.obj74974_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74974_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74974_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74974_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74974_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj74974_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74974_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj74974").trigger("obj74974_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74974) {
				console.warn("de-queueing event obj74974." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74974").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74974_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_74998();
function switchText_74998() {
	window.obj74974_droppedInsideTargetActions_2_runningActionsCount = obj74974_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj75025_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj75025_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj75025").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj75025_content");
			setTimeout(function () {
				window.obj74974_droppedInsideTargetActions_2_runningActionsCount = window.obj74974_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74974_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74974_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74974_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74974_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj75025 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj74974_droppedInsideTargetActions_2_runningActionsCount = window.obj74974_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74974_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74974_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74974_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74974_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj74974_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj74974_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj74974").trigger("obj74974_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74974) {
				console.warn("de-queueing event obj74974." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74974").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74974_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj74974_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74974_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj74974").trigger("obj74974_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74974) {
				console.warn("de-queueing event obj74974." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74974").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74974_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_74979();
function runjs_74979() {
	window.obj74974_droppedInsideTargetActions_runningActionsCount = obj74974_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj75005").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj74974_droppedInsideTargetActions_runningActionsCount = window.obj74974_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj74974_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj74974_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj74974_droppedInsideTargetActions_runningActionsCount == 0) {
	obj74974_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj74974_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74974_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj74974").trigger("obj74974_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74974) {
				console.warn("de-queueing event obj74974." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74974").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74974_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_74983();
function switchText_74983() {
	window.obj74974_droppedInsideTargetActions_runningActionsCount = obj74974_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj75025_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj75025_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj75025").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj75025_content");
			setTimeout(function () {
				window.obj74974_droppedInsideTargetActions_runningActionsCount = window.obj74974_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj74974_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj74974_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj74974_droppedInsideTargetActions_runningActionsCount == 0) {
	obj74974_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj75025 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj74974_droppedInsideTargetActions_runningActionsCount = window.obj74974_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj74974_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj74974_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj74974_droppedInsideTargetActions_runningActionsCount == 0) {
	obj74974_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj74974_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74974_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj74974").trigger("obj74974_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74974) {
				console.warn("de-queueing event obj74974." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74974").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74974_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_74980();
function runjs_74980() {
	window.obj74974_droppedInsideTargetActions_runningActionsCount = obj74974_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj75005").css("border-color", "#058E3F"); $("#obj75005").css("border-width", "2px"); $("#obj75005").css("border-style", "solid"); $("#obj75005").css("border-radius", "10px"); $("#obj75005").css("-webkit-border-radius", "10px"); $("#obj75005").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj74974_droppedInsideTargetActions_runningActionsCount = window.obj74974_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj74974_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj74974_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj74974_droppedInsideTargetActions_runningActionsCount == 0) {
	obj74974_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj74974_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74974_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj74974").trigger("obj74974_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74974) {
				console.warn("de-queueing event obj74974." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74974").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74974_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj75001 
hide_74981();
function hide_74981() {
	var selector = "#obj75001";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj74974_droppedInsideTargetActions_runningActionsCount = obj74974_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj74974_droppedInsideTargetActions_runningActionsCount = window.obj74974_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj74974_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj74974_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj74974_droppedInsideTargetActions_runningActionsCount == 0) {
	obj74974_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_74981(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj74974_droppedInsideTargetActions_runningActionsCount = window.obj74974_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj74974_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj74974_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj74974_droppedInsideTargetActions_runningActionsCount == 0) {
	obj74974_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj74974_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74974_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj74974").trigger("obj74974_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74974) {
				console.warn("de-queueing event obj74974." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74974").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74974_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_74982();
function runjs_74982() {
	window.obj74974_droppedInsideTargetActions_runningActionsCount = obj74974_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj74974").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj74974_droppedInsideTargetActions_runningActionsCount = window.obj74974_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj74974_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj74974_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj74974_droppedInsideTargetActions_runningActionsCount == 0) {
	obj74974_droppedInsideTargetActions_actionGroup5();
}
	}, 1);
}







};
obj74974_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74974_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj74974").trigger("obj74974_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74974) {
				console.warn("de-queueing event obj74974." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74974").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74974_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj75023 
playAudio_74984();
function playAudio_74984() {
	window.obj74974_droppedInsideTargetActions_runningActionsCount = obj74974_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj75023")[0];
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
		    window.obj74974_droppedInsideTargetActions_runningActionsCount = window.obj74974_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj74974_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj74974_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj74974_droppedInsideTargetActions_runningActionsCount == 0) {
	obj74974_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj74974_droppedInsideTargetActions_runningActionsCount = window.obj74974_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj74974_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj74974_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj74974_droppedInsideTargetActions_runningActionsCount == 0) {
	obj74974_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj74974_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74974_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj74974").trigger("obj74974_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74974) {
				console.warn("de-queueing event obj74974." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74974").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74974_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90192();
function switchText_90192() {
	window.obj74974_droppedInsideTargetActions_runningActionsCount = obj74974_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj75025_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj75025_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj75025").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj75025_content");
			setTimeout(function () {
				window.obj74974_droppedInsideTargetActions_runningActionsCount = window.obj74974_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj74974_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj74974_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj74974_droppedInsideTargetActions_runningActionsCount == 0) {
	obj74974_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj75025 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj74974_droppedInsideTargetActions_runningActionsCount = window.obj74974_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj74974_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj74974_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj74974_droppedInsideTargetActions_runningActionsCount == 0) {
	obj74974_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj74974_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj74974_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj74974").trigger("obj74974_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74974) {
				console.warn("de-queueing event obj74974." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74974").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74974_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj74949_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74949_onTouchDown_activeActionGroupIndex = -1;
		$("#obj74949").trigger("obj74949_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74949) {
				console.warn("de-queueing event obj74949." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74949").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74949_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj74949");
//	action: dragDrop
//	target: obj74949 
dragDrop_74952();
function dragDrop_74952() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj74949_onTouchDown_runningActionsCount = obj74949_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj74949');
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
	  	containerNode = $('#obj75029');
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
    	window.obj74949_onTouchDown_runningActionsCount = window.obj74949_onTouchDown_runningActionsCount - 1;
if (window.obj74949_onTouchDown_runningActionsCount < 0) {
	window.obj74949_onTouchDown_runningActionsCount = 0;
} else if (window.obj74949_onTouchDown_runningActionsCount == 0) {
	obj74949_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj75007","#obj75005");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_74952 = false;
    	var dropped_id_74952;
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
					dropped_74952 = true;
					dropped_id_74952 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_74952) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj74949").trigger('SCActionDragDrop74952_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj74949_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj74949_onTouchDown_activeActionGroupIndex = -1;
		$("#obj74949").trigger("obj74949_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74949) {
				console.warn("de-queueing event obj74949." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74949").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74949_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj74949_SCActionDragDrop74952_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74949_SCActionDragDrop74952_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj74949").trigger("obj74949_SCActionDragDrop74952_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74949) {
				console.warn("de-queueing event obj74949." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74949").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74949_SCActionDragDrop74952_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj74949 
move_92310();
function move_92310() {
	window.obj74949_SCActionDragDrop74952_droppedOutsideTargetActions_runningActionsCount = obj74949_SCActionDragDrop74952_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj74949");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 316;
	var moveY = 661;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj74949_SCActionDragDrop74952_droppedOutsideTargetActions_runningActionsCount = window.obj74949_SCActionDragDrop74952_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj74949_SCActionDragDrop74952_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj74949_SCActionDragDrop74952_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj74949_SCActionDragDrop74952_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj74949_SCActionDragDrop74952_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj74949_SCActionDragDrop74952_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj74949_SCActionDragDrop74952_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj74949").trigger("obj74949_SCActionDragDrop74952_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74949) {
				console.warn("de-queueing event obj74949." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74949").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74949_SCActionDragDrop74952_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj74949_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74949_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj74949").trigger("obj74949_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74949) {
				console.warn("de-queueing event obj74949." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74949").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74949_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_74961();
function runjs_74961() {
	window.obj74949_droppedInsideTargetActions_2_runningActionsCount = obj74949_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj75005").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj74949_droppedInsideTargetActions_2_runningActionsCount = window.obj74949_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74949_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74949_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74949_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74949_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj74949_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74949_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj74949").trigger("obj74949_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74949) {
				console.warn("de-queueing event obj74949." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74949").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74949_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_74962();
function runjs_74962() {
	window.obj74949_droppedInsideTargetActions_2_runningActionsCount = obj74949_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj75005").css("border-color", "#C00000"); $("#obj75005").css("border-width", "2px"); $("#obj75005").css("border-style", "solid"); $("#obj75005").css("border-radius", "10px"); $("#obj75005").css("-webkit-border-radius", "10px"); $("#obj75005").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj74949_droppedInsideTargetActions_2_runningActionsCount = window.obj74949_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74949_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74949_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74949_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74949_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj74949_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74949_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj74949").trigger("obj74949_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74949) {
				console.warn("de-queueing event obj74949." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74949").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74949_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj75001 
hide_74963();
function hide_74963() {
	var selector = "#obj75001";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj74949_droppedInsideTargetActions_2_runningActionsCount = obj74949_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj74949_droppedInsideTargetActions_2_runningActionsCount = window.obj74949_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74949_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74949_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74949_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74949_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_74963(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj74949_droppedInsideTargetActions_2_runningActionsCount = window.obj74949_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74949_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74949_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74949_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74949_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj74949_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74949_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj74949").trigger("obj74949_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74949) {
				console.warn("de-queueing event obj74949." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74949").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74949_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_74964();
function runjs_74964() {
	window.obj74949_droppedInsideTargetActions_2_runningActionsCount = obj74949_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj74949").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj74949_droppedInsideTargetActions_2_runningActionsCount = window.obj74949_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74949_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74949_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74949_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74949_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj74949_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74949_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj74949").trigger("obj74949_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74949) {
				console.warn("de-queueing event obj74949." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74949").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74949_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_74965();
function switchText_74965() {
	window.obj74949_droppedInsideTargetActions_2_runningActionsCount = obj74949_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj75025_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj75025_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj75025").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj75025_content");
			setTimeout(function () {
				window.obj74949_droppedInsideTargetActions_2_runningActionsCount = window.obj74949_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74949_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74949_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74949_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74949_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj75025 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj74949_droppedInsideTargetActions_2_runningActionsCount = window.obj74949_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74949_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74949_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74949_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74949_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj74949_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74949_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj74949").trigger("obj74949_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74949) {
				console.warn("de-queueing event obj74949." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74949").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74949_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj74949 
move_74966();
function move_74966() {
	window.obj74949_droppedInsideTargetActions_2_runningActionsCount = obj74949_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj74949");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 316;
	var moveY = 661;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj74949_droppedInsideTargetActions_2_runningActionsCount = window.obj74949_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74949_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74949_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74949_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74949_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj74949_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74949_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj74949").trigger("obj74949_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74949) {
				console.warn("de-queueing event obj74949." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74949").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74949_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_74967();
function runjs_74967() {
	window.obj74949_droppedInsideTargetActions_2_runningActionsCount = obj74949_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj75005").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj74949_droppedInsideTargetActions_2_runningActionsCount = window.obj74949_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74949_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74949_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74949_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74949_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj74949_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74949_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj74949").trigger("obj74949_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74949) {
				console.warn("de-queueing event obj74949." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74949").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74949_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_74968();
function runjs_74968() {
	window.obj74949_droppedInsideTargetActions_2_runningActionsCount = obj74949_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj75005").css("border-color", "#000000"); $("#obj75005").css("border-width", "1px"); $("#obj75005").css("border-style", "solid"); $("#obj75005").css("border-radius", "10px"); $("#obj75005").css("-webkit-border-radius", "10px"); $("#obj75005").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj74949_droppedInsideTargetActions_2_runningActionsCount = window.obj74949_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74949_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74949_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74949_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74949_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj74949_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74949_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj74949").trigger("obj74949_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74949) {
				console.warn("de-queueing event obj74949." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74949").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74949_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj75001
(function(){
	window.obj74949_droppedInsideTargetActions_2_runningActionsCount = obj74949_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj75001";
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
					window.obj74949_droppedInsideTargetActions_2_runningActionsCount = window.obj74949_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74949_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74949_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74949_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74949_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj74949_droppedInsideTargetActions_2_runningActionsCount = window.obj74949_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74949_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74949_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74949_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74949_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj74949_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74949_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj74949").trigger("obj74949_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74949) {
				console.warn("de-queueing event obj74949." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74949").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74949_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_74970();
function runjs_74970() {
	window.obj74949_droppedInsideTargetActions_2_runningActionsCount = obj74949_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj74949").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj74949_droppedInsideTargetActions_2_runningActionsCount = window.obj74949_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74949_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74949_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74949_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74949_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj74949_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74949_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj74949").trigger("obj74949_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74949) {
				console.warn("de-queueing event obj74949." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74949").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74949_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_74971();
function runjs_74971() {
	window.obj74949_droppedInsideTargetActions_2_runningActionsCount = obj74949_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj74949").css("border-color", "rgba(0,0,0,0)"); $("#obj74949").css("border-width", "0px"); $("#obj74949").css("border-style", "solid"); $("#obj74949").css("border-radius", "10px"); $("#obj74949").css("-webkit-border-radius", "10px"); $("#obj74949").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj74949_droppedInsideTargetActions_2_runningActionsCount = window.obj74949_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74949_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74949_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74949_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74949_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj74949_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74949_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj74949").trigger("obj74949_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74949) {
				console.warn("de-queueing event obj74949." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74949").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74949_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj75024 
playAudio_74972();
function playAudio_74972() {
	window.obj74949_droppedInsideTargetActions_2_runningActionsCount = obj74949_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj75024")[0];
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
		    window.obj74949_droppedInsideTargetActions_2_runningActionsCount = window.obj74949_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74949_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74949_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74949_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74949_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj74949_droppedInsideTargetActions_2_runningActionsCount = window.obj74949_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74949_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74949_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74949_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74949_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj74949_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74949_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj74949").trigger("obj74949_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74949) {
				console.warn("de-queueing event obj74949." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74949").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74949_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_74973();
function switchText_74973() {
	window.obj74949_droppedInsideTargetActions_2_runningActionsCount = obj74949_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj75025_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj75025_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj75025").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj75025_content");
			setTimeout(function () {
				window.obj74949_droppedInsideTargetActions_2_runningActionsCount = window.obj74949_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74949_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74949_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74949_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74949_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj75025 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj74949_droppedInsideTargetActions_2_runningActionsCount = window.obj74949_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74949_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74949_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74949_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74949_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj74949_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj74949_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj74949").trigger("obj74949_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74949) {
				console.warn("de-queueing event obj74949." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74949").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74949_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj74949_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74949_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj74949").trigger("obj74949_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74949) {
				console.warn("de-queueing event obj74949." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74949").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74949_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_74954();
function runjs_74954() {
	window.obj74949_droppedInsideTargetActions_runningActionsCount = obj74949_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj75007").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj74949_droppedInsideTargetActions_runningActionsCount = window.obj74949_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj74949_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj74949_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj74949_droppedInsideTargetActions_runningActionsCount == 0) {
	obj74949_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj74949_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74949_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj74949").trigger("obj74949_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74949) {
				console.warn("de-queueing event obj74949." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74949").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74949_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_74958();
function switchText_74958() {
	window.obj74949_droppedInsideTargetActions_runningActionsCount = obj74949_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj75025_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj75025_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj75025").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj75025_content");
			setTimeout(function () {
				window.obj74949_droppedInsideTargetActions_runningActionsCount = window.obj74949_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj74949_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj74949_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj74949_droppedInsideTargetActions_runningActionsCount == 0) {
	obj74949_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj75025 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj74949_droppedInsideTargetActions_runningActionsCount = window.obj74949_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj74949_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj74949_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj74949_droppedInsideTargetActions_runningActionsCount == 0) {
	obj74949_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj74949_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74949_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj74949").trigger("obj74949_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74949) {
				console.warn("de-queueing event obj74949." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74949").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74949_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_74955();
function runjs_74955() {
	window.obj74949_droppedInsideTargetActions_runningActionsCount = obj74949_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj75007").css("border-color", "#058E3F"); $("#obj75007").css("border-width", "2px"); $("#obj75007").css("border-style", "solid"); $("#obj75007").css("border-radius", "10px"); $("#obj75007").css("-webkit-border-radius", "10px"); $("#obj75007").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj74949_droppedInsideTargetActions_runningActionsCount = window.obj74949_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj74949_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj74949_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj74949_droppedInsideTargetActions_runningActionsCount == 0) {
	obj74949_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj74949_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74949_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj74949").trigger("obj74949_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74949) {
				console.warn("de-queueing event obj74949." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74949").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74949_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj75003 
hide_74956();
function hide_74956() {
	var selector = "#obj75003";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj74949_droppedInsideTargetActions_runningActionsCount = obj74949_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj74949_droppedInsideTargetActions_runningActionsCount = window.obj74949_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj74949_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj74949_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj74949_droppedInsideTargetActions_runningActionsCount == 0) {
	obj74949_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_74956(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj74949_droppedInsideTargetActions_runningActionsCount = window.obj74949_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj74949_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj74949_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj74949_droppedInsideTargetActions_runningActionsCount == 0) {
	obj74949_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj74949_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74949_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj74949").trigger("obj74949_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74949) {
				console.warn("de-queueing event obj74949." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74949").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74949_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_74957();
function runjs_74957() {
	window.obj74949_droppedInsideTargetActions_runningActionsCount = obj74949_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj74949").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj74949_droppedInsideTargetActions_runningActionsCount = window.obj74949_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj74949_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj74949_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj74949_droppedInsideTargetActions_runningActionsCount == 0) {
	obj74949_droppedInsideTargetActions_actionGroup5();
}
	}, 1);
}







};
obj74949_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74949_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj74949").trigger("obj74949_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74949) {
				console.warn("de-queueing event obj74949." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74949").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74949_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj75023 
playAudio_74959();
function playAudio_74959() {
	window.obj74949_droppedInsideTargetActions_runningActionsCount = obj74949_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj75023")[0];
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
		    window.obj74949_droppedInsideTargetActions_runningActionsCount = window.obj74949_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj74949_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj74949_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj74949_droppedInsideTargetActions_runningActionsCount == 0) {
	obj74949_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj74949_droppedInsideTargetActions_runningActionsCount = window.obj74949_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj74949_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj74949_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj74949_droppedInsideTargetActions_runningActionsCount == 0) {
	obj74949_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj74949_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74949_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj74949").trigger("obj74949_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74949) {
				console.warn("de-queueing event obj74949." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74949").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74949_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90193();
function switchText_90193() {
	window.obj74949_droppedInsideTargetActions_runningActionsCount = obj74949_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj75025_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj75025_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj75025").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj75025_content");
			setTimeout(function () {
				window.obj74949_droppedInsideTargetActions_runningActionsCount = window.obj74949_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj74949_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj74949_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj74949_droppedInsideTargetActions_runningActionsCount == 0) {
	obj74949_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj75025 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj74949_droppedInsideTargetActions_runningActionsCount = window.obj74949_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj74949_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj74949_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj74949_droppedInsideTargetActions_runningActionsCount == 0) {
	obj74949_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj74949_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj74949_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj74949").trigger("obj74949_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74949) {
				console.warn("de-queueing event obj74949." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74949").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74949_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj74931_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74931_onTap_activeActionGroupIndex = -1;
		$("#obj74931").trigger("obj74931_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74931) {
				console.warn("de-queueing event obj74931." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74931").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74931_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj74931 
hide_74934();
function hide_74934() {
	var selector = "#obj74931";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj74931_onTap_runningActionsCount = obj74931_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj74931_onTap_runningActionsCount = window.obj74931_onTap_runningActionsCount - 1;
if (window.obj74931_onTap_runningActionsCount < 0) {
	window.obj74931_onTap_runningActionsCount = 0;
} else if (window.obj74931_onTap_runningActionsCount == 0) {
	obj74931_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_74934(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj74931_onTap_runningActionsCount = window.obj74931_onTap_runningActionsCount - 1;
if (window.obj74931_onTap_runningActionsCount < 0) {
	window.obj74931_onTap_runningActionsCount = 0;
} else if (window.obj74931_onTap_runningActionsCount == 0) {
	obj74931_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj74921 
stopMovie_74933();
function stopMovie_74933() {
	window.obj74931_onTap_runningActionsCount = obj74931_onTap_runningActionsCount + 1;
	var myVideo = $("#obj74921")[0];
	myVideo.pause();
	window.obj74931_onTap_runningActionsCount = window.obj74931_onTap_runningActionsCount - 1;
if (window.obj74931_onTap_runningActionsCount < 0) {
	window.obj74931_onTap_runningActionsCount = 0;
} else if (window.obj74931_onTap_runningActionsCount == 0) {
	obj74931_onTap_actionGroup1();
}
}
















};
obj74931_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74931_onTap_activeActionGroupIndex = -1;
		$("#obj74931").trigger("obj74931_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74931) {
				console.warn("de-queueing event obj74931." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74931").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74931_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj74923
(function(){
	window.obj74931_onTap_runningActionsCount = obj74931_onTap_runningActionsCount + 1;

	var selector = "#obj74923";
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
					window.obj74931_onTap_runningActionsCount = window.obj74931_onTap_runningActionsCount - 1;
if (window.obj74931_onTap_runningActionsCount < 0) {
	window.obj74931_onTap_runningActionsCount = 0;
} else if (window.obj74931_onTap_runningActionsCount == 0) {
	obj74931_onTap_actionGroup2();
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
				window.obj74931_onTap_runningActionsCount = window.obj74931_onTap_runningActionsCount - 1;
if (window.obj74931_onTap_runningActionsCount < 0) {
	window.obj74931_onTap_runningActionsCount = 0;
} else if (window.obj74931_onTap_runningActionsCount == 0) {
	obj74931_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj74931_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74931_onTap_activeActionGroupIndex = -1;
		$("#obj74931").trigger("obj74931_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74931) {
				console.warn("de-queueing event obj74931." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74931").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74931_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj74921 
move_74936();
function move_74936() {
	window.obj74931_onTap_runningActionsCount = obj74931_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj74921");
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
			window.obj74931_onTap_runningActionsCount = window.obj74931_onTap_runningActionsCount - 1;
if (window.obj74931_onTap_runningActionsCount < 0) {
	window.obj74931_onTap_runningActionsCount = 0;
} else if (window.obj74931_onTap_runningActionsCount == 0) {
	obj74931_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj74931_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj74931_onTap_activeActionGroupIndex = -1;
		$("#obj74931").trigger("obj74931_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74931) {
				console.warn("de-queueing event obj74931." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74931").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74931_onTap_activeActionGroupIndex = 3;
	





















};
obj74923_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74923_onTap_activeActionGroupIndex = -1;
		$("#obj74923").trigger("obj74923_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74923) {
				console.warn("de-queueing event obj74923." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74923").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74923_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj74923 
hide_74926();
function hide_74926() {
	var selector = "#obj74923";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj74923_onTap_runningActionsCount = obj74923_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj74923_onTap_runningActionsCount = window.obj74923_onTap_runningActionsCount - 1;
if (window.obj74923_onTap_runningActionsCount < 0) {
	window.obj74923_onTap_runningActionsCount = 0;
} else if (window.obj74923_onTap_runningActionsCount == 0) {
	obj74923_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_74926(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj74923_onTap_runningActionsCount = window.obj74923_onTap_runningActionsCount - 1;
if (window.obj74923_onTap_runningActionsCount < 0) {
	window.obj74923_onTap_runningActionsCount = 0;
} else if (window.obj74923_onTap_runningActionsCount == 0) {
	obj74923_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj74921 
playPauseMovie_74925();
function playPauseMovie_74925() {
	window.obj74923_onTap_runningActionsCount = obj74923_onTap_runningActionsCount + 1;
	var myVideo = $("#obj74921")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj74923_onTap_runningActionsCount = window.obj74923_onTap_runningActionsCount - 1;
if (window.obj74923_onTap_runningActionsCount < 0) {
	window.obj74923_onTap_runningActionsCount = 0;
} else if (window.obj74923_onTap_runningActionsCount == 0) {
	obj74923_onTap_actionGroup1();
}
}

















};
obj74923_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74923_onTap_activeActionGroupIndex = -1;
		$("#obj74923").trigger("obj74923_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74923) {
				console.warn("de-queueing event obj74923." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74923").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74923_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj74931
(function(){
	window.obj74923_onTap_runningActionsCount = obj74923_onTap_runningActionsCount + 1;

	var selector = "#obj74931";
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
					window.obj74923_onTap_runningActionsCount = window.obj74923_onTap_runningActionsCount - 1;
if (window.obj74923_onTap_runningActionsCount < 0) {
	window.obj74923_onTap_runningActionsCount = 0;
} else if (window.obj74923_onTap_runningActionsCount == 0) {
	obj74923_onTap_actionGroup2();
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
				window.obj74923_onTap_runningActionsCount = window.obj74923_onTap_runningActionsCount - 1;
if (window.obj74923_onTap_runningActionsCount < 0) {
	window.obj74923_onTap_runningActionsCount = 0;
} else if (window.obj74923_onTap_runningActionsCount == 0) {
	obj74923_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj74923_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74923_onTap_activeActionGroupIndex = -1;
		$("#obj74923").trigger("obj74923_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74923) {
				console.warn("de-queueing event obj74923." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74923").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74923_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj74921 
move_74928();
function move_74928() {
	window.obj74923_onTap_runningActionsCount = obj74923_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj74921");
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
			window.obj74923_onTap_runningActionsCount = window.obj74923_onTap_runningActionsCount - 1;
if (window.obj74923_onTap_runningActionsCount < 0) {
	window.obj74923_onTap_runningActionsCount = 0;
} else if (window.obj74923_onTap_runningActionsCount == 0) {
	obj74923_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj74923_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj74923_onTap_activeActionGroupIndex = -1;
		$("#obj74923").trigger("obj74923_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74923) {
				console.warn("de-queueing event obj74923." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74923").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74923_onTap_activeActionGroupIndex = 3;
	





















};
obj87623_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87623_onTap_activeActionGroupIndex = -1;
		$("#obj87623").trigger("obj87623_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87623) {
				console.warn("de-queueing event obj87623." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87623").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87623_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj87628 
stopAudio_87625();
function stopAudio_87625() {
	window.obj87623_onTap_runningActionsCount = obj87623_onTap_runningActionsCount + 1;
	var myAudio = $("#obj87628")[0];
	myAudio.pause();
	window.obj87623_onTap_runningActionsCount = window.obj87623_onTap_runningActionsCount - 1;
if (window.obj87623_onTap_runningActionsCount < 0) {
	window.obj87623_onTap_runningActionsCount = 0;
} else if (window.obj87623_onTap_runningActionsCount == 0) {
	obj87623_onTap_actionGroup1();
}
}








};
obj87623_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87623_onTap_activeActionGroupIndex = -1;
		$("#obj87623").trigger("obj87623_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87623) {
				console.warn("de-queueing event obj87623." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87623").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87623_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj87623 
hide_87626();
function hide_87626() {
	var selector = "#obj87623";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj87623_onTap_runningActionsCount = obj87623_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj87623_onTap_runningActionsCount = window.obj87623_onTap_runningActionsCount - 1;
if (window.obj87623_onTap_runningActionsCount < 0) {
	window.obj87623_onTap_runningActionsCount = 0;
} else if (window.obj87623_onTap_runningActionsCount == 0) {
	obj87623_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_87626(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj87623_onTap_runningActionsCount = window.obj87623_onTap_runningActionsCount - 1;
if (window.obj87623_onTap_runningActionsCount < 0) {
	window.obj87623_onTap_runningActionsCount = 0;
} else if (window.obj87623_onTap_runningActionsCount == 0) {
	obj87623_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj87623_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87623_onTap_activeActionGroupIndex = -1;
		$("#obj87623").trigger("obj87623_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87623) {
				console.warn("de-queueing event obj87623." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87623").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87623_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj87618
(function(){
	window.obj87623_onTap_runningActionsCount = obj87623_onTap_runningActionsCount + 1;

	var selector = "#obj87618";
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
					window.obj87623_onTap_runningActionsCount = window.obj87623_onTap_runningActionsCount - 1;
if (window.obj87623_onTap_runningActionsCount < 0) {
	window.obj87623_onTap_runningActionsCount = 0;
} else if (window.obj87623_onTap_runningActionsCount == 0) {
	obj87623_onTap_actionGroup3();
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
				window.obj87623_onTap_runningActionsCount = window.obj87623_onTap_runningActionsCount - 1;
if (window.obj87623_onTap_runningActionsCount < 0) {
	window.obj87623_onTap_runningActionsCount = 0;
} else if (window.obj87623_onTap_runningActionsCount == 0) {
	obj87623_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj87623_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj87623_onTap_activeActionGroupIndex = -1;
		$("#obj87623").trigger("obj87623_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87623) {
				console.warn("de-queueing event obj87623." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87623").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87623_onTap_activeActionGroupIndex = 3;
	





















};
obj87618_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87618_onTap_activeActionGroupIndex = -1;
		$("#obj87618").trigger("obj87618_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87618) {
				console.warn("de-queueing event obj87618." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87618").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87618_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj87618 
hide_87620();
function hide_87620() {
	var selector = "#obj87618";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj87618_onTap_runningActionsCount = obj87618_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj87618_onTap_runningActionsCount = window.obj87618_onTap_runningActionsCount - 1;
if (window.obj87618_onTap_runningActionsCount < 0) {
	window.obj87618_onTap_runningActionsCount = 0;
} else if (window.obj87618_onTap_runningActionsCount == 0) {
	obj87618_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_87620(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj87618_onTap_runningActionsCount = window.obj87618_onTap_runningActionsCount - 1;
if (window.obj87618_onTap_runningActionsCount < 0) {
	window.obj87618_onTap_runningActionsCount = 0;
} else if (window.obj87618_onTap_runningActionsCount == 0) {
	obj87618_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj87618_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87618_onTap_activeActionGroupIndex = -1;
		$("#obj87618").trigger("obj87618_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87618) {
				console.warn("de-queueing event obj87618." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87618").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87618_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj87623
(function(){
	window.obj87618_onTap_runningActionsCount = obj87618_onTap_runningActionsCount + 1;

	var selector = "#obj87623";
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
					window.obj87618_onTap_runningActionsCount = window.obj87618_onTap_runningActionsCount - 1;
if (window.obj87618_onTap_runningActionsCount < 0) {
	window.obj87618_onTap_runningActionsCount = 0;
} else if (window.obj87618_onTap_runningActionsCount == 0) {
	obj87618_onTap_actionGroup2();
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
				window.obj87618_onTap_runningActionsCount = window.obj87618_onTap_runningActionsCount - 1;
if (window.obj87618_onTap_runningActionsCount < 0) {
	window.obj87618_onTap_runningActionsCount = 0;
} else if (window.obj87618_onTap_runningActionsCount == 0) {
	obj87618_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj87618_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87618_onTap_activeActionGroupIndex = -1;
		$("#obj87618").trigger("obj87618_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87618) {
				console.warn("de-queueing event obj87618." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87618").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87618_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj87628 
playAudio_87622();
function playAudio_87622() {
	window.obj87618_onTap_runningActionsCount = obj87618_onTap_runningActionsCount + 1;
	var myAudio = $("#obj87628")[0];
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
		    window.obj87618_onTap_runningActionsCount = window.obj87618_onTap_runningActionsCount - 1;
if (window.obj87618_onTap_runningActionsCount < 0) {
	window.obj87618_onTap_runningActionsCount = 0;
} else if (window.obj87618_onTap_runningActionsCount == 0) {
	obj87618_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj87618_onTap_runningActionsCount = window.obj87618_onTap_runningActionsCount - 1;
if (window.obj87618_onTap_runningActionsCount < 0) {
	window.obj87618_onTap_runningActionsCount = 0;
} else if (window.obj87618_onTap_runningActionsCount == 0) {
	obj87618_onTap_actionGroup3();
}
	}
}









};
obj87618_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj87618_onTap_activeActionGroupIndex = -1;
		$("#obj87618").trigger("obj87618_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87618) {
				console.warn("de-queueing event obj87618." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87618").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87618_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj75046: Event Touch Down
 *
 */
$("#obj75046").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj75046_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj75046_onTap is still running");
	return;
}
var obj75046_onTap_runningActionsCount = 0;
var obj75046_onTap_loopCount = 0;
obj75046_onTap_actionGroup0();
});










/*
 *
 *   obj75043: Event Touch Down
 *
 */
$("#obj75043").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj75043_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj75043_onTap is still running");
	return;
}
var obj75043_onTap_runningActionsCount = 0;
var obj75043_onTap_loopCount = 0;
obj75043_onTap_actionGroup0();
});










/*
 *
 *   obj75039: Event Touch Down
 *
 */
$("#obj75039").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj75039_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj75039_onTap is still running");
	return;
}
var obj75039_onTap_runningActionsCount = 0;
var obj75039_onTap_loopCount = 0;
obj75039_onTap_actionGroup0();
});





























































































































































































































/*
 *
 *   obj74974: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj74974");
	var winTarget = document.getElementById("obj74974");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj74974").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj74974_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj74974_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj74974_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj74974_onTouchDown is still running");
	return;
}
var obj74974_onTouchDown_runningActionsCount = 0;
var obj74974_onTouchDown_loopCount = 0;
obj74974_onTouchDown_actionGroup0();
});



/*
 *
 *   obj74974: Event SCActionDragDrop74977_droppedOutsideTargetActions
 *
 */
$("#obj74974").bind("SCActionDragDrop74977_droppedOutsideTargetActions", function(event) {
	if (window.obj74974_SCActionDragDrop74977_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj74974_SCActionDragDrop74977_droppedOutsideTargetActions is still running");
	return;
}
var obj74974_SCActionDragDrop74977_droppedOutsideTargetActions_runningActionsCount = 0;
var obj74974_SCActionDragDrop74977_droppedOutsideTargetActions_loopCount = 0;
obj74974_SCActionDragDrop74977_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj74974: Event droppedInsideTargetActions_2
 *
 */
$("#obj74974").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj74974_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj74974_droppedInsideTargetActions_2 is still running");
	return;
}
var obj74974_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj74974_droppedInsideTargetActions_2_loopCount = 0;
obj74974_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj74974: Event droppedInsideTargetActions
 *
 */
$("#obj74974").bind("droppedInsideTargetActions", function(event) {
	if (window.obj74974_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj74974_droppedInsideTargetActions is still running");
	return;
}
var obj74974_droppedInsideTargetActions_runningActionsCount = 0;
var obj74974_droppedInsideTargetActions_loopCount = 0;
obj74974_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj74949: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj74949");
	var winTarget = document.getElementById("obj74949");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj74949").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj74949_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj74949_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj74949_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj74949_onTouchDown is still running");
	return;
}
var obj74949_onTouchDown_runningActionsCount = 0;
var obj74949_onTouchDown_loopCount = 0;
obj74949_onTouchDown_actionGroup0();
});



/*
 *
 *   obj74949: Event SCActionDragDrop74952_droppedOutsideTargetActions
 *
 */
$("#obj74949").bind("SCActionDragDrop74952_droppedOutsideTargetActions", function(event) {
	if (window.obj74949_SCActionDragDrop74952_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj74949_SCActionDragDrop74952_droppedOutsideTargetActions is still running");
	return;
}
var obj74949_SCActionDragDrop74952_droppedOutsideTargetActions_runningActionsCount = 0;
var obj74949_SCActionDragDrop74952_droppedOutsideTargetActions_loopCount = 0;
obj74949_SCActionDragDrop74952_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj74949: Event droppedInsideTargetActions_2
 *
 */
$("#obj74949").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj74949_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj74949_droppedInsideTargetActions_2 is still running");
	return;
}
var obj74949_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj74949_droppedInsideTargetActions_2_loopCount = 0;
obj74949_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj74949: Event droppedInsideTargetActions
 *
 */
$("#obj74949").bind("droppedInsideTargetActions", function(event) {
	if (window.obj74949_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj74949_droppedInsideTargetActions is still running");
	return;
}
var obj74949_droppedInsideTargetActions_runningActionsCount = 0;
var obj74949_droppedInsideTargetActions_loopCount = 0;
obj74949_droppedInsideTargetActions_actionGroup0();
});





/*
 *
 *   obj74931: Event Touch Down
 *
 */
$("#obj74931").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj74931_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj74931_onTap is still running");
	return;
}
var obj74931_onTap_runningActionsCount = 0;
var obj74931_onTap_loopCount = 0;
obj74931_onTap_actionGroup0();
});










/*
 *
 *   obj74923: Event Touch Down
 *
 */
$("#obj74923").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj74923_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj74923_onTap is still running");
	return;
}
var obj74923_onTap_runningActionsCount = 0;
var obj74923_onTap_loopCount = 0;
obj74923_onTap_actionGroup0();
});










/*
 *
 *   obj87623: Event Touch Down
 *
 */
$("#obj87623").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj87623_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj87623_onTap is still running");
	return;
}
var obj87623_onTap_runningActionsCount = 0;
var obj87623_onTap_loopCount = 0;
obj87623_onTap_actionGroup0();
});










/*
 *
 *   obj87618: Event Touch Down
 *
 */
$("#obj87618").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj87618_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj87618_onTap is still running");
	return;
}
var obj87618_onTap_runningActionsCount = 0;
var obj87618_onTap_loopCount = 0;
obj87618_onTap_actionGroup0();
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
	
$("#obj75049").trigger('SCEventShow');
$("#obj75046").trigger('SCEventShow');
$("#obj75043").trigger('SCEventShow');
$("#obj75039").trigger('SCEventShow');
$("#obj75037").trigger('SCEventShow');
$("#obj75035").trigger('SCEventShow');
$("#obj75033").trigger('SCEventShow');
$("#obj75031").trigger('SCEventShow');
$("#obj75029").trigger('SCEventShow');
$("#obj75027").trigger('SCEventShow');
$("#obj75025").trigger('SCEventShow');
$("#obj75024").trigger('SCEventShow');
$("#obj75023").trigger('SCEventShow');
$("#obj75021").trigger('SCEventShow');
$("#obj75019").trigger('SCEventShow');
$("#obj75017").trigger('SCEventShow');
$("#obj75015").trigger('SCEventShow');
$("#obj75013").trigger('SCEventShow');
$("#obj75011").trigger('SCEventShow');
$("#obj75009").trigger('SCEventShow');
$("#obj75007").trigger('SCEventShow');
$("#obj75005").trigger('SCEventShow');
$("#obj75003").trigger('SCEventShow');
$("#obj75001").trigger('SCEventShow');
$("#obj74999").trigger('SCEventShow');
$("#obj74974").trigger('SCEventShow');
$("#obj74949").trigger('SCEventShow');
$("#obj74931").trigger('SCEventShow');
$("#obj74923").trigger('SCEventShow');
$("#obj87623").trigger('SCEventShow');
$("#obj87618").trigger('SCEventShow');
$("#obj87628").trigger('SCEventShow');
$("#obj94761").trigger('SCEventShow');
$("#obj74921").trigger('SCEventShow');
	
});