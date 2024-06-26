pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 53069;
pubcoder.page.title = pubcoder.page.title || "188";
pubcoder.page.number = pubcoder.page.number || 188;
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
var obj53376_onTap_activeActionGroupIndex = -1;
var obj53376_onTap_runningActionsCount = 0;
var obj53376_onTap_loopCount = 0;
var obj53373_onTap_activeActionGroupIndex = -1;
var obj53373_onTap_runningActionsCount = 0;
var obj53373_onTap_loopCount = 0;
var obj53369_onTap_activeActionGroupIndex = -1;
var obj53369_onTap_runningActionsCount = 0;
var obj53369_onTap_loopCount = 0;
var obj53151_onDrag_activeActionGroupIndex = -1;
var obj53151_onDrag_runningActionsCount = 0;
var obj53151_onDrag_loopCount = 0;
var obj53151_onTouchDown_activeActionGroupIndex = -1;
var obj53151_onTouchDown_runningActionsCount = 0;
var obj53151_onTouchDown_loopCount = 0;
var obj53151_SCActionDragDrop53154_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj53151_SCActionDragDrop53154_droppedOutsideTargetActions_runningActionsCount = 0;
var obj53151_SCActionDragDrop53154_droppedOutsideTargetActions_loopCount = 0;
var obj53151_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj53151_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj53151_droppedInsideTargetActions_2_loopCount = 0;
var obj53151_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj53151_droppedInsideTargetActions_runningActionsCount = 0;
var obj53151_droppedInsideTargetActions_loopCount = 0;
var obj53070_onDrag_activeActionGroupIndex = -1;
var obj53070_onDrag_runningActionsCount = 0;
var obj53070_onDrag_loopCount = 0;
var obj53070_onTouchDown_activeActionGroupIndex = -1;
var obj53070_onTouchDown_runningActionsCount = 0;
var obj53070_onTouchDown_loopCount = 0;
var obj53070_SCActionDragDrop53073_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj53070_SCActionDragDrop53073_droppedOutsideTargetActions_runningActionsCount = 0;
var obj53070_SCActionDragDrop53073_droppedOutsideTargetActions_loopCount = 0;
var obj53070_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj53070_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj53070_droppedInsideTargetActions_2_loopCount = 0;
var obj53070_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj53070_droppedInsideTargetActions_runningActionsCount = 0;
var obj53070_droppedInsideTargetActions_loopCount = 0;
var obj68030_onTap_activeActionGroupIndex = -1;
var obj68030_onTap_runningActionsCount = 0;
var obj68030_onTap_loopCount = 0;
var obj68022_onTap_activeActionGroupIndex = -1;
var obj68022_onTap_runningActionsCount = 0;
var obj68022_onTap_loopCount = 0;
var obj89137_onTap_activeActionGroupIndex = -1;
var obj89137_onTap_runningActionsCount = 0;
var obj89137_onTap_loopCount = 0;
var obj89132_onTap_activeActionGroupIndex = -1;
var obj89132_onTap_runningActionsCount = 0;
var obj89132_onTap_loopCount = 0;
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
		
obj53376_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53376_onTap_activeActionGroupIndex = -1;
		$("#obj53376").trigger("obj53376_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53376) {
				console.warn("de-queueing event obj53376." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53376").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53376_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_53378();
function goToPage_53378() {
	window.obj53376_onTap_runningActionsCount = obj53376_onTap_runningActionsCount + 1;
	$("#anchor1107")[0].click();
	window.obj53376_onTap_runningActionsCount = window.obj53376_onTap_runningActionsCount - 1;
if (window.obj53376_onTap_runningActionsCount < 0) {
	window.obj53376_onTap_runningActionsCount = 0;
} else if (window.obj53376_onTap_runningActionsCount == 0) {
	obj53376_onTap_actionGroup1();
}
}





















};
obj53376_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj53376_onTap_activeActionGroupIndex = -1;
		$("#obj53376").trigger("obj53376_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53376) {
				console.warn("de-queueing event obj53376." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53376").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53376_onTap_activeActionGroupIndex = 1;
	





















};
obj53373_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53373_onTap_activeActionGroupIndex = -1;
		$("#obj53373").trigger("obj53373_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53373) {
				console.warn("de-queueing event obj53373." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53373").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53373_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_53375();
function goToPage_53375() {
	window.obj53373_onTap_runningActionsCount = obj53373_onTap_runningActionsCount + 1;
	$("#anchor1108")[0].click();
	window.obj53373_onTap_runningActionsCount = window.obj53373_onTap_runningActionsCount - 1;
if (window.obj53373_onTap_runningActionsCount < 0) {
	window.obj53373_onTap_runningActionsCount = 0;
} else if (window.obj53373_onTap_runningActionsCount == 0) {
	obj53373_onTap_actionGroup1();
}
}





















};
obj53373_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj53373_onTap_activeActionGroupIndex = -1;
		$("#obj53373").trigger("obj53373_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53373) {
				console.warn("de-queueing event obj53373." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53373").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53373_onTap_activeActionGroupIndex = 1;
	





















};
obj53369_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53369_onTap_activeActionGroupIndex = -1;
		$("#obj53369").trigger("obj53369_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53369) {
				console.warn("de-queueing event obj53369." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53369").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53369_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_53371();
function goToPage_53371() {
	window.obj53369_onTap_runningActionsCount = obj53369_onTap_runningActionsCount + 1;
	$("#anchor1109")[0].click();
	window.obj53369_onTap_runningActionsCount = window.obj53369_onTap_runningActionsCount - 1;
if (window.obj53369_onTap_runningActionsCount < 0) {
	window.obj53369_onTap_runningActionsCount = 0;
} else if (window.obj53369_onTap_runningActionsCount == 0) {
	obj53369_onTap_actionGroup1();
}
}





















};
obj53369_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj53369_onTap_activeActionGroupIndex = -1;
		$("#obj53369").trigger("obj53369_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53369) {
				console.warn("de-queueing event obj53369." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53369").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53369_onTap_activeActionGroupIndex = 1;
	





















};
obj53151_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53151_onTouchDown_activeActionGroupIndex = -1;
		$("#obj53151").trigger("obj53151_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53151) {
				console.warn("de-queueing event obj53151." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53151").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53151_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj53151");
//	action: dragDrop
//	target: obj53151 
dragDrop_53154();
function dragDrop_53154() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj53151_onTouchDown_runningActionsCount = obj53151_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj53151');
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
	  	containerNode = $('#obj53361');
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
    	window.obj53151_onTouchDown_runningActionsCount = window.obj53151_onTouchDown_runningActionsCount - 1;
if (window.obj53151_onTouchDown_runningActionsCount < 0) {
	window.obj53151_onTouchDown_runningActionsCount = 0;
} else if (window.obj53151_onTouchDown_runningActionsCount == 0) {
	obj53151_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj53351","#obj53347");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_53154 = false;
    	var dropped_id_53154;
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
					dropped_53154 = true;
					dropped_id_53154 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_53154) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj53151").trigger('SCActionDragDrop53154_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj53151_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj53151_onTouchDown_activeActionGroupIndex = -1;
		$("#obj53151").trigger("obj53151_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53151) {
				console.warn("de-queueing event obj53151." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53151").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53151_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj53151_SCActionDragDrop53154_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53151_SCActionDragDrop53154_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj53151").trigger("obj53151_SCActionDragDrop53154_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53151) {
				console.warn("de-queueing event obj53151." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53151").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53151_SCActionDragDrop53154_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj53151 
move_92795();
function move_92795() {
	window.obj53151_SCActionDragDrop53154_droppedOutsideTargetActions_runningActionsCount = obj53151_SCActionDragDrop53154_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj53151");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 100;
	var moveY = 588;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj53151_SCActionDragDrop53154_droppedOutsideTargetActions_runningActionsCount = window.obj53151_SCActionDragDrop53154_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj53151_SCActionDragDrop53154_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj53151_SCActionDragDrop53154_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj53151_SCActionDragDrop53154_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj53151_SCActionDragDrop53154_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj53151_SCActionDragDrop53154_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj53151_SCActionDragDrop53154_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj53151").trigger("obj53151_SCActionDragDrop53154_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53151) {
				console.warn("de-queueing event obj53151." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53151").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53151_SCActionDragDrop53154_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj53151_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53151_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj53151").trigger("obj53151_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53151) {
				console.warn("de-queueing event obj53151." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53151").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53151_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_53163();
function runjs_53163() {
	window.obj53151_droppedInsideTargetActions_2_runningActionsCount = obj53151_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj53347").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj53151_droppedInsideTargetActions_2_runningActionsCount = window.obj53151_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj53151_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj53151_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj53151_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj53151_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj53151_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53151_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj53151").trigger("obj53151_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53151) {
				console.warn("de-queueing event obj53151." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53151").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53151_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_53164();
function runjs_53164() {
	window.obj53151_droppedInsideTargetActions_2_runningActionsCount = obj53151_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj53347").css("border-color", "#C00000"); $("#obj53347").css("border-width", "2px"); $("#obj53347").css("border-style", "solid"); $("#obj53347").css("border-radius", "10px"); $("#obj53347").css("-webkit-border-radius", "10px"); $("#obj53347").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj53151_droppedInsideTargetActions_2_runningActionsCount = window.obj53151_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj53151_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj53151_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj53151_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj53151_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj53151_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53151_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj53151").trigger("obj53151_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53151) {
				console.warn("de-queueing event obj53151." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53151").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53151_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj53315 
hide_53165();
function hide_53165() {
	var selector = "#obj53315";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj53151_droppedInsideTargetActions_2_runningActionsCount = obj53151_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj53151_droppedInsideTargetActions_2_runningActionsCount = window.obj53151_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj53151_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj53151_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj53151_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj53151_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_53165(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj53151_droppedInsideTargetActions_2_runningActionsCount = window.obj53151_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj53151_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj53151_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj53151_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj53151_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj53151_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53151_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj53151").trigger("obj53151_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53151) {
				console.warn("de-queueing event obj53151." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53151").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53151_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_53166();
function runjs_53166() {
	window.obj53151_droppedInsideTargetActions_2_runningActionsCount = obj53151_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj53151").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj53151_droppedInsideTargetActions_2_runningActionsCount = window.obj53151_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj53151_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj53151_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj53151_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj53151_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj53151_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53151_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj53151").trigger("obj53151_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53151) {
				console.warn("de-queueing event obj53151." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53151").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53151_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_53167();
function switchText_53167() {
	window.obj53151_droppedInsideTargetActions_2_runningActionsCount = obj53151_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj53335_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj53335_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj53335").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj53335_content");
			setTimeout(function () {
				window.obj53151_droppedInsideTargetActions_2_runningActionsCount = window.obj53151_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj53151_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj53151_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj53151_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj53151_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj53335 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj53151_droppedInsideTargetActions_2_runningActionsCount = window.obj53151_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj53151_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj53151_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj53151_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj53151_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj53151_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53151_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj53151").trigger("obj53151_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53151) {
				console.warn("de-queueing event obj53151." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53151").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53151_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj53151 
move_53168();
function move_53168() {
	window.obj53151_droppedInsideTargetActions_2_runningActionsCount = obj53151_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj53151");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 100;
	var moveY = 588;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj53151_droppedInsideTargetActions_2_runningActionsCount = window.obj53151_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj53151_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj53151_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj53151_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj53151_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj53151_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53151_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj53151").trigger("obj53151_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53151) {
				console.warn("de-queueing event obj53151." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53151").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53151_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_53169();
function runjs_53169() {
	window.obj53151_droppedInsideTargetActions_2_runningActionsCount = obj53151_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj53347").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj53151_droppedInsideTargetActions_2_runningActionsCount = window.obj53151_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj53151_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj53151_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj53151_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj53151_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj53151_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53151_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj53151").trigger("obj53151_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53151) {
				console.warn("de-queueing event obj53151." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53151").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53151_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_53170();
function runjs_53170() {
	window.obj53151_droppedInsideTargetActions_2_runningActionsCount = obj53151_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj53347").css("border-color", "#000000"); $("#obj53347").css("border-width", "1px"); $("#obj53347").css("border-style", "solid"); $("#obj53347").css("border-radius", "0px"); $("#obj53347").css("-webkit-border-radius", "0px"); $("#obj53347").css("-moz-border-radius", "0px");
	
	setTimeout(function() {
		window.obj53151_droppedInsideTargetActions_2_runningActionsCount = window.obj53151_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj53151_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj53151_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj53151_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj53151_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj53151_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53151_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj53151").trigger("obj53151_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53151) {
				console.warn("de-queueing event obj53151." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53151").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53151_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj53315
(function(){
	window.obj53151_droppedInsideTargetActions_2_runningActionsCount = obj53151_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj53315";
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
					window.obj53151_droppedInsideTargetActions_2_runningActionsCount = window.obj53151_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj53151_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj53151_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj53151_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj53151_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj53151_droppedInsideTargetActions_2_runningActionsCount = window.obj53151_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj53151_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj53151_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj53151_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj53151_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj53151_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53151_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj53151").trigger("obj53151_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53151) {
				console.warn("de-queueing event obj53151." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53151").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53151_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_53172();
function runjs_53172() {
	window.obj53151_droppedInsideTargetActions_2_runningActionsCount = obj53151_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj53151").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj53151_droppedInsideTargetActions_2_runningActionsCount = window.obj53151_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj53151_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj53151_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj53151_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj53151_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj53151_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53151_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj53151").trigger("obj53151_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53151) {
				console.warn("de-queueing event obj53151." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53151").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53151_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_53173();
function runjs_53173() {
	window.obj53151_droppedInsideTargetActions_2_runningActionsCount = obj53151_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj53151").css("border-color", "rgba(0,0,0,0)"); $("#obj53151").css("border-width", "0px"); $("#obj53151").css("border-style", "solid"); $("#obj53151").css("border-radius", "10px"); $("#obj53151").css("-webkit-border-radius", "10px"); $("#obj53151").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj53151_droppedInsideTargetActions_2_runningActionsCount = window.obj53151_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj53151_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj53151_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj53151_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj53151_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj53151_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53151_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj53151").trigger("obj53151_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53151) {
				console.warn("de-queueing event obj53151." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53151").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53151_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj53331 
playAudio_53174();
function playAudio_53174() {
	window.obj53151_droppedInsideTargetActions_2_runningActionsCount = obj53151_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj53331")[0];
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
		    window.obj53151_droppedInsideTargetActions_2_runningActionsCount = window.obj53151_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj53151_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj53151_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj53151_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj53151_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj53151_droppedInsideTargetActions_2_runningActionsCount = window.obj53151_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj53151_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj53151_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj53151_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj53151_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj53151_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53151_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj53151").trigger("obj53151_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53151) {
				console.warn("de-queueing event obj53151." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53151").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53151_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_53175();
function switchText_53175() {
	window.obj53151_droppedInsideTargetActions_2_runningActionsCount = obj53151_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj53335_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj53335_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj53335").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj53335_content");
			setTimeout(function () {
				window.obj53151_droppedInsideTargetActions_2_runningActionsCount = window.obj53151_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj53151_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj53151_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj53151_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj53151_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj53335 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj53151_droppedInsideTargetActions_2_runningActionsCount = window.obj53151_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj53151_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj53151_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj53151_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj53151_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj53151_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj53151_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj53151").trigger("obj53151_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53151) {
				console.warn("de-queueing event obj53151." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53151").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53151_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj53151_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53151_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj53151").trigger("obj53151_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53151) {
				console.warn("de-queueing event obj53151." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53151").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53151_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_53156();
function runjs_53156() {
	window.obj53151_droppedInsideTargetActions_runningActionsCount = obj53151_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj53351").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj53151_droppedInsideTargetActions_runningActionsCount = window.obj53151_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj53151_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj53151_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj53151_droppedInsideTargetActions_runningActionsCount == 0) {
	obj53151_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj53151_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53151_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj53151").trigger("obj53151_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53151) {
				console.warn("de-queueing event obj53151." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53151").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53151_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_53157();
function runjs_53157() {
	window.obj53151_droppedInsideTargetActions_runningActionsCount = obj53151_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj53351").css("border-color", "#058E3F"); $("#obj53351").css("border-width", "2px"); $("#obj53351").css("border-style", "solid"); $("#obj53351").css("border-radius", "10px"); $("#obj53351").css("-webkit-border-radius", "10px"); $("#obj53351").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj53151_droppedInsideTargetActions_runningActionsCount = window.obj53151_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj53151_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj53151_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj53151_droppedInsideTargetActions_runningActionsCount == 0) {
	obj53151_droppedInsideTargetActions_actionGroup2();
}
	}, 1);
}







};
obj53151_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53151_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj53151").trigger("obj53151_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53151) {
				console.warn("de-queueing event obj53151." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53151").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53151_droppedInsideTargetActions_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj53317 
hide_53158();
function hide_53158() {
	var selector = "#obj53317";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj53151_droppedInsideTargetActions_runningActionsCount = obj53151_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj53151_droppedInsideTargetActions_runningActionsCount = window.obj53151_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj53151_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj53151_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj53151_droppedInsideTargetActions_runningActionsCount == 0) {
	obj53151_droppedInsideTargetActions_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_53158(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj53151_droppedInsideTargetActions_runningActionsCount = window.obj53151_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj53151_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj53151_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj53151_droppedInsideTargetActions_runningActionsCount == 0) {
	obj53151_droppedInsideTargetActions_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj53151_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53151_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj53151").trigger("obj53151_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53151) {
				console.warn("de-queueing event obj53151." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53151").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53151_droppedInsideTargetActions_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_53159();
function runjs_53159() {
	window.obj53151_droppedInsideTargetActions_runningActionsCount = obj53151_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj53151").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj53151_droppedInsideTargetActions_runningActionsCount = window.obj53151_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj53151_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj53151_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj53151_droppedInsideTargetActions_runningActionsCount == 0) {
	obj53151_droppedInsideTargetActions_actionGroup4();
}
	}, 1);
}







};
obj53151_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53151_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj53151").trigger("obj53151_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53151) {
				console.warn("de-queueing event obj53151." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53151").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53151_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_53160();
function switchText_53160() {
	window.obj53151_droppedInsideTargetActions_runningActionsCount = obj53151_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj53335_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj53335_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj53335").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj53335_content");
			setTimeout(function () {
				window.obj53151_droppedInsideTargetActions_runningActionsCount = window.obj53151_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj53151_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj53151_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj53151_droppedInsideTargetActions_runningActionsCount == 0) {
	obj53151_droppedInsideTargetActions_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj53335 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj53151_droppedInsideTargetActions_runningActionsCount = window.obj53151_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj53151_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj53151_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj53151_droppedInsideTargetActions_runningActionsCount == 0) {
	obj53151_droppedInsideTargetActions_actionGroup5();
}
		}, 1);
	}
}






};
obj53151_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53151_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj53151").trigger("obj53151_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53151) {
				console.warn("de-queueing event obj53151." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53151").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53151_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj53333 
playAudio_53161();
function playAudio_53161() {
	window.obj53151_droppedInsideTargetActions_runningActionsCount = obj53151_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj53333")[0];
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
		    window.obj53151_droppedInsideTargetActions_runningActionsCount = window.obj53151_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj53151_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj53151_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj53151_droppedInsideTargetActions_runningActionsCount == 0) {
	obj53151_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj53151_droppedInsideTargetActions_runningActionsCount = window.obj53151_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj53151_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj53151_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj53151_droppedInsideTargetActions_runningActionsCount == 0) {
	obj53151_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj53151_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj53151_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj53151").trigger("obj53151_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53151) {
				console.warn("de-queueing event obj53151." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53151").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53151_droppedInsideTargetActions_activeActionGroupIndex = 6;
	





















};
obj53070_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53070_onTouchDown_activeActionGroupIndex = -1;
		$("#obj53070").trigger("obj53070_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53070) {
				console.warn("de-queueing event obj53070." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53070").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53070_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj53070");
//	action: dragDrop
//	target: obj53070 
dragDrop_53073();
function dragDrop_53073() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj53070_onTouchDown_runningActionsCount = obj53070_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj53070');
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
	  	containerNode = $('#obj53361');
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
    	window.obj53070_onTouchDown_runningActionsCount = window.obj53070_onTouchDown_runningActionsCount - 1;
if (window.obj53070_onTouchDown_runningActionsCount < 0) {
	window.obj53070_onTouchDown_runningActionsCount = 0;
} else if (window.obj53070_onTouchDown_runningActionsCount == 0) {
	obj53070_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj53347","#obj53351");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_53073 = false;
    	var dropped_id_53073;
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
					dropped_53073 = true;
					dropped_id_53073 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_53073) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj53070").trigger('SCActionDragDrop53073_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj53070_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj53070_onTouchDown_activeActionGroupIndex = -1;
		$("#obj53070").trigger("obj53070_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53070) {
				console.warn("de-queueing event obj53070." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53070").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53070_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj53070_SCActionDragDrop53073_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53070_SCActionDragDrop53073_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj53070").trigger("obj53070_SCActionDragDrop53073_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53070) {
				console.warn("de-queueing event obj53070." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53070").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53070_SCActionDragDrop53073_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj53070 
move_92797();
function move_92797() {
	window.obj53070_SCActionDragDrop53073_droppedOutsideTargetActions_runningActionsCount = obj53070_SCActionDragDrop53073_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj53070");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 334;
	var moveY = 588;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj53070_SCActionDragDrop53073_droppedOutsideTargetActions_runningActionsCount = window.obj53070_SCActionDragDrop53073_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj53070_SCActionDragDrop53073_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj53070_SCActionDragDrop53073_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj53070_SCActionDragDrop53073_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj53070_SCActionDragDrop53073_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj53070_SCActionDragDrop53073_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj53070_SCActionDragDrop53073_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj53070").trigger("obj53070_SCActionDragDrop53073_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53070) {
				console.warn("de-queueing event obj53070." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53070").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53070_SCActionDragDrop53073_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj53070_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53070_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj53070").trigger("obj53070_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53070) {
				console.warn("de-queueing event obj53070." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53070").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53070_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_53082();
function runjs_53082() {
	window.obj53070_droppedInsideTargetActions_2_runningActionsCount = obj53070_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj53351").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj53070_droppedInsideTargetActions_2_runningActionsCount = window.obj53070_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj53070_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj53070_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj53070_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj53070_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj53070_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53070_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj53070").trigger("obj53070_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53070) {
				console.warn("de-queueing event obj53070." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53070").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53070_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_53083();
function runjs_53083() {
	window.obj53070_droppedInsideTargetActions_2_runningActionsCount = obj53070_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj53351").css("border-color", "#C00000"); $("#obj53351").css("border-width", "2px"); $("#obj53351").css("border-style", "solid"); $("#obj53351").css("border-radius", "10px"); $("#obj53351").css("-webkit-border-radius", "10px"); $("#obj53351").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj53070_droppedInsideTargetActions_2_runningActionsCount = window.obj53070_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj53070_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj53070_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj53070_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj53070_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj53070_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53070_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj53070").trigger("obj53070_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53070) {
				console.warn("de-queueing event obj53070." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53070").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53070_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj53317 
hide_53084();
function hide_53084() {
	var selector = "#obj53317";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj53070_droppedInsideTargetActions_2_runningActionsCount = obj53070_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj53070_droppedInsideTargetActions_2_runningActionsCount = window.obj53070_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj53070_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj53070_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj53070_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj53070_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_53084(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj53070_droppedInsideTargetActions_2_runningActionsCount = window.obj53070_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj53070_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj53070_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj53070_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj53070_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj53070_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53070_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj53070").trigger("obj53070_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53070) {
				console.warn("de-queueing event obj53070." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53070").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53070_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_53085();
function runjs_53085() {
	window.obj53070_droppedInsideTargetActions_2_runningActionsCount = obj53070_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj53070").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj53070_droppedInsideTargetActions_2_runningActionsCount = window.obj53070_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj53070_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj53070_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj53070_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj53070_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj53070_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53070_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj53070").trigger("obj53070_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53070) {
				console.warn("de-queueing event obj53070." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53070").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53070_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_53086();
function switchText_53086() {
	window.obj53070_droppedInsideTargetActions_2_runningActionsCount = obj53070_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj53335_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj53335_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj53335").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj53335_content");
			setTimeout(function () {
				window.obj53070_droppedInsideTargetActions_2_runningActionsCount = window.obj53070_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj53070_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj53070_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj53070_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj53070_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj53335 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj53070_droppedInsideTargetActions_2_runningActionsCount = window.obj53070_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj53070_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj53070_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj53070_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj53070_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj53070_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53070_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj53070").trigger("obj53070_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53070) {
				console.warn("de-queueing event obj53070." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53070").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53070_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj53070 
move_53087();
function move_53087() {
	window.obj53070_droppedInsideTargetActions_2_runningActionsCount = obj53070_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj53070");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 334;
	var moveY = 588;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj53070_droppedInsideTargetActions_2_runningActionsCount = window.obj53070_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj53070_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj53070_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj53070_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj53070_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj53070_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53070_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj53070").trigger("obj53070_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53070) {
				console.warn("de-queueing event obj53070." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53070").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53070_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_53088();
function runjs_53088() {
	window.obj53070_droppedInsideTargetActions_2_runningActionsCount = obj53070_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj53351").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj53070_droppedInsideTargetActions_2_runningActionsCount = window.obj53070_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj53070_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj53070_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj53070_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj53070_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj53070_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53070_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj53070").trigger("obj53070_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53070) {
				console.warn("de-queueing event obj53070." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53070").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53070_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_53089();
function runjs_53089() {
	window.obj53070_droppedInsideTargetActions_2_runningActionsCount = obj53070_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj53351").css("border-color", "#000000"); $("#obj53351").css("border-width", "1px"); $("#obj53351").css("border-style", "solid"); $("#obj53351").css("border-radius", "0px"); $("#obj53351").css("-webkit-border-radius", "0px"); $("#obj53351").css("-moz-border-radius", "0px");
	
	setTimeout(function() {
		window.obj53070_droppedInsideTargetActions_2_runningActionsCount = window.obj53070_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj53070_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj53070_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj53070_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj53070_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj53070_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53070_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj53070").trigger("obj53070_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53070) {
				console.warn("de-queueing event obj53070." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53070").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53070_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj53317
(function(){
	window.obj53070_droppedInsideTargetActions_2_runningActionsCount = obj53070_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj53317";
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
					window.obj53070_droppedInsideTargetActions_2_runningActionsCount = window.obj53070_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj53070_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj53070_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj53070_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj53070_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj53070_droppedInsideTargetActions_2_runningActionsCount = window.obj53070_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj53070_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj53070_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj53070_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj53070_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj53070_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53070_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj53070").trigger("obj53070_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53070) {
				console.warn("de-queueing event obj53070." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53070").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53070_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_53091();
function runjs_53091() {
	window.obj53070_droppedInsideTargetActions_2_runningActionsCount = obj53070_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj53070").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj53070_droppedInsideTargetActions_2_runningActionsCount = window.obj53070_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj53070_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj53070_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj53070_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj53070_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj53070_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53070_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj53070").trigger("obj53070_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53070) {
				console.warn("de-queueing event obj53070." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53070").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53070_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_53092();
function runjs_53092() {
	window.obj53070_droppedInsideTargetActions_2_runningActionsCount = obj53070_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj53070").css("border-color", "rgba(0,0,0,0)"); $("#obj53070").css("border-width", "0px"); $("#obj53070").css("border-style", "solid"); $("#obj53070").css("border-radius", "10px"); $("#obj53070").css("-webkit-border-radius", "10px"); $("#obj53070").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj53070_droppedInsideTargetActions_2_runningActionsCount = window.obj53070_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj53070_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj53070_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj53070_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj53070_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj53070_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53070_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj53070").trigger("obj53070_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53070) {
				console.warn("de-queueing event obj53070." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53070").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53070_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj53331 
playAudio_53093();
function playAudio_53093() {
	window.obj53070_droppedInsideTargetActions_2_runningActionsCount = obj53070_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj53331")[0];
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
		    window.obj53070_droppedInsideTargetActions_2_runningActionsCount = window.obj53070_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj53070_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj53070_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj53070_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj53070_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj53070_droppedInsideTargetActions_2_runningActionsCount = window.obj53070_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj53070_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj53070_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj53070_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj53070_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj53070_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53070_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj53070").trigger("obj53070_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53070) {
				console.warn("de-queueing event obj53070." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53070").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53070_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_53094();
function switchText_53094() {
	window.obj53070_droppedInsideTargetActions_2_runningActionsCount = obj53070_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj53335_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj53335_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj53335").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj53335_content");
			setTimeout(function () {
				window.obj53070_droppedInsideTargetActions_2_runningActionsCount = window.obj53070_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj53070_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj53070_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj53070_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj53070_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj53335 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj53070_droppedInsideTargetActions_2_runningActionsCount = window.obj53070_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj53070_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj53070_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj53070_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj53070_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj53070_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj53070_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj53070").trigger("obj53070_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53070) {
				console.warn("de-queueing event obj53070." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53070").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53070_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj53070_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53070_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj53070").trigger("obj53070_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53070) {
				console.warn("de-queueing event obj53070." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53070").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53070_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_53075();
function runjs_53075() {
	window.obj53070_droppedInsideTargetActions_runningActionsCount = obj53070_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj53347").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj53070_droppedInsideTargetActions_runningActionsCount = window.obj53070_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj53070_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj53070_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj53070_droppedInsideTargetActions_runningActionsCount == 0) {
	obj53070_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj53070_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53070_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj53070").trigger("obj53070_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53070) {
				console.warn("de-queueing event obj53070." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53070").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53070_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_53076();
function runjs_53076() {
	window.obj53070_droppedInsideTargetActions_runningActionsCount = obj53070_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj53347").css("border-color", "#058E3F"); $("#obj53347").css("border-width", "2px"); $("#obj53347").css("border-style", "solid"); $("#obj53347").css("border-radius", "10px"); $("#obj53347").css("-webkit-border-radius", "10px"); $("#obj53347").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj53070_droppedInsideTargetActions_runningActionsCount = window.obj53070_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj53070_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj53070_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj53070_droppedInsideTargetActions_runningActionsCount == 0) {
	obj53070_droppedInsideTargetActions_actionGroup2();
}
	}, 1);
}







};
obj53070_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53070_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj53070").trigger("obj53070_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53070) {
				console.warn("de-queueing event obj53070." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53070").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53070_droppedInsideTargetActions_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj53315 
hide_53077();
function hide_53077() {
	var selector = "#obj53315";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj53070_droppedInsideTargetActions_runningActionsCount = obj53070_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj53070_droppedInsideTargetActions_runningActionsCount = window.obj53070_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj53070_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj53070_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj53070_droppedInsideTargetActions_runningActionsCount == 0) {
	obj53070_droppedInsideTargetActions_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_53077(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj53070_droppedInsideTargetActions_runningActionsCount = window.obj53070_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj53070_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj53070_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj53070_droppedInsideTargetActions_runningActionsCount == 0) {
	obj53070_droppedInsideTargetActions_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj53070_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53070_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj53070").trigger("obj53070_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53070) {
				console.warn("de-queueing event obj53070." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53070").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53070_droppedInsideTargetActions_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_53078();
function runjs_53078() {
	window.obj53070_droppedInsideTargetActions_runningActionsCount = obj53070_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj53070").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj53070_droppedInsideTargetActions_runningActionsCount = window.obj53070_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj53070_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj53070_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj53070_droppedInsideTargetActions_runningActionsCount == 0) {
	obj53070_droppedInsideTargetActions_actionGroup4();
}
	}, 1);
}







};
obj53070_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53070_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj53070").trigger("obj53070_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53070) {
				console.warn("de-queueing event obj53070." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53070").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53070_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_53079();
function switchText_53079() {
	window.obj53070_droppedInsideTargetActions_runningActionsCount = obj53070_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj53335_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj53335_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj53335").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj53335_content");
			setTimeout(function () {
				window.obj53070_droppedInsideTargetActions_runningActionsCount = window.obj53070_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj53070_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj53070_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj53070_droppedInsideTargetActions_runningActionsCount == 0) {
	obj53070_droppedInsideTargetActions_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj53335 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj53070_droppedInsideTargetActions_runningActionsCount = window.obj53070_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj53070_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj53070_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj53070_droppedInsideTargetActions_runningActionsCount == 0) {
	obj53070_droppedInsideTargetActions_actionGroup5();
}
		}, 1);
	}
}






};
obj53070_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj53070_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj53070").trigger("obj53070_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53070) {
				console.warn("de-queueing event obj53070." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53070").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53070_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj53333 
playAudio_53080();
function playAudio_53080() {
	window.obj53070_droppedInsideTargetActions_runningActionsCount = obj53070_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj53333")[0];
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
		    window.obj53070_droppedInsideTargetActions_runningActionsCount = window.obj53070_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj53070_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj53070_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj53070_droppedInsideTargetActions_runningActionsCount == 0) {
	obj53070_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj53070_droppedInsideTargetActions_runningActionsCount = window.obj53070_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj53070_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj53070_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj53070_droppedInsideTargetActions_runningActionsCount == 0) {
	obj53070_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj53070_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj53070_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj53070").trigger("obj53070_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 53070) {
				console.warn("de-queueing event obj53070." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj53070").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj53070_droppedInsideTargetActions_activeActionGroupIndex = 6;
	





















};
obj68030_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68030_onTap_activeActionGroupIndex = -1;
		$("#obj68030").trigger("obj68030_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68030) {
				console.warn("de-queueing event obj68030." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68030").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68030_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj68030 
hide_68033();
function hide_68033() {
	var selector = "#obj68030";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj68030_onTap_runningActionsCount = obj68030_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj68030_onTap_runningActionsCount = window.obj68030_onTap_runningActionsCount - 1;
if (window.obj68030_onTap_runningActionsCount < 0) {
	window.obj68030_onTap_runningActionsCount = 0;
} else if (window.obj68030_onTap_runningActionsCount == 0) {
	obj68030_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_68033(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj68030_onTap_runningActionsCount = window.obj68030_onTap_runningActionsCount - 1;
if (window.obj68030_onTap_runningActionsCount < 0) {
	window.obj68030_onTap_runningActionsCount = 0;
} else if (window.obj68030_onTap_runningActionsCount == 0) {
	obj68030_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj68036 
stopMovie_68032();
function stopMovie_68032() {
	window.obj68030_onTap_runningActionsCount = obj68030_onTap_runningActionsCount + 1;
	var myVideo = $("#obj68036")[0];
	myVideo.pause();
	window.obj68030_onTap_runningActionsCount = window.obj68030_onTap_runningActionsCount - 1;
if (window.obj68030_onTap_runningActionsCount < 0) {
	window.obj68030_onTap_runningActionsCount = 0;
} else if (window.obj68030_onTap_runningActionsCount == 0) {
	obj68030_onTap_actionGroup1();
}
}
















};
obj68030_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68030_onTap_activeActionGroupIndex = -1;
		$("#obj68030").trigger("obj68030_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68030) {
				console.warn("de-queueing event obj68030." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68030").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68030_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj68022
(function(){
	window.obj68030_onTap_runningActionsCount = obj68030_onTap_runningActionsCount + 1;

	var selector = "#obj68022";
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
					window.obj68030_onTap_runningActionsCount = window.obj68030_onTap_runningActionsCount - 1;
if (window.obj68030_onTap_runningActionsCount < 0) {
	window.obj68030_onTap_runningActionsCount = 0;
} else if (window.obj68030_onTap_runningActionsCount == 0) {
	obj68030_onTap_actionGroup2();
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
				window.obj68030_onTap_runningActionsCount = window.obj68030_onTap_runningActionsCount - 1;
if (window.obj68030_onTap_runningActionsCount < 0) {
	window.obj68030_onTap_runningActionsCount = 0;
} else if (window.obj68030_onTap_runningActionsCount == 0) {
	obj68030_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj68030_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68030_onTap_activeActionGroupIndex = -1;
		$("#obj68030").trigger("obj68030_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68030) {
				console.warn("de-queueing event obj68030." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68030").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68030_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj68036 
move_68035();
function move_68035() {
	window.obj68030_onTap_runningActionsCount = obj68030_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj68036");
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
			window.obj68030_onTap_runningActionsCount = window.obj68030_onTap_runningActionsCount - 1;
if (window.obj68030_onTap_runningActionsCount < 0) {
	window.obj68030_onTap_runningActionsCount = 0;
} else if (window.obj68030_onTap_runningActionsCount == 0) {
	obj68030_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj68030_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj68030_onTap_activeActionGroupIndex = -1;
		$("#obj68030").trigger("obj68030_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68030) {
				console.warn("de-queueing event obj68030." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68030").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68030_onTap_activeActionGroupIndex = 3;
	





















};
obj68022_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68022_onTap_activeActionGroupIndex = -1;
		$("#obj68022").trigger("obj68022_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68022) {
				console.warn("de-queueing event obj68022." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68022").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68022_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj68022 
hide_68025();
function hide_68025() {
	var selector = "#obj68022";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj68022_onTap_runningActionsCount = obj68022_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj68022_onTap_runningActionsCount = window.obj68022_onTap_runningActionsCount - 1;
if (window.obj68022_onTap_runningActionsCount < 0) {
	window.obj68022_onTap_runningActionsCount = 0;
} else if (window.obj68022_onTap_runningActionsCount == 0) {
	obj68022_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_68025(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj68022_onTap_runningActionsCount = window.obj68022_onTap_runningActionsCount - 1;
if (window.obj68022_onTap_runningActionsCount < 0) {
	window.obj68022_onTap_runningActionsCount = 0;
} else if (window.obj68022_onTap_runningActionsCount == 0) {
	obj68022_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj68036 
playPauseMovie_68024();
function playPauseMovie_68024() {
	window.obj68022_onTap_runningActionsCount = obj68022_onTap_runningActionsCount + 1;
	var myVideo = $("#obj68036")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj68022_onTap_runningActionsCount = window.obj68022_onTap_runningActionsCount - 1;
if (window.obj68022_onTap_runningActionsCount < 0) {
	window.obj68022_onTap_runningActionsCount = 0;
} else if (window.obj68022_onTap_runningActionsCount == 0) {
	obj68022_onTap_actionGroup1();
}
}

















};
obj68022_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68022_onTap_activeActionGroupIndex = -1;
		$("#obj68022").trigger("obj68022_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68022) {
				console.warn("de-queueing event obj68022." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68022").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68022_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj68030
(function(){
	window.obj68022_onTap_runningActionsCount = obj68022_onTap_runningActionsCount + 1;

	var selector = "#obj68030";
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
					window.obj68022_onTap_runningActionsCount = window.obj68022_onTap_runningActionsCount - 1;
if (window.obj68022_onTap_runningActionsCount < 0) {
	window.obj68022_onTap_runningActionsCount = 0;
} else if (window.obj68022_onTap_runningActionsCount == 0) {
	obj68022_onTap_actionGroup2();
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
				window.obj68022_onTap_runningActionsCount = window.obj68022_onTap_runningActionsCount - 1;
if (window.obj68022_onTap_runningActionsCount < 0) {
	window.obj68022_onTap_runningActionsCount = 0;
} else if (window.obj68022_onTap_runningActionsCount == 0) {
	obj68022_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj68022_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68022_onTap_activeActionGroupIndex = -1;
		$("#obj68022").trigger("obj68022_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68022) {
				console.warn("de-queueing event obj68022." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68022").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68022_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj68036 
move_68027();
function move_68027() {
	window.obj68022_onTap_runningActionsCount = obj68022_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj68036");
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
			window.obj68022_onTap_runningActionsCount = window.obj68022_onTap_runningActionsCount - 1;
if (window.obj68022_onTap_runningActionsCount < 0) {
	window.obj68022_onTap_runningActionsCount = 0;
} else if (window.obj68022_onTap_runningActionsCount == 0) {
	obj68022_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj68022_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj68022_onTap_activeActionGroupIndex = -1;
		$("#obj68022").trigger("obj68022_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68022) {
				console.warn("de-queueing event obj68022." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68022").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68022_onTap_activeActionGroupIndex = 3;
	





















};
obj89137_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89137_onTap_activeActionGroupIndex = -1;
		$("#obj89137").trigger("obj89137_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89137) {
				console.warn("de-queueing event obj89137." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89137").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89137_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj89142 
stopAudio_89139();
function stopAudio_89139() {
	window.obj89137_onTap_runningActionsCount = obj89137_onTap_runningActionsCount + 1;
	var myAudio = $("#obj89142")[0];
	myAudio.pause();
	window.obj89137_onTap_runningActionsCount = window.obj89137_onTap_runningActionsCount - 1;
if (window.obj89137_onTap_runningActionsCount < 0) {
	window.obj89137_onTap_runningActionsCount = 0;
} else if (window.obj89137_onTap_runningActionsCount == 0) {
	obj89137_onTap_actionGroup1();
}
}








};
obj89137_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89137_onTap_activeActionGroupIndex = -1;
		$("#obj89137").trigger("obj89137_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89137) {
				console.warn("de-queueing event obj89137." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89137").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89137_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj89137 
hide_89140();
function hide_89140() {
	var selector = "#obj89137";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj89137_onTap_runningActionsCount = obj89137_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj89137_onTap_runningActionsCount = window.obj89137_onTap_runningActionsCount - 1;
if (window.obj89137_onTap_runningActionsCount < 0) {
	window.obj89137_onTap_runningActionsCount = 0;
} else if (window.obj89137_onTap_runningActionsCount == 0) {
	obj89137_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_89140(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj89137_onTap_runningActionsCount = window.obj89137_onTap_runningActionsCount - 1;
if (window.obj89137_onTap_runningActionsCount < 0) {
	window.obj89137_onTap_runningActionsCount = 0;
} else if (window.obj89137_onTap_runningActionsCount == 0) {
	obj89137_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj89137_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89137_onTap_activeActionGroupIndex = -1;
		$("#obj89137").trigger("obj89137_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89137) {
				console.warn("de-queueing event obj89137." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89137").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89137_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj89132
(function(){
	window.obj89137_onTap_runningActionsCount = obj89137_onTap_runningActionsCount + 1;

	var selector = "#obj89132";
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
					window.obj89137_onTap_runningActionsCount = window.obj89137_onTap_runningActionsCount - 1;
if (window.obj89137_onTap_runningActionsCount < 0) {
	window.obj89137_onTap_runningActionsCount = 0;
} else if (window.obj89137_onTap_runningActionsCount == 0) {
	obj89137_onTap_actionGroup3();
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
				window.obj89137_onTap_runningActionsCount = window.obj89137_onTap_runningActionsCount - 1;
if (window.obj89137_onTap_runningActionsCount < 0) {
	window.obj89137_onTap_runningActionsCount = 0;
} else if (window.obj89137_onTap_runningActionsCount == 0) {
	obj89137_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj89137_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj89137_onTap_activeActionGroupIndex = -1;
		$("#obj89137").trigger("obj89137_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89137) {
				console.warn("de-queueing event obj89137." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89137").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89137_onTap_activeActionGroupIndex = 3;
	





















};
obj89132_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89132_onTap_activeActionGroupIndex = -1;
		$("#obj89132").trigger("obj89132_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89132) {
				console.warn("de-queueing event obj89132." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89132").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89132_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj89132 
hide_89134();
function hide_89134() {
	var selector = "#obj89132";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj89132_onTap_runningActionsCount = obj89132_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj89132_onTap_runningActionsCount = window.obj89132_onTap_runningActionsCount - 1;
if (window.obj89132_onTap_runningActionsCount < 0) {
	window.obj89132_onTap_runningActionsCount = 0;
} else if (window.obj89132_onTap_runningActionsCount == 0) {
	obj89132_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_89134(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj89132_onTap_runningActionsCount = window.obj89132_onTap_runningActionsCount - 1;
if (window.obj89132_onTap_runningActionsCount < 0) {
	window.obj89132_onTap_runningActionsCount = 0;
} else if (window.obj89132_onTap_runningActionsCount == 0) {
	obj89132_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj89132_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89132_onTap_activeActionGroupIndex = -1;
		$("#obj89132").trigger("obj89132_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89132) {
				console.warn("de-queueing event obj89132." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89132").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89132_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj89137
(function(){
	window.obj89132_onTap_runningActionsCount = obj89132_onTap_runningActionsCount + 1;

	var selector = "#obj89137";
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
					window.obj89132_onTap_runningActionsCount = window.obj89132_onTap_runningActionsCount - 1;
if (window.obj89132_onTap_runningActionsCount < 0) {
	window.obj89132_onTap_runningActionsCount = 0;
} else if (window.obj89132_onTap_runningActionsCount == 0) {
	obj89132_onTap_actionGroup2();
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
				window.obj89132_onTap_runningActionsCount = window.obj89132_onTap_runningActionsCount - 1;
if (window.obj89132_onTap_runningActionsCount < 0) {
	window.obj89132_onTap_runningActionsCount = 0;
} else if (window.obj89132_onTap_runningActionsCount == 0) {
	obj89132_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj89132_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89132_onTap_activeActionGroupIndex = -1;
		$("#obj89132").trigger("obj89132_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89132) {
				console.warn("de-queueing event obj89132." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89132").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89132_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj89142 
playAudio_89136();
function playAudio_89136() {
	window.obj89132_onTap_runningActionsCount = obj89132_onTap_runningActionsCount + 1;
	var myAudio = $("#obj89142")[0];
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
		    window.obj89132_onTap_runningActionsCount = window.obj89132_onTap_runningActionsCount - 1;
if (window.obj89132_onTap_runningActionsCount < 0) {
	window.obj89132_onTap_runningActionsCount = 0;
} else if (window.obj89132_onTap_runningActionsCount == 0) {
	obj89132_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj89132_onTap_runningActionsCount = window.obj89132_onTap_runningActionsCount - 1;
if (window.obj89132_onTap_runningActionsCount < 0) {
	window.obj89132_onTap_runningActionsCount = 0;
} else if (window.obj89132_onTap_runningActionsCount == 0) {
	obj89132_onTap_actionGroup3();
}
	}
}









};
obj89132_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj89132_onTap_activeActionGroupIndex = -1;
		$("#obj89132").trigger("obj89132_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89132) {
				console.warn("de-queueing event obj89132." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89132").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89132_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj53376: Event Touch Down
 *
 */
$("#obj53376").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj53376_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj53376_onTap is still running");
	return;
}
var obj53376_onTap_runningActionsCount = 0;
var obj53376_onTap_loopCount = 0;
obj53376_onTap_actionGroup0();
});










/*
 *
 *   obj53373: Event Touch Down
 *
 */
$("#obj53373").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj53373_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj53373_onTap is still running");
	return;
}
var obj53373_onTap_runningActionsCount = 0;
var obj53373_onTap_loopCount = 0;
obj53373_onTap_actionGroup0();
});










/*
 *
 *   obj53369: Event Touch Down
 *
 */
$("#obj53369").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj53369_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj53369_onTap is still running");
	return;
}
var obj53369_onTap_runningActionsCount = 0;
var obj53369_onTap_loopCount = 0;
obj53369_onTap_actionGroup0();
});

















































































































































































































































/*
 *
 *   obj53151: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj53151");
	var winTarget = document.getElementById("obj53151");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj53151").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj53151_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj53151_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj53151_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj53151_onTouchDown is still running");
	return;
}
var obj53151_onTouchDown_runningActionsCount = 0;
var obj53151_onTouchDown_loopCount = 0;
obj53151_onTouchDown_actionGroup0();
});



/*
 *
 *   obj53151: Event SCActionDragDrop53154_droppedOutsideTargetActions
 *
 */
$("#obj53151").bind("SCActionDragDrop53154_droppedOutsideTargetActions", function(event) {
	if (window.obj53151_SCActionDragDrop53154_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj53151_SCActionDragDrop53154_droppedOutsideTargetActions is still running");
	return;
}
var obj53151_SCActionDragDrop53154_droppedOutsideTargetActions_runningActionsCount = 0;
var obj53151_SCActionDragDrop53154_droppedOutsideTargetActions_loopCount = 0;
obj53151_SCActionDragDrop53154_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj53151: Event droppedInsideTargetActions_2
 *
 */
$("#obj53151").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj53151_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj53151_droppedInsideTargetActions_2 is still running");
	return;
}
var obj53151_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj53151_droppedInsideTargetActions_2_loopCount = 0;
obj53151_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj53151: Event droppedInsideTargetActions
 *
 */
$("#obj53151").bind("droppedInsideTargetActions", function(event) {
	if (window.obj53151_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj53151_droppedInsideTargetActions is still running");
	return;
}
var obj53151_droppedInsideTargetActions_runningActionsCount = 0;
var obj53151_droppedInsideTargetActions_loopCount = 0;
obj53151_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj53070: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj53070");
	var winTarget = document.getElementById("obj53070");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj53070").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj53070_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj53070_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj53070_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj53070_onTouchDown is still running");
	return;
}
var obj53070_onTouchDown_runningActionsCount = 0;
var obj53070_onTouchDown_loopCount = 0;
obj53070_onTouchDown_actionGroup0();
});



/*
 *
 *   obj53070: Event SCActionDragDrop53073_droppedOutsideTargetActions
 *
 */
$("#obj53070").bind("SCActionDragDrop53073_droppedOutsideTargetActions", function(event) {
	if (window.obj53070_SCActionDragDrop53073_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj53070_SCActionDragDrop53073_droppedOutsideTargetActions is still running");
	return;
}
var obj53070_SCActionDragDrop53073_droppedOutsideTargetActions_runningActionsCount = 0;
var obj53070_SCActionDragDrop53073_droppedOutsideTargetActions_loopCount = 0;
obj53070_SCActionDragDrop53073_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj53070: Event droppedInsideTargetActions_2
 *
 */
$("#obj53070").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj53070_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj53070_droppedInsideTargetActions_2 is still running");
	return;
}
var obj53070_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj53070_droppedInsideTargetActions_2_loopCount = 0;
obj53070_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj53070: Event droppedInsideTargetActions
 *
 */
$("#obj53070").bind("droppedInsideTargetActions", function(event) {
	if (window.obj53070_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj53070_droppedInsideTargetActions is still running");
	return;
}
var obj53070_droppedInsideTargetActions_runningActionsCount = 0;
var obj53070_droppedInsideTargetActions_loopCount = 0;
obj53070_droppedInsideTargetActions_actionGroup0();
});





/*
 *
 *   obj68030: Event Touch Down
 *
 */
$("#obj68030").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj68030_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj68030_onTap is still running");
	return;
}
var obj68030_onTap_runningActionsCount = 0;
var obj68030_onTap_loopCount = 0;
obj68030_onTap_actionGroup0();
});










/*
 *
 *   obj68022: Event Touch Down
 *
 */
$("#obj68022").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj68022_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj68022_onTap is still running");
	return;
}
var obj68022_onTap_runningActionsCount = 0;
var obj68022_onTap_loopCount = 0;
obj68022_onTap_actionGroup0();
});










/*
 *
 *   obj89137: Event Touch Down
 *
 */
$("#obj89137").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj89137_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj89137_onTap is still running");
	return;
}
var obj89137_onTap_runningActionsCount = 0;
var obj89137_onTap_loopCount = 0;
obj89137_onTap_actionGroup0();
});










/*
 *
 *   obj89132: Event Touch Down
 *
 */
$("#obj89132").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj89132_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj89132_onTap is still running");
	return;
}
var obj89132_onTap_runningActionsCount = 0;
var obj89132_onTap_loopCount = 0;
obj89132_onTap_actionGroup0();
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
	
$("#obj53392").trigger('SCEventShow');
$("#obj53376").trigger('SCEventShow');
$("#obj53373").trigger('SCEventShow');
$("#obj53369").trigger('SCEventShow');
$("#obj53367").trigger('SCEventShow');
$("#obj53365").trigger('SCEventShow');
$("#obj53363").trigger('SCEventShow');
$("#obj53361").trigger('SCEventShow');
$("#obj53359").trigger('SCEventShow');
$("#obj53357").trigger('SCEventShow');
$("#obj53355").trigger('SCEventShow');
$("#obj53353").trigger('SCEventShow');
$("#obj53351").trigger('SCEventShow');
$("#obj53349").trigger('SCEventShow');
$("#obj53347").trigger('SCEventShow');
$("#obj53341").trigger('SCEventShow');
$("#obj53339").trigger('SCEventShow');
$("#obj53337").trigger('SCEventShow');
$("#obj53335").trigger('SCEventShow');
$("#obj53333").trigger('SCEventShow');
$("#obj53331").trigger('SCEventShow');
$("#obj53327").trigger('SCEventShow');
$("#obj53325").trigger('SCEventShow');
$("#obj53323").trigger('SCEventShow');
$("#obj53321").trigger('SCEventShow');
$("#obj53317").trigger('SCEventShow');
$("#obj53315").trigger('SCEventShow');
$("#obj53151").trigger('SCEventShow');
$("#obj53070").trigger('SCEventShow');
$("#obj68030").trigger('SCEventShow');
$("#obj68022").trigger('SCEventShow');
$("#obj89137").trigger('SCEventShow');
$("#obj89132").trigger('SCEventShow');
$("#obj89142").trigger('SCEventShow');
$("#obj95005").trigger('SCEventShow');
$("#obj68036").trigger('SCEventShow');
	
});