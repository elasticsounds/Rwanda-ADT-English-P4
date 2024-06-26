pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 38842;
pubcoder.page.title = pubcoder.page.title || "130";
pubcoder.page.number = pubcoder.page.number || 130;
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
var obj38903_onTap_activeActionGroupIndex = -1;
var obj38903_onTap_runningActionsCount = 0;
var obj38903_onTap_loopCount = 0;
var obj38900_onTap_activeActionGroupIndex = -1;
var obj38900_onTap_runningActionsCount = 0;
var obj38900_onTap_loopCount = 0;
var obj38896_onTap_activeActionGroupIndex = -1;
var obj38896_onTap_runningActionsCount = 0;
var obj38896_onTap_loopCount = 0;
var obj38864_onDrag_activeActionGroupIndex = -1;
var obj38864_onDrag_runningActionsCount = 0;
var obj38864_onDrag_loopCount = 0;
var obj38864_onTouchDown_activeActionGroupIndex = -1;
var obj38864_onTouchDown_runningActionsCount = 0;
var obj38864_onTouchDown_loopCount = 0;
var obj38864_SCActionDragDrop38867_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj38864_SCActionDragDrop38867_droppedOutsideTargetActions_runningActionsCount = 0;
var obj38864_SCActionDragDrop38867_droppedOutsideTargetActions_loopCount = 0;
var obj38864_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj38864_droppedInsideTargetActions_runningActionsCount = 0;
var obj38864_droppedInsideTargetActions_loopCount = 0;
var obj38847_onDrag_activeActionGroupIndex = -1;
var obj38847_onDrag_runningActionsCount = 0;
var obj38847_onDrag_loopCount = 0;
var obj38847_onTouchDown_activeActionGroupIndex = -1;
var obj38847_onTouchDown_runningActionsCount = 0;
var obj38847_onTouchDown_loopCount = 0;
var obj38847_SCActionDragDrop38850_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj38847_SCActionDragDrop38850_droppedOutsideTargetActions_runningActionsCount = 0;
var obj38847_SCActionDragDrop38850_droppedOutsideTargetActions_loopCount = 0;
var obj38847_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj38847_droppedInsideTargetActions_runningActionsCount = 0;
var obj38847_droppedInsideTargetActions_loopCount = 0;
var obj67086_onTap_activeActionGroupIndex = -1;
var obj67086_onTap_runningActionsCount = 0;
var obj67086_onTap_loopCount = 0;
var obj67078_onTap_activeActionGroupIndex = -1;
var obj67078_onTap_runningActionsCount = 0;
var obj67078_onTap_loopCount = 0;
var obj88429_onTap_activeActionGroupIndex = -1;
var obj88429_onTap_runningActionsCount = 0;
var obj88429_onTap_loopCount = 0;
var obj88424_onTap_activeActionGroupIndex = -1;
var obj88424_onTap_runningActionsCount = 0;
var obj88424_onTap_loopCount = 0;
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
		
obj38903_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38903_onTap_activeActionGroupIndex = -1;
		$("#obj38903").trigger("obj38903_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38903) {
				console.warn("de-queueing event obj38903." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38903").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38903_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_38905();
function goToPage_38905() {
	window.obj38903_onTap_runningActionsCount = obj38903_onTap_runningActionsCount + 1;
	$("#anchor779")[0].click();
	window.obj38903_onTap_runningActionsCount = window.obj38903_onTap_runningActionsCount - 1;
if (window.obj38903_onTap_runningActionsCount < 0) {
	window.obj38903_onTap_runningActionsCount = 0;
} else if (window.obj38903_onTap_runningActionsCount == 0) {
	obj38903_onTap_actionGroup1();
}
}





















};
obj38903_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj38903_onTap_activeActionGroupIndex = -1;
		$("#obj38903").trigger("obj38903_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38903) {
				console.warn("de-queueing event obj38903." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38903").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38903_onTap_activeActionGroupIndex = 1;
	





















};
obj38900_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38900_onTap_activeActionGroupIndex = -1;
		$("#obj38900").trigger("obj38900_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38900) {
				console.warn("de-queueing event obj38900." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38900").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38900_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_38902();
function goToPage_38902() {
	window.obj38900_onTap_runningActionsCount = obj38900_onTap_runningActionsCount + 1;
	$("#anchor780")[0].click();
	window.obj38900_onTap_runningActionsCount = window.obj38900_onTap_runningActionsCount - 1;
if (window.obj38900_onTap_runningActionsCount < 0) {
	window.obj38900_onTap_runningActionsCount = 0;
} else if (window.obj38900_onTap_runningActionsCount == 0) {
	obj38900_onTap_actionGroup1();
}
}





















};
obj38900_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj38900_onTap_activeActionGroupIndex = -1;
		$("#obj38900").trigger("obj38900_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38900) {
				console.warn("de-queueing event obj38900." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38900").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38900_onTap_activeActionGroupIndex = 1;
	





















};
obj38896_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38896_onTap_activeActionGroupIndex = -1;
		$("#obj38896").trigger("obj38896_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38896) {
				console.warn("de-queueing event obj38896." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38896").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38896_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_38898();
function goToPage_38898() {
	window.obj38896_onTap_runningActionsCount = obj38896_onTap_runningActionsCount + 1;
	$("#anchor781")[0].click();
	window.obj38896_onTap_runningActionsCount = window.obj38896_onTap_runningActionsCount - 1;
if (window.obj38896_onTap_runningActionsCount < 0) {
	window.obj38896_onTap_runningActionsCount = 0;
} else if (window.obj38896_onTap_runningActionsCount == 0) {
	obj38896_onTap_actionGroup1();
}
}





















};
obj38896_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj38896_onTap_activeActionGroupIndex = -1;
		$("#obj38896").trigger("obj38896_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38896) {
				console.warn("de-queueing event obj38896." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38896").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38896_onTap_activeActionGroupIndex = 1;
	





















};
obj38864_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38864_onTouchDown_activeActionGroupIndex = -1;
		$("#obj38864").trigger("obj38864_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38864) {
				console.warn("de-queueing event obj38864." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38864").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38864_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj38864");
//	action: dragDrop
//	target: obj38864 
dragDrop_38867();
function dragDrop_38867() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj38864_onTouchDown_runningActionsCount = obj38864_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj38864');
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
	  	containerNode = $('#obj38888');
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
    	window.obj38864_onTouchDown_runningActionsCount = window.obj38864_onTouchDown_runningActionsCount - 1;
if (window.obj38864_onTouchDown_runningActionsCount < 0) {
	window.obj38864_onTouchDown_runningActionsCount = 0;
} else if (window.obj38864_onTouchDown_runningActionsCount == 0) {
	obj38864_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj38884");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_38867 = false;
    	var dropped_id_38867;
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
					dropped_38867 = true;
					dropped_id_38867 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_38867) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj38864").trigger('SCActionDragDrop38867_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj38864_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj38864_onTouchDown_activeActionGroupIndex = -1;
		$("#obj38864").trigger("obj38864_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38864) {
				console.warn("de-queueing event obj38864." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38864").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38864_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj38864_SCActionDragDrop38867_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38864_SCActionDragDrop38867_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj38864").trigger("obj38864_SCActionDragDrop38867_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38864) {
				console.warn("de-queueing event obj38864." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38864").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38864_SCActionDragDrop38867_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj38864 
move_92583();
function move_92583() {
	window.obj38864_SCActionDragDrop38867_droppedOutsideTargetActions_runningActionsCount = obj38864_SCActionDragDrop38867_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj38864");
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
			window.obj38864_SCActionDragDrop38867_droppedOutsideTargetActions_runningActionsCount = window.obj38864_SCActionDragDrop38867_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj38864_SCActionDragDrop38867_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj38864_SCActionDragDrop38867_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj38864_SCActionDragDrop38867_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj38864_SCActionDragDrop38867_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj38864_SCActionDragDrop38867_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj38864_SCActionDragDrop38867_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj38864").trigger("obj38864_SCActionDragDrop38867_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38864) {
				console.warn("de-queueing event obj38864." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38864").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38864_SCActionDragDrop38867_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj38864_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38864_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj38864").trigger("obj38864_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38864) {
				console.warn("de-queueing event obj38864." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38864").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38864_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_38869();
function runjs_38869() {
	window.obj38864_droppedInsideTargetActions_runningActionsCount = obj38864_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj38884").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj38864_droppedInsideTargetActions_runningActionsCount = window.obj38864_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj38864_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj38864_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj38864_droppedInsideTargetActions_runningActionsCount == 0) {
	obj38864_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj38864_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38864_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj38864").trigger("obj38864_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38864) {
				console.warn("de-queueing event obj38864." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38864").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38864_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_38870();
function runjs_38870() {
	window.obj38864_droppedInsideTargetActions_runningActionsCount = obj38864_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj38884").css("border-color", "#C00000"); $("#obj38884").css("border-width", "2px"); $("#obj38884").css("border-style", "solid"); $("#obj38884").css("border-radius", "10px"); $("#obj38884").css("-webkit-border-radius", "10px"); $("#obj38884").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj38864_droppedInsideTargetActions_runningActionsCount = window.obj38864_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj38864_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj38864_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj38864_droppedInsideTargetActions_runningActionsCount == 0) {
	obj38864_droppedInsideTargetActions_actionGroup2();
}
	}, 1);
}







};
obj38864_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38864_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj38864").trigger("obj38864_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38864) {
				console.warn("de-queueing event obj38864." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38864").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38864_droppedInsideTargetActions_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj38882 
hide_38871();
function hide_38871() {
	var selector = "#obj38882";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj38864_droppedInsideTargetActions_runningActionsCount = obj38864_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj38864_droppedInsideTargetActions_runningActionsCount = window.obj38864_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj38864_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj38864_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj38864_droppedInsideTargetActions_runningActionsCount == 0) {
	obj38864_droppedInsideTargetActions_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_38871(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj38864_droppedInsideTargetActions_runningActionsCount = window.obj38864_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj38864_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj38864_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj38864_droppedInsideTargetActions_runningActionsCount == 0) {
	obj38864_droppedInsideTargetActions_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj38864_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38864_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj38864").trigger("obj38864_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38864) {
				console.warn("de-queueing event obj38864." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38864").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38864_droppedInsideTargetActions_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_38872();
function runjs_38872() {
	window.obj38864_droppedInsideTargetActions_runningActionsCount = obj38864_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj38864").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj38864_droppedInsideTargetActions_runningActionsCount = window.obj38864_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj38864_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj38864_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj38864_droppedInsideTargetActions_runningActionsCount == 0) {
	obj38864_droppedInsideTargetActions_actionGroup4();
}
	}, 1);
}







};
obj38864_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38864_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj38864").trigger("obj38864_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38864) {
				console.warn("de-queueing event obj38864." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38864").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38864_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_38873();
function switchText_38873() {
	window.obj38864_droppedInsideTargetActions_runningActionsCount = obj38864_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj38858_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj38858_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj38858").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj38858_content");
			setTimeout(function () {
				window.obj38864_droppedInsideTargetActions_runningActionsCount = window.obj38864_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj38864_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj38864_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj38864_droppedInsideTargetActions_runningActionsCount == 0) {
	obj38864_droppedInsideTargetActions_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj38858 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj38864_droppedInsideTargetActions_runningActionsCount = window.obj38864_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj38864_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj38864_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj38864_droppedInsideTargetActions_runningActionsCount == 0) {
	obj38864_droppedInsideTargetActions_actionGroup5();
}
		}, 1);
	}
}






};
obj38864_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38864_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj38864").trigger("obj38864_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38864) {
				console.warn("de-queueing event obj38864." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38864").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38864_droppedInsideTargetActions_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj38864 
move_38874();
function move_38874() {
	window.obj38864_droppedInsideTargetActions_runningActionsCount = obj38864_droppedInsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj38864");
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
			window.obj38864_droppedInsideTargetActions_runningActionsCount = window.obj38864_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj38864_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj38864_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj38864_droppedInsideTargetActions_runningActionsCount == 0) {
	obj38864_droppedInsideTargetActions_actionGroup6();
}
		}, 1);
	});
}



















};
obj38864_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38864_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj38864").trigger("obj38864_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38864) {
				console.warn("de-queueing event obj38864." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38864").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38864_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_38875();
function runjs_38875() {
	window.obj38864_droppedInsideTargetActions_runningActionsCount = obj38864_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj38884").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj38864_droppedInsideTargetActions_runningActionsCount = window.obj38864_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj38864_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj38864_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj38864_droppedInsideTargetActions_runningActionsCount == 0) {
	obj38864_droppedInsideTargetActions_actionGroup7();
}
	}, 1);
}







};
obj38864_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38864_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj38864").trigger("obj38864_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38864) {
				console.warn("de-queueing event obj38864." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38864").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38864_droppedInsideTargetActions_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_38876();
function runjs_38876() {
	window.obj38864_droppedInsideTargetActions_runningActionsCount = obj38864_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj38884").css("border-color", "#000000"); $("#obj38884").css("border-width", "1px"); $("#obj38884").css("border-style", "solid"); $("#obj38884").css("border-radius", "10px"); $("#obj38884").css("-webkit-border-radius", "10px"); $("#obj38884").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj38864_droppedInsideTargetActions_runningActionsCount = window.obj38864_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj38864_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj38864_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj38864_droppedInsideTargetActions_runningActionsCount == 0) {
	obj38864_droppedInsideTargetActions_actionGroup8();
}
	}, 1);
}







};
obj38864_droppedInsideTargetActions_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38864_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj38864").trigger("obj38864_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38864) {
				console.warn("de-queueing event obj38864." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38864").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38864_droppedInsideTargetActions_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj38882
(function(){
	window.obj38864_droppedInsideTargetActions_runningActionsCount = obj38864_droppedInsideTargetActions_runningActionsCount + 1;

	var selector = "#obj38882";
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
					window.obj38864_droppedInsideTargetActions_runningActionsCount = window.obj38864_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj38864_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj38864_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj38864_droppedInsideTargetActions_runningActionsCount == 0) {
	obj38864_droppedInsideTargetActions_actionGroup9();
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
				window.obj38864_droppedInsideTargetActions_runningActionsCount = window.obj38864_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj38864_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj38864_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj38864_droppedInsideTargetActions_runningActionsCount == 0) {
	obj38864_droppedInsideTargetActions_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj38864_droppedInsideTargetActions_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38864_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj38864").trigger("obj38864_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38864) {
				console.warn("de-queueing event obj38864." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38864").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38864_droppedInsideTargetActions_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_38878();
function runjs_38878() {
	window.obj38864_droppedInsideTargetActions_runningActionsCount = obj38864_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj38864").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj38864_droppedInsideTargetActions_runningActionsCount = window.obj38864_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj38864_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj38864_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj38864_droppedInsideTargetActions_runningActionsCount == 0) {
	obj38864_droppedInsideTargetActions_actionGroup10();
}
	}, 1);
}







};
obj38864_droppedInsideTargetActions_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38864_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj38864").trigger("obj38864_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38864) {
				console.warn("de-queueing event obj38864." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38864").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38864_droppedInsideTargetActions_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_38879();
function runjs_38879() {
	window.obj38864_droppedInsideTargetActions_runningActionsCount = obj38864_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj38864").css("border-color", "rgba(0,0,0,0)"); $("#obj38864").css("border-width", "0px"); $("#obj38864").css("border-style", "solid"); $("#obj38864").css("border-radius", "10px"); $("#obj38864").css("-webkit-border-radius", "10px"); $("#obj38864").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj38864_droppedInsideTargetActions_runningActionsCount = window.obj38864_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj38864_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj38864_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj38864_droppedInsideTargetActions_runningActionsCount == 0) {
	obj38864_droppedInsideTargetActions_actionGroup11();
}
	}, 1);
}







};
obj38864_droppedInsideTargetActions_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38864_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj38864").trigger("obj38864_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38864) {
				console.warn("de-queueing event obj38864." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38864").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38864_droppedInsideTargetActions_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj38843 
playAudio_38880();
function playAudio_38880() {
	window.obj38864_droppedInsideTargetActions_runningActionsCount = obj38864_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj38843")[0];
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
		    window.obj38864_droppedInsideTargetActions_runningActionsCount = window.obj38864_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj38864_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj38864_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj38864_droppedInsideTargetActions_runningActionsCount == 0) {
	obj38864_droppedInsideTargetActions_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj38864_droppedInsideTargetActions_runningActionsCount = window.obj38864_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj38864_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj38864_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj38864_droppedInsideTargetActions_runningActionsCount == 0) {
	obj38864_droppedInsideTargetActions_actionGroup12();
}
	}
}









};
obj38864_droppedInsideTargetActions_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38864_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj38864").trigger("obj38864_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38864) {
				console.warn("de-queueing event obj38864." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38864").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38864_droppedInsideTargetActions_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_38881();
function switchText_38881() {
	window.obj38864_droppedInsideTargetActions_runningActionsCount = obj38864_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj38858_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj38858_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj38858").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj38858_content");
			setTimeout(function () {
				window.obj38864_droppedInsideTargetActions_runningActionsCount = window.obj38864_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj38864_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj38864_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj38864_droppedInsideTargetActions_runningActionsCount == 0) {
	obj38864_droppedInsideTargetActions_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj38858 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj38864_droppedInsideTargetActions_runningActionsCount = window.obj38864_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj38864_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj38864_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj38864_droppedInsideTargetActions_runningActionsCount == 0) {
	obj38864_droppedInsideTargetActions_actionGroup13();
}
		}, 1);
	}
}






};
obj38864_droppedInsideTargetActions_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj38864_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj38864").trigger("obj38864_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38864) {
				console.warn("de-queueing event obj38864." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38864").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38864_droppedInsideTargetActions_activeActionGroupIndex = 13;
	





















};
obj38847_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38847_onTouchDown_activeActionGroupIndex = -1;
		$("#obj38847").trigger("obj38847_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38847) {
				console.warn("de-queueing event obj38847." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38847").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38847_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj38847");
//	action: dragDrop
//	target: obj38847 
dragDrop_38850();
function dragDrop_38850() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj38847_onTouchDown_runningActionsCount = obj38847_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj38847');
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
	  	containerNode = $('#obj38888');
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
    	window.obj38847_onTouchDown_runningActionsCount = window.obj38847_onTouchDown_runningActionsCount - 1;
if (window.obj38847_onTouchDown_runningActionsCount < 0) {
	window.obj38847_onTouchDown_runningActionsCount = 0;
} else if (window.obj38847_onTouchDown_runningActionsCount == 0) {
	obj38847_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj38884");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_38850 = false;
    	var dropped_id_38850;
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
					dropped_38850 = true;
					dropped_id_38850 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_38850) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj38847").trigger('SCActionDragDrop38850_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj38847_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj38847_onTouchDown_activeActionGroupIndex = -1;
		$("#obj38847").trigger("obj38847_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38847) {
				console.warn("de-queueing event obj38847." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38847").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38847_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj38847_SCActionDragDrop38850_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38847_SCActionDragDrop38850_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj38847").trigger("obj38847_SCActionDragDrop38850_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38847) {
				console.warn("de-queueing event obj38847." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38847").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38847_SCActionDragDrop38850_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj38847 
move_92585();
function move_92585() {
	window.obj38847_SCActionDragDrop38850_droppedOutsideTargetActions_runningActionsCount = obj38847_SCActionDragDrop38850_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj38847");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 344;
	var moveY = 538;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj38847_SCActionDragDrop38850_droppedOutsideTargetActions_runningActionsCount = window.obj38847_SCActionDragDrop38850_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj38847_SCActionDragDrop38850_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj38847_SCActionDragDrop38850_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj38847_SCActionDragDrop38850_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj38847_SCActionDragDrop38850_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj38847_SCActionDragDrop38850_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj38847_SCActionDragDrop38850_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj38847").trigger("obj38847_SCActionDragDrop38850_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38847) {
				console.warn("de-queueing event obj38847." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38847").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38847_SCActionDragDrop38850_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj38847_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38847_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj38847").trigger("obj38847_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38847) {
				console.warn("de-queueing event obj38847." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38847").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38847_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_38852();
function runjs_38852() {
	window.obj38847_droppedInsideTargetActions_runningActionsCount = obj38847_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj38884").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj38847_droppedInsideTargetActions_runningActionsCount = window.obj38847_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj38847_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj38847_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj38847_droppedInsideTargetActions_runningActionsCount == 0) {
	obj38847_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj38847_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38847_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj38847").trigger("obj38847_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38847) {
				console.warn("de-queueing event obj38847." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38847").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38847_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_38856();
function switchText_38856() {
	window.obj38847_droppedInsideTargetActions_runningActionsCount = obj38847_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj38858_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj38858_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj38858").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj38858_content");
			setTimeout(function () {
				window.obj38847_droppedInsideTargetActions_runningActionsCount = window.obj38847_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj38847_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj38847_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj38847_droppedInsideTargetActions_runningActionsCount == 0) {
	obj38847_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj38858 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj38847_droppedInsideTargetActions_runningActionsCount = window.obj38847_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj38847_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj38847_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj38847_droppedInsideTargetActions_runningActionsCount == 0) {
	obj38847_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj38847_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38847_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj38847").trigger("obj38847_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38847) {
				console.warn("de-queueing event obj38847." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38847").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38847_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_38853();
function runjs_38853() {
	window.obj38847_droppedInsideTargetActions_runningActionsCount = obj38847_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj38884").css("border-color", "#058E3F"); $("#obj38884").css("border-width", "2px"); $("#obj38884").css("border-style", "solid"); $("#obj38884").css("border-radius", "10px"); $("#obj38884").css("-webkit-border-radius", "10px"); $("#obj38884").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj38847_droppedInsideTargetActions_runningActionsCount = window.obj38847_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj38847_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj38847_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj38847_droppedInsideTargetActions_runningActionsCount == 0) {
	obj38847_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj38847_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38847_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj38847").trigger("obj38847_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38847) {
				console.warn("de-queueing event obj38847." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38847").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38847_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj38882 
hide_38854();
function hide_38854() {
	var selector = "#obj38882";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj38847_droppedInsideTargetActions_runningActionsCount = obj38847_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj38847_droppedInsideTargetActions_runningActionsCount = window.obj38847_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj38847_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj38847_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj38847_droppedInsideTargetActions_runningActionsCount == 0) {
	obj38847_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_38854(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj38847_droppedInsideTargetActions_runningActionsCount = window.obj38847_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj38847_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj38847_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj38847_droppedInsideTargetActions_runningActionsCount == 0) {
	obj38847_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj38847_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38847_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj38847").trigger("obj38847_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38847) {
				console.warn("de-queueing event obj38847." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38847").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38847_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_38855();
function runjs_38855() {
	window.obj38847_droppedInsideTargetActions_runningActionsCount = obj38847_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj38847").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj38847_droppedInsideTargetActions_runningActionsCount = window.obj38847_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj38847_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj38847_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj38847_droppedInsideTargetActions_runningActionsCount == 0) {
	obj38847_droppedInsideTargetActions_actionGroup5();
}
	}, 1);
}







};
obj38847_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38847_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj38847").trigger("obj38847_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38847) {
				console.warn("de-queueing event obj38847." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38847").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38847_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj38862 
playAudio_38857();
function playAudio_38857() {
	window.obj38847_droppedInsideTargetActions_runningActionsCount = obj38847_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj38862")[0];
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
		    window.obj38847_droppedInsideTargetActions_runningActionsCount = window.obj38847_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj38847_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj38847_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj38847_droppedInsideTargetActions_runningActionsCount == 0) {
	obj38847_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj38847_droppedInsideTargetActions_runningActionsCount = window.obj38847_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj38847_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj38847_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj38847_droppedInsideTargetActions_runningActionsCount == 0) {
	obj38847_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj38847_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38847_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj38847").trigger("obj38847_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38847) {
				console.warn("de-queueing event obj38847." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38847").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38847_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90469();
function switchText_90469() {
	window.obj38847_droppedInsideTargetActions_runningActionsCount = obj38847_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj38858_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj38858_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj38858").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj38858_content");
			setTimeout(function () {
				window.obj38847_droppedInsideTargetActions_runningActionsCount = window.obj38847_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj38847_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj38847_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj38847_droppedInsideTargetActions_runningActionsCount == 0) {
	obj38847_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj38858 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj38847_droppedInsideTargetActions_runningActionsCount = window.obj38847_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj38847_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj38847_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj38847_droppedInsideTargetActions_runningActionsCount == 0) {
	obj38847_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj38847_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj38847_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj38847").trigger("obj38847_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38847) {
				console.warn("de-queueing event obj38847." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38847").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38847_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj67086_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67086_onTap_activeActionGroupIndex = -1;
		$("#obj67086").trigger("obj67086_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67086) {
				console.warn("de-queueing event obj67086." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67086").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67086_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj67086 
hide_67089();
function hide_67089() {
	var selector = "#obj67086";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj67086_onTap_runningActionsCount = obj67086_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj67086_onTap_runningActionsCount = window.obj67086_onTap_runningActionsCount - 1;
if (window.obj67086_onTap_runningActionsCount < 0) {
	window.obj67086_onTap_runningActionsCount = 0;
} else if (window.obj67086_onTap_runningActionsCount == 0) {
	obj67086_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_67089(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj67086_onTap_runningActionsCount = window.obj67086_onTap_runningActionsCount - 1;
if (window.obj67086_onTap_runningActionsCount < 0) {
	window.obj67086_onTap_runningActionsCount = 0;
} else if (window.obj67086_onTap_runningActionsCount == 0) {
	obj67086_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj67092 
stopMovie_67088();
function stopMovie_67088() {
	window.obj67086_onTap_runningActionsCount = obj67086_onTap_runningActionsCount + 1;
	var myVideo = $("#obj67092")[0];
	myVideo.pause();
	window.obj67086_onTap_runningActionsCount = window.obj67086_onTap_runningActionsCount - 1;
if (window.obj67086_onTap_runningActionsCount < 0) {
	window.obj67086_onTap_runningActionsCount = 0;
} else if (window.obj67086_onTap_runningActionsCount == 0) {
	obj67086_onTap_actionGroup1();
}
}
















};
obj67086_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67086_onTap_activeActionGroupIndex = -1;
		$("#obj67086").trigger("obj67086_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67086) {
				console.warn("de-queueing event obj67086." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67086").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67086_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj67078
(function(){
	window.obj67086_onTap_runningActionsCount = obj67086_onTap_runningActionsCount + 1;

	var selector = "#obj67078";
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
					window.obj67086_onTap_runningActionsCount = window.obj67086_onTap_runningActionsCount - 1;
if (window.obj67086_onTap_runningActionsCount < 0) {
	window.obj67086_onTap_runningActionsCount = 0;
} else if (window.obj67086_onTap_runningActionsCount == 0) {
	obj67086_onTap_actionGroup2();
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
				window.obj67086_onTap_runningActionsCount = window.obj67086_onTap_runningActionsCount - 1;
if (window.obj67086_onTap_runningActionsCount < 0) {
	window.obj67086_onTap_runningActionsCount = 0;
} else if (window.obj67086_onTap_runningActionsCount == 0) {
	obj67086_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj67086_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67086_onTap_activeActionGroupIndex = -1;
		$("#obj67086").trigger("obj67086_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67086) {
				console.warn("de-queueing event obj67086." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67086").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67086_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj67092 
move_67091();
function move_67091() {
	window.obj67086_onTap_runningActionsCount = obj67086_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj67092");
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
			window.obj67086_onTap_runningActionsCount = window.obj67086_onTap_runningActionsCount - 1;
if (window.obj67086_onTap_runningActionsCount < 0) {
	window.obj67086_onTap_runningActionsCount = 0;
} else if (window.obj67086_onTap_runningActionsCount == 0) {
	obj67086_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj67086_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj67086_onTap_activeActionGroupIndex = -1;
		$("#obj67086").trigger("obj67086_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67086) {
				console.warn("de-queueing event obj67086." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67086").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67086_onTap_activeActionGroupIndex = 3;
	





















};
obj67078_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67078_onTap_activeActionGroupIndex = -1;
		$("#obj67078").trigger("obj67078_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67078) {
				console.warn("de-queueing event obj67078." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67078").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67078_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj67078 
hide_67081();
function hide_67081() {
	var selector = "#obj67078";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj67078_onTap_runningActionsCount = obj67078_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj67078_onTap_runningActionsCount = window.obj67078_onTap_runningActionsCount - 1;
if (window.obj67078_onTap_runningActionsCount < 0) {
	window.obj67078_onTap_runningActionsCount = 0;
} else if (window.obj67078_onTap_runningActionsCount == 0) {
	obj67078_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_67081(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj67078_onTap_runningActionsCount = window.obj67078_onTap_runningActionsCount - 1;
if (window.obj67078_onTap_runningActionsCount < 0) {
	window.obj67078_onTap_runningActionsCount = 0;
} else if (window.obj67078_onTap_runningActionsCount == 0) {
	obj67078_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj67092 
playPauseMovie_67080();
function playPauseMovie_67080() {
	window.obj67078_onTap_runningActionsCount = obj67078_onTap_runningActionsCount + 1;
	var myVideo = $("#obj67092")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj67078_onTap_runningActionsCount = window.obj67078_onTap_runningActionsCount - 1;
if (window.obj67078_onTap_runningActionsCount < 0) {
	window.obj67078_onTap_runningActionsCount = 0;
} else if (window.obj67078_onTap_runningActionsCount == 0) {
	obj67078_onTap_actionGroup1();
}
}

















};
obj67078_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67078_onTap_activeActionGroupIndex = -1;
		$("#obj67078").trigger("obj67078_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67078) {
				console.warn("de-queueing event obj67078." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67078").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67078_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj67086
(function(){
	window.obj67078_onTap_runningActionsCount = obj67078_onTap_runningActionsCount + 1;

	var selector = "#obj67086";
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
					window.obj67078_onTap_runningActionsCount = window.obj67078_onTap_runningActionsCount - 1;
if (window.obj67078_onTap_runningActionsCount < 0) {
	window.obj67078_onTap_runningActionsCount = 0;
} else if (window.obj67078_onTap_runningActionsCount == 0) {
	obj67078_onTap_actionGroup2();
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
				window.obj67078_onTap_runningActionsCount = window.obj67078_onTap_runningActionsCount - 1;
if (window.obj67078_onTap_runningActionsCount < 0) {
	window.obj67078_onTap_runningActionsCount = 0;
} else if (window.obj67078_onTap_runningActionsCount == 0) {
	obj67078_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj67078_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67078_onTap_activeActionGroupIndex = -1;
		$("#obj67078").trigger("obj67078_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67078) {
				console.warn("de-queueing event obj67078." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67078").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67078_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj67092 
move_67083();
function move_67083() {
	window.obj67078_onTap_runningActionsCount = obj67078_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj67092");
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
			window.obj67078_onTap_runningActionsCount = window.obj67078_onTap_runningActionsCount - 1;
if (window.obj67078_onTap_runningActionsCount < 0) {
	window.obj67078_onTap_runningActionsCount = 0;
} else if (window.obj67078_onTap_runningActionsCount == 0) {
	obj67078_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj67078_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj67078_onTap_activeActionGroupIndex = -1;
		$("#obj67078").trigger("obj67078_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67078) {
				console.warn("de-queueing event obj67078." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67078").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67078_onTap_activeActionGroupIndex = 3;
	





















};
obj88429_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88429_onTap_activeActionGroupIndex = -1;
		$("#obj88429").trigger("obj88429_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88429) {
				console.warn("de-queueing event obj88429." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88429").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88429_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj88434 
stopAudio_88431();
function stopAudio_88431() {
	window.obj88429_onTap_runningActionsCount = obj88429_onTap_runningActionsCount + 1;
	var myAudio = $("#obj88434")[0];
	myAudio.pause();
	window.obj88429_onTap_runningActionsCount = window.obj88429_onTap_runningActionsCount - 1;
if (window.obj88429_onTap_runningActionsCount < 0) {
	window.obj88429_onTap_runningActionsCount = 0;
} else if (window.obj88429_onTap_runningActionsCount == 0) {
	obj88429_onTap_actionGroup1();
}
}








};
obj88429_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88429_onTap_activeActionGroupIndex = -1;
		$("#obj88429").trigger("obj88429_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88429) {
				console.warn("de-queueing event obj88429." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88429").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88429_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj88429 
hide_88432();
function hide_88432() {
	var selector = "#obj88429";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj88429_onTap_runningActionsCount = obj88429_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj88429_onTap_runningActionsCount = window.obj88429_onTap_runningActionsCount - 1;
if (window.obj88429_onTap_runningActionsCount < 0) {
	window.obj88429_onTap_runningActionsCount = 0;
} else if (window.obj88429_onTap_runningActionsCount == 0) {
	obj88429_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_88432(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj88429_onTap_runningActionsCount = window.obj88429_onTap_runningActionsCount - 1;
if (window.obj88429_onTap_runningActionsCount < 0) {
	window.obj88429_onTap_runningActionsCount = 0;
} else if (window.obj88429_onTap_runningActionsCount == 0) {
	obj88429_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj88429_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88429_onTap_activeActionGroupIndex = -1;
		$("#obj88429").trigger("obj88429_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88429) {
				console.warn("de-queueing event obj88429." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88429").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88429_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj88424
(function(){
	window.obj88429_onTap_runningActionsCount = obj88429_onTap_runningActionsCount + 1;

	var selector = "#obj88424";
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
					window.obj88429_onTap_runningActionsCount = window.obj88429_onTap_runningActionsCount - 1;
if (window.obj88429_onTap_runningActionsCount < 0) {
	window.obj88429_onTap_runningActionsCount = 0;
} else if (window.obj88429_onTap_runningActionsCount == 0) {
	obj88429_onTap_actionGroup3();
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
				window.obj88429_onTap_runningActionsCount = window.obj88429_onTap_runningActionsCount - 1;
if (window.obj88429_onTap_runningActionsCount < 0) {
	window.obj88429_onTap_runningActionsCount = 0;
} else if (window.obj88429_onTap_runningActionsCount == 0) {
	obj88429_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj88429_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj88429_onTap_activeActionGroupIndex = -1;
		$("#obj88429").trigger("obj88429_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88429) {
				console.warn("de-queueing event obj88429." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88429").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88429_onTap_activeActionGroupIndex = 3;
	





















};
obj88424_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88424_onTap_activeActionGroupIndex = -1;
		$("#obj88424").trigger("obj88424_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88424) {
				console.warn("de-queueing event obj88424." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88424").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88424_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj88424 
hide_88426();
function hide_88426() {
	var selector = "#obj88424";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj88424_onTap_runningActionsCount = obj88424_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj88424_onTap_runningActionsCount = window.obj88424_onTap_runningActionsCount - 1;
if (window.obj88424_onTap_runningActionsCount < 0) {
	window.obj88424_onTap_runningActionsCount = 0;
} else if (window.obj88424_onTap_runningActionsCount == 0) {
	obj88424_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_88426(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj88424_onTap_runningActionsCount = window.obj88424_onTap_runningActionsCount - 1;
if (window.obj88424_onTap_runningActionsCount < 0) {
	window.obj88424_onTap_runningActionsCount = 0;
} else if (window.obj88424_onTap_runningActionsCount == 0) {
	obj88424_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj88424_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88424_onTap_activeActionGroupIndex = -1;
		$("#obj88424").trigger("obj88424_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88424) {
				console.warn("de-queueing event obj88424." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88424").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88424_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj88429
(function(){
	window.obj88424_onTap_runningActionsCount = obj88424_onTap_runningActionsCount + 1;

	var selector = "#obj88429";
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
					window.obj88424_onTap_runningActionsCount = window.obj88424_onTap_runningActionsCount - 1;
if (window.obj88424_onTap_runningActionsCount < 0) {
	window.obj88424_onTap_runningActionsCount = 0;
} else if (window.obj88424_onTap_runningActionsCount == 0) {
	obj88424_onTap_actionGroup2();
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
				window.obj88424_onTap_runningActionsCount = window.obj88424_onTap_runningActionsCount - 1;
if (window.obj88424_onTap_runningActionsCount < 0) {
	window.obj88424_onTap_runningActionsCount = 0;
} else if (window.obj88424_onTap_runningActionsCount == 0) {
	obj88424_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj88424_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88424_onTap_activeActionGroupIndex = -1;
		$("#obj88424").trigger("obj88424_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88424) {
				console.warn("de-queueing event obj88424." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88424").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88424_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj88434 
playAudio_88428();
function playAudio_88428() {
	window.obj88424_onTap_runningActionsCount = obj88424_onTap_runningActionsCount + 1;
	var myAudio = $("#obj88434")[0];
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
		    window.obj88424_onTap_runningActionsCount = window.obj88424_onTap_runningActionsCount - 1;
if (window.obj88424_onTap_runningActionsCount < 0) {
	window.obj88424_onTap_runningActionsCount = 0;
} else if (window.obj88424_onTap_runningActionsCount == 0) {
	obj88424_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj88424_onTap_runningActionsCount = window.obj88424_onTap_runningActionsCount - 1;
if (window.obj88424_onTap_runningActionsCount < 0) {
	window.obj88424_onTap_runningActionsCount = 0;
} else if (window.obj88424_onTap_runningActionsCount == 0) {
	obj88424_onTap_actionGroup3();
}
	}
}









};
obj88424_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj88424_onTap_activeActionGroupIndex = -1;
		$("#obj88424").trigger("obj88424_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88424) {
				console.warn("de-queueing event obj88424." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88424").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88424_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj38903: Event Touch Down
 *
 */
$("#obj38903").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj38903_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj38903_onTap is still running");
	return;
}
var obj38903_onTap_runningActionsCount = 0;
var obj38903_onTap_loopCount = 0;
obj38903_onTap_actionGroup0();
});










/*
 *
 *   obj38900: Event Touch Down
 *
 */
$("#obj38900").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj38900_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj38900_onTap is still running");
	return;
}
var obj38900_onTap_runningActionsCount = 0;
var obj38900_onTap_loopCount = 0;
obj38900_onTap_actionGroup0();
});










/*
 *
 *   obj38896: Event Touch Down
 *
 */
$("#obj38896").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj38896_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj38896_onTap is still running");
	return;
}
var obj38896_onTap_runningActionsCount = 0;
var obj38896_onTap_loopCount = 0;
obj38896_onTap_actionGroup0();
});

















































































/*
 *
 *   obj38864: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj38864");
	var winTarget = document.getElementById("obj38864");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj38864").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj38864_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj38864_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj38864_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj38864_onTouchDown is still running");
	return;
}
var obj38864_onTouchDown_runningActionsCount = 0;
var obj38864_onTouchDown_loopCount = 0;
obj38864_onTouchDown_actionGroup0();
});



/*
 *
 *   obj38864: Event SCActionDragDrop38867_droppedOutsideTargetActions
 *
 */
$("#obj38864").bind("SCActionDragDrop38867_droppedOutsideTargetActions", function(event) {
	if (window.obj38864_SCActionDragDrop38867_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj38864_SCActionDragDrop38867_droppedOutsideTargetActions is still running");
	return;
}
var obj38864_SCActionDragDrop38867_droppedOutsideTargetActions_runningActionsCount = 0;
var obj38864_SCActionDragDrop38867_droppedOutsideTargetActions_loopCount = 0;
obj38864_SCActionDragDrop38867_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj38864: Event droppedInsideTargetActions
 *
 */
$("#obj38864").bind("droppedInsideTargetActions", function(event) {
	if (window.obj38864_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj38864_droppedInsideTargetActions is still running");
	return;
}
var obj38864_droppedInsideTargetActions_runningActionsCount = 0;
var obj38864_droppedInsideTargetActions_loopCount = 0;
obj38864_droppedInsideTargetActions_actionGroup0();
});




































/*
 *
 *   obj38847: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj38847");
	var winTarget = document.getElementById("obj38847");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj38847").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj38847_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj38847_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj38847_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj38847_onTouchDown is still running");
	return;
}
var obj38847_onTouchDown_runningActionsCount = 0;
var obj38847_onTouchDown_loopCount = 0;
obj38847_onTouchDown_actionGroup0();
});



/*
 *
 *   obj38847: Event SCActionDragDrop38850_droppedOutsideTargetActions
 *
 */
$("#obj38847").bind("SCActionDragDrop38850_droppedOutsideTargetActions", function(event) {
	if (window.obj38847_SCActionDragDrop38850_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj38847_SCActionDragDrop38850_droppedOutsideTargetActions is still running");
	return;
}
var obj38847_SCActionDragDrop38850_droppedOutsideTargetActions_runningActionsCount = 0;
var obj38847_SCActionDragDrop38850_droppedOutsideTargetActions_loopCount = 0;
obj38847_SCActionDragDrop38850_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj38847: Event droppedInsideTargetActions
 *
 */
$("#obj38847").bind("droppedInsideTargetActions", function(event) {
	if (window.obj38847_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj38847_droppedInsideTargetActions is still running");
	return;
}
var obj38847_droppedInsideTargetActions_runningActionsCount = 0;
var obj38847_droppedInsideTargetActions_loopCount = 0;
obj38847_droppedInsideTargetActions_actionGroup0();
});

























/*
 *
 *   obj67086: Event Touch Down
 *
 */
$("#obj67086").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj67086_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj67086_onTap is still running");
	return;
}
var obj67086_onTap_runningActionsCount = 0;
var obj67086_onTap_loopCount = 0;
obj67086_onTap_actionGroup0();
});










/*
 *
 *   obj67078: Event Touch Down
 *
 */
$("#obj67078").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj67078_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj67078_onTap is still running");
	return;
}
var obj67078_onTap_runningActionsCount = 0;
var obj67078_onTap_loopCount = 0;
obj67078_onTap_actionGroup0();
});










/*
 *
 *   obj88429: Event Touch Down
 *
 */
$("#obj88429").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj88429_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj88429_onTap is still running");
	return;
}
var obj88429_onTap_runningActionsCount = 0;
var obj88429_onTap_loopCount = 0;
obj88429_onTap_actionGroup0();
});










/*
 *
 *   obj88424: Event Touch Down
 *
 */
$("#obj88424").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj88424_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj88424_onTap is still running");
	return;
}
var obj88424_onTap_runningActionsCount = 0;
var obj88424_onTap_loopCount = 0;
obj88424_onTap_actionGroup0();
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
	
$("#obj38919").trigger('SCEventShow');
$("#obj38903").trigger('SCEventShow');
$("#obj38900").trigger('SCEventShow');
$("#obj38896").trigger('SCEventShow');
$("#obj38894").trigger('SCEventShow');
$("#obj38892").trigger('SCEventShow');
$("#obj38890").trigger('SCEventShow');
$("#obj38888").trigger('SCEventShow');
$("#obj38886").trigger('SCEventShow');
$("#obj38884").trigger('SCEventShow');
$("#obj38882").trigger('SCEventShow');
$("#obj38864").trigger('SCEventShow');
$("#obj38862").trigger('SCEventShow');
$("#obj38860").trigger('SCEventShow');
$("#obj38858").trigger('SCEventShow');
$("#obj38847").trigger('SCEventShow');
$("#obj38845").trigger('SCEventShow');
$("#obj38843").trigger('SCEventShow');
$("#obj67086").trigger('SCEventShow');
$("#obj67078").trigger('SCEventShow');
$("#obj88429").trigger('SCEventShow');
$("#obj88424").trigger('SCEventShow');
$("#obj88434").trigger('SCEventShow');
$("#obj94889").trigger('SCEventShow');
$("#obj67092").trigger('SCEventShow');
	
});