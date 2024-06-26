pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 45994;
pubcoder.page.title = pubcoder.page.title || "157";
pubcoder.page.number = pubcoder.page.number || 157;
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
var obj46055_onTap_activeActionGroupIndex = -1;
var obj46055_onTap_runningActionsCount = 0;
var obj46055_onTap_loopCount = 0;
var obj46052_onTap_activeActionGroupIndex = -1;
var obj46052_onTap_runningActionsCount = 0;
var obj46052_onTap_loopCount = 0;
var obj46048_onTap_activeActionGroupIndex = -1;
var obj46048_onTap_runningActionsCount = 0;
var obj46048_onTap_loopCount = 0;
var obj46016_onDrag_activeActionGroupIndex = -1;
var obj46016_onDrag_runningActionsCount = 0;
var obj46016_onDrag_loopCount = 0;
var obj46016_onTouchDown_activeActionGroupIndex = -1;
var obj46016_onTouchDown_runningActionsCount = 0;
var obj46016_onTouchDown_loopCount = 0;
var obj46016_SCActionDragDrop46019_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj46016_SCActionDragDrop46019_droppedOutsideTargetActions_runningActionsCount = 0;
var obj46016_SCActionDragDrop46019_droppedOutsideTargetActions_loopCount = 0;
var obj46016_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj46016_droppedInsideTargetActions_runningActionsCount = 0;
var obj46016_droppedInsideTargetActions_loopCount = 0;
var obj45999_onDrag_activeActionGroupIndex = -1;
var obj45999_onDrag_runningActionsCount = 0;
var obj45999_onDrag_loopCount = 0;
var obj45999_onTouchDown_activeActionGroupIndex = -1;
var obj45999_onTouchDown_runningActionsCount = 0;
var obj45999_onTouchDown_loopCount = 0;
var obj45999_SCActionDragDrop46002_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj45999_SCActionDragDrop46002_droppedOutsideTargetActions_runningActionsCount = 0;
var obj45999_SCActionDragDrop46002_droppedOutsideTargetActions_loopCount = 0;
var obj45999_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj45999_droppedInsideTargetActions_runningActionsCount = 0;
var obj45999_droppedInsideTargetActions_loopCount = 0;
var obj67518_onTap_activeActionGroupIndex = -1;
var obj67518_onTap_runningActionsCount = 0;
var obj67518_onTap_loopCount = 0;
var obj67510_onTap_activeActionGroupIndex = -1;
var obj67510_onTap_runningActionsCount = 0;
var obj67510_onTap_loopCount = 0;
var obj88765_onTap_activeActionGroupIndex = -1;
var obj88765_onTap_runningActionsCount = 0;
var obj88765_onTap_loopCount = 0;
var obj88760_onTap_activeActionGroupIndex = -1;
var obj88760_onTap_runningActionsCount = 0;
var obj88760_onTap_loopCount = 0;
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
		
obj46055_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46055_onTap_activeActionGroupIndex = -1;
		$("#obj46055").trigger("obj46055_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46055) {
				console.warn("de-queueing event obj46055." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46055").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46055_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_46057();
function goToPage_46057() {
	window.obj46055_onTap_runningActionsCount = obj46055_onTap_runningActionsCount + 1;
	$("#anchor929")[0].click();
	window.obj46055_onTap_runningActionsCount = window.obj46055_onTap_runningActionsCount - 1;
if (window.obj46055_onTap_runningActionsCount < 0) {
	window.obj46055_onTap_runningActionsCount = 0;
} else if (window.obj46055_onTap_runningActionsCount == 0) {
	obj46055_onTap_actionGroup1();
}
}





















};
obj46055_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj46055_onTap_activeActionGroupIndex = -1;
		$("#obj46055").trigger("obj46055_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46055) {
				console.warn("de-queueing event obj46055." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46055").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46055_onTap_activeActionGroupIndex = 1;
	





















};
obj46052_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46052_onTap_activeActionGroupIndex = -1;
		$("#obj46052").trigger("obj46052_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46052) {
				console.warn("de-queueing event obj46052." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46052").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46052_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_46054();
function goToPage_46054() {
	window.obj46052_onTap_runningActionsCount = obj46052_onTap_runningActionsCount + 1;
	$("#anchor930")[0].click();
	window.obj46052_onTap_runningActionsCount = window.obj46052_onTap_runningActionsCount - 1;
if (window.obj46052_onTap_runningActionsCount < 0) {
	window.obj46052_onTap_runningActionsCount = 0;
} else if (window.obj46052_onTap_runningActionsCount == 0) {
	obj46052_onTap_actionGroup1();
}
}





















};
obj46052_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj46052_onTap_activeActionGroupIndex = -1;
		$("#obj46052").trigger("obj46052_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46052) {
				console.warn("de-queueing event obj46052." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46052").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46052_onTap_activeActionGroupIndex = 1;
	





















};
obj46048_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46048_onTap_activeActionGroupIndex = -1;
		$("#obj46048").trigger("obj46048_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46048) {
				console.warn("de-queueing event obj46048." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46048").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46048_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_46050();
function goToPage_46050() {
	window.obj46048_onTap_runningActionsCount = obj46048_onTap_runningActionsCount + 1;
	$("#anchor931")[0].click();
	window.obj46048_onTap_runningActionsCount = window.obj46048_onTap_runningActionsCount - 1;
if (window.obj46048_onTap_runningActionsCount < 0) {
	window.obj46048_onTap_runningActionsCount = 0;
} else if (window.obj46048_onTap_runningActionsCount == 0) {
	obj46048_onTap_actionGroup1();
}
}





















};
obj46048_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj46048_onTap_activeActionGroupIndex = -1;
		$("#obj46048").trigger("obj46048_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46048) {
				console.warn("de-queueing event obj46048." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46048").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46048_onTap_activeActionGroupIndex = 1;
	





















};
obj46016_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46016_onTouchDown_activeActionGroupIndex = -1;
		$("#obj46016").trigger("obj46016_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46016) {
				console.warn("de-queueing event obj46016." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46016").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46016_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj46016");
//	action: dragDrop
//	target: obj46016 
dragDrop_46019();
function dragDrop_46019() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj46016_onTouchDown_runningActionsCount = obj46016_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj46016');
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
	  	containerNode = $('#obj46040');
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
    	window.obj46016_onTouchDown_runningActionsCount = window.obj46016_onTouchDown_runningActionsCount - 1;
if (window.obj46016_onTouchDown_runningActionsCount < 0) {
	window.obj46016_onTouchDown_runningActionsCount = 0;
} else if (window.obj46016_onTouchDown_runningActionsCount == 0) {
	obj46016_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj46036");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_46019 = false;
    	var dropped_id_46019;
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
					dropped_46019 = true;
					dropped_id_46019 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_46019) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj46016").trigger('SCActionDragDrop46019_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj46016_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj46016_onTouchDown_activeActionGroupIndex = -1;
		$("#obj46016").trigger("obj46016_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46016) {
				console.warn("de-queueing event obj46016." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46016").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46016_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj46016_SCActionDragDrop46019_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46016_SCActionDragDrop46019_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj46016").trigger("obj46016_SCActionDragDrop46019_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46016) {
				console.warn("de-queueing event obj46016." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46016").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46016_SCActionDragDrop46019_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj46016 
move_92691();
function move_92691() {
	window.obj46016_SCActionDragDrop46019_droppedOutsideTargetActions_runningActionsCount = obj46016_SCActionDragDrop46019_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj46016");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 130;
	var moveY = 555;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj46016_SCActionDragDrop46019_droppedOutsideTargetActions_runningActionsCount = window.obj46016_SCActionDragDrop46019_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj46016_SCActionDragDrop46019_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj46016_SCActionDragDrop46019_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj46016_SCActionDragDrop46019_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj46016_SCActionDragDrop46019_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj46016_SCActionDragDrop46019_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj46016_SCActionDragDrop46019_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj46016").trigger("obj46016_SCActionDragDrop46019_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46016) {
				console.warn("de-queueing event obj46016." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46016").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46016_SCActionDragDrop46019_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj46016_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46016_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj46016").trigger("obj46016_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46016) {
				console.warn("de-queueing event obj46016." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46016").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46016_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_46021();
function runjs_46021() {
	window.obj46016_droppedInsideTargetActions_runningActionsCount = obj46016_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj46036").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj46016_droppedInsideTargetActions_runningActionsCount = window.obj46016_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj46016_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj46016_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj46016_droppedInsideTargetActions_runningActionsCount == 0) {
	obj46016_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj46016_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46016_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj46016").trigger("obj46016_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46016) {
				console.warn("de-queueing event obj46016." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46016").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46016_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_46022();
function runjs_46022() {
	window.obj46016_droppedInsideTargetActions_runningActionsCount = obj46016_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj46036").css("border-color", "#C00000"); $("#obj46036").css("border-width", "2px"); $("#obj46036").css("border-style", "solid"); $("#obj46036").css("border-radius", "10px"); $("#obj46036").css("-webkit-border-radius", "10px"); $("#obj46036").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj46016_droppedInsideTargetActions_runningActionsCount = window.obj46016_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj46016_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj46016_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj46016_droppedInsideTargetActions_runningActionsCount == 0) {
	obj46016_droppedInsideTargetActions_actionGroup2();
}
	}, 1);
}







};
obj46016_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46016_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj46016").trigger("obj46016_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46016) {
				console.warn("de-queueing event obj46016." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46016").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46016_droppedInsideTargetActions_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj46034 
hide_46023();
function hide_46023() {
	var selector = "#obj46034";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj46016_droppedInsideTargetActions_runningActionsCount = obj46016_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj46016_droppedInsideTargetActions_runningActionsCount = window.obj46016_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj46016_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj46016_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj46016_droppedInsideTargetActions_runningActionsCount == 0) {
	obj46016_droppedInsideTargetActions_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_46023(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj46016_droppedInsideTargetActions_runningActionsCount = window.obj46016_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj46016_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj46016_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj46016_droppedInsideTargetActions_runningActionsCount == 0) {
	obj46016_droppedInsideTargetActions_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj46016_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46016_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj46016").trigger("obj46016_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46016) {
				console.warn("de-queueing event obj46016." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46016").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46016_droppedInsideTargetActions_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_46024();
function runjs_46024() {
	window.obj46016_droppedInsideTargetActions_runningActionsCount = obj46016_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj46016").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj46016_droppedInsideTargetActions_runningActionsCount = window.obj46016_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj46016_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj46016_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj46016_droppedInsideTargetActions_runningActionsCount == 0) {
	obj46016_droppedInsideTargetActions_actionGroup4();
}
	}, 1);
}







};
obj46016_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46016_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj46016").trigger("obj46016_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46016) {
				console.warn("de-queueing event obj46016." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46016").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46016_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_46025();
function switchText_46025() {
	window.obj46016_droppedInsideTargetActions_runningActionsCount = obj46016_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj46010_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj46010_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj46010").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj46010_content");
			setTimeout(function () {
				window.obj46016_droppedInsideTargetActions_runningActionsCount = window.obj46016_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj46016_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj46016_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj46016_droppedInsideTargetActions_runningActionsCount == 0) {
	obj46016_droppedInsideTargetActions_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj46010 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj46016_droppedInsideTargetActions_runningActionsCount = window.obj46016_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj46016_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj46016_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj46016_droppedInsideTargetActions_runningActionsCount == 0) {
	obj46016_droppedInsideTargetActions_actionGroup5();
}
		}, 1);
	}
}






};
obj46016_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46016_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj46016").trigger("obj46016_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46016) {
				console.warn("de-queueing event obj46016." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46016").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46016_droppedInsideTargetActions_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj46016 
move_46026();
function move_46026() {
	window.obj46016_droppedInsideTargetActions_runningActionsCount = obj46016_droppedInsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj46016");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 130;
	var moveY = 555;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj46016_droppedInsideTargetActions_runningActionsCount = window.obj46016_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj46016_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj46016_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj46016_droppedInsideTargetActions_runningActionsCount == 0) {
	obj46016_droppedInsideTargetActions_actionGroup6();
}
		}, 1);
	});
}



















};
obj46016_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46016_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj46016").trigger("obj46016_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46016) {
				console.warn("de-queueing event obj46016." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46016").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46016_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_46027();
function runjs_46027() {
	window.obj46016_droppedInsideTargetActions_runningActionsCount = obj46016_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj46036").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj46016_droppedInsideTargetActions_runningActionsCount = window.obj46016_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj46016_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj46016_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj46016_droppedInsideTargetActions_runningActionsCount == 0) {
	obj46016_droppedInsideTargetActions_actionGroup7();
}
	}, 1);
}







};
obj46016_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46016_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj46016").trigger("obj46016_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46016) {
				console.warn("de-queueing event obj46016." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46016").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46016_droppedInsideTargetActions_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_46028();
function runjs_46028() {
	window.obj46016_droppedInsideTargetActions_runningActionsCount = obj46016_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj46036").css("border-color", "#000000"); $("#obj46036").css("border-width", "1px"); $("#obj46036").css("border-style", "solid"); $("#obj46036").css("border-radius", "10px"); $("#obj46036").css("-webkit-border-radius", "10px"); $("#obj46036").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj46016_droppedInsideTargetActions_runningActionsCount = window.obj46016_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj46016_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj46016_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj46016_droppedInsideTargetActions_runningActionsCount == 0) {
	obj46016_droppedInsideTargetActions_actionGroup8();
}
	}, 1);
}







};
obj46016_droppedInsideTargetActions_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46016_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj46016").trigger("obj46016_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46016) {
				console.warn("de-queueing event obj46016." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46016").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46016_droppedInsideTargetActions_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj46034
(function(){
	window.obj46016_droppedInsideTargetActions_runningActionsCount = obj46016_droppedInsideTargetActions_runningActionsCount + 1;

	var selector = "#obj46034";
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
					window.obj46016_droppedInsideTargetActions_runningActionsCount = window.obj46016_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj46016_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj46016_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj46016_droppedInsideTargetActions_runningActionsCount == 0) {
	obj46016_droppedInsideTargetActions_actionGroup9();
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
				window.obj46016_droppedInsideTargetActions_runningActionsCount = window.obj46016_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj46016_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj46016_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj46016_droppedInsideTargetActions_runningActionsCount == 0) {
	obj46016_droppedInsideTargetActions_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj46016_droppedInsideTargetActions_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46016_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj46016").trigger("obj46016_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46016) {
				console.warn("de-queueing event obj46016." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46016").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46016_droppedInsideTargetActions_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_46030();
function runjs_46030() {
	window.obj46016_droppedInsideTargetActions_runningActionsCount = obj46016_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj46016").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj46016_droppedInsideTargetActions_runningActionsCount = window.obj46016_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj46016_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj46016_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj46016_droppedInsideTargetActions_runningActionsCount == 0) {
	obj46016_droppedInsideTargetActions_actionGroup10();
}
	}, 1);
}







};
obj46016_droppedInsideTargetActions_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46016_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj46016").trigger("obj46016_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46016) {
				console.warn("de-queueing event obj46016." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46016").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46016_droppedInsideTargetActions_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_46031();
function runjs_46031() {
	window.obj46016_droppedInsideTargetActions_runningActionsCount = obj46016_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj46016").css("border-color", "rgba(0,0,0,0)"); $("#obj46016").css("border-width", "0px"); $("#obj46016").css("border-style", "solid"); $("#obj46016").css("border-radius", "10px"); $("#obj46016").css("-webkit-border-radius", "10px"); $("#obj46016").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj46016_droppedInsideTargetActions_runningActionsCount = window.obj46016_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj46016_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj46016_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj46016_droppedInsideTargetActions_runningActionsCount == 0) {
	obj46016_droppedInsideTargetActions_actionGroup11();
}
	}, 1);
}







};
obj46016_droppedInsideTargetActions_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46016_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj46016").trigger("obj46016_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46016) {
				console.warn("de-queueing event obj46016." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46016").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46016_droppedInsideTargetActions_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj45995 
playAudio_46032();
function playAudio_46032() {
	window.obj46016_droppedInsideTargetActions_runningActionsCount = obj46016_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj45995")[0];
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
		    window.obj46016_droppedInsideTargetActions_runningActionsCount = window.obj46016_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj46016_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj46016_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj46016_droppedInsideTargetActions_runningActionsCount == 0) {
	obj46016_droppedInsideTargetActions_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj46016_droppedInsideTargetActions_runningActionsCount = window.obj46016_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj46016_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj46016_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj46016_droppedInsideTargetActions_runningActionsCount == 0) {
	obj46016_droppedInsideTargetActions_actionGroup12();
}
	}
}









};
obj46016_droppedInsideTargetActions_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46016_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj46016").trigger("obj46016_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46016) {
				console.warn("de-queueing event obj46016." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46016").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46016_droppedInsideTargetActions_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_46033();
function switchText_46033() {
	window.obj46016_droppedInsideTargetActions_runningActionsCount = obj46016_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj46010_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj46010_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj46010").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj46010_content");
			setTimeout(function () {
				window.obj46016_droppedInsideTargetActions_runningActionsCount = window.obj46016_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj46016_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj46016_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj46016_droppedInsideTargetActions_runningActionsCount == 0) {
	obj46016_droppedInsideTargetActions_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj46010 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj46016_droppedInsideTargetActions_runningActionsCount = window.obj46016_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj46016_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj46016_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj46016_droppedInsideTargetActions_runningActionsCount == 0) {
	obj46016_droppedInsideTargetActions_actionGroup13();
}
		}, 1);
	}
}






};
obj46016_droppedInsideTargetActions_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj46016_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj46016").trigger("obj46016_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46016) {
				console.warn("de-queueing event obj46016." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46016").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46016_droppedInsideTargetActions_activeActionGroupIndex = 13;
	





















};
obj45999_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45999_onTouchDown_activeActionGroupIndex = -1;
		$("#obj45999").trigger("obj45999_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45999) {
				console.warn("de-queueing event obj45999." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45999").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45999_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj45999");
//	action: dragDrop
//	target: obj45999 
dragDrop_46002();
function dragDrop_46002() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj45999_onTouchDown_runningActionsCount = obj45999_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj45999');
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
	  	containerNode = $('#obj46040');
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
    	window.obj45999_onTouchDown_runningActionsCount = window.obj45999_onTouchDown_runningActionsCount - 1;
if (window.obj45999_onTouchDown_runningActionsCount < 0) {
	window.obj45999_onTouchDown_runningActionsCount = 0;
} else if (window.obj45999_onTouchDown_runningActionsCount == 0) {
	obj45999_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj46036");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_46002 = false;
    	var dropped_id_46002;
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
					dropped_46002 = true;
					dropped_id_46002 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_46002) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj45999").trigger('SCActionDragDrop46002_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj45999_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj45999_onTouchDown_activeActionGroupIndex = -1;
		$("#obj45999").trigger("obj45999_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45999) {
				console.warn("de-queueing event obj45999." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45999").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45999_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj45999_SCActionDragDrop46002_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45999_SCActionDragDrop46002_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj45999").trigger("obj45999_SCActionDragDrop46002_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45999) {
				console.warn("de-queueing event obj45999." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45999").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45999_SCActionDragDrop46002_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj45999 
move_92693();
function move_92693() {
	window.obj45999_SCActionDragDrop46002_droppedOutsideTargetActions_runningActionsCount = obj45999_SCActionDragDrop46002_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj45999");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 337;
	var moveY = 554;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj45999_SCActionDragDrop46002_droppedOutsideTargetActions_runningActionsCount = window.obj45999_SCActionDragDrop46002_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj45999_SCActionDragDrop46002_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj45999_SCActionDragDrop46002_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj45999_SCActionDragDrop46002_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj45999_SCActionDragDrop46002_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj45999_SCActionDragDrop46002_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj45999_SCActionDragDrop46002_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj45999").trigger("obj45999_SCActionDragDrop46002_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45999) {
				console.warn("de-queueing event obj45999." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45999").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45999_SCActionDragDrop46002_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj45999_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45999_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj45999").trigger("obj45999_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45999) {
				console.warn("de-queueing event obj45999." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45999").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45999_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_46004();
function runjs_46004() {
	window.obj45999_droppedInsideTargetActions_runningActionsCount = obj45999_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj46036").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj45999_droppedInsideTargetActions_runningActionsCount = window.obj45999_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj45999_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj45999_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj45999_droppedInsideTargetActions_runningActionsCount == 0) {
	obj45999_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj45999_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45999_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj45999").trigger("obj45999_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45999) {
				console.warn("de-queueing event obj45999." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45999").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45999_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_46008();
function switchText_46008() {
	window.obj45999_droppedInsideTargetActions_runningActionsCount = obj45999_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj46010_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj46010_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj46010").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj46010_content");
			setTimeout(function () {
				window.obj45999_droppedInsideTargetActions_runningActionsCount = window.obj45999_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj45999_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj45999_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj45999_droppedInsideTargetActions_runningActionsCount == 0) {
	obj45999_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj46010 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj45999_droppedInsideTargetActions_runningActionsCount = window.obj45999_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj45999_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj45999_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj45999_droppedInsideTargetActions_runningActionsCount == 0) {
	obj45999_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj45999_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45999_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj45999").trigger("obj45999_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45999) {
				console.warn("de-queueing event obj45999." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45999").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45999_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_46005();
function runjs_46005() {
	window.obj45999_droppedInsideTargetActions_runningActionsCount = obj45999_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj46036").css("border-color", "#058E3F"); $("#obj46036").css("border-width", "2px"); $("#obj46036").css("border-style", "solid"); $("#obj46036").css("border-radius", "10px"); $("#obj46036").css("-webkit-border-radius", "10px"); $("#obj46036").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj45999_droppedInsideTargetActions_runningActionsCount = window.obj45999_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj45999_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj45999_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj45999_droppedInsideTargetActions_runningActionsCount == 0) {
	obj45999_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj45999_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45999_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj45999").trigger("obj45999_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45999) {
				console.warn("de-queueing event obj45999." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45999").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45999_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj46034 
hide_46006();
function hide_46006() {
	var selector = "#obj46034";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj45999_droppedInsideTargetActions_runningActionsCount = obj45999_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj45999_droppedInsideTargetActions_runningActionsCount = window.obj45999_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj45999_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj45999_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj45999_droppedInsideTargetActions_runningActionsCount == 0) {
	obj45999_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_46006(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj45999_droppedInsideTargetActions_runningActionsCount = window.obj45999_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj45999_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj45999_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj45999_droppedInsideTargetActions_runningActionsCount == 0) {
	obj45999_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj45999_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45999_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj45999").trigger("obj45999_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45999) {
				console.warn("de-queueing event obj45999." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45999").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45999_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_46007();
function runjs_46007() {
	window.obj45999_droppedInsideTargetActions_runningActionsCount = obj45999_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj45999").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj45999_droppedInsideTargetActions_runningActionsCount = window.obj45999_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj45999_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj45999_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj45999_droppedInsideTargetActions_runningActionsCount == 0) {
	obj45999_droppedInsideTargetActions_actionGroup5();
}
	}, 1);
}







};
obj45999_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45999_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj45999").trigger("obj45999_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45999) {
				console.warn("de-queueing event obj45999." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45999").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45999_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj46014 
playAudio_46009();
function playAudio_46009() {
	window.obj45999_droppedInsideTargetActions_runningActionsCount = obj45999_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj46014")[0];
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
		    window.obj45999_droppedInsideTargetActions_runningActionsCount = window.obj45999_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj45999_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj45999_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj45999_droppedInsideTargetActions_runningActionsCount == 0) {
	obj45999_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj45999_droppedInsideTargetActions_runningActionsCount = window.obj45999_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj45999_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj45999_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj45999_droppedInsideTargetActions_runningActionsCount == 0) {
	obj45999_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj45999_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45999_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj45999").trigger("obj45999_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45999) {
				console.warn("de-queueing event obj45999." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45999").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45999_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90580();
function switchText_90580() {
	window.obj45999_droppedInsideTargetActions_runningActionsCount = obj45999_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj46010_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj46010_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj46010").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj46010_content");
			setTimeout(function () {
				window.obj45999_droppedInsideTargetActions_runningActionsCount = window.obj45999_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj45999_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj45999_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj45999_droppedInsideTargetActions_runningActionsCount == 0) {
	obj45999_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj46010 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj45999_droppedInsideTargetActions_runningActionsCount = window.obj45999_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj45999_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj45999_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj45999_droppedInsideTargetActions_runningActionsCount == 0) {
	obj45999_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj45999_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj45999_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj45999").trigger("obj45999_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45999) {
				console.warn("de-queueing event obj45999." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45999").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45999_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj67518_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67518_onTap_activeActionGroupIndex = -1;
		$("#obj67518").trigger("obj67518_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67518) {
				console.warn("de-queueing event obj67518." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67518").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67518_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj67518 
hide_67521();
function hide_67521() {
	var selector = "#obj67518";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj67518_onTap_runningActionsCount = obj67518_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj67518_onTap_runningActionsCount = window.obj67518_onTap_runningActionsCount - 1;
if (window.obj67518_onTap_runningActionsCount < 0) {
	window.obj67518_onTap_runningActionsCount = 0;
} else if (window.obj67518_onTap_runningActionsCount == 0) {
	obj67518_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_67521(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj67518_onTap_runningActionsCount = window.obj67518_onTap_runningActionsCount - 1;
if (window.obj67518_onTap_runningActionsCount < 0) {
	window.obj67518_onTap_runningActionsCount = 0;
} else if (window.obj67518_onTap_runningActionsCount == 0) {
	obj67518_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj67524 
stopMovie_67520();
function stopMovie_67520() {
	window.obj67518_onTap_runningActionsCount = obj67518_onTap_runningActionsCount + 1;
	var myVideo = $("#obj67524")[0];
	myVideo.pause();
	window.obj67518_onTap_runningActionsCount = window.obj67518_onTap_runningActionsCount - 1;
if (window.obj67518_onTap_runningActionsCount < 0) {
	window.obj67518_onTap_runningActionsCount = 0;
} else if (window.obj67518_onTap_runningActionsCount == 0) {
	obj67518_onTap_actionGroup1();
}
}
















};
obj67518_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67518_onTap_activeActionGroupIndex = -1;
		$("#obj67518").trigger("obj67518_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67518) {
				console.warn("de-queueing event obj67518." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67518").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67518_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj67510
(function(){
	window.obj67518_onTap_runningActionsCount = obj67518_onTap_runningActionsCount + 1;

	var selector = "#obj67510";
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
					window.obj67518_onTap_runningActionsCount = window.obj67518_onTap_runningActionsCount - 1;
if (window.obj67518_onTap_runningActionsCount < 0) {
	window.obj67518_onTap_runningActionsCount = 0;
} else if (window.obj67518_onTap_runningActionsCount == 0) {
	obj67518_onTap_actionGroup2();
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
				window.obj67518_onTap_runningActionsCount = window.obj67518_onTap_runningActionsCount - 1;
if (window.obj67518_onTap_runningActionsCount < 0) {
	window.obj67518_onTap_runningActionsCount = 0;
} else if (window.obj67518_onTap_runningActionsCount == 0) {
	obj67518_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj67518_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67518_onTap_activeActionGroupIndex = -1;
		$("#obj67518").trigger("obj67518_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67518) {
				console.warn("de-queueing event obj67518." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67518").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67518_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj67524 
move_67523();
function move_67523() {
	window.obj67518_onTap_runningActionsCount = obj67518_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj67524");
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
			window.obj67518_onTap_runningActionsCount = window.obj67518_onTap_runningActionsCount - 1;
if (window.obj67518_onTap_runningActionsCount < 0) {
	window.obj67518_onTap_runningActionsCount = 0;
} else if (window.obj67518_onTap_runningActionsCount == 0) {
	obj67518_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj67518_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj67518_onTap_activeActionGroupIndex = -1;
		$("#obj67518").trigger("obj67518_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67518) {
				console.warn("de-queueing event obj67518." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67518").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67518_onTap_activeActionGroupIndex = 3;
	





















};
obj67510_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67510_onTap_activeActionGroupIndex = -1;
		$("#obj67510").trigger("obj67510_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67510) {
				console.warn("de-queueing event obj67510." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67510").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67510_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj67510 
hide_67513();
function hide_67513() {
	var selector = "#obj67510";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj67510_onTap_runningActionsCount = obj67510_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj67510_onTap_runningActionsCount = window.obj67510_onTap_runningActionsCount - 1;
if (window.obj67510_onTap_runningActionsCount < 0) {
	window.obj67510_onTap_runningActionsCount = 0;
} else if (window.obj67510_onTap_runningActionsCount == 0) {
	obj67510_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_67513(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj67510_onTap_runningActionsCount = window.obj67510_onTap_runningActionsCount - 1;
if (window.obj67510_onTap_runningActionsCount < 0) {
	window.obj67510_onTap_runningActionsCount = 0;
} else if (window.obj67510_onTap_runningActionsCount == 0) {
	obj67510_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj67524 
playPauseMovie_67512();
function playPauseMovie_67512() {
	window.obj67510_onTap_runningActionsCount = obj67510_onTap_runningActionsCount + 1;
	var myVideo = $("#obj67524")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj67510_onTap_runningActionsCount = window.obj67510_onTap_runningActionsCount - 1;
if (window.obj67510_onTap_runningActionsCount < 0) {
	window.obj67510_onTap_runningActionsCount = 0;
} else if (window.obj67510_onTap_runningActionsCount == 0) {
	obj67510_onTap_actionGroup1();
}
}

















};
obj67510_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67510_onTap_activeActionGroupIndex = -1;
		$("#obj67510").trigger("obj67510_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67510) {
				console.warn("de-queueing event obj67510." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67510").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67510_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj67518
(function(){
	window.obj67510_onTap_runningActionsCount = obj67510_onTap_runningActionsCount + 1;

	var selector = "#obj67518";
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
					window.obj67510_onTap_runningActionsCount = window.obj67510_onTap_runningActionsCount - 1;
if (window.obj67510_onTap_runningActionsCount < 0) {
	window.obj67510_onTap_runningActionsCount = 0;
} else if (window.obj67510_onTap_runningActionsCount == 0) {
	obj67510_onTap_actionGroup2();
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
				window.obj67510_onTap_runningActionsCount = window.obj67510_onTap_runningActionsCount - 1;
if (window.obj67510_onTap_runningActionsCount < 0) {
	window.obj67510_onTap_runningActionsCount = 0;
} else if (window.obj67510_onTap_runningActionsCount == 0) {
	obj67510_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj67510_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67510_onTap_activeActionGroupIndex = -1;
		$("#obj67510").trigger("obj67510_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67510) {
				console.warn("de-queueing event obj67510." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67510").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67510_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj67524 
move_67515();
function move_67515() {
	window.obj67510_onTap_runningActionsCount = obj67510_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj67524");
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
			window.obj67510_onTap_runningActionsCount = window.obj67510_onTap_runningActionsCount - 1;
if (window.obj67510_onTap_runningActionsCount < 0) {
	window.obj67510_onTap_runningActionsCount = 0;
} else if (window.obj67510_onTap_runningActionsCount == 0) {
	obj67510_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj67510_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj67510_onTap_activeActionGroupIndex = -1;
		$("#obj67510").trigger("obj67510_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67510) {
				console.warn("de-queueing event obj67510." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67510").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67510_onTap_activeActionGroupIndex = 3;
	





















};
obj88765_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88765_onTap_activeActionGroupIndex = -1;
		$("#obj88765").trigger("obj88765_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88765) {
				console.warn("de-queueing event obj88765." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88765").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88765_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj88770 
stopAudio_88767();
function stopAudio_88767() {
	window.obj88765_onTap_runningActionsCount = obj88765_onTap_runningActionsCount + 1;
	var myAudio = $("#obj88770")[0];
	myAudio.pause();
	window.obj88765_onTap_runningActionsCount = window.obj88765_onTap_runningActionsCount - 1;
if (window.obj88765_onTap_runningActionsCount < 0) {
	window.obj88765_onTap_runningActionsCount = 0;
} else if (window.obj88765_onTap_runningActionsCount == 0) {
	obj88765_onTap_actionGroup1();
}
}








};
obj88765_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88765_onTap_activeActionGroupIndex = -1;
		$("#obj88765").trigger("obj88765_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88765) {
				console.warn("de-queueing event obj88765." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88765").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88765_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj88765 
hide_88768();
function hide_88768() {
	var selector = "#obj88765";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj88765_onTap_runningActionsCount = obj88765_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj88765_onTap_runningActionsCount = window.obj88765_onTap_runningActionsCount - 1;
if (window.obj88765_onTap_runningActionsCount < 0) {
	window.obj88765_onTap_runningActionsCount = 0;
} else if (window.obj88765_onTap_runningActionsCount == 0) {
	obj88765_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_88768(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj88765_onTap_runningActionsCount = window.obj88765_onTap_runningActionsCount - 1;
if (window.obj88765_onTap_runningActionsCount < 0) {
	window.obj88765_onTap_runningActionsCount = 0;
} else if (window.obj88765_onTap_runningActionsCount == 0) {
	obj88765_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj88765_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88765_onTap_activeActionGroupIndex = -1;
		$("#obj88765").trigger("obj88765_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88765) {
				console.warn("de-queueing event obj88765." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88765").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88765_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj88760
(function(){
	window.obj88765_onTap_runningActionsCount = obj88765_onTap_runningActionsCount + 1;

	var selector = "#obj88760";
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
					window.obj88765_onTap_runningActionsCount = window.obj88765_onTap_runningActionsCount - 1;
if (window.obj88765_onTap_runningActionsCount < 0) {
	window.obj88765_onTap_runningActionsCount = 0;
} else if (window.obj88765_onTap_runningActionsCount == 0) {
	obj88765_onTap_actionGroup3();
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
				window.obj88765_onTap_runningActionsCount = window.obj88765_onTap_runningActionsCount - 1;
if (window.obj88765_onTap_runningActionsCount < 0) {
	window.obj88765_onTap_runningActionsCount = 0;
} else if (window.obj88765_onTap_runningActionsCount == 0) {
	obj88765_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj88765_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj88765_onTap_activeActionGroupIndex = -1;
		$("#obj88765").trigger("obj88765_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88765) {
				console.warn("de-queueing event obj88765." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88765").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88765_onTap_activeActionGroupIndex = 3;
	





















};
obj88760_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88760_onTap_activeActionGroupIndex = -1;
		$("#obj88760").trigger("obj88760_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88760) {
				console.warn("de-queueing event obj88760." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88760").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88760_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj88760 
hide_88762();
function hide_88762() {
	var selector = "#obj88760";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj88760_onTap_runningActionsCount = obj88760_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj88760_onTap_runningActionsCount = window.obj88760_onTap_runningActionsCount - 1;
if (window.obj88760_onTap_runningActionsCount < 0) {
	window.obj88760_onTap_runningActionsCount = 0;
} else if (window.obj88760_onTap_runningActionsCount == 0) {
	obj88760_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_88762(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj88760_onTap_runningActionsCount = window.obj88760_onTap_runningActionsCount - 1;
if (window.obj88760_onTap_runningActionsCount < 0) {
	window.obj88760_onTap_runningActionsCount = 0;
} else if (window.obj88760_onTap_runningActionsCount == 0) {
	obj88760_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj88760_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88760_onTap_activeActionGroupIndex = -1;
		$("#obj88760").trigger("obj88760_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88760) {
				console.warn("de-queueing event obj88760." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88760").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88760_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj88765
(function(){
	window.obj88760_onTap_runningActionsCount = obj88760_onTap_runningActionsCount + 1;

	var selector = "#obj88765";
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
					window.obj88760_onTap_runningActionsCount = window.obj88760_onTap_runningActionsCount - 1;
if (window.obj88760_onTap_runningActionsCount < 0) {
	window.obj88760_onTap_runningActionsCount = 0;
} else if (window.obj88760_onTap_runningActionsCount == 0) {
	obj88760_onTap_actionGroup2();
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
				window.obj88760_onTap_runningActionsCount = window.obj88760_onTap_runningActionsCount - 1;
if (window.obj88760_onTap_runningActionsCount < 0) {
	window.obj88760_onTap_runningActionsCount = 0;
} else if (window.obj88760_onTap_runningActionsCount == 0) {
	obj88760_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj88760_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88760_onTap_activeActionGroupIndex = -1;
		$("#obj88760").trigger("obj88760_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88760) {
				console.warn("de-queueing event obj88760." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88760").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88760_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj88770 
playAudio_88764();
function playAudio_88764() {
	window.obj88760_onTap_runningActionsCount = obj88760_onTap_runningActionsCount + 1;
	var myAudio = $("#obj88770")[0];
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
		    window.obj88760_onTap_runningActionsCount = window.obj88760_onTap_runningActionsCount - 1;
if (window.obj88760_onTap_runningActionsCount < 0) {
	window.obj88760_onTap_runningActionsCount = 0;
} else if (window.obj88760_onTap_runningActionsCount == 0) {
	obj88760_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj88760_onTap_runningActionsCount = window.obj88760_onTap_runningActionsCount - 1;
if (window.obj88760_onTap_runningActionsCount < 0) {
	window.obj88760_onTap_runningActionsCount = 0;
} else if (window.obj88760_onTap_runningActionsCount == 0) {
	obj88760_onTap_actionGroup3();
}
	}
}









};
obj88760_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj88760_onTap_activeActionGroupIndex = -1;
		$("#obj88760").trigger("obj88760_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88760) {
				console.warn("de-queueing event obj88760." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88760").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88760_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj46055: Event Touch Down
 *
 */
$("#obj46055").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj46055_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj46055_onTap is still running");
	return;
}
var obj46055_onTap_runningActionsCount = 0;
var obj46055_onTap_loopCount = 0;
obj46055_onTap_actionGroup0();
});










/*
 *
 *   obj46052: Event Touch Down
 *
 */
$("#obj46052").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj46052_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj46052_onTap is still running");
	return;
}
var obj46052_onTap_runningActionsCount = 0;
var obj46052_onTap_loopCount = 0;
obj46052_onTap_actionGroup0();
});










/*
 *
 *   obj46048: Event Touch Down
 *
 */
$("#obj46048").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj46048_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj46048_onTap is still running");
	return;
}
var obj46048_onTap_runningActionsCount = 0;
var obj46048_onTap_loopCount = 0;
obj46048_onTap_actionGroup0();
});

















































































/*
 *
 *   obj46016: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj46016");
	var winTarget = document.getElementById("obj46016");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj46016").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj46016_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj46016_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj46016_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj46016_onTouchDown is still running");
	return;
}
var obj46016_onTouchDown_runningActionsCount = 0;
var obj46016_onTouchDown_loopCount = 0;
obj46016_onTouchDown_actionGroup0();
});



/*
 *
 *   obj46016: Event SCActionDragDrop46019_droppedOutsideTargetActions
 *
 */
$("#obj46016").bind("SCActionDragDrop46019_droppedOutsideTargetActions", function(event) {
	if (window.obj46016_SCActionDragDrop46019_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj46016_SCActionDragDrop46019_droppedOutsideTargetActions is still running");
	return;
}
var obj46016_SCActionDragDrop46019_droppedOutsideTargetActions_runningActionsCount = 0;
var obj46016_SCActionDragDrop46019_droppedOutsideTargetActions_loopCount = 0;
obj46016_SCActionDragDrop46019_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj46016: Event droppedInsideTargetActions
 *
 */
$("#obj46016").bind("droppedInsideTargetActions", function(event) {
	if (window.obj46016_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj46016_droppedInsideTargetActions is still running");
	return;
}
var obj46016_droppedInsideTargetActions_runningActionsCount = 0;
var obj46016_droppedInsideTargetActions_loopCount = 0;
obj46016_droppedInsideTargetActions_actionGroup0();
});




































/*
 *
 *   obj45999: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj45999");
	var winTarget = document.getElementById("obj45999");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj45999").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj45999_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj45999_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj45999_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj45999_onTouchDown is still running");
	return;
}
var obj45999_onTouchDown_runningActionsCount = 0;
var obj45999_onTouchDown_loopCount = 0;
obj45999_onTouchDown_actionGroup0();
});



/*
 *
 *   obj45999: Event SCActionDragDrop46002_droppedOutsideTargetActions
 *
 */
$("#obj45999").bind("SCActionDragDrop46002_droppedOutsideTargetActions", function(event) {
	if (window.obj45999_SCActionDragDrop46002_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj45999_SCActionDragDrop46002_droppedOutsideTargetActions is still running");
	return;
}
var obj45999_SCActionDragDrop46002_droppedOutsideTargetActions_runningActionsCount = 0;
var obj45999_SCActionDragDrop46002_droppedOutsideTargetActions_loopCount = 0;
obj45999_SCActionDragDrop46002_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj45999: Event droppedInsideTargetActions
 *
 */
$("#obj45999").bind("droppedInsideTargetActions", function(event) {
	if (window.obj45999_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj45999_droppedInsideTargetActions is still running");
	return;
}
var obj45999_droppedInsideTargetActions_runningActionsCount = 0;
var obj45999_droppedInsideTargetActions_loopCount = 0;
obj45999_droppedInsideTargetActions_actionGroup0();
});

























/*
 *
 *   obj67518: Event Touch Down
 *
 */
$("#obj67518").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj67518_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj67518_onTap is still running");
	return;
}
var obj67518_onTap_runningActionsCount = 0;
var obj67518_onTap_loopCount = 0;
obj67518_onTap_actionGroup0();
});










/*
 *
 *   obj67510: Event Touch Down
 *
 */
$("#obj67510").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj67510_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj67510_onTap is still running");
	return;
}
var obj67510_onTap_runningActionsCount = 0;
var obj67510_onTap_loopCount = 0;
obj67510_onTap_actionGroup0();
});










/*
 *
 *   obj88765: Event Touch Down
 *
 */
$("#obj88765").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj88765_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj88765_onTap is still running");
	return;
}
var obj88765_onTap_runningActionsCount = 0;
var obj88765_onTap_loopCount = 0;
obj88765_onTap_actionGroup0();
});










/*
 *
 *   obj88760: Event Touch Down
 *
 */
$("#obj88760").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj88760_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj88760_onTap is still running");
	return;
}
var obj88760_onTap_runningActionsCount = 0;
var obj88760_onTap_loopCount = 0;
obj88760_onTap_actionGroup0();
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
	
$("#obj46071").trigger('SCEventShow');
$("#obj46055").trigger('SCEventShow');
$("#obj46052").trigger('SCEventShow');
$("#obj46048").trigger('SCEventShow');
$("#obj46046").trigger('SCEventShow');
$("#obj46044").trigger('SCEventShow');
$("#obj46042").trigger('SCEventShow');
$("#obj46040").trigger('SCEventShow');
$("#obj46038").trigger('SCEventShow');
$("#obj46036").trigger('SCEventShow');
$("#obj46034").trigger('SCEventShow');
$("#obj46016").trigger('SCEventShow');
$("#obj46014").trigger('SCEventShow');
$("#obj46012").trigger('SCEventShow');
$("#obj46010").trigger('SCEventShow');
$("#obj45999").trigger('SCEventShow');
$("#obj45997").trigger('SCEventShow');
$("#obj45995").trigger('SCEventShow');
$("#obj67518").trigger('SCEventShow');
$("#obj67510").trigger('SCEventShow');
$("#obj88765").trigger('SCEventShow');
$("#obj88760").trigger('SCEventShow');
$("#obj88770").trigger('SCEventShow');
$("#obj94943").trigger('SCEventShow');
$("#obj67524").trigger('SCEventShow');
	
});