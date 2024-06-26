pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 24032;
pubcoder.page.title = pubcoder.page.title || "94";
pubcoder.page.number = pubcoder.page.number || 94;
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
var obj79998_onTap_activeActionGroupIndex = -1;
var obj79998_onTap_runningActionsCount = 0;
var obj79998_onTap_loopCount = 0;
var obj79995_onTap_activeActionGroupIndex = -1;
var obj79995_onTap_runningActionsCount = 0;
var obj79995_onTap_loopCount = 0;
var obj79991_onTap_activeActionGroupIndex = -1;
var obj79991_onTap_runningActionsCount = 0;
var obj79991_onTap_loopCount = 0;
var obj79949_onDrag_activeActionGroupIndex = -1;
var obj79949_onDrag_runningActionsCount = 0;
var obj79949_onDrag_loopCount = 0;
var obj79949_onTouchDown_activeActionGroupIndex = -1;
var obj79949_onTouchDown_runningActionsCount = 0;
var obj79949_onTouchDown_loopCount = 0;
var obj79949_SCActionDragDrop79952_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj79949_SCActionDragDrop79952_droppedOutsideTargetActions_runningActionsCount = 0;
var obj79949_SCActionDragDrop79952_droppedOutsideTargetActions_loopCount = 0;
var obj79949_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj79949_droppedInsideTargetActions_runningActionsCount = 0;
var obj79949_droppedInsideTargetActions_loopCount = 0;
var obj79938_onDrag_activeActionGroupIndex = -1;
var obj79938_onDrag_runningActionsCount = 0;
var obj79938_onDrag_loopCount = 0;
var obj79938_onTouchDown_activeActionGroupIndex = -1;
var obj79938_onTouchDown_runningActionsCount = 0;
var obj79938_onTouchDown_loopCount = 0;
var obj79938_SCActionDragDrop79941_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj79938_SCActionDragDrop79941_droppedOutsideTargetActions_runningActionsCount = 0;
var obj79938_SCActionDragDrop79941_droppedOutsideTargetActions_loopCount = 0;
var obj79938_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj79938_droppedInsideTargetActions_runningActionsCount = 0;
var obj79938_droppedInsideTargetActions_loopCount = 0;
var obj79920_onTap_activeActionGroupIndex = -1;
var obj79920_onTap_runningActionsCount = 0;
var obj79920_onTap_loopCount = 0;
var obj79912_onTap_activeActionGroupIndex = -1;
var obj79912_onTap_runningActionsCount = 0;
var obj79912_onTap_loopCount = 0;
var obj89410_onTap_activeActionGroupIndex = -1;
var obj89410_onTap_runningActionsCount = 0;
var obj89410_onTap_loopCount = 0;
var obj89405_onTap_activeActionGroupIndex = -1;
var obj89405_onTap_runningActionsCount = 0;
var obj89405_onTap_loopCount = 0;
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
		
obj79998_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79998_onTap_activeActionGroupIndex = -1;
		$("#obj79998").trigger("obj79998_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79998) {
				console.warn("de-queueing event obj79998." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79998").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79998_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_80000();
function goToPage_80000() {
	window.obj79998_onTap_runningActionsCount = obj79998_onTap_runningActionsCount + 1;
	$("#anchor553")[0].click();
	window.obj79998_onTap_runningActionsCount = window.obj79998_onTap_runningActionsCount - 1;
if (window.obj79998_onTap_runningActionsCount < 0) {
	window.obj79998_onTap_runningActionsCount = 0;
} else if (window.obj79998_onTap_runningActionsCount == 0) {
	obj79998_onTap_actionGroup1();
}
}





















};
obj79998_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj79998_onTap_activeActionGroupIndex = -1;
		$("#obj79998").trigger("obj79998_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79998) {
				console.warn("de-queueing event obj79998." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79998").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79998_onTap_activeActionGroupIndex = 1;
	





















};
obj79995_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79995_onTap_activeActionGroupIndex = -1;
		$("#obj79995").trigger("obj79995_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79995) {
				console.warn("de-queueing event obj79995." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79995").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79995_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_79997();
function goToPage_79997() {
	window.obj79995_onTap_runningActionsCount = obj79995_onTap_runningActionsCount + 1;
	$("#anchor554")[0].click();
	window.obj79995_onTap_runningActionsCount = window.obj79995_onTap_runningActionsCount - 1;
if (window.obj79995_onTap_runningActionsCount < 0) {
	window.obj79995_onTap_runningActionsCount = 0;
} else if (window.obj79995_onTap_runningActionsCount == 0) {
	obj79995_onTap_actionGroup1();
}
}





















};
obj79995_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj79995_onTap_activeActionGroupIndex = -1;
		$("#obj79995").trigger("obj79995_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79995) {
				console.warn("de-queueing event obj79995." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79995").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79995_onTap_activeActionGroupIndex = 1;
	





















};
obj79991_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79991_onTap_activeActionGroupIndex = -1;
		$("#obj79991").trigger("obj79991_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79991) {
				console.warn("de-queueing event obj79991." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79991").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79991_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_79993();
function goToPage_79993() {
	window.obj79991_onTap_runningActionsCount = obj79991_onTap_runningActionsCount + 1;
	$("#anchor555")[0].click();
	window.obj79991_onTap_runningActionsCount = window.obj79991_onTap_runningActionsCount - 1;
if (window.obj79991_onTap_runningActionsCount < 0) {
	window.obj79991_onTap_runningActionsCount = 0;
} else if (window.obj79991_onTap_runningActionsCount == 0) {
	obj79991_onTap_actionGroup1();
}
}





















};
obj79991_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj79991_onTap_activeActionGroupIndex = -1;
		$("#obj79991").trigger("obj79991_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79991) {
				console.warn("de-queueing event obj79991." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79991").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79991_onTap_activeActionGroupIndex = 1;
	





















};
obj79949_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79949_onTouchDown_activeActionGroupIndex = -1;
		$("#obj79949").trigger("obj79949_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79949) {
				console.warn("de-queueing event obj79949." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79949").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79949_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj79949");
//	action: dragDrop
//	target: obj79949 
dragDrop_79952();
function dragDrop_79952() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj79949_onTouchDown_runningActionsCount = obj79949_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj79949');
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
	  	containerNode = $('#obj79983');
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
    	window.obj79949_onTouchDown_runningActionsCount = window.obj79949_onTouchDown_runningActionsCount - 1;
if (window.obj79949_onTouchDown_runningActionsCount < 0) {
	window.obj79949_onTouchDown_runningActionsCount = 0;
} else if (window.obj79949_onTouchDown_runningActionsCount == 0) {
	obj79949_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj79979");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_79952 = false;
    	var dropped_id_79952;
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
					dropped_79952 = true;
					dropped_id_79952 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_79952) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj79949").trigger('SCActionDragDrop79952_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj79949_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj79949_onTouchDown_activeActionGroupIndex = -1;
		$("#obj79949").trigger("obj79949_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79949) {
				console.warn("de-queueing event obj79949." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79949").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79949_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj79949_SCActionDragDrop79952_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79949_SCActionDragDrop79952_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj79949").trigger("obj79949_SCActionDragDrop79952_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79949) {
				console.warn("de-queueing event obj79949." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79949").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79949_SCActionDragDrop79952_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj79949 
move_92394();
function move_92394() {
	window.obj79949_SCActionDragDrop79952_droppedOutsideTargetActions_runningActionsCount = obj79949_SCActionDragDrop79952_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj79949");
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
			window.obj79949_SCActionDragDrop79952_droppedOutsideTargetActions_runningActionsCount = window.obj79949_SCActionDragDrop79952_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj79949_SCActionDragDrop79952_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj79949_SCActionDragDrop79952_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj79949_SCActionDragDrop79952_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj79949_SCActionDragDrop79952_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj79949_SCActionDragDrop79952_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj79949_SCActionDragDrop79952_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj79949").trigger("obj79949_SCActionDragDrop79952_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79949) {
				console.warn("de-queueing event obj79949." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79949").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79949_SCActionDragDrop79952_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj79949_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79949_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj79949").trigger("obj79949_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79949) {
				console.warn("de-queueing event obj79949." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79949").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79949_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_79954();
function runjs_79954() {
	window.obj79949_droppedInsideTargetActions_runningActionsCount = obj79949_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj79979").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj79949_droppedInsideTargetActions_runningActionsCount = window.obj79949_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj79949_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj79949_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj79949_droppedInsideTargetActions_runningActionsCount == 0) {
	obj79949_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj79949_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79949_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj79949").trigger("obj79949_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79949) {
				console.warn("de-queueing event obj79949." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79949").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79949_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_79955();
function runjs_79955() {
	window.obj79949_droppedInsideTargetActions_runningActionsCount = obj79949_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj79979").css("border-color", "#C00000"); $("#obj79979").css("border-width", "2px"); $("#obj79979").css("border-style", "solid"); $("#obj79979").css("border-radius", "10px"); $("#obj79979").css("-webkit-border-radius", "10px"); $("#obj79979").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj79949_droppedInsideTargetActions_runningActionsCount = window.obj79949_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj79949_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj79949_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj79949_droppedInsideTargetActions_runningActionsCount == 0) {
	obj79949_droppedInsideTargetActions_actionGroup2();
}
	}, 1);
}







};
obj79949_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79949_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj79949").trigger("obj79949_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79949) {
				console.warn("de-queueing event obj79949." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79949").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79949_droppedInsideTargetActions_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj79977 
hide_79956();
function hide_79956() {
	var selector = "#obj79977";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj79949_droppedInsideTargetActions_runningActionsCount = obj79949_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj79949_droppedInsideTargetActions_runningActionsCount = window.obj79949_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj79949_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj79949_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj79949_droppedInsideTargetActions_runningActionsCount == 0) {
	obj79949_droppedInsideTargetActions_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_79956(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj79949_droppedInsideTargetActions_runningActionsCount = window.obj79949_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj79949_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj79949_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj79949_droppedInsideTargetActions_runningActionsCount == 0) {
	obj79949_droppedInsideTargetActions_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj79949_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79949_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj79949").trigger("obj79949_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79949) {
				console.warn("de-queueing event obj79949." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79949").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79949_droppedInsideTargetActions_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_79957();
function runjs_79957() {
	window.obj79949_droppedInsideTargetActions_runningActionsCount = obj79949_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj79949").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj79949_droppedInsideTargetActions_runningActionsCount = window.obj79949_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj79949_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj79949_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj79949_droppedInsideTargetActions_runningActionsCount == 0) {
	obj79949_droppedInsideTargetActions_actionGroup4();
}
	}, 1);
}







};
obj79949_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79949_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj79949").trigger("obj79949_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79949) {
				console.warn("de-queueing event obj79949." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79949").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79949_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_79958();
function switchText_79958() {
	window.obj79949_droppedInsideTargetActions_runningActionsCount = obj79949_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj79971_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj79971_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj79971").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj79971_content");
			setTimeout(function () {
				window.obj79949_droppedInsideTargetActions_runningActionsCount = window.obj79949_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj79949_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj79949_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj79949_droppedInsideTargetActions_runningActionsCount == 0) {
	obj79949_droppedInsideTargetActions_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj79971 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj79949_droppedInsideTargetActions_runningActionsCount = window.obj79949_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj79949_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj79949_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj79949_droppedInsideTargetActions_runningActionsCount == 0) {
	obj79949_droppedInsideTargetActions_actionGroup5();
}
		}, 1);
	}
}






};
obj79949_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79949_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj79949").trigger("obj79949_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79949) {
				console.warn("de-queueing event obj79949." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79949").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79949_droppedInsideTargetActions_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj79949 
move_79959();
function move_79959() {
	window.obj79949_droppedInsideTargetActions_runningActionsCount = obj79949_droppedInsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj79949");
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
			window.obj79949_droppedInsideTargetActions_runningActionsCount = window.obj79949_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj79949_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj79949_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj79949_droppedInsideTargetActions_runningActionsCount == 0) {
	obj79949_droppedInsideTargetActions_actionGroup6();
}
		}, 1);
	});
}



















};
obj79949_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79949_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj79949").trigger("obj79949_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79949) {
				console.warn("de-queueing event obj79949." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79949").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79949_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_79960();
function runjs_79960() {
	window.obj79949_droppedInsideTargetActions_runningActionsCount = obj79949_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj79979").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj79949_droppedInsideTargetActions_runningActionsCount = window.obj79949_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj79949_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj79949_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj79949_droppedInsideTargetActions_runningActionsCount == 0) {
	obj79949_droppedInsideTargetActions_actionGroup7();
}
	}, 1);
}







};
obj79949_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79949_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj79949").trigger("obj79949_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79949) {
				console.warn("de-queueing event obj79949." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79949").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79949_droppedInsideTargetActions_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_79961();
function runjs_79961() {
	window.obj79949_droppedInsideTargetActions_runningActionsCount = obj79949_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj79979").css("border-color", "#000000"); $("#obj79979").css("border-width", "1px"); $("#obj79979").css("border-style", "solid"); $("#obj79979").css("border-radius", "10px"); $("#obj79979").css("-webkit-border-radius", "10px"); $("#obj79979").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj79949_droppedInsideTargetActions_runningActionsCount = window.obj79949_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj79949_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj79949_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj79949_droppedInsideTargetActions_runningActionsCount == 0) {
	obj79949_droppedInsideTargetActions_actionGroup8();
}
	}, 1);
}







};
obj79949_droppedInsideTargetActions_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79949_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj79949").trigger("obj79949_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79949) {
				console.warn("de-queueing event obj79949." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79949").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79949_droppedInsideTargetActions_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj79977
(function(){
	window.obj79949_droppedInsideTargetActions_runningActionsCount = obj79949_droppedInsideTargetActions_runningActionsCount + 1;

	var selector = "#obj79977";
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
					window.obj79949_droppedInsideTargetActions_runningActionsCount = window.obj79949_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj79949_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj79949_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj79949_droppedInsideTargetActions_runningActionsCount == 0) {
	obj79949_droppedInsideTargetActions_actionGroup9();
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
				window.obj79949_droppedInsideTargetActions_runningActionsCount = window.obj79949_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj79949_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj79949_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj79949_droppedInsideTargetActions_runningActionsCount == 0) {
	obj79949_droppedInsideTargetActions_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj79949_droppedInsideTargetActions_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79949_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj79949").trigger("obj79949_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79949) {
				console.warn("de-queueing event obj79949." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79949").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79949_droppedInsideTargetActions_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_79963();
function runjs_79963() {
	window.obj79949_droppedInsideTargetActions_runningActionsCount = obj79949_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj79949").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj79949_droppedInsideTargetActions_runningActionsCount = window.obj79949_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj79949_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj79949_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj79949_droppedInsideTargetActions_runningActionsCount == 0) {
	obj79949_droppedInsideTargetActions_actionGroup10();
}
	}, 1);
}







};
obj79949_droppedInsideTargetActions_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79949_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj79949").trigger("obj79949_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79949) {
				console.warn("de-queueing event obj79949." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79949").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79949_droppedInsideTargetActions_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_79964();
function runjs_79964() {
	window.obj79949_droppedInsideTargetActions_runningActionsCount = obj79949_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj79949").css("border-color", "rgba(0,0,0,0)"); $("#obj79949").css("border-width", "0px"); $("#obj79949").css("border-style", "solid"); $("#obj79949").css("border-radius", "10px"); $("#obj79949").css("-webkit-border-radius", "10px"); $("#obj79949").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj79949_droppedInsideTargetActions_runningActionsCount = window.obj79949_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj79949_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj79949_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj79949_droppedInsideTargetActions_runningActionsCount == 0) {
	obj79949_droppedInsideTargetActions_actionGroup11();
}
	}, 1);
}







};
obj79949_droppedInsideTargetActions_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79949_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj79949").trigger("obj79949_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79949) {
				console.warn("de-queueing event obj79949." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79949").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79949_droppedInsideTargetActions_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj79967 
playAudio_79965();
function playAudio_79965() {
	window.obj79949_droppedInsideTargetActions_runningActionsCount = obj79949_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj79967")[0];
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
		    window.obj79949_droppedInsideTargetActions_runningActionsCount = window.obj79949_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj79949_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj79949_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj79949_droppedInsideTargetActions_runningActionsCount == 0) {
	obj79949_droppedInsideTargetActions_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj79949_droppedInsideTargetActions_runningActionsCount = window.obj79949_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj79949_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj79949_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj79949_droppedInsideTargetActions_runningActionsCount == 0) {
	obj79949_droppedInsideTargetActions_actionGroup12();
}
	}
}









};
obj79949_droppedInsideTargetActions_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79949_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj79949").trigger("obj79949_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79949) {
				console.warn("de-queueing event obj79949." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79949").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79949_droppedInsideTargetActions_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_79966();
function switchText_79966() {
	window.obj79949_droppedInsideTargetActions_runningActionsCount = obj79949_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj79971_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj79971_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj79971").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj79971_content");
			setTimeout(function () {
				window.obj79949_droppedInsideTargetActions_runningActionsCount = window.obj79949_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj79949_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj79949_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj79949_droppedInsideTargetActions_runningActionsCount == 0) {
	obj79949_droppedInsideTargetActions_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj79971 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj79949_droppedInsideTargetActions_runningActionsCount = window.obj79949_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj79949_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj79949_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj79949_droppedInsideTargetActions_runningActionsCount == 0) {
	obj79949_droppedInsideTargetActions_actionGroup13();
}
		}, 1);
	}
}






};
obj79949_droppedInsideTargetActions_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj79949_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj79949").trigger("obj79949_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79949) {
				console.warn("de-queueing event obj79949." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79949").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79949_droppedInsideTargetActions_activeActionGroupIndex = 13;
	





















};
obj79938_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79938_onTouchDown_activeActionGroupIndex = -1;
		$("#obj79938").trigger("obj79938_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79938) {
				console.warn("de-queueing event obj79938." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79938").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79938_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj79938");
//	action: dragDrop
//	target: obj79938 
dragDrop_79941();
function dragDrop_79941() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj79938_onTouchDown_runningActionsCount = obj79938_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj79938');
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
	  	containerNode = $('#obj79983');
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
    	window.obj79938_onTouchDown_runningActionsCount = window.obj79938_onTouchDown_runningActionsCount - 1;
if (window.obj79938_onTouchDown_runningActionsCount < 0) {
	window.obj79938_onTouchDown_runningActionsCount = 0;
} else if (window.obj79938_onTouchDown_runningActionsCount == 0) {
	obj79938_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj79979");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_79941 = false;
    	var dropped_id_79941;
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
					dropped_79941 = true;
					dropped_id_79941 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_79941) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj79938").trigger('SCActionDragDrop79941_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj79938_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj79938_onTouchDown_activeActionGroupIndex = -1;
		$("#obj79938").trigger("obj79938_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79938) {
				console.warn("de-queueing event obj79938." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79938").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79938_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj79938_SCActionDragDrop79941_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79938_SCActionDragDrop79941_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj79938").trigger("obj79938_SCActionDragDrop79941_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79938) {
				console.warn("de-queueing event obj79938." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79938").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79938_SCActionDragDrop79941_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj79938 
move_92396();
function move_92396() {
	window.obj79938_SCActionDragDrop79941_droppedOutsideTargetActions_runningActionsCount = obj79938_SCActionDragDrop79941_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj79938");
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
			window.obj79938_SCActionDragDrop79941_droppedOutsideTargetActions_runningActionsCount = window.obj79938_SCActionDragDrop79941_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj79938_SCActionDragDrop79941_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj79938_SCActionDragDrop79941_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj79938_SCActionDragDrop79941_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj79938_SCActionDragDrop79941_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj79938_SCActionDragDrop79941_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj79938_SCActionDragDrop79941_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj79938").trigger("obj79938_SCActionDragDrop79941_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79938) {
				console.warn("de-queueing event obj79938." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79938").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79938_SCActionDragDrop79941_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj79938_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79938_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj79938").trigger("obj79938_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79938) {
				console.warn("de-queueing event obj79938." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79938").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79938_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_79943();
function runjs_79943() {
	window.obj79938_droppedInsideTargetActions_runningActionsCount = obj79938_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj79979").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj79938_droppedInsideTargetActions_runningActionsCount = window.obj79938_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj79938_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj79938_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj79938_droppedInsideTargetActions_runningActionsCount == 0) {
	obj79938_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj79938_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79938_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj79938").trigger("obj79938_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79938) {
				console.warn("de-queueing event obj79938." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79938").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79938_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_79947();
function switchText_79947() {
	window.obj79938_droppedInsideTargetActions_runningActionsCount = obj79938_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj79971_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj79971_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj79971").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj79971_content");
			setTimeout(function () {
				window.obj79938_droppedInsideTargetActions_runningActionsCount = window.obj79938_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj79938_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj79938_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj79938_droppedInsideTargetActions_runningActionsCount == 0) {
	obj79938_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj79971 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj79938_droppedInsideTargetActions_runningActionsCount = window.obj79938_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj79938_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj79938_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj79938_droppedInsideTargetActions_runningActionsCount == 0) {
	obj79938_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj79938_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79938_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj79938").trigger("obj79938_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79938) {
				console.warn("de-queueing event obj79938." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79938").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79938_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_79944();
function runjs_79944() {
	window.obj79938_droppedInsideTargetActions_runningActionsCount = obj79938_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj79979").css("border-color", "#058E3F"); $("#obj79979").css("border-width", "2px"); $("#obj79979").css("border-style", "solid"); $("#obj79979").css("border-radius", "10px"); $("#obj79979").css("-webkit-border-radius", "10px"); $("#obj79979").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj79938_droppedInsideTargetActions_runningActionsCount = window.obj79938_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj79938_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj79938_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj79938_droppedInsideTargetActions_runningActionsCount == 0) {
	obj79938_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj79938_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79938_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj79938").trigger("obj79938_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79938) {
				console.warn("de-queueing event obj79938." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79938").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79938_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj79977 
hide_79945();
function hide_79945() {
	var selector = "#obj79977";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj79938_droppedInsideTargetActions_runningActionsCount = obj79938_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj79938_droppedInsideTargetActions_runningActionsCount = window.obj79938_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj79938_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj79938_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj79938_droppedInsideTargetActions_runningActionsCount == 0) {
	obj79938_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_79945(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj79938_droppedInsideTargetActions_runningActionsCount = window.obj79938_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj79938_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj79938_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj79938_droppedInsideTargetActions_runningActionsCount == 0) {
	obj79938_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj79938_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79938_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj79938").trigger("obj79938_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79938) {
				console.warn("de-queueing event obj79938." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79938").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79938_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_79946();
function runjs_79946() {
	window.obj79938_droppedInsideTargetActions_runningActionsCount = obj79938_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj79938").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj79938_droppedInsideTargetActions_runningActionsCount = window.obj79938_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj79938_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj79938_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj79938_droppedInsideTargetActions_runningActionsCount == 0) {
	obj79938_droppedInsideTargetActions_actionGroup5();
}
	}, 1);
}







};
obj79938_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79938_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj79938").trigger("obj79938_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79938) {
				console.warn("de-queueing event obj79938." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79938").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79938_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj79975 
playAudio_79948();
function playAudio_79948() {
	window.obj79938_droppedInsideTargetActions_runningActionsCount = obj79938_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj79975")[0];
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
		    window.obj79938_droppedInsideTargetActions_runningActionsCount = window.obj79938_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj79938_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj79938_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj79938_droppedInsideTargetActions_runningActionsCount == 0) {
	obj79938_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj79938_droppedInsideTargetActions_runningActionsCount = window.obj79938_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj79938_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj79938_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj79938_droppedInsideTargetActions_runningActionsCount == 0) {
	obj79938_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj79938_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79938_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj79938").trigger("obj79938_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79938) {
				console.warn("de-queueing event obj79938." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79938").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79938_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90321();
function switchText_90321() {
	window.obj79938_droppedInsideTargetActions_runningActionsCount = obj79938_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj79971_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj79971_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj79971").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj79971_content");
			setTimeout(function () {
				window.obj79938_droppedInsideTargetActions_runningActionsCount = window.obj79938_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj79938_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj79938_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj79938_droppedInsideTargetActions_runningActionsCount == 0) {
	obj79938_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj79971 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj79938_droppedInsideTargetActions_runningActionsCount = window.obj79938_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj79938_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj79938_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj79938_droppedInsideTargetActions_runningActionsCount == 0) {
	obj79938_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj79938_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj79938_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj79938").trigger("obj79938_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79938) {
				console.warn("de-queueing event obj79938." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79938").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79938_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj79920_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79920_onTap_activeActionGroupIndex = -1;
		$("#obj79920").trigger("obj79920_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79920) {
				console.warn("de-queueing event obj79920." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79920").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79920_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj79920 
hide_79923();
function hide_79923() {
	var selector = "#obj79920";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj79920_onTap_runningActionsCount = obj79920_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj79920_onTap_runningActionsCount = window.obj79920_onTap_runningActionsCount - 1;
if (window.obj79920_onTap_runningActionsCount < 0) {
	window.obj79920_onTap_runningActionsCount = 0;
} else if (window.obj79920_onTap_runningActionsCount == 0) {
	obj79920_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_79923(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj79920_onTap_runningActionsCount = window.obj79920_onTap_runningActionsCount - 1;
if (window.obj79920_onTap_runningActionsCount < 0) {
	window.obj79920_onTap_runningActionsCount = 0;
} else if (window.obj79920_onTap_runningActionsCount == 0) {
	obj79920_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj79910 
stopMovie_79922();
function stopMovie_79922() {
	window.obj79920_onTap_runningActionsCount = obj79920_onTap_runningActionsCount + 1;
	var myVideo = $("#obj79910")[0];
	myVideo.pause();
	window.obj79920_onTap_runningActionsCount = window.obj79920_onTap_runningActionsCount - 1;
if (window.obj79920_onTap_runningActionsCount < 0) {
	window.obj79920_onTap_runningActionsCount = 0;
} else if (window.obj79920_onTap_runningActionsCount == 0) {
	obj79920_onTap_actionGroup1();
}
}
















};
obj79920_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79920_onTap_activeActionGroupIndex = -1;
		$("#obj79920").trigger("obj79920_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79920) {
				console.warn("de-queueing event obj79920." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79920").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79920_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj79912
(function(){
	window.obj79920_onTap_runningActionsCount = obj79920_onTap_runningActionsCount + 1;

	var selector = "#obj79912";
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
					window.obj79920_onTap_runningActionsCount = window.obj79920_onTap_runningActionsCount - 1;
if (window.obj79920_onTap_runningActionsCount < 0) {
	window.obj79920_onTap_runningActionsCount = 0;
} else if (window.obj79920_onTap_runningActionsCount == 0) {
	obj79920_onTap_actionGroup2();
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
				window.obj79920_onTap_runningActionsCount = window.obj79920_onTap_runningActionsCount - 1;
if (window.obj79920_onTap_runningActionsCount < 0) {
	window.obj79920_onTap_runningActionsCount = 0;
} else if (window.obj79920_onTap_runningActionsCount == 0) {
	obj79920_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj79920_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79920_onTap_activeActionGroupIndex = -1;
		$("#obj79920").trigger("obj79920_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79920) {
				console.warn("de-queueing event obj79920." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79920").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79920_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj79910 
move_79925();
function move_79925() {
	window.obj79920_onTap_runningActionsCount = obj79920_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj79910");
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
			window.obj79920_onTap_runningActionsCount = window.obj79920_onTap_runningActionsCount - 1;
if (window.obj79920_onTap_runningActionsCount < 0) {
	window.obj79920_onTap_runningActionsCount = 0;
} else if (window.obj79920_onTap_runningActionsCount == 0) {
	obj79920_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj79920_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj79920_onTap_activeActionGroupIndex = -1;
		$("#obj79920").trigger("obj79920_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79920) {
				console.warn("de-queueing event obj79920." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79920").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79920_onTap_activeActionGroupIndex = 3;
	





















};
obj79912_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79912_onTap_activeActionGroupIndex = -1;
		$("#obj79912").trigger("obj79912_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79912) {
				console.warn("de-queueing event obj79912." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79912").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79912_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj79912 
hide_79915();
function hide_79915() {
	var selector = "#obj79912";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj79912_onTap_runningActionsCount = obj79912_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj79912_onTap_runningActionsCount = window.obj79912_onTap_runningActionsCount - 1;
if (window.obj79912_onTap_runningActionsCount < 0) {
	window.obj79912_onTap_runningActionsCount = 0;
} else if (window.obj79912_onTap_runningActionsCount == 0) {
	obj79912_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_79915(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj79912_onTap_runningActionsCount = window.obj79912_onTap_runningActionsCount - 1;
if (window.obj79912_onTap_runningActionsCount < 0) {
	window.obj79912_onTap_runningActionsCount = 0;
} else if (window.obj79912_onTap_runningActionsCount == 0) {
	obj79912_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj79910 
playPauseMovie_79914();
function playPauseMovie_79914() {
	window.obj79912_onTap_runningActionsCount = obj79912_onTap_runningActionsCount + 1;
	var myVideo = $("#obj79910")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj79912_onTap_runningActionsCount = window.obj79912_onTap_runningActionsCount - 1;
if (window.obj79912_onTap_runningActionsCount < 0) {
	window.obj79912_onTap_runningActionsCount = 0;
} else if (window.obj79912_onTap_runningActionsCount == 0) {
	obj79912_onTap_actionGroup1();
}
}

















};
obj79912_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79912_onTap_activeActionGroupIndex = -1;
		$("#obj79912").trigger("obj79912_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79912) {
				console.warn("de-queueing event obj79912." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79912").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79912_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj79920
(function(){
	window.obj79912_onTap_runningActionsCount = obj79912_onTap_runningActionsCount + 1;

	var selector = "#obj79920";
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
					window.obj79912_onTap_runningActionsCount = window.obj79912_onTap_runningActionsCount - 1;
if (window.obj79912_onTap_runningActionsCount < 0) {
	window.obj79912_onTap_runningActionsCount = 0;
} else if (window.obj79912_onTap_runningActionsCount == 0) {
	obj79912_onTap_actionGroup2();
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
				window.obj79912_onTap_runningActionsCount = window.obj79912_onTap_runningActionsCount - 1;
if (window.obj79912_onTap_runningActionsCount < 0) {
	window.obj79912_onTap_runningActionsCount = 0;
} else if (window.obj79912_onTap_runningActionsCount == 0) {
	obj79912_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj79912_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79912_onTap_activeActionGroupIndex = -1;
		$("#obj79912").trigger("obj79912_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79912) {
				console.warn("de-queueing event obj79912." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79912").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79912_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj79910 
move_79917();
function move_79917() {
	window.obj79912_onTap_runningActionsCount = obj79912_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj79910");
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
			window.obj79912_onTap_runningActionsCount = window.obj79912_onTap_runningActionsCount - 1;
if (window.obj79912_onTap_runningActionsCount < 0) {
	window.obj79912_onTap_runningActionsCount = 0;
} else if (window.obj79912_onTap_runningActionsCount == 0) {
	obj79912_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj79912_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj79912_onTap_activeActionGroupIndex = -1;
		$("#obj79912").trigger("obj79912_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79912) {
				console.warn("de-queueing event obj79912." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79912").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79912_onTap_activeActionGroupIndex = 3;
	





















};
obj89410_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89410_onTap_activeActionGroupIndex = -1;
		$("#obj89410").trigger("obj89410_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89410) {
				console.warn("de-queueing event obj89410." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89410").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89410_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj89415 
stopAudio_89412();
function stopAudio_89412() {
	window.obj89410_onTap_runningActionsCount = obj89410_onTap_runningActionsCount + 1;
	var myAudio = $("#obj89415")[0];
	myAudio.pause();
	window.obj89410_onTap_runningActionsCount = window.obj89410_onTap_runningActionsCount - 1;
if (window.obj89410_onTap_runningActionsCount < 0) {
	window.obj89410_onTap_runningActionsCount = 0;
} else if (window.obj89410_onTap_runningActionsCount == 0) {
	obj89410_onTap_actionGroup1();
}
}








};
obj89410_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89410_onTap_activeActionGroupIndex = -1;
		$("#obj89410").trigger("obj89410_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89410) {
				console.warn("de-queueing event obj89410." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89410").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89410_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj89410 
hide_89413();
function hide_89413() {
	var selector = "#obj89410";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj89410_onTap_runningActionsCount = obj89410_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj89410_onTap_runningActionsCount = window.obj89410_onTap_runningActionsCount - 1;
if (window.obj89410_onTap_runningActionsCount < 0) {
	window.obj89410_onTap_runningActionsCount = 0;
} else if (window.obj89410_onTap_runningActionsCount == 0) {
	obj89410_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_89413(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj89410_onTap_runningActionsCount = window.obj89410_onTap_runningActionsCount - 1;
if (window.obj89410_onTap_runningActionsCount < 0) {
	window.obj89410_onTap_runningActionsCount = 0;
} else if (window.obj89410_onTap_runningActionsCount == 0) {
	obj89410_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj89410_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89410_onTap_activeActionGroupIndex = -1;
		$("#obj89410").trigger("obj89410_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89410) {
				console.warn("de-queueing event obj89410." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89410").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89410_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj89405
(function(){
	window.obj89410_onTap_runningActionsCount = obj89410_onTap_runningActionsCount + 1;

	var selector = "#obj89405";
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
					window.obj89410_onTap_runningActionsCount = window.obj89410_onTap_runningActionsCount - 1;
if (window.obj89410_onTap_runningActionsCount < 0) {
	window.obj89410_onTap_runningActionsCount = 0;
} else if (window.obj89410_onTap_runningActionsCount == 0) {
	obj89410_onTap_actionGroup3();
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
				window.obj89410_onTap_runningActionsCount = window.obj89410_onTap_runningActionsCount - 1;
if (window.obj89410_onTap_runningActionsCount < 0) {
	window.obj89410_onTap_runningActionsCount = 0;
} else if (window.obj89410_onTap_runningActionsCount == 0) {
	obj89410_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj89410_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj89410_onTap_activeActionGroupIndex = -1;
		$("#obj89410").trigger("obj89410_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89410) {
				console.warn("de-queueing event obj89410." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89410").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89410_onTap_activeActionGroupIndex = 3;
	





















};
obj89405_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89405_onTap_activeActionGroupIndex = -1;
		$("#obj89405").trigger("obj89405_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89405) {
				console.warn("de-queueing event obj89405." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89405").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89405_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj89405 
hide_89407();
function hide_89407() {
	var selector = "#obj89405";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj89405_onTap_runningActionsCount = obj89405_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj89405_onTap_runningActionsCount = window.obj89405_onTap_runningActionsCount - 1;
if (window.obj89405_onTap_runningActionsCount < 0) {
	window.obj89405_onTap_runningActionsCount = 0;
} else if (window.obj89405_onTap_runningActionsCount == 0) {
	obj89405_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_89407(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj89405_onTap_runningActionsCount = window.obj89405_onTap_runningActionsCount - 1;
if (window.obj89405_onTap_runningActionsCount < 0) {
	window.obj89405_onTap_runningActionsCount = 0;
} else if (window.obj89405_onTap_runningActionsCount == 0) {
	obj89405_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj89405_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89405_onTap_activeActionGroupIndex = -1;
		$("#obj89405").trigger("obj89405_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89405) {
				console.warn("de-queueing event obj89405." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89405").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89405_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj89410
(function(){
	window.obj89405_onTap_runningActionsCount = obj89405_onTap_runningActionsCount + 1;

	var selector = "#obj89410";
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
					window.obj89405_onTap_runningActionsCount = window.obj89405_onTap_runningActionsCount - 1;
if (window.obj89405_onTap_runningActionsCount < 0) {
	window.obj89405_onTap_runningActionsCount = 0;
} else if (window.obj89405_onTap_runningActionsCount == 0) {
	obj89405_onTap_actionGroup2();
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
				window.obj89405_onTap_runningActionsCount = window.obj89405_onTap_runningActionsCount - 1;
if (window.obj89405_onTap_runningActionsCount < 0) {
	window.obj89405_onTap_runningActionsCount = 0;
} else if (window.obj89405_onTap_runningActionsCount == 0) {
	obj89405_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj89405_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89405_onTap_activeActionGroupIndex = -1;
		$("#obj89405").trigger("obj89405_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89405) {
				console.warn("de-queueing event obj89405." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89405").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89405_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj89415 
playAudio_89409();
function playAudio_89409() {
	window.obj89405_onTap_runningActionsCount = obj89405_onTap_runningActionsCount + 1;
	var myAudio = $("#obj89415")[0];
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
		    window.obj89405_onTap_runningActionsCount = window.obj89405_onTap_runningActionsCount - 1;
if (window.obj89405_onTap_runningActionsCount < 0) {
	window.obj89405_onTap_runningActionsCount = 0;
} else if (window.obj89405_onTap_runningActionsCount == 0) {
	obj89405_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj89405_onTap_runningActionsCount = window.obj89405_onTap_runningActionsCount - 1;
if (window.obj89405_onTap_runningActionsCount < 0) {
	window.obj89405_onTap_runningActionsCount = 0;
} else if (window.obj89405_onTap_runningActionsCount == 0) {
	obj89405_onTap_actionGroup3();
}
	}
}









};
obj89405_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj89405_onTap_activeActionGroupIndex = -1;
		$("#obj89405").trigger("obj89405_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89405) {
				console.warn("de-queueing event obj89405." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89405").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89405_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj79998: Event Touch Down
 *
 */
$("#obj79998").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj79998_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj79998_onTap is still running");
	return;
}
var obj79998_onTap_runningActionsCount = 0;
var obj79998_onTap_loopCount = 0;
obj79998_onTap_actionGroup0();
});










/*
 *
 *   obj79995: Event Touch Down
 *
 */
$("#obj79995").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj79995_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj79995_onTap is still running");
	return;
}
var obj79995_onTap_runningActionsCount = 0;
var obj79995_onTap_loopCount = 0;
obj79995_onTap_actionGroup0();
});










/*
 *
 *   obj79991: Event Touch Down
 *
 */
$("#obj79991").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj79991_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj79991_onTap is still running");
	return;
}
var obj79991_onTap_runningActionsCount = 0;
var obj79991_onTap_loopCount = 0;
obj79991_onTap_actionGroup0();
});



































































































































/*
 *
 *   obj79949: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj79949");
	var winTarget = document.getElementById("obj79949");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj79949").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj79949_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj79949_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj79949_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj79949_onTouchDown is still running");
	return;
}
var obj79949_onTouchDown_runningActionsCount = 0;
var obj79949_onTouchDown_loopCount = 0;
obj79949_onTouchDown_actionGroup0();
});



/*
 *
 *   obj79949: Event SCActionDragDrop79952_droppedOutsideTargetActions
 *
 */
$("#obj79949").bind("SCActionDragDrop79952_droppedOutsideTargetActions", function(event) {
	if (window.obj79949_SCActionDragDrop79952_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj79949_SCActionDragDrop79952_droppedOutsideTargetActions is still running");
	return;
}
var obj79949_SCActionDragDrop79952_droppedOutsideTargetActions_runningActionsCount = 0;
var obj79949_SCActionDragDrop79952_droppedOutsideTargetActions_loopCount = 0;
obj79949_SCActionDragDrop79952_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj79949: Event droppedInsideTargetActions
 *
 */
$("#obj79949").bind("droppedInsideTargetActions", function(event) {
	if (window.obj79949_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj79949_droppedInsideTargetActions is still running");
	return;
}
var obj79949_droppedInsideTargetActions_runningActionsCount = 0;
var obj79949_droppedInsideTargetActions_loopCount = 0;
obj79949_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj79938: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj79938");
	var winTarget = document.getElementById("obj79938");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj79938").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj79938_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj79938_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj79938_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj79938_onTouchDown is still running");
	return;
}
var obj79938_onTouchDown_runningActionsCount = 0;
var obj79938_onTouchDown_loopCount = 0;
obj79938_onTouchDown_actionGroup0();
});



/*
 *
 *   obj79938: Event SCActionDragDrop79941_droppedOutsideTargetActions
 *
 */
$("#obj79938").bind("SCActionDragDrop79941_droppedOutsideTargetActions", function(event) {
	if (window.obj79938_SCActionDragDrop79941_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj79938_SCActionDragDrop79941_droppedOutsideTargetActions is still running");
	return;
}
var obj79938_SCActionDragDrop79941_droppedOutsideTargetActions_runningActionsCount = 0;
var obj79938_SCActionDragDrop79941_droppedOutsideTargetActions_loopCount = 0;
obj79938_SCActionDragDrop79941_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj79938: Event droppedInsideTargetActions
 *
 */
$("#obj79938").bind("droppedInsideTargetActions", function(event) {
	if (window.obj79938_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj79938_droppedInsideTargetActions is still running");
	return;
}
var obj79938_droppedInsideTargetActions_runningActionsCount = 0;
var obj79938_droppedInsideTargetActions_loopCount = 0;
obj79938_droppedInsideTargetActions_actionGroup0();
});





/*
 *
 *   obj79920: Event Touch Down
 *
 */
$("#obj79920").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj79920_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj79920_onTap is still running");
	return;
}
var obj79920_onTap_runningActionsCount = 0;
var obj79920_onTap_loopCount = 0;
obj79920_onTap_actionGroup0();
});










/*
 *
 *   obj79912: Event Touch Down
 *
 */
$("#obj79912").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj79912_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj79912_onTap is still running");
	return;
}
var obj79912_onTap_runningActionsCount = 0;
var obj79912_onTap_loopCount = 0;
obj79912_onTap_actionGroup0();
});










/*
 *
 *   obj89410: Event Touch Down
 *
 */
$("#obj89410").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj89410_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj89410_onTap is still running");
	return;
}
var obj89410_onTap_runningActionsCount = 0;
var obj89410_onTap_loopCount = 0;
obj89410_onTap_actionGroup0();
});










/*
 *
 *   obj89405: Event Touch Down
 *
 */
$("#obj89405").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj89405_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj89405_onTap is still running");
	return;
}
var obj89405_onTap_runningActionsCount = 0;
var obj89405_onTap_loopCount = 0;
obj89405_onTap_actionGroup0();
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
	
$("#obj80001").trigger('SCEventShow');
$("#obj79998").trigger('SCEventShow');
$("#obj79995").trigger('SCEventShow');
$("#obj79991").trigger('SCEventShow');
$("#obj79989").trigger('SCEventShow');
$("#obj79987").trigger('SCEventShow');
$("#obj79985").trigger('SCEventShow');
$("#obj79983").trigger('SCEventShow');
$("#obj79981").trigger('SCEventShow');
$("#obj79979").trigger('SCEventShow');
$("#obj79977").trigger('SCEventShow');
$("#obj79975").trigger('SCEventShow');
$("#obj79973").trigger('SCEventShow');
$("#obj79971").trigger('SCEventShow');
$("#obj79969").trigger('SCEventShow');
$("#obj79967").trigger('SCEventShow');
$("#obj79949").trigger('SCEventShow');
$("#obj79938").trigger('SCEventShow');
$("#obj79920").trigger('SCEventShow');
$("#obj79912").trigger('SCEventShow');
$("#obj89410").trigger('SCEventShow');
$("#obj89405").trigger('SCEventShow');
$("#obj89415").trigger('SCEventShow');
$("#obj94817").trigger('SCEventShow');
$("#obj79910").trigger('SCEventShow');
	
});