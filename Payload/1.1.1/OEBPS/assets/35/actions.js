pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 7441;
pubcoder.page.title = pubcoder.page.title || "35";
pubcoder.page.number = pubcoder.page.number || 35;
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
var obj68795_onTap_activeActionGroupIndex = -1;
var obj68795_onTap_runningActionsCount = 0;
var obj68795_onTap_loopCount = 0;
var obj68792_onTap_activeActionGroupIndex = -1;
var obj68792_onTap_runningActionsCount = 0;
var obj68792_onTap_loopCount = 0;
var obj68788_onTap_activeActionGroupIndex = -1;
var obj68788_onTap_runningActionsCount = 0;
var obj68788_onTap_loopCount = 0;
var obj68717_onDrag_activeActionGroupIndex = -1;
var obj68717_onDrag_runningActionsCount = 0;
var obj68717_onDrag_loopCount = 0;
var obj68717_onTouchDown_activeActionGroupIndex = -1;
var obj68717_onTouchDown_runningActionsCount = 0;
var obj68717_onTouchDown_loopCount = 0;
var obj68717_SCActionDragDrop68720_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj68717_SCActionDragDrop68720_droppedOutsideTargetActions_runningActionsCount = 0;
var obj68717_SCActionDragDrop68720_droppedOutsideTargetActions_loopCount = 0;
var obj68717_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj68717_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj68717_droppedInsideTargetActions_3_loopCount = 0;
var obj68717_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj68717_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj68717_droppedInsideTargetActions_2_loopCount = 0;
var obj68717_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj68717_droppedInsideTargetActions_runningActionsCount = 0;
var obj68717_droppedInsideTargetActions_loopCount = 0;
var obj68685_onDrag_activeActionGroupIndex = -1;
var obj68685_onDrag_runningActionsCount = 0;
var obj68685_onDrag_loopCount = 0;
var obj68685_onTouchDown_activeActionGroupIndex = -1;
var obj68685_onTouchDown_runningActionsCount = 0;
var obj68685_onTouchDown_loopCount = 0;
var obj68685_SCActionDragDrop68688_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj68685_SCActionDragDrop68688_droppedOutsideTargetActions_runningActionsCount = 0;
var obj68685_SCActionDragDrop68688_droppedOutsideTargetActions_loopCount = 0;
var obj68685_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj68685_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj68685_droppedInsideTargetActions_3_loopCount = 0;
var obj68685_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj68685_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj68685_droppedInsideTargetActions_2_loopCount = 0;
var obj68685_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj68685_droppedInsideTargetActions_runningActionsCount = 0;
var obj68685_droppedInsideTargetActions_loopCount = 0;
var obj68653_onDrag_activeActionGroupIndex = -1;
var obj68653_onDrag_runningActionsCount = 0;
var obj68653_onDrag_loopCount = 0;
var obj68653_onTouchDown_activeActionGroupIndex = -1;
var obj68653_onTouchDown_runningActionsCount = 0;
var obj68653_onTouchDown_loopCount = 0;
var obj68653_SCActionDragDrop68656_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj68653_SCActionDragDrop68656_droppedOutsideTargetActions_runningActionsCount = 0;
var obj68653_SCActionDragDrop68656_droppedOutsideTargetActions_loopCount = 0;
var obj68653_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj68653_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj68653_droppedInsideTargetActions_3_loopCount = 0;
var obj68653_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj68653_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj68653_droppedInsideTargetActions_2_loopCount = 0;
var obj68653_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj68653_droppedInsideTargetActions_runningActionsCount = 0;
var obj68653_droppedInsideTargetActions_loopCount = 0;
var obj68635_onTap_activeActionGroupIndex = -1;
var obj68635_onTap_runningActionsCount = 0;
var obj68635_onTap_loopCount = 0;
var obj68627_onTap_activeActionGroupIndex = -1;
var obj68627_onTap_runningActionsCount = 0;
var obj68627_onTap_loopCount = 0;
var obj87147_onTap_activeActionGroupIndex = -1;
var obj87147_onTap_runningActionsCount = 0;
var obj87147_onTap_loopCount = 0;
var obj87142_onTap_activeActionGroupIndex = -1;
var obj87142_onTap_runningActionsCount = 0;
var obj87142_onTap_loopCount = 0;
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
		
obj68795_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68795_onTap_activeActionGroupIndex = -1;
		$("#obj68795").trigger("obj68795_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68795) {
				console.warn("de-queueing event obj68795." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68795").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68795_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_68797();
function goToPage_68797() {
	window.obj68795_onTap_runningActionsCount = obj68795_onTap_runningActionsCount + 1;
	$("#anchor214")[0].click();
	window.obj68795_onTap_runningActionsCount = window.obj68795_onTap_runningActionsCount - 1;
if (window.obj68795_onTap_runningActionsCount < 0) {
	window.obj68795_onTap_runningActionsCount = 0;
} else if (window.obj68795_onTap_runningActionsCount == 0) {
	obj68795_onTap_actionGroup1();
}
}





















};
obj68795_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj68795_onTap_activeActionGroupIndex = -1;
		$("#obj68795").trigger("obj68795_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68795) {
				console.warn("de-queueing event obj68795." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68795").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68795_onTap_activeActionGroupIndex = 1;
	





















};
obj68792_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68792_onTap_activeActionGroupIndex = -1;
		$("#obj68792").trigger("obj68792_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68792) {
				console.warn("de-queueing event obj68792." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68792").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68792_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_68794();
function goToPage_68794() {
	window.obj68792_onTap_runningActionsCount = obj68792_onTap_runningActionsCount + 1;
	$("#anchor215")[0].click();
	window.obj68792_onTap_runningActionsCount = window.obj68792_onTap_runningActionsCount - 1;
if (window.obj68792_onTap_runningActionsCount < 0) {
	window.obj68792_onTap_runningActionsCount = 0;
} else if (window.obj68792_onTap_runningActionsCount == 0) {
	obj68792_onTap_actionGroup1();
}
}





















};
obj68792_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj68792_onTap_activeActionGroupIndex = -1;
		$("#obj68792").trigger("obj68792_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68792) {
				console.warn("de-queueing event obj68792." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68792").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68792_onTap_activeActionGroupIndex = 1;
	





















};
obj68788_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68788_onTap_activeActionGroupIndex = -1;
		$("#obj68788").trigger("obj68788_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68788) {
				console.warn("de-queueing event obj68788." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68788").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68788_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_68790();
function goToPage_68790() {
	window.obj68788_onTap_runningActionsCount = obj68788_onTap_runningActionsCount + 1;
	$("#anchor216")[0].click();
	window.obj68788_onTap_runningActionsCount = window.obj68788_onTap_runningActionsCount - 1;
if (window.obj68788_onTap_runningActionsCount < 0) {
	window.obj68788_onTap_runningActionsCount = 0;
} else if (window.obj68788_onTap_runningActionsCount == 0) {
	obj68788_onTap_actionGroup1();
}
}





















};
obj68788_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj68788_onTap_activeActionGroupIndex = -1;
		$("#obj68788").trigger("obj68788_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68788) {
				console.warn("de-queueing event obj68788." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68788").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68788_onTap_activeActionGroupIndex = 1;
	





















};
obj68717_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68717_onTouchDown_activeActionGroupIndex = -1;
		$("#obj68717").trigger("obj68717_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68717) {
				console.warn("de-queueing event obj68717." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68717").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68717_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj68717");
//	action: dragDrop
//	target: obj68717 
dragDrop_68720();
function dragDrop_68720() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj68717_onTouchDown_runningActionsCount = obj68717_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj68717');
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
	  	containerNode = $('#obj68774');
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
    	window.obj68717_onTouchDown_runningActionsCount = window.obj68717_onTouchDown_runningActionsCount - 1;
if (window.obj68717_onTouchDown_runningActionsCount < 0) {
	window.obj68717_onTouchDown_runningActionsCount = 0;
} else if (window.obj68717_onTouchDown_runningActionsCount == 0) {
	obj68717_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj68762","#obj68770","#obj68758");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_68720 = false;
    	var dropped_id_68720;
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
					dropped_68720 = true;
					dropped_id_68720 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_68720) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj68717").trigger('SCActionDragDrop68720_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj68717_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj68717_onTouchDown_activeActionGroupIndex = -1;
		$("#obj68717").trigger("obj68717_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68717) {
				console.warn("de-queueing event obj68717." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68717").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68717_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj68717_SCActionDragDrop68720_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68717_SCActionDragDrop68720_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj68717").trigger("obj68717_SCActionDragDrop68720_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68717) {
				console.warn("de-queueing event obj68717." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68717").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68717_SCActionDragDrop68720_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj68717 
move_92196();
function move_92196() {
	window.obj68717_SCActionDragDrop68720_droppedOutsideTargetActions_runningActionsCount = obj68717_SCActionDragDrop68720_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj68717");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 91;
	var moveY = 607;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj68717_SCActionDragDrop68720_droppedOutsideTargetActions_runningActionsCount = window.obj68717_SCActionDragDrop68720_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj68717_SCActionDragDrop68720_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj68717_SCActionDragDrop68720_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj68717_SCActionDragDrop68720_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj68717_SCActionDragDrop68720_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj68717_SCActionDragDrop68720_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj68717_SCActionDragDrop68720_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj68717").trigger("obj68717_SCActionDragDrop68720_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68717) {
				console.warn("de-queueing event obj68717." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68717").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68717_SCActionDragDrop68720_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj68717_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68717_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj68717").trigger("obj68717_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68717) {
				console.warn("de-queueing event obj68717." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68717").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68717_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_68739();
function runjs_68739() {
	window.obj68717_droppedInsideTargetActions_3_runningActionsCount = obj68717_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj68758").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj68717_droppedInsideTargetActions_3_runningActionsCount = window.obj68717_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj68717_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj68717_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj68717_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj68717_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj68717_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68717_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj68717").trigger("obj68717_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68717) {
				console.warn("de-queueing event obj68717." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68717").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68717_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_68740();
function runjs_68740() {
	window.obj68717_droppedInsideTargetActions_3_runningActionsCount = obj68717_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj68758").css("border-color", "#C00000"); $("#obj68758").css("border-width", "2px"); $("#obj68758").css("border-style", "solid"); $("#obj68758").css("border-radius", "10px"); $("#obj68758").css("-webkit-border-radius", "10px"); $("#obj68758").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj68717_droppedInsideTargetActions_3_runningActionsCount = window.obj68717_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj68717_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj68717_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj68717_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj68717_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj68717_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68717_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj68717").trigger("obj68717_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68717) {
				console.warn("de-queueing event obj68717." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68717").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68717_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj68756 
hide_68741();
function hide_68741() {
	var selector = "#obj68756";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj68717_droppedInsideTargetActions_3_runningActionsCount = obj68717_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj68717_droppedInsideTargetActions_3_runningActionsCount = window.obj68717_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj68717_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj68717_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj68717_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj68717_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_68741(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj68717_droppedInsideTargetActions_3_runningActionsCount = window.obj68717_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj68717_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj68717_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj68717_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj68717_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj68717_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68717_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj68717").trigger("obj68717_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68717) {
				console.warn("de-queueing event obj68717." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68717").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68717_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Switch Text
switchText_68742();
function switchText_68742() {
	window.obj68717_droppedInsideTargetActions_3_runningActionsCount = obj68717_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj68752_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj68752_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj68752").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj68752_content");
			setTimeout(function () {
				window.obj68717_droppedInsideTargetActions_3_runningActionsCount = window.obj68717_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj68717_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj68717_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj68717_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj68717_droppedInsideTargetActions_3_actionGroup4();
}
			}, 1);
		});
	} else {
		$("#obj68752 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj68717_droppedInsideTargetActions_3_runningActionsCount = window.obj68717_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj68717_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj68717_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj68717_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj68717_droppedInsideTargetActions_3_actionGroup4();
}
		}, 1);
	}
}






};
obj68717_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68717_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj68717").trigger("obj68717_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68717) {
				console.warn("de-queueing event obj68717." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68717").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68717_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	


//	action: move
//	target: obj68717 
move_68743();
function move_68743() {
	window.obj68717_droppedInsideTargetActions_3_runningActionsCount = obj68717_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj68717");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 91;
	var moveY = 607;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj68717_droppedInsideTargetActions_3_runningActionsCount = window.obj68717_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj68717_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj68717_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj68717_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj68717_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	});
}



















};
obj68717_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68717_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj68717").trigger("obj68717_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68717) {
				console.warn("de-queueing event obj68717." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68717").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68717_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	















//	action: Run JavaScript
runjs_68744();
function runjs_68744() {
	window.obj68717_droppedInsideTargetActions_3_runningActionsCount = obj68717_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj68758").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj68717_droppedInsideTargetActions_3_runningActionsCount = window.obj68717_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj68717_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj68717_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj68717_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj68717_droppedInsideTargetActions_3_actionGroup6();
}
	}, 1);
}







};
obj68717_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68717_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj68717").trigger("obj68717_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68717) {
				console.warn("de-queueing event obj68717." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68717").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68717_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_68745();
function runjs_68745() {
	window.obj68717_droppedInsideTargetActions_3_runningActionsCount = obj68717_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj68758").css("border-color", "#000000"); $("#obj68758").css("border-width", "1px"); $("#obj68758").css("border-style", "solid"); $("#obj68758").css("border-radius", "10px"); $("#obj68758").css("-webkit-border-radius", "10px"); $("#obj68758").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj68717_droppedInsideTargetActions_3_runningActionsCount = window.obj68717_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj68717_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj68717_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj68717_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj68717_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj68717_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68717_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj68717").trigger("obj68717_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68717) {
				console.warn("de-queueing event obj68717." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68717").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68717_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	

//	action: show 
//	selector: #obj68756
(function(){
	window.obj68717_droppedInsideTargetActions_3_runningActionsCount = obj68717_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj68756";
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
					window.obj68717_droppedInsideTargetActions_3_runningActionsCount = window.obj68717_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj68717_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj68717_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj68717_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj68717_droppedInsideTargetActions_3_actionGroup8();
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
				window.obj68717_droppedInsideTargetActions_3_runningActionsCount = window.obj68717_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj68717_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj68717_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj68717_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj68717_droppedInsideTargetActions_3_actionGroup8();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj68717_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68717_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj68717").trigger("obj68717_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68717) {
				console.warn("de-queueing event obj68717." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68717").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68717_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	












//	action: playAudio
//	target: obj68751 
playAudio_68747();
function playAudio_68747() {
	window.obj68717_droppedInsideTargetActions_3_runningActionsCount = obj68717_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj68751")[0];
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
		    window.obj68717_droppedInsideTargetActions_3_runningActionsCount = window.obj68717_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj68717_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj68717_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj68717_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj68717_droppedInsideTargetActions_3_actionGroup9();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj68717_droppedInsideTargetActions_3_runningActionsCount = window.obj68717_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj68717_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj68717_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj68717_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj68717_droppedInsideTargetActions_3_actionGroup9();
}
	}
}









};
obj68717_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68717_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj68717").trigger("obj68717_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68717) {
				console.warn("de-queueing event obj68717." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68717").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68717_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Switch Text
switchText_68748();
function switchText_68748() {
	window.obj68717_droppedInsideTargetActions_3_runningActionsCount = obj68717_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj68752_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj68752_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj68752").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj68752_content");
			setTimeout(function () {
				window.obj68717_droppedInsideTargetActions_3_runningActionsCount = window.obj68717_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj68717_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj68717_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj68717_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj68717_droppedInsideTargetActions_3_actionGroup10();
}
			}, 1);
		});
	} else {
		$("#obj68752 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj68717_droppedInsideTargetActions_3_runningActionsCount = window.obj68717_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj68717_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj68717_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj68717_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj68717_droppedInsideTargetActions_3_actionGroup10();
}
		}, 1);
	}
}






};
obj68717_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj68717_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj68717").trigger("obj68717_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68717) {
				console.warn("de-queueing event obj68717." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68717").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68717_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	





















};
obj68717_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68717_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj68717").trigger("obj68717_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68717) {
				console.warn("de-queueing event obj68717." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68717").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68717_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_68728();
function runjs_68728() {
	window.obj68717_droppedInsideTargetActions_2_runningActionsCount = obj68717_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj68770").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj68717_droppedInsideTargetActions_2_runningActionsCount = window.obj68717_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj68717_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj68717_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj68717_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj68717_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj68717_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68717_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj68717").trigger("obj68717_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68717) {
				console.warn("de-queueing event obj68717." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68717").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68717_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_68729();
function runjs_68729() {
	window.obj68717_droppedInsideTargetActions_2_runningActionsCount = obj68717_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj68770").css("border-color", "#C00000"); $("#obj68770").css("border-width", "2px"); $("#obj68770").css("border-style", "solid"); $("#obj68770").css("border-radius", "10px"); $("#obj68770").css("-webkit-border-radius", "10px"); $("#obj68770").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj68717_droppedInsideTargetActions_2_runningActionsCount = window.obj68717_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj68717_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj68717_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj68717_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj68717_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj68717_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68717_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj68717").trigger("obj68717_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68717) {
				console.warn("de-queueing event obj68717." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68717").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68717_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj68768 
hide_68730();
function hide_68730() {
	var selector = "#obj68768";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj68717_droppedInsideTargetActions_2_runningActionsCount = obj68717_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj68717_droppedInsideTargetActions_2_runningActionsCount = window.obj68717_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj68717_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj68717_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj68717_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj68717_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_68730(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj68717_droppedInsideTargetActions_2_runningActionsCount = window.obj68717_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj68717_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj68717_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj68717_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj68717_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj68717_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68717_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj68717").trigger("obj68717_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68717) {
				console.warn("de-queueing event obj68717." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68717").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68717_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Switch Text
switchText_68731();
function switchText_68731() {
	window.obj68717_droppedInsideTargetActions_2_runningActionsCount = obj68717_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj68752_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj68752_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj68752").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj68752_content");
			setTimeout(function () {
				window.obj68717_droppedInsideTargetActions_2_runningActionsCount = window.obj68717_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj68717_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj68717_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj68717_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj68717_droppedInsideTargetActions_2_actionGroup4();
}
			}, 1);
		});
	} else {
		$("#obj68752 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj68717_droppedInsideTargetActions_2_runningActionsCount = window.obj68717_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj68717_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj68717_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj68717_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj68717_droppedInsideTargetActions_2_actionGroup4();
}
		}, 1);
	}
}






};
obj68717_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68717_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj68717").trigger("obj68717_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68717) {
				console.warn("de-queueing event obj68717." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68717").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68717_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	


//	action: move
//	target: obj68717 
move_68732();
function move_68732() {
	window.obj68717_droppedInsideTargetActions_2_runningActionsCount = obj68717_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj68717");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 91;
	var moveY = 607;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj68717_droppedInsideTargetActions_2_runningActionsCount = window.obj68717_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj68717_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj68717_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj68717_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj68717_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	});
}



















};
obj68717_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68717_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj68717").trigger("obj68717_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68717) {
				console.warn("de-queueing event obj68717." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68717").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68717_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	















//	action: Run JavaScript
runjs_68733();
function runjs_68733() {
	window.obj68717_droppedInsideTargetActions_2_runningActionsCount = obj68717_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj68770").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj68717_droppedInsideTargetActions_2_runningActionsCount = window.obj68717_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj68717_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj68717_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj68717_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj68717_droppedInsideTargetActions_2_actionGroup6();
}
	}, 1);
}







};
obj68717_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68717_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj68717").trigger("obj68717_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68717) {
				console.warn("de-queueing event obj68717." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68717").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68717_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_68734();
function runjs_68734() {
	window.obj68717_droppedInsideTargetActions_2_runningActionsCount = obj68717_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj68770").css("border-color", "#000000"); $("#obj68770").css("border-width", "1px"); $("#obj68770").css("border-style", "solid"); $("#obj68770").css("border-radius", "10px"); $("#obj68770").css("-webkit-border-radius", "10px"); $("#obj68770").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj68717_droppedInsideTargetActions_2_runningActionsCount = window.obj68717_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj68717_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj68717_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj68717_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj68717_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj68717_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68717_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj68717").trigger("obj68717_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68717) {
				console.warn("de-queueing event obj68717." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68717").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68717_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	

//	action: show 
//	selector: #obj68768
(function(){
	window.obj68717_droppedInsideTargetActions_2_runningActionsCount = obj68717_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj68768";
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
					window.obj68717_droppedInsideTargetActions_2_runningActionsCount = window.obj68717_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj68717_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj68717_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj68717_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj68717_droppedInsideTargetActions_2_actionGroup8();
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
				window.obj68717_droppedInsideTargetActions_2_runningActionsCount = window.obj68717_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj68717_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj68717_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj68717_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj68717_droppedInsideTargetActions_2_actionGroup8();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj68717_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68717_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj68717").trigger("obj68717_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68717) {
				console.warn("de-queueing event obj68717." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68717").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68717_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	












//	action: playAudio
//	target: obj68751 
playAudio_68736();
function playAudio_68736() {
	window.obj68717_droppedInsideTargetActions_2_runningActionsCount = obj68717_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj68751")[0];
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
		    window.obj68717_droppedInsideTargetActions_2_runningActionsCount = window.obj68717_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj68717_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj68717_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj68717_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj68717_droppedInsideTargetActions_2_actionGroup9();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj68717_droppedInsideTargetActions_2_runningActionsCount = window.obj68717_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj68717_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj68717_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj68717_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj68717_droppedInsideTargetActions_2_actionGroup9();
}
	}
}









};
obj68717_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68717_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj68717").trigger("obj68717_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68717) {
				console.warn("de-queueing event obj68717." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68717").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68717_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Switch Text
switchText_68737();
function switchText_68737() {
	window.obj68717_droppedInsideTargetActions_2_runningActionsCount = obj68717_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj68752_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj68752_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj68752").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj68752_content");
			setTimeout(function () {
				window.obj68717_droppedInsideTargetActions_2_runningActionsCount = window.obj68717_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj68717_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj68717_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj68717_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj68717_droppedInsideTargetActions_2_actionGroup10();
}
			}, 1);
		});
	} else {
		$("#obj68752 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj68717_droppedInsideTargetActions_2_runningActionsCount = window.obj68717_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj68717_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj68717_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj68717_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj68717_droppedInsideTargetActions_2_actionGroup10();
}
		}, 1);
	}
}






};
obj68717_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj68717_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj68717").trigger("obj68717_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68717) {
				console.warn("de-queueing event obj68717." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68717").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68717_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	





















};
obj68717_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68717_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj68717").trigger("obj68717_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68717) {
				console.warn("de-queueing event obj68717." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68717").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68717_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_68722();
function runjs_68722() {
	window.obj68717_droppedInsideTargetActions_runningActionsCount = obj68717_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj68762").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj68717_droppedInsideTargetActions_runningActionsCount = window.obj68717_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj68717_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj68717_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj68717_droppedInsideTargetActions_runningActionsCount == 0) {
	obj68717_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj68717_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68717_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj68717").trigger("obj68717_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68717) {
				console.warn("de-queueing event obj68717." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68717").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68717_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_68725();
function switchText_68725() {
	window.obj68717_droppedInsideTargetActions_runningActionsCount = obj68717_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj68752_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj68752_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj68752").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj68752_content");
			setTimeout(function () {
				window.obj68717_droppedInsideTargetActions_runningActionsCount = window.obj68717_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj68717_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj68717_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj68717_droppedInsideTargetActions_runningActionsCount == 0) {
	obj68717_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj68752 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj68717_droppedInsideTargetActions_runningActionsCount = window.obj68717_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj68717_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj68717_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj68717_droppedInsideTargetActions_runningActionsCount == 0) {
	obj68717_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj68717_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68717_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj68717").trigger("obj68717_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68717) {
				console.warn("de-queueing event obj68717." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68717").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68717_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_68723();
function runjs_68723() {
	window.obj68717_droppedInsideTargetActions_runningActionsCount = obj68717_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj68762").css("border-color", "#058E3F"); $("#obj68762").css("border-width", "2px"); $("#obj68762").css("border-style", "solid"); $("#obj68762").css("border-radius", "10px"); $("#obj68762").css("-webkit-border-radius", "10px"); $("#obj68762").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj68717_droppedInsideTargetActions_runningActionsCount = window.obj68717_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj68717_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj68717_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj68717_droppedInsideTargetActions_runningActionsCount == 0) {
	obj68717_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj68717_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68717_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj68717").trigger("obj68717_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68717) {
				console.warn("de-queueing event obj68717." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68717").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68717_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj68760 
hide_68724();
function hide_68724() {
	var selector = "#obj68760";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj68717_droppedInsideTargetActions_runningActionsCount = obj68717_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj68717_droppedInsideTargetActions_runningActionsCount = window.obj68717_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj68717_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj68717_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj68717_droppedInsideTargetActions_runningActionsCount == 0) {
	obj68717_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_68724(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj68717_droppedInsideTargetActions_runningActionsCount = window.obj68717_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj68717_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj68717_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj68717_droppedInsideTargetActions_runningActionsCount == 0) {
	obj68717_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj68717_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68717_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj68717").trigger("obj68717_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68717) {
				console.warn("de-queueing event obj68717." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68717").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68717_droppedInsideTargetActions_activeActionGroupIndex = 4;
	












//	action: playAudio
//	target: obj68749 
playAudio_68726();
function playAudio_68726() {
	window.obj68717_droppedInsideTargetActions_runningActionsCount = obj68717_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj68749")[0];
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
		    window.obj68717_droppedInsideTargetActions_runningActionsCount = window.obj68717_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj68717_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj68717_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj68717_droppedInsideTargetActions_runningActionsCount == 0) {
	obj68717_droppedInsideTargetActions_actionGroup5();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj68717_droppedInsideTargetActions_runningActionsCount = window.obj68717_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj68717_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj68717_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj68717_droppedInsideTargetActions_runningActionsCount == 0) {
	obj68717_droppedInsideTargetActions_actionGroup5();
}
	}
}









};
obj68717_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68717_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj68717").trigger("obj68717_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68717) {
				console.warn("de-queueing event obj68717." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68717").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68717_droppedInsideTargetActions_activeActionGroupIndex = 5;
	















//	action: Switch Text
switchText_90130();
function switchText_90130() {
	window.obj68717_droppedInsideTargetActions_runningActionsCount = obj68717_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj68752_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj68752_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj68752").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj68752_content");
			setTimeout(function () {
				window.obj68717_droppedInsideTargetActions_runningActionsCount = window.obj68717_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj68717_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj68717_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj68717_droppedInsideTargetActions_runningActionsCount == 0) {
	obj68717_droppedInsideTargetActions_actionGroup6();
}
			}, 1);
		});
	} else {
		$("#obj68752 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj68717_droppedInsideTargetActions_runningActionsCount = window.obj68717_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj68717_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj68717_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj68717_droppedInsideTargetActions_runningActionsCount == 0) {
	obj68717_droppedInsideTargetActions_actionGroup6();
}
		}, 1);
	}
}






};
obj68717_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj68717_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj68717").trigger("obj68717_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68717) {
				console.warn("de-queueing event obj68717." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68717").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68717_droppedInsideTargetActions_activeActionGroupIndex = 6;
	





















};
obj68685_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68685_onTouchDown_activeActionGroupIndex = -1;
		$("#obj68685").trigger("obj68685_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68685) {
				console.warn("de-queueing event obj68685." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68685").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68685_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj68685");
//	action: dragDrop
//	target: obj68685 
dragDrop_68688();
function dragDrop_68688() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj68685_onTouchDown_runningActionsCount = obj68685_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj68685');
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
	  	containerNode = $('#obj68774');
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
    	window.obj68685_onTouchDown_runningActionsCount = window.obj68685_onTouchDown_runningActionsCount - 1;
if (window.obj68685_onTouchDown_runningActionsCount < 0) {
	window.obj68685_onTouchDown_runningActionsCount = 0;
} else if (window.obj68685_onTouchDown_runningActionsCount == 0) {
	obj68685_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj68758","#obj68770","#obj68762");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_68688 = false;
    	var dropped_id_68688;
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
					dropped_68688 = true;
					dropped_id_68688 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_68688) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj68685").trigger('SCActionDragDrop68688_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj68685_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj68685_onTouchDown_activeActionGroupIndex = -1;
		$("#obj68685").trigger("obj68685_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68685) {
				console.warn("de-queueing event obj68685." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68685").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68685_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj68685_SCActionDragDrop68688_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68685_SCActionDragDrop68688_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj68685").trigger("obj68685_SCActionDragDrop68688_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68685) {
				console.warn("de-queueing event obj68685." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68685").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68685_SCActionDragDrop68688_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj68685 
move_92198();
function move_92198() {
	window.obj68685_SCActionDragDrop68688_droppedOutsideTargetActions_runningActionsCount = obj68685_SCActionDragDrop68688_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj68685");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 238;
	var moveY = 607;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj68685_SCActionDragDrop68688_droppedOutsideTargetActions_runningActionsCount = window.obj68685_SCActionDragDrop68688_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj68685_SCActionDragDrop68688_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj68685_SCActionDragDrop68688_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj68685_SCActionDragDrop68688_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj68685_SCActionDragDrop68688_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj68685_SCActionDragDrop68688_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj68685_SCActionDragDrop68688_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj68685").trigger("obj68685_SCActionDragDrop68688_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68685) {
				console.warn("de-queueing event obj68685." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68685").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68685_SCActionDragDrop68688_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj68685_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68685_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj68685").trigger("obj68685_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68685) {
				console.warn("de-queueing event obj68685." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68685").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68685_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_68707();
function runjs_68707() {
	window.obj68685_droppedInsideTargetActions_3_runningActionsCount = obj68685_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj68762").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj68685_droppedInsideTargetActions_3_runningActionsCount = window.obj68685_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj68685_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj68685_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj68685_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj68685_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj68685_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68685_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj68685").trigger("obj68685_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68685) {
				console.warn("de-queueing event obj68685." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68685").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68685_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_68708();
function runjs_68708() {
	window.obj68685_droppedInsideTargetActions_3_runningActionsCount = obj68685_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj68762").css("border-color", "#C00000"); $("#obj68762").css("border-width", "2px"); $("#obj68762").css("border-style", "solid"); $("#obj68762").css("border-radius", "10px"); $("#obj68762").css("-webkit-border-radius", "10px"); $("#obj68762").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj68685_droppedInsideTargetActions_3_runningActionsCount = window.obj68685_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj68685_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj68685_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj68685_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj68685_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj68685_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68685_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj68685").trigger("obj68685_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68685) {
				console.warn("de-queueing event obj68685." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68685").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68685_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj68760 
hide_68709();
function hide_68709() {
	var selector = "#obj68760";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj68685_droppedInsideTargetActions_3_runningActionsCount = obj68685_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj68685_droppedInsideTargetActions_3_runningActionsCount = window.obj68685_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj68685_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj68685_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj68685_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj68685_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_68709(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj68685_droppedInsideTargetActions_3_runningActionsCount = window.obj68685_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj68685_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj68685_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj68685_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj68685_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj68685_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68685_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj68685").trigger("obj68685_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68685) {
				console.warn("de-queueing event obj68685." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68685").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68685_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Switch Text
switchText_68710();
function switchText_68710() {
	window.obj68685_droppedInsideTargetActions_3_runningActionsCount = obj68685_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj68752_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj68752_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj68752").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj68752_content");
			setTimeout(function () {
				window.obj68685_droppedInsideTargetActions_3_runningActionsCount = window.obj68685_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj68685_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj68685_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj68685_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj68685_droppedInsideTargetActions_3_actionGroup4();
}
			}, 1);
		});
	} else {
		$("#obj68752 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj68685_droppedInsideTargetActions_3_runningActionsCount = window.obj68685_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj68685_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj68685_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj68685_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj68685_droppedInsideTargetActions_3_actionGroup4();
}
		}, 1);
	}
}






};
obj68685_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68685_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj68685").trigger("obj68685_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68685) {
				console.warn("de-queueing event obj68685." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68685").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68685_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	


//	action: move
//	target: obj68685 
move_68711();
function move_68711() {
	window.obj68685_droppedInsideTargetActions_3_runningActionsCount = obj68685_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj68685");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 238;
	var moveY = 607;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj68685_droppedInsideTargetActions_3_runningActionsCount = window.obj68685_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj68685_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj68685_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj68685_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj68685_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	});
}



















};
obj68685_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68685_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj68685").trigger("obj68685_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68685) {
				console.warn("de-queueing event obj68685." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68685").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68685_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	















//	action: Run JavaScript
runjs_68712();
function runjs_68712() {
	window.obj68685_droppedInsideTargetActions_3_runningActionsCount = obj68685_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj68762").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj68685_droppedInsideTargetActions_3_runningActionsCount = window.obj68685_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj68685_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj68685_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj68685_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj68685_droppedInsideTargetActions_3_actionGroup6();
}
	}, 1);
}







};
obj68685_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68685_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj68685").trigger("obj68685_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68685) {
				console.warn("de-queueing event obj68685." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68685").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68685_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_68713();
function runjs_68713() {
	window.obj68685_droppedInsideTargetActions_3_runningActionsCount = obj68685_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj68762").css("border-color", "#000000"); $("#obj68762").css("border-width", "1px"); $("#obj68762").css("border-style", "solid"); $("#obj68762").css("border-radius", "10px"); $("#obj68762").css("-webkit-border-radius", "10px"); $("#obj68762").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj68685_droppedInsideTargetActions_3_runningActionsCount = window.obj68685_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj68685_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj68685_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj68685_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj68685_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj68685_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68685_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj68685").trigger("obj68685_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68685) {
				console.warn("de-queueing event obj68685." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68685").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68685_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	

//	action: show 
//	selector: #obj68760
(function(){
	window.obj68685_droppedInsideTargetActions_3_runningActionsCount = obj68685_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj68760";
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
					window.obj68685_droppedInsideTargetActions_3_runningActionsCount = window.obj68685_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj68685_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj68685_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj68685_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj68685_droppedInsideTargetActions_3_actionGroup8();
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
				window.obj68685_droppedInsideTargetActions_3_runningActionsCount = window.obj68685_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj68685_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj68685_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj68685_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj68685_droppedInsideTargetActions_3_actionGroup8();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj68685_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68685_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj68685").trigger("obj68685_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68685) {
				console.warn("de-queueing event obj68685." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68685").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68685_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	












//	action: playAudio
//	target: obj68751 
playAudio_68715();
function playAudio_68715() {
	window.obj68685_droppedInsideTargetActions_3_runningActionsCount = obj68685_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj68751")[0];
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
		    window.obj68685_droppedInsideTargetActions_3_runningActionsCount = window.obj68685_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj68685_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj68685_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj68685_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj68685_droppedInsideTargetActions_3_actionGroup9();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj68685_droppedInsideTargetActions_3_runningActionsCount = window.obj68685_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj68685_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj68685_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj68685_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj68685_droppedInsideTargetActions_3_actionGroup9();
}
	}
}









};
obj68685_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68685_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj68685").trigger("obj68685_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68685) {
				console.warn("de-queueing event obj68685." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68685").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68685_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Switch Text
switchText_68716();
function switchText_68716() {
	window.obj68685_droppedInsideTargetActions_3_runningActionsCount = obj68685_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj68752_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj68752_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj68752").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj68752_content");
			setTimeout(function () {
				window.obj68685_droppedInsideTargetActions_3_runningActionsCount = window.obj68685_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj68685_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj68685_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj68685_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj68685_droppedInsideTargetActions_3_actionGroup10();
}
			}, 1);
		});
	} else {
		$("#obj68752 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj68685_droppedInsideTargetActions_3_runningActionsCount = window.obj68685_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj68685_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj68685_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj68685_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj68685_droppedInsideTargetActions_3_actionGroup10();
}
		}, 1);
	}
}






};
obj68685_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj68685_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj68685").trigger("obj68685_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68685) {
				console.warn("de-queueing event obj68685." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68685").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68685_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	





















};
obj68685_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68685_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj68685").trigger("obj68685_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68685) {
				console.warn("de-queueing event obj68685." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68685").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68685_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_68696();
function runjs_68696() {
	window.obj68685_droppedInsideTargetActions_2_runningActionsCount = obj68685_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj68770").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj68685_droppedInsideTargetActions_2_runningActionsCount = window.obj68685_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj68685_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj68685_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj68685_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj68685_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj68685_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68685_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj68685").trigger("obj68685_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68685) {
				console.warn("de-queueing event obj68685." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68685").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68685_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_68697();
function runjs_68697() {
	window.obj68685_droppedInsideTargetActions_2_runningActionsCount = obj68685_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj68770").css("border-color", "#C00000"); $("#obj68770").css("border-width", "2px"); $("#obj68770").css("border-style", "solid"); $("#obj68770").css("border-radius", "10px"); $("#obj68770").css("-webkit-border-radius", "10px"); $("#obj68770").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj68685_droppedInsideTargetActions_2_runningActionsCount = window.obj68685_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj68685_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj68685_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj68685_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj68685_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj68685_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68685_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj68685").trigger("obj68685_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68685) {
				console.warn("de-queueing event obj68685." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68685").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68685_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj68768 
hide_68698();
function hide_68698() {
	var selector = "#obj68768";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj68685_droppedInsideTargetActions_2_runningActionsCount = obj68685_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj68685_droppedInsideTargetActions_2_runningActionsCount = window.obj68685_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj68685_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj68685_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj68685_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj68685_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_68698(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj68685_droppedInsideTargetActions_2_runningActionsCount = window.obj68685_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj68685_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj68685_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj68685_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj68685_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj68685_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68685_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj68685").trigger("obj68685_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68685) {
				console.warn("de-queueing event obj68685." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68685").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68685_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Switch Text
switchText_68699();
function switchText_68699() {
	window.obj68685_droppedInsideTargetActions_2_runningActionsCount = obj68685_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj68752_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj68752_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj68752").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj68752_content");
			setTimeout(function () {
				window.obj68685_droppedInsideTargetActions_2_runningActionsCount = window.obj68685_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj68685_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj68685_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj68685_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj68685_droppedInsideTargetActions_2_actionGroup4();
}
			}, 1);
		});
	} else {
		$("#obj68752 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj68685_droppedInsideTargetActions_2_runningActionsCount = window.obj68685_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj68685_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj68685_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj68685_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj68685_droppedInsideTargetActions_2_actionGroup4();
}
		}, 1);
	}
}






};
obj68685_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68685_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj68685").trigger("obj68685_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68685) {
				console.warn("de-queueing event obj68685." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68685").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68685_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	


//	action: move
//	target: obj68685 
move_68700();
function move_68700() {
	window.obj68685_droppedInsideTargetActions_2_runningActionsCount = obj68685_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj68685");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 238;
	var moveY = 607;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj68685_droppedInsideTargetActions_2_runningActionsCount = window.obj68685_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj68685_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj68685_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj68685_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj68685_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	});
}



















};
obj68685_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68685_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj68685").trigger("obj68685_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68685) {
				console.warn("de-queueing event obj68685." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68685").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68685_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	















//	action: Run JavaScript
runjs_68701();
function runjs_68701() {
	window.obj68685_droppedInsideTargetActions_2_runningActionsCount = obj68685_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj68770").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj68685_droppedInsideTargetActions_2_runningActionsCount = window.obj68685_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj68685_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj68685_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj68685_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj68685_droppedInsideTargetActions_2_actionGroup6();
}
	}, 1);
}







};
obj68685_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68685_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj68685").trigger("obj68685_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68685) {
				console.warn("de-queueing event obj68685." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68685").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68685_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_68702();
function runjs_68702() {
	window.obj68685_droppedInsideTargetActions_2_runningActionsCount = obj68685_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj68770").css("border-color", "#000000"); $("#obj68770").css("border-width", "1px"); $("#obj68770").css("border-style", "solid"); $("#obj68770").css("border-radius", "10px"); $("#obj68770").css("-webkit-border-radius", "10px"); $("#obj68770").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj68685_droppedInsideTargetActions_2_runningActionsCount = window.obj68685_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj68685_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj68685_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj68685_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj68685_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj68685_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68685_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj68685").trigger("obj68685_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68685) {
				console.warn("de-queueing event obj68685." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68685").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68685_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	

//	action: show 
//	selector: #obj68768
(function(){
	window.obj68685_droppedInsideTargetActions_2_runningActionsCount = obj68685_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj68768";
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
					window.obj68685_droppedInsideTargetActions_2_runningActionsCount = window.obj68685_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj68685_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj68685_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj68685_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj68685_droppedInsideTargetActions_2_actionGroup8();
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
				window.obj68685_droppedInsideTargetActions_2_runningActionsCount = window.obj68685_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj68685_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj68685_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj68685_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj68685_droppedInsideTargetActions_2_actionGroup8();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj68685_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68685_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj68685").trigger("obj68685_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68685) {
				console.warn("de-queueing event obj68685." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68685").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68685_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	












//	action: playAudio
//	target: obj68751 
playAudio_68704();
function playAudio_68704() {
	window.obj68685_droppedInsideTargetActions_2_runningActionsCount = obj68685_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj68751")[0];
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
		    window.obj68685_droppedInsideTargetActions_2_runningActionsCount = window.obj68685_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj68685_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj68685_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj68685_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj68685_droppedInsideTargetActions_2_actionGroup9();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj68685_droppedInsideTargetActions_2_runningActionsCount = window.obj68685_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj68685_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj68685_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj68685_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj68685_droppedInsideTargetActions_2_actionGroup9();
}
	}
}









};
obj68685_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68685_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj68685").trigger("obj68685_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68685) {
				console.warn("de-queueing event obj68685." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68685").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68685_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Switch Text
switchText_68705();
function switchText_68705() {
	window.obj68685_droppedInsideTargetActions_2_runningActionsCount = obj68685_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj68752_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj68752_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj68752").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj68752_content");
			setTimeout(function () {
				window.obj68685_droppedInsideTargetActions_2_runningActionsCount = window.obj68685_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj68685_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj68685_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj68685_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj68685_droppedInsideTargetActions_2_actionGroup10();
}
			}, 1);
		});
	} else {
		$("#obj68752 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj68685_droppedInsideTargetActions_2_runningActionsCount = window.obj68685_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj68685_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj68685_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj68685_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj68685_droppedInsideTargetActions_2_actionGroup10();
}
		}, 1);
	}
}






};
obj68685_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj68685_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj68685").trigger("obj68685_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68685) {
				console.warn("de-queueing event obj68685." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68685").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68685_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	





















};
obj68685_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68685_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj68685").trigger("obj68685_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68685) {
				console.warn("de-queueing event obj68685." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68685").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68685_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_68690();
function runjs_68690() {
	window.obj68685_droppedInsideTargetActions_runningActionsCount = obj68685_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj68758").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj68685_droppedInsideTargetActions_runningActionsCount = window.obj68685_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj68685_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj68685_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj68685_droppedInsideTargetActions_runningActionsCount == 0) {
	obj68685_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj68685_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68685_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj68685").trigger("obj68685_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68685) {
				console.warn("de-queueing event obj68685." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68685").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68685_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_68693();
function switchText_68693() {
	window.obj68685_droppedInsideTargetActions_runningActionsCount = obj68685_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj68752_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj68752_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj68752").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj68752_content");
			setTimeout(function () {
				window.obj68685_droppedInsideTargetActions_runningActionsCount = window.obj68685_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj68685_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj68685_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj68685_droppedInsideTargetActions_runningActionsCount == 0) {
	obj68685_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj68752 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj68685_droppedInsideTargetActions_runningActionsCount = window.obj68685_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj68685_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj68685_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj68685_droppedInsideTargetActions_runningActionsCount == 0) {
	obj68685_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj68685_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68685_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj68685").trigger("obj68685_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68685) {
				console.warn("de-queueing event obj68685." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68685").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68685_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_68691();
function runjs_68691() {
	window.obj68685_droppedInsideTargetActions_runningActionsCount = obj68685_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj68758").css("border-color", "#058E3F"); $("#obj68758").css("border-width", "2px"); $("#obj68758").css("border-style", "solid"); $("#obj68758").css("border-radius", "10px"); $("#obj68758").css("-webkit-border-radius", "10px"); $("#obj68758").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj68685_droppedInsideTargetActions_runningActionsCount = window.obj68685_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj68685_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj68685_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj68685_droppedInsideTargetActions_runningActionsCount == 0) {
	obj68685_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj68685_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68685_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj68685").trigger("obj68685_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68685) {
				console.warn("de-queueing event obj68685." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68685").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68685_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj68756 
hide_68692();
function hide_68692() {
	var selector = "#obj68756";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj68685_droppedInsideTargetActions_runningActionsCount = obj68685_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj68685_droppedInsideTargetActions_runningActionsCount = window.obj68685_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj68685_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj68685_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj68685_droppedInsideTargetActions_runningActionsCount == 0) {
	obj68685_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_68692(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj68685_droppedInsideTargetActions_runningActionsCount = window.obj68685_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj68685_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj68685_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj68685_droppedInsideTargetActions_runningActionsCount == 0) {
	obj68685_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj68685_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68685_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj68685").trigger("obj68685_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68685) {
				console.warn("de-queueing event obj68685." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68685").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68685_droppedInsideTargetActions_activeActionGroupIndex = 4;
	












//	action: playAudio
//	target: obj68749 
playAudio_68694();
function playAudio_68694() {
	window.obj68685_droppedInsideTargetActions_runningActionsCount = obj68685_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj68749")[0];
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
		    window.obj68685_droppedInsideTargetActions_runningActionsCount = window.obj68685_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj68685_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj68685_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj68685_droppedInsideTargetActions_runningActionsCount == 0) {
	obj68685_droppedInsideTargetActions_actionGroup5();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj68685_droppedInsideTargetActions_runningActionsCount = window.obj68685_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj68685_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj68685_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj68685_droppedInsideTargetActions_runningActionsCount == 0) {
	obj68685_droppedInsideTargetActions_actionGroup5();
}
	}
}









};
obj68685_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68685_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj68685").trigger("obj68685_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68685) {
				console.warn("de-queueing event obj68685." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68685").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68685_droppedInsideTargetActions_activeActionGroupIndex = 5;
	















//	action: Switch Text
switchText_90131();
function switchText_90131() {
	window.obj68685_droppedInsideTargetActions_runningActionsCount = obj68685_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj68752_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj68752_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj68752").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj68752_content");
			setTimeout(function () {
				window.obj68685_droppedInsideTargetActions_runningActionsCount = window.obj68685_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj68685_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj68685_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj68685_droppedInsideTargetActions_runningActionsCount == 0) {
	obj68685_droppedInsideTargetActions_actionGroup6();
}
			}, 1);
		});
	} else {
		$("#obj68752 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj68685_droppedInsideTargetActions_runningActionsCount = window.obj68685_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj68685_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj68685_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj68685_droppedInsideTargetActions_runningActionsCount == 0) {
	obj68685_droppedInsideTargetActions_actionGroup6();
}
		}, 1);
	}
}






};
obj68685_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj68685_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj68685").trigger("obj68685_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68685) {
				console.warn("de-queueing event obj68685." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68685").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68685_droppedInsideTargetActions_activeActionGroupIndex = 6;
	





















};
obj68653_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68653_onTouchDown_activeActionGroupIndex = -1;
		$("#obj68653").trigger("obj68653_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68653) {
				console.warn("de-queueing event obj68653." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68653").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68653_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj68653");
//	action: dragDrop
//	target: obj68653 
dragDrop_68656();
function dragDrop_68656() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj68653_onTouchDown_runningActionsCount = obj68653_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj68653');
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
	  	containerNode = $('#obj68774');
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
    	window.obj68653_onTouchDown_runningActionsCount = window.obj68653_onTouchDown_runningActionsCount - 1;
if (window.obj68653_onTouchDown_runningActionsCount < 0) {
	window.obj68653_onTouchDown_runningActionsCount = 0;
} else if (window.obj68653_onTouchDown_runningActionsCount == 0) {
	obj68653_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj68770","#obj68762","#obj68758");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_68656 = false;
    	var dropped_id_68656;
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
					dropped_68656 = true;
					dropped_id_68656 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_68656) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj68653").trigger('SCActionDragDrop68656_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj68653_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj68653_onTouchDown_activeActionGroupIndex = -1;
		$("#obj68653").trigger("obj68653_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68653) {
				console.warn("de-queueing event obj68653." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68653").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68653_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj68653_SCActionDragDrop68656_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68653_SCActionDragDrop68656_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj68653").trigger("obj68653_SCActionDragDrop68656_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68653) {
				console.warn("de-queueing event obj68653." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68653").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68653_SCActionDragDrop68656_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj68653 
move_92200();
function move_92200() {
	window.obj68653_SCActionDragDrop68656_droppedOutsideTargetActions_runningActionsCount = obj68653_SCActionDragDrop68656_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj68653");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 390;
	var moveY = 607;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj68653_SCActionDragDrop68656_droppedOutsideTargetActions_runningActionsCount = window.obj68653_SCActionDragDrop68656_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj68653_SCActionDragDrop68656_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj68653_SCActionDragDrop68656_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj68653_SCActionDragDrop68656_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj68653_SCActionDragDrop68656_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj68653_SCActionDragDrop68656_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj68653_SCActionDragDrop68656_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj68653").trigger("obj68653_SCActionDragDrop68656_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68653) {
				console.warn("de-queueing event obj68653." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68653").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68653_SCActionDragDrop68656_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj68653_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68653_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj68653").trigger("obj68653_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68653) {
				console.warn("de-queueing event obj68653." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68653").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68653_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_68675();
function runjs_68675() {
	window.obj68653_droppedInsideTargetActions_3_runningActionsCount = obj68653_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj68758").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj68653_droppedInsideTargetActions_3_runningActionsCount = window.obj68653_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj68653_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj68653_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj68653_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj68653_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj68653_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68653_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj68653").trigger("obj68653_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68653) {
				console.warn("de-queueing event obj68653." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68653").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68653_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_68676();
function runjs_68676() {
	window.obj68653_droppedInsideTargetActions_3_runningActionsCount = obj68653_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj68758").css("border-color", "#C00000"); $("#obj68758").css("border-width", "2px"); $("#obj68758").css("border-style", "solid"); $("#obj68758").css("border-radius", "10px"); $("#obj68758").css("-webkit-border-radius", "10px"); $("#obj68758").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj68653_droppedInsideTargetActions_3_runningActionsCount = window.obj68653_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj68653_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj68653_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj68653_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj68653_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj68653_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68653_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj68653").trigger("obj68653_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68653) {
				console.warn("de-queueing event obj68653." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68653").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68653_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj68756 
hide_68677();
function hide_68677() {
	var selector = "#obj68756";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj68653_droppedInsideTargetActions_3_runningActionsCount = obj68653_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj68653_droppedInsideTargetActions_3_runningActionsCount = window.obj68653_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj68653_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj68653_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj68653_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj68653_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_68677(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj68653_droppedInsideTargetActions_3_runningActionsCount = window.obj68653_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj68653_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj68653_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj68653_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj68653_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj68653_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68653_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj68653").trigger("obj68653_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68653) {
				console.warn("de-queueing event obj68653." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68653").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68653_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Switch Text
switchText_68678();
function switchText_68678() {
	window.obj68653_droppedInsideTargetActions_3_runningActionsCount = obj68653_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj68752_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj68752_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj68752").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj68752_content");
			setTimeout(function () {
				window.obj68653_droppedInsideTargetActions_3_runningActionsCount = window.obj68653_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj68653_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj68653_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj68653_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj68653_droppedInsideTargetActions_3_actionGroup4();
}
			}, 1);
		});
	} else {
		$("#obj68752 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj68653_droppedInsideTargetActions_3_runningActionsCount = window.obj68653_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj68653_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj68653_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj68653_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj68653_droppedInsideTargetActions_3_actionGroup4();
}
		}, 1);
	}
}






};
obj68653_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68653_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj68653").trigger("obj68653_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68653) {
				console.warn("de-queueing event obj68653." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68653").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68653_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	


//	action: move
//	target: obj68653 
move_68679();
function move_68679() {
	window.obj68653_droppedInsideTargetActions_3_runningActionsCount = obj68653_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj68653");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 390;
	var moveY = 607;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj68653_droppedInsideTargetActions_3_runningActionsCount = window.obj68653_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj68653_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj68653_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj68653_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj68653_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	});
}



















};
obj68653_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68653_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj68653").trigger("obj68653_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68653) {
				console.warn("de-queueing event obj68653." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68653").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68653_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	















//	action: Run JavaScript
runjs_68680();
function runjs_68680() {
	window.obj68653_droppedInsideTargetActions_3_runningActionsCount = obj68653_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj68758").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj68653_droppedInsideTargetActions_3_runningActionsCount = window.obj68653_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj68653_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj68653_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj68653_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj68653_droppedInsideTargetActions_3_actionGroup6();
}
	}, 1);
}







};
obj68653_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68653_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj68653").trigger("obj68653_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68653) {
				console.warn("de-queueing event obj68653." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68653").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68653_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_68681();
function runjs_68681() {
	window.obj68653_droppedInsideTargetActions_3_runningActionsCount = obj68653_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj68758").css("border-color", "#000000"); $("#obj68758").css("border-width", "1px"); $("#obj68758").css("border-style", "solid"); $("#obj68758").css("border-radius", "10px"); $("#obj68758").css("-webkit-border-radius", "10px"); $("#obj68758").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj68653_droppedInsideTargetActions_3_runningActionsCount = window.obj68653_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj68653_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj68653_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj68653_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj68653_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj68653_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68653_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj68653").trigger("obj68653_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68653) {
				console.warn("de-queueing event obj68653." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68653").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68653_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	

//	action: show 
//	selector: #obj68756
(function(){
	window.obj68653_droppedInsideTargetActions_3_runningActionsCount = obj68653_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj68756";
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
					window.obj68653_droppedInsideTargetActions_3_runningActionsCount = window.obj68653_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj68653_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj68653_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj68653_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj68653_droppedInsideTargetActions_3_actionGroup8();
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
				window.obj68653_droppedInsideTargetActions_3_runningActionsCount = window.obj68653_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj68653_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj68653_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj68653_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj68653_droppedInsideTargetActions_3_actionGroup8();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj68653_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68653_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj68653").trigger("obj68653_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68653) {
				console.warn("de-queueing event obj68653." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68653").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68653_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	












//	action: playAudio
//	target: obj68751 
playAudio_68683();
function playAudio_68683() {
	window.obj68653_droppedInsideTargetActions_3_runningActionsCount = obj68653_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj68751")[0];
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
		    window.obj68653_droppedInsideTargetActions_3_runningActionsCount = window.obj68653_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj68653_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj68653_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj68653_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj68653_droppedInsideTargetActions_3_actionGroup9();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj68653_droppedInsideTargetActions_3_runningActionsCount = window.obj68653_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj68653_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj68653_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj68653_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj68653_droppedInsideTargetActions_3_actionGroup9();
}
	}
}









};
obj68653_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68653_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj68653").trigger("obj68653_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68653) {
				console.warn("de-queueing event obj68653." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68653").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68653_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Switch Text
switchText_68684();
function switchText_68684() {
	window.obj68653_droppedInsideTargetActions_3_runningActionsCount = obj68653_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj68752_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj68752_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj68752").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj68752_content");
			setTimeout(function () {
				window.obj68653_droppedInsideTargetActions_3_runningActionsCount = window.obj68653_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj68653_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj68653_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj68653_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj68653_droppedInsideTargetActions_3_actionGroup10();
}
			}, 1);
		});
	} else {
		$("#obj68752 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj68653_droppedInsideTargetActions_3_runningActionsCount = window.obj68653_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj68653_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj68653_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj68653_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj68653_droppedInsideTargetActions_3_actionGroup10();
}
		}, 1);
	}
}






};
obj68653_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj68653_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj68653").trigger("obj68653_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68653) {
				console.warn("de-queueing event obj68653." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68653").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68653_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	





















};
obj68653_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68653_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj68653").trigger("obj68653_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68653) {
				console.warn("de-queueing event obj68653." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68653").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68653_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_68664();
function runjs_68664() {
	window.obj68653_droppedInsideTargetActions_2_runningActionsCount = obj68653_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj68762").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj68653_droppedInsideTargetActions_2_runningActionsCount = window.obj68653_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj68653_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj68653_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj68653_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj68653_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj68653_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68653_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj68653").trigger("obj68653_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68653) {
				console.warn("de-queueing event obj68653." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68653").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68653_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_68665();
function runjs_68665() {
	window.obj68653_droppedInsideTargetActions_2_runningActionsCount = obj68653_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj68762").css("border-color", "#C00000"); $("#obj68762").css("border-width", "2px"); $("#obj68762").css("border-style", "solid"); $("#obj68762").css("border-radius", "10px"); $("#obj68762").css("-webkit-border-radius", "10px"); $("#obj68762").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj68653_droppedInsideTargetActions_2_runningActionsCount = window.obj68653_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj68653_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj68653_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj68653_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj68653_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj68653_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68653_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj68653").trigger("obj68653_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68653) {
				console.warn("de-queueing event obj68653." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68653").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68653_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj68760 
hide_68666();
function hide_68666() {
	var selector = "#obj68760";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj68653_droppedInsideTargetActions_2_runningActionsCount = obj68653_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj68653_droppedInsideTargetActions_2_runningActionsCount = window.obj68653_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj68653_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj68653_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj68653_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj68653_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_68666(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj68653_droppedInsideTargetActions_2_runningActionsCount = window.obj68653_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj68653_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj68653_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj68653_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj68653_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj68653_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68653_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj68653").trigger("obj68653_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68653) {
				console.warn("de-queueing event obj68653." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68653").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68653_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Switch Text
switchText_68667();
function switchText_68667() {
	window.obj68653_droppedInsideTargetActions_2_runningActionsCount = obj68653_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj68752_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj68752_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj68752").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj68752_content");
			setTimeout(function () {
				window.obj68653_droppedInsideTargetActions_2_runningActionsCount = window.obj68653_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj68653_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj68653_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj68653_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj68653_droppedInsideTargetActions_2_actionGroup4();
}
			}, 1);
		});
	} else {
		$("#obj68752 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj68653_droppedInsideTargetActions_2_runningActionsCount = window.obj68653_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj68653_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj68653_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj68653_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj68653_droppedInsideTargetActions_2_actionGroup4();
}
		}, 1);
	}
}






};
obj68653_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68653_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj68653").trigger("obj68653_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68653) {
				console.warn("de-queueing event obj68653." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68653").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68653_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	


//	action: move
//	target: obj68653 
move_68668();
function move_68668() {
	window.obj68653_droppedInsideTargetActions_2_runningActionsCount = obj68653_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj68653");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 390;
	var moveY = 607;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj68653_droppedInsideTargetActions_2_runningActionsCount = window.obj68653_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj68653_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj68653_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj68653_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj68653_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	});
}



















};
obj68653_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68653_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj68653").trigger("obj68653_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68653) {
				console.warn("de-queueing event obj68653." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68653").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68653_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	















//	action: Run JavaScript
runjs_68669();
function runjs_68669() {
	window.obj68653_droppedInsideTargetActions_2_runningActionsCount = obj68653_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj68762").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj68653_droppedInsideTargetActions_2_runningActionsCount = window.obj68653_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj68653_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj68653_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj68653_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj68653_droppedInsideTargetActions_2_actionGroup6();
}
	}, 1);
}







};
obj68653_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68653_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj68653").trigger("obj68653_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68653) {
				console.warn("de-queueing event obj68653." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68653").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68653_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_68670();
function runjs_68670() {
	window.obj68653_droppedInsideTargetActions_2_runningActionsCount = obj68653_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj68762").css("border-color", "#000000"); $("#obj68762").css("border-width", "1px"); $("#obj68762").css("border-style", "solid"); $("#obj68762").css("border-radius", "10px"); $("#obj68762").css("-webkit-border-radius", "10px"); $("#obj68762").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj68653_droppedInsideTargetActions_2_runningActionsCount = window.obj68653_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj68653_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj68653_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj68653_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj68653_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj68653_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68653_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj68653").trigger("obj68653_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68653) {
				console.warn("de-queueing event obj68653." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68653").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68653_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	

//	action: show 
//	selector: #obj68760
(function(){
	window.obj68653_droppedInsideTargetActions_2_runningActionsCount = obj68653_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj68760";
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
					window.obj68653_droppedInsideTargetActions_2_runningActionsCount = window.obj68653_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj68653_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj68653_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj68653_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj68653_droppedInsideTargetActions_2_actionGroup8();
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
				window.obj68653_droppedInsideTargetActions_2_runningActionsCount = window.obj68653_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj68653_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj68653_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj68653_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj68653_droppedInsideTargetActions_2_actionGroup8();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj68653_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68653_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj68653").trigger("obj68653_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68653) {
				console.warn("de-queueing event obj68653." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68653").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68653_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	












//	action: playAudio
//	target: obj68751 
playAudio_68672();
function playAudio_68672() {
	window.obj68653_droppedInsideTargetActions_2_runningActionsCount = obj68653_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj68751")[0];
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
		    window.obj68653_droppedInsideTargetActions_2_runningActionsCount = window.obj68653_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj68653_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj68653_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj68653_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj68653_droppedInsideTargetActions_2_actionGroup9();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj68653_droppedInsideTargetActions_2_runningActionsCount = window.obj68653_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj68653_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj68653_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj68653_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj68653_droppedInsideTargetActions_2_actionGroup9();
}
	}
}









};
obj68653_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68653_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj68653").trigger("obj68653_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68653) {
				console.warn("de-queueing event obj68653." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68653").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68653_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Switch Text
switchText_68673();
function switchText_68673() {
	window.obj68653_droppedInsideTargetActions_2_runningActionsCount = obj68653_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj68752_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj68752_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj68752").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj68752_content");
			setTimeout(function () {
				window.obj68653_droppedInsideTargetActions_2_runningActionsCount = window.obj68653_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj68653_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj68653_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj68653_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj68653_droppedInsideTargetActions_2_actionGroup10();
}
			}, 1);
		});
	} else {
		$("#obj68752 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj68653_droppedInsideTargetActions_2_runningActionsCount = window.obj68653_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj68653_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj68653_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj68653_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj68653_droppedInsideTargetActions_2_actionGroup10();
}
		}, 1);
	}
}






};
obj68653_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj68653_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj68653").trigger("obj68653_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68653) {
				console.warn("de-queueing event obj68653." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68653").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68653_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	





















};
obj68653_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68653_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj68653").trigger("obj68653_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68653) {
				console.warn("de-queueing event obj68653." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68653").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68653_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_68658();
function runjs_68658() {
	window.obj68653_droppedInsideTargetActions_runningActionsCount = obj68653_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj68770").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj68653_droppedInsideTargetActions_runningActionsCount = window.obj68653_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj68653_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj68653_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj68653_droppedInsideTargetActions_runningActionsCount == 0) {
	obj68653_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj68653_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68653_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj68653").trigger("obj68653_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68653) {
				console.warn("de-queueing event obj68653." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68653").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68653_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_68661();
function switchText_68661() {
	window.obj68653_droppedInsideTargetActions_runningActionsCount = obj68653_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj68752_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj68752_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj68752").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj68752_content");
			setTimeout(function () {
				window.obj68653_droppedInsideTargetActions_runningActionsCount = window.obj68653_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj68653_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj68653_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj68653_droppedInsideTargetActions_runningActionsCount == 0) {
	obj68653_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj68752 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj68653_droppedInsideTargetActions_runningActionsCount = window.obj68653_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj68653_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj68653_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj68653_droppedInsideTargetActions_runningActionsCount == 0) {
	obj68653_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj68653_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68653_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj68653").trigger("obj68653_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68653) {
				console.warn("de-queueing event obj68653." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68653").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68653_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_68659();
function runjs_68659() {
	window.obj68653_droppedInsideTargetActions_runningActionsCount = obj68653_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj68770").css("border-color", "#058E3F"); $("#obj68770").css("border-width", "2px"); $("#obj68770").css("border-style", "solid"); $("#obj68770").css("border-radius", "10px"); $("#obj68770").css("-webkit-border-radius", "10px"); $("#obj68770").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj68653_droppedInsideTargetActions_runningActionsCount = window.obj68653_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj68653_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj68653_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj68653_droppedInsideTargetActions_runningActionsCount == 0) {
	obj68653_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj68653_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68653_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj68653").trigger("obj68653_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68653) {
				console.warn("de-queueing event obj68653." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68653").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68653_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj68768 
hide_68660();
function hide_68660() {
	var selector = "#obj68768";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj68653_droppedInsideTargetActions_runningActionsCount = obj68653_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj68653_droppedInsideTargetActions_runningActionsCount = window.obj68653_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj68653_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj68653_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj68653_droppedInsideTargetActions_runningActionsCount == 0) {
	obj68653_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_68660(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj68653_droppedInsideTargetActions_runningActionsCount = window.obj68653_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj68653_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj68653_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj68653_droppedInsideTargetActions_runningActionsCount == 0) {
	obj68653_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj68653_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68653_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj68653").trigger("obj68653_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68653) {
				console.warn("de-queueing event obj68653." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68653").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68653_droppedInsideTargetActions_activeActionGroupIndex = 4;
	












//	action: playAudio
//	target: obj68749 
playAudio_68662();
function playAudio_68662() {
	window.obj68653_droppedInsideTargetActions_runningActionsCount = obj68653_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj68749")[0];
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
		    window.obj68653_droppedInsideTargetActions_runningActionsCount = window.obj68653_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj68653_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj68653_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj68653_droppedInsideTargetActions_runningActionsCount == 0) {
	obj68653_droppedInsideTargetActions_actionGroup5();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj68653_droppedInsideTargetActions_runningActionsCount = window.obj68653_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj68653_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj68653_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj68653_droppedInsideTargetActions_runningActionsCount == 0) {
	obj68653_droppedInsideTargetActions_actionGroup5();
}
	}
}









};
obj68653_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68653_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj68653").trigger("obj68653_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68653) {
				console.warn("de-queueing event obj68653." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68653").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68653_droppedInsideTargetActions_activeActionGroupIndex = 5;
	















//	action: Switch Text
switchText_90132();
function switchText_90132() {
	window.obj68653_droppedInsideTargetActions_runningActionsCount = obj68653_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj68752_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj68752_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj68752").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj68752_content");
			setTimeout(function () {
				window.obj68653_droppedInsideTargetActions_runningActionsCount = window.obj68653_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj68653_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj68653_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj68653_droppedInsideTargetActions_runningActionsCount == 0) {
	obj68653_droppedInsideTargetActions_actionGroup6();
}
			}, 1);
		});
	} else {
		$("#obj68752 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj68653_droppedInsideTargetActions_runningActionsCount = window.obj68653_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj68653_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj68653_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj68653_droppedInsideTargetActions_runningActionsCount == 0) {
	obj68653_droppedInsideTargetActions_actionGroup6();
}
		}, 1);
	}
}






};
obj68653_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj68653_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj68653").trigger("obj68653_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68653) {
				console.warn("de-queueing event obj68653." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68653").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68653_droppedInsideTargetActions_activeActionGroupIndex = 6;
	





















};
obj68635_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68635_onTap_activeActionGroupIndex = -1;
		$("#obj68635").trigger("obj68635_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68635) {
				console.warn("de-queueing event obj68635." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68635").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68635_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj68635 
hide_68638();
function hide_68638() {
	var selector = "#obj68635";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj68635_onTap_runningActionsCount = obj68635_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj68635_onTap_runningActionsCount = window.obj68635_onTap_runningActionsCount - 1;
if (window.obj68635_onTap_runningActionsCount < 0) {
	window.obj68635_onTap_runningActionsCount = 0;
} else if (window.obj68635_onTap_runningActionsCount == 0) {
	obj68635_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_68638(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj68635_onTap_runningActionsCount = window.obj68635_onTap_runningActionsCount - 1;
if (window.obj68635_onTap_runningActionsCount < 0) {
	window.obj68635_onTap_runningActionsCount = 0;
} else if (window.obj68635_onTap_runningActionsCount == 0) {
	obj68635_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj68625 
stopMovie_68637();
function stopMovie_68637() {
	window.obj68635_onTap_runningActionsCount = obj68635_onTap_runningActionsCount + 1;
	var myVideo = $("#obj68625")[0];
	myVideo.pause();
	window.obj68635_onTap_runningActionsCount = window.obj68635_onTap_runningActionsCount - 1;
if (window.obj68635_onTap_runningActionsCount < 0) {
	window.obj68635_onTap_runningActionsCount = 0;
} else if (window.obj68635_onTap_runningActionsCount == 0) {
	obj68635_onTap_actionGroup1();
}
}
















};
obj68635_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68635_onTap_activeActionGroupIndex = -1;
		$("#obj68635").trigger("obj68635_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68635) {
				console.warn("de-queueing event obj68635." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68635").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68635_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj68627
(function(){
	window.obj68635_onTap_runningActionsCount = obj68635_onTap_runningActionsCount + 1;

	var selector = "#obj68627";
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
					window.obj68635_onTap_runningActionsCount = window.obj68635_onTap_runningActionsCount - 1;
if (window.obj68635_onTap_runningActionsCount < 0) {
	window.obj68635_onTap_runningActionsCount = 0;
} else if (window.obj68635_onTap_runningActionsCount == 0) {
	obj68635_onTap_actionGroup2();
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
				window.obj68635_onTap_runningActionsCount = window.obj68635_onTap_runningActionsCount - 1;
if (window.obj68635_onTap_runningActionsCount < 0) {
	window.obj68635_onTap_runningActionsCount = 0;
} else if (window.obj68635_onTap_runningActionsCount == 0) {
	obj68635_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj68635_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68635_onTap_activeActionGroupIndex = -1;
		$("#obj68635").trigger("obj68635_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68635) {
				console.warn("de-queueing event obj68635." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68635").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68635_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj68625 
move_68640();
function move_68640() {
	window.obj68635_onTap_runningActionsCount = obj68635_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj68625");
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
			window.obj68635_onTap_runningActionsCount = window.obj68635_onTap_runningActionsCount - 1;
if (window.obj68635_onTap_runningActionsCount < 0) {
	window.obj68635_onTap_runningActionsCount = 0;
} else if (window.obj68635_onTap_runningActionsCount == 0) {
	obj68635_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj68635_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj68635_onTap_activeActionGroupIndex = -1;
		$("#obj68635").trigger("obj68635_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68635) {
				console.warn("de-queueing event obj68635." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68635").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68635_onTap_activeActionGroupIndex = 3;
	





















};
obj68627_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68627_onTap_activeActionGroupIndex = -1;
		$("#obj68627").trigger("obj68627_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68627) {
				console.warn("de-queueing event obj68627." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68627").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68627_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj68627 
hide_68630();
function hide_68630() {
	var selector = "#obj68627";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj68627_onTap_runningActionsCount = obj68627_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj68627_onTap_runningActionsCount = window.obj68627_onTap_runningActionsCount - 1;
if (window.obj68627_onTap_runningActionsCount < 0) {
	window.obj68627_onTap_runningActionsCount = 0;
} else if (window.obj68627_onTap_runningActionsCount == 0) {
	obj68627_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_68630(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj68627_onTap_runningActionsCount = window.obj68627_onTap_runningActionsCount - 1;
if (window.obj68627_onTap_runningActionsCount < 0) {
	window.obj68627_onTap_runningActionsCount = 0;
} else if (window.obj68627_onTap_runningActionsCount == 0) {
	obj68627_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj68625 
playPauseMovie_68629();
function playPauseMovie_68629() {
	window.obj68627_onTap_runningActionsCount = obj68627_onTap_runningActionsCount + 1;
	var myVideo = $("#obj68625")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj68627_onTap_runningActionsCount = window.obj68627_onTap_runningActionsCount - 1;
if (window.obj68627_onTap_runningActionsCount < 0) {
	window.obj68627_onTap_runningActionsCount = 0;
} else if (window.obj68627_onTap_runningActionsCount == 0) {
	obj68627_onTap_actionGroup1();
}
}

















};
obj68627_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68627_onTap_activeActionGroupIndex = -1;
		$("#obj68627").trigger("obj68627_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68627) {
				console.warn("de-queueing event obj68627." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68627").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68627_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj68635
(function(){
	window.obj68627_onTap_runningActionsCount = obj68627_onTap_runningActionsCount + 1;

	var selector = "#obj68635";
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
					window.obj68627_onTap_runningActionsCount = window.obj68627_onTap_runningActionsCount - 1;
if (window.obj68627_onTap_runningActionsCount < 0) {
	window.obj68627_onTap_runningActionsCount = 0;
} else if (window.obj68627_onTap_runningActionsCount == 0) {
	obj68627_onTap_actionGroup2();
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
				window.obj68627_onTap_runningActionsCount = window.obj68627_onTap_runningActionsCount - 1;
if (window.obj68627_onTap_runningActionsCount < 0) {
	window.obj68627_onTap_runningActionsCount = 0;
} else if (window.obj68627_onTap_runningActionsCount == 0) {
	obj68627_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj68627_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68627_onTap_activeActionGroupIndex = -1;
		$("#obj68627").trigger("obj68627_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68627) {
				console.warn("de-queueing event obj68627." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68627").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68627_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj68625 
move_68632();
function move_68632() {
	window.obj68627_onTap_runningActionsCount = obj68627_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj68625");
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
			window.obj68627_onTap_runningActionsCount = window.obj68627_onTap_runningActionsCount - 1;
if (window.obj68627_onTap_runningActionsCount < 0) {
	window.obj68627_onTap_runningActionsCount = 0;
} else if (window.obj68627_onTap_runningActionsCount == 0) {
	obj68627_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj68627_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj68627_onTap_activeActionGroupIndex = -1;
		$("#obj68627").trigger("obj68627_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68627) {
				console.warn("de-queueing event obj68627." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68627").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68627_onTap_activeActionGroupIndex = 3;
	





















};
obj87147_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87147_onTap_activeActionGroupIndex = -1;
		$("#obj87147").trigger("obj87147_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87147) {
				console.warn("de-queueing event obj87147." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87147").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87147_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj87152 
stopAudio_87149();
function stopAudio_87149() {
	window.obj87147_onTap_runningActionsCount = obj87147_onTap_runningActionsCount + 1;
	var myAudio = $("#obj87152")[0];
	myAudio.pause();
	window.obj87147_onTap_runningActionsCount = window.obj87147_onTap_runningActionsCount - 1;
if (window.obj87147_onTap_runningActionsCount < 0) {
	window.obj87147_onTap_runningActionsCount = 0;
} else if (window.obj87147_onTap_runningActionsCount == 0) {
	obj87147_onTap_actionGroup1();
}
}








};
obj87147_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87147_onTap_activeActionGroupIndex = -1;
		$("#obj87147").trigger("obj87147_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87147) {
				console.warn("de-queueing event obj87147." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87147").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87147_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj87147 
hide_87150();
function hide_87150() {
	var selector = "#obj87147";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj87147_onTap_runningActionsCount = obj87147_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj87147_onTap_runningActionsCount = window.obj87147_onTap_runningActionsCount - 1;
if (window.obj87147_onTap_runningActionsCount < 0) {
	window.obj87147_onTap_runningActionsCount = 0;
} else if (window.obj87147_onTap_runningActionsCount == 0) {
	obj87147_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_87150(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj87147_onTap_runningActionsCount = window.obj87147_onTap_runningActionsCount - 1;
if (window.obj87147_onTap_runningActionsCount < 0) {
	window.obj87147_onTap_runningActionsCount = 0;
} else if (window.obj87147_onTap_runningActionsCount == 0) {
	obj87147_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj87147_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87147_onTap_activeActionGroupIndex = -1;
		$("#obj87147").trigger("obj87147_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87147) {
				console.warn("de-queueing event obj87147." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87147").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87147_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj87142
(function(){
	window.obj87147_onTap_runningActionsCount = obj87147_onTap_runningActionsCount + 1;

	var selector = "#obj87142";
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
					window.obj87147_onTap_runningActionsCount = window.obj87147_onTap_runningActionsCount - 1;
if (window.obj87147_onTap_runningActionsCount < 0) {
	window.obj87147_onTap_runningActionsCount = 0;
} else if (window.obj87147_onTap_runningActionsCount == 0) {
	obj87147_onTap_actionGroup3();
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
				window.obj87147_onTap_runningActionsCount = window.obj87147_onTap_runningActionsCount - 1;
if (window.obj87147_onTap_runningActionsCount < 0) {
	window.obj87147_onTap_runningActionsCount = 0;
} else if (window.obj87147_onTap_runningActionsCount == 0) {
	obj87147_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj87147_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj87147_onTap_activeActionGroupIndex = -1;
		$("#obj87147").trigger("obj87147_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87147) {
				console.warn("de-queueing event obj87147." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87147").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87147_onTap_activeActionGroupIndex = 3;
	





















};
obj87142_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87142_onTap_activeActionGroupIndex = -1;
		$("#obj87142").trigger("obj87142_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87142) {
				console.warn("de-queueing event obj87142." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87142").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87142_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj87142 
hide_87144();
function hide_87144() {
	var selector = "#obj87142";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj87142_onTap_runningActionsCount = obj87142_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj87142_onTap_runningActionsCount = window.obj87142_onTap_runningActionsCount - 1;
if (window.obj87142_onTap_runningActionsCount < 0) {
	window.obj87142_onTap_runningActionsCount = 0;
} else if (window.obj87142_onTap_runningActionsCount == 0) {
	obj87142_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_87144(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj87142_onTap_runningActionsCount = window.obj87142_onTap_runningActionsCount - 1;
if (window.obj87142_onTap_runningActionsCount < 0) {
	window.obj87142_onTap_runningActionsCount = 0;
} else if (window.obj87142_onTap_runningActionsCount == 0) {
	obj87142_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj87142_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87142_onTap_activeActionGroupIndex = -1;
		$("#obj87142").trigger("obj87142_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87142) {
				console.warn("de-queueing event obj87142." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87142").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87142_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj87147
(function(){
	window.obj87142_onTap_runningActionsCount = obj87142_onTap_runningActionsCount + 1;

	var selector = "#obj87147";
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
					window.obj87142_onTap_runningActionsCount = window.obj87142_onTap_runningActionsCount - 1;
if (window.obj87142_onTap_runningActionsCount < 0) {
	window.obj87142_onTap_runningActionsCount = 0;
} else if (window.obj87142_onTap_runningActionsCount == 0) {
	obj87142_onTap_actionGroup2();
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
				window.obj87142_onTap_runningActionsCount = window.obj87142_onTap_runningActionsCount - 1;
if (window.obj87142_onTap_runningActionsCount < 0) {
	window.obj87142_onTap_runningActionsCount = 0;
} else if (window.obj87142_onTap_runningActionsCount == 0) {
	obj87142_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj87142_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87142_onTap_activeActionGroupIndex = -1;
		$("#obj87142").trigger("obj87142_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87142) {
				console.warn("de-queueing event obj87142." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87142").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87142_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj87152 
playAudio_87146();
function playAudio_87146() {
	window.obj87142_onTap_runningActionsCount = obj87142_onTap_runningActionsCount + 1;
	var myAudio = $("#obj87152")[0];
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
		    window.obj87142_onTap_runningActionsCount = window.obj87142_onTap_runningActionsCount - 1;
if (window.obj87142_onTap_runningActionsCount < 0) {
	window.obj87142_onTap_runningActionsCount = 0;
} else if (window.obj87142_onTap_runningActionsCount == 0) {
	obj87142_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj87142_onTap_runningActionsCount = window.obj87142_onTap_runningActionsCount - 1;
if (window.obj87142_onTap_runningActionsCount < 0) {
	window.obj87142_onTap_runningActionsCount = 0;
} else if (window.obj87142_onTap_runningActionsCount == 0) {
	obj87142_onTap_actionGroup3();
}
	}
}









};
obj87142_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj87142_onTap_activeActionGroupIndex = -1;
		$("#obj87142").trigger("obj87142_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87142) {
				console.warn("de-queueing event obj87142." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87142").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87142_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj68795: Event Touch Down
 *
 */
$("#obj68795").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj68795_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj68795_onTap is still running");
	return;
}
var obj68795_onTap_runningActionsCount = 0;
var obj68795_onTap_loopCount = 0;
obj68795_onTap_actionGroup0();
});










/*
 *
 *   obj68792: Event Touch Down
 *
 */
$("#obj68792").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj68792_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj68792_onTap is still running");
	return;
}
var obj68792_onTap_runningActionsCount = 0;
var obj68792_onTap_loopCount = 0;
obj68792_onTap_actionGroup0();
});










/*
 *
 *   obj68788: Event Touch Down
 *
 */
$("#obj68788").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj68788_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj68788_onTap is still running");
	return;
}
var obj68788_onTap_runningActionsCount = 0;
var obj68788_onTap_loopCount = 0;
obj68788_onTap_actionGroup0();
});



















































































































































































































/*
 *
 *   obj68717: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj68717");
	var winTarget = document.getElementById("obj68717");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj68717").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj68717_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj68717_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj68717_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj68717_onTouchDown is still running");
	return;
}
var obj68717_onTouchDown_runningActionsCount = 0;
var obj68717_onTouchDown_loopCount = 0;
obj68717_onTouchDown_actionGroup0();
});



/*
 *
 *   obj68717: Event SCActionDragDrop68720_droppedOutsideTargetActions
 *
 */
$("#obj68717").bind("SCActionDragDrop68720_droppedOutsideTargetActions", function(event) {
	if (window.obj68717_SCActionDragDrop68720_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj68717_SCActionDragDrop68720_droppedOutsideTargetActions is still running");
	return;
}
var obj68717_SCActionDragDrop68720_droppedOutsideTargetActions_runningActionsCount = 0;
var obj68717_SCActionDragDrop68720_droppedOutsideTargetActions_loopCount = 0;
obj68717_SCActionDragDrop68720_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj68717: Event droppedInsideTargetActions_3
 *
 */
$("#obj68717").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj68717_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj68717_droppedInsideTargetActions_3 is still running");
	return;
}
var obj68717_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj68717_droppedInsideTargetActions_3_loopCount = 0;
obj68717_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj68717: Event droppedInsideTargetActions_2
 *
 */
$("#obj68717").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj68717_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj68717_droppedInsideTargetActions_2 is still running");
	return;
}
var obj68717_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj68717_droppedInsideTargetActions_2_loopCount = 0;
obj68717_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj68717: Event droppedInsideTargetActions
 *
 */
$("#obj68717").bind("droppedInsideTargetActions", function(event) {
	if (window.obj68717_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj68717_droppedInsideTargetActions is still running");
	return;
}
var obj68717_droppedInsideTargetActions_runningActionsCount = 0;
var obj68717_droppedInsideTargetActions_loopCount = 0;
obj68717_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj68685: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj68685");
	var winTarget = document.getElementById("obj68685");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj68685").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj68685_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj68685_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj68685_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj68685_onTouchDown is still running");
	return;
}
var obj68685_onTouchDown_runningActionsCount = 0;
var obj68685_onTouchDown_loopCount = 0;
obj68685_onTouchDown_actionGroup0();
});



/*
 *
 *   obj68685: Event SCActionDragDrop68688_droppedOutsideTargetActions
 *
 */
$("#obj68685").bind("SCActionDragDrop68688_droppedOutsideTargetActions", function(event) {
	if (window.obj68685_SCActionDragDrop68688_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj68685_SCActionDragDrop68688_droppedOutsideTargetActions is still running");
	return;
}
var obj68685_SCActionDragDrop68688_droppedOutsideTargetActions_runningActionsCount = 0;
var obj68685_SCActionDragDrop68688_droppedOutsideTargetActions_loopCount = 0;
obj68685_SCActionDragDrop68688_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj68685: Event droppedInsideTargetActions_3
 *
 */
$("#obj68685").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj68685_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj68685_droppedInsideTargetActions_3 is still running");
	return;
}
var obj68685_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj68685_droppedInsideTargetActions_3_loopCount = 0;
obj68685_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj68685: Event droppedInsideTargetActions_2
 *
 */
$("#obj68685").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj68685_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj68685_droppedInsideTargetActions_2 is still running");
	return;
}
var obj68685_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj68685_droppedInsideTargetActions_2_loopCount = 0;
obj68685_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj68685: Event droppedInsideTargetActions
 *
 */
$("#obj68685").bind("droppedInsideTargetActions", function(event) {
	if (window.obj68685_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj68685_droppedInsideTargetActions is still running");
	return;
}
var obj68685_droppedInsideTargetActions_runningActionsCount = 0;
var obj68685_droppedInsideTargetActions_loopCount = 0;
obj68685_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj68653: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj68653");
	var winTarget = document.getElementById("obj68653");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj68653").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj68653_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj68653_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj68653_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj68653_onTouchDown is still running");
	return;
}
var obj68653_onTouchDown_runningActionsCount = 0;
var obj68653_onTouchDown_loopCount = 0;
obj68653_onTouchDown_actionGroup0();
});



/*
 *
 *   obj68653: Event SCActionDragDrop68656_droppedOutsideTargetActions
 *
 */
$("#obj68653").bind("SCActionDragDrop68656_droppedOutsideTargetActions", function(event) {
	if (window.obj68653_SCActionDragDrop68656_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj68653_SCActionDragDrop68656_droppedOutsideTargetActions is still running");
	return;
}
var obj68653_SCActionDragDrop68656_droppedOutsideTargetActions_runningActionsCount = 0;
var obj68653_SCActionDragDrop68656_droppedOutsideTargetActions_loopCount = 0;
obj68653_SCActionDragDrop68656_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj68653: Event droppedInsideTargetActions_3
 *
 */
$("#obj68653").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj68653_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj68653_droppedInsideTargetActions_3 is still running");
	return;
}
var obj68653_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj68653_droppedInsideTargetActions_3_loopCount = 0;
obj68653_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj68653: Event droppedInsideTargetActions_2
 *
 */
$("#obj68653").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj68653_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj68653_droppedInsideTargetActions_2 is still running");
	return;
}
var obj68653_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj68653_droppedInsideTargetActions_2_loopCount = 0;
obj68653_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj68653: Event droppedInsideTargetActions
 *
 */
$("#obj68653").bind("droppedInsideTargetActions", function(event) {
	if (window.obj68653_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj68653_droppedInsideTargetActions is still running");
	return;
}
var obj68653_droppedInsideTargetActions_runningActionsCount = 0;
var obj68653_droppedInsideTargetActions_loopCount = 0;
obj68653_droppedInsideTargetActions_actionGroup0();
});





/*
 *
 *   obj68635: Event Touch Down
 *
 */
$("#obj68635").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj68635_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj68635_onTap is still running");
	return;
}
var obj68635_onTap_runningActionsCount = 0;
var obj68635_onTap_loopCount = 0;
obj68635_onTap_actionGroup0();
});










/*
 *
 *   obj68627: Event Touch Down
 *
 */
$("#obj68627").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj68627_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj68627_onTap is still running");
	return;
}
var obj68627_onTap_runningActionsCount = 0;
var obj68627_onTap_loopCount = 0;
obj68627_onTap_actionGroup0();
});










/*
 *
 *   obj87147: Event Touch Down
 *
 */
$("#obj87147").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj87147_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj87147_onTap is still running");
	return;
}
var obj87147_onTap_runningActionsCount = 0;
var obj87147_onTap_loopCount = 0;
obj87147_onTap_actionGroup0();
});










/*
 *
 *   obj87142: Event Touch Down
 *
 */
$("#obj87142").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj87142_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj87142_onTap is still running");
	return;
}
var obj87142_onTap_runningActionsCount = 0;
var obj87142_onTap_loopCount = 0;
obj87142_onTap_actionGroup0();
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
	
$("#obj68798").trigger('SCEventShow');
$("#obj68795").trigger('SCEventShow');
$("#obj68792").trigger('SCEventShow');
$("#obj68788").trigger('SCEventShow');
$("#obj68786").trigger('SCEventShow');
$("#obj68784").trigger('SCEventShow');
$("#obj68782").trigger('SCEventShow');
$("#obj68780").trigger('SCEventShow');
$("#obj68778").trigger('SCEventShow');
$("#obj68776").trigger('SCEventShow');
$("#obj68774").trigger('SCEventShow');
$("#obj68772").trigger('SCEventShow');
$("#obj68770").trigger('SCEventShow');
$("#obj68768").trigger('SCEventShow');
$("#obj68766").trigger('SCEventShow');
$("#obj68764").trigger('SCEventShow');
$("#obj68762").trigger('SCEventShow');
$("#obj68760").trigger('SCEventShow');
$("#obj68758").trigger('SCEventShow');
$("#obj68756").trigger('SCEventShow');
$("#obj68754").trigger('SCEventShow');
$("#obj68752").trigger('SCEventShow');
$("#obj68751").trigger('SCEventShow');
$("#obj68749").trigger('SCEventShow');
$("#obj68717").trigger('SCEventShow');
$("#obj68685").trigger('SCEventShow');
$("#obj68653").trigger('SCEventShow');
$("#obj68635").trigger('SCEventShow');
$("#obj68627").trigger('SCEventShow');
$("#obj87147").trigger('SCEventShow');
$("#obj87142").trigger('SCEventShow');
$("#obj87152").trigger('SCEventShow');
$("#obj94699").trigger('SCEventShow');
$("#obj68625").trigger('SCEventShow');
	
});