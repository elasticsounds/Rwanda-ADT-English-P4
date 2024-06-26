pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 49337;
pubcoder.page.title = pubcoder.page.title || "178";
pubcoder.page.number = pubcoder.page.number || 178;
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
var obj86774_onTap_activeActionGroupIndex = -1;
var obj86774_onTap_runningActionsCount = 0;
var obj86774_onTap_loopCount = 0;
var obj86771_onTap_activeActionGroupIndex = -1;
var obj86771_onTap_runningActionsCount = 0;
var obj86771_onTap_loopCount = 0;
var obj86767_onTap_activeActionGroupIndex = -1;
var obj86767_onTap_runningActionsCount = 0;
var obj86767_onTap_loopCount = 0;
var obj86735_onDrag_activeActionGroupIndex = -1;
var obj86735_onDrag_runningActionsCount = 0;
var obj86735_onDrag_loopCount = 0;
var obj86735_onTouchDown_activeActionGroupIndex = -1;
var obj86735_onTouchDown_runningActionsCount = 0;
var obj86735_onTouchDown_loopCount = 0;
var obj86735_SCActionDragDrop86738_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj86735_SCActionDragDrop86738_droppedOutsideTargetActions_runningActionsCount = 0;
var obj86735_SCActionDragDrop86738_droppedOutsideTargetActions_loopCount = 0;
var obj86735_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj86735_droppedInsideTargetActions_runningActionsCount = 0;
var obj86735_droppedInsideTargetActions_loopCount = 0;
var obj86718_onDrag_activeActionGroupIndex = -1;
var obj86718_onDrag_runningActionsCount = 0;
var obj86718_onDrag_loopCount = 0;
var obj86718_onTouchDown_activeActionGroupIndex = -1;
var obj86718_onTouchDown_runningActionsCount = 0;
var obj86718_onTouchDown_loopCount = 0;
var obj86718_SCActionDragDrop86721_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj86718_SCActionDragDrop86721_droppedOutsideTargetActions_runningActionsCount = 0;
var obj86718_SCActionDragDrop86721_droppedOutsideTargetActions_loopCount = 0;
var obj86718_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj86718_droppedInsideTargetActions_runningActionsCount = 0;
var obj86718_droppedInsideTargetActions_loopCount = 0;
var obj86696_onTap_activeActionGroupIndex = -1;
var obj86696_onTap_runningActionsCount = 0;
var obj86696_onTap_loopCount = 0;
var obj86688_onTap_activeActionGroupIndex = -1;
var obj86688_onTap_runningActionsCount = 0;
var obj86688_onTap_loopCount = 0;
var obj86683_onTap_activeActionGroupIndex = -1;
var obj86683_onTap_runningActionsCount = 0;
var obj86683_onTap_loopCount = 0;
var obj89017_onTap_activeActionGroupIndex = -1;
var obj89017_onTap_runningActionsCount = 0;
var obj89017_onTap_loopCount = 0;
var obj89012_onTap_activeActionGroupIndex = -1;
var obj89012_onTap_runningActionsCount = 0;
var obj89012_onTap_loopCount = 0;
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
		
obj86774_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86774_onTap_activeActionGroupIndex = -1;
		$("#obj86774").trigger("obj86774_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86774) {
				console.warn("de-queueing event obj86774." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86774").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86774_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_86794();
function goToPage_86794() {
	window.obj86774_onTap_runningActionsCount = obj86774_onTap_runningActionsCount + 1;
	$("#anchor1051")[0].click();
	window.obj86774_onTap_runningActionsCount = window.obj86774_onTap_runningActionsCount - 1;
if (window.obj86774_onTap_runningActionsCount < 0) {
	window.obj86774_onTap_runningActionsCount = 0;
} else if (window.obj86774_onTap_runningActionsCount == 0) {
	obj86774_onTap_actionGroup1();
}
}





















};
obj86774_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj86774_onTap_activeActionGroupIndex = -1;
		$("#obj86774").trigger("obj86774_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86774) {
				console.warn("de-queueing event obj86774." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86774").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86774_onTap_activeActionGroupIndex = 1;
	





















};
obj86771_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86771_onTap_activeActionGroupIndex = -1;
		$("#obj86771").trigger("obj86771_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86771) {
				console.warn("de-queueing event obj86771." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86771").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86771_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_86773();
function goToPage_86773() {
	window.obj86771_onTap_runningActionsCount = obj86771_onTap_runningActionsCount + 1;
	$("#anchor1052")[0].click();
	window.obj86771_onTap_runningActionsCount = window.obj86771_onTap_runningActionsCount - 1;
if (window.obj86771_onTap_runningActionsCount < 0) {
	window.obj86771_onTap_runningActionsCount = 0;
} else if (window.obj86771_onTap_runningActionsCount == 0) {
	obj86771_onTap_actionGroup1();
}
}





















};
obj86771_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj86771_onTap_activeActionGroupIndex = -1;
		$("#obj86771").trigger("obj86771_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86771) {
				console.warn("de-queueing event obj86771." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86771").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86771_onTap_activeActionGroupIndex = 1;
	





















};
obj86767_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86767_onTap_activeActionGroupIndex = -1;
		$("#obj86767").trigger("obj86767_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86767) {
				console.warn("de-queueing event obj86767." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86767").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86767_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_86769();
function goToPage_86769() {
	window.obj86767_onTap_runningActionsCount = obj86767_onTap_runningActionsCount + 1;
	$("#anchor1053")[0].click();
	window.obj86767_onTap_runningActionsCount = window.obj86767_onTap_runningActionsCount - 1;
if (window.obj86767_onTap_runningActionsCount < 0) {
	window.obj86767_onTap_runningActionsCount = 0;
} else if (window.obj86767_onTap_runningActionsCount == 0) {
	obj86767_onTap_actionGroup1();
}
}





















};
obj86767_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj86767_onTap_activeActionGroupIndex = -1;
		$("#obj86767").trigger("obj86767_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86767) {
				console.warn("de-queueing event obj86767." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86767").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86767_onTap_activeActionGroupIndex = 1;
	





















};
obj86735_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86735_onTouchDown_activeActionGroupIndex = -1;
		$("#obj86735").trigger("obj86735_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86735) {
				console.warn("de-queueing event obj86735." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86735").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86735_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj86735");
//	action: dragDrop
//	target: obj86735 
dragDrop_86738();
function dragDrop_86738() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj86735_onTouchDown_runningActionsCount = obj86735_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj86735');
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
	  	containerNode = $('#obj86759');
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
    	window.obj86735_onTouchDown_runningActionsCount = window.obj86735_onTouchDown_runningActionsCount - 1;
if (window.obj86735_onTouchDown_runningActionsCount < 0) {
	window.obj86735_onTouchDown_runningActionsCount = 0;
} else if (window.obj86735_onTouchDown_runningActionsCount == 0) {
	obj86735_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj86755");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_86738 = false;
    	var dropped_id_86738;
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
					dropped_86738 = true;
					dropped_id_86738 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_86738) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj86735").trigger('SCActionDragDrop86738_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj86735_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj86735_onTouchDown_activeActionGroupIndex = -1;
		$("#obj86735").trigger("obj86735_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86735) {
				console.warn("de-queueing event obj86735." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86735").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86735_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj86735_SCActionDragDrop86738_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86735_SCActionDragDrop86738_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj86735").trigger("obj86735_SCActionDragDrop86738_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86735) {
				console.warn("de-queueing event obj86735." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86735").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86735_SCActionDragDrop86738_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj86735 
move_92753();
function move_92753() {
	window.obj86735_SCActionDragDrop86738_droppedOutsideTargetActions_runningActionsCount = obj86735_SCActionDragDrop86738_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj86735");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 114;
	var moveY = 552;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj86735_SCActionDragDrop86738_droppedOutsideTargetActions_runningActionsCount = window.obj86735_SCActionDragDrop86738_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj86735_SCActionDragDrop86738_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj86735_SCActionDragDrop86738_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj86735_SCActionDragDrop86738_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj86735_SCActionDragDrop86738_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj86735_SCActionDragDrop86738_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj86735_SCActionDragDrop86738_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj86735").trigger("obj86735_SCActionDragDrop86738_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86735) {
				console.warn("de-queueing event obj86735." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86735").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86735_SCActionDragDrop86738_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj86735_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86735_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj86735").trigger("obj86735_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86735) {
				console.warn("de-queueing event obj86735." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86735").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86735_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_86740();
function runjs_86740() {
	window.obj86735_droppedInsideTargetActions_runningActionsCount = obj86735_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj86755").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj86735_droppedInsideTargetActions_runningActionsCount = window.obj86735_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj86735_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj86735_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj86735_droppedInsideTargetActions_runningActionsCount == 0) {
	obj86735_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj86735_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86735_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj86735").trigger("obj86735_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86735) {
				console.warn("de-queueing event obj86735." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86735").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86735_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_86741();
function runjs_86741() {
	window.obj86735_droppedInsideTargetActions_runningActionsCount = obj86735_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj86755").css("border-color", "#C00000"); $("#obj86755").css("border-width", "2px"); $("#obj86755").css("border-style", "solid"); $("#obj86755").css("border-radius", "10px"); $("#obj86755").css("-webkit-border-radius", "10px"); $("#obj86755").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj86735_droppedInsideTargetActions_runningActionsCount = window.obj86735_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj86735_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj86735_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj86735_droppedInsideTargetActions_runningActionsCount == 0) {
	obj86735_droppedInsideTargetActions_actionGroup2();
}
	}, 1);
}







};
obj86735_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86735_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj86735").trigger("obj86735_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86735) {
				console.warn("de-queueing event obj86735." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86735").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86735_droppedInsideTargetActions_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj86753 
hide_86742();
function hide_86742() {
	var selector = "#obj86753";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj86735_droppedInsideTargetActions_runningActionsCount = obj86735_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj86735_droppedInsideTargetActions_runningActionsCount = window.obj86735_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj86735_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj86735_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj86735_droppedInsideTargetActions_runningActionsCount == 0) {
	obj86735_droppedInsideTargetActions_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_86742(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj86735_droppedInsideTargetActions_runningActionsCount = window.obj86735_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj86735_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj86735_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj86735_droppedInsideTargetActions_runningActionsCount == 0) {
	obj86735_droppedInsideTargetActions_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj86735_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86735_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj86735").trigger("obj86735_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86735) {
				console.warn("de-queueing event obj86735." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86735").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86735_droppedInsideTargetActions_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_86743();
function runjs_86743() {
	window.obj86735_droppedInsideTargetActions_runningActionsCount = obj86735_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj86735").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj86735_droppedInsideTargetActions_runningActionsCount = window.obj86735_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj86735_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj86735_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj86735_droppedInsideTargetActions_runningActionsCount == 0) {
	obj86735_droppedInsideTargetActions_actionGroup4();
}
	}, 1);
}







};
obj86735_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86735_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj86735").trigger("obj86735_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86735) {
				console.warn("de-queueing event obj86735." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86735").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86735_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_86744();
function switchText_86744() {
	window.obj86735_droppedInsideTargetActions_runningActionsCount = obj86735_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj86729_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj86729_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj86729").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj86729_content");
			setTimeout(function () {
				window.obj86735_droppedInsideTargetActions_runningActionsCount = window.obj86735_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj86735_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj86735_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj86735_droppedInsideTargetActions_runningActionsCount == 0) {
	obj86735_droppedInsideTargetActions_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj86729 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj86735_droppedInsideTargetActions_runningActionsCount = window.obj86735_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj86735_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj86735_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj86735_droppedInsideTargetActions_runningActionsCount == 0) {
	obj86735_droppedInsideTargetActions_actionGroup5();
}
		}, 1);
	}
}






};
obj86735_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86735_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj86735").trigger("obj86735_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86735) {
				console.warn("de-queueing event obj86735." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86735").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86735_droppedInsideTargetActions_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj86735 
move_86745();
function move_86745() {
	window.obj86735_droppedInsideTargetActions_runningActionsCount = obj86735_droppedInsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj86735");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 114;
	var moveY = 552;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj86735_droppedInsideTargetActions_runningActionsCount = window.obj86735_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj86735_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj86735_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj86735_droppedInsideTargetActions_runningActionsCount == 0) {
	obj86735_droppedInsideTargetActions_actionGroup6();
}
		}, 1);
	});
}



















};
obj86735_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86735_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj86735").trigger("obj86735_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86735) {
				console.warn("de-queueing event obj86735." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86735").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86735_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_86746();
function runjs_86746() {
	window.obj86735_droppedInsideTargetActions_runningActionsCount = obj86735_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj86755").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj86735_droppedInsideTargetActions_runningActionsCount = window.obj86735_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj86735_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj86735_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj86735_droppedInsideTargetActions_runningActionsCount == 0) {
	obj86735_droppedInsideTargetActions_actionGroup7();
}
	}, 1);
}







};
obj86735_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86735_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj86735").trigger("obj86735_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86735) {
				console.warn("de-queueing event obj86735." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86735").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86735_droppedInsideTargetActions_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_86747();
function runjs_86747() {
	window.obj86735_droppedInsideTargetActions_runningActionsCount = obj86735_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj86755").css("border-color", "#000000"); $("#obj86755").css("border-width", "1px"); $("#obj86755").css("border-style", "solid"); $("#obj86755").css("border-radius", "10px"); $("#obj86755").css("-webkit-border-radius", "10px"); $("#obj86755").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj86735_droppedInsideTargetActions_runningActionsCount = window.obj86735_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj86735_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj86735_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj86735_droppedInsideTargetActions_runningActionsCount == 0) {
	obj86735_droppedInsideTargetActions_actionGroup8();
}
	}, 1);
}







};
obj86735_droppedInsideTargetActions_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86735_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj86735").trigger("obj86735_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86735) {
				console.warn("de-queueing event obj86735." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86735").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86735_droppedInsideTargetActions_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj86753
(function(){
	window.obj86735_droppedInsideTargetActions_runningActionsCount = obj86735_droppedInsideTargetActions_runningActionsCount + 1;

	var selector = "#obj86753";
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
					window.obj86735_droppedInsideTargetActions_runningActionsCount = window.obj86735_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj86735_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj86735_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj86735_droppedInsideTargetActions_runningActionsCount == 0) {
	obj86735_droppedInsideTargetActions_actionGroup9();
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
				window.obj86735_droppedInsideTargetActions_runningActionsCount = window.obj86735_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj86735_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj86735_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj86735_droppedInsideTargetActions_runningActionsCount == 0) {
	obj86735_droppedInsideTargetActions_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj86735_droppedInsideTargetActions_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86735_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj86735").trigger("obj86735_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86735) {
				console.warn("de-queueing event obj86735." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86735").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86735_droppedInsideTargetActions_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_86749();
function runjs_86749() {
	window.obj86735_droppedInsideTargetActions_runningActionsCount = obj86735_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj86735").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj86735_droppedInsideTargetActions_runningActionsCount = window.obj86735_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj86735_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj86735_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj86735_droppedInsideTargetActions_runningActionsCount == 0) {
	obj86735_droppedInsideTargetActions_actionGroup10();
}
	}, 1);
}







};
obj86735_droppedInsideTargetActions_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86735_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj86735").trigger("obj86735_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86735) {
				console.warn("de-queueing event obj86735." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86735").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86735_droppedInsideTargetActions_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_86750();
function runjs_86750() {
	window.obj86735_droppedInsideTargetActions_runningActionsCount = obj86735_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj86735").css("border-color", "rgba(0,0,0,0)"); $("#obj86735").css("border-width", "0px"); $("#obj86735").css("border-style", "solid"); $("#obj86735").css("border-radius", "10px"); $("#obj86735").css("-webkit-border-radius", "10px"); $("#obj86735").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj86735_droppedInsideTargetActions_runningActionsCount = window.obj86735_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj86735_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj86735_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj86735_droppedInsideTargetActions_runningActionsCount == 0) {
	obj86735_droppedInsideTargetActions_actionGroup11();
}
	}, 1);
}







};
obj86735_droppedInsideTargetActions_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86735_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj86735").trigger("obj86735_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86735) {
				console.warn("de-queueing event obj86735." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86735").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86735_droppedInsideTargetActions_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj86714 
playAudio_86751();
function playAudio_86751() {
	window.obj86735_droppedInsideTargetActions_runningActionsCount = obj86735_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj86714")[0];
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
		    window.obj86735_droppedInsideTargetActions_runningActionsCount = window.obj86735_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj86735_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj86735_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj86735_droppedInsideTargetActions_runningActionsCount == 0) {
	obj86735_droppedInsideTargetActions_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj86735_droppedInsideTargetActions_runningActionsCount = window.obj86735_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj86735_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj86735_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj86735_droppedInsideTargetActions_runningActionsCount == 0) {
	obj86735_droppedInsideTargetActions_actionGroup12();
}
	}
}









};
obj86735_droppedInsideTargetActions_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86735_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj86735").trigger("obj86735_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86735) {
				console.warn("de-queueing event obj86735." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86735").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86735_droppedInsideTargetActions_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_86752();
function switchText_86752() {
	window.obj86735_droppedInsideTargetActions_runningActionsCount = obj86735_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj86729_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj86729_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj86729").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj86729_content");
			setTimeout(function () {
				window.obj86735_droppedInsideTargetActions_runningActionsCount = window.obj86735_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj86735_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj86735_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj86735_droppedInsideTargetActions_runningActionsCount == 0) {
	obj86735_droppedInsideTargetActions_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj86729 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj86735_droppedInsideTargetActions_runningActionsCount = window.obj86735_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj86735_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj86735_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj86735_droppedInsideTargetActions_runningActionsCount == 0) {
	obj86735_droppedInsideTargetActions_actionGroup13();
}
		}, 1);
	}
}






};
obj86735_droppedInsideTargetActions_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj86735_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj86735").trigger("obj86735_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86735) {
				console.warn("de-queueing event obj86735." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86735").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86735_droppedInsideTargetActions_activeActionGroupIndex = 13;
	





















};
obj86718_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86718_onTouchDown_activeActionGroupIndex = -1;
		$("#obj86718").trigger("obj86718_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86718) {
				console.warn("de-queueing event obj86718." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86718").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86718_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj86718");
//	action: dragDrop
//	target: obj86718 
dragDrop_86721();
function dragDrop_86721() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj86718_onTouchDown_runningActionsCount = obj86718_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj86718');
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
	  	containerNode = $('#obj86759');
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
    	window.obj86718_onTouchDown_runningActionsCount = window.obj86718_onTouchDown_runningActionsCount - 1;
if (window.obj86718_onTouchDown_runningActionsCount < 0) {
	window.obj86718_onTouchDown_runningActionsCount = 0;
} else if (window.obj86718_onTouchDown_runningActionsCount == 0) {
	obj86718_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj86755");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_86721 = false;
    	var dropped_id_86721;
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
					dropped_86721 = true;
					dropped_id_86721 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_86721) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj86718").trigger('SCActionDragDrop86721_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj86718_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj86718_onTouchDown_activeActionGroupIndex = -1;
		$("#obj86718").trigger("obj86718_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86718) {
				console.warn("de-queueing event obj86718." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86718").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86718_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj86718_SCActionDragDrop86721_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86718_SCActionDragDrop86721_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj86718").trigger("obj86718_SCActionDragDrop86721_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86718) {
				console.warn("de-queueing event obj86718." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86718").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86718_SCActionDragDrop86721_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj86718 
move_92755();
function move_92755() {
	window.obj86718_SCActionDragDrop86721_droppedOutsideTargetActions_runningActionsCount = obj86718_SCActionDragDrop86721_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj86718");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 318;
	var moveY = 553;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj86718_SCActionDragDrop86721_droppedOutsideTargetActions_runningActionsCount = window.obj86718_SCActionDragDrop86721_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj86718_SCActionDragDrop86721_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj86718_SCActionDragDrop86721_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj86718_SCActionDragDrop86721_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj86718_SCActionDragDrop86721_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj86718_SCActionDragDrop86721_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj86718_SCActionDragDrop86721_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj86718").trigger("obj86718_SCActionDragDrop86721_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86718) {
				console.warn("de-queueing event obj86718." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86718").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86718_SCActionDragDrop86721_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj86718_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86718_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj86718").trigger("obj86718_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86718) {
				console.warn("de-queueing event obj86718." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86718").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86718_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_86723();
function runjs_86723() {
	window.obj86718_droppedInsideTargetActions_runningActionsCount = obj86718_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj86755").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj86718_droppedInsideTargetActions_runningActionsCount = window.obj86718_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj86718_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj86718_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj86718_droppedInsideTargetActions_runningActionsCount == 0) {
	obj86718_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj86718_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86718_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj86718").trigger("obj86718_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86718) {
				console.warn("de-queueing event obj86718." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86718").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86718_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_86724();
function runjs_86724() {
	window.obj86718_droppedInsideTargetActions_runningActionsCount = obj86718_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj86755").css("border-color", "#058E3F"); $("#obj86755").css("border-width", "2px"); $("#obj86755").css("border-style", "solid"); $("#obj86755").css("border-radius", "10px"); $("#obj86755").css("-webkit-border-radius", "10px"); $("#obj86755").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj86718_droppedInsideTargetActions_runningActionsCount = window.obj86718_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj86718_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj86718_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj86718_droppedInsideTargetActions_runningActionsCount == 0) {
	obj86718_droppedInsideTargetActions_actionGroup2();
}
	}, 1);
}







};
obj86718_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86718_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj86718").trigger("obj86718_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86718) {
				console.warn("de-queueing event obj86718." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86718").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86718_droppedInsideTargetActions_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj86753 
hide_86725();
function hide_86725() {
	var selector = "#obj86753";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj86718_droppedInsideTargetActions_runningActionsCount = obj86718_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj86718_droppedInsideTargetActions_runningActionsCount = window.obj86718_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj86718_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj86718_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj86718_droppedInsideTargetActions_runningActionsCount == 0) {
	obj86718_droppedInsideTargetActions_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_86725(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj86718_droppedInsideTargetActions_runningActionsCount = window.obj86718_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj86718_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj86718_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj86718_droppedInsideTargetActions_runningActionsCount == 0) {
	obj86718_droppedInsideTargetActions_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj86718_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86718_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj86718").trigger("obj86718_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86718) {
				console.warn("de-queueing event obj86718." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86718").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86718_droppedInsideTargetActions_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_86726();
function runjs_86726() {
	window.obj86718_droppedInsideTargetActions_runningActionsCount = obj86718_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj86718").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj86718_droppedInsideTargetActions_runningActionsCount = window.obj86718_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj86718_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj86718_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj86718_droppedInsideTargetActions_runningActionsCount == 0) {
	obj86718_droppedInsideTargetActions_actionGroup4();
}
	}, 1);
}







};
obj86718_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86718_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj86718").trigger("obj86718_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86718) {
				console.warn("de-queueing event obj86718." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86718").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86718_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_86727();
function switchText_86727() {
	window.obj86718_droppedInsideTargetActions_runningActionsCount = obj86718_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj86729_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj86729_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj86729").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj86729_content");
			setTimeout(function () {
				window.obj86718_droppedInsideTargetActions_runningActionsCount = window.obj86718_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj86718_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj86718_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj86718_droppedInsideTargetActions_runningActionsCount == 0) {
	obj86718_droppedInsideTargetActions_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj86729 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj86718_droppedInsideTargetActions_runningActionsCount = window.obj86718_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj86718_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj86718_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj86718_droppedInsideTargetActions_runningActionsCount == 0) {
	obj86718_droppedInsideTargetActions_actionGroup5();
}
		}, 1);
	}
}






};
obj86718_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86718_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj86718").trigger("obj86718_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86718) {
				console.warn("de-queueing event obj86718." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86718").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86718_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj86733 
playAudio_86728();
function playAudio_86728() {
	window.obj86718_droppedInsideTargetActions_runningActionsCount = obj86718_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj86733")[0];
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
		    window.obj86718_droppedInsideTargetActions_runningActionsCount = window.obj86718_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj86718_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj86718_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj86718_droppedInsideTargetActions_runningActionsCount == 0) {
	obj86718_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj86718_droppedInsideTargetActions_runningActionsCount = window.obj86718_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj86718_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj86718_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj86718_droppedInsideTargetActions_runningActionsCount == 0) {
	obj86718_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj86718_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj86718_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj86718").trigger("obj86718_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86718) {
				console.warn("de-queueing event obj86718." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86718").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86718_droppedInsideTargetActions_activeActionGroupIndex = 6;
	





















};
obj86696_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86696_onTap_activeActionGroupIndex = -1;
		$("#obj86696").trigger("obj86696_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86696) {
				console.warn("de-queueing event obj86696." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86696").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86696_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj86696 
hide_86699();
function hide_86699() {
	var selector = "#obj86696";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj86696_onTap_runningActionsCount = obj86696_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj86696_onTap_runningActionsCount = window.obj86696_onTap_runningActionsCount - 1;
if (window.obj86696_onTap_runningActionsCount < 0) {
	window.obj86696_onTap_runningActionsCount = 0;
} else if (window.obj86696_onTap_runningActionsCount == 0) {
	obj86696_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_86699(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj86696_onTap_runningActionsCount = window.obj86696_onTap_runningActionsCount - 1;
if (window.obj86696_onTap_runningActionsCount < 0) {
	window.obj86696_onTap_runningActionsCount = 0;
} else if (window.obj86696_onTap_runningActionsCount == 0) {
	obj86696_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj86686 
stopMovie_86698();
function stopMovie_86698() {
	window.obj86696_onTap_runningActionsCount = obj86696_onTap_runningActionsCount + 1;
	var myVideo = $("#obj86686")[0];
	myVideo.pause();
	window.obj86696_onTap_runningActionsCount = window.obj86696_onTap_runningActionsCount - 1;
if (window.obj86696_onTap_runningActionsCount < 0) {
	window.obj86696_onTap_runningActionsCount = 0;
} else if (window.obj86696_onTap_runningActionsCount == 0) {
	obj86696_onTap_actionGroup1();
}
}
















};
obj86696_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86696_onTap_activeActionGroupIndex = -1;
		$("#obj86696").trigger("obj86696_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86696) {
				console.warn("de-queueing event obj86696." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86696").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86696_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj86688
(function(){
	window.obj86696_onTap_runningActionsCount = obj86696_onTap_runningActionsCount + 1;

	var selector = "#obj86688";
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
					window.obj86696_onTap_runningActionsCount = window.obj86696_onTap_runningActionsCount - 1;
if (window.obj86696_onTap_runningActionsCount < 0) {
	window.obj86696_onTap_runningActionsCount = 0;
} else if (window.obj86696_onTap_runningActionsCount == 0) {
	obj86696_onTap_actionGroup2();
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
				window.obj86696_onTap_runningActionsCount = window.obj86696_onTap_runningActionsCount - 1;
if (window.obj86696_onTap_runningActionsCount < 0) {
	window.obj86696_onTap_runningActionsCount = 0;
} else if (window.obj86696_onTap_runningActionsCount == 0) {
	obj86696_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj86696_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86696_onTap_activeActionGroupIndex = -1;
		$("#obj86696").trigger("obj86696_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86696) {
				console.warn("de-queueing event obj86696." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86696").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86696_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj86686 
move_86701();
function move_86701() {
	window.obj86696_onTap_runningActionsCount = obj86696_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj86686");
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
			window.obj86696_onTap_runningActionsCount = window.obj86696_onTap_runningActionsCount - 1;
if (window.obj86696_onTap_runningActionsCount < 0) {
	window.obj86696_onTap_runningActionsCount = 0;
} else if (window.obj86696_onTap_runningActionsCount == 0) {
	obj86696_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj86696_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj86696_onTap_activeActionGroupIndex = -1;
		$("#obj86696").trigger("obj86696_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86696) {
				console.warn("de-queueing event obj86696." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86696").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86696_onTap_activeActionGroupIndex = 3;
	





















};
obj86688_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86688_onTap_activeActionGroupIndex = -1;
		$("#obj86688").trigger("obj86688_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86688) {
				console.warn("de-queueing event obj86688." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86688").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86688_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj86688 
hide_86691();
function hide_86691() {
	var selector = "#obj86688";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj86688_onTap_runningActionsCount = obj86688_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj86688_onTap_runningActionsCount = window.obj86688_onTap_runningActionsCount - 1;
if (window.obj86688_onTap_runningActionsCount < 0) {
	window.obj86688_onTap_runningActionsCount = 0;
} else if (window.obj86688_onTap_runningActionsCount == 0) {
	obj86688_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_86691(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj86688_onTap_runningActionsCount = window.obj86688_onTap_runningActionsCount - 1;
if (window.obj86688_onTap_runningActionsCount < 0) {
	window.obj86688_onTap_runningActionsCount = 0;
} else if (window.obj86688_onTap_runningActionsCount == 0) {
	obj86688_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj86686 
playPauseMovie_86690();
function playPauseMovie_86690() {
	window.obj86688_onTap_runningActionsCount = obj86688_onTap_runningActionsCount + 1;
	var myVideo = $("#obj86686")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj86688_onTap_runningActionsCount = window.obj86688_onTap_runningActionsCount - 1;
if (window.obj86688_onTap_runningActionsCount < 0) {
	window.obj86688_onTap_runningActionsCount = 0;
} else if (window.obj86688_onTap_runningActionsCount == 0) {
	obj86688_onTap_actionGroup1();
}
}

















};
obj86688_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86688_onTap_activeActionGroupIndex = -1;
		$("#obj86688").trigger("obj86688_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86688) {
				console.warn("de-queueing event obj86688." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86688").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86688_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj86696
(function(){
	window.obj86688_onTap_runningActionsCount = obj86688_onTap_runningActionsCount + 1;

	var selector = "#obj86696";
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
					window.obj86688_onTap_runningActionsCount = window.obj86688_onTap_runningActionsCount - 1;
if (window.obj86688_onTap_runningActionsCount < 0) {
	window.obj86688_onTap_runningActionsCount = 0;
} else if (window.obj86688_onTap_runningActionsCount == 0) {
	obj86688_onTap_actionGroup2();
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
				window.obj86688_onTap_runningActionsCount = window.obj86688_onTap_runningActionsCount - 1;
if (window.obj86688_onTap_runningActionsCount < 0) {
	window.obj86688_onTap_runningActionsCount = 0;
} else if (window.obj86688_onTap_runningActionsCount == 0) {
	obj86688_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj86688_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86688_onTap_activeActionGroupIndex = -1;
		$("#obj86688").trigger("obj86688_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86688) {
				console.warn("de-queueing event obj86688." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86688").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86688_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj86686 
move_86693();
function move_86693() {
	window.obj86688_onTap_runningActionsCount = obj86688_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj86686");
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
			window.obj86688_onTap_runningActionsCount = window.obj86688_onTap_runningActionsCount - 1;
if (window.obj86688_onTap_runningActionsCount < 0) {
	window.obj86688_onTap_runningActionsCount = 0;
} else if (window.obj86688_onTap_runningActionsCount == 0) {
	obj86688_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj86688_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj86688_onTap_activeActionGroupIndex = -1;
		$("#obj86688").trigger("obj86688_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86688) {
				console.warn("de-queueing event obj86688." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86688").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86688_onTap_activeActionGroupIndex = 3;
	





















};
obj86683_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86683_onTap_activeActionGroupIndex = -1;
		$("#obj86683").trigger("obj86683_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86683) {
				console.warn("de-queueing event obj86683." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86683").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86683_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_86685();
function goToPage_86685() {
	window.obj86683_onTap_runningActionsCount = obj86683_onTap_runningActionsCount + 1;
	$("#anchor1056")[0].click();
	window.obj86683_onTap_runningActionsCount = window.obj86683_onTap_runningActionsCount - 1;
if (window.obj86683_onTap_runningActionsCount < 0) {
	window.obj86683_onTap_runningActionsCount = 0;
} else if (window.obj86683_onTap_runningActionsCount == 0) {
	obj86683_onTap_actionGroup1();
}
}





















};
obj86683_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj86683_onTap_activeActionGroupIndex = -1;
		$("#obj86683").trigger("obj86683_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86683) {
				console.warn("de-queueing event obj86683." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86683").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86683_onTap_activeActionGroupIndex = 1;
	





















};
obj89017_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89017_onTap_activeActionGroupIndex = -1;
		$("#obj89017").trigger("obj89017_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89017) {
				console.warn("de-queueing event obj89017." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89017").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89017_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj89022 
stopAudio_89019();
function stopAudio_89019() {
	window.obj89017_onTap_runningActionsCount = obj89017_onTap_runningActionsCount + 1;
	var myAudio = $("#obj89022")[0];
	myAudio.pause();
	window.obj89017_onTap_runningActionsCount = window.obj89017_onTap_runningActionsCount - 1;
if (window.obj89017_onTap_runningActionsCount < 0) {
	window.obj89017_onTap_runningActionsCount = 0;
} else if (window.obj89017_onTap_runningActionsCount == 0) {
	obj89017_onTap_actionGroup1();
}
}








};
obj89017_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89017_onTap_activeActionGroupIndex = -1;
		$("#obj89017").trigger("obj89017_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89017) {
				console.warn("de-queueing event obj89017." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89017").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89017_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj89017 
hide_89020();
function hide_89020() {
	var selector = "#obj89017";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj89017_onTap_runningActionsCount = obj89017_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj89017_onTap_runningActionsCount = window.obj89017_onTap_runningActionsCount - 1;
if (window.obj89017_onTap_runningActionsCount < 0) {
	window.obj89017_onTap_runningActionsCount = 0;
} else if (window.obj89017_onTap_runningActionsCount == 0) {
	obj89017_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_89020(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj89017_onTap_runningActionsCount = window.obj89017_onTap_runningActionsCount - 1;
if (window.obj89017_onTap_runningActionsCount < 0) {
	window.obj89017_onTap_runningActionsCount = 0;
} else if (window.obj89017_onTap_runningActionsCount == 0) {
	obj89017_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj89017_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89017_onTap_activeActionGroupIndex = -1;
		$("#obj89017").trigger("obj89017_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89017) {
				console.warn("de-queueing event obj89017." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89017").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89017_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj89012
(function(){
	window.obj89017_onTap_runningActionsCount = obj89017_onTap_runningActionsCount + 1;

	var selector = "#obj89012";
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
					window.obj89017_onTap_runningActionsCount = window.obj89017_onTap_runningActionsCount - 1;
if (window.obj89017_onTap_runningActionsCount < 0) {
	window.obj89017_onTap_runningActionsCount = 0;
} else if (window.obj89017_onTap_runningActionsCount == 0) {
	obj89017_onTap_actionGroup3();
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
				window.obj89017_onTap_runningActionsCount = window.obj89017_onTap_runningActionsCount - 1;
if (window.obj89017_onTap_runningActionsCount < 0) {
	window.obj89017_onTap_runningActionsCount = 0;
} else if (window.obj89017_onTap_runningActionsCount == 0) {
	obj89017_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj89017_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj89017_onTap_activeActionGroupIndex = -1;
		$("#obj89017").trigger("obj89017_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89017) {
				console.warn("de-queueing event obj89017." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89017").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89017_onTap_activeActionGroupIndex = 3;
	





















};
obj89012_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89012_onTap_activeActionGroupIndex = -1;
		$("#obj89012").trigger("obj89012_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89012) {
				console.warn("de-queueing event obj89012." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89012").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89012_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj89012 
hide_89014();
function hide_89014() {
	var selector = "#obj89012";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj89012_onTap_runningActionsCount = obj89012_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj89012_onTap_runningActionsCount = window.obj89012_onTap_runningActionsCount - 1;
if (window.obj89012_onTap_runningActionsCount < 0) {
	window.obj89012_onTap_runningActionsCount = 0;
} else if (window.obj89012_onTap_runningActionsCount == 0) {
	obj89012_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_89014(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj89012_onTap_runningActionsCount = window.obj89012_onTap_runningActionsCount - 1;
if (window.obj89012_onTap_runningActionsCount < 0) {
	window.obj89012_onTap_runningActionsCount = 0;
} else if (window.obj89012_onTap_runningActionsCount == 0) {
	obj89012_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj89012_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89012_onTap_activeActionGroupIndex = -1;
		$("#obj89012").trigger("obj89012_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89012) {
				console.warn("de-queueing event obj89012." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89012").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89012_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj89017
(function(){
	window.obj89012_onTap_runningActionsCount = obj89012_onTap_runningActionsCount + 1;

	var selector = "#obj89017";
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
					window.obj89012_onTap_runningActionsCount = window.obj89012_onTap_runningActionsCount - 1;
if (window.obj89012_onTap_runningActionsCount < 0) {
	window.obj89012_onTap_runningActionsCount = 0;
} else if (window.obj89012_onTap_runningActionsCount == 0) {
	obj89012_onTap_actionGroup2();
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
				window.obj89012_onTap_runningActionsCount = window.obj89012_onTap_runningActionsCount - 1;
if (window.obj89012_onTap_runningActionsCount < 0) {
	window.obj89012_onTap_runningActionsCount = 0;
} else if (window.obj89012_onTap_runningActionsCount == 0) {
	obj89012_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj89012_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89012_onTap_activeActionGroupIndex = -1;
		$("#obj89012").trigger("obj89012_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89012) {
				console.warn("de-queueing event obj89012." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89012").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89012_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj89022 
playAudio_89016();
function playAudio_89016() {
	window.obj89012_onTap_runningActionsCount = obj89012_onTap_runningActionsCount + 1;
	var myAudio = $("#obj89022")[0];
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
		    window.obj89012_onTap_runningActionsCount = window.obj89012_onTap_runningActionsCount - 1;
if (window.obj89012_onTap_runningActionsCount < 0) {
	window.obj89012_onTap_runningActionsCount = 0;
} else if (window.obj89012_onTap_runningActionsCount == 0) {
	obj89012_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj89012_onTap_runningActionsCount = window.obj89012_onTap_runningActionsCount - 1;
if (window.obj89012_onTap_runningActionsCount < 0) {
	window.obj89012_onTap_runningActionsCount = 0;
} else if (window.obj89012_onTap_runningActionsCount == 0) {
	obj89012_onTap_actionGroup3();
}
	}
}









};
obj89012_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj89012_onTap_activeActionGroupIndex = -1;
		$("#obj89012").trigger("obj89012_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89012) {
				console.warn("de-queueing event obj89012." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89012").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89012_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj86774: Event Touch Down
 *
 */
$("#obj86774").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj86774_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj86774_onTap is still running");
	return;
}
var obj86774_onTap_runningActionsCount = 0;
var obj86774_onTap_loopCount = 0;
obj86774_onTap_actionGroup0();
});










/*
 *
 *   obj86771: Event Touch Down
 *
 */
$("#obj86771").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj86771_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj86771_onTap is still running");
	return;
}
var obj86771_onTap_runningActionsCount = 0;
var obj86771_onTap_loopCount = 0;
obj86771_onTap_actionGroup0();
});










/*
 *
 *   obj86767: Event Touch Down
 *
 */
$("#obj86767").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj86767_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj86767_onTap is still running");
	return;
}
var obj86767_onTap_runningActionsCount = 0;
var obj86767_onTap_loopCount = 0;
obj86767_onTap_actionGroup0();
});

















































































/*
 *
 *   obj86735: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj86735");
	var winTarget = document.getElementById("obj86735");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj86735").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj86735_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj86735_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj86735_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj86735_onTouchDown is still running");
	return;
}
var obj86735_onTouchDown_runningActionsCount = 0;
var obj86735_onTouchDown_loopCount = 0;
obj86735_onTouchDown_actionGroup0();
});



/*
 *
 *   obj86735: Event SCActionDragDrop86738_droppedOutsideTargetActions
 *
 */
$("#obj86735").bind("SCActionDragDrop86738_droppedOutsideTargetActions", function(event) {
	if (window.obj86735_SCActionDragDrop86738_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj86735_SCActionDragDrop86738_droppedOutsideTargetActions is still running");
	return;
}
var obj86735_SCActionDragDrop86738_droppedOutsideTargetActions_runningActionsCount = 0;
var obj86735_SCActionDragDrop86738_droppedOutsideTargetActions_loopCount = 0;
obj86735_SCActionDragDrop86738_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj86735: Event droppedInsideTargetActions
 *
 */
$("#obj86735").bind("droppedInsideTargetActions", function(event) {
	if (window.obj86735_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj86735_droppedInsideTargetActions is still running");
	return;
}
var obj86735_droppedInsideTargetActions_runningActionsCount = 0;
var obj86735_droppedInsideTargetActions_loopCount = 0;
obj86735_droppedInsideTargetActions_actionGroup0();
});




































/*
 *
 *   obj86718: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj86718");
	var winTarget = document.getElementById("obj86718");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj86718").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj86718_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj86718_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj86718_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj86718_onTouchDown is still running");
	return;
}
var obj86718_onTouchDown_runningActionsCount = 0;
var obj86718_onTouchDown_loopCount = 0;
obj86718_onTouchDown_actionGroup0();
});



/*
 *
 *   obj86718: Event SCActionDragDrop86721_droppedOutsideTargetActions
 *
 */
$("#obj86718").bind("SCActionDragDrop86721_droppedOutsideTargetActions", function(event) {
	if (window.obj86718_SCActionDragDrop86721_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj86718_SCActionDragDrop86721_droppedOutsideTargetActions is still running");
	return;
}
var obj86718_SCActionDragDrop86721_droppedOutsideTargetActions_runningActionsCount = 0;
var obj86718_SCActionDragDrop86721_droppedOutsideTargetActions_loopCount = 0;
obj86718_SCActionDragDrop86721_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj86718: Event droppedInsideTargetActions
 *
 */
$("#obj86718").bind("droppedInsideTargetActions", function(event) {
	if (window.obj86718_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj86718_droppedInsideTargetActions is still running");
	return;
}
var obj86718_droppedInsideTargetActions_runningActionsCount = 0;
var obj86718_droppedInsideTargetActions_loopCount = 0;
obj86718_droppedInsideTargetActions_actionGroup0();
});

























/*
 *
 *   obj86696: Event Touch Down
 *
 */
$("#obj86696").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj86696_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj86696_onTap is still running");
	return;
}
var obj86696_onTap_runningActionsCount = 0;
var obj86696_onTap_loopCount = 0;
obj86696_onTap_actionGroup0();
});










/*
 *
 *   obj86688: Event Touch Down
 *
 */
$("#obj86688").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj86688_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj86688_onTap is still running");
	return;
}
var obj86688_onTap_runningActionsCount = 0;
var obj86688_onTap_loopCount = 0;
obj86688_onTap_actionGroup0();
});










/*
 *
 *   obj86683: Event Touch Down
 *
 */
$("#obj86683").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj86683_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj86683_onTap is still running");
	return;
}
var obj86683_onTap_runningActionsCount = 0;
var obj86683_onTap_loopCount = 0;
obj86683_onTap_actionGroup0();
});










/*
 *
 *   obj89017: Event Touch Down
 *
 */
$("#obj89017").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj89017_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj89017_onTap is still running");
	return;
}
var obj89017_onTap_runningActionsCount = 0;
var obj89017_onTap_loopCount = 0;
obj89017_onTap_actionGroup0();
});










/*
 *
 *   obj89012: Event Touch Down
 *
 */
$("#obj89012").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj89012_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj89012_onTap is still running");
	return;
}
var obj89012_onTap_runningActionsCount = 0;
var obj89012_onTap_loopCount = 0;
obj89012_onTap_actionGroup0();
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
	
$("#obj86777").trigger('SCEventShow');
$("#obj86774").trigger('SCEventShow');
$("#obj86771").trigger('SCEventShow');
$("#obj86767").trigger('SCEventShow');
$("#obj86765").trigger('SCEventShow');
$("#obj86763").trigger('SCEventShow');
$("#obj86761").trigger('SCEventShow');
$("#obj86759").trigger('SCEventShow');
$("#obj86757").trigger('SCEventShow');
$("#obj86755").trigger('SCEventShow');
$("#obj86753").trigger('SCEventShow');
$("#obj86735").trigger('SCEventShow');
$("#obj86733").trigger('SCEventShow');
$("#obj86731").trigger('SCEventShow');
$("#obj86729").trigger('SCEventShow');
$("#obj86718").trigger('SCEventShow');
$("#obj86716").trigger('SCEventShow');
$("#obj86714").trigger('SCEventShow');
$("#obj86696").trigger('SCEventShow');
$("#obj86688").trigger('SCEventShow');
$("#obj86683").trigger('SCEventShow');
$("#obj89017").trigger('SCEventShow');
$("#obj89012").trigger('SCEventShow');
$("#obj89022").trigger('SCEventShow');
$("#obj94985").trigger('SCEventShow');
$("#obj86686").trigger('SCEventShow');
	
});