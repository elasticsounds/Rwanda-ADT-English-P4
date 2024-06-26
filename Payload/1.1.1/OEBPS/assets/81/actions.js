pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 21736;
pubcoder.page.title = pubcoder.page.title || "81";
pubcoder.page.number = pubcoder.page.number || 81;
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
var obj77530_onTap_activeActionGroupIndex = -1;
var obj77530_onTap_runningActionsCount = 0;
var obj77530_onTap_loopCount = 0;
var obj77527_onTap_activeActionGroupIndex = -1;
var obj77527_onTap_runningActionsCount = 0;
var obj77527_onTap_loopCount = 0;
var obj77523_onTap_activeActionGroupIndex = -1;
var obj77523_onTap_runningActionsCount = 0;
var obj77523_onTap_loopCount = 0;
var obj77491_onDrag_activeActionGroupIndex = -1;
var obj77491_onDrag_runningActionsCount = 0;
var obj77491_onDrag_loopCount = 0;
var obj77491_onTouchDown_activeActionGroupIndex = -1;
var obj77491_onTouchDown_runningActionsCount = 0;
var obj77491_onTouchDown_loopCount = 0;
var obj77491_SCActionDragDrop77494_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj77491_SCActionDragDrop77494_droppedOutsideTargetActions_runningActionsCount = 0;
var obj77491_SCActionDragDrop77494_droppedOutsideTargetActions_loopCount = 0;
var obj77491_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj77491_droppedInsideTargetActions_runningActionsCount = 0;
var obj77491_droppedInsideTargetActions_loopCount = 0;
var obj77474_onDrag_activeActionGroupIndex = -1;
var obj77474_onDrag_runningActionsCount = 0;
var obj77474_onDrag_loopCount = 0;
var obj77474_onTouchDown_activeActionGroupIndex = -1;
var obj77474_onTouchDown_runningActionsCount = 0;
var obj77474_onTouchDown_loopCount = 0;
var obj77474_SCActionDragDrop77477_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj77474_SCActionDragDrop77477_droppedOutsideTargetActions_runningActionsCount = 0;
var obj77474_SCActionDragDrop77477_droppedOutsideTargetActions_loopCount = 0;
var obj77474_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj77474_droppedInsideTargetActions_runningActionsCount = 0;
var obj77474_droppedInsideTargetActions_loopCount = 0;
var obj77452_onTap_activeActionGroupIndex = -1;
var obj77452_onTap_runningActionsCount = 0;
var obj77452_onTap_loopCount = 0;
var obj77444_onTap_activeActionGroupIndex = -1;
var obj77444_onTap_runningActionsCount = 0;
var obj77444_onTap_loopCount = 0;
var obj87833_onTap_activeActionGroupIndex = -1;
var obj87833_onTap_runningActionsCount = 0;
var obj87833_onTap_loopCount = 0;
var obj87828_onTap_activeActionGroupIndex = -1;
var obj87828_onTap_runningActionsCount = 0;
var obj87828_onTap_loopCount = 0;
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
		
obj77530_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj77530_onTap_activeActionGroupIndex = -1;
		$("#obj77530").trigger("obj77530_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77530) {
				console.warn("de-queueing event obj77530." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77530").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77530_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_77532();
function goToPage_77532() {
	window.obj77530_onTap_runningActionsCount = obj77530_onTap_runningActionsCount + 1;
	$("#anchor477")[0].click();
	window.obj77530_onTap_runningActionsCount = window.obj77530_onTap_runningActionsCount - 1;
if (window.obj77530_onTap_runningActionsCount < 0) {
	window.obj77530_onTap_runningActionsCount = 0;
} else if (window.obj77530_onTap_runningActionsCount == 0) {
	obj77530_onTap_actionGroup1();
}
}





















};
obj77530_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj77530_onTap_activeActionGroupIndex = -1;
		$("#obj77530").trigger("obj77530_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77530) {
				console.warn("de-queueing event obj77530." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77530").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77530_onTap_activeActionGroupIndex = 1;
	





















};
obj77527_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj77527_onTap_activeActionGroupIndex = -1;
		$("#obj77527").trigger("obj77527_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77527) {
				console.warn("de-queueing event obj77527." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77527").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77527_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_77529();
function goToPage_77529() {
	window.obj77527_onTap_runningActionsCount = obj77527_onTap_runningActionsCount + 1;
	$("#anchor478")[0].click();
	window.obj77527_onTap_runningActionsCount = window.obj77527_onTap_runningActionsCount - 1;
if (window.obj77527_onTap_runningActionsCount < 0) {
	window.obj77527_onTap_runningActionsCount = 0;
} else if (window.obj77527_onTap_runningActionsCount == 0) {
	obj77527_onTap_actionGroup1();
}
}





















};
obj77527_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj77527_onTap_activeActionGroupIndex = -1;
		$("#obj77527").trigger("obj77527_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77527) {
				console.warn("de-queueing event obj77527." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77527").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77527_onTap_activeActionGroupIndex = 1;
	





















};
obj77523_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj77523_onTap_activeActionGroupIndex = -1;
		$("#obj77523").trigger("obj77523_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77523) {
				console.warn("de-queueing event obj77523." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77523").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77523_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_77525();
function goToPage_77525() {
	window.obj77523_onTap_runningActionsCount = obj77523_onTap_runningActionsCount + 1;
	$("#anchor479")[0].click();
	window.obj77523_onTap_runningActionsCount = window.obj77523_onTap_runningActionsCount - 1;
if (window.obj77523_onTap_runningActionsCount < 0) {
	window.obj77523_onTap_runningActionsCount = 0;
} else if (window.obj77523_onTap_runningActionsCount == 0) {
	obj77523_onTap_actionGroup1();
}
}





















};
obj77523_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj77523_onTap_activeActionGroupIndex = -1;
		$("#obj77523").trigger("obj77523_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77523) {
				console.warn("de-queueing event obj77523." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77523").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77523_onTap_activeActionGroupIndex = 1;
	





















};
obj77491_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj77491_onTouchDown_activeActionGroupIndex = -1;
		$("#obj77491").trigger("obj77491_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77491) {
				console.warn("de-queueing event obj77491." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77491").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77491_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj77491");
//	action: dragDrop
//	target: obj77491 
dragDrop_77494();
function dragDrop_77494() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj77491_onTouchDown_runningActionsCount = obj77491_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj77491');
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
	  	containerNode = $('#obj77515');
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
    	window.obj77491_onTouchDown_runningActionsCount = window.obj77491_onTouchDown_runningActionsCount - 1;
if (window.obj77491_onTouchDown_runningActionsCount < 0) {
	window.obj77491_onTouchDown_runningActionsCount = 0;
} else if (window.obj77491_onTouchDown_runningActionsCount == 0) {
	obj77491_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj77511");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_77494 = false;
    	var dropped_id_77494;
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
					dropped_77494 = true;
					dropped_id_77494 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_77494) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj77491").trigger('SCActionDragDrop77494_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj77491_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj77491_onTouchDown_activeActionGroupIndex = -1;
		$("#obj77491").trigger("obj77491_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77491) {
				console.warn("de-queueing event obj77491." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77491").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77491_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj77491_SCActionDragDrop77494_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj77491_SCActionDragDrop77494_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj77491").trigger("obj77491_SCActionDragDrop77494_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77491) {
				console.warn("de-queueing event obj77491." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77491").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77491_SCActionDragDrop77494_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj77491 
move_92344();
function move_92344() {
	window.obj77491_SCActionDragDrop77494_droppedOutsideTargetActions_runningActionsCount = obj77491_SCActionDragDrop77494_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj77491");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 123;
	var moveY = 518;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj77491_SCActionDragDrop77494_droppedOutsideTargetActions_runningActionsCount = window.obj77491_SCActionDragDrop77494_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj77491_SCActionDragDrop77494_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj77491_SCActionDragDrop77494_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj77491_SCActionDragDrop77494_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj77491_SCActionDragDrop77494_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj77491_SCActionDragDrop77494_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj77491_SCActionDragDrop77494_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj77491").trigger("obj77491_SCActionDragDrop77494_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77491) {
				console.warn("de-queueing event obj77491." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77491").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77491_SCActionDragDrop77494_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj77491_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj77491_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj77491").trigger("obj77491_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77491) {
				console.warn("de-queueing event obj77491." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77491").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77491_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_77496();
function runjs_77496() {
	window.obj77491_droppedInsideTargetActions_runningActionsCount = obj77491_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj77511").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj77491_droppedInsideTargetActions_runningActionsCount = window.obj77491_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj77491_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj77491_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj77491_droppedInsideTargetActions_runningActionsCount == 0) {
	obj77491_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj77491_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj77491_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj77491").trigger("obj77491_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77491) {
				console.warn("de-queueing event obj77491." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77491").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77491_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_77497();
function runjs_77497() {
	window.obj77491_droppedInsideTargetActions_runningActionsCount = obj77491_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj77511").css("border-color", "#C00000"); $("#obj77511").css("border-width", "2px"); $("#obj77511").css("border-style", "solid"); $("#obj77511").css("border-radius", "10px"); $("#obj77511").css("-webkit-border-radius", "10px"); $("#obj77511").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj77491_droppedInsideTargetActions_runningActionsCount = window.obj77491_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj77491_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj77491_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj77491_droppedInsideTargetActions_runningActionsCount == 0) {
	obj77491_droppedInsideTargetActions_actionGroup2();
}
	}, 1);
}







};
obj77491_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj77491_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj77491").trigger("obj77491_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77491) {
				console.warn("de-queueing event obj77491." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77491").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77491_droppedInsideTargetActions_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj77509 
hide_77498();
function hide_77498() {
	var selector = "#obj77509";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj77491_droppedInsideTargetActions_runningActionsCount = obj77491_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj77491_droppedInsideTargetActions_runningActionsCount = window.obj77491_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj77491_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj77491_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj77491_droppedInsideTargetActions_runningActionsCount == 0) {
	obj77491_droppedInsideTargetActions_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_77498(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj77491_droppedInsideTargetActions_runningActionsCount = window.obj77491_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj77491_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj77491_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj77491_droppedInsideTargetActions_runningActionsCount == 0) {
	obj77491_droppedInsideTargetActions_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj77491_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj77491_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj77491").trigger("obj77491_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77491) {
				console.warn("de-queueing event obj77491." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77491").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77491_droppedInsideTargetActions_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_77499();
function runjs_77499() {
	window.obj77491_droppedInsideTargetActions_runningActionsCount = obj77491_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj77491").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj77491_droppedInsideTargetActions_runningActionsCount = window.obj77491_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj77491_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj77491_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj77491_droppedInsideTargetActions_runningActionsCount == 0) {
	obj77491_droppedInsideTargetActions_actionGroup4();
}
	}, 1);
}







};
obj77491_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj77491_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj77491").trigger("obj77491_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77491) {
				console.warn("de-queueing event obj77491." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77491").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77491_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_77500();
function switchText_77500() {
	window.obj77491_droppedInsideTargetActions_runningActionsCount = obj77491_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj77485_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj77485_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj77485").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj77485_content");
			setTimeout(function () {
				window.obj77491_droppedInsideTargetActions_runningActionsCount = window.obj77491_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj77491_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj77491_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj77491_droppedInsideTargetActions_runningActionsCount == 0) {
	obj77491_droppedInsideTargetActions_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj77485 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj77491_droppedInsideTargetActions_runningActionsCount = window.obj77491_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj77491_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj77491_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj77491_droppedInsideTargetActions_runningActionsCount == 0) {
	obj77491_droppedInsideTargetActions_actionGroup5();
}
		}, 1);
	}
}






};
obj77491_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj77491_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj77491").trigger("obj77491_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77491) {
				console.warn("de-queueing event obj77491." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77491").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77491_droppedInsideTargetActions_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj77491 
move_77501();
function move_77501() {
	window.obj77491_droppedInsideTargetActions_runningActionsCount = obj77491_droppedInsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj77491");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 123;
	var moveY = 518;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj77491_droppedInsideTargetActions_runningActionsCount = window.obj77491_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj77491_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj77491_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj77491_droppedInsideTargetActions_runningActionsCount == 0) {
	obj77491_droppedInsideTargetActions_actionGroup6();
}
		}, 1);
	});
}



















};
obj77491_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj77491_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj77491").trigger("obj77491_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77491) {
				console.warn("de-queueing event obj77491." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77491").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77491_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_77502();
function runjs_77502() {
	window.obj77491_droppedInsideTargetActions_runningActionsCount = obj77491_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj77511").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj77491_droppedInsideTargetActions_runningActionsCount = window.obj77491_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj77491_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj77491_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj77491_droppedInsideTargetActions_runningActionsCount == 0) {
	obj77491_droppedInsideTargetActions_actionGroup7();
}
	}, 1);
}







};
obj77491_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj77491_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj77491").trigger("obj77491_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77491) {
				console.warn("de-queueing event obj77491." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77491").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77491_droppedInsideTargetActions_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_77503();
function runjs_77503() {
	window.obj77491_droppedInsideTargetActions_runningActionsCount = obj77491_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj77511").css("border-color", "#000000"); $("#obj77511").css("border-width", "1px"); $("#obj77511").css("border-style", "solid"); $("#obj77511").css("border-radius", "10px"); $("#obj77511").css("-webkit-border-radius", "10px"); $("#obj77511").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj77491_droppedInsideTargetActions_runningActionsCount = window.obj77491_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj77491_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj77491_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj77491_droppedInsideTargetActions_runningActionsCount == 0) {
	obj77491_droppedInsideTargetActions_actionGroup8();
}
	}, 1);
}







};
obj77491_droppedInsideTargetActions_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj77491_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj77491").trigger("obj77491_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77491) {
				console.warn("de-queueing event obj77491." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77491").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77491_droppedInsideTargetActions_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj77509
(function(){
	window.obj77491_droppedInsideTargetActions_runningActionsCount = obj77491_droppedInsideTargetActions_runningActionsCount + 1;

	var selector = "#obj77509";
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
					window.obj77491_droppedInsideTargetActions_runningActionsCount = window.obj77491_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj77491_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj77491_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj77491_droppedInsideTargetActions_runningActionsCount == 0) {
	obj77491_droppedInsideTargetActions_actionGroup9();
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
				window.obj77491_droppedInsideTargetActions_runningActionsCount = window.obj77491_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj77491_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj77491_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj77491_droppedInsideTargetActions_runningActionsCount == 0) {
	obj77491_droppedInsideTargetActions_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj77491_droppedInsideTargetActions_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj77491_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj77491").trigger("obj77491_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77491) {
				console.warn("de-queueing event obj77491." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77491").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77491_droppedInsideTargetActions_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_77505();
function runjs_77505() {
	window.obj77491_droppedInsideTargetActions_runningActionsCount = obj77491_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj77491").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj77491_droppedInsideTargetActions_runningActionsCount = window.obj77491_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj77491_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj77491_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj77491_droppedInsideTargetActions_runningActionsCount == 0) {
	obj77491_droppedInsideTargetActions_actionGroup10();
}
	}, 1);
}







};
obj77491_droppedInsideTargetActions_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj77491_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj77491").trigger("obj77491_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77491) {
				console.warn("de-queueing event obj77491." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77491").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77491_droppedInsideTargetActions_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_77506();
function runjs_77506() {
	window.obj77491_droppedInsideTargetActions_runningActionsCount = obj77491_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj77491").css("border-color", "rgba(0,0,0,0)"); $("#obj77491").css("border-width", "0px"); $("#obj77491").css("border-style", "solid"); $("#obj77491").css("border-radius", "10px"); $("#obj77491").css("-webkit-border-radius", "10px"); $("#obj77491").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj77491_droppedInsideTargetActions_runningActionsCount = window.obj77491_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj77491_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj77491_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj77491_droppedInsideTargetActions_runningActionsCount == 0) {
	obj77491_droppedInsideTargetActions_actionGroup11();
}
	}, 1);
}







};
obj77491_droppedInsideTargetActions_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj77491_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj77491").trigger("obj77491_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77491) {
				console.warn("de-queueing event obj77491." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77491").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77491_droppedInsideTargetActions_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj77470 
playAudio_77507();
function playAudio_77507() {
	window.obj77491_droppedInsideTargetActions_runningActionsCount = obj77491_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj77470")[0];
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
		    window.obj77491_droppedInsideTargetActions_runningActionsCount = window.obj77491_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj77491_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj77491_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj77491_droppedInsideTargetActions_runningActionsCount == 0) {
	obj77491_droppedInsideTargetActions_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj77491_droppedInsideTargetActions_runningActionsCount = window.obj77491_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj77491_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj77491_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj77491_droppedInsideTargetActions_runningActionsCount == 0) {
	obj77491_droppedInsideTargetActions_actionGroup12();
}
	}
}









};
obj77491_droppedInsideTargetActions_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj77491_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj77491").trigger("obj77491_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77491) {
				console.warn("de-queueing event obj77491." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77491").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77491_droppedInsideTargetActions_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_77508();
function switchText_77508() {
	window.obj77491_droppedInsideTargetActions_runningActionsCount = obj77491_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj77485_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj77485_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj77485").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj77485_content");
			setTimeout(function () {
				window.obj77491_droppedInsideTargetActions_runningActionsCount = window.obj77491_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj77491_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj77491_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj77491_droppedInsideTargetActions_runningActionsCount == 0) {
	obj77491_droppedInsideTargetActions_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj77485 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj77491_droppedInsideTargetActions_runningActionsCount = window.obj77491_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj77491_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj77491_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj77491_droppedInsideTargetActions_runningActionsCount == 0) {
	obj77491_droppedInsideTargetActions_actionGroup13();
}
		}, 1);
	}
}






};
obj77491_droppedInsideTargetActions_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj77491_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj77491").trigger("obj77491_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77491) {
				console.warn("de-queueing event obj77491." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77491").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77491_droppedInsideTargetActions_activeActionGroupIndex = 13;
	





















};
obj77474_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj77474_onTouchDown_activeActionGroupIndex = -1;
		$("#obj77474").trigger("obj77474_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77474) {
				console.warn("de-queueing event obj77474." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77474").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77474_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj77474");
//	action: dragDrop
//	target: obj77474 
dragDrop_77477();
function dragDrop_77477() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj77474_onTouchDown_runningActionsCount = obj77474_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj77474');
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
	  	containerNode = $('#obj77515');
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
    	window.obj77474_onTouchDown_runningActionsCount = window.obj77474_onTouchDown_runningActionsCount - 1;
if (window.obj77474_onTouchDown_runningActionsCount < 0) {
	window.obj77474_onTouchDown_runningActionsCount = 0;
} else if (window.obj77474_onTouchDown_runningActionsCount == 0) {
	obj77474_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj77511");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_77477 = false;
    	var dropped_id_77477;
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
					dropped_77477 = true;
					dropped_id_77477 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_77477) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj77474").trigger('SCActionDragDrop77477_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj77474_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj77474_onTouchDown_activeActionGroupIndex = -1;
		$("#obj77474").trigger("obj77474_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77474) {
				console.warn("de-queueing event obj77474." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77474").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77474_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj77474_SCActionDragDrop77477_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj77474_SCActionDragDrop77477_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj77474").trigger("obj77474_SCActionDragDrop77477_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77474) {
				console.warn("de-queueing event obj77474." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77474").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77474_SCActionDragDrop77477_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj77474 
move_92346();
function move_92346() {
	window.obj77474_SCActionDragDrop77477_droppedOutsideTargetActions_runningActionsCount = obj77474_SCActionDragDrop77477_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj77474");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 344;
	var moveY = 517;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj77474_SCActionDragDrop77477_droppedOutsideTargetActions_runningActionsCount = window.obj77474_SCActionDragDrop77477_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj77474_SCActionDragDrop77477_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj77474_SCActionDragDrop77477_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj77474_SCActionDragDrop77477_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj77474_SCActionDragDrop77477_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj77474_SCActionDragDrop77477_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj77474_SCActionDragDrop77477_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj77474").trigger("obj77474_SCActionDragDrop77477_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77474) {
				console.warn("de-queueing event obj77474." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77474").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77474_SCActionDragDrop77477_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj77474_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj77474_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj77474").trigger("obj77474_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77474) {
				console.warn("de-queueing event obj77474." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77474").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77474_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_77479();
function runjs_77479() {
	window.obj77474_droppedInsideTargetActions_runningActionsCount = obj77474_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj77511").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj77474_droppedInsideTargetActions_runningActionsCount = window.obj77474_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj77474_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj77474_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj77474_droppedInsideTargetActions_runningActionsCount == 0) {
	obj77474_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj77474_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj77474_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj77474").trigger("obj77474_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77474) {
				console.warn("de-queueing event obj77474." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77474").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77474_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_77483();
function switchText_77483() {
	window.obj77474_droppedInsideTargetActions_runningActionsCount = obj77474_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj77485_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj77485_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj77485").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj77485_content");
			setTimeout(function () {
				window.obj77474_droppedInsideTargetActions_runningActionsCount = window.obj77474_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj77474_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj77474_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj77474_droppedInsideTargetActions_runningActionsCount == 0) {
	obj77474_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj77485 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj77474_droppedInsideTargetActions_runningActionsCount = window.obj77474_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj77474_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj77474_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj77474_droppedInsideTargetActions_runningActionsCount == 0) {
	obj77474_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj77474_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj77474_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj77474").trigger("obj77474_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77474) {
				console.warn("de-queueing event obj77474." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77474").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77474_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_77480();
function runjs_77480() {
	window.obj77474_droppedInsideTargetActions_runningActionsCount = obj77474_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj77511").css("border-color", "#058E3F"); $("#obj77511").css("border-width", "2px"); $("#obj77511").css("border-style", "solid"); $("#obj77511").css("border-radius", "10px"); $("#obj77511").css("-webkit-border-radius", "10px"); $("#obj77511").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj77474_droppedInsideTargetActions_runningActionsCount = window.obj77474_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj77474_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj77474_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj77474_droppedInsideTargetActions_runningActionsCount == 0) {
	obj77474_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj77474_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj77474_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj77474").trigger("obj77474_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77474) {
				console.warn("de-queueing event obj77474." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77474").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77474_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj77509 
hide_77481();
function hide_77481() {
	var selector = "#obj77509";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj77474_droppedInsideTargetActions_runningActionsCount = obj77474_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj77474_droppedInsideTargetActions_runningActionsCount = window.obj77474_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj77474_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj77474_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj77474_droppedInsideTargetActions_runningActionsCount == 0) {
	obj77474_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_77481(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj77474_droppedInsideTargetActions_runningActionsCount = window.obj77474_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj77474_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj77474_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj77474_droppedInsideTargetActions_runningActionsCount == 0) {
	obj77474_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj77474_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj77474_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj77474").trigger("obj77474_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77474) {
				console.warn("de-queueing event obj77474." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77474").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77474_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_77482();
function runjs_77482() {
	window.obj77474_droppedInsideTargetActions_runningActionsCount = obj77474_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj77474").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj77474_droppedInsideTargetActions_runningActionsCount = window.obj77474_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj77474_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj77474_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj77474_droppedInsideTargetActions_runningActionsCount == 0) {
	obj77474_droppedInsideTargetActions_actionGroup5();
}
	}, 1);
}







};
obj77474_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj77474_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj77474").trigger("obj77474_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77474) {
				console.warn("de-queueing event obj77474." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77474").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77474_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj77489 
playAudio_77484();
function playAudio_77484() {
	window.obj77474_droppedInsideTargetActions_runningActionsCount = obj77474_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj77489")[0];
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
		    window.obj77474_droppedInsideTargetActions_runningActionsCount = window.obj77474_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj77474_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj77474_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj77474_droppedInsideTargetActions_runningActionsCount == 0) {
	obj77474_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj77474_droppedInsideTargetActions_runningActionsCount = window.obj77474_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj77474_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj77474_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj77474_droppedInsideTargetActions_runningActionsCount == 0) {
	obj77474_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj77474_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj77474_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj77474").trigger("obj77474_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77474) {
				console.warn("de-queueing event obj77474." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77474").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77474_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90292();
function switchText_90292() {
	window.obj77474_droppedInsideTargetActions_runningActionsCount = obj77474_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj77485_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj77485_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj77485").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj77485_content");
			setTimeout(function () {
				window.obj77474_droppedInsideTargetActions_runningActionsCount = window.obj77474_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj77474_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj77474_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj77474_droppedInsideTargetActions_runningActionsCount == 0) {
	obj77474_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj77485 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj77474_droppedInsideTargetActions_runningActionsCount = window.obj77474_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj77474_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj77474_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj77474_droppedInsideTargetActions_runningActionsCount == 0) {
	obj77474_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj77474_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj77474_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj77474").trigger("obj77474_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77474) {
				console.warn("de-queueing event obj77474." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77474").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77474_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj77452_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj77452_onTap_activeActionGroupIndex = -1;
		$("#obj77452").trigger("obj77452_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77452) {
				console.warn("de-queueing event obj77452." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77452").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77452_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj77452 
hide_77455();
function hide_77455() {
	var selector = "#obj77452";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj77452_onTap_runningActionsCount = obj77452_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj77452_onTap_runningActionsCount = window.obj77452_onTap_runningActionsCount - 1;
if (window.obj77452_onTap_runningActionsCount < 0) {
	window.obj77452_onTap_runningActionsCount = 0;
} else if (window.obj77452_onTap_runningActionsCount == 0) {
	obj77452_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_77455(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj77452_onTap_runningActionsCount = window.obj77452_onTap_runningActionsCount - 1;
if (window.obj77452_onTap_runningActionsCount < 0) {
	window.obj77452_onTap_runningActionsCount = 0;
} else if (window.obj77452_onTap_runningActionsCount == 0) {
	obj77452_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj77442 
stopMovie_77454();
function stopMovie_77454() {
	window.obj77452_onTap_runningActionsCount = obj77452_onTap_runningActionsCount + 1;
	var myVideo = $("#obj77442")[0];
	myVideo.pause();
	window.obj77452_onTap_runningActionsCount = window.obj77452_onTap_runningActionsCount - 1;
if (window.obj77452_onTap_runningActionsCount < 0) {
	window.obj77452_onTap_runningActionsCount = 0;
} else if (window.obj77452_onTap_runningActionsCount == 0) {
	obj77452_onTap_actionGroup1();
}
}
















};
obj77452_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj77452_onTap_activeActionGroupIndex = -1;
		$("#obj77452").trigger("obj77452_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77452) {
				console.warn("de-queueing event obj77452." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77452").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77452_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj77444
(function(){
	window.obj77452_onTap_runningActionsCount = obj77452_onTap_runningActionsCount + 1;

	var selector = "#obj77444";
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
					window.obj77452_onTap_runningActionsCount = window.obj77452_onTap_runningActionsCount - 1;
if (window.obj77452_onTap_runningActionsCount < 0) {
	window.obj77452_onTap_runningActionsCount = 0;
} else if (window.obj77452_onTap_runningActionsCount == 0) {
	obj77452_onTap_actionGroup2();
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
				window.obj77452_onTap_runningActionsCount = window.obj77452_onTap_runningActionsCount - 1;
if (window.obj77452_onTap_runningActionsCount < 0) {
	window.obj77452_onTap_runningActionsCount = 0;
} else if (window.obj77452_onTap_runningActionsCount == 0) {
	obj77452_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj77452_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj77452_onTap_activeActionGroupIndex = -1;
		$("#obj77452").trigger("obj77452_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77452) {
				console.warn("de-queueing event obj77452." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77452").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77452_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj77442 
move_77457();
function move_77457() {
	window.obj77452_onTap_runningActionsCount = obj77452_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj77442");
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
			window.obj77452_onTap_runningActionsCount = window.obj77452_onTap_runningActionsCount - 1;
if (window.obj77452_onTap_runningActionsCount < 0) {
	window.obj77452_onTap_runningActionsCount = 0;
} else if (window.obj77452_onTap_runningActionsCount == 0) {
	obj77452_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj77452_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj77452_onTap_activeActionGroupIndex = -1;
		$("#obj77452").trigger("obj77452_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77452) {
				console.warn("de-queueing event obj77452." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77452").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77452_onTap_activeActionGroupIndex = 3;
	





















};
obj77444_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj77444_onTap_activeActionGroupIndex = -1;
		$("#obj77444").trigger("obj77444_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77444) {
				console.warn("de-queueing event obj77444." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77444").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77444_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj77444 
hide_77447();
function hide_77447() {
	var selector = "#obj77444";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj77444_onTap_runningActionsCount = obj77444_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj77444_onTap_runningActionsCount = window.obj77444_onTap_runningActionsCount - 1;
if (window.obj77444_onTap_runningActionsCount < 0) {
	window.obj77444_onTap_runningActionsCount = 0;
} else if (window.obj77444_onTap_runningActionsCount == 0) {
	obj77444_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_77447(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj77444_onTap_runningActionsCount = window.obj77444_onTap_runningActionsCount - 1;
if (window.obj77444_onTap_runningActionsCount < 0) {
	window.obj77444_onTap_runningActionsCount = 0;
} else if (window.obj77444_onTap_runningActionsCount == 0) {
	obj77444_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj77442 
playPauseMovie_77446();
function playPauseMovie_77446() {
	window.obj77444_onTap_runningActionsCount = obj77444_onTap_runningActionsCount + 1;
	var myVideo = $("#obj77442")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj77444_onTap_runningActionsCount = window.obj77444_onTap_runningActionsCount - 1;
if (window.obj77444_onTap_runningActionsCount < 0) {
	window.obj77444_onTap_runningActionsCount = 0;
} else if (window.obj77444_onTap_runningActionsCount == 0) {
	obj77444_onTap_actionGroup1();
}
}

















};
obj77444_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj77444_onTap_activeActionGroupIndex = -1;
		$("#obj77444").trigger("obj77444_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77444) {
				console.warn("de-queueing event obj77444." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77444").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77444_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj77452
(function(){
	window.obj77444_onTap_runningActionsCount = obj77444_onTap_runningActionsCount + 1;

	var selector = "#obj77452";
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
					window.obj77444_onTap_runningActionsCount = window.obj77444_onTap_runningActionsCount - 1;
if (window.obj77444_onTap_runningActionsCount < 0) {
	window.obj77444_onTap_runningActionsCount = 0;
} else if (window.obj77444_onTap_runningActionsCount == 0) {
	obj77444_onTap_actionGroup2();
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
				window.obj77444_onTap_runningActionsCount = window.obj77444_onTap_runningActionsCount - 1;
if (window.obj77444_onTap_runningActionsCount < 0) {
	window.obj77444_onTap_runningActionsCount = 0;
} else if (window.obj77444_onTap_runningActionsCount == 0) {
	obj77444_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj77444_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj77444_onTap_activeActionGroupIndex = -1;
		$("#obj77444").trigger("obj77444_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77444) {
				console.warn("de-queueing event obj77444." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77444").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77444_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj77442 
move_77449();
function move_77449() {
	window.obj77444_onTap_runningActionsCount = obj77444_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj77442");
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
			window.obj77444_onTap_runningActionsCount = window.obj77444_onTap_runningActionsCount - 1;
if (window.obj77444_onTap_runningActionsCount < 0) {
	window.obj77444_onTap_runningActionsCount = 0;
} else if (window.obj77444_onTap_runningActionsCount == 0) {
	obj77444_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj77444_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj77444_onTap_activeActionGroupIndex = -1;
		$("#obj77444").trigger("obj77444_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 77444) {
				console.warn("de-queueing event obj77444." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj77444").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj77444_onTap_activeActionGroupIndex = 3;
	





















};
obj87833_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87833_onTap_activeActionGroupIndex = -1;
		$("#obj87833").trigger("obj87833_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87833) {
				console.warn("de-queueing event obj87833." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87833").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87833_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj87838 
stopAudio_87835();
function stopAudio_87835() {
	window.obj87833_onTap_runningActionsCount = obj87833_onTap_runningActionsCount + 1;
	var myAudio = $("#obj87838")[0];
	myAudio.pause();
	window.obj87833_onTap_runningActionsCount = window.obj87833_onTap_runningActionsCount - 1;
if (window.obj87833_onTap_runningActionsCount < 0) {
	window.obj87833_onTap_runningActionsCount = 0;
} else if (window.obj87833_onTap_runningActionsCount == 0) {
	obj87833_onTap_actionGroup1();
}
}








};
obj87833_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87833_onTap_activeActionGroupIndex = -1;
		$("#obj87833").trigger("obj87833_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87833) {
				console.warn("de-queueing event obj87833." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87833").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87833_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj87833 
hide_87836();
function hide_87836() {
	var selector = "#obj87833";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj87833_onTap_runningActionsCount = obj87833_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj87833_onTap_runningActionsCount = window.obj87833_onTap_runningActionsCount - 1;
if (window.obj87833_onTap_runningActionsCount < 0) {
	window.obj87833_onTap_runningActionsCount = 0;
} else if (window.obj87833_onTap_runningActionsCount == 0) {
	obj87833_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_87836(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj87833_onTap_runningActionsCount = window.obj87833_onTap_runningActionsCount - 1;
if (window.obj87833_onTap_runningActionsCount < 0) {
	window.obj87833_onTap_runningActionsCount = 0;
} else if (window.obj87833_onTap_runningActionsCount == 0) {
	obj87833_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj87833_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87833_onTap_activeActionGroupIndex = -1;
		$("#obj87833").trigger("obj87833_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87833) {
				console.warn("de-queueing event obj87833." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87833").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87833_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj87828
(function(){
	window.obj87833_onTap_runningActionsCount = obj87833_onTap_runningActionsCount + 1;

	var selector = "#obj87828";
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
					window.obj87833_onTap_runningActionsCount = window.obj87833_onTap_runningActionsCount - 1;
if (window.obj87833_onTap_runningActionsCount < 0) {
	window.obj87833_onTap_runningActionsCount = 0;
} else if (window.obj87833_onTap_runningActionsCount == 0) {
	obj87833_onTap_actionGroup3();
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
				window.obj87833_onTap_runningActionsCount = window.obj87833_onTap_runningActionsCount - 1;
if (window.obj87833_onTap_runningActionsCount < 0) {
	window.obj87833_onTap_runningActionsCount = 0;
} else if (window.obj87833_onTap_runningActionsCount == 0) {
	obj87833_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj87833_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj87833_onTap_activeActionGroupIndex = -1;
		$("#obj87833").trigger("obj87833_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87833) {
				console.warn("de-queueing event obj87833." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87833").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87833_onTap_activeActionGroupIndex = 3;
	





















};
obj87828_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87828_onTap_activeActionGroupIndex = -1;
		$("#obj87828").trigger("obj87828_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87828) {
				console.warn("de-queueing event obj87828." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87828").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87828_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj87828 
hide_87830();
function hide_87830() {
	var selector = "#obj87828";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj87828_onTap_runningActionsCount = obj87828_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj87828_onTap_runningActionsCount = window.obj87828_onTap_runningActionsCount - 1;
if (window.obj87828_onTap_runningActionsCount < 0) {
	window.obj87828_onTap_runningActionsCount = 0;
} else if (window.obj87828_onTap_runningActionsCount == 0) {
	obj87828_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_87830(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj87828_onTap_runningActionsCount = window.obj87828_onTap_runningActionsCount - 1;
if (window.obj87828_onTap_runningActionsCount < 0) {
	window.obj87828_onTap_runningActionsCount = 0;
} else if (window.obj87828_onTap_runningActionsCount == 0) {
	obj87828_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj87828_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87828_onTap_activeActionGroupIndex = -1;
		$("#obj87828").trigger("obj87828_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87828) {
				console.warn("de-queueing event obj87828." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87828").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87828_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj87833
(function(){
	window.obj87828_onTap_runningActionsCount = obj87828_onTap_runningActionsCount + 1;

	var selector = "#obj87833";
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
					window.obj87828_onTap_runningActionsCount = window.obj87828_onTap_runningActionsCount - 1;
if (window.obj87828_onTap_runningActionsCount < 0) {
	window.obj87828_onTap_runningActionsCount = 0;
} else if (window.obj87828_onTap_runningActionsCount == 0) {
	obj87828_onTap_actionGroup2();
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
				window.obj87828_onTap_runningActionsCount = window.obj87828_onTap_runningActionsCount - 1;
if (window.obj87828_onTap_runningActionsCount < 0) {
	window.obj87828_onTap_runningActionsCount = 0;
} else if (window.obj87828_onTap_runningActionsCount == 0) {
	obj87828_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj87828_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87828_onTap_activeActionGroupIndex = -1;
		$("#obj87828").trigger("obj87828_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87828) {
				console.warn("de-queueing event obj87828." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87828").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87828_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj87838 
playAudio_87832();
function playAudio_87832() {
	window.obj87828_onTap_runningActionsCount = obj87828_onTap_runningActionsCount + 1;
	var myAudio = $("#obj87838")[0];
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
		    window.obj87828_onTap_runningActionsCount = window.obj87828_onTap_runningActionsCount - 1;
if (window.obj87828_onTap_runningActionsCount < 0) {
	window.obj87828_onTap_runningActionsCount = 0;
} else if (window.obj87828_onTap_runningActionsCount == 0) {
	obj87828_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj87828_onTap_runningActionsCount = window.obj87828_onTap_runningActionsCount - 1;
if (window.obj87828_onTap_runningActionsCount < 0) {
	window.obj87828_onTap_runningActionsCount = 0;
} else if (window.obj87828_onTap_runningActionsCount == 0) {
	obj87828_onTap_actionGroup3();
}
	}
}









};
obj87828_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj87828_onTap_activeActionGroupIndex = -1;
		$("#obj87828").trigger("obj87828_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87828) {
				console.warn("de-queueing event obj87828." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87828").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87828_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj77530: Event Touch Down
 *
 */
$("#obj77530").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj77530_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj77530_onTap is still running");
	return;
}
var obj77530_onTap_runningActionsCount = 0;
var obj77530_onTap_loopCount = 0;
obj77530_onTap_actionGroup0();
});










/*
 *
 *   obj77527: Event Touch Down
 *
 */
$("#obj77527").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj77527_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj77527_onTap is still running");
	return;
}
var obj77527_onTap_runningActionsCount = 0;
var obj77527_onTap_loopCount = 0;
obj77527_onTap_actionGroup0();
});










/*
 *
 *   obj77523: Event Touch Down
 *
 */
$("#obj77523").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj77523_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj77523_onTap is still running");
	return;
}
var obj77523_onTap_runningActionsCount = 0;
var obj77523_onTap_loopCount = 0;
obj77523_onTap_actionGroup0();
});

















































































/*
 *
 *   obj77491: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj77491");
	var winTarget = document.getElementById("obj77491");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj77491").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj77491_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj77491_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj77491_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj77491_onTouchDown is still running");
	return;
}
var obj77491_onTouchDown_runningActionsCount = 0;
var obj77491_onTouchDown_loopCount = 0;
obj77491_onTouchDown_actionGroup0();
});



/*
 *
 *   obj77491: Event SCActionDragDrop77494_droppedOutsideTargetActions
 *
 */
$("#obj77491").bind("SCActionDragDrop77494_droppedOutsideTargetActions", function(event) {
	if (window.obj77491_SCActionDragDrop77494_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj77491_SCActionDragDrop77494_droppedOutsideTargetActions is still running");
	return;
}
var obj77491_SCActionDragDrop77494_droppedOutsideTargetActions_runningActionsCount = 0;
var obj77491_SCActionDragDrop77494_droppedOutsideTargetActions_loopCount = 0;
obj77491_SCActionDragDrop77494_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj77491: Event droppedInsideTargetActions
 *
 */
$("#obj77491").bind("droppedInsideTargetActions", function(event) {
	if (window.obj77491_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj77491_droppedInsideTargetActions is still running");
	return;
}
var obj77491_droppedInsideTargetActions_runningActionsCount = 0;
var obj77491_droppedInsideTargetActions_loopCount = 0;
obj77491_droppedInsideTargetActions_actionGroup0();
});




































/*
 *
 *   obj77474: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj77474");
	var winTarget = document.getElementById("obj77474");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj77474").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj77474_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj77474_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj77474_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj77474_onTouchDown is still running");
	return;
}
var obj77474_onTouchDown_runningActionsCount = 0;
var obj77474_onTouchDown_loopCount = 0;
obj77474_onTouchDown_actionGroup0();
});



/*
 *
 *   obj77474: Event SCActionDragDrop77477_droppedOutsideTargetActions
 *
 */
$("#obj77474").bind("SCActionDragDrop77477_droppedOutsideTargetActions", function(event) {
	if (window.obj77474_SCActionDragDrop77477_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj77474_SCActionDragDrop77477_droppedOutsideTargetActions is still running");
	return;
}
var obj77474_SCActionDragDrop77477_droppedOutsideTargetActions_runningActionsCount = 0;
var obj77474_SCActionDragDrop77477_droppedOutsideTargetActions_loopCount = 0;
obj77474_SCActionDragDrop77477_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj77474: Event droppedInsideTargetActions
 *
 */
$("#obj77474").bind("droppedInsideTargetActions", function(event) {
	if (window.obj77474_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj77474_droppedInsideTargetActions is still running");
	return;
}
var obj77474_droppedInsideTargetActions_runningActionsCount = 0;
var obj77474_droppedInsideTargetActions_loopCount = 0;
obj77474_droppedInsideTargetActions_actionGroup0();
});

























/*
 *
 *   obj77452: Event Touch Down
 *
 */
$("#obj77452").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj77452_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj77452_onTap is still running");
	return;
}
var obj77452_onTap_runningActionsCount = 0;
var obj77452_onTap_loopCount = 0;
obj77452_onTap_actionGroup0();
});










/*
 *
 *   obj77444: Event Touch Down
 *
 */
$("#obj77444").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj77444_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj77444_onTap is still running");
	return;
}
var obj77444_onTap_runningActionsCount = 0;
var obj77444_onTap_loopCount = 0;
obj77444_onTap_actionGroup0();
});










/*
 *
 *   obj87833: Event Touch Down
 *
 */
$("#obj87833").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj87833_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj87833_onTap is still running");
	return;
}
var obj87833_onTap_runningActionsCount = 0;
var obj87833_onTap_loopCount = 0;
obj87833_onTap_actionGroup0();
});










/*
 *
 *   obj87828: Event Touch Down
 *
 */
$("#obj87828").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj87828_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj87828_onTap is still running");
	return;
}
var obj87828_onTap_runningActionsCount = 0;
var obj87828_onTap_loopCount = 0;
obj87828_onTap_actionGroup0();
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
	
$("#obj77533").trigger('SCEventShow');
$("#obj77530").trigger('SCEventShow');
$("#obj77527").trigger('SCEventShow');
$("#obj77523").trigger('SCEventShow');
$("#obj77521").trigger('SCEventShow');
$("#obj77519").trigger('SCEventShow');
$("#obj77517").trigger('SCEventShow');
$("#obj77515").trigger('SCEventShow');
$("#obj77513").trigger('SCEventShow');
$("#obj77511").trigger('SCEventShow');
$("#obj77509").trigger('SCEventShow');
$("#obj77491").trigger('SCEventShow');
$("#obj77489").trigger('SCEventShow');
$("#obj77487").trigger('SCEventShow');
$("#obj77485").trigger('SCEventShow');
$("#obj77474").trigger('SCEventShow');
$("#obj77472").trigger('SCEventShow');
$("#obj77470").trigger('SCEventShow');
$("#obj77452").trigger('SCEventShow');
$("#obj77444").trigger('SCEventShow');
$("#obj87833").trigger('SCEventShow');
$("#obj87828").trigger('SCEventShow');
$("#obj87838").trigger('SCEventShow');
$("#obj94791").trigger('SCEventShow');
$("#obj77442").trigger('SCEventShow');
	
});