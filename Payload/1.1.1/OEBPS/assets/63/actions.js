pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 15374;
pubcoder.page.title = pubcoder.page.title || "63";
pubcoder.page.number = pubcoder.page.number || 63;
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
var obj74431_onTap_activeActionGroupIndex = -1;
var obj74431_onTap_runningActionsCount = 0;
var obj74431_onTap_loopCount = 0;
var obj74428_onTap_activeActionGroupIndex = -1;
var obj74428_onTap_runningActionsCount = 0;
var obj74428_onTap_loopCount = 0;
var obj74424_onTap_activeActionGroupIndex = -1;
var obj74424_onTap_runningActionsCount = 0;
var obj74424_onTap_loopCount = 0;
var obj74353_onDrag_activeActionGroupIndex = -1;
var obj74353_onDrag_runningActionsCount = 0;
var obj74353_onDrag_loopCount = 0;
var obj74353_onTouchDown_activeActionGroupIndex = -1;
var obj74353_onTouchDown_runningActionsCount = 0;
var obj74353_onTouchDown_loopCount = 0;
var obj74353_SCActionDragDrop74356_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj74353_SCActionDragDrop74356_droppedOutsideTargetActions_runningActionsCount = 0;
var obj74353_SCActionDragDrop74356_droppedOutsideTargetActions_loopCount = 0;
var obj74353_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj74353_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj74353_droppedInsideTargetActions_3_loopCount = 0;
var obj74353_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj74353_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj74353_droppedInsideTargetActions_2_loopCount = 0;
var obj74353_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj74353_droppedInsideTargetActions_runningActionsCount = 0;
var obj74353_droppedInsideTargetActions_loopCount = 0;
var obj74314_onDrag_activeActionGroupIndex = -1;
var obj74314_onDrag_runningActionsCount = 0;
var obj74314_onDrag_loopCount = 0;
var obj74314_onTouchDown_activeActionGroupIndex = -1;
var obj74314_onTouchDown_runningActionsCount = 0;
var obj74314_onTouchDown_loopCount = 0;
var obj74314_SCActionDragDrop74317_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj74314_SCActionDragDrop74317_droppedOutsideTargetActions_runningActionsCount = 0;
var obj74314_SCActionDragDrop74317_droppedOutsideTargetActions_loopCount = 0;
var obj74314_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj74314_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj74314_droppedInsideTargetActions_3_loopCount = 0;
var obj74314_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj74314_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj74314_droppedInsideTargetActions_2_loopCount = 0;
var obj74314_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj74314_droppedInsideTargetActions_runningActionsCount = 0;
var obj74314_droppedInsideTargetActions_loopCount = 0;
var obj74275_onDrag_activeActionGroupIndex = -1;
var obj74275_onDrag_runningActionsCount = 0;
var obj74275_onDrag_loopCount = 0;
var obj74275_onTouchDown_activeActionGroupIndex = -1;
var obj74275_onTouchDown_runningActionsCount = 0;
var obj74275_onTouchDown_loopCount = 0;
var obj74275_SCActionDragDrop74278_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj74275_SCActionDragDrop74278_droppedOutsideTargetActions_runningActionsCount = 0;
var obj74275_SCActionDragDrop74278_droppedOutsideTargetActions_loopCount = 0;
var obj74275_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj74275_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj74275_droppedInsideTargetActions_3_loopCount = 0;
var obj74275_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj74275_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj74275_droppedInsideTargetActions_2_loopCount = 0;
var obj74275_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj74275_droppedInsideTargetActions_runningActionsCount = 0;
var obj74275_droppedInsideTargetActions_loopCount = 0;
var obj74257_onTap_activeActionGroupIndex = -1;
var obj74257_onTap_runningActionsCount = 0;
var obj74257_onTap_loopCount = 0;
var obj74249_onTap_activeActionGroupIndex = -1;
var obj74249_onTap_runningActionsCount = 0;
var obj74249_onTap_loopCount = 0;
var obj74877_onTap_activeActionGroupIndex = -1;
var obj74877_onTap_runningActionsCount = 0;
var obj74877_onTap_loopCount = 0;
var obj87483_onTap_activeActionGroupIndex = -1;
var obj87483_onTap_runningActionsCount = 0;
var obj87483_onTap_loopCount = 0;
var obj87478_onTap_activeActionGroupIndex = -1;
var obj87478_onTap_runningActionsCount = 0;
var obj87478_onTap_loopCount = 0;
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
		
obj74431_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74431_onTap_activeActionGroupIndex = -1;
		$("#obj74431").trigger("obj74431_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74431) {
				console.warn("de-queueing event obj74431." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74431").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74431_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_74433();
function goToPage_74433() {
	window.obj74431_onTap_runningActionsCount = obj74431_onTap_runningActionsCount + 1;
	$("#anchor373")[0].click();
	window.obj74431_onTap_runningActionsCount = window.obj74431_onTap_runningActionsCount - 1;
if (window.obj74431_onTap_runningActionsCount < 0) {
	window.obj74431_onTap_runningActionsCount = 0;
} else if (window.obj74431_onTap_runningActionsCount == 0) {
	obj74431_onTap_actionGroup1();
}
}





















};
obj74431_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj74431_onTap_activeActionGroupIndex = -1;
		$("#obj74431").trigger("obj74431_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74431) {
				console.warn("de-queueing event obj74431." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74431").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74431_onTap_activeActionGroupIndex = 1;
	





















};
obj74428_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74428_onTap_activeActionGroupIndex = -1;
		$("#obj74428").trigger("obj74428_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74428) {
				console.warn("de-queueing event obj74428." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74428").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74428_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_74876();
function goToPage_74876() {
	window.obj74428_onTap_runningActionsCount = obj74428_onTap_runningActionsCount + 1;
	$("#anchor374")[0].click();
	window.obj74428_onTap_runningActionsCount = window.obj74428_onTap_runningActionsCount - 1;
if (window.obj74428_onTap_runningActionsCount < 0) {
	window.obj74428_onTap_runningActionsCount = 0;
} else if (window.obj74428_onTap_runningActionsCount == 0) {
	obj74428_onTap_actionGroup1();
}
}





















};
obj74428_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj74428_onTap_activeActionGroupIndex = -1;
		$("#obj74428").trigger("obj74428_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74428) {
				console.warn("de-queueing event obj74428." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74428").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74428_onTap_activeActionGroupIndex = 1;
	





















};
obj74424_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74424_onTap_activeActionGroupIndex = -1;
		$("#obj74424").trigger("obj74424_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74424) {
				console.warn("de-queueing event obj74424." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74424").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74424_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_74426();
function goToPage_74426() {
	window.obj74424_onTap_runningActionsCount = obj74424_onTap_runningActionsCount + 1;
	$("#anchor375")[0].click();
	window.obj74424_onTap_runningActionsCount = window.obj74424_onTap_runningActionsCount - 1;
if (window.obj74424_onTap_runningActionsCount < 0) {
	window.obj74424_onTap_runningActionsCount = 0;
} else if (window.obj74424_onTap_runningActionsCount == 0) {
	obj74424_onTap_actionGroup1();
}
}





















};
obj74424_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj74424_onTap_activeActionGroupIndex = -1;
		$("#obj74424").trigger("obj74424_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74424) {
				console.warn("de-queueing event obj74424." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74424").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74424_onTap_activeActionGroupIndex = 1;
	





















};
obj74353_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74353_onTouchDown_activeActionGroupIndex = -1;
		$("#obj74353").trigger("obj74353_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74353) {
				console.warn("de-queueing event obj74353." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74353").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74353_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj74353");
//	action: dragDrop
//	target: obj74353 
dragDrop_74356();
function dragDrop_74356() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj74353_onTouchDown_runningActionsCount = obj74353_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj74353');
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
	  	containerNode = $('#obj74416');
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
    	window.obj74353_onTouchDown_runningActionsCount = window.obj74353_onTouchDown_runningActionsCount - 1;
if (window.obj74353_onTouchDown_runningActionsCount < 0) {
	window.obj74353_onTouchDown_runningActionsCount = 0;
} else if (window.obj74353_onTouchDown_runningActionsCount == 0) {
	obj74353_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj74404","#obj74408","#obj74406");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_74356 = false;
    	var dropped_id_74356;
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
					dropped_74356 = true;
					dropped_id_74356 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_74356) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj74353").trigger('SCActionDragDrop74356_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj74353_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj74353_onTouchDown_activeActionGroupIndex = -1;
		$("#obj74353").trigger("obj74353_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74353) {
				console.warn("de-queueing event obj74353." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74353").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74353_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj74353_SCActionDragDrop74356_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74353_SCActionDragDrop74356_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj74353").trigger("obj74353_SCActionDragDrop74356_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74353) {
				console.warn("de-queueing event obj74353." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74353").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74353_SCActionDragDrop74356_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj74353 
move_92292();
function move_92292() {
	window.obj74353_SCActionDragDrop74356_droppedOutsideTargetActions_runningActionsCount = obj74353_SCActionDragDrop74356_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj74353");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 71;
	var moveY = 546;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj74353_SCActionDragDrop74356_droppedOutsideTargetActions_runningActionsCount = window.obj74353_SCActionDragDrop74356_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj74353_SCActionDragDrop74356_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj74353_SCActionDragDrop74356_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj74353_SCActionDragDrop74356_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj74353_SCActionDragDrop74356_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj74353_SCActionDragDrop74356_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj74353_SCActionDragDrop74356_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj74353").trigger("obj74353_SCActionDragDrop74356_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74353) {
				console.warn("de-queueing event obj74353." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74353").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74353_SCActionDragDrop74356_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj74353_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74353_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj74353").trigger("obj74353_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74353) {
				console.warn("de-queueing event obj74353." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74353").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74353_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_74379();
function runjs_74379() {
	window.obj74353_droppedInsideTargetActions_3_runningActionsCount = obj74353_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj74406").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj74353_droppedInsideTargetActions_3_runningActionsCount = window.obj74353_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj74353_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj74353_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj74353_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj74353_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj74353_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74353_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj74353").trigger("obj74353_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74353) {
				console.warn("de-queueing event obj74353." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74353").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74353_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_74380();
function runjs_74380() {
	window.obj74353_droppedInsideTargetActions_3_runningActionsCount = obj74353_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj74406").css("border-color", "#C00000"); $("#obj74406").css("border-width", "2px"); $("#obj74406").css("border-style", "solid"); $("#obj74406").css("border-radius", "10px"); $("#obj74406").css("-webkit-border-radius", "10px"); $("#obj74406").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj74353_droppedInsideTargetActions_3_runningActionsCount = window.obj74353_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj74353_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj74353_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj74353_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj74353_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj74353_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74353_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj74353").trigger("obj74353_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74353) {
				console.warn("de-queueing event obj74353." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74353").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74353_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj74400 
hide_74381();
function hide_74381() {
	var selector = "#obj74400";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj74353_droppedInsideTargetActions_3_runningActionsCount = obj74353_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj74353_droppedInsideTargetActions_3_runningActionsCount = window.obj74353_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj74353_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj74353_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj74353_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj74353_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_74381(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj74353_droppedInsideTargetActions_3_runningActionsCount = window.obj74353_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj74353_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj74353_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj74353_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj74353_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj74353_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74353_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj74353").trigger("obj74353_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74353) {
				console.warn("de-queueing event obj74353." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74353").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74353_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_74382();
function runjs_74382() {
	window.obj74353_droppedInsideTargetActions_3_runningActionsCount = obj74353_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj74353").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj74353_droppedInsideTargetActions_3_runningActionsCount = window.obj74353_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj74353_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj74353_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj74353_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj74353_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj74353_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74353_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj74353").trigger("obj74353_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74353) {
				console.warn("de-queueing event obj74353." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74353").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74353_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_74383();
function switchText_74383() {
	window.obj74353_droppedInsideTargetActions_3_runningActionsCount = obj74353_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj74394_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj74394_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj74394").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj74394_content");
			setTimeout(function () {
				window.obj74353_droppedInsideTargetActions_3_runningActionsCount = window.obj74353_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj74353_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj74353_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj74353_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj74353_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj74394 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj74353_droppedInsideTargetActions_3_runningActionsCount = window.obj74353_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj74353_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj74353_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj74353_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj74353_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj74353_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74353_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj74353").trigger("obj74353_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74353) {
				console.warn("de-queueing event obj74353." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74353").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74353_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj74353 
move_74384();
function move_74384() {
	window.obj74353_droppedInsideTargetActions_3_runningActionsCount = obj74353_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj74353");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 71;
	var moveY = 546;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj74353_droppedInsideTargetActions_3_runningActionsCount = window.obj74353_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj74353_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj74353_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj74353_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj74353_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj74353_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74353_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj74353").trigger("obj74353_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74353) {
				console.warn("de-queueing event obj74353." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74353").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74353_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_74385();
function runjs_74385() {
	window.obj74353_droppedInsideTargetActions_3_runningActionsCount = obj74353_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj74406").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj74353_droppedInsideTargetActions_3_runningActionsCount = window.obj74353_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj74353_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj74353_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj74353_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj74353_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj74353_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74353_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj74353").trigger("obj74353_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74353) {
				console.warn("de-queueing event obj74353." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74353").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74353_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_74386();
function runjs_74386() {
	window.obj74353_droppedInsideTargetActions_3_runningActionsCount = obj74353_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj74406").css("border-color", "#000000"); $("#obj74406").css("border-width", "1px"); $("#obj74406").css("border-style", "solid"); $("#obj74406").css("border-radius", "10px"); $("#obj74406").css("-webkit-border-radius", "10px"); $("#obj74406").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj74353_droppedInsideTargetActions_3_runningActionsCount = window.obj74353_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj74353_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj74353_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj74353_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj74353_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj74353_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74353_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj74353").trigger("obj74353_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74353) {
				console.warn("de-queueing event obj74353." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74353").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74353_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj74400
(function(){
	window.obj74353_droppedInsideTargetActions_3_runningActionsCount = obj74353_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj74400";
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
					window.obj74353_droppedInsideTargetActions_3_runningActionsCount = window.obj74353_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj74353_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj74353_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj74353_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj74353_droppedInsideTargetActions_3_actionGroup9();
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
				window.obj74353_droppedInsideTargetActions_3_runningActionsCount = window.obj74353_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj74353_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj74353_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj74353_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj74353_droppedInsideTargetActions_3_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj74353_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74353_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj74353").trigger("obj74353_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74353) {
				console.warn("de-queueing event obj74353." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74353").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74353_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_74388();
function runjs_74388() {
	window.obj74353_droppedInsideTargetActions_3_runningActionsCount = obj74353_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj74353").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj74353_droppedInsideTargetActions_3_runningActionsCount = window.obj74353_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj74353_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj74353_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj74353_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj74353_droppedInsideTargetActions_3_actionGroup10();
}
	}, 1);
}







};
obj74353_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74353_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj74353").trigger("obj74353_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74353) {
				console.warn("de-queueing event obj74353." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74353").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74353_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_74389();
function runjs_74389() {
	window.obj74353_droppedInsideTargetActions_3_runningActionsCount = obj74353_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj74353").css("border-color", "rgba(0,0,0,0)"); $("#obj74353").css("border-width", "0px"); $("#obj74353").css("border-style", "solid"); $("#obj74353").css("border-radius", "10px"); $("#obj74353").css("-webkit-border-radius", "10px"); $("#obj74353").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj74353_droppedInsideTargetActions_3_runningActionsCount = window.obj74353_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj74353_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj74353_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj74353_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj74353_droppedInsideTargetActions_3_actionGroup11();
}
	}, 1);
}







};
obj74353_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74353_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj74353").trigger("obj74353_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74353) {
				console.warn("de-queueing event obj74353." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74353").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74353_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj74393 
playAudio_74390();
function playAudio_74390() {
	window.obj74353_droppedInsideTargetActions_3_runningActionsCount = obj74353_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj74393")[0];
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
		    window.obj74353_droppedInsideTargetActions_3_runningActionsCount = window.obj74353_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj74353_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj74353_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj74353_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj74353_droppedInsideTargetActions_3_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj74353_droppedInsideTargetActions_3_runningActionsCount = window.obj74353_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj74353_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj74353_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj74353_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj74353_droppedInsideTargetActions_3_actionGroup12();
}
	}
}









};
obj74353_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74353_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj74353").trigger("obj74353_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74353) {
				console.warn("de-queueing event obj74353." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74353").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74353_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_74391();
function switchText_74391() {
	window.obj74353_droppedInsideTargetActions_3_runningActionsCount = obj74353_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj74394_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj74394_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj74394").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj74394_content");
			setTimeout(function () {
				window.obj74353_droppedInsideTargetActions_3_runningActionsCount = window.obj74353_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj74353_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj74353_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj74353_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj74353_droppedInsideTargetActions_3_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj74394 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj74353_droppedInsideTargetActions_3_runningActionsCount = window.obj74353_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj74353_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj74353_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj74353_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj74353_droppedInsideTargetActions_3_actionGroup13();
}
		}, 1);
	}
}






};
obj74353_droppedInsideTargetActions_3_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj74353_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj74353").trigger("obj74353_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74353) {
				console.warn("de-queueing event obj74353." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74353").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74353_droppedInsideTargetActions_3_activeActionGroupIndex = 13;
	





















};
obj74353_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74353_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj74353").trigger("obj74353_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74353) {
				console.warn("de-queueing event obj74353." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74353").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74353_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_74365();
function runjs_74365() {
	window.obj74353_droppedInsideTargetActions_2_runningActionsCount = obj74353_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj74408").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj74353_droppedInsideTargetActions_2_runningActionsCount = window.obj74353_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74353_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74353_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74353_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74353_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj74353_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74353_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj74353").trigger("obj74353_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74353) {
				console.warn("de-queueing event obj74353." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74353").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74353_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_74366();
function runjs_74366() {
	window.obj74353_droppedInsideTargetActions_2_runningActionsCount = obj74353_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj74408").css("border-color", "#C00000"); $("#obj74408").css("border-width", "2px"); $("#obj74408").css("border-style", "solid"); $("#obj74408").css("border-radius", "10px"); $("#obj74408").css("-webkit-border-radius", "10px"); $("#obj74408").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj74353_droppedInsideTargetActions_2_runningActionsCount = window.obj74353_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74353_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74353_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74353_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74353_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj74353_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74353_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj74353").trigger("obj74353_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74353) {
				console.warn("de-queueing event obj74353." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74353").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74353_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj74402 
hide_74367();
function hide_74367() {
	var selector = "#obj74402";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj74353_droppedInsideTargetActions_2_runningActionsCount = obj74353_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj74353_droppedInsideTargetActions_2_runningActionsCount = window.obj74353_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74353_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74353_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74353_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74353_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_74367(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj74353_droppedInsideTargetActions_2_runningActionsCount = window.obj74353_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74353_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74353_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74353_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74353_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj74353_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74353_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj74353").trigger("obj74353_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74353) {
				console.warn("de-queueing event obj74353." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74353").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74353_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_74368();
function runjs_74368() {
	window.obj74353_droppedInsideTargetActions_2_runningActionsCount = obj74353_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj74353").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj74353_droppedInsideTargetActions_2_runningActionsCount = window.obj74353_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74353_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74353_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74353_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74353_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj74353_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74353_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj74353").trigger("obj74353_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74353) {
				console.warn("de-queueing event obj74353." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74353").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74353_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_74369();
function switchText_74369() {
	window.obj74353_droppedInsideTargetActions_2_runningActionsCount = obj74353_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj74394_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj74394_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj74394").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj74394_content");
			setTimeout(function () {
				window.obj74353_droppedInsideTargetActions_2_runningActionsCount = window.obj74353_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74353_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74353_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74353_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74353_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj74394 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj74353_droppedInsideTargetActions_2_runningActionsCount = window.obj74353_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74353_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74353_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74353_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74353_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj74353_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74353_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj74353").trigger("obj74353_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74353) {
				console.warn("de-queueing event obj74353." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74353").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74353_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj74353 
move_74370();
function move_74370() {
	window.obj74353_droppedInsideTargetActions_2_runningActionsCount = obj74353_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj74353");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 71;
	var moveY = 546;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj74353_droppedInsideTargetActions_2_runningActionsCount = window.obj74353_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74353_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74353_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74353_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74353_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj74353_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74353_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj74353").trigger("obj74353_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74353) {
				console.warn("de-queueing event obj74353." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74353").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74353_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_74371();
function runjs_74371() {
	window.obj74353_droppedInsideTargetActions_2_runningActionsCount = obj74353_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj74408").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj74353_droppedInsideTargetActions_2_runningActionsCount = window.obj74353_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74353_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74353_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74353_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74353_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj74353_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74353_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj74353").trigger("obj74353_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74353) {
				console.warn("de-queueing event obj74353." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74353").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74353_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_74372();
function runjs_74372() {
	window.obj74353_droppedInsideTargetActions_2_runningActionsCount = obj74353_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj74408").css("border-color", "#000000"); $("#obj74408").css("border-width", "1px"); $("#obj74408").css("border-style", "solid"); $("#obj74408").css("border-radius", "10px"); $("#obj74408").css("-webkit-border-radius", "10px"); $("#obj74408").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj74353_droppedInsideTargetActions_2_runningActionsCount = window.obj74353_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74353_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74353_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74353_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74353_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj74353_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74353_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj74353").trigger("obj74353_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74353) {
				console.warn("de-queueing event obj74353." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74353").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74353_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj74402
(function(){
	window.obj74353_droppedInsideTargetActions_2_runningActionsCount = obj74353_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj74402";
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
					window.obj74353_droppedInsideTargetActions_2_runningActionsCount = window.obj74353_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74353_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74353_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74353_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74353_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj74353_droppedInsideTargetActions_2_runningActionsCount = window.obj74353_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74353_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74353_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74353_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74353_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj74353_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74353_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj74353").trigger("obj74353_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74353) {
				console.warn("de-queueing event obj74353." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74353").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74353_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_74374();
function runjs_74374() {
	window.obj74353_droppedInsideTargetActions_2_runningActionsCount = obj74353_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj74353").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj74353_droppedInsideTargetActions_2_runningActionsCount = window.obj74353_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74353_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74353_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74353_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74353_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj74353_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74353_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj74353").trigger("obj74353_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74353) {
				console.warn("de-queueing event obj74353." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74353").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74353_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_74375();
function runjs_74375() {
	window.obj74353_droppedInsideTargetActions_2_runningActionsCount = obj74353_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj74353").css("border-color", "rgba(0,0,0,0)"); $("#obj74353").css("border-width", "0px"); $("#obj74353").css("border-style", "solid"); $("#obj74353").css("border-radius", "10px"); $("#obj74353").css("-webkit-border-radius", "10px"); $("#obj74353").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj74353_droppedInsideTargetActions_2_runningActionsCount = window.obj74353_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74353_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74353_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74353_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74353_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj74353_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74353_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj74353").trigger("obj74353_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74353) {
				console.warn("de-queueing event obj74353." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74353").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74353_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj74393 
playAudio_74376();
function playAudio_74376() {
	window.obj74353_droppedInsideTargetActions_2_runningActionsCount = obj74353_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj74393")[0];
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
		    window.obj74353_droppedInsideTargetActions_2_runningActionsCount = window.obj74353_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74353_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74353_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74353_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74353_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj74353_droppedInsideTargetActions_2_runningActionsCount = window.obj74353_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74353_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74353_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74353_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74353_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj74353_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74353_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj74353").trigger("obj74353_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74353) {
				console.warn("de-queueing event obj74353." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74353").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74353_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_74377();
function switchText_74377() {
	window.obj74353_droppedInsideTargetActions_2_runningActionsCount = obj74353_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj74394_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj74394_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj74394").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj74394_content");
			setTimeout(function () {
				window.obj74353_droppedInsideTargetActions_2_runningActionsCount = window.obj74353_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74353_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74353_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74353_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74353_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj74394 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj74353_droppedInsideTargetActions_2_runningActionsCount = window.obj74353_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74353_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74353_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74353_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74353_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj74353_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj74353_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj74353").trigger("obj74353_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74353) {
				console.warn("de-queueing event obj74353." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74353").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74353_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj74353_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74353_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj74353").trigger("obj74353_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74353) {
				console.warn("de-queueing event obj74353." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74353").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74353_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_74358();
function runjs_74358() {
	window.obj74353_droppedInsideTargetActions_runningActionsCount = obj74353_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj74404").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj74353_droppedInsideTargetActions_runningActionsCount = window.obj74353_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj74353_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj74353_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj74353_droppedInsideTargetActions_runningActionsCount == 0) {
	obj74353_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj74353_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74353_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj74353").trigger("obj74353_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74353) {
				console.warn("de-queueing event obj74353." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74353").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74353_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_74362();
function switchText_74362() {
	window.obj74353_droppedInsideTargetActions_runningActionsCount = obj74353_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj74394_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj74394_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj74394").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj74394_content");
			setTimeout(function () {
				window.obj74353_droppedInsideTargetActions_runningActionsCount = window.obj74353_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj74353_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj74353_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj74353_droppedInsideTargetActions_runningActionsCount == 0) {
	obj74353_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj74394 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj74353_droppedInsideTargetActions_runningActionsCount = window.obj74353_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj74353_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj74353_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj74353_droppedInsideTargetActions_runningActionsCount == 0) {
	obj74353_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj74353_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74353_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj74353").trigger("obj74353_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74353) {
				console.warn("de-queueing event obj74353." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74353").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74353_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_74359();
function runjs_74359() {
	window.obj74353_droppedInsideTargetActions_runningActionsCount = obj74353_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj74404").css("border-color", "#058E3F"); $("#obj74404").css("border-width", "2px"); $("#obj74404").css("border-style", "solid"); $("#obj74404").css("border-radius", "10px"); $("#obj74404").css("-webkit-border-radius", "10px"); $("#obj74404").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj74353_droppedInsideTargetActions_runningActionsCount = window.obj74353_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj74353_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj74353_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj74353_droppedInsideTargetActions_runningActionsCount == 0) {
	obj74353_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj74353_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74353_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj74353").trigger("obj74353_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74353) {
				console.warn("de-queueing event obj74353." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74353").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74353_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj74398 
hide_74360();
function hide_74360() {
	var selector = "#obj74398";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj74353_droppedInsideTargetActions_runningActionsCount = obj74353_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj74353_droppedInsideTargetActions_runningActionsCount = window.obj74353_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj74353_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj74353_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj74353_droppedInsideTargetActions_runningActionsCount == 0) {
	obj74353_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_74360(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj74353_droppedInsideTargetActions_runningActionsCount = window.obj74353_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj74353_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj74353_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj74353_droppedInsideTargetActions_runningActionsCount == 0) {
	obj74353_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj74353_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74353_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj74353").trigger("obj74353_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74353) {
				console.warn("de-queueing event obj74353." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74353").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74353_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_74361();
function runjs_74361() {
	window.obj74353_droppedInsideTargetActions_runningActionsCount = obj74353_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj74353").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj74353_droppedInsideTargetActions_runningActionsCount = window.obj74353_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj74353_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj74353_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj74353_droppedInsideTargetActions_runningActionsCount == 0) {
	obj74353_droppedInsideTargetActions_actionGroup5();
}
	}, 1);
}







};
obj74353_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74353_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj74353").trigger("obj74353_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74353) {
				console.warn("de-queueing event obj74353." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74353").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74353_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj74392 
playAudio_74363();
function playAudio_74363() {
	window.obj74353_droppedInsideTargetActions_runningActionsCount = obj74353_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj74392")[0];
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
		    window.obj74353_droppedInsideTargetActions_runningActionsCount = window.obj74353_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj74353_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj74353_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj74353_droppedInsideTargetActions_runningActionsCount == 0) {
	obj74353_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj74353_droppedInsideTargetActions_runningActionsCount = window.obj74353_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj74353_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj74353_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj74353_droppedInsideTargetActions_runningActionsCount == 0) {
	obj74353_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj74353_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74353_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj74353").trigger("obj74353_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74353) {
				console.warn("de-queueing event obj74353." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74353").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74353_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90184();
function switchText_90184() {
	window.obj74353_droppedInsideTargetActions_runningActionsCount = obj74353_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj74394_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj74394_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj74394").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj74394_content");
			setTimeout(function () {
				window.obj74353_droppedInsideTargetActions_runningActionsCount = window.obj74353_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj74353_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj74353_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj74353_droppedInsideTargetActions_runningActionsCount == 0) {
	obj74353_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj74394 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj74353_droppedInsideTargetActions_runningActionsCount = window.obj74353_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj74353_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj74353_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj74353_droppedInsideTargetActions_runningActionsCount == 0) {
	obj74353_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj74353_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj74353_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj74353").trigger("obj74353_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74353) {
				console.warn("de-queueing event obj74353." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74353").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74353_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj74314_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74314_onTouchDown_activeActionGroupIndex = -1;
		$("#obj74314").trigger("obj74314_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74314) {
				console.warn("de-queueing event obj74314." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74314").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74314_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj74314");
//	action: dragDrop
//	target: obj74314 
dragDrop_74317();
function dragDrop_74317() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj74314_onTouchDown_runningActionsCount = obj74314_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj74314');
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
	  	containerNode = $('#obj74416');
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
    	window.obj74314_onTouchDown_runningActionsCount = window.obj74314_onTouchDown_runningActionsCount - 1;
if (window.obj74314_onTouchDown_runningActionsCount < 0) {
	window.obj74314_onTouchDown_runningActionsCount = 0;
} else if (window.obj74314_onTouchDown_runningActionsCount == 0) {
	obj74314_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj74406","#obj74408","#obj74404");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_74317 = false;
    	var dropped_id_74317;
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
					dropped_74317 = true;
					dropped_id_74317 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_74317) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj74314").trigger('SCActionDragDrop74317_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj74314_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj74314_onTouchDown_activeActionGroupIndex = -1;
		$("#obj74314").trigger("obj74314_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74314) {
				console.warn("de-queueing event obj74314." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74314").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74314_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj74314_SCActionDragDrop74317_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74314_SCActionDragDrop74317_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj74314").trigger("obj74314_SCActionDragDrop74317_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74314) {
				console.warn("de-queueing event obj74314." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74314").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74314_SCActionDragDrop74317_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj74314 
move_92296();
function move_92296() {
	window.obj74314_SCActionDragDrop74317_droppedOutsideTargetActions_runningActionsCount = obj74314_SCActionDragDrop74317_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj74314");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 195;
	var moveY = 630;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj74314_SCActionDragDrop74317_droppedOutsideTargetActions_runningActionsCount = window.obj74314_SCActionDragDrop74317_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj74314_SCActionDragDrop74317_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj74314_SCActionDragDrop74317_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj74314_SCActionDragDrop74317_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj74314_SCActionDragDrop74317_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj74314_SCActionDragDrop74317_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj74314_SCActionDragDrop74317_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj74314").trigger("obj74314_SCActionDragDrop74317_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74314) {
				console.warn("de-queueing event obj74314." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74314").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74314_SCActionDragDrop74317_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj74314_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74314_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj74314").trigger("obj74314_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74314) {
				console.warn("de-queueing event obj74314." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74314").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74314_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_74340();
function runjs_74340() {
	window.obj74314_droppedInsideTargetActions_3_runningActionsCount = obj74314_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj74404").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj74314_droppedInsideTargetActions_3_runningActionsCount = window.obj74314_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj74314_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj74314_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj74314_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj74314_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj74314_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74314_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj74314").trigger("obj74314_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74314) {
				console.warn("de-queueing event obj74314." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74314").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74314_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_74341();
function runjs_74341() {
	window.obj74314_droppedInsideTargetActions_3_runningActionsCount = obj74314_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj74404").css("border-color", "#C00000"); $("#obj74404").css("border-width", "2px"); $("#obj74404").css("border-style", "solid"); $("#obj74404").css("border-radius", "10px"); $("#obj74404").css("-webkit-border-radius", "10px"); $("#obj74404").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj74314_droppedInsideTargetActions_3_runningActionsCount = window.obj74314_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj74314_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj74314_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj74314_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj74314_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj74314_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74314_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj74314").trigger("obj74314_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74314) {
				console.warn("de-queueing event obj74314." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74314").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74314_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj74398 
hide_74342();
function hide_74342() {
	var selector = "#obj74398";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj74314_droppedInsideTargetActions_3_runningActionsCount = obj74314_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj74314_droppedInsideTargetActions_3_runningActionsCount = window.obj74314_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj74314_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj74314_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj74314_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj74314_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_74342(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj74314_droppedInsideTargetActions_3_runningActionsCount = window.obj74314_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj74314_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj74314_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj74314_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj74314_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj74314_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74314_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj74314").trigger("obj74314_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74314) {
				console.warn("de-queueing event obj74314." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74314").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74314_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_74343();
function runjs_74343() {
	window.obj74314_droppedInsideTargetActions_3_runningActionsCount = obj74314_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj74314").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj74314_droppedInsideTargetActions_3_runningActionsCount = window.obj74314_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj74314_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj74314_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj74314_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj74314_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj74314_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74314_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj74314").trigger("obj74314_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74314) {
				console.warn("de-queueing event obj74314." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74314").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74314_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_74344();
function switchText_74344() {
	window.obj74314_droppedInsideTargetActions_3_runningActionsCount = obj74314_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj74394_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj74394_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj74394").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj74394_content");
			setTimeout(function () {
				window.obj74314_droppedInsideTargetActions_3_runningActionsCount = window.obj74314_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj74314_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj74314_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj74314_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj74314_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj74394 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj74314_droppedInsideTargetActions_3_runningActionsCount = window.obj74314_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj74314_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj74314_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj74314_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj74314_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj74314_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74314_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj74314").trigger("obj74314_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74314) {
				console.warn("de-queueing event obj74314." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74314").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74314_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj74314 
move_74345();
function move_74345() {
	window.obj74314_droppedInsideTargetActions_3_runningActionsCount = obj74314_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj74314");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 195;
	var moveY = 630;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj74314_droppedInsideTargetActions_3_runningActionsCount = window.obj74314_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj74314_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj74314_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj74314_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj74314_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj74314_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74314_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj74314").trigger("obj74314_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74314) {
				console.warn("de-queueing event obj74314." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74314").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74314_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_74346();
function runjs_74346() {
	window.obj74314_droppedInsideTargetActions_3_runningActionsCount = obj74314_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj74404").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj74314_droppedInsideTargetActions_3_runningActionsCount = window.obj74314_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj74314_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj74314_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj74314_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj74314_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj74314_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74314_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj74314").trigger("obj74314_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74314) {
				console.warn("de-queueing event obj74314." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74314").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74314_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_74347();
function runjs_74347() {
	window.obj74314_droppedInsideTargetActions_3_runningActionsCount = obj74314_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj74404").css("border-color", "#000000"); $("#obj74404").css("border-width", "1px"); $("#obj74404").css("border-style", "solid"); $("#obj74404").css("border-radius", "10px"); $("#obj74404").css("-webkit-border-radius", "10px"); $("#obj74404").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj74314_droppedInsideTargetActions_3_runningActionsCount = window.obj74314_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj74314_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj74314_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj74314_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj74314_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj74314_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74314_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj74314").trigger("obj74314_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74314) {
				console.warn("de-queueing event obj74314." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74314").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74314_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj74398
(function(){
	window.obj74314_droppedInsideTargetActions_3_runningActionsCount = obj74314_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj74398";
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
					window.obj74314_droppedInsideTargetActions_3_runningActionsCount = window.obj74314_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj74314_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj74314_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj74314_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj74314_droppedInsideTargetActions_3_actionGroup9();
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
				window.obj74314_droppedInsideTargetActions_3_runningActionsCount = window.obj74314_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj74314_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj74314_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj74314_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj74314_droppedInsideTargetActions_3_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj74314_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74314_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj74314").trigger("obj74314_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74314) {
				console.warn("de-queueing event obj74314." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74314").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74314_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_74349();
function runjs_74349() {
	window.obj74314_droppedInsideTargetActions_3_runningActionsCount = obj74314_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj74314").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj74314_droppedInsideTargetActions_3_runningActionsCount = window.obj74314_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj74314_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj74314_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj74314_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj74314_droppedInsideTargetActions_3_actionGroup10();
}
	}, 1);
}







};
obj74314_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74314_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj74314").trigger("obj74314_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74314) {
				console.warn("de-queueing event obj74314." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74314").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74314_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_74350();
function runjs_74350() {
	window.obj74314_droppedInsideTargetActions_3_runningActionsCount = obj74314_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj74314").css("border-color", "rgba(0,0,0,0)"); $("#obj74314").css("border-width", "0px"); $("#obj74314").css("border-style", "solid"); $("#obj74314").css("border-radius", "10px"); $("#obj74314").css("-webkit-border-radius", "10px"); $("#obj74314").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj74314_droppedInsideTargetActions_3_runningActionsCount = window.obj74314_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj74314_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj74314_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj74314_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj74314_droppedInsideTargetActions_3_actionGroup11();
}
	}, 1);
}







};
obj74314_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74314_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj74314").trigger("obj74314_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74314) {
				console.warn("de-queueing event obj74314." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74314").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74314_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj74393 
playAudio_74351();
function playAudio_74351() {
	window.obj74314_droppedInsideTargetActions_3_runningActionsCount = obj74314_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj74393")[0];
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
		    window.obj74314_droppedInsideTargetActions_3_runningActionsCount = window.obj74314_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj74314_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj74314_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj74314_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj74314_droppedInsideTargetActions_3_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj74314_droppedInsideTargetActions_3_runningActionsCount = window.obj74314_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj74314_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj74314_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj74314_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj74314_droppedInsideTargetActions_3_actionGroup12();
}
	}
}









};
obj74314_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74314_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj74314").trigger("obj74314_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74314) {
				console.warn("de-queueing event obj74314." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74314").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74314_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_74352();
function switchText_74352() {
	window.obj74314_droppedInsideTargetActions_3_runningActionsCount = obj74314_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj74394_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj74394_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj74394").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj74394_content");
			setTimeout(function () {
				window.obj74314_droppedInsideTargetActions_3_runningActionsCount = window.obj74314_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj74314_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj74314_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj74314_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj74314_droppedInsideTargetActions_3_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj74394 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj74314_droppedInsideTargetActions_3_runningActionsCount = window.obj74314_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj74314_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj74314_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj74314_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj74314_droppedInsideTargetActions_3_actionGroup13();
}
		}, 1);
	}
}






};
obj74314_droppedInsideTargetActions_3_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj74314_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj74314").trigger("obj74314_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74314) {
				console.warn("de-queueing event obj74314." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74314").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74314_droppedInsideTargetActions_3_activeActionGroupIndex = 13;
	





















};
obj74314_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74314_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj74314").trigger("obj74314_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74314) {
				console.warn("de-queueing event obj74314." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74314").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74314_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_74326();
function runjs_74326() {
	window.obj74314_droppedInsideTargetActions_2_runningActionsCount = obj74314_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj74408").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj74314_droppedInsideTargetActions_2_runningActionsCount = window.obj74314_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74314_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74314_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74314_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74314_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj74314_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74314_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj74314").trigger("obj74314_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74314) {
				console.warn("de-queueing event obj74314." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74314").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74314_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_74327();
function runjs_74327() {
	window.obj74314_droppedInsideTargetActions_2_runningActionsCount = obj74314_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj74408").css("border-color", "#C00000"); $("#obj74408").css("border-width", "2px"); $("#obj74408").css("border-style", "solid"); $("#obj74408").css("border-radius", "10px"); $("#obj74408").css("-webkit-border-radius", "10px"); $("#obj74408").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj74314_droppedInsideTargetActions_2_runningActionsCount = window.obj74314_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74314_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74314_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74314_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74314_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj74314_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74314_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj74314").trigger("obj74314_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74314) {
				console.warn("de-queueing event obj74314." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74314").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74314_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj74402 
hide_74328();
function hide_74328() {
	var selector = "#obj74402";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj74314_droppedInsideTargetActions_2_runningActionsCount = obj74314_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj74314_droppedInsideTargetActions_2_runningActionsCount = window.obj74314_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74314_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74314_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74314_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74314_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_74328(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj74314_droppedInsideTargetActions_2_runningActionsCount = window.obj74314_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74314_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74314_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74314_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74314_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj74314_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74314_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj74314").trigger("obj74314_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74314) {
				console.warn("de-queueing event obj74314." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74314").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74314_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_74329();
function runjs_74329() {
	window.obj74314_droppedInsideTargetActions_2_runningActionsCount = obj74314_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj74314").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj74314_droppedInsideTargetActions_2_runningActionsCount = window.obj74314_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74314_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74314_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74314_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74314_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj74314_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74314_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj74314").trigger("obj74314_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74314) {
				console.warn("de-queueing event obj74314." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74314").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74314_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_74330();
function switchText_74330() {
	window.obj74314_droppedInsideTargetActions_2_runningActionsCount = obj74314_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj74394_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj74394_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj74394").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj74394_content");
			setTimeout(function () {
				window.obj74314_droppedInsideTargetActions_2_runningActionsCount = window.obj74314_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74314_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74314_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74314_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74314_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj74394 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj74314_droppedInsideTargetActions_2_runningActionsCount = window.obj74314_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74314_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74314_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74314_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74314_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj74314_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74314_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj74314").trigger("obj74314_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74314) {
				console.warn("de-queueing event obj74314." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74314").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74314_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj74314 
move_74331();
function move_74331() {
	window.obj74314_droppedInsideTargetActions_2_runningActionsCount = obj74314_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj74314");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 195;
	var moveY = 630;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj74314_droppedInsideTargetActions_2_runningActionsCount = window.obj74314_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74314_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74314_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74314_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74314_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj74314_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74314_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj74314").trigger("obj74314_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74314) {
				console.warn("de-queueing event obj74314." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74314").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74314_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_74332();
function runjs_74332() {
	window.obj74314_droppedInsideTargetActions_2_runningActionsCount = obj74314_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj74408").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj74314_droppedInsideTargetActions_2_runningActionsCount = window.obj74314_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74314_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74314_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74314_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74314_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj74314_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74314_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj74314").trigger("obj74314_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74314) {
				console.warn("de-queueing event obj74314." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74314").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74314_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_74333();
function runjs_74333() {
	window.obj74314_droppedInsideTargetActions_2_runningActionsCount = obj74314_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj74408").css("border-color", "#000000"); $("#obj74408").css("border-width", "1px"); $("#obj74408").css("border-style", "solid"); $("#obj74408").css("border-radius", "10px"); $("#obj74408").css("-webkit-border-radius", "10px"); $("#obj74408").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj74314_droppedInsideTargetActions_2_runningActionsCount = window.obj74314_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74314_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74314_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74314_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74314_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj74314_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74314_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj74314").trigger("obj74314_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74314) {
				console.warn("de-queueing event obj74314." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74314").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74314_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj74402
(function(){
	window.obj74314_droppedInsideTargetActions_2_runningActionsCount = obj74314_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj74402";
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
					window.obj74314_droppedInsideTargetActions_2_runningActionsCount = window.obj74314_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74314_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74314_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74314_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74314_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj74314_droppedInsideTargetActions_2_runningActionsCount = window.obj74314_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74314_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74314_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74314_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74314_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj74314_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74314_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj74314").trigger("obj74314_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74314) {
				console.warn("de-queueing event obj74314." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74314").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74314_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_74335();
function runjs_74335() {
	window.obj74314_droppedInsideTargetActions_2_runningActionsCount = obj74314_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj74314").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj74314_droppedInsideTargetActions_2_runningActionsCount = window.obj74314_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74314_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74314_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74314_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74314_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj74314_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74314_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj74314").trigger("obj74314_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74314) {
				console.warn("de-queueing event obj74314." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74314").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74314_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_74336();
function runjs_74336() {
	window.obj74314_droppedInsideTargetActions_2_runningActionsCount = obj74314_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj74314").css("border-color", "rgba(0,0,0,0)"); $("#obj74314").css("border-width", "0px"); $("#obj74314").css("border-style", "solid"); $("#obj74314").css("border-radius", "10px"); $("#obj74314").css("-webkit-border-radius", "10px"); $("#obj74314").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj74314_droppedInsideTargetActions_2_runningActionsCount = window.obj74314_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74314_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74314_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74314_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74314_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj74314_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74314_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj74314").trigger("obj74314_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74314) {
				console.warn("de-queueing event obj74314." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74314").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74314_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj74393 
playAudio_74337();
function playAudio_74337() {
	window.obj74314_droppedInsideTargetActions_2_runningActionsCount = obj74314_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj74393")[0];
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
		    window.obj74314_droppedInsideTargetActions_2_runningActionsCount = window.obj74314_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74314_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74314_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74314_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74314_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj74314_droppedInsideTargetActions_2_runningActionsCount = window.obj74314_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74314_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74314_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74314_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74314_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj74314_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74314_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj74314").trigger("obj74314_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74314) {
				console.warn("de-queueing event obj74314." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74314").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74314_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_74338();
function switchText_74338() {
	window.obj74314_droppedInsideTargetActions_2_runningActionsCount = obj74314_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj74394_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj74394_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj74394").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj74394_content");
			setTimeout(function () {
				window.obj74314_droppedInsideTargetActions_2_runningActionsCount = window.obj74314_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74314_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74314_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74314_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74314_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj74394 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj74314_droppedInsideTargetActions_2_runningActionsCount = window.obj74314_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74314_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74314_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74314_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74314_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj74314_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj74314_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj74314").trigger("obj74314_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74314) {
				console.warn("de-queueing event obj74314." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74314").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74314_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj74314_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74314_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj74314").trigger("obj74314_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74314) {
				console.warn("de-queueing event obj74314." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74314").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74314_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_74319();
function runjs_74319() {
	window.obj74314_droppedInsideTargetActions_runningActionsCount = obj74314_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj74406").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj74314_droppedInsideTargetActions_runningActionsCount = window.obj74314_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj74314_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj74314_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj74314_droppedInsideTargetActions_runningActionsCount == 0) {
	obj74314_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj74314_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74314_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj74314").trigger("obj74314_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74314) {
				console.warn("de-queueing event obj74314." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74314").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74314_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_74323();
function switchText_74323() {
	window.obj74314_droppedInsideTargetActions_runningActionsCount = obj74314_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj74394_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj74394_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj74394").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj74394_content");
			setTimeout(function () {
				window.obj74314_droppedInsideTargetActions_runningActionsCount = window.obj74314_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj74314_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj74314_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj74314_droppedInsideTargetActions_runningActionsCount == 0) {
	obj74314_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj74394 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj74314_droppedInsideTargetActions_runningActionsCount = window.obj74314_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj74314_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj74314_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj74314_droppedInsideTargetActions_runningActionsCount == 0) {
	obj74314_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj74314_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74314_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj74314").trigger("obj74314_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74314) {
				console.warn("de-queueing event obj74314." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74314").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74314_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_74320();
function runjs_74320() {
	window.obj74314_droppedInsideTargetActions_runningActionsCount = obj74314_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj74406").css("border-color", "#058E3F"); $("#obj74406").css("border-width", "2px"); $("#obj74406").css("border-style", "solid"); $("#obj74406").css("border-radius", "10px"); $("#obj74406").css("-webkit-border-radius", "10px"); $("#obj74406").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj74314_droppedInsideTargetActions_runningActionsCount = window.obj74314_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj74314_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj74314_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj74314_droppedInsideTargetActions_runningActionsCount == 0) {
	obj74314_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj74314_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74314_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj74314").trigger("obj74314_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74314) {
				console.warn("de-queueing event obj74314." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74314").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74314_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj74400 
hide_74321();
function hide_74321() {
	var selector = "#obj74400";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj74314_droppedInsideTargetActions_runningActionsCount = obj74314_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj74314_droppedInsideTargetActions_runningActionsCount = window.obj74314_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj74314_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj74314_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj74314_droppedInsideTargetActions_runningActionsCount == 0) {
	obj74314_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_74321(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj74314_droppedInsideTargetActions_runningActionsCount = window.obj74314_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj74314_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj74314_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj74314_droppedInsideTargetActions_runningActionsCount == 0) {
	obj74314_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj74314_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74314_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj74314").trigger("obj74314_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74314) {
				console.warn("de-queueing event obj74314." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74314").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74314_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_74322();
function runjs_74322() {
	window.obj74314_droppedInsideTargetActions_runningActionsCount = obj74314_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj74314").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj74314_droppedInsideTargetActions_runningActionsCount = window.obj74314_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj74314_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj74314_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj74314_droppedInsideTargetActions_runningActionsCount == 0) {
	obj74314_droppedInsideTargetActions_actionGroup5();
}
	}, 1);
}







};
obj74314_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74314_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj74314").trigger("obj74314_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74314) {
				console.warn("de-queueing event obj74314." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74314").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74314_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj74392 
playAudio_74324();
function playAudio_74324() {
	window.obj74314_droppedInsideTargetActions_runningActionsCount = obj74314_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj74392")[0];
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
		    window.obj74314_droppedInsideTargetActions_runningActionsCount = window.obj74314_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj74314_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj74314_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj74314_droppedInsideTargetActions_runningActionsCount == 0) {
	obj74314_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj74314_droppedInsideTargetActions_runningActionsCount = window.obj74314_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj74314_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj74314_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj74314_droppedInsideTargetActions_runningActionsCount == 0) {
	obj74314_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj74314_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74314_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj74314").trigger("obj74314_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74314) {
				console.warn("de-queueing event obj74314." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74314").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74314_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90186();
function switchText_90186() {
	window.obj74314_droppedInsideTargetActions_runningActionsCount = obj74314_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj74394_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj74394_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj74394").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj74394_content");
			setTimeout(function () {
				window.obj74314_droppedInsideTargetActions_runningActionsCount = window.obj74314_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj74314_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj74314_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj74314_droppedInsideTargetActions_runningActionsCount == 0) {
	obj74314_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj74394 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj74314_droppedInsideTargetActions_runningActionsCount = window.obj74314_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj74314_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj74314_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj74314_droppedInsideTargetActions_runningActionsCount == 0) {
	obj74314_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj74314_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj74314_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj74314").trigger("obj74314_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74314) {
				console.warn("de-queueing event obj74314." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74314").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74314_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj74275_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74275_onTouchDown_activeActionGroupIndex = -1;
		$("#obj74275").trigger("obj74275_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74275) {
				console.warn("de-queueing event obj74275." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74275").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74275_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj74275");
//	action: dragDrop
//	target: obj74275 
dragDrop_74278();
function dragDrop_74278() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj74275_onTouchDown_runningActionsCount = obj74275_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj74275');
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
	  	containerNode = $('#obj74416');
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
    	window.obj74275_onTouchDown_runningActionsCount = window.obj74275_onTouchDown_runningActionsCount - 1;
if (window.obj74275_onTouchDown_runningActionsCount < 0) {
	window.obj74275_onTouchDown_runningActionsCount = 0;
} else if (window.obj74275_onTouchDown_runningActionsCount == 0) {
	obj74275_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj74408","#obj74406","#obj74404");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_74278 = false;
    	var dropped_id_74278;
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
					dropped_74278 = true;
					dropped_id_74278 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_74278) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj74275").trigger('SCActionDragDrop74278_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj74275_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj74275_onTouchDown_activeActionGroupIndex = -1;
		$("#obj74275").trigger("obj74275_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74275) {
				console.warn("de-queueing event obj74275." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74275").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74275_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj74275_SCActionDragDrop74278_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74275_SCActionDragDrop74278_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj74275").trigger("obj74275_SCActionDragDrop74278_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74275) {
				console.warn("de-queueing event obj74275." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74275").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74275_SCActionDragDrop74278_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj74275 
move_92294();
function move_92294() {
	window.obj74275_SCActionDragDrop74278_droppedOutsideTargetActions_runningActionsCount = obj74275_SCActionDragDrop74278_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj74275");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 321;
	var moveY = 546;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj74275_SCActionDragDrop74278_droppedOutsideTargetActions_runningActionsCount = window.obj74275_SCActionDragDrop74278_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj74275_SCActionDragDrop74278_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj74275_SCActionDragDrop74278_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj74275_SCActionDragDrop74278_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj74275_SCActionDragDrop74278_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj74275_SCActionDragDrop74278_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj74275_SCActionDragDrop74278_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj74275").trigger("obj74275_SCActionDragDrop74278_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74275) {
				console.warn("de-queueing event obj74275." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74275").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74275_SCActionDragDrop74278_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj74275_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74275_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj74275").trigger("obj74275_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74275) {
				console.warn("de-queueing event obj74275." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74275").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74275_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_74301();
function runjs_74301() {
	window.obj74275_droppedInsideTargetActions_3_runningActionsCount = obj74275_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj74404").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj74275_droppedInsideTargetActions_3_runningActionsCount = window.obj74275_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj74275_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj74275_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj74275_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj74275_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj74275_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74275_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj74275").trigger("obj74275_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74275) {
				console.warn("de-queueing event obj74275." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74275").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74275_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_74302();
function runjs_74302() {
	window.obj74275_droppedInsideTargetActions_3_runningActionsCount = obj74275_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj74404").css("border-color", "#C00000"); $("#obj74404").css("border-width", "2px"); $("#obj74404").css("border-style", "solid"); $("#obj74404").css("border-radius", "10px"); $("#obj74404").css("-webkit-border-radius", "10px"); $("#obj74404").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj74275_droppedInsideTargetActions_3_runningActionsCount = window.obj74275_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj74275_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj74275_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj74275_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj74275_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj74275_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74275_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj74275").trigger("obj74275_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74275) {
				console.warn("de-queueing event obj74275." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74275").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74275_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj74398 
hide_74303();
function hide_74303() {
	var selector = "#obj74398";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj74275_droppedInsideTargetActions_3_runningActionsCount = obj74275_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj74275_droppedInsideTargetActions_3_runningActionsCount = window.obj74275_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj74275_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj74275_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj74275_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj74275_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_74303(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj74275_droppedInsideTargetActions_3_runningActionsCount = window.obj74275_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj74275_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj74275_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj74275_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj74275_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj74275_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74275_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj74275").trigger("obj74275_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74275) {
				console.warn("de-queueing event obj74275." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74275").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74275_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_74304();
function runjs_74304() {
	window.obj74275_droppedInsideTargetActions_3_runningActionsCount = obj74275_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj74275").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj74275_droppedInsideTargetActions_3_runningActionsCount = window.obj74275_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj74275_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj74275_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj74275_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj74275_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj74275_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74275_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj74275").trigger("obj74275_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74275) {
				console.warn("de-queueing event obj74275." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74275").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74275_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_74305();
function switchText_74305() {
	window.obj74275_droppedInsideTargetActions_3_runningActionsCount = obj74275_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj74394_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj74394_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj74394").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj74394_content");
			setTimeout(function () {
				window.obj74275_droppedInsideTargetActions_3_runningActionsCount = window.obj74275_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj74275_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj74275_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj74275_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj74275_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj74394 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj74275_droppedInsideTargetActions_3_runningActionsCount = window.obj74275_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj74275_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj74275_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj74275_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj74275_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj74275_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74275_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj74275").trigger("obj74275_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74275) {
				console.warn("de-queueing event obj74275." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74275").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74275_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj74275 
move_74306();
function move_74306() {
	window.obj74275_droppedInsideTargetActions_3_runningActionsCount = obj74275_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj74275");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 321;
	var moveY = 546;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj74275_droppedInsideTargetActions_3_runningActionsCount = window.obj74275_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj74275_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj74275_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj74275_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj74275_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj74275_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74275_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj74275").trigger("obj74275_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74275) {
				console.warn("de-queueing event obj74275." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74275").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74275_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_74307();
function runjs_74307() {
	window.obj74275_droppedInsideTargetActions_3_runningActionsCount = obj74275_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj74404").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj74275_droppedInsideTargetActions_3_runningActionsCount = window.obj74275_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj74275_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj74275_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj74275_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj74275_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj74275_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74275_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj74275").trigger("obj74275_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74275) {
				console.warn("de-queueing event obj74275." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74275").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74275_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_74308();
function runjs_74308() {
	window.obj74275_droppedInsideTargetActions_3_runningActionsCount = obj74275_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj74404").css("border-color", "#000000"); $("#obj74404").css("border-width", "1px"); $("#obj74404").css("border-style", "solid"); $("#obj74404").css("border-radius", "10px"); $("#obj74404").css("-webkit-border-radius", "10px"); $("#obj74404").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj74275_droppedInsideTargetActions_3_runningActionsCount = window.obj74275_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj74275_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj74275_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj74275_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj74275_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj74275_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74275_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj74275").trigger("obj74275_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74275) {
				console.warn("de-queueing event obj74275." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74275").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74275_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj74398
(function(){
	window.obj74275_droppedInsideTargetActions_3_runningActionsCount = obj74275_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj74398";
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
					window.obj74275_droppedInsideTargetActions_3_runningActionsCount = window.obj74275_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj74275_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj74275_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj74275_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj74275_droppedInsideTargetActions_3_actionGroup9();
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
				window.obj74275_droppedInsideTargetActions_3_runningActionsCount = window.obj74275_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj74275_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj74275_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj74275_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj74275_droppedInsideTargetActions_3_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj74275_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74275_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj74275").trigger("obj74275_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74275) {
				console.warn("de-queueing event obj74275." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74275").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74275_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_74310();
function runjs_74310() {
	window.obj74275_droppedInsideTargetActions_3_runningActionsCount = obj74275_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj74275").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj74275_droppedInsideTargetActions_3_runningActionsCount = window.obj74275_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj74275_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj74275_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj74275_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj74275_droppedInsideTargetActions_3_actionGroup10();
}
	}, 1);
}







};
obj74275_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74275_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj74275").trigger("obj74275_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74275) {
				console.warn("de-queueing event obj74275." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74275").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74275_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_74311();
function runjs_74311() {
	window.obj74275_droppedInsideTargetActions_3_runningActionsCount = obj74275_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj74275").css("border-color", "rgba(0,0,0,0)"); $("#obj74275").css("border-width", "0px"); $("#obj74275").css("border-style", "solid"); $("#obj74275").css("border-radius", "10px"); $("#obj74275").css("-webkit-border-radius", "10px"); $("#obj74275").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj74275_droppedInsideTargetActions_3_runningActionsCount = window.obj74275_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj74275_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj74275_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj74275_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj74275_droppedInsideTargetActions_3_actionGroup11();
}
	}, 1);
}







};
obj74275_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74275_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj74275").trigger("obj74275_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74275) {
				console.warn("de-queueing event obj74275." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74275").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74275_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj74393 
playAudio_74312();
function playAudio_74312() {
	window.obj74275_droppedInsideTargetActions_3_runningActionsCount = obj74275_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj74393")[0];
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
		    window.obj74275_droppedInsideTargetActions_3_runningActionsCount = window.obj74275_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj74275_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj74275_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj74275_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj74275_droppedInsideTargetActions_3_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj74275_droppedInsideTargetActions_3_runningActionsCount = window.obj74275_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj74275_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj74275_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj74275_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj74275_droppedInsideTargetActions_3_actionGroup12();
}
	}
}









};
obj74275_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74275_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj74275").trigger("obj74275_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74275) {
				console.warn("de-queueing event obj74275." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74275").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74275_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_74313();
function switchText_74313() {
	window.obj74275_droppedInsideTargetActions_3_runningActionsCount = obj74275_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj74394_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj74394_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj74394").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj74394_content");
			setTimeout(function () {
				window.obj74275_droppedInsideTargetActions_3_runningActionsCount = window.obj74275_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj74275_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj74275_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj74275_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj74275_droppedInsideTargetActions_3_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj74394 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj74275_droppedInsideTargetActions_3_runningActionsCount = window.obj74275_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj74275_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj74275_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj74275_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj74275_droppedInsideTargetActions_3_actionGroup13();
}
		}, 1);
	}
}






};
obj74275_droppedInsideTargetActions_3_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj74275_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj74275").trigger("obj74275_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74275) {
				console.warn("de-queueing event obj74275." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74275").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74275_droppedInsideTargetActions_3_activeActionGroupIndex = 13;
	





















};
obj74275_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74275_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj74275").trigger("obj74275_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74275) {
				console.warn("de-queueing event obj74275." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74275").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74275_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_74287();
function runjs_74287() {
	window.obj74275_droppedInsideTargetActions_2_runningActionsCount = obj74275_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj74406").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj74275_droppedInsideTargetActions_2_runningActionsCount = window.obj74275_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74275_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74275_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74275_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74275_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj74275_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74275_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj74275").trigger("obj74275_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74275) {
				console.warn("de-queueing event obj74275." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74275").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74275_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_74288();
function runjs_74288() {
	window.obj74275_droppedInsideTargetActions_2_runningActionsCount = obj74275_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj74406").css("border-color", "#C00000"); $("#obj74406").css("border-width", "2px"); $("#obj74406").css("border-style", "solid"); $("#obj74406").css("border-radius", "10px"); $("#obj74406").css("-webkit-border-radius", "10px"); $("#obj74406").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj74275_droppedInsideTargetActions_2_runningActionsCount = window.obj74275_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74275_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74275_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74275_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74275_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj74275_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74275_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj74275").trigger("obj74275_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74275) {
				console.warn("de-queueing event obj74275." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74275").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74275_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj74400 
hide_74289();
function hide_74289() {
	var selector = "#obj74400";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj74275_droppedInsideTargetActions_2_runningActionsCount = obj74275_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj74275_droppedInsideTargetActions_2_runningActionsCount = window.obj74275_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74275_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74275_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74275_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74275_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_74289(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj74275_droppedInsideTargetActions_2_runningActionsCount = window.obj74275_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74275_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74275_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74275_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74275_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj74275_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74275_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj74275").trigger("obj74275_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74275) {
				console.warn("de-queueing event obj74275." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74275").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74275_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_74290();
function runjs_74290() {
	window.obj74275_droppedInsideTargetActions_2_runningActionsCount = obj74275_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj74275").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj74275_droppedInsideTargetActions_2_runningActionsCount = window.obj74275_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74275_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74275_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74275_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74275_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj74275_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74275_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj74275").trigger("obj74275_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74275) {
				console.warn("de-queueing event obj74275." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74275").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74275_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_74291();
function switchText_74291() {
	window.obj74275_droppedInsideTargetActions_2_runningActionsCount = obj74275_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj74394_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj74394_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj74394").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj74394_content");
			setTimeout(function () {
				window.obj74275_droppedInsideTargetActions_2_runningActionsCount = window.obj74275_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74275_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74275_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74275_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74275_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj74394 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj74275_droppedInsideTargetActions_2_runningActionsCount = window.obj74275_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74275_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74275_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74275_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74275_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj74275_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74275_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj74275").trigger("obj74275_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74275) {
				console.warn("de-queueing event obj74275." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74275").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74275_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj74275 
move_74292();
function move_74292() {
	window.obj74275_droppedInsideTargetActions_2_runningActionsCount = obj74275_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj74275");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 321;
	var moveY = 546;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj74275_droppedInsideTargetActions_2_runningActionsCount = window.obj74275_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74275_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74275_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74275_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74275_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj74275_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74275_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj74275").trigger("obj74275_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74275) {
				console.warn("de-queueing event obj74275." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74275").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74275_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_74293();
function runjs_74293() {
	window.obj74275_droppedInsideTargetActions_2_runningActionsCount = obj74275_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj74406").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj74275_droppedInsideTargetActions_2_runningActionsCount = window.obj74275_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74275_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74275_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74275_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74275_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj74275_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74275_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj74275").trigger("obj74275_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74275) {
				console.warn("de-queueing event obj74275." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74275").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74275_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_74294();
function runjs_74294() {
	window.obj74275_droppedInsideTargetActions_2_runningActionsCount = obj74275_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj74406").css("border-color", "#000000"); $("#obj74406").css("border-width", "1px"); $("#obj74406").css("border-style", "solid"); $("#obj74406").css("border-radius", "10px"); $("#obj74406").css("-webkit-border-radius", "10px"); $("#obj74406").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj74275_droppedInsideTargetActions_2_runningActionsCount = window.obj74275_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74275_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74275_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74275_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74275_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj74275_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74275_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj74275").trigger("obj74275_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74275) {
				console.warn("de-queueing event obj74275." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74275").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74275_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj74400
(function(){
	window.obj74275_droppedInsideTargetActions_2_runningActionsCount = obj74275_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj74400";
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
					window.obj74275_droppedInsideTargetActions_2_runningActionsCount = window.obj74275_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74275_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74275_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74275_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74275_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj74275_droppedInsideTargetActions_2_runningActionsCount = window.obj74275_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74275_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74275_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74275_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74275_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj74275_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74275_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj74275").trigger("obj74275_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74275) {
				console.warn("de-queueing event obj74275." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74275").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74275_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_74296();
function runjs_74296() {
	window.obj74275_droppedInsideTargetActions_2_runningActionsCount = obj74275_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj74275").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj74275_droppedInsideTargetActions_2_runningActionsCount = window.obj74275_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74275_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74275_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74275_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74275_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj74275_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74275_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj74275").trigger("obj74275_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74275) {
				console.warn("de-queueing event obj74275." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74275").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74275_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_74297();
function runjs_74297() {
	window.obj74275_droppedInsideTargetActions_2_runningActionsCount = obj74275_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj74275").css("border-color", "rgba(0,0,0,0)"); $("#obj74275").css("border-width", "0px"); $("#obj74275").css("border-style", "solid"); $("#obj74275").css("border-radius", "10px"); $("#obj74275").css("-webkit-border-radius", "10px"); $("#obj74275").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj74275_droppedInsideTargetActions_2_runningActionsCount = window.obj74275_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74275_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74275_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74275_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74275_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj74275_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74275_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj74275").trigger("obj74275_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74275) {
				console.warn("de-queueing event obj74275." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74275").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74275_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj74393 
playAudio_74298();
function playAudio_74298() {
	window.obj74275_droppedInsideTargetActions_2_runningActionsCount = obj74275_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj74393")[0];
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
		    window.obj74275_droppedInsideTargetActions_2_runningActionsCount = window.obj74275_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74275_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74275_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74275_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74275_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj74275_droppedInsideTargetActions_2_runningActionsCount = window.obj74275_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74275_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74275_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74275_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74275_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj74275_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74275_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj74275").trigger("obj74275_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74275) {
				console.warn("de-queueing event obj74275." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74275").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74275_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_74299();
function switchText_74299() {
	window.obj74275_droppedInsideTargetActions_2_runningActionsCount = obj74275_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj74394_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj74394_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj74394").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj74394_content");
			setTimeout(function () {
				window.obj74275_droppedInsideTargetActions_2_runningActionsCount = window.obj74275_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74275_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74275_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74275_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74275_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj74394 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj74275_droppedInsideTargetActions_2_runningActionsCount = window.obj74275_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj74275_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj74275_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj74275_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj74275_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj74275_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj74275_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj74275").trigger("obj74275_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74275) {
				console.warn("de-queueing event obj74275." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74275").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74275_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj74275_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74275_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj74275").trigger("obj74275_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74275) {
				console.warn("de-queueing event obj74275." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74275").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74275_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_74280();
function runjs_74280() {
	window.obj74275_droppedInsideTargetActions_runningActionsCount = obj74275_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj74408").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj74275_droppedInsideTargetActions_runningActionsCount = window.obj74275_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj74275_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj74275_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj74275_droppedInsideTargetActions_runningActionsCount == 0) {
	obj74275_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj74275_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74275_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj74275").trigger("obj74275_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74275) {
				console.warn("de-queueing event obj74275." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74275").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74275_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_74284();
function switchText_74284() {
	window.obj74275_droppedInsideTargetActions_runningActionsCount = obj74275_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj74394_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj74394_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj74394").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj74394_content");
			setTimeout(function () {
				window.obj74275_droppedInsideTargetActions_runningActionsCount = window.obj74275_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj74275_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj74275_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj74275_droppedInsideTargetActions_runningActionsCount == 0) {
	obj74275_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj74394 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj74275_droppedInsideTargetActions_runningActionsCount = window.obj74275_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj74275_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj74275_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj74275_droppedInsideTargetActions_runningActionsCount == 0) {
	obj74275_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj74275_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74275_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj74275").trigger("obj74275_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74275) {
				console.warn("de-queueing event obj74275." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74275").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74275_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_74281();
function runjs_74281() {
	window.obj74275_droppedInsideTargetActions_runningActionsCount = obj74275_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj74408").css("border-color", "#058E3F"); $("#obj74408").css("border-width", "2px"); $("#obj74408").css("border-style", "solid"); $("#obj74408").css("border-radius", "10px"); $("#obj74408").css("-webkit-border-radius", "10px"); $("#obj74408").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj74275_droppedInsideTargetActions_runningActionsCount = window.obj74275_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj74275_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj74275_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj74275_droppedInsideTargetActions_runningActionsCount == 0) {
	obj74275_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj74275_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74275_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj74275").trigger("obj74275_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74275) {
				console.warn("de-queueing event obj74275." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74275").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74275_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj74402 
hide_74282();
function hide_74282() {
	var selector = "#obj74402";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj74275_droppedInsideTargetActions_runningActionsCount = obj74275_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj74275_droppedInsideTargetActions_runningActionsCount = window.obj74275_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj74275_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj74275_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj74275_droppedInsideTargetActions_runningActionsCount == 0) {
	obj74275_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_74282(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj74275_droppedInsideTargetActions_runningActionsCount = window.obj74275_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj74275_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj74275_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj74275_droppedInsideTargetActions_runningActionsCount == 0) {
	obj74275_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj74275_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74275_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj74275").trigger("obj74275_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74275) {
				console.warn("de-queueing event obj74275." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74275").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74275_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_74283();
function runjs_74283() {
	window.obj74275_droppedInsideTargetActions_runningActionsCount = obj74275_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj74275").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj74275_droppedInsideTargetActions_runningActionsCount = window.obj74275_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj74275_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj74275_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj74275_droppedInsideTargetActions_runningActionsCount == 0) {
	obj74275_droppedInsideTargetActions_actionGroup5();
}
	}, 1);
}







};
obj74275_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74275_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj74275").trigger("obj74275_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74275) {
				console.warn("de-queueing event obj74275." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74275").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74275_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj74392 
playAudio_74285();
function playAudio_74285() {
	window.obj74275_droppedInsideTargetActions_runningActionsCount = obj74275_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj74392")[0];
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
		    window.obj74275_droppedInsideTargetActions_runningActionsCount = window.obj74275_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj74275_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj74275_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj74275_droppedInsideTargetActions_runningActionsCount == 0) {
	obj74275_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj74275_droppedInsideTargetActions_runningActionsCount = window.obj74275_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj74275_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj74275_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj74275_droppedInsideTargetActions_runningActionsCount == 0) {
	obj74275_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj74275_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74275_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj74275").trigger("obj74275_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74275) {
				console.warn("de-queueing event obj74275." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74275").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74275_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90185();
function switchText_90185() {
	window.obj74275_droppedInsideTargetActions_runningActionsCount = obj74275_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj74394_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj74394_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj74394").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj74394_content");
			setTimeout(function () {
				window.obj74275_droppedInsideTargetActions_runningActionsCount = window.obj74275_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj74275_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj74275_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj74275_droppedInsideTargetActions_runningActionsCount == 0) {
	obj74275_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj74394 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj74275_droppedInsideTargetActions_runningActionsCount = window.obj74275_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj74275_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj74275_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj74275_droppedInsideTargetActions_runningActionsCount == 0) {
	obj74275_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj74275_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj74275_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj74275").trigger("obj74275_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74275) {
				console.warn("de-queueing event obj74275." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74275").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74275_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj74257_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74257_onTap_activeActionGroupIndex = -1;
		$("#obj74257").trigger("obj74257_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74257) {
				console.warn("de-queueing event obj74257." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74257").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74257_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj74257 
hide_74260();
function hide_74260() {
	var selector = "#obj74257";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj74257_onTap_runningActionsCount = obj74257_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj74257_onTap_runningActionsCount = window.obj74257_onTap_runningActionsCount - 1;
if (window.obj74257_onTap_runningActionsCount < 0) {
	window.obj74257_onTap_runningActionsCount = 0;
} else if (window.obj74257_onTap_runningActionsCount == 0) {
	obj74257_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_74260(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj74257_onTap_runningActionsCount = window.obj74257_onTap_runningActionsCount - 1;
if (window.obj74257_onTap_runningActionsCount < 0) {
	window.obj74257_onTap_runningActionsCount = 0;
} else if (window.obj74257_onTap_runningActionsCount == 0) {
	obj74257_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj74247 
stopMovie_74259();
function stopMovie_74259() {
	window.obj74257_onTap_runningActionsCount = obj74257_onTap_runningActionsCount + 1;
	var myVideo = $("#obj74247")[0];
	myVideo.pause();
	window.obj74257_onTap_runningActionsCount = window.obj74257_onTap_runningActionsCount - 1;
if (window.obj74257_onTap_runningActionsCount < 0) {
	window.obj74257_onTap_runningActionsCount = 0;
} else if (window.obj74257_onTap_runningActionsCount == 0) {
	obj74257_onTap_actionGroup1();
}
}
















};
obj74257_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74257_onTap_activeActionGroupIndex = -1;
		$("#obj74257").trigger("obj74257_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74257) {
				console.warn("de-queueing event obj74257." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74257").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74257_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj74249
(function(){
	window.obj74257_onTap_runningActionsCount = obj74257_onTap_runningActionsCount + 1;

	var selector = "#obj74249";
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
					window.obj74257_onTap_runningActionsCount = window.obj74257_onTap_runningActionsCount - 1;
if (window.obj74257_onTap_runningActionsCount < 0) {
	window.obj74257_onTap_runningActionsCount = 0;
} else if (window.obj74257_onTap_runningActionsCount == 0) {
	obj74257_onTap_actionGroup2();
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
				window.obj74257_onTap_runningActionsCount = window.obj74257_onTap_runningActionsCount - 1;
if (window.obj74257_onTap_runningActionsCount < 0) {
	window.obj74257_onTap_runningActionsCount = 0;
} else if (window.obj74257_onTap_runningActionsCount == 0) {
	obj74257_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj74257_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74257_onTap_activeActionGroupIndex = -1;
		$("#obj74257").trigger("obj74257_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74257) {
				console.warn("de-queueing event obj74257." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74257").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74257_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj74247 
move_74262();
function move_74262() {
	window.obj74257_onTap_runningActionsCount = obj74257_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj74247");
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
			window.obj74257_onTap_runningActionsCount = window.obj74257_onTap_runningActionsCount - 1;
if (window.obj74257_onTap_runningActionsCount < 0) {
	window.obj74257_onTap_runningActionsCount = 0;
} else if (window.obj74257_onTap_runningActionsCount == 0) {
	obj74257_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj74257_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj74257_onTap_activeActionGroupIndex = -1;
		$("#obj74257").trigger("obj74257_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74257) {
				console.warn("de-queueing event obj74257." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74257").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74257_onTap_activeActionGroupIndex = 3;
	





















};
obj74249_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74249_onTap_activeActionGroupIndex = -1;
		$("#obj74249").trigger("obj74249_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74249) {
				console.warn("de-queueing event obj74249." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74249").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74249_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj74249 
hide_74252();
function hide_74252() {
	var selector = "#obj74249";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj74249_onTap_runningActionsCount = obj74249_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj74249_onTap_runningActionsCount = window.obj74249_onTap_runningActionsCount - 1;
if (window.obj74249_onTap_runningActionsCount < 0) {
	window.obj74249_onTap_runningActionsCount = 0;
} else if (window.obj74249_onTap_runningActionsCount == 0) {
	obj74249_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_74252(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj74249_onTap_runningActionsCount = window.obj74249_onTap_runningActionsCount - 1;
if (window.obj74249_onTap_runningActionsCount < 0) {
	window.obj74249_onTap_runningActionsCount = 0;
} else if (window.obj74249_onTap_runningActionsCount == 0) {
	obj74249_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj74247 
playPauseMovie_74251();
function playPauseMovie_74251() {
	window.obj74249_onTap_runningActionsCount = obj74249_onTap_runningActionsCount + 1;
	var myVideo = $("#obj74247")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj74249_onTap_runningActionsCount = window.obj74249_onTap_runningActionsCount - 1;
if (window.obj74249_onTap_runningActionsCount < 0) {
	window.obj74249_onTap_runningActionsCount = 0;
} else if (window.obj74249_onTap_runningActionsCount == 0) {
	obj74249_onTap_actionGroup1();
}
}

















};
obj74249_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74249_onTap_activeActionGroupIndex = -1;
		$("#obj74249").trigger("obj74249_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74249) {
				console.warn("de-queueing event obj74249." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74249").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74249_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj74257
(function(){
	window.obj74249_onTap_runningActionsCount = obj74249_onTap_runningActionsCount + 1;

	var selector = "#obj74257";
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
					window.obj74249_onTap_runningActionsCount = window.obj74249_onTap_runningActionsCount - 1;
if (window.obj74249_onTap_runningActionsCount < 0) {
	window.obj74249_onTap_runningActionsCount = 0;
} else if (window.obj74249_onTap_runningActionsCount == 0) {
	obj74249_onTap_actionGroup2();
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
				window.obj74249_onTap_runningActionsCount = window.obj74249_onTap_runningActionsCount - 1;
if (window.obj74249_onTap_runningActionsCount < 0) {
	window.obj74249_onTap_runningActionsCount = 0;
} else if (window.obj74249_onTap_runningActionsCount == 0) {
	obj74249_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj74249_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74249_onTap_activeActionGroupIndex = -1;
		$("#obj74249").trigger("obj74249_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74249) {
				console.warn("de-queueing event obj74249." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74249").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74249_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj74247 
move_74254();
function move_74254() {
	window.obj74249_onTap_runningActionsCount = obj74249_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj74247");
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
			window.obj74249_onTap_runningActionsCount = window.obj74249_onTap_runningActionsCount - 1;
if (window.obj74249_onTap_runningActionsCount < 0) {
	window.obj74249_onTap_runningActionsCount = 0;
} else if (window.obj74249_onTap_runningActionsCount == 0) {
	obj74249_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj74249_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj74249_onTap_activeActionGroupIndex = -1;
		$("#obj74249").trigger("obj74249_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74249) {
				console.warn("de-queueing event obj74249." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74249").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74249_onTap_activeActionGroupIndex = 3;
	





















};
obj74877_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj74877_onTap_activeActionGroupIndex = -1;
		$("#obj74877").trigger("obj74877_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74877) {
				console.warn("de-queueing event obj74877." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74877").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74877_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_74879();
function goToPage_74879() {
	window.obj74877_onTap_runningActionsCount = obj74877_onTap_runningActionsCount + 1;
	$("#anchor378")[0].click();
	window.obj74877_onTap_runningActionsCount = window.obj74877_onTap_runningActionsCount - 1;
if (window.obj74877_onTap_runningActionsCount < 0) {
	window.obj74877_onTap_runningActionsCount = 0;
} else if (window.obj74877_onTap_runningActionsCount == 0) {
	obj74877_onTap_actionGroup1();
}
}





















};
obj74877_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj74877_onTap_activeActionGroupIndex = -1;
		$("#obj74877").trigger("obj74877_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 74877) {
				console.warn("de-queueing event obj74877." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj74877").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj74877_onTap_activeActionGroupIndex = 1;
	





















};
obj87483_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87483_onTap_activeActionGroupIndex = -1;
		$("#obj87483").trigger("obj87483_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87483) {
				console.warn("de-queueing event obj87483." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87483").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87483_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj87488 
stopAudio_87485();
function stopAudio_87485() {
	window.obj87483_onTap_runningActionsCount = obj87483_onTap_runningActionsCount + 1;
	var myAudio = $("#obj87488")[0];
	myAudio.pause();
	window.obj87483_onTap_runningActionsCount = window.obj87483_onTap_runningActionsCount - 1;
if (window.obj87483_onTap_runningActionsCount < 0) {
	window.obj87483_onTap_runningActionsCount = 0;
} else if (window.obj87483_onTap_runningActionsCount == 0) {
	obj87483_onTap_actionGroup1();
}
}








};
obj87483_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87483_onTap_activeActionGroupIndex = -1;
		$("#obj87483").trigger("obj87483_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87483) {
				console.warn("de-queueing event obj87483." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87483").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87483_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj87483 
hide_87486();
function hide_87486() {
	var selector = "#obj87483";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj87483_onTap_runningActionsCount = obj87483_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj87483_onTap_runningActionsCount = window.obj87483_onTap_runningActionsCount - 1;
if (window.obj87483_onTap_runningActionsCount < 0) {
	window.obj87483_onTap_runningActionsCount = 0;
} else if (window.obj87483_onTap_runningActionsCount == 0) {
	obj87483_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_87486(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj87483_onTap_runningActionsCount = window.obj87483_onTap_runningActionsCount - 1;
if (window.obj87483_onTap_runningActionsCount < 0) {
	window.obj87483_onTap_runningActionsCount = 0;
} else if (window.obj87483_onTap_runningActionsCount == 0) {
	obj87483_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj87483_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87483_onTap_activeActionGroupIndex = -1;
		$("#obj87483").trigger("obj87483_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87483) {
				console.warn("de-queueing event obj87483." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87483").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87483_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj87478
(function(){
	window.obj87483_onTap_runningActionsCount = obj87483_onTap_runningActionsCount + 1;

	var selector = "#obj87478";
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
					window.obj87483_onTap_runningActionsCount = window.obj87483_onTap_runningActionsCount - 1;
if (window.obj87483_onTap_runningActionsCount < 0) {
	window.obj87483_onTap_runningActionsCount = 0;
} else if (window.obj87483_onTap_runningActionsCount == 0) {
	obj87483_onTap_actionGroup3();
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
				window.obj87483_onTap_runningActionsCount = window.obj87483_onTap_runningActionsCount - 1;
if (window.obj87483_onTap_runningActionsCount < 0) {
	window.obj87483_onTap_runningActionsCount = 0;
} else if (window.obj87483_onTap_runningActionsCount == 0) {
	obj87483_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj87483_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj87483_onTap_activeActionGroupIndex = -1;
		$("#obj87483").trigger("obj87483_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87483) {
				console.warn("de-queueing event obj87483." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87483").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87483_onTap_activeActionGroupIndex = 3;
	





















};
obj87478_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87478_onTap_activeActionGroupIndex = -1;
		$("#obj87478").trigger("obj87478_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87478) {
				console.warn("de-queueing event obj87478." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87478").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87478_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj87478 
hide_87480();
function hide_87480() {
	var selector = "#obj87478";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj87478_onTap_runningActionsCount = obj87478_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj87478_onTap_runningActionsCount = window.obj87478_onTap_runningActionsCount - 1;
if (window.obj87478_onTap_runningActionsCount < 0) {
	window.obj87478_onTap_runningActionsCount = 0;
} else if (window.obj87478_onTap_runningActionsCount == 0) {
	obj87478_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_87480(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj87478_onTap_runningActionsCount = window.obj87478_onTap_runningActionsCount - 1;
if (window.obj87478_onTap_runningActionsCount < 0) {
	window.obj87478_onTap_runningActionsCount = 0;
} else if (window.obj87478_onTap_runningActionsCount == 0) {
	obj87478_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj87478_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87478_onTap_activeActionGroupIndex = -1;
		$("#obj87478").trigger("obj87478_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87478) {
				console.warn("de-queueing event obj87478." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87478").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87478_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj87483
(function(){
	window.obj87478_onTap_runningActionsCount = obj87478_onTap_runningActionsCount + 1;

	var selector = "#obj87483";
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
					window.obj87478_onTap_runningActionsCount = window.obj87478_onTap_runningActionsCount - 1;
if (window.obj87478_onTap_runningActionsCount < 0) {
	window.obj87478_onTap_runningActionsCount = 0;
} else if (window.obj87478_onTap_runningActionsCount == 0) {
	obj87478_onTap_actionGroup2();
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
				window.obj87478_onTap_runningActionsCount = window.obj87478_onTap_runningActionsCount - 1;
if (window.obj87478_onTap_runningActionsCount < 0) {
	window.obj87478_onTap_runningActionsCount = 0;
} else if (window.obj87478_onTap_runningActionsCount == 0) {
	obj87478_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj87478_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87478_onTap_activeActionGroupIndex = -1;
		$("#obj87478").trigger("obj87478_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87478) {
				console.warn("de-queueing event obj87478." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87478").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87478_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj87488 
playAudio_87482();
function playAudio_87482() {
	window.obj87478_onTap_runningActionsCount = obj87478_onTap_runningActionsCount + 1;
	var myAudio = $("#obj87488")[0];
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
		    window.obj87478_onTap_runningActionsCount = window.obj87478_onTap_runningActionsCount - 1;
if (window.obj87478_onTap_runningActionsCount < 0) {
	window.obj87478_onTap_runningActionsCount = 0;
} else if (window.obj87478_onTap_runningActionsCount == 0) {
	obj87478_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj87478_onTap_runningActionsCount = window.obj87478_onTap_runningActionsCount - 1;
if (window.obj87478_onTap_runningActionsCount < 0) {
	window.obj87478_onTap_runningActionsCount = 0;
} else if (window.obj87478_onTap_runningActionsCount == 0) {
	obj87478_onTap_actionGroup3();
}
	}
}









};
obj87478_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj87478_onTap_activeActionGroupIndex = -1;
		$("#obj87478").trigger("obj87478_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87478) {
				console.warn("de-queueing event obj87478." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87478").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87478_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj74431: Event Touch Down
 *
 */
$("#obj74431").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj74431_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj74431_onTap is still running");
	return;
}
var obj74431_onTap_runningActionsCount = 0;
var obj74431_onTap_loopCount = 0;
obj74431_onTap_actionGroup0();
});










/*
 *
 *   obj74428: Event Touch Down
 *
 */
$("#obj74428").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj74428_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj74428_onTap is still running");
	return;
}
var obj74428_onTap_runningActionsCount = 0;
var obj74428_onTap_loopCount = 0;
obj74428_onTap_actionGroup0();
});










/*
 *
 *   obj74424: Event Touch Down
 *
 */
$("#obj74424").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj74424_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj74424_onTap is still running");
	return;
}
var obj74424_onTap_runningActionsCount = 0;
var obj74424_onTap_loopCount = 0;
obj74424_onTap_actionGroup0();
});





















































































































































































/*
 *
 *   obj74353: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj74353");
	var winTarget = document.getElementById("obj74353");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj74353").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj74353_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj74353_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj74353_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj74353_onTouchDown is still running");
	return;
}
var obj74353_onTouchDown_runningActionsCount = 0;
var obj74353_onTouchDown_loopCount = 0;
obj74353_onTouchDown_actionGroup0();
});



/*
 *
 *   obj74353: Event SCActionDragDrop74356_droppedOutsideTargetActions
 *
 */
$("#obj74353").bind("SCActionDragDrop74356_droppedOutsideTargetActions", function(event) {
	if (window.obj74353_SCActionDragDrop74356_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj74353_SCActionDragDrop74356_droppedOutsideTargetActions is still running");
	return;
}
var obj74353_SCActionDragDrop74356_droppedOutsideTargetActions_runningActionsCount = 0;
var obj74353_SCActionDragDrop74356_droppedOutsideTargetActions_loopCount = 0;
obj74353_SCActionDragDrop74356_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj74353: Event droppedInsideTargetActions_3
 *
 */
$("#obj74353").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj74353_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj74353_droppedInsideTargetActions_3 is still running");
	return;
}
var obj74353_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj74353_droppedInsideTargetActions_3_loopCount = 0;
obj74353_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj74353: Event droppedInsideTargetActions_2
 *
 */
$("#obj74353").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj74353_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj74353_droppedInsideTargetActions_2 is still running");
	return;
}
var obj74353_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj74353_droppedInsideTargetActions_2_loopCount = 0;
obj74353_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj74353: Event droppedInsideTargetActions
 *
 */
$("#obj74353").bind("droppedInsideTargetActions", function(event) {
	if (window.obj74353_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj74353_droppedInsideTargetActions is still running");
	return;
}
var obj74353_droppedInsideTargetActions_runningActionsCount = 0;
var obj74353_droppedInsideTargetActions_loopCount = 0;
obj74353_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj74314: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj74314");
	var winTarget = document.getElementById("obj74314");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj74314").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj74314_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj74314_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj74314_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj74314_onTouchDown is still running");
	return;
}
var obj74314_onTouchDown_runningActionsCount = 0;
var obj74314_onTouchDown_loopCount = 0;
obj74314_onTouchDown_actionGroup0();
});



/*
 *
 *   obj74314: Event SCActionDragDrop74317_droppedOutsideTargetActions
 *
 */
$("#obj74314").bind("SCActionDragDrop74317_droppedOutsideTargetActions", function(event) {
	if (window.obj74314_SCActionDragDrop74317_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj74314_SCActionDragDrop74317_droppedOutsideTargetActions is still running");
	return;
}
var obj74314_SCActionDragDrop74317_droppedOutsideTargetActions_runningActionsCount = 0;
var obj74314_SCActionDragDrop74317_droppedOutsideTargetActions_loopCount = 0;
obj74314_SCActionDragDrop74317_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj74314: Event droppedInsideTargetActions_3
 *
 */
$("#obj74314").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj74314_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj74314_droppedInsideTargetActions_3 is still running");
	return;
}
var obj74314_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj74314_droppedInsideTargetActions_3_loopCount = 0;
obj74314_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj74314: Event droppedInsideTargetActions_2
 *
 */
$("#obj74314").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj74314_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj74314_droppedInsideTargetActions_2 is still running");
	return;
}
var obj74314_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj74314_droppedInsideTargetActions_2_loopCount = 0;
obj74314_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj74314: Event droppedInsideTargetActions
 *
 */
$("#obj74314").bind("droppedInsideTargetActions", function(event) {
	if (window.obj74314_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj74314_droppedInsideTargetActions is still running");
	return;
}
var obj74314_droppedInsideTargetActions_runningActionsCount = 0;
var obj74314_droppedInsideTargetActions_loopCount = 0;
obj74314_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj74275: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj74275");
	var winTarget = document.getElementById("obj74275");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj74275").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj74275_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj74275_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj74275_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj74275_onTouchDown is still running");
	return;
}
var obj74275_onTouchDown_runningActionsCount = 0;
var obj74275_onTouchDown_loopCount = 0;
obj74275_onTouchDown_actionGroup0();
});



/*
 *
 *   obj74275: Event SCActionDragDrop74278_droppedOutsideTargetActions
 *
 */
$("#obj74275").bind("SCActionDragDrop74278_droppedOutsideTargetActions", function(event) {
	if (window.obj74275_SCActionDragDrop74278_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj74275_SCActionDragDrop74278_droppedOutsideTargetActions is still running");
	return;
}
var obj74275_SCActionDragDrop74278_droppedOutsideTargetActions_runningActionsCount = 0;
var obj74275_SCActionDragDrop74278_droppedOutsideTargetActions_loopCount = 0;
obj74275_SCActionDragDrop74278_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj74275: Event droppedInsideTargetActions_3
 *
 */
$("#obj74275").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj74275_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj74275_droppedInsideTargetActions_3 is still running");
	return;
}
var obj74275_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj74275_droppedInsideTargetActions_3_loopCount = 0;
obj74275_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj74275: Event droppedInsideTargetActions_2
 *
 */
$("#obj74275").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj74275_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj74275_droppedInsideTargetActions_2 is still running");
	return;
}
var obj74275_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj74275_droppedInsideTargetActions_2_loopCount = 0;
obj74275_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj74275: Event droppedInsideTargetActions
 *
 */
$("#obj74275").bind("droppedInsideTargetActions", function(event) {
	if (window.obj74275_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj74275_droppedInsideTargetActions is still running");
	return;
}
var obj74275_droppedInsideTargetActions_runningActionsCount = 0;
var obj74275_droppedInsideTargetActions_loopCount = 0;
obj74275_droppedInsideTargetActions_actionGroup0();
});





/*
 *
 *   obj74257: Event Touch Down
 *
 */
$("#obj74257").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj74257_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj74257_onTap is still running");
	return;
}
var obj74257_onTap_runningActionsCount = 0;
var obj74257_onTap_loopCount = 0;
obj74257_onTap_actionGroup0();
});










/*
 *
 *   obj74249: Event Touch Down
 *
 */
$("#obj74249").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj74249_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj74249_onTap is still running");
	return;
}
var obj74249_onTap_runningActionsCount = 0;
var obj74249_onTap_loopCount = 0;
obj74249_onTap_actionGroup0();
});










/*
 *
 *   obj74877: Event Touch Down
 *
 */
$("#obj74877").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj74877_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj74877_onTap is still running");
	return;
}
var obj74877_onTap_runningActionsCount = 0;
var obj74877_onTap_loopCount = 0;
obj74877_onTap_actionGroup0();
});










/*
 *
 *   obj87483: Event Touch Down
 *
 */
$("#obj87483").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj87483_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj87483_onTap is still running");
	return;
}
var obj87483_onTap_runningActionsCount = 0;
var obj87483_onTap_loopCount = 0;
obj87483_onTap_actionGroup0();
});










/*
 *
 *   obj87478: Event Touch Down
 *
 */
$("#obj87478").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj87478_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj87478_onTap is still running");
	return;
}
var obj87478_onTap_runningActionsCount = 0;
var obj87478_onTap_loopCount = 0;
obj87478_onTap_actionGroup0();
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
	
$("#obj74434").trigger('SCEventShow');
$("#obj74431").trigger('SCEventShow');
$("#obj74428").trigger('SCEventShow');
$("#obj74424").trigger('SCEventShow');
$("#obj74422").trigger('SCEventShow');
$("#obj74420").trigger('SCEventShow');
$("#obj74418").trigger('SCEventShow');
$("#obj74416").trigger('SCEventShow');
$("#obj74414").trigger('SCEventShow');
$("#obj74412").trigger('SCEventShow');
$("#obj74410").trigger('SCEventShow');
$("#obj74408").trigger('SCEventShow');
$("#obj74406").trigger('SCEventShow');
$("#obj74404").trigger('SCEventShow');
$("#obj74402").trigger('SCEventShow');
$("#obj74400").trigger('SCEventShow');
$("#obj74398").trigger('SCEventShow');
$("#obj74396").trigger('SCEventShow');
$("#obj74394").trigger('SCEventShow');
$("#obj74393").trigger('SCEventShow');
$("#obj74392").trigger('SCEventShow');
$("#obj74353").trigger('SCEventShow');
$("#obj74314").trigger('SCEventShow');
$("#obj74275").trigger('SCEventShow');
$("#obj74257").trigger('SCEventShow');
$("#obj74249").trigger('SCEventShow');
$("#obj74877").trigger('SCEventShow');
$("#obj87483").trigger('SCEventShow');
$("#obj87478").trigger('SCEventShow');
$("#obj87488").trigger('SCEventShow');
$("#obj94755").trigger('SCEventShow');
$("#obj74247").trigger('SCEventShow');
	
});