pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 24731;
pubcoder.page.title = pubcoder.page.title || "95";
pubcoder.page.number = pubcoder.page.number || 95;
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
var obj80191_onTap_activeActionGroupIndex = -1;
var obj80191_onTap_runningActionsCount = 0;
var obj80191_onTap_loopCount = 0;
var obj80188_onTap_activeActionGroupIndex = -1;
var obj80188_onTap_runningActionsCount = 0;
var obj80188_onTap_loopCount = 0;
var obj80184_onTap_activeActionGroupIndex = -1;
var obj80184_onTap_runningActionsCount = 0;
var obj80184_onTap_loopCount = 0;
var obj80109_onDrag_activeActionGroupIndex = -1;
var obj80109_onDrag_runningActionsCount = 0;
var obj80109_onDrag_loopCount = 0;
var obj80109_onTouchDown_activeActionGroupIndex = -1;
var obj80109_onTouchDown_runningActionsCount = 0;
var obj80109_onTouchDown_loopCount = 0;
var obj80109_SCActionDragDrop80112_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj80109_SCActionDragDrop80112_droppedOutsideTargetActions_runningActionsCount = 0;
var obj80109_SCActionDragDrop80112_droppedOutsideTargetActions_loopCount = 0;
var obj80109_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj80109_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj80109_droppedInsideTargetActions_3_loopCount = 0;
var obj80109_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj80109_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj80109_droppedInsideTargetActions_2_loopCount = 0;
var obj80109_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj80109_droppedInsideTargetActions_runningActionsCount = 0;
var obj80109_droppedInsideTargetActions_loopCount = 0;
var obj80070_onDrag_activeActionGroupIndex = -1;
var obj80070_onDrag_runningActionsCount = 0;
var obj80070_onDrag_loopCount = 0;
var obj80070_onTouchDown_activeActionGroupIndex = -1;
var obj80070_onTouchDown_runningActionsCount = 0;
var obj80070_onTouchDown_loopCount = 0;
var obj80070_SCActionDragDrop80073_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj80070_SCActionDragDrop80073_droppedOutsideTargetActions_runningActionsCount = 0;
var obj80070_SCActionDragDrop80073_droppedOutsideTargetActions_loopCount = 0;
var obj80070_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj80070_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj80070_droppedInsideTargetActions_3_loopCount = 0;
var obj80070_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj80070_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj80070_droppedInsideTargetActions_2_loopCount = 0;
var obj80070_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj80070_droppedInsideTargetActions_runningActionsCount = 0;
var obj80070_droppedInsideTargetActions_loopCount = 0;
var obj80031_onDrag_activeActionGroupIndex = -1;
var obj80031_onDrag_runningActionsCount = 0;
var obj80031_onDrag_loopCount = 0;
var obj80031_onTouchDown_activeActionGroupIndex = -1;
var obj80031_onTouchDown_runningActionsCount = 0;
var obj80031_onTouchDown_loopCount = 0;
var obj80031_SCActionDragDrop80034_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj80031_SCActionDragDrop80034_droppedOutsideTargetActions_runningActionsCount = 0;
var obj80031_SCActionDragDrop80034_droppedOutsideTargetActions_loopCount = 0;
var obj80031_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj80031_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj80031_droppedInsideTargetActions_3_loopCount = 0;
var obj80031_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj80031_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj80031_droppedInsideTargetActions_2_loopCount = 0;
var obj80031_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj80031_droppedInsideTargetActions_runningActionsCount = 0;
var obj80031_droppedInsideTargetActions_loopCount = 0;
var obj80013_onTap_activeActionGroupIndex = -1;
var obj80013_onTap_runningActionsCount = 0;
var obj80013_onTap_loopCount = 0;
var obj80005_onTap_activeActionGroupIndex = -1;
var obj80005_onTap_runningActionsCount = 0;
var obj80005_onTap_loopCount = 0;
var obj88009_onTap_activeActionGroupIndex = -1;
var obj88009_onTap_runningActionsCount = 0;
var obj88009_onTap_loopCount = 0;
var obj88004_onTap_activeActionGroupIndex = -1;
var obj88004_onTap_runningActionsCount = 0;
var obj88004_onTap_loopCount = 0;
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
		
obj80191_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80191_onTap_activeActionGroupIndex = -1;
		$("#obj80191").trigger("obj80191_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80191) {
				console.warn("de-queueing event obj80191." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80191").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80191_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_80193();
function goToPage_80193() {
	window.obj80191_onTap_runningActionsCount = obj80191_onTap_runningActionsCount + 1;
	$("#anchor560")[0].click();
	window.obj80191_onTap_runningActionsCount = window.obj80191_onTap_runningActionsCount - 1;
if (window.obj80191_onTap_runningActionsCount < 0) {
	window.obj80191_onTap_runningActionsCount = 0;
} else if (window.obj80191_onTap_runningActionsCount == 0) {
	obj80191_onTap_actionGroup1();
}
}





















};
obj80191_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj80191_onTap_activeActionGroupIndex = -1;
		$("#obj80191").trigger("obj80191_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80191) {
				console.warn("de-queueing event obj80191." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80191").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80191_onTap_activeActionGroupIndex = 1;
	





















};
obj80188_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80188_onTap_activeActionGroupIndex = -1;
		$("#obj80188").trigger("obj80188_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80188) {
				console.warn("de-queueing event obj80188." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80188").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80188_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_80190();
function goToPage_80190() {
	window.obj80188_onTap_runningActionsCount = obj80188_onTap_runningActionsCount + 1;
	$("#anchor561")[0].click();
	window.obj80188_onTap_runningActionsCount = window.obj80188_onTap_runningActionsCount - 1;
if (window.obj80188_onTap_runningActionsCount < 0) {
	window.obj80188_onTap_runningActionsCount = 0;
} else if (window.obj80188_onTap_runningActionsCount == 0) {
	obj80188_onTap_actionGroup1();
}
}





















};
obj80188_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj80188_onTap_activeActionGroupIndex = -1;
		$("#obj80188").trigger("obj80188_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80188) {
				console.warn("de-queueing event obj80188." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80188").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80188_onTap_activeActionGroupIndex = 1;
	





















};
obj80184_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80184_onTap_activeActionGroupIndex = -1;
		$("#obj80184").trigger("obj80184_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80184) {
				console.warn("de-queueing event obj80184." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80184").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80184_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_80186();
function goToPage_80186() {
	window.obj80184_onTap_runningActionsCount = obj80184_onTap_runningActionsCount + 1;
	$("#anchor562")[0].click();
	window.obj80184_onTap_runningActionsCount = window.obj80184_onTap_runningActionsCount - 1;
if (window.obj80184_onTap_runningActionsCount < 0) {
	window.obj80184_onTap_runningActionsCount = 0;
} else if (window.obj80184_onTap_runningActionsCount == 0) {
	obj80184_onTap_actionGroup1();
}
}





















};
obj80184_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj80184_onTap_activeActionGroupIndex = -1;
		$("#obj80184").trigger("obj80184_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80184) {
				console.warn("de-queueing event obj80184." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80184").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80184_onTap_activeActionGroupIndex = 1;
	





















};
obj80109_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80109_onTouchDown_activeActionGroupIndex = -1;
		$("#obj80109").trigger("obj80109_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80109) {
				console.warn("de-queueing event obj80109." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80109").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80109_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj80109");
//	action: dragDrop
//	target: obj80109 
dragDrop_80112();
function dragDrop_80112() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj80109_onTouchDown_runningActionsCount = obj80109_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj80109');
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
	  	containerNode = $('#obj80174');
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
    	window.obj80109_onTouchDown_runningActionsCount = window.obj80109_onTouchDown_runningActionsCount - 1;
if (window.obj80109_onTouchDown_runningActionsCount < 0) {
	window.obj80109_onTouchDown_runningActionsCount = 0;
} else if (window.obj80109_onTouchDown_runningActionsCount == 0) {
	obj80109_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj80166","#obj80164","#obj80162");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_80112 = false;
    	var dropped_id_80112;
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
					dropped_80112 = true;
					dropped_id_80112 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_80112) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj80109").trigger('SCActionDragDrop80112_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj80109_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj80109_onTouchDown_activeActionGroupIndex = -1;
		$("#obj80109").trigger("obj80109_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80109) {
				console.warn("de-queueing event obj80109." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80109").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80109_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj80109_SCActionDragDrop80112_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80109_SCActionDragDrop80112_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj80109").trigger("obj80109_SCActionDragDrop80112_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80109) {
				console.warn("de-queueing event obj80109." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80109").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80109_SCActionDragDrop80112_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj80109 
move_92405();
function move_92405() {
	window.obj80109_SCActionDragDrop80112_droppedOutsideTargetActions_runningActionsCount = obj80109_SCActionDragDrop80112_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj80109");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 395;
	var moveY = 633;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj80109_SCActionDragDrop80112_droppedOutsideTargetActions_runningActionsCount = window.obj80109_SCActionDragDrop80112_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj80109_SCActionDragDrop80112_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj80109_SCActionDragDrop80112_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj80109_SCActionDragDrop80112_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj80109_SCActionDragDrop80112_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj80109_SCActionDragDrop80112_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj80109_SCActionDragDrop80112_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj80109").trigger("obj80109_SCActionDragDrop80112_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80109) {
				console.warn("de-queueing event obj80109." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80109").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80109_SCActionDragDrop80112_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj80109_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80109_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj80109").trigger("obj80109_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80109) {
				console.warn("de-queueing event obj80109." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80109").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80109_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_80135();
function runjs_80135() {
	window.obj80109_droppedInsideTargetActions_3_runningActionsCount = obj80109_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj80162").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj80109_droppedInsideTargetActions_3_runningActionsCount = window.obj80109_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj80109_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj80109_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj80109_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj80109_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj80109_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80109_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj80109").trigger("obj80109_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80109) {
				console.warn("de-queueing event obj80109." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80109").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80109_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_80136();
function switchText_80136() {
	window.obj80109_droppedInsideTargetActions_3_runningActionsCount = obj80109_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p style=\"text-align: center;\"><span style=\"color: #ffffff;\"><strong><span style=\"font-family: Roboto; font-size: 18px;\">April</span></strong></span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj80109_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj80109_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj80109").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj80109_content");
			setTimeout(function () {
				window.obj80109_droppedInsideTargetActions_3_runningActionsCount = window.obj80109_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj80109_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj80109_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj80109_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj80109_droppedInsideTargetActions_3_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj80109 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj80109_droppedInsideTargetActions_3_runningActionsCount = window.obj80109_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj80109_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj80109_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj80109_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj80109_droppedInsideTargetActions_3_actionGroup2();
}
		}, 1);
	}
}






};
obj80109_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80109_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj80109").trigger("obj80109_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80109) {
				console.warn("de-queueing event obj80109." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80109").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80109_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj80156 
hide_80137();
function hide_80137() {
	var selector = "#obj80156";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj80109_droppedInsideTargetActions_3_runningActionsCount = obj80109_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj80109_droppedInsideTargetActions_3_runningActionsCount = window.obj80109_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj80109_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj80109_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj80109_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj80109_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_80137(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj80109_droppedInsideTargetActions_3_runningActionsCount = window.obj80109_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj80109_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj80109_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj80109_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj80109_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj80109_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80109_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj80109").trigger("obj80109_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80109) {
				console.warn("de-queueing event obj80109." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80109").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80109_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_80138();
function runjs_80138() {
	window.obj80109_droppedInsideTargetActions_3_runningActionsCount = obj80109_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj80109").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj80109_droppedInsideTargetActions_3_runningActionsCount = window.obj80109_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj80109_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj80109_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj80109_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj80109_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj80109_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80109_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj80109").trigger("obj80109_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80109) {
				console.warn("de-queueing event obj80109." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80109").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80109_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_80139();
function switchText_80139() {
	window.obj80109_droppedInsideTargetActions_3_runningActionsCount = obj80109_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj80152_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj80152_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj80152").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj80152_content");
			setTimeout(function () {
				window.obj80109_droppedInsideTargetActions_3_runningActionsCount = window.obj80109_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj80109_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj80109_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj80109_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj80109_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj80152 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj80109_droppedInsideTargetActions_3_runningActionsCount = window.obj80109_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj80109_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj80109_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj80109_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj80109_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj80109_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80109_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj80109").trigger("obj80109_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80109) {
				console.warn("de-queueing event obj80109." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80109").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80109_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj80109 
move_80140();
function move_80140() {
	window.obj80109_droppedInsideTargetActions_3_runningActionsCount = obj80109_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj80109");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 395;
	var moveY = 633;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj80109_droppedInsideTargetActions_3_runningActionsCount = window.obj80109_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj80109_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj80109_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj80109_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj80109_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj80109_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80109_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj80109").trigger("obj80109_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80109) {
				console.warn("de-queueing event obj80109." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80109").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80109_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_80141();
function runjs_80141() {
	window.obj80109_droppedInsideTargetActions_3_runningActionsCount = obj80109_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj80162").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj80109_droppedInsideTargetActions_3_runningActionsCount = window.obj80109_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj80109_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj80109_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj80109_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj80109_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj80109_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80109_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj80109").trigger("obj80109_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80109) {
				console.warn("de-queueing event obj80109." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80109").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80109_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Switch Text
switchText_80142();
function switchText_80142() {
	window.obj80109_droppedInsideTargetActions_3_runningActionsCount = obj80109_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p style=\"text-align: center;\"><span style=\"color: #000000;\"><strong><span style=\"font-family: Roboto; font-size: 18px;\">April</span></strong></span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj80109_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj80109_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj80109").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj80109_content");
			setTimeout(function () {
				window.obj80109_droppedInsideTargetActions_3_runningActionsCount = window.obj80109_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj80109_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj80109_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj80109_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj80109_droppedInsideTargetActions_3_actionGroup8();
}
			}, 1);
		});
	} else {
		$("#obj80109 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj80109_droppedInsideTargetActions_3_runningActionsCount = window.obj80109_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj80109_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj80109_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj80109_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj80109_droppedInsideTargetActions_3_actionGroup8();
}
		}, 1);
	}
}






};
obj80109_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80109_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj80109").trigger("obj80109_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80109) {
				console.warn("de-queueing event obj80109." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80109").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80109_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj80156
(function(){
	window.obj80109_droppedInsideTargetActions_3_runningActionsCount = obj80109_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj80156";
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
					window.obj80109_droppedInsideTargetActions_3_runningActionsCount = window.obj80109_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj80109_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj80109_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj80109_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj80109_droppedInsideTargetActions_3_actionGroup9();
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
				window.obj80109_droppedInsideTargetActions_3_runningActionsCount = window.obj80109_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj80109_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj80109_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj80109_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj80109_droppedInsideTargetActions_3_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj80109_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80109_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj80109").trigger("obj80109_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80109) {
				console.warn("de-queueing event obj80109." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80109").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80109_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_80144();
function runjs_80144() {
	window.obj80109_droppedInsideTargetActions_3_runningActionsCount = obj80109_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj80109").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj80109_droppedInsideTargetActions_3_runningActionsCount = window.obj80109_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj80109_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj80109_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj80109_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj80109_droppedInsideTargetActions_3_actionGroup10();
}
	}, 1);
}







};
obj80109_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80109_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj80109").trigger("obj80109_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80109) {
				console.warn("de-queueing event obj80109." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80109").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80109_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_80145();
function runjs_80145() {
	window.obj80109_droppedInsideTargetActions_3_runningActionsCount = obj80109_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj80109").css("border-color", "rgba(0,0,0,0)"); $("#obj80109").css("border-width", "0px"); $("#obj80109").css("border-style", "solid"); $("#obj80109").css("border-radius", "10px"); $("#obj80109").css("-webkit-border-radius", "10px"); $("#obj80109").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj80109_droppedInsideTargetActions_3_runningActionsCount = window.obj80109_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj80109_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj80109_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj80109_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj80109_droppedInsideTargetActions_3_actionGroup11();
}
	}, 1);
}







};
obj80109_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80109_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj80109").trigger("obj80109_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80109) {
				console.warn("de-queueing event obj80109." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80109").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80109_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj80151 
playAudio_80146();
function playAudio_80146() {
	window.obj80109_droppedInsideTargetActions_3_runningActionsCount = obj80109_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj80151")[0];
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
		    window.obj80109_droppedInsideTargetActions_3_runningActionsCount = window.obj80109_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj80109_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj80109_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj80109_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj80109_droppedInsideTargetActions_3_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj80109_droppedInsideTargetActions_3_runningActionsCount = window.obj80109_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj80109_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj80109_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj80109_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj80109_droppedInsideTargetActions_3_actionGroup12();
}
	}
}









};
obj80109_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80109_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj80109").trigger("obj80109_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80109) {
				console.warn("de-queueing event obj80109." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80109").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80109_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_80147();
function switchText_80147() {
	window.obj80109_droppedInsideTargetActions_3_runningActionsCount = obj80109_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj80152_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj80152_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj80152").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj80152_content");
			setTimeout(function () {
				window.obj80109_droppedInsideTargetActions_3_runningActionsCount = window.obj80109_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj80109_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj80109_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj80109_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj80109_droppedInsideTargetActions_3_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj80152 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj80109_droppedInsideTargetActions_3_runningActionsCount = window.obj80109_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj80109_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj80109_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj80109_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj80109_droppedInsideTargetActions_3_actionGroup13();
}
		}, 1);
	}
}






};
obj80109_droppedInsideTargetActions_3_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj80109_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj80109").trigger("obj80109_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80109) {
				console.warn("de-queueing event obj80109." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80109").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80109_droppedInsideTargetActions_3_activeActionGroupIndex = 13;
	





















};
obj80109_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80109_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj80109").trigger("obj80109_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80109) {
				console.warn("de-queueing event obj80109." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80109").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80109_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_80121();
function runjs_80121() {
	window.obj80109_droppedInsideTargetActions_2_runningActionsCount = obj80109_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj80164").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj80109_droppedInsideTargetActions_2_runningActionsCount = window.obj80109_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj80109_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj80109_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj80109_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj80109_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj80109_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80109_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj80109").trigger("obj80109_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80109) {
				console.warn("de-queueing event obj80109." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80109").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80109_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_80122();
function switchText_80122() {
	window.obj80109_droppedInsideTargetActions_2_runningActionsCount = obj80109_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p style=\"text-align: center;\"><span style=\"color: #ffffff;\"><strong><span style=\"font-family: Roboto; font-size: 18px;\">April</span></strong></span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj80109_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj80109_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj80109").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj80109_content");
			setTimeout(function () {
				window.obj80109_droppedInsideTargetActions_2_runningActionsCount = window.obj80109_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj80109_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj80109_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj80109_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj80109_droppedInsideTargetActions_2_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj80109 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj80109_droppedInsideTargetActions_2_runningActionsCount = window.obj80109_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj80109_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj80109_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj80109_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj80109_droppedInsideTargetActions_2_actionGroup2();
}
		}, 1);
	}
}






};
obj80109_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80109_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj80109").trigger("obj80109_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80109) {
				console.warn("de-queueing event obj80109." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80109").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80109_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj80158 
hide_80123();
function hide_80123() {
	var selector = "#obj80158";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj80109_droppedInsideTargetActions_2_runningActionsCount = obj80109_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj80109_droppedInsideTargetActions_2_runningActionsCount = window.obj80109_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj80109_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj80109_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj80109_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj80109_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_80123(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj80109_droppedInsideTargetActions_2_runningActionsCount = window.obj80109_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj80109_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj80109_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj80109_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj80109_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj80109_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80109_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj80109").trigger("obj80109_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80109) {
				console.warn("de-queueing event obj80109." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80109").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80109_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_80124();
function runjs_80124() {
	window.obj80109_droppedInsideTargetActions_2_runningActionsCount = obj80109_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj80109").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj80109_droppedInsideTargetActions_2_runningActionsCount = window.obj80109_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj80109_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj80109_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj80109_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj80109_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj80109_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80109_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj80109").trigger("obj80109_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80109) {
				console.warn("de-queueing event obj80109." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80109").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80109_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_80125();
function switchText_80125() {
	window.obj80109_droppedInsideTargetActions_2_runningActionsCount = obj80109_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj80152_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj80152_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj80152").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj80152_content");
			setTimeout(function () {
				window.obj80109_droppedInsideTargetActions_2_runningActionsCount = window.obj80109_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj80109_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj80109_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj80109_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj80109_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj80152 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj80109_droppedInsideTargetActions_2_runningActionsCount = window.obj80109_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj80109_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj80109_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj80109_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj80109_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj80109_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80109_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj80109").trigger("obj80109_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80109) {
				console.warn("de-queueing event obj80109." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80109").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80109_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj80109 
move_80126();
function move_80126() {
	window.obj80109_droppedInsideTargetActions_2_runningActionsCount = obj80109_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj80109");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 395;
	var moveY = 633;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj80109_droppedInsideTargetActions_2_runningActionsCount = window.obj80109_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj80109_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj80109_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj80109_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj80109_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj80109_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80109_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj80109").trigger("obj80109_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80109) {
				console.warn("de-queueing event obj80109." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80109").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80109_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_80127();
function runjs_80127() {
	window.obj80109_droppedInsideTargetActions_2_runningActionsCount = obj80109_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj80164").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj80109_droppedInsideTargetActions_2_runningActionsCount = window.obj80109_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj80109_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj80109_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj80109_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj80109_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj80109_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80109_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj80109").trigger("obj80109_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80109) {
				console.warn("de-queueing event obj80109." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80109").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80109_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Switch Text
switchText_80128();
function switchText_80128() {
	window.obj80109_droppedInsideTargetActions_2_runningActionsCount = obj80109_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p style=\"text-align: center;\"><span style=\"color: #000000;\"><strong><span style=\"font-family: Roboto; font-size: 18px;\">April</span></strong></span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj80109_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj80109_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj80109").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj80109_content");
			setTimeout(function () {
				window.obj80109_droppedInsideTargetActions_2_runningActionsCount = window.obj80109_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj80109_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj80109_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj80109_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj80109_droppedInsideTargetActions_2_actionGroup8();
}
			}, 1);
		});
	} else {
		$("#obj80109 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj80109_droppedInsideTargetActions_2_runningActionsCount = window.obj80109_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj80109_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj80109_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj80109_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj80109_droppedInsideTargetActions_2_actionGroup8();
}
		}, 1);
	}
}






};
obj80109_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80109_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj80109").trigger("obj80109_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80109) {
				console.warn("de-queueing event obj80109." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80109").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80109_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj80158
(function(){
	window.obj80109_droppedInsideTargetActions_2_runningActionsCount = obj80109_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj80158";
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
					window.obj80109_droppedInsideTargetActions_2_runningActionsCount = window.obj80109_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj80109_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj80109_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj80109_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj80109_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj80109_droppedInsideTargetActions_2_runningActionsCount = window.obj80109_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj80109_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj80109_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj80109_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj80109_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj80109_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80109_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj80109").trigger("obj80109_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80109) {
				console.warn("de-queueing event obj80109." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80109").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80109_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_80130();
function runjs_80130() {
	window.obj80109_droppedInsideTargetActions_2_runningActionsCount = obj80109_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj80109").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj80109_droppedInsideTargetActions_2_runningActionsCount = window.obj80109_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj80109_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj80109_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj80109_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj80109_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj80109_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80109_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj80109").trigger("obj80109_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80109) {
				console.warn("de-queueing event obj80109." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80109").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80109_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_80131();
function runjs_80131() {
	window.obj80109_droppedInsideTargetActions_2_runningActionsCount = obj80109_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj80109").css("border-color", "rgba(0,0,0,0)"); $("#obj80109").css("border-width", "0px"); $("#obj80109").css("border-style", "solid"); $("#obj80109").css("border-radius", "10px"); $("#obj80109").css("-webkit-border-radius", "10px"); $("#obj80109").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj80109_droppedInsideTargetActions_2_runningActionsCount = window.obj80109_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj80109_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj80109_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj80109_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj80109_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj80109_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80109_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj80109").trigger("obj80109_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80109) {
				console.warn("de-queueing event obj80109." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80109").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80109_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj80151 
playAudio_80132();
function playAudio_80132() {
	window.obj80109_droppedInsideTargetActions_2_runningActionsCount = obj80109_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj80151")[0];
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
		    window.obj80109_droppedInsideTargetActions_2_runningActionsCount = window.obj80109_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj80109_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj80109_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj80109_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj80109_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj80109_droppedInsideTargetActions_2_runningActionsCount = window.obj80109_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj80109_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj80109_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj80109_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj80109_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj80109_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80109_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj80109").trigger("obj80109_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80109) {
				console.warn("de-queueing event obj80109." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80109").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80109_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_80133();
function switchText_80133() {
	window.obj80109_droppedInsideTargetActions_2_runningActionsCount = obj80109_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj80152_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj80152_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj80152").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj80152_content");
			setTimeout(function () {
				window.obj80109_droppedInsideTargetActions_2_runningActionsCount = window.obj80109_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj80109_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj80109_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj80109_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj80109_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj80152 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj80109_droppedInsideTargetActions_2_runningActionsCount = window.obj80109_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj80109_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj80109_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj80109_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj80109_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj80109_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj80109_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj80109").trigger("obj80109_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80109) {
				console.warn("de-queueing event obj80109." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80109").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80109_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj80109_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80109_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj80109").trigger("obj80109_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80109) {
				console.warn("de-queueing event obj80109." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80109").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80109_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_80114();
function runjs_80114() {
	window.obj80109_droppedInsideTargetActions_runningActionsCount = obj80109_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj80166").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj80109_droppedInsideTargetActions_runningActionsCount = window.obj80109_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj80109_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj80109_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj80109_droppedInsideTargetActions_runningActionsCount == 0) {
	obj80109_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj80109_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80109_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj80109").trigger("obj80109_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80109) {
				console.warn("de-queueing event obj80109." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80109").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80109_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_80118();
function switchText_80118() {
	window.obj80109_droppedInsideTargetActions_runningActionsCount = obj80109_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj80152_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj80152_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj80152").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj80152_content");
			setTimeout(function () {
				window.obj80109_droppedInsideTargetActions_runningActionsCount = window.obj80109_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj80109_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj80109_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj80109_droppedInsideTargetActions_runningActionsCount == 0) {
	obj80109_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj80152 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj80109_droppedInsideTargetActions_runningActionsCount = window.obj80109_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj80109_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj80109_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj80109_droppedInsideTargetActions_runningActionsCount == 0) {
	obj80109_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj80109_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80109_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj80109").trigger("obj80109_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80109) {
				console.warn("de-queueing event obj80109." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80109").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80109_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Switch Text
switchText_80115();
function switchText_80115() {
	window.obj80109_droppedInsideTargetActions_runningActionsCount = obj80109_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p style=\"text-align: center;\"><span style=\"color: #ffffff;\"><strong><span style=\"font-family: Roboto; font-size: 18px;\">April</span></strong></span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj80109_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj80109_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj80109").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj80109_content");
			setTimeout(function () {
				window.obj80109_droppedInsideTargetActions_runningActionsCount = window.obj80109_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj80109_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj80109_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj80109_droppedInsideTargetActions_runningActionsCount == 0) {
	obj80109_droppedInsideTargetActions_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj80109 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj80109_droppedInsideTargetActions_runningActionsCount = window.obj80109_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj80109_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj80109_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj80109_droppedInsideTargetActions_runningActionsCount == 0) {
	obj80109_droppedInsideTargetActions_actionGroup3();
}
		}, 1);
	}
}






};
obj80109_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80109_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj80109").trigger("obj80109_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80109) {
				console.warn("de-queueing event obj80109." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80109").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80109_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj80160 
hide_80116();
function hide_80116() {
	var selector = "#obj80160";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj80109_droppedInsideTargetActions_runningActionsCount = obj80109_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj80109_droppedInsideTargetActions_runningActionsCount = window.obj80109_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj80109_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj80109_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj80109_droppedInsideTargetActions_runningActionsCount == 0) {
	obj80109_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_80116(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj80109_droppedInsideTargetActions_runningActionsCount = window.obj80109_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj80109_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj80109_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj80109_droppedInsideTargetActions_runningActionsCount == 0) {
	obj80109_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj80109_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80109_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj80109").trigger("obj80109_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80109) {
				console.warn("de-queueing event obj80109." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80109").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80109_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_80117();
function runjs_80117() {
	window.obj80109_droppedInsideTargetActions_runningActionsCount = obj80109_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj80109").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj80109_droppedInsideTargetActions_runningActionsCount = window.obj80109_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj80109_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj80109_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj80109_droppedInsideTargetActions_runningActionsCount == 0) {
	obj80109_droppedInsideTargetActions_actionGroup5();
}
	}, 1);
}







};
obj80109_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80109_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj80109").trigger("obj80109_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80109) {
				console.warn("de-queueing event obj80109." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80109").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80109_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj80150 
playAudio_80119();
function playAudio_80119() {
	window.obj80109_droppedInsideTargetActions_runningActionsCount = obj80109_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj80150")[0];
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
		    window.obj80109_droppedInsideTargetActions_runningActionsCount = window.obj80109_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj80109_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj80109_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj80109_droppedInsideTargetActions_runningActionsCount == 0) {
	obj80109_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj80109_droppedInsideTargetActions_runningActionsCount = window.obj80109_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj80109_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj80109_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj80109_droppedInsideTargetActions_runningActionsCount == 0) {
	obj80109_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj80109_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80109_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj80109").trigger("obj80109_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80109) {
				console.warn("de-queueing event obj80109." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80109").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80109_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90324();
function switchText_90324() {
	window.obj80109_droppedInsideTargetActions_runningActionsCount = obj80109_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj80152_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj80152_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj80152").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj80152_content");
			setTimeout(function () {
				window.obj80109_droppedInsideTargetActions_runningActionsCount = window.obj80109_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj80109_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj80109_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj80109_droppedInsideTargetActions_runningActionsCount == 0) {
	obj80109_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj80152 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj80109_droppedInsideTargetActions_runningActionsCount = window.obj80109_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj80109_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj80109_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj80109_droppedInsideTargetActions_runningActionsCount == 0) {
	obj80109_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj80109_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj80109_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj80109").trigger("obj80109_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80109) {
				console.warn("de-queueing event obj80109." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80109").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80109_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj80070_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80070_onTouchDown_activeActionGroupIndex = -1;
		$("#obj80070").trigger("obj80070_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80070) {
				console.warn("de-queueing event obj80070." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80070").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80070_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj80070");
//	action: dragDrop
//	target: obj80070 
dragDrop_80073();
function dragDrop_80073() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj80070_onTouchDown_runningActionsCount = obj80070_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj80070');
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
	  	containerNode = $('#obj80174');
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
    	window.obj80070_onTouchDown_runningActionsCount = window.obj80070_onTouchDown_runningActionsCount - 1;
if (window.obj80070_onTouchDown_runningActionsCount < 0) {
	window.obj80070_onTouchDown_runningActionsCount = 0;
} else if (window.obj80070_onTouchDown_runningActionsCount == 0) {
	obj80070_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj80162","#obj80164","#obj80166");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_80073 = false;
    	var dropped_id_80073;
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
					dropped_80073 = true;
					dropped_id_80073 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_80073) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj80070").trigger('SCActionDragDrop80073_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj80070_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj80070_onTouchDown_activeActionGroupIndex = -1;
		$("#obj80070").trigger("obj80070_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80070) {
				console.warn("de-queueing event obj80070." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80070").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80070_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj80070_SCActionDragDrop80073_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80070_SCActionDragDrop80073_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj80070").trigger("obj80070_SCActionDragDrop80073_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80070) {
				console.warn("de-queueing event obj80070." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80070").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80070_SCActionDragDrop80073_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj80070 
move_92403();
function move_92403() {
	window.obj80070_SCActionDragDrop80073_droppedOutsideTargetActions_runningActionsCount = obj80070_SCActionDragDrop80073_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj80070");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 235;
	var moveY = 634;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj80070_SCActionDragDrop80073_droppedOutsideTargetActions_runningActionsCount = window.obj80070_SCActionDragDrop80073_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj80070_SCActionDragDrop80073_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj80070_SCActionDragDrop80073_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj80070_SCActionDragDrop80073_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj80070_SCActionDragDrop80073_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj80070_SCActionDragDrop80073_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj80070_SCActionDragDrop80073_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj80070").trigger("obj80070_SCActionDragDrop80073_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80070) {
				console.warn("de-queueing event obj80070." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80070").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80070_SCActionDragDrop80073_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj80070_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80070_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj80070").trigger("obj80070_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80070) {
				console.warn("de-queueing event obj80070." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80070").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80070_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_80096();
function runjs_80096() {
	window.obj80070_droppedInsideTargetActions_3_runningActionsCount = obj80070_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj80166").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj80070_droppedInsideTargetActions_3_runningActionsCount = window.obj80070_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj80070_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj80070_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj80070_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj80070_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj80070_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80070_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj80070").trigger("obj80070_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80070) {
				console.warn("de-queueing event obj80070." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80070").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80070_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_80097();
function switchText_80097() {
	window.obj80070_droppedInsideTargetActions_3_runningActionsCount = obj80070_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p style=\"text-align: center;\"><span style=\"color: #ffffff;\"><strong><span style=\"font-family: Roboto; font-size: 18px;\">July</span></strong></span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj80070_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj80070_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj80070").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj80070_content");
			setTimeout(function () {
				window.obj80070_droppedInsideTargetActions_3_runningActionsCount = window.obj80070_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj80070_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj80070_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj80070_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj80070_droppedInsideTargetActions_3_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj80070 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj80070_droppedInsideTargetActions_3_runningActionsCount = window.obj80070_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj80070_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj80070_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj80070_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj80070_droppedInsideTargetActions_3_actionGroup2();
}
		}, 1);
	}
}






};
obj80070_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80070_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj80070").trigger("obj80070_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80070) {
				console.warn("de-queueing event obj80070." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80070").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80070_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj80160 
hide_80098();
function hide_80098() {
	var selector = "#obj80160";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj80070_droppedInsideTargetActions_3_runningActionsCount = obj80070_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj80070_droppedInsideTargetActions_3_runningActionsCount = window.obj80070_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj80070_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj80070_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj80070_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj80070_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_80098(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj80070_droppedInsideTargetActions_3_runningActionsCount = window.obj80070_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj80070_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj80070_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj80070_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj80070_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj80070_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80070_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj80070").trigger("obj80070_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80070) {
				console.warn("de-queueing event obj80070." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80070").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80070_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_80099();
function runjs_80099() {
	window.obj80070_droppedInsideTargetActions_3_runningActionsCount = obj80070_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj80070").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj80070_droppedInsideTargetActions_3_runningActionsCount = window.obj80070_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj80070_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj80070_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj80070_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj80070_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj80070_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80070_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj80070").trigger("obj80070_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80070) {
				console.warn("de-queueing event obj80070." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80070").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80070_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_80100();
function switchText_80100() {
	window.obj80070_droppedInsideTargetActions_3_runningActionsCount = obj80070_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj80152_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj80152_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj80152").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj80152_content");
			setTimeout(function () {
				window.obj80070_droppedInsideTargetActions_3_runningActionsCount = window.obj80070_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj80070_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj80070_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj80070_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj80070_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj80152 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj80070_droppedInsideTargetActions_3_runningActionsCount = window.obj80070_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj80070_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj80070_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj80070_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj80070_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj80070_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80070_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj80070").trigger("obj80070_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80070) {
				console.warn("de-queueing event obj80070." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80070").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80070_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj80070 
move_80101();
function move_80101() {
	window.obj80070_droppedInsideTargetActions_3_runningActionsCount = obj80070_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj80070");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 235;
	var moveY = 634;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj80070_droppedInsideTargetActions_3_runningActionsCount = window.obj80070_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj80070_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj80070_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj80070_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj80070_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj80070_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80070_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj80070").trigger("obj80070_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80070) {
				console.warn("de-queueing event obj80070." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80070").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80070_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_80102();
function runjs_80102() {
	window.obj80070_droppedInsideTargetActions_3_runningActionsCount = obj80070_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj80166").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj80070_droppedInsideTargetActions_3_runningActionsCount = window.obj80070_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj80070_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj80070_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj80070_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj80070_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj80070_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80070_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj80070").trigger("obj80070_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80070) {
				console.warn("de-queueing event obj80070." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80070").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80070_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Switch Text
switchText_80103();
function switchText_80103() {
	window.obj80070_droppedInsideTargetActions_3_runningActionsCount = obj80070_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p style=\"text-align: center;\"><span style=\"color: #000000;\"><strong><span style=\"font-family: Roboto; font-size: 18px;\">July</span></strong></span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj80070_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj80070_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj80070").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj80070_content");
			setTimeout(function () {
				window.obj80070_droppedInsideTargetActions_3_runningActionsCount = window.obj80070_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj80070_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj80070_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj80070_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj80070_droppedInsideTargetActions_3_actionGroup8();
}
			}, 1);
		});
	} else {
		$("#obj80070 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj80070_droppedInsideTargetActions_3_runningActionsCount = window.obj80070_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj80070_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj80070_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj80070_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj80070_droppedInsideTargetActions_3_actionGroup8();
}
		}, 1);
	}
}






};
obj80070_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80070_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj80070").trigger("obj80070_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80070) {
				console.warn("de-queueing event obj80070." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80070").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80070_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj80166
(function(){
	window.obj80070_droppedInsideTargetActions_3_runningActionsCount = obj80070_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj80166";
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
					window.obj80070_droppedInsideTargetActions_3_runningActionsCount = window.obj80070_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj80070_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj80070_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj80070_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj80070_droppedInsideTargetActions_3_actionGroup9();
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
				window.obj80070_droppedInsideTargetActions_3_runningActionsCount = window.obj80070_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj80070_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj80070_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj80070_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj80070_droppedInsideTargetActions_3_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj80070_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80070_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj80070").trigger("obj80070_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80070) {
				console.warn("de-queueing event obj80070." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80070").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80070_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_80105();
function runjs_80105() {
	window.obj80070_droppedInsideTargetActions_3_runningActionsCount = obj80070_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj80070").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj80070_droppedInsideTargetActions_3_runningActionsCount = window.obj80070_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj80070_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj80070_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj80070_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj80070_droppedInsideTargetActions_3_actionGroup10();
}
	}, 1);
}







};
obj80070_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80070_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj80070").trigger("obj80070_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80070) {
				console.warn("de-queueing event obj80070." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80070").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80070_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_80106();
function runjs_80106() {
	window.obj80070_droppedInsideTargetActions_3_runningActionsCount = obj80070_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj80070").css("border-color", "rgba(0,0,0,0)"); $("#obj80070").css("border-width", "0px"); $("#obj80070").css("border-style", "solid"); $("#obj80070").css("border-radius", "10px"); $("#obj80070").css("-webkit-border-radius", "10px"); $("#obj80070").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj80070_droppedInsideTargetActions_3_runningActionsCount = window.obj80070_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj80070_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj80070_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj80070_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj80070_droppedInsideTargetActions_3_actionGroup11();
}
	}, 1);
}







};
obj80070_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80070_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj80070").trigger("obj80070_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80070) {
				console.warn("de-queueing event obj80070." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80070").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80070_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj80151 
playAudio_80107();
function playAudio_80107() {
	window.obj80070_droppedInsideTargetActions_3_runningActionsCount = obj80070_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj80151")[0];
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
		    window.obj80070_droppedInsideTargetActions_3_runningActionsCount = window.obj80070_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj80070_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj80070_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj80070_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj80070_droppedInsideTargetActions_3_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj80070_droppedInsideTargetActions_3_runningActionsCount = window.obj80070_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj80070_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj80070_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj80070_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj80070_droppedInsideTargetActions_3_actionGroup12();
}
	}
}









};
obj80070_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80070_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj80070").trigger("obj80070_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80070) {
				console.warn("de-queueing event obj80070." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80070").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80070_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_80108();
function switchText_80108() {
	window.obj80070_droppedInsideTargetActions_3_runningActionsCount = obj80070_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj80152_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj80152_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj80152").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj80152_content");
			setTimeout(function () {
				window.obj80070_droppedInsideTargetActions_3_runningActionsCount = window.obj80070_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj80070_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj80070_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj80070_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj80070_droppedInsideTargetActions_3_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj80152 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj80070_droppedInsideTargetActions_3_runningActionsCount = window.obj80070_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj80070_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj80070_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj80070_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj80070_droppedInsideTargetActions_3_actionGroup13();
}
		}, 1);
	}
}






};
obj80070_droppedInsideTargetActions_3_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj80070_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj80070").trigger("obj80070_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80070) {
				console.warn("de-queueing event obj80070." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80070").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80070_droppedInsideTargetActions_3_activeActionGroupIndex = 13;
	





















};
obj80070_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80070_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj80070").trigger("obj80070_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80070) {
				console.warn("de-queueing event obj80070." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80070").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80070_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_80082();
function runjs_80082() {
	window.obj80070_droppedInsideTargetActions_2_runningActionsCount = obj80070_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj80164").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj80070_droppedInsideTargetActions_2_runningActionsCount = window.obj80070_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj80070_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj80070_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj80070_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj80070_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj80070_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80070_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj80070").trigger("obj80070_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80070) {
				console.warn("de-queueing event obj80070." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80070").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80070_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_80083();
function switchText_80083() {
	window.obj80070_droppedInsideTargetActions_2_runningActionsCount = obj80070_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p style=\"text-align: center;\"><span style=\"color: #ffffff;\"><strong><span style=\"font-family: Roboto; font-size: 18px;\">July</span></strong></span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj80070_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj80070_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj80070").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj80070_content");
			setTimeout(function () {
				window.obj80070_droppedInsideTargetActions_2_runningActionsCount = window.obj80070_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj80070_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj80070_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj80070_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj80070_droppedInsideTargetActions_2_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj80070 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj80070_droppedInsideTargetActions_2_runningActionsCount = window.obj80070_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj80070_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj80070_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj80070_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj80070_droppedInsideTargetActions_2_actionGroup2();
}
		}, 1);
	}
}






};
obj80070_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80070_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj80070").trigger("obj80070_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80070) {
				console.warn("de-queueing event obj80070." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80070").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80070_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj80158 
hide_80084();
function hide_80084() {
	var selector = "#obj80158";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj80070_droppedInsideTargetActions_2_runningActionsCount = obj80070_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj80070_droppedInsideTargetActions_2_runningActionsCount = window.obj80070_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj80070_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj80070_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj80070_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj80070_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_80084(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj80070_droppedInsideTargetActions_2_runningActionsCount = window.obj80070_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj80070_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj80070_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj80070_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj80070_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj80070_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80070_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj80070").trigger("obj80070_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80070) {
				console.warn("de-queueing event obj80070." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80070").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80070_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_80085();
function runjs_80085() {
	window.obj80070_droppedInsideTargetActions_2_runningActionsCount = obj80070_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj80070").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj80070_droppedInsideTargetActions_2_runningActionsCount = window.obj80070_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj80070_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj80070_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj80070_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj80070_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj80070_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80070_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj80070").trigger("obj80070_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80070) {
				console.warn("de-queueing event obj80070." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80070").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80070_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_80086();
function switchText_80086() {
	window.obj80070_droppedInsideTargetActions_2_runningActionsCount = obj80070_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj80152_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj80152_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj80152").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj80152_content");
			setTimeout(function () {
				window.obj80070_droppedInsideTargetActions_2_runningActionsCount = window.obj80070_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj80070_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj80070_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj80070_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj80070_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj80152 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj80070_droppedInsideTargetActions_2_runningActionsCount = window.obj80070_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj80070_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj80070_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj80070_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj80070_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj80070_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80070_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj80070").trigger("obj80070_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80070) {
				console.warn("de-queueing event obj80070." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80070").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80070_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj80070 
move_80087();
function move_80087() {
	window.obj80070_droppedInsideTargetActions_2_runningActionsCount = obj80070_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj80070");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 235;
	var moveY = 634;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj80070_droppedInsideTargetActions_2_runningActionsCount = window.obj80070_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj80070_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj80070_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj80070_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj80070_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj80070_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80070_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj80070").trigger("obj80070_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80070) {
				console.warn("de-queueing event obj80070." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80070").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80070_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_80088();
function runjs_80088() {
	window.obj80070_droppedInsideTargetActions_2_runningActionsCount = obj80070_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj80164").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj80070_droppedInsideTargetActions_2_runningActionsCount = window.obj80070_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj80070_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj80070_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj80070_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj80070_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj80070_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80070_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj80070").trigger("obj80070_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80070) {
				console.warn("de-queueing event obj80070." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80070").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80070_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Switch Text
switchText_80089();
function switchText_80089() {
	window.obj80070_droppedInsideTargetActions_2_runningActionsCount = obj80070_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p style=\"text-align: center;\"><span style=\"color: #000000;\"><strong><span style=\"font-family: Roboto; font-size: 18px;\">July</span></strong></span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj80070_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj80070_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj80070").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj80070_content");
			setTimeout(function () {
				window.obj80070_droppedInsideTargetActions_2_runningActionsCount = window.obj80070_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj80070_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj80070_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj80070_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj80070_droppedInsideTargetActions_2_actionGroup8();
}
			}, 1);
		});
	} else {
		$("#obj80070 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj80070_droppedInsideTargetActions_2_runningActionsCount = window.obj80070_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj80070_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj80070_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj80070_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj80070_droppedInsideTargetActions_2_actionGroup8();
}
		}, 1);
	}
}






};
obj80070_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80070_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj80070").trigger("obj80070_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80070) {
				console.warn("de-queueing event obj80070." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80070").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80070_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj80158
(function(){
	window.obj80070_droppedInsideTargetActions_2_runningActionsCount = obj80070_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj80158";
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
					window.obj80070_droppedInsideTargetActions_2_runningActionsCount = window.obj80070_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj80070_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj80070_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj80070_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj80070_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj80070_droppedInsideTargetActions_2_runningActionsCount = window.obj80070_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj80070_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj80070_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj80070_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj80070_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj80070_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80070_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj80070").trigger("obj80070_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80070) {
				console.warn("de-queueing event obj80070." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80070").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80070_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_80091();
function runjs_80091() {
	window.obj80070_droppedInsideTargetActions_2_runningActionsCount = obj80070_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj80070").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj80070_droppedInsideTargetActions_2_runningActionsCount = window.obj80070_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj80070_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj80070_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj80070_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj80070_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj80070_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80070_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj80070").trigger("obj80070_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80070) {
				console.warn("de-queueing event obj80070." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80070").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80070_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_80092();
function runjs_80092() {
	window.obj80070_droppedInsideTargetActions_2_runningActionsCount = obj80070_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj80070").css("border-color", "rgba(0,0,0,0)"); $("#obj80070").css("border-width", "0px"); $("#obj80070").css("border-style", "solid"); $("#obj80070").css("border-radius", "10px"); $("#obj80070").css("-webkit-border-radius", "10px"); $("#obj80070").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj80070_droppedInsideTargetActions_2_runningActionsCount = window.obj80070_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj80070_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj80070_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj80070_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj80070_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj80070_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80070_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj80070").trigger("obj80070_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80070) {
				console.warn("de-queueing event obj80070." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80070").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80070_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj80151 
playAudio_80093();
function playAudio_80093() {
	window.obj80070_droppedInsideTargetActions_2_runningActionsCount = obj80070_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj80151")[0];
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
		    window.obj80070_droppedInsideTargetActions_2_runningActionsCount = window.obj80070_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj80070_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj80070_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj80070_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj80070_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj80070_droppedInsideTargetActions_2_runningActionsCount = window.obj80070_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj80070_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj80070_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj80070_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj80070_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj80070_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80070_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj80070").trigger("obj80070_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80070) {
				console.warn("de-queueing event obj80070." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80070").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80070_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_80094();
function switchText_80094() {
	window.obj80070_droppedInsideTargetActions_2_runningActionsCount = obj80070_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj80152_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj80152_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj80152").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj80152_content");
			setTimeout(function () {
				window.obj80070_droppedInsideTargetActions_2_runningActionsCount = window.obj80070_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj80070_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj80070_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj80070_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj80070_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj80152 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj80070_droppedInsideTargetActions_2_runningActionsCount = window.obj80070_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj80070_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj80070_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj80070_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj80070_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj80070_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj80070_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj80070").trigger("obj80070_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80070) {
				console.warn("de-queueing event obj80070." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80070").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80070_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj80070_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80070_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj80070").trigger("obj80070_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80070) {
				console.warn("de-queueing event obj80070." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80070").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80070_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_80075();
function runjs_80075() {
	window.obj80070_droppedInsideTargetActions_runningActionsCount = obj80070_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj80162").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj80070_droppedInsideTargetActions_runningActionsCount = window.obj80070_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj80070_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj80070_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj80070_droppedInsideTargetActions_runningActionsCount == 0) {
	obj80070_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj80070_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80070_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj80070").trigger("obj80070_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80070) {
				console.warn("de-queueing event obj80070." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80070").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80070_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_80079();
function switchText_80079() {
	window.obj80070_droppedInsideTargetActions_runningActionsCount = obj80070_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj80152_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj80152_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj80152").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj80152_content");
			setTimeout(function () {
				window.obj80070_droppedInsideTargetActions_runningActionsCount = window.obj80070_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj80070_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj80070_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj80070_droppedInsideTargetActions_runningActionsCount == 0) {
	obj80070_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj80152 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj80070_droppedInsideTargetActions_runningActionsCount = window.obj80070_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj80070_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj80070_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj80070_droppedInsideTargetActions_runningActionsCount == 0) {
	obj80070_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj80070_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80070_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj80070").trigger("obj80070_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80070) {
				console.warn("de-queueing event obj80070." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80070").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80070_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Switch Text
switchText_80076();
function switchText_80076() {
	window.obj80070_droppedInsideTargetActions_runningActionsCount = obj80070_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p style=\"text-align: center;\"><span style=\"color: #ffffff;\"><strong><span style=\"font-family: Roboto; font-size: 18px;\">July</span></strong></span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj80070_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj80070_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj80070").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj80070_content");
			setTimeout(function () {
				window.obj80070_droppedInsideTargetActions_runningActionsCount = window.obj80070_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj80070_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj80070_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj80070_droppedInsideTargetActions_runningActionsCount == 0) {
	obj80070_droppedInsideTargetActions_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj80070 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj80070_droppedInsideTargetActions_runningActionsCount = window.obj80070_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj80070_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj80070_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj80070_droppedInsideTargetActions_runningActionsCount == 0) {
	obj80070_droppedInsideTargetActions_actionGroup3();
}
		}, 1);
	}
}






};
obj80070_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80070_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj80070").trigger("obj80070_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80070) {
				console.warn("de-queueing event obj80070." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80070").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80070_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj80156 
hide_80077();
function hide_80077() {
	var selector = "#obj80156";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj80070_droppedInsideTargetActions_runningActionsCount = obj80070_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj80070_droppedInsideTargetActions_runningActionsCount = window.obj80070_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj80070_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj80070_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj80070_droppedInsideTargetActions_runningActionsCount == 0) {
	obj80070_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_80077(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj80070_droppedInsideTargetActions_runningActionsCount = window.obj80070_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj80070_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj80070_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj80070_droppedInsideTargetActions_runningActionsCount == 0) {
	obj80070_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj80070_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80070_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj80070").trigger("obj80070_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80070) {
				console.warn("de-queueing event obj80070." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80070").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80070_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_80078();
function runjs_80078() {
	window.obj80070_droppedInsideTargetActions_runningActionsCount = obj80070_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj80070").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj80070_droppedInsideTargetActions_runningActionsCount = window.obj80070_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj80070_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj80070_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj80070_droppedInsideTargetActions_runningActionsCount == 0) {
	obj80070_droppedInsideTargetActions_actionGroup5();
}
	}, 1);
}







};
obj80070_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80070_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj80070").trigger("obj80070_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80070) {
				console.warn("de-queueing event obj80070." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80070").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80070_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj80150 
playAudio_80080();
function playAudio_80080() {
	window.obj80070_droppedInsideTargetActions_runningActionsCount = obj80070_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj80150")[0];
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
		    window.obj80070_droppedInsideTargetActions_runningActionsCount = window.obj80070_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj80070_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj80070_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj80070_droppedInsideTargetActions_runningActionsCount == 0) {
	obj80070_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj80070_droppedInsideTargetActions_runningActionsCount = window.obj80070_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj80070_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj80070_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj80070_droppedInsideTargetActions_runningActionsCount == 0) {
	obj80070_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj80070_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80070_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj80070").trigger("obj80070_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80070) {
				console.warn("de-queueing event obj80070." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80070").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80070_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90323();
function switchText_90323() {
	window.obj80070_droppedInsideTargetActions_runningActionsCount = obj80070_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj80152_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj80152_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj80152").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj80152_content");
			setTimeout(function () {
				window.obj80070_droppedInsideTargetActions_runningActionsCount = window.obj80070_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj80070_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj80070_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj80070_droppedInsideTargetActions_runningActionsCount == 0) {
	obj80070_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj80152 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj80070_droppedInsideTargetActions_runningActionsCount = window.obj80070_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj80070_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj80070_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj80070_droppedInsideTargetActions_runningActionsCount == 0) {
	obj80070_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj80070_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj80070_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj80070").trigger("obj80070_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80070) {
				console.warn("de-queueing event obj80070." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80070").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80070_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj80031_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80031_onTouchDown_activeActionGroupIndex = -1;
		$("#obj80031").trigger("obj80031_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80031) {
				console.warn("de-queueing event obj80031." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80031").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80031_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj80031");
//	action: dragDrop
//	target: obj80031 
dragDrop_80034();
function dragDrop_80034() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj80031_onTouchDown_runningActionsCount = obj80031_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj80031');
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
	  	containerNode = $('#obj80174');
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
    	window.obj80031_onTouchDown_runningActionsCount = window.obj80031_onTouchDown_runningActionsCount - 1;
if (window.obj80031_onTouchDown_runningActionsCount < 0) {
	window.obj80031_onTouchDown_runningActionsCount = 0;
} else if (window.obj80031_onTouchDown_runningActionsCount == 0) {
	obj80031_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj80164","#obj80166","#obj80162");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_80034 = false;
    	var dropped_id_80034;
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
					dropped_80034 = true;
					dropped_id_80034 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_80034) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj80031").trigger('SCActionDragDrop80034_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj80031_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj80031_onTouchDown_activeActionGroupIndex = -1;
		$("#obj80031").trigger("obj80031_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80031) {
				console.warn("de-queueing event obj80031." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80031").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80031_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj80031_SCActionDragDrop80034_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80031_SCActionDragDrop80034_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj80031").trigger("obj80031_SCActionDragDrop80034_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80031) {
				console.warn("de-queueing event obj80031." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80031").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80031_SCActionDragDrop80034_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj80031 
move_92402();
function move_92402() {
	window.obj80031_SCActionDragDrop80034_droppedOutsideTargetActions_runningActionsCount = obj80031_SCActionDragDrop80034_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj80031");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 70;
	var moveY = 634;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj80031_SCActionDragDrop80034_droppedOutsideTargetActions_runningActionsCount = window.obj80031_SCActionDragDrop80034_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj80031_SCActionDragDrop80034_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj80031_SCActionDragDrop80034_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj80031_SCActionDragDrop80034_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj80031_SCActionDragDrop80034_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj80031_SCActionDragDrop80034_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj80031_SCActionDragDrop80034_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj80031").trigger("obj80031_SCActionDragDrop80034_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80031) {
				console.warn("de-queueing event obj80031." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80031").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80031_SCActionDragDrop80034_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj80031_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80031_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj80031").trigger("obj80031_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80031) {
				console.warn("de-queueing event obj80031." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80031").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80031_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_80057();
function runjs_80057() {
	window.obj80031_droppedInsideTargetActions_3_runningActionsCount = obj80031_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj80162").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj80031_droppedInsideTargetActions_3_runningActionsCount = window.obj80031_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj80031_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj80031_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj80031_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj80031_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj80031_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80031_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj80031").trigger("obj80031_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80031) {
				console.warn("de-queueing event obj80031." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80031").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80031_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_80058();
function switchText_80058() {
	window.obj80031_droppedInsideTargetActions_3_runningActionsCount = obj80031_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p style=\"text-align: center;\"><span style=\"color: #ffffff;\"><strong><span style=\"font-family: Roboto; font-size: 18px;\"><strong><span style=\"font-family: Roboto; font-size: 18px;\">January and February</span></strong></span></strong></span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj80031_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj80031_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj80031").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj80031_content");
			setTimeout(function () {
				window.obj80031_droppedInsideTargetActions_3_runningActionsCount = window.obj80031_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj80031_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj80031_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj80031_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj80031_droppedInsideTargetActions_3_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj80031 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj80031_droppedInsideTargetActions_3_runningActionsCount = window.obj80031_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj80031_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj80031_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj80031_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj80031_droppedInsideTargetActions_3_actionGroup2();
}
		}, 1);
	}
}






};
obj80031_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80031_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj80031").trigger("obj80031_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80031) {
				console.warn("de-queueing event obj80031." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80031").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80031_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj80156 
hide_80059();
function hide_80059() {
	var selector = "#obj80156";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj80031_droppedInsideTargetActions_3_runningActionsCount = obj80031_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj80031_droppedInsideTargetActions_3_runningActionsCount = window.obj80031_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj80031_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj80031_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj80031_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj80031_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_80059(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj80031_droppedInsideTargetActions_3_runningActionsCount = window.obj80031_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj80031_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj80031_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj80031_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj80031_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj80031_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80031_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj80031").trigger("obj80031_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80031) {
				console.warn("de-queueing event obj80031." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80031").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80031_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_80060();
function runjs_80060() {
	window.obj80031_droppedInsideTargetActions_3_runningActionsCount = obj80031_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj80031").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj80031_droppedInsideTargetActions_3_runningActionsCount = window.obj80031_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj80031_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj80031_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj80031_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj80031_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj80031_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80031_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj80031").trigger("obj80031_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80031) {
				console.warn("de-queueing event obj80031." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80031").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80031_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_80061();
function switchText_80061() {
	window.obj80031_droppedInsideTargetActions_3_runningActionsCount = obj80031_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj80152_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj80152_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj80152").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj80152_content");
			setTimeout(function () {
				window.obj80031_droppedInsideTargetActions_3_runningActionsCount = window.obj80031_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj80031_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj80031_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj80031_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj80031_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj80152 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj80031_droppedInsideTargetActions_3_runningActionsCount = window.obj80031_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj80031_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj80031_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj80031_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj80031_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj80031_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80031_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj80031").trigger("obj80031_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80031) {
				console.warn("de-queueing event obj80031." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80031").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80031_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj80031 
move_80062();
function move_80062() {
	window.obj80031_droppedInsideTargetActions_3_runningActionsCount = obj80031_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj80031");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 70;
	var moveY = 634;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj80031_droppedInsideTargetActions_3_runningActionsCount = window.obj80031_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj80031_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj80031_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj80031_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj80031_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj80031_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80031_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj80031").trigger("obj80031_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80031) {
				console.warn("de-queueing event obj80031." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80031").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80031_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_80063();
function runjs_80063() {
	window.obj80031_droppedInsideTargetActions_3_runningActionsCount = obj80031_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj80162").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj80031_droppedInsideTargetActions_3_runningActionsCount = window.obj80031_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj80031_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj80031_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj80031_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj80031_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj80031_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80031_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj80031").trigger("obj80031_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80031) {
				console.warn("de-queueing event obj80031." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80031").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80031_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Switch Text
switchText_80064();
function switchText_80064() {
	window.obj80031_droppedInsideTargetActions_3_runningActionsCount = obj80031_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p style=\"text-align: center;\"><span style=\"color: #000000;\"><strong><span style=\"font-family: Roboto; font-size: 18px;\"><strong><span style=\"font-family: Roboto; font-size: 18px;\">January and February</span></strong></span></strong></span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj80031_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj80031_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj80031").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj80031_content");
			setTimeout(function () {
				window.obj80031_droppedInsideTargetActions_3_runningActionsCount = window.obj80031_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj80031_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj80031_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj80031_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj80031_droppedInsideTargetActions_3_actionGroup8();
}
			}, 1);
		});
	} else {
		$("#obj80031 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj80031_droppedInsideTargetActions_3_runningActionsCount = window.obj80031_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj80031_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj80031_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj80031_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj80031_droppedInsideTargetActions_3_actionGroup8();
}
		}, 1);
	}
}






};
obj80031_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80031_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj80031").trigger("obj80031_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80031) {
				console.warn("de-queueing event obj80031." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80031").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80031_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj80156
(function(){
	window.obj80031_droppedInsideTargetActions_3_runningActionsCount = obj80031_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj80156";
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
					window.obj80031_droppedInsideTargetActions_3_runningActionsCount = window.obj80031_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj80031_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj80031_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj80031_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj80031_droppedInsideTargetActions_3_actionGroup9();
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
				window.obj80031_droppedInsideTargetActions_3_runningActionsCount = window.obj80031_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj80031_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj80031_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj80031_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj80031_droppedInsideTargetActions_3_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj80031_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80031_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj80031").trigger("obj80031_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80031) {
				console.warn("de-queueing event obj80031." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80031").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80031_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_80066();
function runjs_80066() {
	window.obj80031_droppedInsideTargetActions_3_runningActionsCount = obj80031_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj80031").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj80031_droppedInsideTargetActions_3_runningActionsCount = window.obj80031_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj80031_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj80031_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj80031_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj80031_droppedInsideTargetActions_3_actionGroup10();
}
	}, 1);
}







};
obj80031_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80031_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj80031").trigger("obj80031_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80031) {
				console.warn("de-queueing event obj80031." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80031").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80031_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_80067();
function runjs_80067() {
	window.obj80031_droppedInsideTargetActions_3_runningActionsCount = obj80031_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj80031").css("border-color", "rgba(0,0,0,0)"); $("#obj80031").css("border-width", "0px"); $("#obj80031").css("border-style", "solid"); $("#obj80031").css("border-radius", "10px"); $("#obj80031").css("-webkit-border-radius", "10px"); $("#obj80031").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj80031_droppedInsideTargetActions_3_runningActionsCount = window.obj80031_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj80031_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj80031_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj80031_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj80031_droppedInsideTargetActions_3_actionGroup11();
}
	}, 1);
}







};
obj80031_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80031_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj80031").trigger("obj80031_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80031) {
				console.warn("de-queueing event obj80031." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80031").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80031_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj80151 
playAudio_80068();
function playAudio_80068() {
	window.obj80031_droppedInsideTargetActions_3_runningActionsCount = obj80031_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj80151")[0];
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
		    window.obj80031_droppedInsideTargetActions_3_runningActionsCount = window.obj80031_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj80031_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj80031_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj80031_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj80031_droppedInsideTargetActions_3_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj80031_droppedInsideTargetActions_3_runningActionsCount = window.obj80031_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj80031_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj80031_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj80031_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj80031_droppedInsideTargetActions_3_actionGroup12();
}
	}
}









};
obj80031_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80031_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj80031").trigger("obj80031_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80031) {
				console.warn("de-queueing event obj80031." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80031").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80031_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_80069();
function switchText_80069() {
	window.obj80031_droppedInsideTargetActions_3_runningActionsCount = obj80031_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj80152_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj80152_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj80152").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj80152_content");
			setTimeout(function () {
				window.obj80031_droppedInsideTargetActions_3_runningActionsCount = window.obj80031_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj80031_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj80031_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj80031_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj80031_droppedInsideTargetActions_3_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj80152 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj80031_droppedInsideTargetActions_3_runningActionsCount = window.obj80031_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj80031_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj80031_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj80031_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj80031_droppedInsideTargetActions_3_actionGroup13();
}
		}, 1);
	}
}






};
obj80031_droppedInsideTargetActions_3_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj80031_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj80031").trigger("obj80031_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80031) {
				console.warn("de-queueing event obj80031." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80031").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80031_droppedInsideTargetActions_3_activeActionGroupIndex = 13;
	





















};
obj80031_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80031_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj80031").trigger("obj80031_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80031) {
				console.warn("de-queueing event obj80031." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80031").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80031_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_80043();
function runjs_80043() {
	window.obj80031_droppedInsideTargetActions_2_runningActionsCount = obj80031_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj80166").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj80031_droppedInsideTargetActions_2_runningActionsCount = window.obj80031_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj80031_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj80031_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj80031_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj80031_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj80031_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80031_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj80031").trigger("obj80031_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80031) {
				console.warn("de-queueing event obj80031." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80031").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80031_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_80044();
function switchText_80044() {
	window.obj80031_droppedInsideTargetActions_2_runningActionsCount = obj80031_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p style=\"text-align: center;\"><span style=\"color: #ffffff;\"><strong><span style=\"font-family: Roboto; font-size: 18px;\"><strong><span style=\"font-family: Roboto; font-size: 18px;\">January and February</span></strong></span></strong></span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj80031_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj80031_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj80031").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj80031_content");
			setTimeout(function () {
				window.obj80031_droppedInsideTargetActions_2_runningActionsCount = window.obj80031_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj80031_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj80031_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj80031_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj80031_droppedInsideTargetActions_2_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj80031 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj80031_droppedInsideTargetActions_2_runningActionsCount = window.obj80031_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj80031_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj80031_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj80031_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj80031_droppedInsideTargetActions_2_actionGroup2();
}
		}, 1);
	}
}






};
obj80031_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80031_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj80031").trigger("obj80031_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80031) {
				console.warn("de-queueing event obj80031." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80031").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80031_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj80160 
hide_80045();
function hide_80045() {
	var selector = "#obj80160";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj80031_droppedInsideTargetActions_2_runningActionsCount = obj80031_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj80031_droppedInsideTargetActions_2_runningActionsCount = window.obj80031_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj80031_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj80031_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj80031_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj80031_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_80045(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj80031_droppedInsideTargetActions_2_runningActionsCount = window.obj80031_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj80031_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj80031_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj80031_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj80031_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj80031_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80031_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj80031").trigger("obj80031_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80031) {
				console.warn("de-queueing event obj80031." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80031").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80031_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_80046();
function runjs_80046() {
	window.obj80031_droppedInsideTargetActions_2_runningActionsCount = obj80031_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj80031").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj80031_droppedInsideTargetActions_2_runningActionsCount = window.obj80031_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj80031_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj80031_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj80031_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj80031_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj80031_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80031_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj80031").trigger("obj80031_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80031) {
				console.warn("de-queueing event obj80031." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80031").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80031_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_80047();
function switchText_80047() {
	window.obj80031_droppedInsideTargetActions_2_runningActionsCount = obj80031_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj80152_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj80152_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj80152").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj80152_content");
			setTimeout(function () {
				window.obj80031_droppedInsideTargetActions_2_runningActionsCount = window.obj80031_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj80031_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj80031_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj80031_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj80031_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj80152 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj80031_droppedInsideTargetActions_2_runningActionsCount = window.obj80031_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj80031_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj80031_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj80031_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj80031_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj80031_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80031_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj80031").trigger("obj80031_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80031) {
				console.warn("de-queueing event obj80031." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80031").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80031_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj80031 
move_80048();
function move_80048() {
	window.obj80031_droppedInsideTargetActions_2_runningActionsCount = obj80031_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj80031");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 70;
	var moveY = 634;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj80031_droppedInsideTargetActions_2_runningActionsCount = window.obj80031_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj80031_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj80031_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj80031_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj80031_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj80031_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80031_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj80031").trigger("obj80031_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80031) {
				console.warn("de-queueing event obj80031." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80031").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80031_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_80049();
function runjs_80049() {
	window.obj80031_droppedInsideTargetActions_2_runningActionsCount = obj80031_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj80166").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj80031_droppedInsideTargetActions_2_runningActionsCount = window.obj80031_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj80031_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj80031_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj80031_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj80031_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj80031_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80031_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj80031").trigger("obj80031_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80031) {
				console.warn("de-queueing event obj80031." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80031").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80031_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Switch Text
switchText_80050();
function switchText_80050() {
	window.obj80031_droppedInsideTargetActions_2_runningActionsCount = obj80031_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p style=\"text-align: center;\"><span style=\"color: #000000;\"><strong><span style=\"font-family: Roboto; font-size: 18px;\"><strong><span style=\"font-family: Roboto; font-size: 18px;\">January and February</span></strong></span></strong></span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj80031_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj80031_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj80031").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj80031_content");
			setTimeout(function () {
				window.obj80031_droppedInsideTargetActions_2_runningActionsCount = window.obj80031_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj80031_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj80031_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj80031_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj80031_droppedInsideTargetActions_2_actionGroup8();
}
			}, 1);
		});
	} else {
		$("#obj80031 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj80031_droppedInsideTargetActions_2_runningActionsCount = window.obj80031_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj80031_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj80031_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj80031_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj80031_droppedInsideTargetActions_2_actionGroup8();
}
		}, 1);
	}
}






};
obj80031_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80031_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj80031").trigger("obj80031_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80031) {
				console.warn("de-queueing event obj80031." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80031").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80031_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj80160
(function(){
	window.obj80031_droppedInsideTargetActions_2_runningActionsCount = obj80031_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj80160";
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
					window.obj80031_droppedInsideTargetActions_2_runningActionsCount = window.obj80031_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj80031_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj80031_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj80031_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj80031_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj80031_droppedInsideTargetActions_2_runningActionsCount = window.obj80031_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj80031_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj80031_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj80031_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj80031_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj80031_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80031_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj80031").trigger("obj80031_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80031) {
				console.warn("de-queueing event obj80031." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80031").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80031_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_80052();
function runjs_80052() {
	window.obj80031_droppedInsideTargetActions_2_runningActionsCount = obj80031_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj80031").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj80031_droppedInsideTargetActions_2_runningActionsCount = window.obj80031_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj80031_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj80031_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj80031_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj80031_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj80031_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80031_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj80031").trigger("obj80031_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80031) {
				console.warn("de-queueing event obj80031." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80031").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80031_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_80053();
function runjs_80053() {
	window.obj80031_droppedInsideTargetActions_2_runningActionsCount = obj80031_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj80031").css("border-color", "rgba(0,0,0,0)"); $("#obj80031").css("border-width", "0px"); $("#obj80031").css("border-style", "solid"); $("#obj80031").css("border-radius", "10px"); $("#obj80031").css("-webkit-border-radius", "10px"); $("#obj80031").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj80031_droppedInsideTargetActions_2_runningActionsCount = window.obj80031_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj80031_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj80031_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj80031_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj80031_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj80031_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80031_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj80031").trigger("obj80031_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80031) {
				console.warn("de-queueing event obj80031." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80031").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80031_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj80151 
playAudio_80054();
function playAudio_80054() {
	window.obj80031_droppedInsideTargetActions_2_runningActionsCount = obj80031_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj80151")[0];
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
		    window.obj80031_droppedInsideTargetActions_2_runningActionsCount = window.obj80031_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj80031_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj80031_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj80031_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj80031_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj80031_droppedInsideTargetActions_2_runningActionsCount = window.obj80031_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj80031_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj80031_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj80031_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj80031_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj80031_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80031_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj80031").trigger("obj80031_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80031) {
				console.warn("de-queueing event obj80031." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80031").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80031_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_80055();
function switchText_80055() {
	window.obj80031_droppedInsideTargetActions_2_runningActionsCount = obj80031_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj80152_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj80152_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj80152").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj80152_content");
			setTimeout(function () {
				window.obj80031_droppedInsideTargetActions_2_runningActionsCount = window.obj80031_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj80031_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj80031_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj80031_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj80031_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj80152 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj80031_droppedInsideTargetActions_2_runningActionsCount = window.obj80031_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj80031_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj80031_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj80031_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj80031_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj80031_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj80031_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj80031").trigger("obj80031_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80031) {
				console.warn("de-queueing event obj80031." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80031").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80031_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj80031_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80031_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj80031").trigger("obj80031_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80031) {
				console.warn("de-queueing event obj80031." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80031").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80031_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_80036();
function runjs_80036() {
	window.obj80031_droppedInsideTargetActions_runningActionsCount = obj80031_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj80164").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj80031_droppedInsideTargetActions_runningActionsCount = window.obj80031_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj80031_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj80031_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj80031_droppedInsideTargetActions_runningActionsCount == 0) {
	obj80031_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj80031_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80031_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj80031").trigger("obj80031_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80031) {
				console.warn("de-queueing event obj80031." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80031").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80031_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_80040();
function switchText_80040() {
	window.obj80031_droppedInsideTargetActions_runningActionsCount = obj80031_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj80152_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj80152_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj80152").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj80152_content");
			setTimeout(function () {
				window.obj80031_droppedInsideTargetActions_runningActionsCount = window.obj80031_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj80031_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj80031_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj80031_droppedInsideTargetActions_runningActionsCount == 0) {
	obj80031_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj80152 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj80031_droppedInsideTargetActions_runningActionsCount = window.obj80031_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj80031_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj80031_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj80031_droppedInsideTargetActions_runningActionsCount == 0) {
	obj80031_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj80031_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80031_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj80031").trigger("obj80031_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80031) {
				console.warn("de-queueing event obj80031." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80031").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80031_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Switch Text
switchText_80037();
function switchText_80037() {
	window.obj80031_droppedInsideTargetActions_runningActionsCount = obj80031_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p style=\"text-align: center;\"><span style=\"color: #ffffff;\"><strong><span style=\"font-family: Roboto; font-size: 18px;\">January and February</span></strong></span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj80031_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj80031_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj80031").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj80031_content");
			setTimeout(function () {
				window.obj80031_droppedInsideTargetActions_runningActionsCount = window.obj80031_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj80031_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj80031_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj80031_droppedInsideTargetActions_runningActionsCount == 0) {
	obj80031_droppedInsideTargetActions_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj80031 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj80031_droppedInsideTargetActions_runningActionsCount = window.obj80031_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj80031_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj80031_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj80031_droppedInsideTargetActions_runningActionsCount == 0) {
	obj80031_droppedInsideTargetActions_actionGroup3();
}
		}, 1);
	}
}






};
obj80031_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80031_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj80031").trigger("obj80031_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80031) {
				console.warn("de-queueing event obj80031." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80031").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80031_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj80158 
hide_80038();
function hide_80038() {
	var selector = "#obj80158";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj80031_droppedInsideTargetActions_runningActionsCount = obj80031_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj80031_droppedInsideTargetActions_runningActionsCount = window.obj80031_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj80031_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj80031_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj80031_droppedInsideTargetActions_runningActionsCount == 0) {
	obj80031_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_80038(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj80031_droppedInsideTargetActions_runningActionsCount = window.obj80031_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj80031_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj80031_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj80031_droppedInsideTargetActions_runningActionsCount == 0) {
	obj80031_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj80031_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80031_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj80031").trigger("obj80031_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80031) {
				console.warn("de-queueing event obj80031." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80031").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80031_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_80039();
function runjs_80039() {
	window.obj80031_droppedInsideTargetActions_runningActionsCount = obj80031_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj80031").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj80031_droppedInsideTargetActions_runningActionsCount = window.obj80031_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj80031_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj80031_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj80031_droppedInsideTargetActions_runningActionsCount == 0) {
	obj80031_droppedInsideTargetActions_actionGroup5();
}
	}, 1);
}







};
obj80031_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80031_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj80031").trigger("obj80031_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80031) {
				console.warn("de-queueing event obj80031." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80031").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80031_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj80150 
playAudio_80041();
function playAudio_80041() {
	window.obj80031_droppedInsideTargetActions_runningActionsCount = obj80031_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj80150")[0];
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
		    window.obj80031_droppedInsideTargetActions_runningActionsCount = window.obj80031_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj80031_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj80031_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj80031_droppedInsideTargetActions_runningActionsCount == 0) {
	obj80031_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj80031_droppedInsideTargetActions_runningActionsCount = window.obj80031_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj80031_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj80031_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj80031_droppedInsideTargetActions_runningActionsCount == 0) {
	obj80031_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj80031_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80031_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj80031").trigger("obj80031_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80031) {
				console.warn("de-queueing event obj80031." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80031").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80031_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90322();
function switchText_90322() {
	window.obj80031_droppedInsideTargetActions_runningActionsCount = obj80031_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj80152_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj80152_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj80152").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj80152_content");
			setTimeout(function () {
				window.obj80031_droppedInsideTargetActions_runningActionsCount = window.obj80031_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj80031_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj80031_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj80031_droppedInsideTargetActions_runningActionsCount == 0) {
	obj80031_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj80152 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj80031_droppedInsideTargetActions_runningActionsCount = window.obj80031_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj80031_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj80031_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj80031_droppedInsideTargetActions_runningActionsCount == 0) {
	obj80031_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj80031_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj80031_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj80031").trigger("obj80031_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80031) {
				console.warn("de-queueing event obj80031." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80031").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80031_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj80013_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80013_onTap_activeActionGroupIndex = -1;
		$("#obj80013").trigger("obj80013_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80013) {
				console.warn("de-queueing event obj80013." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80013").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80013_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj80013 
hide_80016();
function hide_80016() {
	var selector = "#obj80013";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj80013_onTap_runningActionsCount = obj80013_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj80013_onTap_runningActionsCount = window.obj80013_onTap_runningActionsCount - 1;
if (window.obj80013_onTap_runningActionsCount < 0) {
	window.obj80013_onTap_runningActionsCount = 0;
} else if (window.obj80013_onTap_runningActionsCount == 0) {
	obj80013_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_80016(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj80013_onTap_runningActionsCount = window.obj80013_onTap_runningActionsCount - 1;
if (window.obj80013_onTap_runningActionsCount < 0) {
	window.obj80013_onTap_runningActionsCount = 0;
} else if (window.obj80013_onTap_runningActionsCount == 0) {
	obj80013_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj80003 
stopMovie_80015();
function stopMovie_80015() {
	window.obj80013_onTap_runningActionsCount = obj80013_onTap_runningActionsCount + 1;
	var myVideo = $("#obj80003")[0];
	myVideo.pause();
	window.obj80013_onTap_runningActionsCount = window.obj80013_onTap_runningActionsCount - 1;
if (window.obj80013_onTap_runningActionsCount < 0) {
	window.obj80013_onTap_runningActionsCount = 0;
} else if (window.obj80013_onTap_runningActionsCount == 0) {
	obj80013_onTap_actionGroup1();
}
}
















};
obj80013_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80013_onTap_activeActionGroupIndex = -1;
		$("#obj80013").trigger("obj80013_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80013) {
				console.warn("de-queueing event obj80013." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80013").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80013_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj80005
(function(){
	window.obj80013_onTap_runningActionsCount = obj80013_onTap_runningActionsCount + 1;

	var selector = "#obj80005";
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
					window.obj80013_onTap_runningActionsCount = window.obj80013_onTap_runningActionsCount - 1;
if (window.obj80013_onTap_runningActionsCount < 0) {
	window.obj80013_onTap_runningActionsCount = 0;
} else if (window.obj80013_onTap_runningActionsCount == 0) {
	obj80013_onTap_actionGroup2();
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
				window.obj80013_onTap_runningActionsCount = window.obj80013_onTap_runningActionsCount - 1;
if (window.obj80013_onTap_runningActionsCount < 0) {
	window.obj80013_onTap_runningActionsCount = 0;
} else if (window.obj80013_onTap_runningActionsCount == 0) {
	obj80013_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj80013_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80013_onTap_activeActionGroupIndex = -1;
		$("#obj80013").trigger("obj80013_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80013) {
				console.warn("de-queueing event obj80013." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80013").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80013_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj80003 
move_80018();
function move_80018() {
	window.obj80013_onTap_runningActionsCount = obj80013_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj80003");
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
			window.obj80013_onTap_runningActionsCount = window.obj80013_onTap_runningActionsCount - 1;
if (window.obj80013_onTap_runningActionsCount < 0) {
	window.obj80013_onTap_runningActionsCount = 0;
} else if (window.obj80013_onTap_runningActionsCount == 0) {
	obj80013_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj80013_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj80013_onTap_activeActionGroupIndex = -1;
		$("#obj80013").trigger("obj80013_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80013) {
				console.warn("de-queueing event obj80013." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80013").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80013_onTap_activeActionGroupIndex = 3;
	





















};
obj80005_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80005_onTap_activeActionGroupIndex = -1;
		$("#obj80005").trigger("obj80005_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80005) {
				console.warn("de-queueing event obj80005." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80005").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80005_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj80005 
hide_80008();
function hide_80008() {
	var selector = "#obj80005";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj80005_onTap_runningActionsCount = obj80005_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj80005_onTap_runningActionsCount = window.obj80005_onTap_runningActionsCount - 1;
if (window.obj80005_onTap_runningActionsCount < 0) {
	window.obj80005_onTap_runningActionsCount = 0;
} else if (window.obj80005_onTap_runningActionsCount == 0) {
	obj80005_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_80008(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj80005_onTap_runningActionsCount = window.obj80005_onTap_runningActionsCount - 1;
if (window.obj80005_onTap_runningActionsCount < 0) {
	window.obj80005_onTap_runningActionsCount = 0;
} else if (window.obj80005_onTap_runningActionsCount == 0) {
	obj80005_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj80003 
playPauseMovie_80007();
function playPauseMovie_80007() {
	window.obj80005_onTap_runningActionsCount = obj80005_onTap_runningActionsCount + 1;
	var myVideo = $("#obj80003")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj80005_onTap_runningActionsCount = window.obj80005_onTap_runningActionsCount - 1;
if (window.obj80005_onTap_runningActionsCount < 0) {
	window.obj80005_onTap_runningActionsCount = 0;
} else if (window.obj80005_onTap_runningActionsCount == 0) {
	obj80005_onTap_actionGroup1();
}
}

















};
obj80005_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80005_onTap_activeActionGroupIndex = -1;
		$("#obj80005").trigger("obj80005_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80005) {
				console.warn("de-queueing event obj80005." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80005").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80005_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj80013
(function(){
	window.obj80005_onTap_runningActionsCount = obj80005_onTap_runningActionsCount + 1;

	var selector = "#obj80013";
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
					window.obj80005_onTap_runningActionsCount = window.obj80005_onTap_runningActionsCount - 1;
if (window.obj80005_onTap_runningActionsCount < 0) {
	window.obj80005_onTap_runningActionsCount = 0;
} else if (window.obj80005_onTap_runningActionsCount == 0) {
	obj80005_onTap_actionGroup2();
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
				window.obj80005_onTap_runningActionsCount = window.obj80005_onTap_runningActionsCount - 1;
if (window.obj80005_onTap_runningActionsCount < 0) {
	window.obj80005_onTap_runningActionsCount = 0;
} else if (window.obj80005_onTap_runningActionsCount == 0) {
	obj80005_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj80005_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80005_onTap_activeActionGroupIndex = -1;
		$("#obj80005").trigger("obj80005_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80005) {
				console.warn("de-queueing event obj80005." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80005").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80005_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj80003 
move_80010();
function move_80010() {
	window.obj80005_onTap_runningActionsCount = obj80005_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj80003");
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
			window.obj80005_onTap_runningActionsCount = window.obj80005_onTap_runningActionsCount - 1;
if (window.obj80005_onTap_runningActionsCount < 0) {
	window.obj80005_onTap_runningActionsCount = 0;
} else if (window.obj80005_onTap_runningActionsCount == 0) {
	obj80005_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj80005_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj80005_onTap_activeActionGroupIndex = -1;
		$("#obj80005").trigger("obj80005_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80005) {
				console.warn("de-queueing event obj80005." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80005").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80005_onTap_activeActionGroupIndex = 3;
	





















};
obj88009_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88009_onTap_activeActionGroupIndex = -1;
		$("#obj88009").trigger("obj88009_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88009) {
				console.warn("de-queueing event obj88009." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88009").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88009_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj88014 
stopAudio_88011();
function stopAudio_88011() {
	window.obj88009_onTap_runningActionsCount = obj88009_onTap_runningActionsCount + 1;
	var myAudio = $("#obj88014")[0];
	myAudio.pause();
	window.obj88009_onTap_runningActionsCount = window.obj88009_onTap_runningActionsCount - 1;
if (window.obj88009_onTap_runningActionsCount < 0) {
	window.obj88009_onTap_runningActionsCount = 0;
} else if (window.obj88009_onTap_runningActionsCount == 0) {
	obj88009_onTap_actionGroup1();
}
}








};
obj88009_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88009_onTap_activeActionGroupIndex = -1;
		$("#obj88009").trigger("obj88009_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88009) {
				console.warn("de-queueing event obj88009." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88009").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88009_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj88009 
hide_88012();
function hide_88012() {
	var selector = "#obj88009";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj88009_onTap_runningActionsCount = obj88009_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj88009_onTap_runningActionsCount = window.obj88009_onTap_runningActionsCount - 1;
if (window.obj88009_onTap_runningActionsCount < 0) {
	window.obj88009_onTap_runningActionsCount = 0;
} else if (window.obj88009_onTap_runningActionsCount == 0) {
	obj88009_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_88012(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj88009_onTap_runningActionsCount = window.obj88009_onTap_runningActionsCount - 1;
if (window.obj88009_onTap_runningActionsCount < 0) {
	window.obj88009_onTap_runningActionsCount = 0;
} else if (window.obj88009_onTap_runningActionsCount == 0) {
	obj88009_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj88009_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88009_onTap_activeActionGroupIndex = -1;
		$("#obj88009").trigger("obj88009_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88009) {
				console.warn("de-queueing event obj88009." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88009").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88009_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj88004
(function(){
	window.obj88009_onTap_runningActionsCount = obj88009_onTap_runningActionsCount + 1;

	var selector = "#obj88004";
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
					window.obj88009_onTap_runningActionsCount = window.obj88009_onTap_runningActionsCount - 1;
if (window.obj88009_onTap_runningActionsCount < 0) {
	window.obj88009_onTap_runningActionsCount = 0;
} else if (window.obj88009_onTap_runningActionsCount == 0) {
	obj88009_onTap_actionGroup3();
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
				window.obj88009_onTap_runningActionsCount = window.obj88009_onTap_runningActionsCount - 1;
if (window.obj88009_onTap_runningActionsCount < 0) {
	window.obj88009_onTap_runningActionsCount = 0;
} else if (window.obj88009_onTap_runningActionsCount == 0) {
	obj88009_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj88009_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj88009_onTap_activeActionGroupIndex = -1;
		$("#obj88009").trigger("obj88009_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88009) {
				console.warn("de-queueing event obj88009." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88009").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88009_onTap_activeActionGroupIndex = 3;
	





















};
obj88004_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88004_onTap_activeActionGroupIndex = -1;
		$("#obj88004").trigger("obj88004_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88004) {
				console.warn("de-queueing event obj88004." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88004").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88004_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj88004 
hide_88006();
function hide_88006() {
	var selector = "#obj88004";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj88004_onTap_runningActionsCount = obj88004_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj88004_onTap_runningActionsCount = window.obj88004_onTap_runningActionsCount - 1;
if (window.obj88004_onTap_runningActionsCount < 0) {
	window.obj88004_onTap_runningActionsCount = 0;
} else if (window.obj88004_onTap_runningActionsCount == 0) {
	obj88004_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_88006(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj88004_onTap_runningActionsCount = window.obj88004_onTap_runningActionsCount - 1;
if (window.obj88004_onTap_runningActionsCount < 0) {
	window.obj88004_onTap_runningActionsCount = 0;
} else if (window.obj88004_onTap_runningActionsCount == 0) {
	obj88004_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj88004_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88004_onTap_activeActionGroupIndex = -1;
		$("#obj88004").trigger("obj88004_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88004) {
				console.warn("de-queueing event obj88004." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88004").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88004_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj88009
(function(){
	window.obj88004_onTap_runningActionsCount = obj88004_onTap_runningActionsCount + 1;

	var selector = "#obj88009";
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
					window.obj88004_onTap_runningActionsCount = window.obj88004_onTap_runningActionsCount - 1;
if (window.obj88004_onTap_runningActionsCount < 0) {
	window.obj88004_onTap_runningActionsCount = 0;
} else if (window.obj88004_onTap_runningActionsCount == 0) {
	obj88004_onTap_actionGroup2();
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
				window.obj88004_onTap_runningActionsCount = window.obj88004_onTap_runningActionsCount - 1;
if (window.obj88004_onTap_runningActionsCount < 0) {
	window.obj88004_onTap_runningActionsCount = 0;
} else if (window.obj88004_onTap_runningActionsCount == 0) {
	obj88004_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj88004_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88004_onTap_activeActionGroupIndex = -1;
		$("#obj88004").trigger("obj88004_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88004) {
				console.warn("de-queueing event obj88004." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88004").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88004_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj88014 
playAudio_88008();
function playAudio_88008() {
	window.obj88004_onTap_runningActionsCount = obj88004_onTap_runningActionsCount + 1;
	var myAudio = $("#obj88014")[0];
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
		    window.obj88004_onTap_runningActionsCount = window.obj88004_onTap_runningActionsCount - 1;
if (window.obj88004_onTap_runningActionsCount < 0) {
	window.obj88004_onTap_runningActionsCount = 0;
} else if (window.obj88004_onTap_runningActionsCount == 0) {
	obj88004_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj88004_onTap_runningActionsCount = window.obj88004_onTap_runningActionsCount - 1;
if (window.obj88004_onTap_runningActionsCount < 0) {
	window.obj88004_onTap_runningActionsCount = 0;
} else if (window.obj88004_onTap_runningActionsCount == 0) {
	obj88004_onTap_actionGroup3();
}
	}
}









};
obj88004_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj88004_onTap_activeActionGroupIndex = -1;
		$("#obj88004").trigger("obj88004_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88004) {
				console.warn("de-queueing event obj88004." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88004").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88004_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj80191: Event Touch Down
 *
 */
$("#obj80191").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj80191_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj80191_onTap is still running");
	return;
}
var obj80191_onTap_runningActionsCount = 0;
var obj80191_onTap_loopCount = 0;
obj80191_onTap_actionGroup0();
});










/*
 *
 *   obj80188: Event Touch Down
 *
 */
$("#obj80188").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj80188_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj80188_onTap is still running");
	return;
}
var obj80188_onTap_runningActionsCount = 0;
var obj80188_onTap_loopCount = 0;
obj80188_onTap_actionGroup0();
});










/*
 *
 *   obj80184: Event Touch Down
 *
 */
$("#obj80184").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj80184_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj80184_onTap is still running");
	return;
}
var obj80184_onTap_runningActionsCount = 0;
var obj80184_onTap_loopCount = 0;
obj80184_onTap_actionGroup0();
});









































































































































































































/*
 *
 *   obj80109: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj80109");
	var winTarget = document.getElementById("obj80109");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj80109").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj80109_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj80109_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj80109_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj80109_onTouchDown is still running");
	return;
}
var obj80109_onTouchDown_runningActionsCount = 0;
var obj80109_onTouchDown_loopCount = 0;
obj80109_onTouchDown_actionGroup0();
});



/*
 *
 *   obj80109: Event SCActionDragDrop80112_droppedOutsideTargetActions
 *
 */
$("#obj80109").bind("SCActionDragDrop80112_droppedOutsideTargetActions", function(event) {
	if (window.obj80109_SCActionDragDrop80112_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj80109_SCActionDragDrop80112_droppedOutsideTargetActions is still running");
	return;
}
var obj80109_SCActionDragDrop80112_droppedOutsideTargetActions_runningActionsCount = 0;
var obj80109_SCActionDragDrop80112_droppedOutsideTargetActions_loopCount = 0;
obj80109_SCActionDragDrop80112_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj80109: Event droppedInsideTargetActions_3
 *
 */
$("#obj80109").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj80109_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj80109_droppedInsideTargetActions_3 is still running");
	return;
}
var obj80109_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj80109_droppedInsideTargetActions_3_loopCount = 0;
obj80109_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj80109: Event droppedInsideTargetActions_2
 *
 */
$("#obj80109").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj80109_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj80109_droppedInsideTargetActions_2 is still running");
	return;
}
var obj80109_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj80109_droppedInsideTargetActions_2_loopCount = 0;
obj80109_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj80109: Event droppedInsideTargetActions
 *
 */
$("#obj80109").bind("droppedInsideTargetActions", function(event) {
	if (window.obj80109_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj80109_droppedInsideTargetActions is still running");
	return;
}
var obj80109_droppedInsideTargetActions_runningActionsCount = 0;
var obj80109_droppedInsideTargetActions_loopCount = 0;
obj80109_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj80070: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj80070");
	var winTarget = document.getElementById("obj80070");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj80070").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj80070_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj80070_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj80070_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj80070_onTouchDown is still running");
	return;
}
var obj80070_onTouchDown_runningActionsCount = 0;
var obj80070_onTouchDown_loopCount = 0;
obj80070_onTouchDown_actionGroup0();
});



/*
 *
 *   obj80070: Event SCActionDragDrop80073_droppedOutsideTargetActions
 *
 */
$("#obj80070").bind("SCActionDragDrop80073_droppedOutsideTargetActions", function(event) {
	if (window.obj80070_SCActionDragDrop80073_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj80070_SCActionDragDrop80073_droppedOutsideTargetActions is still running");
	return;
}
var obj80070_SCActionDragDrop80073_droppedOutsideTargetActions_runningActionsCount = 0;
var obj80070_SCActionDragDrop80073_droppedOutsideTargetActions_loopCount = 0;
obj80070_SCActionDragDrop80073_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj80070: Event droppedInsideTargetActions_3
 *
 */
$("#obj80070").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj80070_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj80070_droppedInsideTargetActions_3 is still running");
	return;
}
var obj80070_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj80070_droppedInsideTargetActions_3_loopCount = 0;
obj80070_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj80070: Event droppedInsideTargetActions_2
 *
 */
$("#obj80070").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj80070_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj80070_droppedInsideTargetActions_2 is still running");
	return;
}
var obj80070_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj80070_droppedInsideTargetActions_2_loopCount = 0;
obj80070_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj80070: Event droppedInsideTargetActions
 *
 */
$("#obj80070").bind("droppedInsideTargetActions", function(event) {
	if (window.obj80070_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj80070_droppedInsideTargetActions is still running");
	return;
}
var obj80070_droppedInsideTargetActions_runningActionsCount = 0;
var obj80070_droppedInsideTargetActions_loopCount = 0;
obj80070_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj80031: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj80031");
	var winTarget = document.getElementById("obj80031");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj80031").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj80031_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj80031_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj80031_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj80031_onTouchDown is still running");
	return;
}
var obj80031_onTouchDown_runningActionsCount = 0;
var obj80031_onTouchDown_loopCount = 0;
obj80031_onTouchDown_actionGroup0();
});



/*
 *
 *   obj80031: Event SCActionDragDrop80034_droppedOutsideTargetActions
 *
 */
$("#obj80031").bind("SCActionDragDrop80034_droppedOutsideTargetActions", function(event) {
	if (window.obj80031_SCActionDragDrop80034_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj80031_SCActionDragDrop80034_droppedOutsideTargetActions is still running");
	return;
}
var obj80031_SCActionDragDrop80034_droppedOutsideTargetActions_runningActionsCount = 0;
var obj80031_SCActionDragDrop80034_droppedOutsideTargetActions_loopCount = 0;
obj80031_SCActionDragDrop80034_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj80031: Event droppedInsideTargetActions_3
 *
 */
$("#obj80031").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj80031_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj80031_droppedInsideTargetActions_3 is still running");
	return;
}
var obj80031_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj80031_droppedInsideTargetActions_3_loopCount = 0;
obj80031_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj80031: Event droppedInsideTargetActions_2
 *
 */
$("#obj80031").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj80031_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj80031_droppedInsideTargetActions_2 is still running");
	return;
}
var obj80031_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj80031_droppedInsideTargetActions_2_loopCount = 0;
obj80031_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj80031: Event droppedInsideTargetActions
 *
 */
$("#obj80031").bind("droppedInsideTargetActions", function(event) {
	if (window.obj80031_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj80031_droppedInsideTargetActions is still running");
	return;
}
var obj80031_droppedInsideTargetActions_runningActionsCount = 0;
var obj80031_droppedInsideTargetActions_loopCount = 0;
obj80031_droppedInsideTargetActions_actionGroup0();
});





/*
 *
 *   obj80013: Event Touch Down
 *
 */
$("#obj80013").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj80013_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj80013_onTap is still running");
	return;
}
var obj80013_onTap_runningActionsCount = 0;
var obj80013_onTap_loopCount = 0;
obj80013_onTap_actionGroup0();
});










/*
 *
 *   obj80005: Event Touch Down
 *
 */
$("#obj80005").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj80005_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj80005_onTap is still running");
	return;
}
var obj80005_onTap_runningActionsCount = 0;
var obj80005_onTap_loopCount = 0;
obj80005_onTap_actionGroup0();
});










/*
 *
 *   obj88009: Event Touch Down
 *
 */
$("#obj88009").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj88009_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj88009_onTap is still running");
	return;
}
var obj88009_onTap_runningActionsCount = 0;
var obj88009_onTap_loopCount = 0;
obj88009_onTap_actionGroup0();
});










/*
 *
 *   obj88004: Event Touch Down
 *
 */
$("#obj88004").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj88004_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj88004_onTap is still running");
	return;
}
var obj88004_onTap_runningActionsCount = 0;
var obj88004_onTap_loopCount = 0;
obj88004_onTap_actionGroup0();
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
	
$("#obj80194").trigger('SCEventShow');
$("#obj80191").trigger('SCEventShow');
$("#obj80188").trigger('SCEventShow');
$("#obj80184").trigger('SCEventShow');
$("#obj80182").trigger('SCEventShow');
$("#obj80180").trigger('SCEventShow');
$("#obj80178").trigger('SCEventShow');
$("#obj80176").trigger('SCEventShow');
$("#obj80174").trigger('SCEventShow');
$("#obj80172").trigger('SCEventShow');
$("#obj80170").trigger('SCEventShow');
$("#obj80168").trigger('SCEventShow');
$("#obj80166").trigger('SCEventShow');
$("#obj80164").trigger('SCEventShow');
$("#obj80162").trigger('SCEventShow');
$("#obj80160").trigger('SCEventShow');
$("#obj80158").trigger('SCEventShow');
$("#obj80156").trigger('SCEventShow');
$("#obj80154").trigger('SCEventShow');
$("#obj80152").trigger('SCEventShow');
$("#obj80151").trigger('SCEventShow');
$("#obj80150").trigger('SCEventShow');
$("#obj80148").trigger('SCEventShow');
$("#obj80109").trigger('SCEventShow');
$("#obj80070").trigger('SCEventShow');
$("#obj80031").trigger('SCEventShow');
$("#obj80013").trigger('SCEventShow');
$("#obj80005").trigger('SCEventShow');
$("#obj88009").trigger('SCEventShow');
$("#obj88004").trigger('SCEventShow');
$("#obj88014").trigger('SCEventShow');
$("#obj94819").trigger('SCEventShow');
$("#obj80003").trigger('SCEventShow');
	
});