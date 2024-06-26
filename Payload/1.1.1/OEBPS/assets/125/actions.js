pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 37755;
pubcoder.page.title = pubcoder.page.title || "125";
pubcoder.page.number = pubcoder.page.number || 125;
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
var obj37816_onTap_activeActionGroupIndex = -1;
var obj37816_onTap_runningActionsCount = 0;
var obj37816_onTap_loopCount = 0;
var obj37813_onTap_activeActionGroupIndex = -1;
var obj37813_onTap_runningActionsCount = 0;
var obj37813_onTap_loopCount = 0;
var obj37809_onTap_activeActionGroupIndex = -1;
var obj37809_onTap_runningActionsCount = 0;
var obj37809_onTap_loopCount = 0;
var obj37777_onDrag_activeActionGroupIndex = -1;
var obj37777_onDrag_runningActionsCount = 0;
var obj37777_onDrag_loopCount = 0;
var obj37777_onTouchDown_activeActionGroupIndex = -1;
var obj37777_onTouchDown_runningActionsCount = 0;
var obj37777_onTouchDown_loopCount = 0;
var obj37777_SCActionDragDrop37780_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj37777_SCActionDragDrop37780_droppedOutsideTargetActions_runningActionsCount = 0;
var obj37777_SCActionDragDrop37780_droppedOutsideTargetActions_loopCount = 0;
var obj37777_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj37777_droppedInsideTargetActions_runningActionsCount = 0;
var obj37777_droppedInsideTargetActions_loopCount = 0;
var obj37760_onDrag_activeActionGroupIndex = -1;
var obj37760_onDrag_runningActionsCount = 0;
var obj37760_onDrag_loopCount = 0;
var obj37760_onTouchDown_activeActionGroupIndex = -1;
var obj37760_onTouchDown_runningActionsCount = 0;
var obj37760_onTouchDown_loopCount = 0;
var obj37760_SCActionDragDrop37763_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj37760_SCActionDragDrop37763_droppedOutsideTargetActions_runningActionsCount = 0;
var obj37760_SCActionDragDrop37763_droppedOutsideTargetActions_loopCount = 0;
var obj37760_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj37760_droppedInsideTargetActions_runningActionsCount = 0;
var obj37760_droppedInsideTargetActions_loopCount = 0;
var obj67006_onTap_activeActionGroupIndex = -1;
var obj67006_onTap_runningActionsCount = 0;
var obj67006_onTap_loopCount = 0;
var obj66998_onTap_activeActionGroupIndex = -1;
var obj66998_onTap_runningActionsCount = 0;
var obj66998_onTap_loopCount = 0;
var obj88369_onTap_activeActionGroupIndex = -1;
var obj88369_onTap_runningActionsCount = 0;
var obj88369_onTap_loopCount = 0;
var obj88364_onTap_activeActionGroupIndex = -1;
var obj88364_onTap_runningActionsCount = 0;
var obj88364_onTap_loopCount = 0;
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
		
obj37816_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj37816_onTap_activeActionGroupIndex = -1;
		$("#obj37816").trigger("obj37816_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 37816) {
				console.warn("de-queueing event obj37816." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj37816").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj37816_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_37818();
function goToPage_37818() {
	window.obj37816_onTap_runningActionsCount = obj37816_onTap_runningActionsCount + 1;
	$("#anchor750")[0].click();
	window.obj37816_onTap_runningActionsCount = window.obj37816_onTap_runningActionsCount - 1;
if (window.obj37816_onTap_runningActionsCount < 0) {
	window.obj37816_onTap_runningActionsCount = 0;
} else if (window.obj37816_onTap_runningActionsCount == 0) {
	obj37816_onTap_actionGroup1();
}
}





















};
obj37816_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj37816_onTap_activeActionGroupIndex = -1;
		$("#obj37816").trigger("obj37816_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 37816) {
				console.warn("de-queueing event obj37816." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj37816").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj37816_onTap_activeActionGroupIndex = 1;
	





















};
obj37813_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj37813_onTap_activeActionGroupIndex = -1;
		$("#obj37813").trigger("obj37813_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 37813) {
				console.warn("de-queueing event obj37813." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj37813").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj37813_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_37815();
function goToPage_37815() {
	window.obj37813_onTap_runningActionsCount = obj37813_onTap_runningActionsCount + 1;
	$("#anchor751")[0].click();
	window.obj37813_onTap_runningActionsCount = window.obj37813_onTap_runningActionsCount - 1;
if (window.obj37813_onTap_runningActionsCount < 0) {
	window.obj37813_onTap_runningActionsCount = 0;
} else if (window.obj37813_onTap_runningActionsCount == 0) {
	obj37813_onTap_actionGroup1();
}
}





















};
obj37813_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj37813_onTap_activeActionGroupIndex = -1;
		$("#obj37813").trigger("obj37813_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 37813) {
				console.warn("de-queueing event obj37813." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj37813").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj37813_onTap_activeActionGroupIndex = 1;
	





















};
obj37809_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj37809_onTap_activeActionGroupIndex = -1;
		$("#obj37809").trigger("obj37809_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 37809) {
				console.warn("de-queueing event obj37809." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj37809").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj37809_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_37811();
function goToPage_37811() {
	window.obj37809_onTap_runningActionsCount = obj37809_onTap_runningActionsCount + 1;
	$("#anchor752")[0].click();
	window.obj37809_onTap_runningActionsCount = window.obj37809_onTap_runningActionsCount - 1;
if (window.obj37809_onTap_runningActionsCount < 0) {
	window.obj37809_onTap_runningActionsCount = 0;
} else if (window.obj37809_onTap_runningActionsCount == 0) {
	obj37809_onTap_actionGroup1();
}
}





















};
obj37809_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj37809_onTap_activeActionGroupIndex = -1;
		$("#obj37809").trigger("obj37809_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 37809) {
				console.warn("de-queueing event obj37809." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj37809").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj37809_onTap_activeActionGroupIndex = 1;
	





















};
obj37777_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj37777_onTouchDown_activeActionGroupIndex = -1;
		$("#obj37777").trigger("obj37777_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 37777) {
				console.warn("de-queueing event obj37777." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj37777").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj37777_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj37777");
//	action: dragDrop
//	target: obj37777 
dragDrop_37780();
function dragDrop_37780() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj37777_onTouchDown_runningActionsCount = obj37777_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj37777');
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
	  	containerNode = $('#obj37801');
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
    	window.obj37777_onTouchDown_runningActionsCount = window.obj37777_onTouchDown_runningActionsCount - 1;
if (window.obj37777_onTouchDown_runningActionsCount < 0) {
	window.obj37777_onTouchDown_runningActionsCount = 0;
} else if (window.obj37777_onTouchDown_runningActionsCount == 0) {
	obj37777_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj37797");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_37780 = false;
    	var dropped_id_37780;
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
					dropped_37780 = true;
					dropped_id_37780 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_37780) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj37777").trigger('SCActionDragDrop37780_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj37777_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj37777_onTouchDown_activeActionGroupIndex = -1;
		$("#obj37777").trigger("obj37777_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 37777) {
				console.warn("de-queueing event obj37777." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj37777").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj37777_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj37777_SCActionDragDrop37780_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj37777_SCActionDragDrop37780_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj37777").trigger("obj37777_SCActionDragDrop37780_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 37777) {
				console.warn("de-queueing event obj37777." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj37777").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj37777_SCActionDragDrop37780_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj37777 
move_92561();
function move_92561() {
	window.obj37777_SCActionDragDrop37780_droppedOutsideTargetActions_runningActionsCount = obj37777_SCActionDragDrop37780_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj37777");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 114;
	var moveY = 539;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj37777_SCActionDragDrop37780_droppedOutsideTargetActions_runningActionsCount = window.obj37777_SCActionDragDrop37780_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj37777_SCActionDragDrop37780_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj37777_SCActionDragDrop37780_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj37777_SCActionDragDrop37780_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj37777_SCActionDragDrop37780_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj37777_SCActionDragDrop37780_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj37777_SCActionDragDrop37780_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj37777").trigger("obj37777_SCActionDragDrop37780_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 37777) {
				console.warn("de-queueing event obj37777." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj37777").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj37777_SCActionDragDrop37780_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj37777_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj37777_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj37777").trigger("obj37777_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 37777) {
				console.warn("de-queueing event obj37777." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj37777").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj37777_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_37782();
function runjs_37782() {
	window.obj37777_droppedInsideTargetActions_runningActionsCount = obj37777_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj37797").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj37777_droppedInsideTargetActions_runningActionsCount = window.obj37777_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj37777_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj37777_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj37777_droppedInsideTargetActions_runningActionsCount == 0) {
	obj37777_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj37777_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj37777_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj37777").trigger("obj37777_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 37777) {
				console.warn("de-queueing event obj37777." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj37777").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj37777_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_37783();
function runjs_37783() {
	window.obj37777_droppedInsideTargetActions_runningActionsCount = obj37777_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj37797").css("border-color", "#C00000"); $("#obj37797").css("border-width", "2px"); $("#obj37797").css("border-style", "solid"); $("#obj37797").css("border-radius", "10px"); $("#obj37797").css("-webkit-border-radius", "10px"); $("#obj37797").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj37777_droppedInsideTargetActions_runningActionsCount = window.obj37777_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj37777_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj37777_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj37777_droppedInsideTargetActions_runningActionsCount == 0) {
	obj37777_droppedInsideTargetActions_actionGroup2();
}
	}, 1);
}







};
obj37777_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj37777_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj37777").trigger("obj37777_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 37777) {
				console.warn("de-queueing event obj37777." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj37777").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj37777_droppedInsideTargetActions_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj37795 
hide_37784();
function hide_37784() {
	var selector = "#obj37795";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj37777_droppedInsideTargetActions_runningActionsCount = obj37777_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj37777_droppedInsideTargetActions_runningActionsCount = window.obj37777_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj37777_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj37777_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj37777_droppedInsideTargetActions_runningActionsCount == 0) {
	obj37777_droppedInsideTargetActions_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_37784(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj37777_droppedInsideTargetActions_runningActionsCount = window.obj37777_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj37777_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj37777_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj37777_droppedInsideTargetActions_runningActionsCount == 0) {
	obj37777_droppedInsideTargetActions_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj37777_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj37777_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj37777").trigger("obj37777_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 37777) {
				console.warn("de-queueing event obj37777." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj37777").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj37777_droppedInsideTargetActions_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_37785();
function runjs_37785() {
	window.obj37777_droppedInsideTargetActions_runningActionsCount = obj37777_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj37777").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj37777_droppedInsideTargetActions_runningActionsCount = window.obj37777_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj37777_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj37777_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj37777_droppedInsideTargetActions_runningActionsCount == 0) {
	obj37777_droppedInsideTargetActions_actionGroup4();
}
	}, 1);
}







};
obj37777_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj37777_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj37777").trigger("obj37777_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 37777) {
				console.warn("de-queueing event obj37777." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj37777").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj37777_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_37786();
function switchText_37786() {
	window.obj37777_droppedInsideTargetActions_runningActionsCount = obj37777_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj37771_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj37771_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj37771").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj37771_content");
			setTimeout(function () {
				window.obj37777_droppedInsideTargetActions_runningActionsCount = window.obj37777_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj37777_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj37777_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj37777_droppedInsideTargetActions_runningActionsCount == 0) {
	obj37777_droppedInsideTargetActions_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj37771 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj37777_droppedInsideTargetActions_runningActionsCount = window.obj37777_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj37777_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj37777_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj37777_droppedInsideTargetActions_runningActionsCount == 0) {
	obj37777_droppedInsideTargetActions_actionGroup5();
}
		}, 1);
	}
}






};
obj37777_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj37777_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj37777").trigger("obj37777_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 37777) {
				console.warn("de-queueing event obj37777." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj37777").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj37777_droppedInsideTargetActions_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj37777 
move_37787();
function move_37787() {
	window.obj37777_droppedInsideTargetActions_runningActionsCount = obj37777_droppedInsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj37777");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 114;
	var moveY = 539;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj37777_droppedInsideTargetActions_runningActionsCount = window.obj37777_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj37777_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj37777_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj37777_droppedInsideTargetActions_runningActionsCount == 0) {
	obj37777_droppedInsideTargetActions_actionGroup6();
}
		}, 1);
	});
}



















};
obj37777_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj37777_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj37777").trigger("obj37777_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 37777) {
				console.warn("de-queueing event obj37777." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj37777").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj37777_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_37788();
function runjs_37788() {
	window.obj37777_droppedInsideTargetActions_runningActionsCount = obj37777_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj37797").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj37777_droppedInsideTargetActions_runningActionsCount = window.obj37777_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj37777_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj37777_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj37777_droppedInsideTargetActions_runningActionsCount == 0) {
	obj37777_droppedInsideTargetActions_actionGroup7();
}
	}, 1);
}







};
obj37777_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj37777_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj37777").trigger("obj37777_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 37777) {
				console.warn("de-queueing event obj37777." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj37777").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj37777_droppedInsideTargetActions_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_37789();
function runjs_37789() {
	window.obj37777_droppedInsideTargetActions_runningActionsCount = obj37777_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj37797").css("border-color", "#000000"); $("#obj37797").css("border-width", "1px"); $("#obj37797").css("border-style", "solid"); $("#obj37797").css("border-radius", "10px"); $("#obj37797").css("-webkit-border-radius", "10px"); $("#obj37797").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj37777_droppedInsideTargetActions_runningActionsCount = window.obj37777_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj37777_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj37777_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj37777_droppedInsideTargetActions_runningActionsCount == 0) {
	obj37777_droppedInsideTargetActions_actionGroup8();
}
	}, 1);
}







};
obj37777_droppedInsideTargetActions_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj37777_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj37777").trigger("obj37777_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 37777) {
				console.warn("de-queueing event obj37777." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj37777").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj37777_droppedInsideTargetActions_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj37795
(function(){
	window.obj37777_droppedInsideTargetActions_runningActionsCount = obj37777_droppedInsideTargetActions_runningActionsCount + 1;

	var selector = "#obj37795";
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
					window.obj37777_droppedInsideTargetActions_runningActionsCount = window.obj37777_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj37777_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj37777_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj37777_droppedInsideTargetActions_runningActionsCount == 0) {
	obj37777_droppedInsideTargetActions_actionGroup9();
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
				window.obj37777_droppedInsideTargetActions_runningActionsCount = window.obj37777_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj37777_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj37777_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj37777_droppedInsideTargetActions_runningActionsCount == 0) {
	obj37777_droppedInsideTargetActions_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj37777_droppedInsideTargetActions_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj37777_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj37777").trigger("obj37777_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 37777) {
				console.warn("de-queueing event obj37777." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj37777").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj37777_droppedInsideTargetActions_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_37791();
function runjs_37791() {
	window.obj37777_droppedInsideTargetActions_runningActionsCount = obj37777_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj37777").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj37777_droppedInsideTargetActions_runningActionsCount = window.obj37777_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj37777_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj37777_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj37777_droppedInsideTargetActions_runningActionsCount == 0) {
	obj37777_droppedInsideTargetActions_actionGroup10();
}
	}, 1);
}







};
obj37777_droppedInsideTargetActions_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj37777_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj37777").trigger("obj37777_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 37777) {
				console.warn("de-queueing event obj37777." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj37777").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj37777_droppedInsideTargetActions_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_37792();
function runjs_37792() {
	window.obj37777_droppedInsideTargetActions_runningActionsCount = obj37777_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj37777").css("border-color", "rgba(0,0,0,0)"); $("#obj37777").css("border-width", "0px"); $("#obj37777").css("border-style", "solid"); $("#obj37777").css("border-radius", "10px"); $("#obj37777").css("-webkit-border-radius", "10px"); $("#obj37777").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj37777_droppedInsideTargetActions_runningActionsCount = window.obj37777_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj37777_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj37777_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj37777_droppedInsideTargetActions_runningActionsCount == 0) {
	obj37777_droppedInsideTargetActions_actionGroup11();
}
	}, 1);
}







};
obj37777_droppedInsideTargetActions_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj37777_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj37777").trigger("obj37777_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 37777) {
				console.warn("de-queueing event obj37777." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj37777").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj37777_droppedInsideTargetActions_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj37756 
playAudio_37793();
function playAudio_37793() {
	window.obj37777_droppedInsideTargetActions_runningActionsCount = obj37777_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj37756")[0];
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
		    window.obj37777_droppedInsideTargetActions_runningActionsCount = window.obj37777_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj37777_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj37777_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj37777_droppedInsideTargetActions_runningActionsCount == 0) {
	obj37777_droppedInsideTargetActions_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj37777_droppedInsideTargetActions_runningActionsCount = window.obj37777_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj37777_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj37777_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj37777_droppedInsideTargetActions_runningActionsCount == 0) {
	obj37777_droppedInsideTargetActions_actionGroup12();
}
	}
}









};
obj37777_droppedInsideTargetActions_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj37777_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj37777").trigger("obj37777_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 37777) {
				console.warn("de-queueing event obj37777." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj37777").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj37777_droppedInsideTargetActions_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_37794();
function switchText_37794() {
	window.obj37777_droppedInsideTargetActions_runningActionsCount = obj37777_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj37771_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj37771_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj37771").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj37771_content");
			setTimeout(function () {
				window.obj37777_droppedInsideTargetActions_runningActionsCount = window.obj37777_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj37777_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj37777_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj37777_droppedInsideTargetActions_runningActionsCount == 0) {
	obj37777_droppedInsideTargetActions_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj37771 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj37777_droppedInsideTargetActions_runningActionsCount = window.obj37777_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj37777_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj37777_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj37777_droppedInsideTargetActions_runningActionsCount == 0) {
	obj37777_droppedInsideTargetActions_actionGroup13();
}
		}, 1);
	}
}






};
obj37777_droppedInsideTargetActions_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj37777_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj37777").trigger("obj37777_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 37777) {
				console.warn("de-queueing event obj37777." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj37777").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj37777_droppedInsideTargetActions_activeActionGroupIndex = 13;
	





















};
obj37760_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj37760_onTouchDown_activeActionGroupIndex = -1;
		$("#obj37760").trigger("obj37760_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 37760) {
				console.warn("de-queueing event obj37760." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj37760").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj37760_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj37760");
//	action: dragDrop
//	target: obj37760 
dragDrop_37763();
function dragDrop_37763() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj37760_onTouchDown_runningActionsCount = obj37760_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj37760');
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
	  	containerNode = $('#obj37801');
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
    	window.obj37760_onTouchDown_runningActionsCount = window.obj37760_onTouchDown_runningActionsCount - 1;
if (window.obj37760_onTouchDown_runningActionsCount < 0) {
	window.obj37760_onTouchDown_runningActionsCount = 0;
} else if (window.obj37760_onTouchDown_runningActionsCount == 0) {
	obj37760_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj37797");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_37763 = false;
    	var dropped_id_37763;
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
					dropped_37763 = true;
					dropped_id_37763 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_37763) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj37760").trigger('SCActionDragDrop37763_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj37760_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj37760_onTouchDown_activeActionGroupIndex = -1;
		$("#obj37760").trigger("obj37760_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 37760) {
				console.warn("de-queueing event obj37760." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj37760").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj37760_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj37760_SCActionDragDrop37763_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj37760_SCActionDragDrop37763_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj37760").trigger("obj37760_SCActionDragDrop37763_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 37760) {
				console.warn("de-queueing event obj37760." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj37760").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj37760_SCActionDragDrop37763_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj37760 
move_92563();
function move_92563() {
	window.obj37760_SCActionDragDrop37763_droppedOutsideTargetActions_runningActionsCount = obj37760_SCActionDragDrop37763_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj37760");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 344;
	var moveY = 543;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj37760_SCActionDragDrop37763_droppedOutsideTargetActions_runningActionsCount = window.obj37760_SCActionDragDrop37763_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj37760_SCActionDragDrop37763_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj37760_SCActionDragDrop37763_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj37760_SCActionDragDrop37763_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj37760_SCActionDragDrop37763_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj37760_SCActionDragDrop37763_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj37760_SCActionDragDrop37763_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj37760").trigger("obj37760_SCActionDragDrop37763_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 37760) {
				console.warn("de-queueing event obj37760." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj37760").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj37760_SCActionDragDrop37763_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj37760_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj37760_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj37760").trigger("obj37760_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 37760) {
				console.warn("de-queueing event obj37760." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj37760").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj37760_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_37765();
function runjs_37765() {
	window.obj37760_droppedInsideTargetActions_runningActionsCount = obj37760_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj37797").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj37760_droppedInsideTargetActions_runningActionsCount = window.obj37760_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj37760_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj37760_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj37760_droppedInsideTargetActions_runningActionsCount == 0) {
	obj37760_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj37760_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj37760_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj37760").trigger("obj37760_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 37760) {
				console.warn("de-queueing event obj37760." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj37760").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj37760_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_37769();
function switchText_37769() {
	window.obj37760_droppedInsideTargetActions_runningActionsCount = obj37760_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj37771_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj37771_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj37771").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj37771_content");
			setTimeout(function () {
				window.obj37760_droppedInsideTargetActions_runningActionsCount = window.obj37760_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj37760_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj37760_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj37760_droppedInsideTargetActions_runningActionsCount == 0) {
	obj37760_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj37771 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj37760_droppedInsideTargetActions_runningActionsCount = window.obj37760_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj37760_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj37760_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj37760_droppedInsideTargetActions_runningActionsCount == 0) {
	obj37760_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj37760_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj37760_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj37760").trigger("obj37760_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 37760) {
				console.warn("de-queueing event obj37760." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj37760").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj37760_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_37766();
function runjs_37766() {
	window.obj37760_droppedInsideTargetActions_runningActionsCount = obj37760_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj37797").css("border-color", "#058E3F"); $("#obj37797").css("border-width", "2px"); $("#obj37797").css("border-style", "solid"); $("#obj37797").css("border-radius", "10px"); $("#obj37797").css("-webkit-border-radius", "10px"); $("#obj37797").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj37760_droppedInsideTargetActions_runningActionsCount = window.obj37760_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj37760_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj37760_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj37760_droppedInsideTargetActions_runningActionsCount == 0) {
	obj37760_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj37760_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj37760_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj37760").trigger("obj37760_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 37760) {
				console.warn("de-queueing event obj37760." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj37760").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj37760_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj37795 
hide_37767();
function hide_37767() {
	var selector = "#obj37795";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj37760_droppedInsideTargetActions_runningActionsCount = obj37760_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj37760_droppedInsideTargetActions_runningActionsCount = window.obj37760_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj37760_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj37760_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj37760_droppedInsideTargetActions_runningActionsCount == 0) {
	obj37760_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_37767(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj37760_droppedInsideTargetActions_runningActionsCount = window.obj37760_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj37760_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj37760_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj37760_droppedInsideTargetActions_runningActionsCount == 0) {
	obj37760_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj37760_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj37760_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj37760").trigger("obj37760_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 37760) {
				console.warn("de-queueing event obj37760." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj37760").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj37760_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_37768();
function runjs_37768() {
	window.obj37760_droppedInsideTargetActions_runningActionsCount = obj37760_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj37760").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj37760_droppedInsideTargetActions_runningActionsCount = window.obj37760_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj37760_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj37760_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj37760_droppedInsideTargetActions_runningActionsCount == 0) {
	obj37760_droppedInsideTargetActions_actionGroup5();
}
	}, 1);
}







};
obj37760_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj37760_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj37760").trigger("obj37760_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 37760) {
				console.warn("de-queueing event obj37760." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj37760").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj37760_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj37775 
playAudio_37770();
function playAudio_37770() {
	window.obj37760_droppedInsideTargetActions_runningActionsCount = obj37760_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj37775")[0];
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
		    window.obj37760_droppedInsideTargetActions_runningActionsCount = window.obj37760_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj37760_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj37760_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj37760_droppedInsideTargetActions_runningActionsCount == 0) {
	obj37760_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj37760_droppedInsideTargetActions_runningActionsCount = window.obj37760_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj37760_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj37760_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj37760_droppedInsideTargetActions_runningActionsCount == 0) {
	obj37760_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj37760_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj37760_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj37760").trigger("obj37760_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 37760) {
				console.warn("de-queueing event obj37760." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj37760").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj37760_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90452();
function switchText_90452() {
	window.obj37760_droppedInsideTargetActions_runningActionsCount = obj37760_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj37771_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj37771_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj37771").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj37771_content");
			setTimeout(function () {
				window.obj37760_droppedInsideTargetActions_runningActionsCount = window.obj37760_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj37760_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj37760_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj37760_droppedInsideTargetActions_runningActionsCount == 0) {
	obj37760_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj37771 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj37760_droppedInsideTargetActions_runningActionsCount = window.obj37760_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj37760_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj37760_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj37760_droppedInsideTargetActions_runningActionsCount == 0) {
	obj37760_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj37760_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj37760_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj37760").trigger("obj37760_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 37760) {
				console.warn("de-queueing event obj37760." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj37760").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj37760_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj67006_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67006_onTap_activeActionGroupIndex = -1;
		$("#obj67006").trigger("obj67006_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67006) {
				console.warn("de-queueing event obj67006." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67006").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67006_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj67006 
hide_67009();
function hide_67009() {
	var selector = "#obj67006";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj67006_onTap_runningActionsCount = obj67006_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj67006_onTap_runningActionsCount = window.obj67006_onTap_runningActionsCount - 1;
if (window.obj67006_onTap_runningActionsCount < 0) {
	window.obj67006_onTap_runningActionsCount = 0;
} else if (window.obj67006_onTap_runningActionsCount == 0) {
	obj67006_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_67009(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj67006_onTap_runningActionsCount = window.obj67006_onTap_runningActionsCount - 1;
if (window.obj67006_onTap_runningActionsCount < 0) {
	window.obj67006_onTap_runningActionsCount = 0;
} else if (window.obj67006_onTap_runningActionsCount == 0) {
	obj67006_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj67012 
stopMovie_67008();
function stopMovie_67008() {
	window.obj67006_onTap_runningActionsCount = obj67006_onTap_runningActionsCount + 1;
	var myVideo = $("#obj67012")[0];
	myVideo.pause();
	window.obj67006_onTap_runningActionsCount = window.obj67006_onTap_runningActionsCount - 1;
if (window.obj67006_onTap_runningActionsCount < 0) {
	window.obj67006_onTap_runningActionsCount = 0;
} else if (window.obj67006_onTap_runningActionsCount == 0) {
	obj67006_onTap_actionGroup1();
}
}
















};
obj67006_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67006_onTap_activeActionGroupIndex = -1;
		$("#obj67006").trigger("obj67006_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67006) {
				console.warn("de-queueing event obj67006." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67006").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67006_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj66998
(function(){
	window.obj67006_onTap_runningActionsCount = obj67006_onTap_runningActionsCount + 1;

	var selector = "#obj66998";
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
					window.obj67006_onTap_runningActionsCount = window.obj67006_onTap_runningActionsCount - 1;
if (window.obj67006_onTap_runningActionsCount < 0) {
	window.obj67006_onTap_runningActionsCount = 0;
} else if (window.obj67006_onTap_runningActionsCount == 0) {
	obj67006_onTap_actionGroup2();
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
				window.obj67006_onTap_runningActionsCount = window.obj67006_onTap_runningActionsCount - 1;
if (window.obj67006_onTap_runningActionsCount < 0) {
	window.obj67006_onTap_runningActionsCount = 0;
} else if (window.obj67006_onTap_runningActionsCount == 0) {
	obj67006_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj67006_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67006_onTap_activeActionGroupIndex = -1;
		$("#obj67006").trigger("obj67006_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67006) {
				console.warn("de-queueing event obj67006." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67006").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67006_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj67012 
move_67011();
function move_67011() {
	window.obj67006_onTap_runningActionsCount = obj67006_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj67012");
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
			window.obj67006_onTap_runningActionsCount = window.obj67006_onTap_runningActionsCount - 1;
if (window.obj67006_onTap_runningActionsCount < 0) {
	window.obj67006_onTap_runningActionsCount = 0;
} else if (window.obj67006_onTap_runningActionsCount == 0) {
	obj67006_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj67006_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj67006_onTap_activeActionGroupIndex = -1;
		$("#obj67006").trigger("obj67006_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67006) {
				console.warn("de-queueing event obj67006." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67006").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67006_onTap_activeActionGroupIndex = 3;
	





















};
obj66998_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj66998_onTap_activeActionGroupIndex = -1;
		$("#obj66998").trigger("obj66998_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 66998) {
				console.warn("de-queueing event obj66998." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj66998").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj66998_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj66998 
hide_67001();
function hide_67001() {
	var selector = "#obj66998";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj66998_onTap_runningActionsCount = obj66998_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj66998_onTap_runningActionsCount = window.obj66998_onTap_runningActionsCount - 1;
if (window.obj66998_onTap_runningActionsCount < 0) {
	window.obj66998_onTap_runningActionsCount = 0;
} else if (window.obj66998_onTap_runningActionsCount == 0) {
	obj66998_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_67001(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj66998_onTap_runningActionsCount = window.obj66998_onTap_runningActionsCount - 1;
if (window.obj66998_onTap_runningActionsCount < 0) {
	window.obj66998_onTap_runningActionsCount = 0;
} else if (window.obj66998_onTap_runningActionsCount == 0) {
	obj66998_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj67012 
playPauseMovie_67000();
function playPauseMovie_67000() {
	window.obj66998_onTap_runningActionsCount = obj66998_onTap_runningActionsCount + 1;
	var myVideo = $("#obj67012")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj66998_onTap_runningActionsCount = window.obj66998_onTap_runningActionsCount - 1;
if (window.obj66998_onTap_runningActionsCount < 0) {
	window.obj66998_onTap_runningActionsCount = 0;
} else if (window.obj66998_onTap_runningActionsCount == 0) {
	obj66998_onTap_actionGroup1();
}
}

















};
obj66998_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj66998_onTap_activeActionGroupIndex = -1;
		$("#obj66998").trigger("obj66998_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 66998) {
				console.warn("de-queueing event obj66998." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj66998").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj66998_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj67006
(function(){
	window.obj66998_onTap_runningActionsCount = obj66998_onTap_runningActionsCount + 1;

	var selector = "#obj67006";
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
					window.obj66998_onTap_runningActionsCount = window.obj66998_onTap_runningActionsCount - 1;
if (window.obj66998_onTap_runningActionsCount < 0) {
	window.obj66998_onTap_runningActionsCount = 0;
} else if (window.obj66998_onTap_runningActionsCount == 0) {
	obj66998_onTap_actionGroup2();
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
				window.obj66998_onTap_runningActionsCount = window.obj66998_onTap_runningActionsCount - 1;
if (window.obj66998_onTap_runningActionsCount < 0) {
	window.obj66998_onTap_runningActionsCount = 0;
} else if (window.obj66998_onTap_runningActionsCount == 0) {
	obj66998_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj66998_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj66998_onTap_activeActionGroupIndex = -1;
		$("#obj66998").trigger("obj66998_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 66998) {
				console.warn("de-queueing event obj66998." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj66998").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj66998_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj67012 
move_67003();
function move_67003() {
	window.obj66998_onTap_runningActionsCount = obj66998_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj67012");
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
			window.obj66998_onTap_runningActionsCount = window.obj66998_onTap_runningActionsCount - 1;
if (window.obj66998_onTap_runningActionsCount < 0) {
	window.obj66998_onTap_runningActionsCount = 0;
} else if (window.obj66998_onTap_runningActionsCount == 0) {
	obj66998_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj66998_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj66998_onTap_activeActionGroupIndex = -1;
		$("#obj66998").trigger("obj66998_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 66998) {
				console.warn("de-queueing event obj66998." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj66998").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj66998_onTap_activeActionGroupIndex = 3;
	





















};
obj88369_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88369_onTap_activeActionGroupIndex = -1;
		$("#obj88369").trigger("obj88369_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88369) {
				console.warn("de-queueing event obj88369." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88369").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88369_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj88374 
stopAudio_88371();
function stopAudio_88371() {
	window.obj88369_onTap_runningActionsCount = obj88369_onTap_runningActionsCount + 1;
	var myAudio = $("#obj88374")[0];
	myAudio.pause();
	window.obj88369_onTap_runningActionsCount = window.obj88369_onTap_runningActionsCount - 1;
if (window.obj88369_onTap_runningActionsCount < 0) {
	window.obj88369_onTap_runningActionsCount = 0;
} else if (window.obj88369_onTap_runningActionsCount == 0) {
	obj88369_onTap_actionGroup1();
}
}








};
obj88369_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88369_onTap_activeActionGroupIndex = -1;
		$("#obj88369").trigger("obj88369_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88369) {
				console.warn("de-queueing event obj88369." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88369").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88369_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj88369 
hide_88372();
function hide_88372() {
	var selector = "#obj88369";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj88369_onTap_runningActionsCount = obj88369_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj88369_onTap_runningActionsCount = window.obj88369_onTap_runningActionsCount - 1;
if (window.obj88369_onTap_runningActionsCount < 0) {
	window.obj88369_onTap_runningActionsCount = 0;
} else if (window.obj88369_onTap_runningActionsCount == 0) {
	obj88369_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_88372(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj88369_onTap_runningActionsCount = window.obj88369_onTap_runningActionsCount - 1;
if (window.obj88369_onTap_runningActionsCount < 0) {
	window.obj88369_onTap_runningActionsCount = 0;
} else if (window.obj88369_onTap_runningActionsCount == 0) {
	obj88369_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj88369_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88369_onTap_activeActionGroupIndex = -1;
		$("#obj88369").trigger("obj88369_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88369) {
				console.warn("de-queueing event obj88369." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88369").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88369_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj88364
(function(){
	window.obj88369_onTap_runningActionsCount = obj88369_onTap_runningActionsCount + 1;

	var selector = "#obj88364";
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
					window.obj88369_onTap_runningActionsCount = window.obj88369_onTap_runningActionsCount - 1;
if (window.obj88369_onTap_runningActionsCount < 0) {
	window.obj88369_onTap_runningActionsCount = 0;
} else if (window.obj88369_onTap_runningActionsCount == 0) {
	obj88369_onTap_actionGroup3();
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
				window.obj88369_onTap_runningActionsCount = window.obj88369_onTap_runningActionsCount - 1;
if (window.obj88369_onTap_runningActionsCount < 0) {
	window.obj88369_onTap_runningActionsCount = 0;
} else if (window.obj88369_onTap_runningActionsCount == 0) {
	obj88369_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj88369_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj88369_onTap_activeActionGroupIndex = -1;
		$("#obj88369").trigger("obj88369_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88369) {
				console.warn("de-queueing event obj88369." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88369").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88369_onTap_activeActionGroupIndex = 3;
	





















};
obj88364_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88364_onTap_activeActionGroupIndex = -1;
		$("#obj88364").trigger("obj88364_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88364) {
				console.warn("de-queueing event obj88364." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88364").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88364_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj88364 
hide_88366();
function hide_88366() {
	var selector = "#obj88364";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj88364_onTap_runningActionsCount = obj88364_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj88364_onTap_runningActionsCount = window.obj88364_onTap_runningActionsCount - 1;
if (window.obj88364_onTap_runningActionsCount < 0) {
	window.obj88364_onTap_runningActionsCount = 0;
} else if (window.obj88364_onTap_runningActionsCount == 0) {
	obj88364_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_88366(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj88364_onTap_runningActionsCount = window.obj88364_onTap_runningActionsCount - 1;
if (window.obj88364_onTap_runningActionsCount < 0) {
	window.obj88364_onTap_runningActionsCount = 0;
} else if (window.obj88364_onTap_runningActionsCount == 0) {
	obj88364_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj88364_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88364_onTap_activeActionGroupIndex = -1;
		$("#obj88364").trigger("obj88364_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88364) {
				console.warn("de-queueing event obj88364." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88364").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88364_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj88369
(function(){
	window.obj88364_onTap_runningActionsCount = obj88364_onTap_runningActionsCount + 1;

	var selector = "#obj88369";
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
					window.obj88364_onTap_runningActionsCount = window.obj88364_onTap_runningActionsCount - 1;
if (window.obj88364_onTap_runningActionsCount < 0) {
	window.obj88364_onTap_runningActionsCount = 0;
} else if (window.obj88364_onTap_runningActionsCount == 0) {
	obj88364_onTap_actionGroup2();
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
				window.obj88364_onTap_runningActionsCount = window.obj88364_onTap_runningActionsCount - 1;
if (window.obj88364_onTap_runningActionsCount < 0) {
	window.obj88364_onTap_runningActionsCount = 0;
} else if (window.obj88364_onTap_runningActionsCount == 0) {
	obj88364_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj88364_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88364_onTap_activeActionGroupIndex = -1;
		$("#obj88364").trigger("obj88364_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88364) {
				console.warn("de-queueing event obj88364." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88364").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88364_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj88374 
playAudio_88368();
function playAudio_88368() {
	window.obj88364_onTap_runningActionsCount = obj88364_onTap_runningActionsCount + 1;
	var myAudio = $("#obj88374")[0];
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
		    window.obj88364_onTap_runningActionsCount = window.obj88364_onTap_runningActionsCount - 1;
if (window.obj88364_onTap_runningActionsCount < 0) {
	window.obj88364_onTap_runningActionsCount = 0;
} else if (window.obj88364_onTap_runningActionsCount == 0) {
	obj88364_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj88364_onTap_runningActionsCount = window.obj88364_onTap_runningActionsCount - 1;
if (window.obj88364_onTap_runningActionsCount < 0) {
	window.obj88364_onTap_runningActionsCount = 0;
} else if (window.obj88364_onTap_runningActionsCount == 0) {
	obj88364_onTap_actionGroup3();
}
	}
}









};
obj88364_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj88364_onTap_activeActionGroupIndex = -1;
		$("#obj88364").trigger("obj88364_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88364) {
				console.warn("de-queueing event obj88364." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88364").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88364_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj37816: Event Touch Down
 *
 */
$("#obj37816").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj37816_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj37816_onTap is still running");
	return;
}
var obj37816_onTap_runningActionsCount = 0;
var obj37816_onTap_loopCount = 0;
obj37816_onTap_actionGroup0();
});










/*
 *
 *   obj37813: Event Touch Down
 *
 */
$("#obj37813").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj37813_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj37813_onTap is still running");
	return;
}
var obj37813_onTap_runningActionsCount = 0;
var obj37813_onTap_loopCount = 0;
obj37813_onTap_actionGroup0();
});










/*
 *
 *   obj37809: Event Touch Down
 *
 */
$("#obj37809").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj37809_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj37809_onTap is still running");
	return;
}
var obj37809_onTap_runningActionsCount = 0;
var obj37809_onTap_loopCount = 0;
obj37809_onTap_actionGroup0();
});

















































































/*
 *
 *   obj37777: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj37777");
	var winTarget = document.getElementById("obj37777");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj37777").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj37777_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj37777_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj37777_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj37777_onTouchDown is still running");
	return;
}
var obj37777_onTouchDown_runningActionsCount = 0;
var obj37777_onTouchDown_loopCount = 0;
obj37777_onTouchDown_actionGroup0();
});



/*
 *
 *   obj37777: Event SCActionDragDrop37780_droppedOutsideTargetActions
 *
 */
$("#obj37777").bind("SCActionDragDrop37780_droppedOutsideTargetActions", function(event) {
	if (window.obj37777_SCActionDragDrop37780_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj37777_SCActionDragDrop37780_droppedOutsideTargetActions is still running");
	return;
}
var obj37777_SCActionDragDrop37780_droppedOutsideTargetActions_runningActionsCount = 0;
var obj37777_SCActionDragDrop37780_droppedOutsideTargetActions_loopCount = 0;
obj37777_SCActionDragDrop37780_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj37777: Event droppedInsideTargetActions
 *
 */
$("#obj37777").bind("droppedInsideTargetActions", function(event) {
	if (window.obj37777_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj37777_droppedInsideTargetActions is still running");
	return;
}
var obj37777_droppedInsideTargetActions_runningActionsCount = 0;
var obj37777_droppedInsideTargetActions_loopCount = 0;
obj37777_droppedInsideTargetActions_actionGroup0();
});




































/*
 *
 *   obj37760: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj37760");
	var winTarget = document.getElementById("obj37760");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj37760").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj37760_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj37760_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj37760_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj37760_onTouchDown is still running");
	return;
}
var obj37760_onTouchDown_runningActionsCount = 0;
var obj37760_onTouchDown_loopCount = 0;
obj37760_onTouchDown_actionGroup0();
});



/*
 *
 *   obj37760: Event SCActionDragDrop37763_droppedOutsideTargetActions
 *
 */
$("#obj37760").bind("SCActionDragDrop37763_droppedOutsideTargetActions", function(event) {
	if (window.obj37760_SCActionDragDrop37763_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj37760_SCActionDragDrop37763_droppedOutsideTargetActions is still running");
	return;
}
var obj37760_SCActionDragDrop37763_droppedOutsideTargetActions_runningActionsCount = 0;
var obj37760_SCActionDragDrop37763_droppedOutsideTargetActions_loopCount = 0;
obj37760_SCActionDragDrop37763_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj37760: Event droppedInsideTargetActions
 *
 */
$("#obj37760").bind("droppedInsideTargetActions", function(event) {
	if (window.obj37760_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj37760_droppedInsideTargetActions is still running");
	return;
}
var obj37760_droppedInsideTargetActions_runningActionsCount = 0;
var obj37760_droppedInsideTargetActions_loopCount = 0;
obj37760_droppedInsideTargetActions_actionGroup0();
});

























/*
 *
 *   obj67006: Event Touch Down
 *
 */
$("#obj67006").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj67006_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj67006_onTap is still running");
	return;
}
var obj67006_onTap_runningActionsCount = 0;
var obj67006_onTap_loopCount = 0;
obj67006_onTap_actionGroup0();
});










/*
 *
 *   obj66998: Event Touch Down
 *
 */
$("#obj66998").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj66998_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj66998_onTap is still running");
	return;
}
var obj66998_onTap_runningActionsCount = 0;
var obj66998_onTap_loopCount = 0;
obj66998_onTap_actionGroup0();
});










/*
 *
 *   obj88369: Event Touch Down
 *
 */
$("#obj88369").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj88369_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj88369_onTap is still running");
	return;
}
var obj88369_onTap_runningActionsCount = 0;
var obj88369_onTap_loopCount = 0;
obj88369_onTap_actionGroup0();
});










/*
 *
 *   obj88364: Event Touch Down
 *
 */
$("#obj88364").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj88364_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj88364_onTap is still running");
	return;
}
var obj88364_onTap_runningActionsCount = 0;
var obj88364_onTap_loopCount = 0;
obj88364_onTap_actionGroup0();
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
	
$("#obj37832").trigger('SCEventShow');
$("#obj37816").trigger('SCEventShow');
$("#obj37813").trigger('SCEventShow');
$("#obj37809").trigger('SCEventShow');
$("#obj37807").trigger('SCEventShow');
$("#obj37805").trigger('SCEventShow');
$("#obj37803").trigger('SCEventShow');
$("#obj37801").trigger('SCEventShow');
$("#obj37799").trigger('SCEventShow');
$("#obj37797").trigger('SCEventShow');
$("#obj37795").trigger('SCEventShow');
$("#obj37777").trigger('SCEventShow');
$("#obj37775").trigger('SCEventShow');
$("#obj37773").trigger('SCEventShow');
$("#obj37771").trigger('SCEventShow');
$("#obj37760").trigger('SCEventShow');
$("#obj37758").trigger('SCEventShow');
$("#obj37756").trigger('SCEventShow');
$("#obj67006").trigger('SCEventShow');
$("#obj66998").trigger('SCEventShow');
$("#obj88369").trigger('SCEventShow');
$("#obj88364").trigger('SCEventShow');
$("#obj88374").trigger('SCEventShow');
$("#obj94879").trigger('SCEventShow');
$("#obj67012").trigger('SCEventShow');
	
});