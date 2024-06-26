pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 22683;
pubcoder.page.title = pubcoder.page.title || "88";
pubcoder.page.number = pubcoder.page.number || 88;
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
var obj78959_onTap_activeActionGroupIndex = -1;
var obj78959_onTap_runningActionsCount = 0;
var obj78959_onTap_loopCount = 0;
var obj78956_onTap_activeActionGroupIndex = -1;
var obj78956_onTap_runningActionsCount = 0;
var obj78956_onTap_loopCount = 0;
var obj78952_onTap_activeActionGroupIndex = -1;
var obj78952_onTap_runningActionsCount = 0;
var obj78952_onTap_loopCount = 0;
var obj78878_onDrag_activeActionGroupIndex = -1;
var obj78878_onDrag_runningActionsCount = 0;
var obj78878_onDrag_loopCount = 0;
var obj78878_onTouchDown_activeActionGroupIndex = -1;
var obj78878_onTouchDown_runningActionsCount = 0;
var obj78878_onTouchDown_loopCount = 0;
var obj78878_SCActionDragDrop78881_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj78878_SCActionDragDrop78881_droppedOutsideTargetActions_runningActionsCount = 0;
var obj78878_SCActionDragDrop78881_droppedOutsideTargetActions_loopCount = 0;
var obj78878_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj78878_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj78878_droppedInsideTargetActions_3_loopCount = 0;
var obj78878_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj78878_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj78878_droppedInsideTargetActions_2_loopCount = 0;
var obj78878_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj78878_droppedInsideTargetActions_runningActionsCount = 0;
var obj78878_droppedInsideTargetActions_loopCount = 0;
var obj78838_onDrag_activeActionGroupIndex = -1;
var obj78838_onDrag_runningActionsCount = 0;
var obj78838_onDrag_loopCount = 0;
var obj78838_onTouchDown_activeActionGroupIndex = -1;
var obj78838_onTouchDown_runningActionsCount = 0;
var obj78838_onTouchDown_loopCount = 0;
var obj78838_SCActionDragDrop78841_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj78838_SCActionDragDrop78841_droppedOutsideTargetActions_runningActionsCount = 0;
var obj78838_SCActionDragDrop78841_droppedOutsideTargetActions_loopCount = 0;
var obj78838_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj78838_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj78838_droppedInsideTargetActions_3_loopCount = 0;
var obj78838_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj78838_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj78838_droppedInsideTargetActions_2_loopCount = 0;
var obj78838_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj78838_droppedInsideTargetActions_runningActionsCount = 0;
var obj78838_droppedInsideTargetActions_loopCount = 0;
var obj78798_onDrag_activeActionGroupIndex = -1;
var obj78798_onDrag_runningActionsCount = 0;
var obj78798_onDrag_loopCount = 0;
var obj78798_onTouchDown_activeActionGroupIndex = -1;
var obj78798_onTouchDown_runningActionsCount = 0;
var obj78798_onTouchDown_loopCount = 0;
var obj78798_SCActionDragDrop78801_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj78798_SCActionDragDrop78801_droppedOutsideTargetActions_runningActionsCount = 0;
var obj78798_SCActionDragDrop78801_droppedOutsideTargetActions_loopCount = 0;
var obj78798_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj78798_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj78798_droppedInsideTargetActions_3_loopCount = 0;
var obj78798_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj78798_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj78798_droppedInsideTargetActions_2_loopCount = 0;
var obj78798_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj78798_droppedInsideTargetActions_runningActionsCount = 0;
var obj78798_droppedInsideTargetActions_loopCount = 0;
var obj78780_onTap_activeActionGroupIndex = -1;
var obj78780_onTap_runningActionsCount = 0;
var obj78780_onTap_loopCount = 0;
var obj78772_onTap_activeActionGroupIndex = -1;
var obj78772_onTap_runningActionsCount = 0;
var obj78772_onTap_loopCount = 0;
var obj87925_onTap_activeActionGroupIndex = -1;
var obj87925_onTap_runningActionsCount = 0;
var obj87925_onTap_loopCount = 0;
var obj87920_onTap_activeActionGroupIndex = -1;
var obj87920_onTap_runningActionsCount = 0;
var obj87920_onTap_loopCount = 0;
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
		
obj78959_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78959_onTap_activeActionGroupIndex = -1;
		$("#obj78959").trigger("obj78959_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78959) {
				console.warn("de-queueing event obj78959." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78959").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78959_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_78961();
function goToPage_78961() {
	window.obj78959_onTap_runningActionsCount = obj78959_onTap_runningActionsCount + 1;
	$("#anchor517")[0].click();
	window.obj78959_onTap_runningActionsCount = window.obj78959_onTap_runningActionsCount - 1;
if (window.obj78959_onTap_runningActionsCount < 0) {
	window.obj78959_onTap_runningActionsCount = 0;
} else if (window.obj78959_onTap_runningActionsCount == 0) {
	obj78959_onTap_actionGroup1();
}
}





















};
obj78959_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj78959_onTap_activeActionGroupIndex = -1;
		$("#obj78959").trigger("obj78959_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78959) {
				console.warn("de-queueing event obj78959." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78959").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78959_onTap_activeActionGroupIndex = 1;
	





















};
obj78956_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78956_onTap_activeActionGroupIndex = -1;
		$("#obj78956").trigger("obj78956_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78956) {
				console.warn("de-queueing event obj78956." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78956").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78956_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_78958();
function goToPage_78958() {
	window.obj78956_onTap_runningActionsCount = obj78956_onTap_runningActionsCount + 1;
	$("#anchor518")[0].click();
	window.obj78956_onTap_runningActionsCount = window.obj78956_onTap_runningActionsCount - 1;
if (window.obj78956_onTap_runningActionsCount < 0) {
	window.obj78956_onTap_runningActionsCount = 0;
} else if (window.obj78956_onTap_runningActionsCount == 0) {
	obj78956_onTap_actionGroup1();
}
}





















};
obj78956_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj78956_onTap_activeActionGroupIndex = -1;
		$("#obj78956").trigger("obj78956_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78956) {
				console.warn("de-queueing event obj78956." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78956").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78956_onTap_activeActionGroupIndex = 1;
	





















};
obj78952_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78952_onTap_activeActionGroupIndex = -1;
		$("#obj78952").trigger("obj78952_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78952) {
				console.warn("de-queueing event obj78952." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78952").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78952_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_78954();
function goToPage_78954() {
	window.obj78952_onTap_runningActionsCount = obj78952_onTap_runningActionsCount + 1;
	$("#anchor519")[0].click();
	window.obj78952_onTap_runningActionsCount = window.obj78952_onTap_runningActionsCount - 1;
if (window.obj78952_onTap_runningActionsCount < 0) {
	window.obj78952_onTap_runningActionsCount = 0;
} else if (window.obj78952_onTap_runningActionsCount == 0) {
	obj78952_onTap_actionGroup1();
}
}





















};
obj78952_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj78952_onTap_activeActionGroupIndex = -1;
		$("#obj78952").trigger("obj78952_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78952) {
				console.warn("de-queueing event obj78952." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78952").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78952_onTap_activeActionGroupIndex = 1;
	





















};
obj78878_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78878_onTouchDown_activeActionGroupIndex = -1;
		$("#obj78878").trigger("obj78878_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78878) {
				console.warn("de-queueing event obj78878." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78878").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78878_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj78878");
//	action: dragDrop
//	target: obj78878 
dragDrop_78881();
function dragDrop_78881() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj78878_onTouchDown_runningActionsCount = obj78878_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj78878');
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
	  	containerNode = $('#obj78942');
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
    	window.obj78878_onTouchDown_runningActionsCount = window.obj78878_onTouchDown_runningActionsCount - 1;
if (window.obj78878_onTouchDown_runningActionsCount < 0) {
	window.obj78878_onTouchDown_runningActionsCount = 0;
} else if (window.obj78878_onTouchDown_runningActionsCount == 0) {
	obj78878_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj78936","#obj78940","#obj78938");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_78881 = false;
    	var dropped_id_78881;
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
					dropped_78881 = true;
					dropped_id_78881 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_78881) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj78878").trigger('SCActionDragDrop78881_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj78878_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj78878_onTouchDown_activeActionGroupIndex = -1;
		$("#obj78878").trigger("obj78878_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78878) {
				console.warn("de-queueing event obj78878." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78878").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78878_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj78878_SCActionDragDrop78881_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78878_SCActionDragDrop78881_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj78878").trigger("obj78878_SCActionDragDrop78881_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78878) {
				console.warn("de-queueing event obj78878." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78878").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78878_SCActionDragDrop78881_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj78878 
move_92370();
function move_92370() {
	window.obj78878_SCActionDragDrop78881_droppedOutsideTargetActions_runningActionsCount = obj78878_SCActionDragDrop78881_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj78878");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 388;
	var moveY = 605;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj78878_SCActionDragDrop78881_droppedOutsideTargetActions_runningActionsCount = window.obj78878_SCActionDragDrop78881_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj78878_SCActionDragDrop78881_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj78878_SCActionDragDrop78881_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj78878_SCActionDragDrop78881_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj78878_SCActionDragDrop78881_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj78878_SCActionDragDrop78881_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj78878_SCActionDragDrop78881_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj78878").trigger("obj78878_SCActionDragDrop78881_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78878) {
				console.warn("de-queueing event obj78878." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78878").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78878_SCActionDragDrop78881_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj78878_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78878_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj78878").trigger("obj78878_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78878) {
				console.warn("de-queueing event obj78878." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78878").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78878_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_78899();
function runjs_78899() {
	window.obj78878_droppedInsideTargetActions_3_runningActionsCount = obj78878_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj78938").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj78878_droppedInsideTargetActions_3_runningActionsCount = window.obj78878_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj78878_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj78878_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj78878_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj78878_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj78878_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78878_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj78878").trigger("obj78878_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78878) {
				console.warn("de-queueing event obj78878." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78878").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78878_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_78900();
function runjs_78900() {
	window.obj78878_droppedInsideTargetActions_3_runningActionsCount = obj78878_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj78938").css("border-color", "#C00000"); $("#obj78938").css("border-width", "2px"); $("#obj78938").css("border-style", "solid"); $("#obj78938").css("border-radius", "10px"); $("#obj78938").css("-webkit-border-radius", "10px"); $("#obj78938").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj78878_droppedInsideTargetActions_3_runningActionsCount = window.obj78878_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj78878_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj78878_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj78878_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj78878_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj78878_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78878_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj78878").trigger("obj78878_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78878) {
				console.warn("de-queueing event obj78878." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78878").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78878_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	















//	action: Switch Text
switchText_78901();
function switchText_78901() {
	window.obj78878_droppedInsideTargetActions_3_runningActionsCount = obj78878_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj78928_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj78928_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj78928").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj78928_content");
			setTimeout(function () {
				window.obj78878_droppedInsideTargetActions_3_runningActionsCount = window.obj78878_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj78878_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj78878_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj78878_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj78878_droppedInsideTargetActions_3_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj78928 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj78878_droppedInsideTargetActions_3_runningActionsCount = window.obj78878_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj78878_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj78878_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj78878_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj78878_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
	}
}






};
obj78878_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78878_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj78878").trigger("obj78878_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78878) {
				console.warn("de-queueing event obj78878." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78878").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78878_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	


//	action: move
//	target: obj78878 
move_78902();
function move_78902() {
	window.obj78878_droppedInsideTargetActions_3_runningActionsCount = obj78878_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj78878");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 388;
	var moveY = 605;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj78878_droppedInsideTargetActions_3_runningActionsCount = window.obj78878_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj78878_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj78878_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj78878_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj78878_droppedInsideTargetActions_3_actionGroup4();
}
		}, 1);
	});
}



















};
obj78878_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78878_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj78878").trigger("obj78878_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78878) {
				console.warn("de-queueing event obj78878." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78878").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78878_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_78903();
function runjs_78903() {
	window.obj78878_droppedInsideTargetActions_3_runningActionsCount = obj78878_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj78938").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj78878_droppedInsideTargetActions_3_runningActionsCount = window.obj78878_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj78878_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj78878_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj78878_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj78878_droppedInsideTargetActions_3_actionGroup5();
}
	}, 1);
}







};
obj78878_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78878_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj78878").trigger("obj78878_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78878) {
				console.warn("de-queueing event obj78878." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78878").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78878_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	















//	action: Run JavaScript
runjs_78904();
function runjs_78904() {
	window.obj78878_droppedInsideTargetActions_3_runningActionsCount = obj78878_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj78938").css("border-color", "#000000"); $("#obj78938").css("border-width", "1px"); $("#obj78938").css("border-style", "solid"); $("#obj78938").css("border-radius", "15px"); $("#obj78938").css("-webkit-border-radius", "15px"); $("#obj78938").css("-moz-border-radius", "15px");
	
	setTimeout(function() {
		window.obj78878_droppedInsideTargetActions_3_runningActionsCount = window.obj78878_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj78878_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj78878_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj78878_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj78878_droppedInsideTargetActions_3_actionGroup6();
}
	}, 1);
}







};
obj78878_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78878_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj78878").trigger("obj78878_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78878) {
				console.warn("de-queueing event obj78878." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78878").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78878_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_78905();
function runjs_78905() {
	window.obj78878_droppedInsideTargetActions_3_runningActionsCount = obj78878_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj78878").css("border-color", "rgba(0,0,0,0)"); $("#obj78878").css("border-width", "0px"); $("#obj78878").css("border-style", "solid"); $("#obj78878").css("border-radius", "20px"); $("#obj78878").css("-webkit-border-radius", "20px"); $("#obj78878").css("-moz-border-radius", "20px"); $("#obj78878_img").css("top", "0px").css("left", "0px");
	
	setTimeout(function() {
		window.obj78878_droppedInsideTargetActions_3_runningActionsCount = window.obj78878_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj78878_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj78878_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj78878_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj78878_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj78878_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78878_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj78878").trigger("obj78878_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78878) {
				console.warn("de-queueing event obj78878." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78878").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78878_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Switch Text
switchText_78906();
function switchText_78906() {
	window.obj78878_droppedInsideTargetActions_3_runningActionsCount = obj78878_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj78928_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj78928_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj78928").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj78928_content");
			setTimeout(function () {
				window.obj78878_droppedInsideTargetActions_3_runningActionsCount = window.obj78878_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj78878_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj78878_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj78878_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj78878_droppedInsideTargetActions_3_actionGroup8();
}
			}, 1);
		});
	} else {
		$("#obj78928 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj78878_droppedInsideTargetActions_3_runningActionsCount = window.obj78878_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj78878_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj78878_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj78878_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj78878_droppedInsideTargetActions_3_actionGroup8();
}
		}, 1);
	}
}






};
obj78878_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78878_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj78878").trigger("obj78878_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78878) {
				console.warn("de-queueing event obj78878." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78878").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78878_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	












//	action: playAudio
//	target: obj78927 
playAudio_78907();
function playAudio_78907() {
	window.obj78878_droppedInsideTargetActions_3_runningActionsCount = obj78878_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj78927")[0];
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
		    window.obj78878_droppedInsideTargetActions_3_runningActionsCount = window.obj78878_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj78878_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj78878_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj78878_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj78878_droppedInsideTargetActions_3_actionGroup9();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj78878_droppedInsideTargetActions_3_runningActionsCount = window.obj78878_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj78878_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj78878_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj78878_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj78878_droppedInsideTargetActions_3_actionGroup9();
}
	}
}









};
obj78878_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj78878_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj78878").trigger("obj78878_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78878) {
				console.warn("de-queueing event obj78878." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78878").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78878_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	





















};
obj78878_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78878_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj78878").trigger("obj78878_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78878) {
				console.warn("de-queueing event obj78878." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78878").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78878_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_78889();
function runjs_78889() {
	window.obj78878_droppedInsideTargetActions_2_runningActionsCount = obj78878_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj78940").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj78878_droppedInsideTargetActions_2_runningActionsCount = window.obj78878_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj78878_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj78878_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj78878_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj78878_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj78878_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78878_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj78878").trigger("obj78878_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78878) {
				console.warn("de-queueing event obj78878." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78878").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78878_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_78890();
function runjs_78890() {
	window.obj78878_droppedInsideTargetActions_2_runningActionsCount = obj78878_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj78940").css("border-color", "#C00000"); $("#obj78940").css("border-width", "2px"); $("#obj78940").css("border-style", "solid"); $("#obj78940").css("border-radius", "10px"); $("#obj78940").css("-webkit-border-radius", "10px"); $("#obj78940").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj78878_droppedInsideTargetActions_2_runningActionsCount = window.obj78878_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj78878_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj78878_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj78878_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj78878_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj78878_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78878_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj78878").trigger("obj78878_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78878) {
				console.warn("de-queueing event obj78878." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78878").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78878_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	















//	action: Switch Text
switchText_78891();
function switchText_78891() {
	window.obj78878_droppedInsideTargetActions_2_runningActionsCount = obj78878_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj78928_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj78928_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj78928").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj78928_content");
			setTimeout(function () {
				window.obj78878_droppedInsideTargetActions_2_runningActionsCount = window.obj78878_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj78878_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj78878_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj78878_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj78878_droppedInsideTargetActions_2_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj78928 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj78878_droppedInsideTargetActions_2_runningActionsCount = window.obj78878_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj78878_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj78878_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj78878_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj78878_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
	}
}






};
obj78878_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78878_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj78878").trigger("obj78878_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78878) {
				console.warn("de-queueing event obj78878." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78878").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78878_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	


//	action: move
//	target: obj78878 
move_78892();
function move_78892() {
	window.obj78878_droppedInsideTargetActions_2_runningActionsCount = obj78878_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj78878");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 388;
	var moveY = 605;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj78878_droppedInsideTargetActions_2_runningActionsCount = window.obj78878_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj78878_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj78878_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj78878_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj78878_droppedInsideTargetActions_2_actionGroup4();
}
		}, 1);
	});
}



















};
obj78878_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78878_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj78878").trigger("obj78878_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78878) {
				console.warn("de-queueing event obj78878." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78878").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78878_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_78893();
function runjs_78893() {
	window.obj78878_droppedInsideTargetActions_2_runningActionsCount = obj78878_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj78940").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj78878_droppedInsideTargetActions_2_runningActionsCount = window.obj78878_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj78878_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj78878_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj78878_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj78878_droppedInsideTargetActions_2_actionGroup5();
}
	}, 1);
}







};
obj78878_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78878_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj78878").trigger("obj78878_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78878) {
				console.warn("de-queueing event obj78878." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78878").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78878_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	















//	action: Run JavaScript
runjs_78894();
function runjs_78894() {
	window.obj78878_droppedInsideTargetActions_2_runningActionsCount = obj78878_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj78940").css("border-color", "#000000"); $("#obj78940").css("border-width", "1px"); $("#obj78940").css("border-style", "solid"); $("#obj78940").css("border-radius", "15px"); $("#obj78940").css("-webkit-border-radius", "15px"); $("#obj78940").css("-moz-border-radius", "15px");
	
	setTimeout(function() {
		window.obj78878_droppedInsideTargetActions_2_runningActionsCount = window.obj78878_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj78878_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj78878_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj78878_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj78878_droppedInsideTargetActions_2_actionGroup6();
}
	}, 1);
}







};
obj78878_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78878_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj78878").trigger("obj78878_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78878) {
				console.warn("de-queueing event obj78878." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78878").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78878_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_78895();
function runjs_78895() {
	window.obj78878_droppedInsideTargetActions_2_runningActionsCount = obj78878_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj78878").css("border-color", "rgba(0,0,0,0)"); $("#obj78878").css("border-width", "0px"); $("#obj78878").css("border-style", "solid"); $("#obj78878").css("border-radius", "20px"); $("#obj78878").css("-webkit-border-radius", "20px"); $("#obj78878").css("-moz-border-radius", "20px"); $("#obj78878_img").css("top", "0px").css("left", "0px");
	
	setTimeout(function() {
		window.obj78878_droppedInsideTargetActions_2_runningActionsCount = window.obj78878_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj78878_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj78878_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj78878_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj78878_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj78878_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78878_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj78878").trigger("obj78878_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78878) {
				console.warn("de-queueing event obj78878." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78878").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78878_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Switch Text
switchText_78896();
function switchText_78896() {
	window.obj78878_droppedInsideTargetActions_2_runningActionsCount = obj78878_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj78928_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj78928_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj78928").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj78928_content");
			setTimeout(function () {
				window.obj78878_droppedInsideTargetActions_2_runningActionsCount = window.obj78878_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj78878_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj78878_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj78878_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj78878_droppedInsideTargetActions_2_actionGroup8();
}
			}, 1);
		});
	} else {
		$("#obj78928 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj78878_droppedInsideTargetActions_2_runningActionsCount = window.obj78878_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj78878_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj78878_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj78878_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj78878_droppedInsideTargetActions_2_actionGroup8();
}
		}, 1);
	}
}






};
obj78878_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78878_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj78878").trigger("obj78878_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78878) {
				console.warn("de-queueing event obj78878." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78878").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78878_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	












//	action: playAudio
//	target: obj78927 
playAudio_78897();
function playAudio_78897() {
	window.obj78878_droppedInsideTargetActions_2_runningActionsCount = obj78878_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj78927")[0];
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
		    window.obj78878_droppedInsideTargetActions_2_runningActionsCount = window.obj78878_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj78878_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj78878_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj78878_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj78878_droppedInsideTargetActions_2_actionGroup9();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj78878_droppedInsideTargetActions_2_runningActionsCount = window.obj78878_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj78878_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj78878_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj78878_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj78878_droppedInsideTargetActions_2_actionGroup9();
}
	}
}









};
obj78878_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj78878_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj78878").trigger("obj78878_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78878) {
				console.warn("de-queueing event obj78878." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78878").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78878_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	





















};
obj78878_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78878_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj78878").trigger("obj78878_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78878) {
				console.warn("de-queueing event obj78878." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78878").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78878_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_78883();
function runjs_78883() {
	window.obj78878_droppedInsideTargetActions_runningActionsCount = obj78878_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj78936").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj78878_droppedInsideTargetActions_runningActionsCount = window.obj78878_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj78878_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj78878_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj78878_droppedInsideTargetActions_runningActionsCount == 0) {
	obj78878_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj78878_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78878_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj78878").trigger("obj78878_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78878) {
				console.warn("de-queueing event obj78878." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78878").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78878_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_78886();
function switchText_78886() {
	window.obj78878_droppedInsideTargetActions_runningActionsCount = obj78878_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj78928_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj78928_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj78928").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj78928_content");
			setTimeout(function () {
				window.obj78878_droppedInsideTargetActions_runningActionsCount = window.obj78878_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj78878_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj78878_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj78878_droppedInsideTargetActions_runningActionsCount == 0) {
	obj78878_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj78928 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj78878_droppedInsideTargetActions_runningActionsCount = window.obj78878_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj78878_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj78878_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj78878_droppedInsideTargetActions_runningActionsCount == 0) {
	obj78878_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj78878_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78878_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj78878").trigger("obj78878_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78878) {
				console.warn("de-queueing event obj78878." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78878").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78878_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_78884();
function runjs_78884() {
	window.obj78878_droppedInsideTargetActions_runningActionsCount = obj78878_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj78936").css("border-color", "#058E3F"); $("#obj78936").css("border-width", "2px"); $("#obj78936").css("border-style", "solid"); $("#obj78936").css("border-radius", "10px"); $("#obj78936").css("-webkit-border-radius", "10px"); $("#obj78936").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj78878_droppedInsideTargetActions_runningActionsCount = window.obj78878_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj78878_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj78878_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj78878_droppedInsideTargetActions_runningActionsCount == 0) {
	obj78878_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj78878_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78878_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj78878").trigger("obj78878_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78878) {
				console.warn("de-queueing event obj78878." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78878").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78878_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj78930 
hide_78885();
function hide_78885() {
	var selector = "#obj78930";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj78878_droppedInsideTargetActions_runningActionsCount = obj78878_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj78878_droppedInsideTargetActions_runningActionsCount = window.obj78878_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj78878_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj78878_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj78878_droppedInsideTargetActions_runningActionsCount == 0) {
	obj78878_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_78885(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj78878_droppedInsideTargetActions_runningActionsCount = window.obj78878_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj78878_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj78878_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj78878_droppedInsideTargetActions_runningActionsCount == 0) {
	obj78878_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj78878_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78878_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj78878").trigger("obj78878_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78878) {
				console.warn("de-queueing event obj78878." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78878").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78878_droppedInsideTargetActions_activeActionGroupIndex = 4;
	












//	action: playAudio
//	target: obj78926 
playAudio_78887();
function playAudio_78887() {
	window.obj78878_droppedInsideTargetActions_runningActionsCount = obj78878_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj78926")[0];
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
		    window.obj78878_droppedInsideTargetActions_runningActionsCount = window.obj78878_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj78878_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj78878_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj78878_droppedInsideTargetActions_runningActionsCount == 0) {
	obj78878_droppedInsideTargetActions_actionGroup5();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj78878_droppedInsideTargetActions_runningActionsCount = window.obj78878_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj78878_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj78878_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj78878_droppedInsideTargetActions_runningActionsCount == 0) {
	obj78878_droppedInsideTargetActions_actionGroup5();
}
	}
}









};
obj78878_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78878_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj78878").trigger("obj78878_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78878) {
				console.warn("de-queueing event obj78878." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78878").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78878_droppedInsideTargetActions_activeActionGroupIndex = 5;
	















//	action: Switch Text
switchText_90310();
function switchText_90310() {
	window.obj78878_droppedInsideTargetActions_runningActionsCount = obj78878_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj78928_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj78928_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj78928").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj78928_content");
			setTimeout(function () {
				window.obj78878_droppedInsideTargetActions_runningActionsCount = window.obj78878_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj78878_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj78878_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj78878_droppedInsideTargetActions_runningActionsCount == 0) {
	obj78878_droppedInsideTargetActions_actionGroup6();
}
			}, 1);
		});
	} else {
		$("#obj78928 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj78878_droppedInsideTargetActions_runningActionsCount = window.obj78878_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj78878_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj78878_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj78878_droppedInsideTargetActions_runningActionsCount == 0) {
	obj78878_droppedInsideTargetActions_actionGroup6();
}
		}, 1);
	}
}






};
obj78878_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj78878_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj78878").trigger("obj78878_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78878) {
				console.warn("de-queueing event obj78878." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78878").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78878_droppedInsideTargetActions_activeActionGroupIndex = 6;
	





















};
obj78838_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78838_onTouchDown_activeActionGroupIndex = -1;
		$("#obj78838").trigger("obj78838_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78838) {
				console.warn("de-queueing event obj78838." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78838").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78838_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj78838");
//	action: dragDrop
//	target: obj78838 
dragDrop_78841();
function dragDrop_78841() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj78838_onTouchDown_runningActionsCount = obj78838_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj78838');
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
	  	containerNode = $('#obj78942');
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
    	window.obj78838_onTouchDown_runningActionsCount = window.obj78838_onTouchDown_runningActionsCount - 1;
if (window.obj78838_onTouchDown_runningActionsCount < 0) {
	window.obj78838_onTouchDown_runningActionsCount = 0;
} else if (window.obj78838_onTouchDown_runningActionsCount == 0) {
	obj78838_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj78938","#obj78940","#obj78936");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_78841 = false;
    	var dropped_id_78841;
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
					dropped_78841 = true;
					dropped_id_78841 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_78841) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj78838").trigger('SCActionDragDrop78841_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj78838_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj78838_onTouchDown_activeActionGroupIndex = -1;
		$("#obj78838").trigger("obj78838_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78838) {
				console.warn("de-queueing event obj78838." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78838").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78838_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj78838_SCActionDragDrop78841_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78838_SCActionDragDrop78841_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj78838").trigger("obj78838_SCActionDragDrop78841_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78838) {
				console.warn("de-queueing event obj78838." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78838").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78838_SCActionDragDrop78841_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj78838 
move_92366();
function move_92366() {
	window.obj78838_SCActionDragDrop78841_droppedOutsideTargetActions_runningActionsCount = obj78838_SCActionDragDrop78841_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj78838");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 86;
	var moveY = 605;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj78838_SCActionDragDrop78841_droppedOutsideTargetActions_runningActionsCount = window.obj78838_SCActionDragDrop78841_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj78838_SCActionDragDrop78841_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj78838_SCActionDragDrop78841_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj78838_SCActionDragDrop78841_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj78838_SCActionDragDrop78841_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj78838_SCActionDragDrop78841_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj78838_SCActionDragDrop78841_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj78838").trigger("obj78838_SCActionDragDrop78841_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78838) {
				console.warn("de-queueing event obj78838." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78838").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78838_SCActionDragDrop78841_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj78838_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78838_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj78838").trigger("obj78838_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78838) {
				console.warn("de-queueing event obj78838." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78838").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78838_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_78859();
function runjs_78859() {
	window.obj78838_droppedInsideTargetActions_3_runningActionsCount = obj78838_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj78936").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj78838_droppedInsideTargetActions_3_runningActionsCount = window.obj78838_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj78838_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj78838_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj78838_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj78838_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj78838_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78838_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj78838").trigger("obj78838_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78838) {
				console.warn("de-queueing event obj78838." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78838").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78838_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_78860();
function runjs_78860() {
	window.obj78838_droppedInsideTargetActions_3_runningActionsCount = obj78838_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj78936").css("border-color", "#C00000"); $("#obj78936").css("border-width", "2px"); $("#obj78936").css("border-style", "solid"); $("#obj78936").css("border-radius", "10px"); $("#obj78936").css("-webkit-border-radius", "10px"); $("#obj78936").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj78838_droppedInsideTargetActions_3_runningActionsCount = window.obj78838_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj78838_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj78838_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj78838_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj78838_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj78838_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78838_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj78838").trigger("obj78838_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78838) {
				console.warn("de-queueing event obj78838." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78838").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78838_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	















//	action: Switch Text
switchText_78861();
function switchText_78861() {
	window.obj78838_droppedInsideTargetActions_3_runningActionsCount = obj78838_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj78928_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj78928_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj78928").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj78928_content");
			setTimeout(function () {
				window.obj78838_droppedInsideTargetActions_3_runningActionsCount = window.obj78838_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj78838_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj78838_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj78838_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj78838_droppedInsideTargetActions_3_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj78928 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj78838_droppedInsideTargetActions_3_runningActionsCount = window.obj78838_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj78838_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj78838_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj78838_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj78838_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
	}
}






};
obj78838_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78838_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj78838").trigger("obj78838_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78838) {
				console.warn("de-queueing event obj78838." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78838").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78838_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	


//	action: move
//	target: obj78838 
move_78862();
function move_78862() {
	window.obj78838_droppedInsideTargetActions_3_runningActionsCount = obj78838_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj78838");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 86;
	var moveY = 605;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj78838_droppedInsideTargetActions_3_runningActionsCount = window.obj78838_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj78838_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj78838_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj78838_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj78838_droppedInsideTargetActions_3_actionGroup4();
}
		}, 1);
	});
}



















};
obj78838_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78838_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj78838").trigger("obj78838_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78838) {
				console.warn("de-queueing event obj78838." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78838").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78838_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_78863();
function runjs_78863() {
	window.obj78838_droppedInsideTargetActions_3_runningActionsCount = obj78838_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj78936").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj78838_droppedInsideTargetActions_3_runningActionsCount = window.obj78838_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj78838_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj78838_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj78838_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj78838_droppedInsideTargetActions_3_actionGroup5();
}
	}, 1);
}







};
obj78838_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78838_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj78838").trigger("obj78838_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78838) {
				console.warn("de-queueing event obj78838." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78838").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78838_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	















//	action: Run JavaScript
runjs_78864();
function runjs_78864() {
	window.obj78838_droppedInsideTargetActions_3_runningActionsCount = obj78838_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj78936").css("border-color", "#000000"); $("#obj78936").css("border-width", "1px"); $("#obj78936").css("border-style", "solid"); $("#obj78936").css("border-radius", "15px"); $("#obj78936").css("-webkit-border-radius", "15px"); $("#obj78936").css("-moz-border-radius", "15px");
	
	setTimeout(function() {
		window.obj78838_droppedInsideTargetActions_3_runningActionsCount = window.obj78838_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj78838_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj78838_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj78838_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj78838_droppedInsideTargetActions_3_actionGroup6();
}
	}, 1);
}







};
obj78838_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78838_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj78838").trigger("obj78838_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78838) {
				console.warn("de-queueing event obj78838." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78838").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78838_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_78865();
function runjs_78865() {
	window.obj78838_droppedInsideTargetActions_3_runningActionsCount = obj78838_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj78838").css("border-color", "rgba(0,0,0,0)"); $("#obj78838").css("border-width", "0px"); $("#obj78838").css("border-style", "solid"); $("#obj78838").css("border-radius", "20px"); $("#obj78838").css("-webkit-border-radius", "20px"); $("#obj78838").css("-moz-border-radius", "20px"); $("#obj78838_img").css("top", "0px").css("left", "0px");
	
	setTimeout(function() {
		window.obj78838_droppedInsideTargetActions_3_runningActionsCount = window.obj78838_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj78838_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj78838_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj78838_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj78838_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj78838_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78838_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj78838").trigger("obj78838_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78838) {
				console.warn("de-queueing event obj78838." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78838").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78838_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Switch Text
switchText_78866();
function switchText_78866() {
	window.obj78838_droppedInsideTargetActions_3_runningActionsCount = obj78838_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj78928_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj78928_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj78928").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj78928_content");
			setTimeout(function () {
				window.obj78838_droppedInsideTargetActions_3_runningActionsCount = window.obj78838_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj78838_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj78838_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj78838_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj78838_droppedInsideTargetActions_3_actionGroup8();
}
			}, 1);
		});
	} else {
		$("#obj78928 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj78838_droppedInsideTargetActions_3_runningActionsCount = window.obj78838_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj78838_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj78838_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj78838_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj78838_droppedInsideTargetActions_3_actionGroup8();
}
		}, 1);
	}
}






};
obj78838_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78838_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj78838").trigger("obj78838_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78838) {
				console.warn("de-queueing event obj78838." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78838").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78838_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	












//	action: playAudio
//	target: obj78927 
playAudio_78867();
function playAudio_78867() {
	window.obj78838_droppedInsideTargetActions_3_runningActionsCount = obj78838_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj78927")[0];
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
		    window.obj78838_droppedInsideTargetActions_3_runningActionsCount = window.obj78838_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj78838_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj78838_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj78838_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj78838_droppedInsideTargetActions_3_actionGroup9();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj78838_droppedInsideTargetActions_3_runningActionsCount = window.obj78838_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj78838_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj78838_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj78838_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj78838_droppedInsideTargetActions_3_actionGroup9();
}
	}
}









};
obj78838_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj78838_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj78838").trigger("obj78838_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78838) {
				console.warn("de-queueing event obj78838." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78838").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78838_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	





















};
obj78838_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78838_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj78838").trigger("obj78838_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78838) {
				console.warn("de-queueing event obj78838." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78838").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78838_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_78849();
function runjs_78849() {
	window.obj78838_droppedInsideTargetActions_2_runningActionsCount = obj78838_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj78940").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj78838_droppedInsideTargetActions_2_runningActionsCount = window.obj78838_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj78838_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj78838_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj78838_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj78838_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj78838_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78838_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj78838").trigger("obj78838_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78838) {
				console.warn("de-queueing event obj78838." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78838").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78838_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_78850();
function runjs_78850() {
	window.obj78838_droppedInsideTargetActions_2_runningActionsCount = obj78838_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj78940").css("border-color", "#C00000"); $("#obj78940").css("border-width", "2px"); $("#obj78940").css("border-style", "solid"); $("#obj78940").css("border-radius", "10px"); $("#obj78940").css("-webkit-border-radius", "10px"); $("#obj78940").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj78838_droppedInsideTargetActions_2_runningActionsCount = window.obj78838_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj78838_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj78838_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj78838_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj78838_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj78838_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78838_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj78838").trigger("obj78838_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78838) {
				console.warn("de-queueing event obj78838." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78838").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78838_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	















//	action: Switch Text
switchText_78851();
function switchText_78851() {
	window.obj78838_droppedInsideTargetActions_2_runningActionsCount = obj78838_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj78928_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj78928_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj78928").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj78928_content");
			setTimeout(function () {
				window.obj78838_droppedInsideTargetActions_2_runningActionsCount = window.obj78838_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj78838_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj78838_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj78838_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj78838_droppedInsideTargetActions_2_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj78928 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj78838_droppedInsideTargetActions_2_runningActionsCount = window.obj78838_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj78838_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj78838_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj78838_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj78838_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
	}
}






};
obj78838_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78838_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj78838").trigger("obj78838_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78838) {
				console.warn("de-queueing event obj78838." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78838").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78838_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	


//	action: move
//	target: obj78838 
move_78852();
function move_78852() {
	window.obj78838_droppedInsideTargetActions_2_runningActionsCount = obj78838_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj78838");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 86;
	var moveY = 605;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj78838_droppedInsideTargetActions_2_runningActionsCount = window.obj78838_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj78838_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj78838_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj78838_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj78838_droppedInsideTargetActions_2_actionGroup4();
}
		}, 1);
	});
}



















};
obj78838_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78838_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj78838").trigger("obj78838_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78838) {
				console.warn("de-queueing event obj78838." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78838").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78838_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_78853();
function runjs_78853() {
	window.obj78838_droppedInsideTargetActions_2_runningActionsCount = obj78838_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj78940").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj78838_droppedInsideTargetActions_2_runningActionsCount = window.obj78838_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj78838_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj78838_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj78838_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj78838_droppedInsideTargetActions_2_actionGroup5();
}
	}, 1);
}







};
obj78838_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78838_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj78838").trigger("obj78838_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78838) {
				console.warn("de-queueing event obj78838." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78838").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78838_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	















//	action: Run JavaScript
runjs_78854();
function runjs_78854() {
	window.obj78838_droppedInsideTargetActions_2_runningActionsCount = obj78838_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj78940").css("border-color", "#000000"); $("#obj78940").css("border-width", "1px"); $("#obj78940").css("border-style", "solid"); $("#obj78940").css("border-radius", "15px"); $("#obj78940").css("-webkit-border-radius", "15px"); $("#obj78940").css("-moz-border-radius", "15px");
	
	setTimeout(function() {
		window.obj78838_droppedInsideTargetActions_2_runningActionsCount = window.obj78838_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj78838_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj78838_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj78838_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj78838_droppedInsideTargetActions_2_actionGroup6();
}
	}, 1);
}







};
obj78838_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78838_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj78838").trigger("obj78838_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78838) {
				console.warn("de-queueing event obj78838." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78838").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78838_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_78855();
function runjs_78855() {
	window.obj78838_droppedInsideTargetActions_2_runningActionsCount = obj78838_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj78838").css("border-color", "rgba(0,0,0,0)"); $("#obj78838").css("border-width", "0px"); $("#obj78838").css("border-style", "solid"); $("#obj78838").css("border-radius", "20px"); $("#obj78838").css("-webkit-border-radius", "20px"); $("#obj78838").css("-moz-border-radius", "20px"); $("#obj78838_img").css("top", "0px").css("left", "0px");
	
	setTimeout(function() {
		window.obj78838_droppedInsideTargetActions_2_runningActionsCount = window.obj78838_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj78838_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj78838_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj78838_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj78838_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj78838_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78838_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj78838").trigger("obj78838_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78838) {
				console.warn("de-queueing event obj78838." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78838").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78838_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Switch Text
switchText_78856();
function switchText_78856() {
	window.obj78838_droppedInsideTargetActions_2_runningActionsCount = obj78838_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj78928_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj78928_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj78928").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj78928_content");
			setTimeout(function () {
				window.obj78838_droppedInsideTargetActions_2_runningActionsCount = window.obj78838_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj78838_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj78838_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj78838_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj78838_droppedInsideTargetActions_2_actionGroup8();
}
			}, 1);
		});
	} else {
		$("#obj78928 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj78838_droppedInsideTargetActions_2_runningActionsCount = window.obj78838_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj78838_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj78838_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj78838_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj78838_droppedInsideTargetActions_2_actionGroup8();
}
		}, 1);
	}
}






};
obj78838_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78838_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj78838").trigger("obj78838_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78838) {
				console.warn("de-queueing event obj78838." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78838").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78838_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	












//	action: playAudio
//	target: obj78927 
playAudio_78857();
function playAudio_78857() {
	window.obj78838_droppedInsideTargetActions_2_runningActionsCount = obj78838_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj78927")[0];
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
		    window.obj78838_droppedInsideTargetActions_2_runningActionsCount = window.obj78838_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj78838_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj78838_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj78838_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj78838_droppedInsideTargetActions_2_actionGroup9();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj78838_droppedInsideTargetActions_2_runningActionsCount = window.obj78838_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj78838_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj78838_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj78838_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj78838_droppedInsideTargetActions_2_actionGroup9();
}
	}
}









};
obj78838_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj78838_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj78838").trigger("obj78838_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78838) {
				console.warn("de-queueing event obj78838." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78838").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78838_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	





















};
obj78838_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78838_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj78838").trigger("obj78838_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78838) {
				console.warn("de-queueing event obj78838." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78838").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78838_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_78843();
function runjs_78843() {
	window.obj78838_droppedInsideTargetActions_runningActionsCount = obj78838_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj78938").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj78838_droppedInsideTargetActions_runningActionsCount = window.obj78838_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj78838_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj78838_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj78838_droppedInsideTargetActions_runningActionsCount == 0) {
	obj78838_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj78838_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78838_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj78838").trigger("obj78838_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78838) {
				console.warn("de-queueing event obj78838." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78838").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78838_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_78846();
function switchText_78846() {
	window.obj78838_droppedInsideTargetActions_runningActionsCount = obj78838_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj78928_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj78928_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj78928").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj78928_content");
			setTimeout(function () {
				window.obj78838_droppedInsideTargetActions_runningActionsCount = window.obj78838_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj78838_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj78838_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj78838_droppedInsideTargetActions_runningActionsCount == 0) {
	obj78838_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj78928 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj78838_droppedInsideTargetActions_runningActionsCount = window.obj78838_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj78838_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj78838_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj78838_droppedInsideTargetActions_runningActionsCount == 0) {
	obj78838_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj78838_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78838_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj78838").trigger("obj78838_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78838) {
				console.warn("de-queueing event obj78838." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78838").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78838_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_78844();
function runjs_78844() {
	window.obj78838_droppedInsideTargetActions_runningActionsCount = obj78838_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj78938").css("border-color", "#058E3F"); $("#obj78938").css("border-width", "2px"); $("#obj78938").css("border-style", "solid"); $("#obj78938").css("border-radius", "10px"); $("#obj78938").css("-webkit-border-radius", "10px"); $("#obj78938").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj78838_droppedInsideTargetActions_runningActionsCount = window.obj78838_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj78838_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj78838_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj78838_droppedInsideTargetActions_runningActionsCount == 0) {
	obj78838_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj78838_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78838_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj78838").trigger("obj78838_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78838) {
				console.warn("de-queueing event obj78838." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78838").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78838_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj78932 
hide_78845();
function hide_78845() {
	var selector = "#obj78932";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj78838_droppedInsideTargetActions_runningActionsCount = obj78838_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj78838_droppedInsideTargetActions_runningActionsCount = window.obj78838_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj78838_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj78838_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj78838_droppedInsideTargetActions_runningActionsCount == 0) {
	obj78838_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_78845(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj78838_droppedInsideTargetActions_runningActionsCount = window.obj78838_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj78838_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj78838_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj78838_droppedInsideTargetActions_runningActionsCount == 0) {
	obj78838_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj78838_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78838_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj78838").trigger("obj78838_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78838) {
				console.warn("de-queueing event obj78838." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78838").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78838_droppedInsideTargetActions_activeActionGroupIndex = 4;
	












//	action: playAudio
//	target: obj78926 
playAudio_78847();
function playAudio_78847() {
	window.obj78838_droppedInsideTargetActions_runningActionsCount = obj78838_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj78926")[0];
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
		    window.obj78838_droppedInsideTargetActions_runningActionsCount = window.obj78838_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj78838_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj78838_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj78838_droppedInsideTargetActions_runningActionsCount == 0) {
	obj78838_droppedInsideTargetActions_actionGroup5();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj78838_droppedInsideTargetActions_runningActionsCount = window.obj78838_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj78838_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj78838_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj78838_droppedInsideTargetActions_runningActionsCount == 0) {
	obj78838_droppedInsideTargetActions_actionGroup5();
}
	}
}









};
obj78838_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78838_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj78838").trigger("obj78838_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78838) {
				console.warn("de-queueing event obj78838." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78838").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78838_droppedInsideTargetActions_activeActionGroupIndex = 5;
	















//	action: Switch Text
switchText_90308();
function switchText_90308() {
	window.obj78838_droppedInsideTargetActions_runningActionsCount = obj78838_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj78928_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj78928_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj78928").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj78928_content");
			setTimeout(function () {
				window.obj78838_droppedInsideTargetActions_runningActionsCount = window.obj78838_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj78838_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj78838_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj78838_droppedInsideTargetActions_runningActionsCount == 0) {
	obj78838_droppedInsideTargetActions_actionGroup6();
}
			}, 1);
		});
	} else {
		$("#obj78928 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj78838_droppedInsideTargetActions_runningActionsCount = window.obj78838_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj78838_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj78838_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj78838_droppedInsideTargetActions_runningActionsCount == 0) {
	obj78838_droppedInsideTargetActions_actionGroup6();
}
		}, 1);
	}
}






};
obj78838_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj78838_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj78838").trigger("obj78838_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78838) {
				console.warn("de-queueing event obj78838." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78838").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78838_droppedInsideTargetActions_activeActionGroupIndex = 6;
	





















};
obj78798_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78798_onTouchDown_activeActionGroupIndex = -1;
		$("#obj78798").trigger("obj78798_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78798) {
				console.warn("de-queueing event obj78798." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78798").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78798_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj78798");
//	action: dragDrop
//	target: obj78798 
dragDrop_78801();
function dragDrop_78801() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj78798_onTouchDown_runningActionsCount = obj78798_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj78798');
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
	  	containerNode = $('#obj78942');
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
    	window.obj78798_onTouchDown_runningActionsCount = window.obj78798_onTouchDown_runningActionsCount - 1;
if (window.obj78798_onTouchDown_runningActionsCount < 0) {
	window.obj78798_onTouchDown_runningActionsCount = 0;
} else if (window.obj78798_onTouchDown_runningActionsCount == 0) {
	obj78798_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj78940","#obj78936","#obj78938");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_78801 = false;
    	var dropped_id_78801;
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
					dropped_78801 = true;
					dropped_id_78801 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_78801) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj78798").trigger('SCActionDragDrop78801_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj78798_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj78798_onTouchDown_activeActionGroupIndex = -1;
		$("#obj78798").trigger("obj78798_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78798) {
				console.warn("de-queueing event obj78798." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78798").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78798_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj78798_SCActionDragDrop78801_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78798_SCActionDragDrop78801_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj78798").trigger("obj78798_SCActionDragDrop78801_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78798) {
				console.warn("de-queueing event obj78798." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78798").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78798_SCActionDragDrop78801_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj78798 
move_92368();
function move_92368() {
	window.obj78798_SCActionDragDrop78801_droppedOutsideTargetActions_runningActionsCount = obj78798_SCActionDragDrop78801_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj78798");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 238;
	var moveY = 605;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj78798_SCActionDragDrop78801_droppedOutsideTargetActions_runningActionsCount = window.obj78798_SCActionDragDrop78801_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj78798_SCActionDragDrop78801_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj78798_SCActionDragDrop78801_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj78798_SCActionDragDrop78801_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj78798_SCActionDragDrop78801_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj78798_SCActionDragDrop78801_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj78798_SCActionDragDrop78801_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj78798").trigger("obj78798_SCActionDragDrop78801_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78798) {
				console.warn("de-queueing event obj78798." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78798").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78798_SCActionDragDrop78801_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj78798_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78798_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj78798").trigger("obj78798_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78798) {
				console.warn("de-queueing event obj78798." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78798").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78798_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_78819();
function runjs_78819() {
	window.obj78798_droppedInsideTargetActions_3_runningActionsCount = obj78798_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj78938").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj78798_droppedInsideTargetActions_3_runningActionsCount = window.obj78798_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj78798_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj78798_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj78798_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj78798_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj78798_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78798_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj78798").trigger("obj78798_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78798) {
				console.warn("de-queueing event obj78798." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78798").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78798_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_78820();
function runjs_78820() {
	window.obj78798_droppedInsideTargetActions_3_runningActionsCount = obj78798_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj78938").css("border-color", "#C00000"); $("#obj78938").css("border-width", "2px"); $("#obj78938").css("border-style", "solid"); $("#obj78938").css("border-radius", "10px"); $("#obj78938").css("-webkit-border-radius", "10px"); $("#obj78938").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj78798_droppedInsideTargetActions_3_runningActionsCount = window.obj78798_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj78798_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj78798_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj78798_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj78798_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj78798_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78798_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj78798").trigger("obj78798_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78798) {
				console.warn("de-queueing event obj78798." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78798").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78798_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	















//	action: Switch Text
switchText_78821();
function switchText_78821() {
	window.obj78798_droppedInsideTargetActions_3_runningActionsCount = obj78798_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj78928_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj78928_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj78928").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj78928_content");
			setTimeout(function () {
				window.obj78798_droppedInsideTargetActions_3_runningActionsCount = window.obj78798_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj78798_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj78798_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj78798_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj78798_droppedInsideTargetActions_3_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj78928 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj78798_droppedInsideTargetActions_3_runningActionsCount = window.obj78798_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj78798_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj78798_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj78798_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj78798_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
	}
}






};
obj78798_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78798_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj78798").trigger("obj78798_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78798) {
				console.warn("de-queueing event obj78798." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78798").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78798_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	


//	action: move
//	target: obj78798 
move_78822();
function move_78822() {
	window.obj78798_droppedInsideTargetActions_3_runningActionsCount = obj78798_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj78798");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 238;
	var moveY = 605;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj78798_droppedInsideTargetActions_3_runningActionsCount = window.obj78798_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj78798_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj78798_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj78798_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj78798_droppedInsideTargetActions_3_actionGroup4();
}
		}, 1);
	});
}



















};
obj78798_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78798_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj78798").trigger("obj78798_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78798) {
				console.warn("de-queueing event obj78798." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78798").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78798_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_78823();
function runjs_78823() {
	window.obj78798_droppedInsideTargetActions_3_runningActionsCount = obj78798_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj78938").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj78798_droppedInsideTargetActions_3_runningActionsCount = window.obj78798_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj78798_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj78798_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj78798_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj78798_droppedInsideTargetActions_3_actionGroup5();
}
	}, 1);
}







};
obj78798_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78798_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj78798").trigger("obj78798_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78798) {
				console.warn("de-queueing event obj78798." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78798").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78798_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	















//	action: Run JavaScript
runjs_78824();
function runjs_78824() {
	window.obj78798_droppedInsideTargetActions_3_runningActionsCount = obj78798_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj78938").css("border-color", "#000000"); $("#obj78938").css("border-width", "1px"); $("#obj78938").css("border-style", "solid"); $("#obj78938").css("border-radius", "15px"); $("#obj78938").css("-webkit-border-radius", "15px"); $("#obj78938").css("-moz-border-radius", "15px");
	
	setTimeout(function() {
		window.obj78798_droppedInsideTargetActions_3_runningActionsCount = window.obj78798_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj78798_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj78798_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj78798_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj78798_droppedInsideTargetActions_3_actionGroup6();
}
	}, 1);
}







};
obj78798_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78798_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj78798").trigger("obj78798_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78798) {
				console.warn("de-queueing event obj78798." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78798").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78798_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_78825();
function runjs_78825() {
	window.obj78798_droppedInsideTargetActions_3_runningActionsCount = obj78798_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj78798").css("border-color", "rgba(0,0,0,0)"); $("#obj78798").css("border-width", "0px"); $("#obj78798").css("border-style", "solid"); $("#obj78798").css("border-radius", "20px"); $("#obj78798").css("-webkit-border-radius", "20px"); $("#obj78798").css("-moz-border-radius", "20px"); $("#obj78798_img").css("top", "0px").css("left", "0px");
	
	setTimeout(function() {
		window.obj78798_droppedInsideTargetActions_3_runningActionsCount = window.obj78798_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj78798_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj78798_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj78798_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj78798_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj78798_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78798_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj78798").trigger("obj78798_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78798) {
				console.warn("de-queueing event obj78798." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78798").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78798_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Switch Text
switchText_78826();
function switchText_78826() {
	window.obj78798_droppedInsideTargetActions_3_runningActionsCount = obj78798_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj78928_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj78928_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj78928").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj78928_content");
			setTimeout(function () {
				window.obj78798_droppedInsideTargetActions_3_runningActionsCount = window.obj78798_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj78798_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj78798_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj78798_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj78798_droppedInsideTargetActions_3_actionGroup8();
}
			}, 1);
		});
	} else {
		$("#obj78928 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj78798_droppedInsideTargetActions_3_runningActionsCount = window.obj78798_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj78798_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj78798_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj78798_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj78798_droppedInsideTargetActions_3_actionGroup8();
}
		}, 1);
	}
}






};
obj78798_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78798_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj78798").trigger("obj78798_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78798) {
				console.warn("de-queueing event obj78798." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78798").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78798_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	












//	action: playAudio
//	target: obj78927 
playAudio_78827();
function playAudio_78827() {
	window.obj78798_droppedInsideTargetActions_3_runningActionsCount = obj78798_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj78927")[0];
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
		    window.obj78798_droppedInsideTargetActions_3_runningActionsCount = window.obj78798_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj78798_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj78798_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj78798_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj78798_droppedInsideTargetActions_3_actionGroup9();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj78798_droppedInsideTargetActions_3_runningActionsCount = window.obj78798_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj78798_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj78798_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj78798_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj78798_droppedInsideTargetActions_3_actionGroup9();
}
	}
}









};
obj78798_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj78798_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj78798").trigger("obj78798_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78798) {
				console.warn("de-queueing event obj78798." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78798").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78798_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	





















};
obj78798_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78798_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj78798").trigger("obj78798_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78798) {
				console.warn("de-queueing event obj78798." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78798").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78798_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_78809();
function runjs_78809() {
	window.obj78798_droppedInsideTargetActions_2_runningActionsCount = obj78798_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj78936").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj78798_droppedInsideTargetActions_2_runningActionsCount = window.obj78798_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj78798_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj78798_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj78798_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj78798_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj78798_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78798_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj78798").trigger("obj78798_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78798) {
				console.warn("de-queueing event obj78798." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78798").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78798_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_78810();
function runjs_78810() {
	window.obj78798_droppedInsideTargetActions_2_runningActionsCount = obj78798_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj78936").css("border-color", "#C00000"); $("#obj78936").css("border-width", "2px"); $("#obj78936").css("border-style", "solid"); $("#obj78936").css("border-radius", "10px"); $("#obj78936").css("-webkit-border-radius", "10px"); $("#obj78936").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj78798_droppedInsideTargetActions_2_runningActionsCount = window.obj78798_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj78798_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj78798_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj78798_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj78798_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj78798_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78798_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj78798").trigger("obj78798_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78798) {
				console.warn("de-queueing event obj78798." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78798").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78798_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	















//	action: Switch Text
switchText_78811();
function switchText_78811() {
	window.obj78798_droppedInsideTargetActions_2_runningActionsCount = obj78798_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj78928_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj78928_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj78928").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj78928_content");
			setTimeout(function () {
				window.obj78798_droppedInsideTargetActions_2_runningActionsCount = window.obj78798_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj78798_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj78798_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj78798_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj78798_droppedInsideTargetActions_2_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj78928 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj78798_droppedInsideTargetActions_2_runningActionsCount = window.obj78798_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj78798_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj78798_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj78798_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj78798_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
	}
}






};
obj78798_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78798_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj78798").trigger("obj78798_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78798) {
				console.warn("de-queueing event obj78798." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78798").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78798_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	


//	action: move
//	target: obj78798 
move_78812();
function move_78812() {
	window.obj78798_droppedInsideTargetActions_2_runningActionsCount = obj78798_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj78798");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 238;
	var moveY = 605;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj78798_droppedInsideTargetActions_2_runningActionsCount = window.obj78798_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj78798_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj78798_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj78798_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj78798_droppedInsideTargetActions_2_actionGroup4();
}
		}, 1);
	});
}



















};
obj78798_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78798_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj78798").trigger("obj78798_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78798) {
				console.warn("de-queueing event obj78798." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78798").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78798_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_78813();
function runjs_78813() {
	window.obj78798_droppedInsideTargetActions_2_runningActionsCount = obj78798_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj78936").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj78798_droppedInsideTargetActions_2_runningActionsCount = window.obj78798_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj78798_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj78798_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj78798_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj78798_droppedInsideTargetActions_2_actionGroup5();
}
	}, 1);
}







};
obj78798_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78798_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj78798").trigger("obj78798_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78798) {
				console.warn("de-queueing event obj78798." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78798").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78798_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	















//	action: Run JavaScript
runjs_78814();
function runjs_78814() {
	window.obj78798_droppedInsideTargetActions_2_runningActionsCount = obj78798_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj78936").css("border-color", "#000000"); $("#obj78936").css("border-width", "1px"); $("#obj78936").css("border-style", "solid"); $("#obj78936").css("border-radius", "15px"); $("#obj78936").css("-webkit-border-radius", "15px"); $("#obj78936").css("-moz-border-radius", "15px");
	
	setTimeout(function() {
		window.obj78798_droppedInsideTargetActions_2_runningActionsCount = window.obj78798_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj78798_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj78798_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj78798_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj78798_droppedInsideTargetActions_2_actionGroup6();
}
	}, 1);
}







};
obj78798_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78798_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj78798").trigger("obj78798_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78798) {
				console.warn("de-queueing event obj78798." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78798").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78798_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_78815();
function runjs_78815() {
	window.obj78798_droppedInsideTargetActions_2_runningActionsCount = obj78798_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj78798").css("border-color", "rgba(0,0,0,0)"); $("#obj78798").css("border-width", "0px"); $("#obj78798").css("border-style", "solid"); $("#obj78798").css("border-radius", "20px"); $("#obj78798").css("-webkit-border-radius", "20px"); $("#obj78798").css("-moz-border-radius", "20px"); $("#obj78798_img").css("top", "0px").css("left", "0px");
	
	setTimeout(function() {
		window.obj78798_droppedInsideTargetActions_2_runningActionsCount = window.obj78798_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj78798_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj78798_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj78798_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj78798_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj78798_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78798_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj78798").trigger("obj78798_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78798) {
				console.warn("de-queueing event obj78798." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78798").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78798_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Switch Text
switchText_78816();
function switchText_78816() {
	window.obj78798_droppedInsideTargetActions_2_runningActionsCount = obj78798_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj78928_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj78928_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj78928").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj78928_content");
			setTimeout(function () {
				window.obj78798_droppedInsideTargetActions_2_runningActionsCount = window.obj78798_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj78798_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj78798_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj78798_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj78798_droppedInsideTargetActions_2_actionGroup8();
}
			}, 1);
		});
	} else {
		$("#obj78928 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj78798_droppedInsideTargetActions_2_runningActionsCount = window.obj78798_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj78798_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj78798_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj78798_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj78798_droppedInsideTargetActions_2_actionGroup8();
}
		}, 1);
	}
}






};
obj78798_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78798_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj78798").trigger("obj78798_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78798) {
				console.warn("de-queueing event obj78798." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78798").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78798_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	












//	action: playAudio
//	target: obj78927 
playAudio_78817();
function playAudio_78817() {
	window.obj78798_droppedInsideTargetActions_2_runningActionsCount = obj78798_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj78927")[0];
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
		    window.obj78798_droppedInsideTargetActions_2_runningActionsCount = window.obj78798_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj78798_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj78798_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj78798_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj78798_droppedInsideTargetActions_2_actionGroup9();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj78798_droppedInsideTargetActions_2_runningActionsCount = window.obj78798_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj78798_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj78798_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj78798_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj78798_droppedInsideTargetActions_2_actionGroup9();
}
	}
}









};
obj78798_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj78798_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj78798").trigger("obj78798_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78798) {
				console.warn("de-queueing event obj78798." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78798").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78798_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	





















};
obj78798_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78798_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj78798").trigger("obj78798_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78798) {
				console.warn("de-queueing event obj78798." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78798").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78798_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_78803();
function runjs_78803() {
	window.obj78798_droppedInsideTargetActions_runningActionsCount = obj78798_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj78940").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj78798_droppedInsideTargetActions_runningActionsCount = window.obj78798_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj78798_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj78798_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj78798_droppedInsideTargetActions_runningActionsCount == 0) {
	obj78798_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj78798_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78798_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj78798").trigger("obj78798_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78798) {
				console.warn("de-queueing event obj78798." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78798").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78798_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_78806();
function switchText_78806() {
	window.obj78798_droppedInsideTargetActions_runningActionsCount = obj78798_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj78928_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj78928_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj78928").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj78928_content");
			setTimeout(function () {
				window.obj78798_droppedInsideTargetActions_runningActionsCount = window.obj78798_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj78798_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj78798_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj78798_droppedInsideTargetActions_runningActionsCount == 0) {
	obj78798_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj78928 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj78798_droppedInsideTargetActions_runningActionsCount = window.obj78798_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj78798_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj78798_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj78798_droppedInsideTargetActions_runningActionsCount == 0) {
	obj78798_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj78798_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78798_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj78798").trigger("obj78798_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78798) {
				console.warn("de-queueing event obj78798." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78798").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78798_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_78804();
function runjs_78804() {
	window.obj78798_droppedInsideTargetActions_runningActionsCount = obj78798_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj78940").css("border-color", "#058E3F"); $("#obj78940").css("border-width", "2px"); $("#obj78940").css("border-style", "solid"); $("#obj78940").css("border-radius", "10px"); $("#obj78940").css("-webkit-border-radius", "10px"); $("#obj78940").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj78798_droppedInsideTargetActions_runningActionsCount = window.obj78798_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj78798_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj78798_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj78798_droppedInsideTargetActions_runningActionsCount == 0) {
	obj78798_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj78798_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78798_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj78798").trigger("obj78798_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78798) {
				console.warn("de-queueing event obj78798." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78798").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78798_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj78934 
hide_78805();
function hide_78805() {
	var selector = "#obj78934";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj78798_droppedInsideTargetActions_runningActionsCount = obj78798_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj78798_droppedInsideTargetActions_runningActionsCount = window.obj78798_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj78798_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj78798_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj78798_droppedInsideTargetActions_runningActionsCount == 0) {
	obj78798_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_78805(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj78798_droppedInsideTargetActions_runningActionsCount = window.obj78798_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj78798_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj78798_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj78798_droppedInsideTargetActions_runningActionsCount == 0) {
	obj78798_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj78798_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78798_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj78798").trigger("obj78798_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78798) {
				console.warn("de-queueing event obj78798." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78798").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78798_droppedInsideTargetActions_activeActionGroupIndex = 4;
	












//	action: playAudio
//	target: obj78926 
playAudio_78807();
function playAudio_78807() {
	window.obj78798_droppedInsideTargetActions_runningActionsCount = obj78798_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj78926")[0];
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
		    window.obj78798_droppedInsideTargetActions_runningActionsCount = window.obj78798_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj78798_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj78798_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj78798_droppedInsideTargetActions_runningActionsCount == 0) {
	obj78798_droppedInsideTargetActions_actionGroup5();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj78798_droppedInsideTargetActions_runningActionsCount = window.obj78798_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj78798_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj78798_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj78798_droppedInsideTargetActions_runningActionsCount == 0) {
	obj78798_droppedInsideTargetActions_actionGroup5();
}
	}
}









};
obj78798_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78798_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj78798").trigger("obj78798_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78798) {
				console.warn("de-queueing event obj78798." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78798").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78798_droppedInsideTargetActions_activeActionGroupIndex = 5;
	















//	action: Switch Text
switchText_90309();
function switchText_90309() {
	window.obj78798_droppedInsideTargetActions_runningActionsCount = obj78798_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj78928_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj78928_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj78928").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj78928_content");
			setTimeout(function () {
				window.obj78798_droppedInsideTargetActions_runningActionsCount = window.obj78798_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj78798_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj78798_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj78798_droppedInsideTargetActions_runningActionsCount == 0) {
	obj78798_droppedInsideTargetActions_actionGroup6();
}
			}, 1);
		});
	} else {
		$("#obj78928 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj78798_droppedInsideTargetActions_runningActionsCount = window.obj78798_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj78798_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj78798_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj78798_droppedInsideTargetActions_runningActionsCount == 0) {
	obj78798_droppedInsideTargetActions_actionGroup6();
}
		}, 1);
	}
}






};
obj78798_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj78798_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj78798").trigger("obj78798_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78798) {
				console.warn("de-queueing event obj78798." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78798").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78798_droppedInsideTargetActions_activeActionGroupIndex = 6;
	





















};
obj78780_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78780_onTap_activeActionGroupIndex = -1;
		$("#obj78780").trigger("obj78780_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78780) {
				console.warn("de-queueing event obj78780." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78780").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78780_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj78780 
hide_78783();
function hide_78783() {
	var selector = "#obj78780";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj78780_onTap_runningActionsCount = obj78780_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj78780_onTap_runningActionsCount = window.obj78780_onTap_runningActionsCount - 1;
if (window.obj78780_onTap_runningActionsCount < 0) {
	window.obj78780_onTap_runningActionsCount = 0;
} else if (window.obj78780_onTap_runningActionsCount == 0) {
	obj78780_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_78783(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj78780_onTap_runningActionsCount = window.obj78780_onTap_runningActionsCount - 1;
if (window.obj78780_onTap_runningActionsCount < 0) {
	window.obj78780_onTap_runningActionsCount = 0;
} else if (window.obj78780_onTap_runningActionsCount == 0) {
	obj78780_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj78770 
stopMovie_78782();
function stopMovie_78782() {
	window.obj78780_onTap_runningActionsCount = obj78780_onTap_runningActionsCount + 1;
	var myVideo = $("#obj78770")[0];
	myVideo.pause();
	window.obj78780_onTap_runningActionsCount = window.obj78780_onTap_runningActionsCount - 1;
if (window.obj78780_onTap_runningActionsCount < 0) {
	window.obj78780_onTap_runningActionsCount = 0;
} else if (window.obj78780_onTap_runningActionsCount == 0) {
	obj78780_onTap_actionGroup1();
}
}
















};
obj78780_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78780_onTap_activeActionGroupIndex = -1;
		$("#obj78780").trigger("obj78780_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78780) {
				console.warn("de-queueing event obj78780." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78780").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78780_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj78772
(function(){
	window.obj78780_onTap_runningActionsCount = obj78780_onTap_runningActionsCount + 1;

	var selector = "#obj78772";
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
					window.obj78780_onTap_runningActionsCount = window.obj78780_onTap_runningActionsCount - 1;
if (window.obj78780_onTap_runningActionsCount < 0) {
	window.obj78780_onTap_runningActionsCount = 0;
} else if (window.obj78780_onTap_runningActionsCount == 0) {
	obj78780_onTap_actionGroup2();
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
				window.obj78780_onTap_runningActionsCount = window.obj78780_onTap_runningActionsCount - 1;
if (window.obj78780_onTap_runningActionsCount < 0) {
	window.obj78780_onTap_runningActionsCount = 0;
} else if (window.obj78780_onTap_runningActionsCount == 0) {
	obj78780_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj78780_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78780_onTap_activeActionGroupIndex = -1;
		$("#obj78780").trigger("obj78780_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78780) {
				console.warn("de-queueing event obj78780." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78780").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78780_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj78770 
move_78785();
function move_78785() {
	window.obj78780_onTap_runningActionsCount = obj78780_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj78770");
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
			window.obj78780_onTap_runningActionsCount = window.obj78780_onTap_runningActionsCount - 1;
if (window.obj78780_onTap_runningActionsCount < 0) {
	window.obj78780_onTap_runningActionsCount = 0;
} else if (window.obj78780_onTap_runningActionsCount == 0) {
	obj78780_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj78780_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj78780_onTap_activeActionGroupIndex = -1;
		$("#obj78780").trigger("obj78780_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78780) {
				console.warn("de-queueing event obj78780." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78780").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78780_onTap_activeActionGroupIndex = 3;
	





















};
obj78772_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78772_onTap_activeActionGroupIndex = -1;
		$("#obj78772").trigger("obj78772_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78772) {
				console.warn("de-queueing event obj78772." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78772").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78772_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj78772 
hide_78775();
function hide_78775() {
	var selector = "#obj78772";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj78772_onTap_runningActionsCount = obj78772_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj78772_onTap_runningActionsCount = window.obj78772_onTap_runningActionsCount - 1;
if (window.obj78772_onTap_runningActionsCount < 0) {
	window.obj78772_onTap_runningActionsCount = 0;
} else if (window.obj78772_onTap_runningActionsCount == 0) {
	obj78772_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_78775(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj78772_onTap_runningActionsCount = window.obj78772_onTap_runningActionsCount - 1;
if (window.obj78772_onTap_runningActionsCount < 0) {
	window.obj78772_onTap_runningActionsCount = 0;
} else if (window.obj78772_onTap_runningActionsCount == 0) {
	obj78772_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj78770 
playPauseMovie_78774();
function playPauseMovie_78774() {
	window.obj78772_onTap_runningActionsCount = obj78772_onTap_runningActionsCount + 1;
	var myVideo = $("#obj78770")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj78772_onTap_runningActionsCount = window.obj78772_onTap_runningActionsCount - 1;
if (window.obj78772_onTap_runningActionsCount < 0) {
	window.obj78772_onTap_runningActionsCount = 0;
} else if (window.obj78772_onTap_runningActionsCount == 0) {
	obj78772_onTap_actionGroup1();
}
}

















};
obj78772_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78772_onTap_activeActionGroupIndex = -1;
		$("#obj78772").trigger("obj78772_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78772) {
				console.warn("de-queueing event obj78772." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78772").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78772_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj78780
(function(){
	window.obj78772_onTap_runningActionsCount = obj78772_onTap_runningActionsCount + 1;

	var selector = "#obj78780";
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
					window.obj78772_onTap_runningActionsCount = window.obj78772_onTap_runningActionsCount - 1;
if (window.obj78772_onTap_runningActionsCount < 0) {
	window.obj78772_onTap_runningActionsCount = 0;
} else if (window.obj78772_onTap_runningActionsCount == 0) {
	obj78772_onTap_actionGroup2();
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
				window.obj78772_onTap_runningActionsCount = window.obj78772_onTap_runningActionsCount - 1;
if (window.obj78772_onTap_runningActionsCount < 0) {
	window.obj78772_onTap_runningActionsCount = 0;
} else if (window.obj78772_onTap_runningActionsCount == 0) {
	obj78772_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj78772_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78772_onTap_activeActionGroupIndex = -1;
		$("#obj78772").trigger("obj78772_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78772) {
				console.warn("de-queueing event obj78772." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78772").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78772_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj78770 
move_78777();
function move_78777() {
	window.obj78772_onTap_runningActionsCount = obj78772_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj78770");
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
			window.obj78772_onTap_runningActionsCount = window.obj78772_onTap_runningActionsCount - 1;
if (window.obj78772_onTap_runningActionsCount < 0) {
	window.obj78772_onTap_runningActionsCount = 0;
} else if (window.obj78772_onTap_runningActionsCount == 0) {
	obj78772_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj78772_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj78772_onTap_activeActionGroupIndex = -1;
		$("#obj78772").trigger("obj78772_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78772) {
				console.warn("de-queueing event obj78772." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78772").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78772_onTap_activeActionGroupIndex = 3;
	





















};
obj87925_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87925_onTap_activeActionGroupIndex = -1;
		$("#obj87925").trigger("obj87925_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87925) {
				console.warn("de-queueing event obj87925." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87925").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87925_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj87930 
stopAudio_87927();
function stopAudio_87927() {
	window.obj87925_onTap_runningActionsCount = obj87925_onTap_runningActionsCount + 1;
	var myAudio = $("#obj87930")[0];
	myAudio.pause();
	window.obj87925_onTap_runningActionsCount = window.obj87925_onTap_runningActionsCount - 1;
if (window.obj87925_onTap_runningActionsCount < 0) {
	window.obj87925_onTap_runningActionsCount = 0;
} else if (window.obj87925_onTap_runningActionsCount == 0) {
	obj87925_onTap_actionGroup1();
}
}








};
obj87925_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87925_onTap_activeActionGroupIndex = -1;
		$("#obj87925").trigger("obj87925_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87925) {
				console.warn("de-queueing event obj87925." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87925").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87925_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj87925 
hide_87928();
function hide_87928() {
	var selector = "#obj87925";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj87925_onTap_runningActionsCount = obj87925_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj87925_onTap_runningActionsCount = window.obj87925_onTap_runningActionsCount - 1;
if (window.obj87925_onTap_runningActionsCount < 0) {
	window.obj87925_onTap_runningActionsCount = 0;
} else if (window.obj87925_onTap_runningActionsCount == 0) {
	obj87925_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_87928(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj87925_onTap_runningActionsCount = window.obj87925_onTap_runningActionsCount - 1;
if (window.obj87925_onTap_runningActionsCount < 0) {
	window.obj87925_onTap_runningActionsCount = 0;
} else if (window.obj87925_onTap_runningActionsCount == 0) {
	obj87925_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj87925_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87925_onTap_activeActionGroupIndex = -1;
		$("#obj87925").trigger("obj87925_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87925) {
				console.warn("de-queueing event obj87925." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87925").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87925_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj87920
(function(){
	window.obj87925_onTap_runningActionsCount = obj87925_onTap_runningActionsCount + 1;

	var selector = "#obj87920";
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
					window.obj87925_onTap_runningActionsCount = window.obj87925_onTap_runningActionsCount - 1;
if (window.obj87925_onTap_runningActionsCount < 0) {
	window.obj87925_onTap_runningActionsCount = 0;
} else if (window.obj87925_onTap_runningActionsCount == 0) {
	obj87925_onTap_actionGroup3();
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
				window.obj87925_onTap_runningActionsCount = window.obj87925_onTap_runningActionsCount - 1;
if (window.obj87925_onTap_runningActionsCount < 0) {
	window.obj87925_onTap_runningActionsCount = 0;
} else if (window.obj87925_onTap_runningActionsCount == 0) {
	obj87925_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj87925_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj87925_onTap_activeActionGroupIndex = -1;
		$("#obj87925").trigger("obj87925_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87925) {
				console.warn("de-queueing event obj87925." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87925").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87925_onTap_activeActionGroupIndex = 3;
	





















};
obj87920_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87920_onTap_activeActionGroupIndex = -1;
		$("#obj87920").trigger("obj87920_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87920) {
				console.warn("de-queueing event obj87920." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87920").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87920_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj87920 
hide_87922();
function hide_87922() {
	var selector = "#obj87920";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj87920_onTap_runningActionsCount = obj87920_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj87920_onTap_runningActionsCount = window.obj87920_onTap_runningActionsCount - 1;
if (window.obj87920_onTap_runningActionsCount < 0) {
	window.obj87920_onTap_runningActionsCount = 0;
} else if (window.obj87920_onTap_runningActionsCount == 0) {
	obj87920_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_87922(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj87920_onTap_runningActionsCount = window.obj87920_onTap_runningActionsCount - 1;
if (window.obj87920_onTap_runningActionsCount < 0) {
	window.obj87920_onTap_runningActionsCount = 0;
} else if (window.obj87920_onTap_runningActionsCount == 0) {
	obj87920_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj87920_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87920_onTap_activeActionGroupIndex = -1;
		$("#obj87920").trigger("obj87920_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87920) {
				console.warn("de-queueing event obj87920." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87920").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87920_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj87925
(function(){
	window.obj87920_onTap_runningActionsCount = obj87920_onTap_runningActionsCount + 1;

	var selector = "#obj87925";
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
					window.obj87920_onTap_runningActionsCount = window.obj87920_onTap_runningActionsCount - 1;
if (window.obj87920_onTap_runningActionsCount < 0) {
	window.obj87920_onTap_runningActionsCount = 0;
} else if (window.obj87920_onTap_runningActionsCount == 0) {
	obj87920_onTap_actionGroup2();
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
				window.obj87920_onTap_runningActionsCount = window.obj87920_onTap_runningActionsCount - 1;
if (window.obj87920_onTap_runningActionsCount < 0) {
	window.obj87920_onTap_runningActionsCount = 0;
} else if (window.obj87920_onTap_runningActionsCount == 0) {
	obj87920_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj87920_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87920_onTap_activeActionGroupIndex = -1;
		$("#obj87920").trigger("obj87920_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87920) {
				console.warn("de-queueing event obj87920." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87920").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87920_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj87930 
playAudio_87924();
function playAudio_87924() {
	window.obj87920_onTap_runningActionsCount = obj87920_onTap_runningActionsCount + 1;
	var myAudio = $("#obj87930")[0];
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
		    window.obj87920_onTap_runningActionsCount = window.obj87920_onTap_runningActionsCount - 1;
if (window.obj87920_onTap_runningActionsCount < 0) {
	window.obj87920_onTap_runningActionsCount = 0;
} else if (window.obj87920_onTap_runningActionsCount == 0) {
	obj87920_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj87920_onTap_runningActionsCount = window.obj87920_onTap_runningActionsCount - 1;
if (window.obj87920_onTap_runningActionsCount < 0) {
	window.obj87920_onTap_runningActionsCount = 0;
} else if (window.obj87920_onTap_runningActionsCount == 0) {
	obj87920_onTap_actionGroup3();
}
	}
}









};
obj87920_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj87920_onTap_activeActionGroupIndex = -1;
		$("#obj87920").trigger("obj87920_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87920) {
				console.warn("de-queueing event obj87920." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87920").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87920_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj78959: Event Touch Down
 *
 */
$("#obj78959").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj78959_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj78959_onTap is still running");
	return;
}
var obj78959_onTap_runningActionsCount = 0;
var obj78959_onTap_loopCount = 0;
obj78959_onTap_actionGroup0();
});










/*
 *
 *   obj78956: Event Touch Down
 *
 */
$("#obj78956").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj78956_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj78956_onTap is still running");
	return;
}
var obj78956_onTap_runningActionsCount = 0;
var obj78956_onTap_loopCount = 0;
obj78956_onTap_actionGroup0();
});










/*
 *
 *   obj78952: Event Touch Down
 *
 */
$("#obj78952").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj78952_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj78952_onTap is still running");
	return;
}
var obj78952_onTap_runningActionsCount = 0;
var obj78952_onTap_loopCount = 0;
obj78952_onTap_actionGroup0();
});































































































































































































/*
 *
 *   obj78878: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj78878");
	var winTarget = document.getElementById("obj78878");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj78878").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj78878_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj78878_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj78878_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj78878_onTouchDown is still running");
	return;
}
var obj78878_onTouchDown_runningActionsCount = 0;
var obj78878_onTouchDown_loopCount = 0;
obj78878_onTouchDown_actionGroup0();
});



/*
 *
 *   obj78878: Event SCActionDragDrop78881_droppedOutsideTargetActions
 *
 */
$("#obj78878").bind("SCActionDragDrop78881_droppedOutsideTargetActions", function(event) {
	if (window.obj78878_SCActionDragDrop78881_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj78878_SCActionDragDrop78881_droppedOutsideTargetActions is still running");
	return;
}
var obj78878_SCActionDragDrop78881_droppedOutsideTargetActions_runningActionsCount = 0;
var obj78878_SCActionDragDrop78881_droppedOutsideTargetActions_loopCount = 0;
obj78878_SCActionDragDrop78881_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj78878: Event droppedInsideTargetActions_3
 *
 */
$("#obj78878").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj78878_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj78878_droppedInsideTargetActions_3 is still running");
	return;
}
var obj78878_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj78878_droppedInsideTargetActions_3_loopCount = 0;
obj78878_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj78878: Event droppedInsideTargetActions_2
 *
 */
$("#obj78878").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj78878_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj78878_droppedInsideTargetActions_2 is still running");
	return;
}
var obj78878_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj78878_droppedInsideTargetActions_2_loopCount = 0;
obj78878_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj78878: Event droppedInsideTargetActions
 *
 */
$("#obj78878").bind("droppedInsideTargetActions", function(event) {
	if (window.obj78878_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj78878_droppedInsideTargetActions is still running");
	return;
}
var obj78878_droppedInsideTargetActions_runningActionsCount = 0;
var obj78878_droppedInsideTargetActions_loopCount = 0;
obj78878_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj78838: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj78838");
	var winTarget = document.getElementById("obj78838");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj78838").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj78838_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj78838_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj78838_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj78838_onTouchDown is still running");
	return;
}
var obj78838_onTouchDown_runningActionsCount = 0;
var obj78838_onTouchDown_loopCount = 0;
obj78838_onTouchDown_actionGroup0();
});



/*
 *
 *   obj78838: Event SCActionDragDrop78841_droppedOutsideTargetActions
 *
 */
$("#obj78838").bind("SCActionDragDrop78841_droppedOutsideTargetActions", function(event) {
	if (window.obj78838_SCActionDragDrop78841_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj78838_SCActionDragDrop78841_droppedOutsideTargetActions is still running");
	return;
}
var obj78838_SCActionDragDrop78841_droppedOutsideTargetActions_runningActionsCount = 0;
var obj78838_SCActionDragDrop78841_droppedOutsideTargetActions_loopCount = 0;
obj78838_SCActionDragDrop78841_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj78838: Event droppedInsideTargetActions_3
 *
 */
$("#obj78838").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj78838_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj78838_droppedInsideTargetActions_3 is still running");
	return;
}
var obj78838_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj78838_droppedInsideTargetActions_3_loopCount = 0;
obj78838_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj78838: Event droppedInsideTargetActions_2
 *
 */
$("#obj78838").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj78838_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj78838_droppedInsideTargetActions_2 is still running");
	return;
}
var obj78838_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj78838_droppedInsideTargetActions_2_loopCount = 0;
obj78838_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj78838: Event droppedInsideTargetActions
 *
 */
$("#obj78838").bind("droppedInsideTargetActions", function(event) {
	if (window.obj78838_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj78838_droppedInsideTargetActions is still running");
	return;
}
var obj78838_droppedInsideTargetActions_runningActionsCount = 0;
var obj78838_droppedInsideTargetActions_loopCount = 0;
obj78838_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj78798: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj78798");
	var winTarget = document.getElementById("obj78798");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj78798").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj78798_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj78798_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj78798_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj78798_onTouchDown is still running");
	return;
}
var obj78798_onTouchDown_runningActionsCount = 0;
var obj78798_onTouchDown_loopCount = 0;
obj78798_onTouchDown_actionGroup0();
});



/*
 *
 *   obj78798: Event SCActionDragDrop78801_droppedOutsideTargetActions
 *
 */
$("#obj78798").bind("SCActionDragDrop78801_droppedOutsideTargetActions", function(event) {
	if (window.obj78798_SCActionDragDrop78801_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj78798_SCActionDragDrop78801_droppedOutsideTargetActions is still running");
	return;
}
var obj78798_SCActionDragDrop78801_droppedOutsideTargetActions_runningActionsCount = 0;
var obj78798_SCActionDragDrop78801_droppedOutsideTargetActions_loopCount = 0;
obj78798_SCActionDragDrop78801_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj78798: Event droppedInsideTargetActions_3
 *
 */
$("#obj78798").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj78798_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj78798_droppedInsideTargetActions_3 is still running");
	return;
}
var obj78798_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj78798_droppedInsideTargetActions_3_loopCount = 0;
obj78798_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj78798: Event droppedInsideTargetActions_2
 *
 */
$("#obj78798").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj78798_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj78798_droppedInsideTargetActions_2 is still running");
	return;
}
var obj78798_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj78798_droppedInsideTargetActions_2_loopCount = 0;
obj78798_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj78798: Event droppedInsideTargetActions
 *
 */
$("#obj78798").bind("droppedInsideTargetActions", function(event) {
	if (window.obj78798_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj78798_droppedInsideTargetActions is still running");
	return;
}
var obj78798_droppedInsideTargetActions_runningActionsCount = 0;
var obj78798_droppedInsideTargetActions_loopCount = 0;
obj78798_droppedInsideTargetActions_actionGroup0();
});





/*
 *
 *   obj78780: Event Touch Down
 *
 */
$("#obj78780").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj78780_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj78780_onTap is still running");
	return;
}
var obj78780_onTap_runningActionsCount = 0;
var obj78780_onTap_loopCount = 0;
obj78780_onTap_actionGroup0();
});










/*
 *
 *   obj78772: Event Touch Down
 *
 */
$("#obj78772").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj78772_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj78772_onTap is still running");
	return;
}
var obj78772_onTap_runningActionsCount = 0;
var obj78772_onTap_loopCount = 0;
obj78772_onTap_actionGroup0();
});










/*
 *
 *   obj87925: Event Touch Down
 *
 */
$("#obj87925").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj87925_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj87925_onTap is still running");
	return;
}
var obj87925_onTap_runningActionsCount = 0;
var obj87925_onTap_loopCount = 0;
obj87925_onTap_actionGroup0();
});










/*
 *
 *   obj87920: Event Touch Down
 *
 */
$("#obj87920").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj87920_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj87920_onTap is still running");
	return;
}
var obj87920_onTap_runningActionsCount = 0;
var obj87920_onTap_loopCount = 0;
obj87920_onTap_actionGroup0();
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
	
$("#obj78962").trigger('SCEventShow');
$("#obj78959").trigger('SCEventShow');
$("#obj78956").trigger('SCEventShow');
$("#obj78952").trigger('SCEventShow');
$("#obj78950").trigger('SCEventShow');
$("#obj78948").trigger('SCEventShow');
$("#obj78946").trigger('SCEventShow');
$("#obj78944").trigger('SCEventShow');
$("#obj78942").trigger('SCEventShow');
$("#obj78940").trigger('SCEventShow');
$("#obj78938").trigger('SCEventShow');
$("#obj78936").trigger('SCEventShow');
$("#obj78934").trigger('SCEventShow');
$("#obj78932").trigger('SCEventShow');
$("#obj78930").trigger('SCEventShow');
$("#obj78928").trigger('SCEventShow');
$("#obj78927").trigger('SCEventShow');
$("#obj78926").trigger('SCEventShow');
$("#obj78924").trigger('SCEventShow');
$("#obj78922").trigger('SCEventShow');
$("#obj78920").trigger('SCEventShow');
$("#obj78918").trigger('SCEventShow');
$("#obj78878").trigger('SCEventShow');
$("#obj78838").trigger('SCEventShow');
$("#obj78798").trigger('SCEventShow');
$("#obj78780").trigger('SCEventShow');
$("#obj78772").trigger('SCEventShow');
$("#obj87925").trigger('SCEventShow');
$("#obj87920").trigger('SCEventShow');
$("#obj87930").trigger('SCEventShow');
$("#obj94805").trigger('SCEventShow');
$("#obj78770").trigger('SCEventShow');
	
});