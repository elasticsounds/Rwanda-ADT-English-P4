pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 31678;
pubcoder.page.title = pubcoder.page.title || "111";
pubcoder.page.number = pubcoder.page.number || 111;
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
var obj84856_onTap_activeActionGroupIndex = -1;
var obj84856_onTap_runningActionsCount = 0;
var obj84856_onTap_loopCount = 0;
var obj84853_onTap_activeActionGroupIndex = -1;
var obj84853_onTap_runningActionsCount = 0;
var obj84853_onTap_loopCount = 0;
var obj84849_onTap_activeActionGroupIndex = -1;
var obj84849_onTap_runningActionsCount = 0;
var obj84849_onTap_loopCount = 0;
var obj84817_onDrag_activeActionGroupIndex = -1;
var obj84817_onDrag_runningActionsCount = 0;
var obj84817_onDrag_loopCount = 0;
var obj84817_onTouchDown_activeActionGroupIndex = -1;
var obj84817_onTouchDown_runningActionsCount = 0;
var obj84817_onTouchDown_loopCount = 0;
var obj84817_SCActionDragDrop84820_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj84817_SCActionDragDrop84820_droppedOutsideTargetActions_runningActionsCount = 0;
var obj84817_SCActionDragDrop84820_droppedOutsideTargetActions_loopCount = 0;
var obj84817_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj84817_droppedInsideTargetActions_runningActionsCount = 0;
var obj84817_droppedInsideTargetActions_loopCount = 0;
var obj84800_onDrag_activeActionGroupIndex = -1;
var obj84800_onDrag_runningActionsCount = 0;
var obj84800_onDrag_loopCount = 0;
var obj84800_onTouchDown_activeActionGroupIndex = -1;
var obj84800_onTouchDown_runningActionsCount = 0;
var obj84800_onTouchDown_loopCount = 0;
var obj84800_SCActionDragDrop84803_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj84800_SCActionDragDrop84803_droppedOutsideTargetActions_runningActionsCount = 0;
var obj84800_SCActionDragDrop84803_droppedOutsideTargetActions_loopCount = 0;
var obj84800_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj84800_droppedInsideTargetActions_runningActionsCount = 0;
var obj84800_droppedInsideTargetActions_loopCount = 0;
var obj84778_onTap_activeActionGroupIndex = -1;
var obj84778_onTap_runningActionsCount = 0;
var obj84778_onTap_loopCount = 0;
var obj84770_onTap_activeActionGroupIndex = -1;
var obj84770_onTap_runningActionsCount = 0;
var obj84770_onTap_loopCount = 0;
var obj88201_onTap_activeActionGroupIndex = -1;
var obj88201_onTap_runningActionsCount = 0;
var obj88201_onTap_loopCount = 0;
var obj88196_onTap_activeActionGroupIndex = -1;
var obj88196_onTap_runningActionsCount = 0;
var obj88196_onTap_loopCount = 0;
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
		
obj84856_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84856_onTap_activeActionGroupIndex = -1;
		$("#obj84856").trigger("obj84856_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84856) {
				console.warn("de-queueing event obj84856." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84856").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84856_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_84858();
function goToPage_84858() {
	window.obj84856_onTap_runningActionsCount = obj84856_onTap_runningActionsCount + 1;
	$("#anchor666")[0].click();
	window.obj84856_onTap_runningActionsCount = window.obj84856_onTap_runningActionsCount - 1;
if (window.obj84856_onTap_runningActionsCount < 0) {
	window.obj84856_onTap_runningActionsCount = 0;
} else if (window.obj84856_onTap_runningActionsCount == 0) {
	obj84856_onTap_actionGroup1();
}
}





















};
obj84856_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj84856_onTap_activeActionGroupIndex = -1;
		$("#obj84856").trigger("obj84856_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84856) {
				console.warn("de-queueing event obj84856." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84856").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84856_onTap_activeActionGroupIndex = 1;
	





















};
obj84853_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84853_onTap_activeActionGroupIndex = -1;
		$("#obj84853").trigger("obj84853_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84853) {
				console.warn("de-queueing event obj84853." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84853").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84853_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_84855();
function goToPage_84855() {
	window.obj84853_onTap_runningActionsCount = obj84853_onTap_runningActionsCount + 1;
	$("#anchor667")[0].click();
	window.obj84853_onTap_runningActionsCount = window.obj84853_onTap_runningActionsCount - 1;
if (window.obj84853_onTap_runningActionsCount < 0) {
	window.obj84853_onTap_runningActionsCount = 0;
} else if (window.obj84853_onTap_runningActionsCount == 0) {
	obj84853_onTap_actionGroup1();
}
}





















};
obj84853_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj84853_onTap_activeActionGroupIndex = -1;
		$("#obj84853").trigger("obj84853_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84853) {
				console.warn("de-queueing event obj84853." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84853").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84853_onTap_activeActionGroupIndex = 1;
	





















};
obj84849_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84849_onTap_activeActionGroupIndex = -1;
		$("#obj84849").trigger("obj84849_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84849) {
				console.warn("de-queueing event obj84849." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84849").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84849_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_84851();
function goToPage_84851() {
	window.obj84849_onTap_runningActionsCount = obj84849_onTap_runningActionsCount + 1;
	$("#anchor668")[0].click();
	window.obj84849_onTap_runningActionsCount = window.obj84849_onTap_runningActionsCount - 1;
if (window.obj84849_onTap_runningActionsCount < 0) {
	window.obj84849_onTap_runningActionsCount = 0;
} else if (window.obj84849_onTap_runningActionsCount == 0) {
	obj84849_onTap_actionGroup1();
}
}





















};
obj84849_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj84849_onTap_activeActionGroupIndex = -1;
		$("#obj84849").trigger("obj84849_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84849) {
				console.warn("de-queueing event obj84849." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84849").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84849_onTap_activeActionGroupIndex = 1;
	





















};
obj84817_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84817_onTouchDown_activeActionGroupIndex = -1;
		$("#obj84817").trigger("obj84817_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84817) {
				console.warn("de-queueing event obj84817." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84817").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84817_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj84817");
//	action: dragDrop
//	target: obj84817 
dragDrop_84820();
function dragDrop_84820() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj84817_onTouchDown_runningActionsCount = obj84817_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj84817');
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
	  	containerNode = $('#obj84841');
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
    	window.obj84817_onTouchDown_runningActionsCount = window.obj84817_onTouchDown_runningActionsCount - 1;
if (window.obj84817_onTouchDown_runningActionsCount < 0) {
	window.obj84817_onTouchDown_runningActionsCount = 0;
} else if (window.obj84817_onTouchDown_runningActionsCount == 0) {
	obj84817_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj84837");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_84820 = false;
    	var dropped_id_84820;
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
					dropped_84820 = true;
					dropped_id_84820 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_84820) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj84817").trigger('SCActionDragDrop84820_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj84817_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj84817_onTouchDown_activeActionGroupIndex = -1;
		$("#obj84817").trigger("obj84817_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84817) {
				console.warn("de-queueing event obj84817." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84817").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84817_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj84817_SCActionDragDrop84820_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84817_SCActionDragDrop84820_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj84817").trigger("obj84817_SCActionDragDrop84820_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84817) {
				console.warn("de-queueing event obj84817." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84817").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84817_SCActionDragDrop84820_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj84817 
move_92497();
function move_92497() {
	window.obj84817_SCActionDragDrop84820_droppedOutsideTargetActions_runningActionsCount = obj84817_SCActionDragDrop84820_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj84817");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 132;
	var moveY = 599;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj84817_SCActionDragDrop84820_droppedOutsideTargetActions_runningActionsCount = window.obj84817_SCActionDragDrop84820_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj84817_SCActionDragDrop84820_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj84817_SCActionDragDrop84820_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj84817_SCActionDragDrop84820_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj84817_SCActionDragDrop84820_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj84817_SCActionDragDrop84820_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj84817_SCActionDragDrop84820_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj84817").trigger("obj84817_SCActionDragDrop84820_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84817) {
				console.warn("de-queueing event obj84817." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84817").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84817_SCActionDragDrop84820_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj84817_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84817_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj84817").trigger("obj84817_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84817) {
				console.warn("de-queueing event obj84817." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84817").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84817_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_84822();
function runjs_84822() {
	window.obj84817_droppedInsideTargetActions_runningActionsCount = obj84817_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj84837").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj84817_droppedInsideTargetActions_runningActionsCount = window.obj84817_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj84817_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj84817_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj84817_droppedInsideTargetActions_runningActionsCount == 0) {
	obj84817_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj84817_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84817_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj84817").trigger("obj84817_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84817) {
				console.warn("de-queueing event obj84817." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84817").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84817_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_84823();
function runjs_84823() {
	window.obj84817_droppedInsideTargetActions_runningActionsCount = obj84817_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj84837").css("border-color", "#C00000"); $("#obj84837").css("border-width", "2px"); $("#obj84837").css("border-style", "solid"); $("#obj84837").css("border-radius", "10px"); $("#obj84837").css("-webkit-border-radius", "10px"); $("#obj84837").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj84817_droppedInsideTargetActions_runningActionsCount = window.obj84817_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj84817_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj84817_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj84817_droppedInsideTargetActions_runningActionsCount == 0) {
	obj84817_droppedInsideTargetActions_actionGroup2();
}
	}, 1);
}







};
obj84817_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84817_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj84817").trigger("obj84817_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84817) {
				console.warn("de-queueing event obj84817." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84817").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84817_droppedInsideTargetActions_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj84835 
hide_84824();
function hide_84824() {
	var selector = "#obj84835";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj84817_droppedInsideTargetActions_runningActionsCount = obj84817_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj84817_droppedInsideTargetActions_runningActionsCount = window.obj84817_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj84817_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj84817_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj84817_droppedInsideTargetActions_runningActionsCount == 0) {
	obj84817_droppedInsideTargetActions_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_84824(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj84817_droppedInsideTargetActions_runningActionsCount = window.obj84817_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj84817_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj84817_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj84817_droppedInsideTargetActions_runningActionsCount == 0) {
	obj84817_droppedInsideTargetActions_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj84817_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84817_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj84817").trigger("obj84817_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84817) {
				console.warn("de-queueing event obj84817." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84817").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84817_droppedInsideTargetActions_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_84825();
function runjs_84825() {
	window.obj84817_droppedInsideTargetActions_runningActionsCount = obj84817_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj84817").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj84817_droppedInsideTargetActions_runningActionsCount = window.obj84817_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj84817_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj84817_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj84817_droppedInsideTargetActions_runningActionsCount == 0) {
	obj84817_droppedInsideTargetActions_actionGroup4();
}
	}, 1);
}







};
obj84817_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84817_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj84817").trigger("obj84817_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84817) {
				console.warn("de-queueing event obj84817." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84817").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84817_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_84826();
function switchText_84826() {
	window.obj84817_droppedInsideTargetActions_runningActionsCount = obj84817_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj84811_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj84811_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj84811").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj84811_content");
			setTimeout(function () {
				window.obj84817_droppedInsideTargetActions_runningActionsCount = window.obj84817_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj84817_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj84817_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj84817_droppedInsideTargetActions_runningActionsCount == 0) {
	obj84817_droppedInsideTargetActions_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj84811 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj84817_droppedInsideTargetActions_runningActionsCount = window.obj84817_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj84817_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj84817_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj84817_droppedInsideTargetActions_runningActionsCount == 0) {
	obj84817_droppedInsideTargetActions_actionGroup5();
}
		}, 1);
	}
}






};
obj84817_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84817_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj84817").trigger("obj84817_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84817) {
				console.warn("de-queueing event obj84817." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84817").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84817_droppedInsideTargetActions_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj84817 
move_84827();
function move_84827() {
	window.obj84817_droppedInsideTargetActions_runningActionsCount = obj84817_droppedInsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj84817");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 132;
	var moveY = 599;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj84817_droppedInsideTargetActions_runningActionsCount = window.obj84817_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj84817_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj84817_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj84817_droppedInsideTargetActions_runningActionsCount == 0) {
	obj84817_droppedInsideTargetActions_actionGroup6();
}
		}, 1);
	});
}



















};
obj84817_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84817_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj84817").trigger("obj84817_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84817) {
				console.warn("de-queueing event obj84817." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84817").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84817_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_84828();
function runjs_84828() {
	window.obj84817_droppedInsideTargetActions_runningActionsCount = obj84817_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj84837").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj84817_droppedInsideTargetActions_runningActionsCount = window.obj84817_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj84817_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj84817_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj84817_droppedInsideTargetActions_runningActionsCount == 0) {
	obj84817_droppedInsideTargetActions_actionGroup7();
}
	}, 1);
}







};
obj84817_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84817_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj84817").trigger("obj84817_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84817) {
				console.warn("de-queueing event obj84817." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84817").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84817_droppedInsideTargetActions_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_84829();
function runjs_84829() {
	window.obj84817_droppedInsideTargetActions_runningActionsCount = obj84817_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj84837").css("border-color", "#000000"); $("#obj84837").css("border-width", "1px"); $("#obj84837").css("border-style", "solid"); $("#obj84837").css("border-radius", "10px"); $("#obj84837").css("-webkit-border-radius", "10px"); $("#obj84837").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj84817_droppedInsideTargetActions_runningActionsCount = window.obj84817_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj84817_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj84817_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj84817_droppedInsideTargetActions_runningActionsCount == 0) {
	obj84817_droppedInsideTargetActions_actionGroup8();
}
	}, 1);
}







};
obj84817_droppedInsideTargetActions_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84817_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj84817").trigger("obj84817_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84817) {
				console.warn("de-queueing event obj84817." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84817").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84817_droppedInsideTargetActions_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj84835
(function(){
	window.obj84817_droppedInsideTargetActions_runningActionsCount = obj84817_droppedInsideTargetActions_runningActionsCount + 1;

	var selector = "#obj84835";
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
					window.obj84817_droppedInsideTargetActions_runningActionsCount = window.obj84817_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj84817_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj84817_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj84817_droppedInsideTargetActions_runningActionsCount == 0) {
	obj84817_droppedInsideTargetActions_actionGroup9();
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
				window.obj84817_droppedInsideTargetActions_runningActionsCount = window.obj84817_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj84817_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj84817_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj84817_droppedInsideTargetActions_runningActionsCount == 0) {
	obj84817_droppedInsideTargetActions_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj84817_droppedInsideTargetActions_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84817_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj84817").trigger("obj84817_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84817) {
				console.warn("de-queueing event obj84817." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84817").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84817_droppedInsideTargetActions_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_84831();
function runjs_84831() {
	window.obj84817_droppedInsideTargetActions_runningActionsCount = obj84817_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj84817").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj84817_droppedInsideTargetActions_runningActionsCount = window.obj84817_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj84817_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj84817_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj84817_droppedInsideTargetActions_runningActionsCount == 0) {
	obj84817_droppedInsideTargetActions_actionGroup10();
}
	}, 1);
}







};
obj84817_droppedInsideTargetActions_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84817_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj84817").trigger("obj84817_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84817) {
				console.warn("de-queueing event obj84817." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84817").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84817_droppedInsideTargetActions_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_84832();
function runjs_84832() {
	window.obj84817_droppedInsideTargetActions_runningActionsCount = obj84817_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj84817").css("border-color", "rgba(0,0,0,0)"); $("#obj84817").css("border-width", "0px"); $("#obj84817").css("border-style", "solid"); $("#obj84817").css("border-radius", "10px"); $("#obj84817").css("-webkit-border-radius", "10px"); $("#obj84817").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj84817_droppedInsideTargetActions_runningActionsCount = window.obj84817_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj84817_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj84817_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj84817_droppedInsideTargetActions_runningActionsCount == 0) {
	obj84817_droppedInsideTargetActions_actionGroup11();
}
	}, 1);
}







};
obj84817_droppedInsideTargetActions_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84817_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj84817").trigger("obj84817_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84817) {
				console.warn("de-queueing event obj84817." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84817").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84817_droppedInsideTargetActions_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj84796 
playAudio_84833();
function playAudio_84833() {
	window.obj84817_droppedInsideTargetActions_runningActionsCount = obj84817_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj84796")[0];
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
		    window.obj84817_droppedInsideTargetActions_runningActionsCount = window.obj84817_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj84817_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj84817_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj84817_droppedInsideTargetActions_runningActionsCount == 0) {
	obj84817_droppedInsideTargetActions_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj84817_droppedInsideTargetActions_runningActionsCount = window.obj84817_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj84817_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj84817_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj84817_droppedInsideTargetActions_runningActionsCount == 0) {
	obj84817_droppedInsideTargetActions_actionGroup12();
}
	}
}









};
obj84817_droppedInsideTargetActions_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84817_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj84817").trigger("obj84817_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84817) {
				console.warn("de-queueing event obj84817." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84817").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84817_droppedInsideTargetActions_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_84834();
function switchText_84834() {
	window.obj84817_droppedInsideTargetActions_runningActionsCount = obj84817_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj84811_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj84811_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj84811").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj84811_content");
			setTimeout(function () {
				window.obj84817_droppedInsideTargetActions_runningActionsCount = window.obj84817_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj84817_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj84817_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj84817_droppedInsideTargetActions_runningActionsCount == 0) {
	obj84817_droppedInsideTargetActions_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj84811 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj84817_droppedInsideTargetActions_runningActionsCount = window.obj84817_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj84817_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj84817_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj84817_droppedInsideTargetActions_runningActionsCount == 0) {
	obj84817_droppedInsideTargetActions_actionGroup13();
}
		}, 1);
	}
}






};
obj84817_droppedInsideTargetActions_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj84817_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj84817").trigger("obj84817_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84817) {
				console.warn("de-queueing event obj84817." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84817").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84817_droppedInsideTargetActions_activeActionGroupIndex = 13;
	





















};
obj84800_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84800_onTouchDown_activeActionGroupIndex = -1;
		$("#obj84800").trigger("obj84800_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84800) {
				console.warn("de-queueing event obj84800." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84800").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84800_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj84800");
//	action: dragDrop
//	target: obj84800 
dragDrop_84803();
function dragDrop_84803() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj84800_onTouchDown_runningActionsCount = obj84800_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj84800');
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
	  	containerNode = $('#obj84841');
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
    	window.obj84800_onTouchDown_runningActionsCount = window.obj84800_onTouchDown_runningActionsCount - 1;
if (window.obj84800_onTouchDown_runningActionsCount < 0) {
	window.obj84800_onTouchDown_runningActionsCount = 0;
} else if (window.obj84800_onTouchDown_runningActionsCount == 0) {
	obj84800_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj84837");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_84803 = false;
    	var dropped_id_84803;
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
					dropped_84803 = true;
					dropped_id_84803 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_84803) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj84800").trigger('SCActionDragDrop84803_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj84800_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj84800_onTouchDown_activeActionGroupIndex = -1;
		$("#obj84800").trigger("obj84800_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84800) {
				console.warn("de-queueing event obj84800." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84800").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84800_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj84800_SCActionDragDrop84803_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84800_SCActionDragDrop84803_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj84800").trigger("obj84800_SCActionDragDrop84803_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84800) {
				console.warn("de-queueing event obj84800." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84800").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84800_SCActionDragDrop84803_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj84800 
move_92499();
function move_92499() {
	window.obj84800_SCActionDragDrop84803_droppedOutsideTargetActions_runningActionsCount = obj84800_SCActionDragDrop84803_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj84800");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 338;
	var moveY = 598;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj84800_SCActionDragDrop84803_droppedOutsideTargetActions_runningActionsCount = window.obj84800_SCActionDragDrop84803_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj84800_SCActionDragDrop84803_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj84800_SCActionDragDrop84803_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj84800_SCActionDragDrop84803_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj84800_SCActionDragDrop84803_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj84800_SCActionDragDrop84803_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj84800_SCActionDragDrop84803_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj84800").trigger("obj84800_SCActionDragDrop84803_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84800) {
				console.warn("de-queueing event obj84800." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84800").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84800_SCActionDragDrop84803_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj84800_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84800_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj84800").trigger("obj84800_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84800) {
				console.warn("de-queueing event obj84800." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84800").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84800_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_84805();
function runjs_84805() {
	window.obj84800_droppedInsideTargetActions_runningActionsCount = obj84800_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj84837").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj84800_droppedInsideTargetActions_runningActionsCount = window.obj84800_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj84800_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj84800_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj84800_droppedInsideTargetActions_runningActionsCount == 0) {
	obj84800_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj84800_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84800_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj84800").trigger("obj84800_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84800) {
				console.warn("de-queueing event obj84800." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84800").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84800_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_84809();
function switchText_84809() {
	window.obj84800_droppedInsideTargetActions_runningActionsCount = obj84800_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj84811_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj84811_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj84811").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj84811_content");
			setTimeout(function () {
				window.obj84800_droppedInsideTargetActions_runningActionsCount = window.obj84800_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj84800_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj84800_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj84800_droppedInsideTargetActions_runningActionsCount == 0) {
	obj84800_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj84811 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj84800_droppedInsideTargetActions_runningActionsCount = window.obj84800_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj84800_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj84800_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj84800_droppedInsideTargetActions_runningActionsCount == 0) {
	obj84800_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj84800_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84800_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj84800").trigger("obj84800_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84800) {
				console.warn("de-queueing event obj84800." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84800").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84800_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_84806();
function runjs_84806() {
	window.obj84800_droppedInsideTargetActions_runningActionsCount = obj84800_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj84837").css("border-color", "#058E3F"); $("#obj84837").css("border-width", "2px"); $("#obj84837").css("border-style", "solid"); $("#obj84837").css("border-radius", "10px"); $("#obj84837").css("-webkit-border-radius", "10px"); $("#obj84837").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj84800_droppedInsideTargetActions_runningActionsCount = window.obj84800_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj84800_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj84800_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj84800_droppedInsideTargetActions_runningActionsCount == 0) {
	obj84800_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj84800_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84800_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj84800").trigger("obj84800_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84800) {
				console.warn("de-queueing event obj84800." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84800").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84800_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj84835 
hide_84807();
function hide_84807() {
	var selector = "#obj84835";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj84800_droppedInsideTargetActions_runningActionsCount = obj84800_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj84800_droppedInsideTargetActions_runningActionsCount = window.obj84800_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj84800_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj84800_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj84800_droppedInsideTargetActions_runningActionsCount == 0) {
	obj84800_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_84807(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj84800_droppedInsideTargetActions_runningActionsCount = window.obj84800_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj84800_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj84800_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj84800_droppedInsideTargetActions_runningActionsCount == 0) {
	obj84800_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj84800_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84800_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj84800").trigger("obj84800_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84800) {
				console.warn("de-queueing event obj84800." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84800").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84800_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_84808();
function runjs_84808() {
	window.obj84800_droppedInsideTargetActions_runningActionsCount = obj84800_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj84800").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj84800_droppedInsideTargetActions_runningActionsCount = window.obj84800_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj84800_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj84800_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj84800_droppedInsideTargetActions_runningActionsCount == 0) {
	obj84800_droppedInsideTargetActions_actionGroup5();
}
	}, 1);
}







};
obj84800_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84800_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj84800").trigger("obj84800_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84800) {
				console.warn("de-queueing event obj84800." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84800").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84800_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj84815 
playAudio_84810();
function playAudio_84810() {
	window.obj84800_droppedInsideTargetActions_runningActionsCount = obj84800_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj84815")[0];
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
		    window.obj84800_droppedInsideTargetActions_runningActionsCount = window.obj84800_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj84800_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj84800_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj84800_droppedInsideTargetActions_runningActionsCount == 0) {
	obj84800_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj84800_droppedInsideTargetActions_runningActionsCount = window.obj84800_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj84800_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj84800_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj84800_droppedInsideTargetActions_runningActionsCount == 0) {
	obj84800_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj84800_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84800_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj84800").trigger("obj84800_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84800) {
				console.warn("de-queueing event obj84800." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84800").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84800_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90407();
function switchText_90407() {
	window.obj84800_droppedInsideTargetActions_runningActionsCount = obj84800_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj84811_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj84811_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj84811").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj84811_content");
			setTimeout(function () {
				window.obj84800_droppedInsideTargetActions_runningActionsCount = window.obj84800_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj84800_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj84800_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj84800_droppedInsideTargetActions_runningActionsCount == 0) {
	obj84800_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj84811 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj84800_droppedInsideTargetActions_runningActionsCount = window.obj84800_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj84800_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj84800_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj84800_droppedInsideTargetActions_runningActionsCount == 0) {
	obj84800_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj84800_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj84800_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj84800").trigger("obj84800_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84800) {
				console.warn("de-queueing event obj84800." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84800").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84800_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj84778_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84778_onTap_activeActionGroupIndex = -1;
		$("#obj84778").trigger("obj84778_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84778) {
				console.warn("de-queueing event obj84778." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84778").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84778_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj84778 
hide_84781();
function hide_84781() {
	var selector = "#obj84778";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj84778_onTap_runningActionsCount = obj84778_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj84778_onTap_runningActionsCount = window.obj84778_onTap_runningActionsCount - 1;
if (window.obj84778_onTap_runningActionsCount < 0) {
	window.obj84778_onTap_runningActionsCount = 0;
} else if (window.obj84778_onTap_runningActionsCount == 0) {
	obj84778_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_84781(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj84778_onTap_runningActionsCount = window.obj84778_onTap_runningActionsCount - 1;
if (window.obj84778_onTap_runningActionsCount < 0) {
	window.obj84778_onTap_runningActionsCount = 0;
} else if (window.obj84778_onTap_runningActionsCount == 0) {
	obj84778_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj84768 
stopMovie_84780();
function stopMovie_84780() {
	window.obj84778_onTap_runningActionsCount = obj84778_onTap_runningActionsCount + 1;
	var myVideo = $("#obj84768")[0];
	myVideo.pause();
	window.obj84778_onTap_runningActionsCount = window.obj84778_onTap_runningActionsCount - 1;
if (window.obj84778_onTap_runningActionsCount < 0) {
	window.obj84778_onTap_runningActionsCount = 0;
} else if (window.obj84778_onTap_runningActionsCount == 0) {
	obj84778_onTap_actionGroup1();
}
}
















};
obj84778_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84778_onTap_activeActionGroupIndex = -1;
		$("#obj84778").trigger("obj84778_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84778) {
				console.warn("de-queueing event obj84778." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84778").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84778_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj84770
(function(){
	window.obj84778_onTap_runningActionsCount = obj84778_onTap_runningActionsCount + 1;

	var selector = "#obj84770";
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
					window.obj84778_onTap_runningActionsCount = window.obj84778_onTap_runningActionsCount - 1;
if (window.obj84778_onTap_runningActionsCount < 0) {
	window.obj84778_onTap_runningActionsCount = 0;
} else if (window.obj84778_onTap_runningActionsCount == 0) {
	obj84778_onTap_actionGroup2();
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
				window.obj84778_onTap_runningActionsCount = window.obj84778_onTap_runningActionsCount - 1;
if (window.obj84778_onTap_runningActionsCount < 0) {
	window.obj84778_onTap_runningActionsCount = 0;
} else if (window.obj84778_onTap_runningActionsCount == 0) {
	obj84778_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj84778_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84778_onTap_activeActionGroupIndex = -1;
		$("#obj84778").trigger("obj84778_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84778) {
				console.warn("de-queueing event obj84778." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84778").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84778_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj84768 
move_84783();
function move_84783() {
	window.obj84778_onTap_runningActionsCount = obj84778_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj84768");
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
			window.obj84778_onTap_runningActionsCount = window.obj84778_onTap_runningActionsCount - 1;
if (window.obj84778_onTap_runningActionsCount < 0) {
	window.obj84778_onTap_runningActionsCount = 0;
} else if (window.obj84778_onTap_runningActionsCount == 0) {
	obj84778_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj84778_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj84778_onTap_activeActionGroupIndex = -1;
		$("#obj84778").trigger("obj84778_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84778) {
				console.warn("de-queueing event obj84778." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84778").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84778_onTap_activeActionGroupIndex = 3;
	





















};
obj84770_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84770_onTap_activeActionGroupIndex = -1;
		$("#obj84770").trigger("obj84770_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84770) {
				console.warn("de-queueing event obj84770." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84770").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84770_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj84770 
hide_84773();
function hide_84773() {
	var selector = "#obj84770";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj84770_onTap_runningActionsCount = obj84770_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj84770_onTap_runningActionsCount = window.obj84770_onTap_runningActionsCount - 1;
if (window.obj84770_onTap_runningActionsCount < 0) {
	window.obj84770_onTap_runningActionsCount = 0;
} else if (window.obj84770_onTap_runningActionsCount == 0) {
	obj84770_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_84773(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj84770_onTap_runningActionsCount = window.obj84770_onTap_runningActionsCount - 1;
if (window.obj84770_onTap_runningActionsCount < 0) {
	window.obj84770_onTap_runningActionsCount = 0;
} else if (window.obj84770_onTap_runningActionsCount == 0) {
	obj84770_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj84768 
playPauseMovie_84772();
function playPauseMovie_84772() {
	window.obj84770_onTap_runningActionsCount = obj84770_onTap_runningActionsCount + 1;
	var myVideo = $("#obj84768")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj84770_onTap_runningActionsCount = window.obj84770_onTap_runningActionsCount - 1;
if (window.obj84770_onTap_runningActionsCount < 0) {
	window.obj84770_onTap_runningActionsCount = 0;
} else if (window.obj84770_onTap_runningActionsCount == 0) {
	obj84770_onTap_actionGroup1();
}
}

















};
obj84770_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84770_onTap_activeActionGroupIndex = -1;
		$("#obj84770").trigger("obj84770_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84770) {
				console.warn("de-queueing event obj84770." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84770").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84770_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj84778
(function(){
	window.obj84770_onTap_runningActionsCount = obj84770_onTap_runningActionsCount + 1;

	var selector = "#obj84778";
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
					window.obj84770_onTap_runningActionsCount = window.obj84770_onTap_runningActionsCount - 1;
if (window.obj84770_onTap_runningActionsCount < 0) {
	window.obj84770_onTap_runningActionsCount = 0;
} else if (window.obj84770_onTap_runningActionsCount == 0) {
	obj84770_onTap_actionGroup2();
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
				window.obj84770_onTap_runningActionsCount = window.obj84770_onTap_runningActionsCount - 1;
if (window.obj84770_onTap_runningActionsCount < 0) {
	window.obj84770_onTap_runningActionsCount = 0;
} else if (window.obj84770_onTap_runningActionsCount == 0) {
	obj84770_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj84770_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84770_onTap_activeActionGroupIndex = -1;
		$("#obj84770").trigger("obj84770_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84770) {
				console.warn("de-queueing event obj84770." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84770").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84770_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj84768 
move_84775();
function move_84775() {
	window.obj84770_onTap_runningActionsCount = obj84770_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj84768");
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
			window.obj84770_onTap_runningActionsCount = window.obj84770_onTap_runningActionsCount - 1;
if (window.obj84770_onTap_runningActionsCount < 0) {
	window.obj84770_onTap_runningActionsCount = 0;
} else if (window.obj84770_onTap_runningActionsCount == 0) {
	obj84770_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj84770_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj84770_onTap_activeActionGroupIndex = -1;
		$("#obj84770").trigger("obj84770_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84770) {
				console.warn("de-queueing event obj84770." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84770").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84770_onTap_activeActionGroupIndex = 3;
	





















};
obj88201_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88201_onTap_activeActionGroupIndex = -1;
		$("#obj88201").trigger("obj88201_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88201) {
				console.warn("de-queueing event obj88201." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88201").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88201_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj88206 
stopAudio_88203();
function stopAudio_88203() {
	window.obj88201_onTap_runningActionsCount = obj88201_onTap_runningActionsCount + 1;
	var myAudio = $("#obj88206")[0];
	myAudio.pause();
	window.obj88201_onTap_runningActionsCount = window.obj88201_onTap_runningActionsCount - 1;
if (window.obj88201_onTap_runningActionsCount < 0) {
	window.obj88201_onTap_runningActionsCount = 0;
} else if (window.obj88201_onTap_runningActionsCount == 0) {
	obj88201_onTap_actionGroup1();
}
}








};
obj88201_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88201_onTap_activeActionGroupIndex = -1;
		$("#obj88201").trigger("obj88201_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88201) {
				console.warn("de-queueing event obj88201." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88201").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88201_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj88201 
hide_88204();
function hide_88204() {
	var selector = "#obj88201";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj88201_onTap_runningActionsCount = obj88201_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj88201_onTap_runningActionsCount = window.obj88201_onTap_runningActionsCount - 1;
if (window.obj88201_onTap_runningActionsCount < 0) {
	window.obj88201_onTap_runningActionsCount = 0;
} else if (window.obj88201_onTap_runningActionsCount == 0) {
	obj88201_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_88204(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj88201_onTap_runningActionsCount = window.obj88201_onTap_runningActionsCount - 1;
if (window.obj88201_onTap_runningActionsCount < 0) {
	window.obj88201_onTap_runningActionsCount = 0;
} else if (window.obj88201_onTap_runningActionsCount == 0) {
	obj88201_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj88201_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88201_onTap_activeActionGroupIndex = -1;
		$("#obj88201").trigger("obj88201_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88201) {
				console.warn("de-queueing event obj88201." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88201").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88201_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj88196
(function(){
	window.obj88201_onTap_runningActionsCount = obj88201_onTap_runningActionsCount + 1;

	var selector = "#obj88196";
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
					window.obj88201_onTap_runningActionsCount = window.obj88201_onTap_runningActionsCount - 1;
if (window.obj88201_onTap_runningActionsCount < 0) {
	window.obj88201_onTap_runningActionsCount = 0;
} else if (window.obj88201_onTap_runningActionsCount == 0) {
	obj88201_onTap_actionGroup3();
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
				window.obj88201_onTap_runningActionsCount = window.obj88201_onTap_runningActionsCount - 1;
if (window.obj88201_onTap_runningActionsCount < 0) {
	window.obj88201_onTap_runningActionsCount = 0;
} else if (window.obj88201_onTap_runningActionsCount == 0) {
	obj88201_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj88201_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj88201_onTap_activeActionGroupIndex = -1;
		$("#obj88201").trigger("obj88201_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88201) {
				console.warn("de-queueing event obj88201." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88201").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88201_onTap_activeActionGroupIndex = 3;
	





















};
obj88196_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88196_onTap_activeActionGroupIndex = -1;
		$("#obj88196").trigger("obj88196_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88196) {
				console.warn("de-queueing event obj88196." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88196").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88196_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj88196 
hide_88198();
function hide_88198() {
	var selector = "#obj88196";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj88196_onTap_runningActionsCount = obj88196_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj88196_onTap_runningActionsCount = window.obj88196_onTap_runningActionsCount - 1;
if (window.obj88196_onTap_runningActionsCount < 0) {
	window.obj88196_onTap_runningActionsCount = 0;
} else if (window.obj88196_onTap_runningActionsCount == 0) {
	obj88196_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_88198(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj88196_onTap_runningActionsCount = window.obj88196_onTap_runningActionsCount - 1;
if (window.obj88196_onTap_runningActionsCount < 0) {
	window.obj88196_onTap_runningActionsCount = 0;
} else if (window.obj88196_onTap_runningActionsCount == 0) {
	obj88196_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj88196_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88196_onTap_activeActionGroupIndex = -1;
		$("#obj88196").trigger("obj88196_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88196) {
				console.warn("de-queueing event obj88196." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88196").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88196_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj88201
(function(){
	window.obj88196_onTap_runningActionsCount = obj88196_onTap_runningActionsCount + 1;

	var selector = "#obj88201";
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
					window.obj88196_onTap_runningActionsCount = window.obj88196_onTap_runningActionsCount - 1;
if (window.obj88196_onTap_runningActionsCount < 0) {
	window.obj88196_onTap_runningActionsCount = 0;
} else if (window.obj88196_onTap_runningActionsCount == 0) {
	obj88196_onTap_actionGroup2();
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
				window.obj88196_onTap_runningActionsCount = window.obj88196_onTap_runningActionsCount - 1;
if (window.obj88196_onTap_runningActionsCount < 0) {
	window.obj88196_onTap_runningActionsCount = 0;
} else if (window.obj88196_onTap_runningActionsCount == 0) {
	obj88196_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj88196_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88196_onTap_activeActionGroupIndex = -1;
		$("#obj88196").trigger("obj88196_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88196) {
				console.warn("de-queueing event obj88196." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88196").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88196_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj88206 
playAudio_88200();
function playAudio_88200() {
	window.obj88196_onTap_runningActionsCount = obj88196_onTap_runningActionsCount + 1;
	var myAudio = $("#obj88206")[0];
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
		    window.obj88196_onTap_runningActionsCount = window.obj88196_onTap_runningActionsCount - 1;
if (window.obj88196_onTap_runningActionsCount < 0) {
	window.obj88196_onTap_runningActionsCount = 0;
} else if (window.obj88196_onTap_runningActionsCount == 0) {
	obj88196_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj88196_onTap_runningActionsCount = window.obj88196_onTap_runningActionsCount - 1;
if (window.obj88196_onTap_runningActionsCount < 0) {
	window.obj88196_onTap_runningActionsCount = 0;
} else if (window.obj88196_onTap_runningActionsCount == 0) {
	obj88196_onTap_actionGroup3();
}
	}
}









};
obj88196_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj88196_onTap_activeActionGroupIndex = -1;
		$("#obj88196").trigger("obj88196_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88196) {
				console.warn("de-queueing event obj88196." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88196").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88196_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj84856: Event Touch Down
 *
 */
$("#obj84856").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj84856_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj84856_onTap is still running");
	return;
}
var obj84856_onTap_runningActionsCount = 0;
var obj84856_onTap_loopCount = 0;
obj84856_onTap_actionGroup0();
});










/*
 *
 *   obj84853: Event Touch Down
 *
 */
$("#obj84853").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj84853_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj84853_onTap is still running");
	return;
}
var obj84853_onTap_runningActionsCount = 0;
var obj84853_onTap_loopCount = 0;
obj84853_onTap_actionGroup0();
});










/*
 *
 *   obj84849: Event Touch Down
 *
 */
$("#obj84849").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj84849_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj84849_onTap is still running");
	return;
}
var obj84849_onTap_runningActionsCount = 0;
var obj84849_onTap_loopCount = 0;
obj84849_onTap_actionGroup0();
});

















































































/*
 *
 *   obj84817: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj84817");
	var winTarget = document.getElementById("obj84817");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj84817").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj84817_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj84817_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj84817_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj84817_onTouchDown is still running");
	return;
}
var obj84817_onTouchDown_runningActionsCount = 0;
var obj84817_onTouchDown_loopCount = 0;
obj84817_onTouchDown_actionGroup0();
});



/*
 *
 *   obj84817: Event SCActionDragDrop84820_droppedOutsideTargetActions
 *
 */
$("#obj84817").bind("SCActionDragDrop84820_droppedOutsideTargetActions", function(event) {
	if (window.obj84817_SCActionDragDrop84820_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj84817_SCActionDragDrop84820_droppedOutsideTargetActions is still running");
	return;
}
var obj84817_SCActionDragDrop84820_droppedOutsideTargetActions_runningActionsCount = 0;
var obj84817_SCActionDragDrop84820_droppedOutsideTargetActions_loopCount = 0;
obj84817_SCActionDragDrop84820_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj84817: Event droppedInsideTargetActions
 *
 */
$("#obj84817").bind("droppedInsideTargetActions", function(event) {
	if (window.obj84817_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj84817_droppedInsideTargetActions is still running");
	return;
}
var obj84817_droppedInsideTargetActions_runningActionsCount = 0;
var obj84817_droppedInsideTargetActions_loopCount = 0;
obj84817_droppedInsideTargetActions_actionGroup0();
});




































/*
 *
 *   obj84800: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj84800");
	var winTarget = document.getElementById("obj84800");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj84800").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj84800_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj84800_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj84800_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj84800_onTouchDown is still running");
	return;
}
var obj84800_onTouchDown_runningActionsCount = 0;
var obj84800_onTouchDown_loopCount = 0;
obj84800_onTouchDown_actionGroup0();
});



/*
 *
 *   obj84800: Event SCActionDragDrop84803_droppedOutsideTargetActions
 *
 */
$("#obj84800").bind("SCActionDragDrop84803_droppedOutsideTargetActions", function(event) {
	if (window.obj84800_SCActionDragDrop84803_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj84800_SCActionDragDrop84803_droppedOutsideTargetActions is still running");
	return;
}
var obj84800_SCActionDragDrop84803_droppedOutsideTargetActions_runningActionsCount = 0;
var obj84800_SCActionDragDrop84803_droppedOutsideTargetActions_loopCount = 0;
obj84800_SCActionDragDrop84803_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj84800: Event droppedInsideTargetActions
 *
 */
$("#obj84800").bind("droppedInsideTargetActions", function(event) {
	if (window.obj84800_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj84800_droppedInsideTargetActions is still running");
	return;
}
var obj84800_droppedInsideTargetActions_runningActionsCount = 0;
var obj84800_droppedInsideTargetActions_loopCount = 0;
obj84800_droppedInsideTargetActions_actionGroup0();
});

























/*
 *
 *   obj84778: Event Touch Down
 *
 */
$("#obj84778").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj84778_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj84778_onTap is still running");
	return;
}
var obj84778_onTap_runningActionsCount = 0;
var obj84778_onTap_loopCount = 0;
obj84778_onTap_actionGroup0();
});










/*
 *
 *   obj84770: Event Touch Down
 *
 */
$("#obj84770").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj84770_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj84770_onTap is still running");
	return;
}
var obj84770_onTap_runningActionsCount = 0;
var obj84770_onTap_loopCount = 0;
obj84770_onTap_actionGroup0();
});










/*
 *
 *   obj88201: Event Touch Down
 *
 */
$("#obj88201").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj88201_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj88201_onTap is still running");
	return;
}
var obj88201_onTap_runningActionsCount = 0;
var obj88201_onTap_loopCount = 0;
obj88201_onTap_actionGroup0();
});










/*
 *
 *   obj88196: Event Touch Down
 *
 */
$("#obj88196").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj88196_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj88196_onTap is still running");
	return;
}
var obj88196_onTap_runningActionsCount = 0;
var obj88196_onTap_loopCount = 0;
obj88196_onTap_actionGroup0();
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
	
$("#obj84859").trigger('SCEventShow');
$("#obj84856").trigger('SCEventShow');
$("#obj84853").trigger('SCEventShow');
$("#obj84849").trigger('SCEventShow');
$("#obj84847").trigger('SCEventShow');
$("#obj84845").trigger('SCEventShow');
$("#obj84843").trigger('SCEventShow');
$("#obj84841").trigger('SCEventShow');
$("#obj84839").trigger('SCEventShow');
$("#obj84837").trigger('SCEventShow');
$("#obj84835").trigger('SCEventShow');
$("#obj84817").trigger('SCEventShow');
$("#obj84815").trigger('SCEventShow');
$("#obj84813").trigger('SCEventShow');
$("#obj84811").trigger('SCEventShow');
$("#obj84800").trigger('SCEventShow');
$("#obj84798").trigger('SCEventShow');
$("#obj84796").trigger('SCEventShow');
$("#obj84778").trigger('SCEventShow');
$("#obj84770").trigger('SCEventShow');
$("#obj88201").trigger('SCEventShow');
$("#obj88196").trigger('SCEventShow');
$("#obj88206").trigger('SCEventShow');
$("#obj94851").trigger('SCEventShow');
$("#obj84768").trigger('SCEventShow');
	
});