pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 17977;
pubcoder.page.title = pubcoder.page.title || "71";
pubcoder.page.number = pubcoder.page.number || 71;
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
var obj75501_onTap_activeActionGroupIndex = -1;
var obj75501_onTap_runningActionsCount = 0;
var obj75501_onTap_loopCount = 0;
var obj75498_onTap_activeActionGroupIndex = -1;
var obj75498_onTap_runningActionsCount = 0;
var obj75498_onTap_loopCount = 0;
var obj75494_onTap_activeActionGroupIndex = -1;
var obj75494_onTap_runningActionsCount = 0;
var obj75494_onTap_loopCount = 0;
var obj75439_onDrag_activeActionGroupIndex = -1;
var obj75439_onDrag_runningActionsCount = 0;
var obj75439_onDrag_loopCount = 0;
var obj75439_onTouchDown_activeActionGroupIndex = -1;
var obj75439_onTouchDown_runningActionsCount = 0;
var obj75439_onTouchDown_loopCount = 0;
var obj75439_SCActionDragDrop75442_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj75439_SCActionDragDrop75442_droppedOutsideTargetActions_runningActionsCount = 0;
var obj75439_SCActionDragDrop75442_droppedOutsideTargetActions_loopCount = 0;
var obj75439_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj75439_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj75439_droppedInsideTargetActions_3_loopCount = 0;
var obj75439_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj75439_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj75439_droppedInsideTargetActions_2_loopCount = 0;
var obj75439_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj75439_droppedInsideTargetActions_runningActionsCount = 0;
var obj75439_droppedInsideTargetActions_loopCount = 0;
var obj75414_onDrag_activeActionGroupIndex = -1;
var obj75414_onDrag_runningActionsCount = 0;
var obj75414_onDrag_loopCount = 0;
var obj75414_onTouchDown_activeActionGroupIndex = -1;
var obj75414_onTouchDown_runningActionsCount = 0;
var obj75414_onTouchDown_loopCount = 0;
var obj75414_SCActionDragDrop75417_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj75414_SCActionDragDrop75417_droppedOutsideTargetActions_runningActionsCount = 0;
var obj75414_SCActionDragDrop75417_droppedOutsideTargetActions_loopCount = 0;
var obj75414_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj75414_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj75414_droppedInsideTargetActions_3_loopCount = 0;
var obj75414_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj75414_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj75414_droppedInsideTargetActions_2_loopCount = 0;
var obj75414_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj75414_droppedInsideTargetActions_runningActionsCount = 0;
var obj75414_droppedInsideTargetActions_loopCount = 0;
var obj75389_onDrag_activeActionGroupIndex = -1;
var obj75389_onDrag_runningActionsCount = 0;
var obj75389_onDrag_loopCount = 0;
var obj75389_onTouchDown_activeActionGroupIndex = -1;
var obj75389_onTouchDown_runningActionsCount = 0;
var obj75389_onTouchDown_loopCount = 0;
var obj75389_SCActionDragDrop75392_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj75389_SCActionDragDrop75392_droppedOutsideTargetActions_runningActionsCount = 0;
var obj75389_SCActionDragDrop75392_droppedOutsideTargetActions_loopCount = 0;
var obj75389_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj75389_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj75389_droppedInsideTargetActions_3_loopCount = 0;
var obj75389_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj75389_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj75389_droppedInsideTargetActions_2_loopCount = 0;
var obj75389_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj75389_droppedInsideTargetActions_runningActionsCount = 0;
var obj75389_droppedInsideTargetActions_loopCount = 0;
var obj75343_onDrag_activeActionGroupIndex = -1;
var obj75343_onDrag_runningActionsCount = 0;
var obj75343_onDrag_loopCount = 0;
var obj75343_onTouchDown_activeActionGroupIndex = -1;
var obj75343_onTouchDown_runningActionsCount = 0;
var obj75343_onTouchDown_loopCount = 0;
var obj75343_SCActionDragDrop75346_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj75343_SCActionDragDrop75346_droppedOutsideTargetActions_runningActionsCount = 0;
var obj75343_SCActionDragDrop75346_droppedOutsideTargetActions_loopCount = 0;
var obj75343_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj75343_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj75343_droppedInsideTargetActions_3_loopCount = 0;
var obj75343_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj75343_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj75343_droppedInsideTargetActions_2_loopCount = 0;
var obj75343_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj75343_droppedInsideTargetActions_runningActionsCount = 0;
var obj75343_droppedInsideTargetActions_loopCount = 0;
var obj75325_onTap_activeActionGroupIndex = -1;
var obj75325_onTap_runningActionsCount = 0;
var obj75325_onTap_loopCount = 0;
var obj75317_onTap_activeActionGroupIndex = -1;
var obj75317_onTap_runningActionsCount = 0;
var obj75317_onTap_loopCount = 0;
var obj87687_onTap_activeActionGroupIndex = -1;
var obj87687_onTap_runningActionsCount = 0;
var obj87687_onTap_loopCount = 0;
var obj87682_onTap_activeActionGroupIndex = -1;
var obj87682_onTap_runningActionsCount = 0;
var obj87682_onTap_loopCount = 0;
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
		
obj75501_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75501_onTap_activeActionGroupIndex = -1;
		$("#obj75501").trigger("obj75501_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75501) {
				console.warn("de-queueing event obj75501." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75501").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75501_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_75503();
function goToPage_75503() {
	window.obj75501_onTap_runningActionsCount = obj75501_onTap_runningActionsCount + 1;
	$("#anchor419")[0].click();
	window.obj75501_onTap_runningActionsCount = window.obj75501_onTap_runningActionsCount - 1;
if (window.obj75501_onTap_runningActionsCount < 0) {
	window.obj75501_onTap_runningActionsCount = 0;
} else if (window.obj75501_onTap_runningActionsCount == 0) {
	obj75501_onTap_actionGroup1();
}
}





















};
obj75501_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj75501_onTap_activeActionGroupIndex = -1;
		$("#obj75501").trigger("obj75501_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75501) {
				console.warn("de-queueing event obj75501." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75501").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75501_onTap_activeActionGroupIndex = 1;
	





















};
obj75498_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75498_onTap_activeActionGroupIndex = -1;
		$("#obj75498").trigger("obj75498_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75498) {
				console.warn("de-queueing event obj75498." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75498").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75498_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_75500();
function goToPage_75500() {
	window.obj75498_onTap_runningActionsCount = obj75498_onTap_runningActionsCount + 1;
	$("#anchor420")[0].click();
	window.obj75498_onTap_runningActionsCount = window.obj75498_onTap_runningActionsCount - 1;
if (window.obj75498_onTap_runningActionsCount < 0) {
	window.obj75498_onTap_runningActionsCount = 0;
} else if (window.obj75498_onTap_runningActionsCount == 0) {
	obj75498_onTap_actionGroup1();
}
}





















};
obj75498_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj75498_onTap_activeActionGroupIndex = -1;
		$("#obj75498").trigger("obj75498_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75498) {
				console.warn("de-queueing event obj75498." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75498").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75498_onTap_activeActionGroupIndex = 1;
	





















};
obj75494_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75494_onTap_activeActionGroupIndex = -1;
		$("#obj75494").trigger("obj75494_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75494) {
				console.warn("de-queueing event obj75494." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75494").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75494_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_75496();
function goToPage_75496() {
	window.obj75494_onTap_runningActionsCount = obj75494_onTap_runningActionsCount + 1;
	$("#anchor421")[0].click();
	window.obj75494_onTap_runningActionsCount = window.obj75494_onTap_runningActionsCount - 1;
if (window.obj75494_onTap_runningActionsCount < 0) {
	window.obj75494_onTap_runningActionsCount = 0;
} else if (window.obj75494_onTap_runningActionsCount == 0) {
	obj75494_onTap_actionGroup1();
}
}





















};
obj75494_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj75494_onTap_activeActionGroupIndex = -1;
		$("#obj75494").trigger("obj75494_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75494) {
				console.warn("de-queueing event obj75494." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75494").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75494_onTap_activeActionGroupIndex = 1;
	





















};
obj75439_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75439_onTouchDown_activeActionGroupIndex = -1;
		$("#obj75439").trigger("obj75439_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75439) {
				console.warn("de-queueing event obj75439." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75439").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75439_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj75439");
//	action: dragDrop
//	target: obj75439 
dragDrop_75442();
function dragDrop_75442() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj75439_onTouchDown_runningActionsCount = obj75439_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj75439');
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
	  	containerNode = $('#obj75484');
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
    	window.obj75439_onTouchDown_runningActionsCount = window.obj75439_onTouchDown_runningActionsCount - 1;
if (window.obj75439_onTouchDown_runningActionsCount < 0) {
	window.obj75439_onTouchDown_runningActionsCount = 0;
} else if (window.obj75439_onTouchDown_runningActionsCount == 0) {
	obj75439_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj75470","#obj75478","#obj75472");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_75442 = false;
    	var dropped_id_75442;
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
					dropped_75442 = true;
					dropped_id_75442 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_75442) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj75439").trigger('SCActionDragDrop75442_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj75439_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj75439_onTouchDown_activeActionGroupIndex = -1;
		$("#obj75439").trigger("obj75439_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75439) {
				console.warn("de-queueing event obj75439." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75439").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75439_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj75439_SCActionDragDrop75442_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75439_SCActionDragDrop75442_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj75439").trigger("obj75439_SCActionDragDrop75442_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75439) {
				console.warn("de-queueing event obj75439." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75439").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75439_SCActionDragDrop75442_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj75439 
move_92316();
function move_92316() {
	window.obj75439_SCActionDragDrop75442_droppedOutsideTargetActions_runningActionsCount = obj75439_SCActionDragDrop75442_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj75439");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 175;
	var moveY = 508;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj75439_SCActionDragDrop75442_droppedOutsideTargetActions_runningActionsCount = window.obj75439_SCActionDragDrop75442_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj75439_SCActionDragDrop75442_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj75439_SCActionDragDrop75442_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj75439_SCActionDragDrop75442_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj75439_SCActionDragDrop75442_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj75439_SCActionDragDrop75442_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj75439_SCActionDragDrop75442_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj75439").trigger("obj75439_SCActionDragDrop75442_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75439) {
				console.warn("de-queueing event obj75439." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75439").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75439_SCActionDragDrop75442_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj75439_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75439_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj75439").trigger("obj75439_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75439) {
				console.warn("de-queueing event obj75439." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75439").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75439_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_75458();
function runjs_75458() {
	window.obj75439_droppedInsideTargetActions_3_runningActionsCount = obj75439_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj75472").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj75439_droppedInsideTargetActions_3_runningActionsCount = window.obj75439_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj75439_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj75439_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj75439_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj75439_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj75439_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75439_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj75439").trigger("obj75439_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75439) {
				console.warn("de-queueing event obj75439." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75439").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75439_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_75462();
function switchText_75462() {
	window.obj75439_droppedInsideTargetActions_3_runningActionsCount = obj75439_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj75482_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj75482_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj75482").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj75482_content");
			setTimeout(function () {
				window.obj75439_droppedInsideTargetActions_3_runningActionsCount = window.obj75439_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj75439_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj75439_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj75439_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj75439_droppedInsideTargetActions_3_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj75482 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj75439_droppedInsideTargetActions_3_runningActionsCount = window.obj75439_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj75439_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj75439_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj75439_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj75439_droppedInsideTargetActions_3_actionGroup2();
}
		}, 1);
	}
}






};
obj75439_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75439_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj75439").trigger("obj75439_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75439) {
				console.warn("de-queueing event obj75439." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75439").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75439_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_75459();
function runjs_75459() {
	window.obj75439_droppedInsideTargetActions_3_runningActionsCount = obj75439_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj75472").css("border-color", "#058E3F"); $("#obj75472").css("border-width", "2px"); $("#obj75472").css("border-style", "solid"); $("#obj75472").css("border-radius", "10px"); $("#obj75472").css("-webkit-border-radius", "10px"); $("#obj75472").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj75439_droppedInsideTargetActions_3_runningActionsCount = window.obj75439_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj75439_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj75439_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj75439_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj75439_droppedInsideTargetActions_3_actionGroup3();
}
	}, 1);
}







};
obj75439_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75439_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj75439").trigger("obj75439_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75439) {
				console.warn("de-queueing event obj75439." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75439").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75439_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj75468 
hide_75460();
function hide_75460() {
	var selector = "#obj75468";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj75439_droppedInsideTargetActions_3_runningActionsCount = obj75439_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj75439_droppedInsideTargetActions_3_runningActionsCount = window.obj75439_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj75439_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj75439_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj75439_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj75439_droppedInsideTargetActions_3_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_75460(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj75439_droppedInsideTargetActions_3_runningActionsCount = window.obj75439_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj75439_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj75439_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj75439_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj75439_droppedInsideTargetActions_3_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj75439_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75439_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj75439").trigger("obj75439_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75439) {
				console.warn("de-queueing event obj75439." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75439").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75439_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_75461();
function runjs_75461() {
	window.obj75439_droppedInsideTargetActions_3_runningActionsCount = obj75439_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj75439").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj75439_droppedInsideTargetActions_3_runningActionsCount = window.obj75439_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj75439_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj75439_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj75439_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj75439_droppedInsideTargetActions_3_actionGroup5();
}
	}, 1);
}







};
obj75439_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75439_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj75439").trigger("obj75439_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75439) {
				console.warn("de-queueing event obj75439." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75439").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75439_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj75464 
playAudio_75463();
function playAudio_75463() {
	window.obj75439_droppedInsideTargetActions_3_runningActionsCount = obj75439_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj75464")[0];
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
		    window.obj75439_droppedInsideTargetActions_3_runningActionsCount = window.obj75439_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj75439_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj75439_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj75439_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj75439_droppedInsideTargetActions_3_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj75439_droppedInsideTargetActions_3_runningActionsCount = window.obj75439_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj75439_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj75439_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj75439_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj75439_droppedInsideTargetActions_3_actionGroup6();
}
	}
}









};
obj75439_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75439_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj75439").trigger("obj75439_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75439) {
				console.warn("de-queueing event obj75439." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75439").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75439_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90196();
function switchText_90196() {
	window.obj75439_droppedInsideTargetActions_3_runningActionsCount = obj75439_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj75482_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj75482_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj75482").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj75482_content");
			setTimeout(function () {
				window.obj75439_droppedInsideTargetActions_3_runningActionsCount = window.obj75439_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj75439_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj75439_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj75439_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj75439_droppedInsideTargetActions_3_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj75482 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj75439_droppedInsideTargetActions_3_runningActionsCount = window.obj75439_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj75439_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj75439_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj75439_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj75439_droppedInsideTargetActions_3_actionGroup7();
}
		}, 1);
	}
}






};
obj75439_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj75439_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj75439").trigger("obj75439_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75439) {
				console.warn("de-queueing event obj75439." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75439").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75439_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	





















};
obj75439_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75439_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj75439").trigger("obj75439_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75439) {
				console.warn("de-queueing event obj75439." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75439").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75439_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_75451();
function runjs_75451() {
	window.obj75439_droppedInsideTargetActions_2_runningActionsCount = obj75439_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj75478").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj75439_droppedInsideTargetActions_2_runningActionsCount = window.obj75439_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj75439_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj75439_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj75439_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj75439_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj75439_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75439_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj75439").trigger("obj75439_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75439) {
				console.warn("de-queueing event obj75439." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75439").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75439_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_75455();
function switchText_75455() {
	window.obj75439_droppedInsideTargetActions_2_runningActionsCount = obj75439_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj75482_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj75482_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj75482").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj75482_content");
			setTimeout(function () {
				window.obj75439_droppedInsideTargetActions_2_runningActionsCount = window.obj75439_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj75439_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj75439_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj75439_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj75439_droppedInsideTargetActions_2_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj75482 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj75439_droppedInsideTargetActions_2_runningActionsCount = window.obj75439_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj75439_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj75439_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj75439_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj75439_droppedInsideTargetActions_2_actionGroup2();
}
		}, 1);
	}
}






};
obj75439_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75439_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj75439").trigger("obj75439_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75439) {
				console.warn("de-queueing event obj75439." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75439").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75439_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_75452();
function runjs_75452() {
	window.obj75439_droppedInsideTargetActions_2_runningActionsCount = obj75439_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj75478").css("border-color", "#058E3F"); $("#obj75478").css("border-width", "2px"); $("#obj75478").css("border-style", "solid"); $("#obj75478").css("border-radius", "10px"); $("#obj75478").css("-webkit-border-radius", "10px"); $("#obj75478").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj75439_droppedInsideTargetActions_2_runningActionsCount = window.obj75439_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj75439_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj75439_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj75439_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj75439_droppedInsideTargetActions_2_actionGroup3();
}
	}, 1);
}







};
obj75439_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75439_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj75439").trigger("obj75439_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75439) {
				console.warn("de-queueing event obj75439." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75439").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75439_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj75476 
hide_75453();
function hide_75453() {
	var selector = "#obj75476";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj75439_droppedInsideTargetActions_2_runningActionsCount = obj75439_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj75439_droppedInsideTargetActions_2_runningActionsCount = window.obj75439_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj75439_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj75439_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj75439_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj75439_droppedInsideTargetActions_2_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_75453(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj75439_droppedInsideTargetActions_2_runningActionsCount = window.obj75439_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj75439_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj75439_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj75439_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj75439_droppedInsideTargetActions_2_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj75439_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75439_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj75439").trigger("obj75439_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75439) {
				console.warn("de-queueing event obj75439." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75439").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75439_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_75454();
function runjs_75454() {
	window.obj75439_droppedInsideTargetActions_2_runningActionsCount = obj75439_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj75439").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj75439_droppedInsideTargetActions_2_runningActionsCount = window.obj75439_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj75439_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj75439_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj75439_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj75439_droppedInsideTargetActions_2_actionGroup5();
}
	}, 1);
}







};
obj75439_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75439_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj75439").trigger("obj75439_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75439) {
				console.warn("de-queueing event obj75439." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75439").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75439_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj75464 
playAudio_75456();
function playAudio_75456() {
	window.obj75439_droppedInsideTargetActions_2_runningActionsCount = obj75439_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj75464")[0];
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
		    window.obj75439_droppedInsideTargetActions_2_runningActionsCount = window.obj75439_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj75439_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj75439_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj75439_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj75439_droppedInsideTargetActions_2_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj75439_droppedInsideTargetActions_2_runningActionsCount = window.obj75439_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj75439_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj75439_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj75439_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj75439_droppedInsideTargetActions_2_actionGroup6();
}
	}
}









};
obj75439_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75439_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj75439").trigger("obj75439_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75439) {
				console.warn("de-queueing event obj75439." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75439").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75439_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90195();
function switchText_90195() {
	window.obj75439_droppedInsideTargetActions_2_runningActionsCount = obj75439_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj75482_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj75482_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj75482").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj75482_content");
			setTimeout(function () {
				window.obj75439_droppedInsideTargetActions_2_runningActionsCount = window.obj75439_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj75439_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj75439_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj75439_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj75439_droppedInsideTargetActions_2_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj75482 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj75439_droppedInsideTargetActions_2_runningActionsCount = window.obj75439_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj75439_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj75439_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj75439_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj75439_droppedInsideTargetActions_2_actionGroup7();
}
		}, 1);
	}
}






};
obj75439_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj75439_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj75439").trigger("obj75439_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75439) {
				console.warn("de-queueing event obj75439." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75439").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75439_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	





















};
obj75439_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75439_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj75439").trigger("obj75439_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75439) {
				console.warn("de-queueing event obj75439." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75439").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75439_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_75444();
function runjs_75444() {
	window.obj75439_droppedInsideTargetActions_runningActionsCount = obj75439_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj75470").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj75439_droppedInsideTargetActions_runningActionsCount = window.obj75439_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj75439_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj75439_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj75439_droppedInsideTargetActions_runningActionsCount == 0) {
	obj75439_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj75439_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75439_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj75439").trigger("obj75439_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75439) {
				console.warn("de-queueing event obj75439." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75439").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75439_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_75448();
function switchText_75448() {
	window.obj75439_droppedInsideTargetActions_runningActionsCount = obj75439_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj75482_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj75482_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj75482").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj75482_content");
			setTimeout(function () {
				window.obj75439_droppedInsideTargetActions_runningActionsCount = window.obj75439_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj75439_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj75439_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj75439_droppedInsideTargetActions_runningActionsCount == 0) {
	obj75439_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj75482 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj75439_droppedInsideTargetActions_runningActionsCount = window.obj75439_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj75439_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj75439_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj75439_droppedInsideTargetActions_runningActionsCount == 0) {
	obj75439_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj75439_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75439_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj75439").trigger("obj75439_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75439) {
				console.warn("de-queueing event obj75439." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75439").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75439_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_75445();
function runjs_75445() {
	window.obj75439_droppedInsideTargetActions_runningActionsCount = obj75439_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj75470").css("border-color", "#058E3F"); $("#obj75470").css("border-width", "2px"); $("#obj75470").css("border-style", "solid"); $("#obj75470").css("border-radius", "10px"); $("#obj75470").css("-webkit-border-radius", "10px"); $("#obj75470").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj75439_droppedInsideTargetActions_runningActionsCount = window.obj75439_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj75439_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj75439_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj75439_droppedInsideTargetActions_runningActionsCount == 0) {
	obj75439_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj75439_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75439_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj75439").trigger("obj75439_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75439) {
				console.warn("de-queueing event obj75439." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75439").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75439_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj75466 
hide_75446();
function hide_75446() {
	var selector = "#obj75466";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj75439_droppedInsideTargetActions_runningActionsCount = obj75439_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj75439_droppedInsideTargetActions_runningActionsCount = window.obj75439_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj75439_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj75439_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj75439_droppedInsideTargetActions_runningActionsCount == 0) {
	obj75439_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_75446(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj75439_droppedInsideTargetActions_runningActionsCount = window.obj75439_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj75439_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj75439_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj75439_droppedInsideTargetActions_runningActionsCount == 0) {
	obj75439_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj75439_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75439_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj75439").trigger("obj75439_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75439) {
				console.warn("de-queueing event obj75439." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75439").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75439_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_75447();
function runjs_75447() {
	window.obj75439_droppedInsideTargetActions_runningActionsCount = obj75439_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj75439").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj75439_droppedInsideTargetActions_runningActionsCount = window.obj75439_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj75439_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj75439_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj75439_droppedInsideTargetActions_runningActionsCount == 0) {
	obj75439_droppedInsideTargetActions_actionGroup5();
}
	}, 1);
}







};
obj75439_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75439_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj75439").trigger("obj75439_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75439) {
				console.warn("de-queueing event obj75439." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75439").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75439_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj75464 
playAudio_75449();
function playAudio_75449() {
	window.obj75439_droppedInsideTargetActions_runningActionsCount = obj75439_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj75464")[0];
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
		    window.obj75439_droppedInsideTargetActions_runningActionsCount = window.obj75439_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj75439_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj75439_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj75439_droppedInsideTargetActions_runningActionsCount == 0) {
	obj75439_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj75439_droppedInsideTargetActions_runningActionsCount = window.obj75439_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj75439_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj75439_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj75439_droppedInsideTargetActions_runningActionsCount == 0) {
	obj75439_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj75439_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75439_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj75439").trigger("obj75439_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75439) {
				console.warn("de-queueing event obj75439." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75439").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75439_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90194();
function switchText_90194() {
	window.obj75439_droppedInsideTargetActions_runningActionsCount = obj75439_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj75482_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj75482_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj75482").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj75482_content");
			setTimeout(function () {
				window.obj75439_droppedInsideTargetActions_runningActionsCount = window.obj75439_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj75439_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj75439_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj75439_droppedInsideTargetActions_runningActionsCount == 0) {
	obj75439_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj75482 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj75439_droppedInsideTargetActions_runningActionsCount = window.obj75439_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj75439_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj75439_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj75439_droppedInsideTargetActions_runningActionsCount == 0) {
	obj75439_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj75439_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj75439_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj75439").trigger("obj75439_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75439) {
				console.warn("de-queueing event obj75439." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75439").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75439_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj75414_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75414_onTouchDown_activeActionGroupIndex = -1;
		$("#obj75414").trigger("obj75414_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75414) {
				console.warn("de-queueing event obj75414." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75414").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75414_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj75414");
//	action: dragDrop
//	target: obj75414 
dragDrop_75417();
function dragDrop_75417() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj75414_onTouchDown_runningActionsCount = obj75414_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj75414');
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
	  	containerNode = $('#obj75484');
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
    	window.obj75414_onTouchDown_runningActionsCount = window.obj75414_onTouchDown_runningActionsCount - 1;
if (window.obj75414_onTouchDown_runningActionsCount < 0) {
	window.obj75414_onTouchDown_runningActionsCount = 0;
} else if (window.obj75414_onTouchDown_runningActionsCount == 0) {
	obj75414_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj75472","#obj75478","#obj75470");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_75417 = false;
    	var dropped_id_75417;
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
					dropped_75417 = true;
					dropped_id_75417 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_75417) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj75414").trigger('SCActionDragDrop75417_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj75414_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj75414_onTouchDown_activeActionGroupIndex = -1;
		$("#obj75414").trigger("obj75414_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75414) {
				console.warn("de-queueing event obj75414." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75414").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75414_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj75414_SCActionDragDrop75417_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75414_SCActionDragDrop75417_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj75414").trigger("obj75414_SCActionDragDrop75417_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75414) {
				console.warn("de-queueing event obj75414." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75414").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75414_SCActionDragDrop75417_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj75414 
move_92320();
function move_92320() {
	window.obj75414_SCActionDragDrop75417_droppedOutsideTargetActions_runningActionsCount = obj75414_SCActionDragDrop75417_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj75414");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 329;
	var moveY = 507;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj75414_SCActionDragDrop75417_droppedOutsideTargetActions_runningActionsCount = window.obj75414_SCActionDragDrop75417_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj75414_SCActionDragDrop75417_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj75414_SCActionDragDrop75417_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj75414_SCActionDragDrop75417_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj75414_SCActionDragDrop75417_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj75414_SCActionDragDrop75417_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj75414_SCActionDragDrop75417_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj75414").trigger("obj75414_SCActionDragDrop75417_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75414) {
				console.warn("de-queueing event obj75414." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75414").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75414_SCActionDragDrop75417_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj75414_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75414_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj75414").trigger("obj75414_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75414) {
				console.warn("de-queueing event obj75414." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75414").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75414_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_75433();
function runjs_75433() {
	window.obj75414_droppedInsideTargetActions_3_runningActionsCount = obj75414_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj75470").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj75414_droppedInsideTargetActions_3_runningActionsCount = window.obj75414_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj75414_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj75414_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj75414_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj75414_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj75414_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75414_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj75414").trigger("obj75414_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75414) {
				console.warn("de-queueing event obj75414." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75414").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75414_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_75437();
function switchText_75437() {
	window.obj75414_droppedInsideTargetActions_3_runningActionsCount = obj75414_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj75482_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj75482_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj75482").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj75482_content");
			setTimeout(function () {
				window.obj75414_droppedInsideTargetActions_3_runningActionsCount = window.obj75414_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj75414_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj75414_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj75414_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj75414_droppedInsideTargetActions_3_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj75482 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj75414_droppedInsideTargetActions_3_runningActionsCount = window.obj75414_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj75414_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj75414_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj75414_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj75414_droppedInsideTargetActions_3_actionGroup2();
}
		}, 1);
	}
}






};
obj75414_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75414_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj75414").trigger("obj75414_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75414) {
				console.warn("de-queueing event obj75414." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75414").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75414_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_75434();
function runjs_75434() {
	window.obj75414_droppedInsideTargetActions_3_runningActionsCount = obj75414_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj75470").css("border-color", "#058E3F"); $("#obj75470").css("border-width", "2px"); $("#obj75470").css("border-style", "solid"); $("#obj75470").css("border-radius", "10px"); $("#obj75470").css("-webkit-border-radius", "10px"); $("#obj75470").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj75414_droppedInsideTargetActions_3_runningActionsCount = window.obj75414_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj75414_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj75414_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj75414_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj75414_droppedInsideTargetActions_3_actionGroup3();
}
	}, 1);
}







};
obj75414_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75414_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj75414").trigger("obj75414_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75414) {
				console.warn("de-queueing event obj75414." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75414").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75414_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj75466 
hide_75435();
function hide_75435() {
	var selector = "#obj75466";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj75414_droppedInsideTargetActions_3_runningActionsCount = obj75414_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj75414_droppedInsideTargetActions_3_runningActionsCount = window.obj75414_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj75414_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj75414_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj75414_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj75414_droppedInsideTargetActions_3_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_75435(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj75414_droppedInsideTargetActions_3_runningActionsCount = window.obj75414_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj75414_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj75414_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj75414_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj75414_droppedInsideTargetActions_3_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj75414_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75414_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj75414").trigger("obj75414_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75414) {
				console.warn("de-queueing event obj75414." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75414").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75414_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_75436();
function runjs_75436() {
	window.obj75414_droppedInsideTargetActions_3_runningActionsCount = obj75414_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj75414").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj75414_droppedInsideTargetActions_3_runningActionsCount = window.obj75414_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj75414_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj75414_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj75414_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj75414_droppedInsideTargetActions_3_actionGroup5();
}
	}, 1);
}







};
obj75414_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75414_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj75414").trigger("obj75414_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75414) {
				console.warn("de-queueing event obj75414." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75414").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75414_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj75464 
playAudio_75438();
function playAudio_75438() {
	window.obj75414_droppedInsideTargetActions_3_runningActionsCount = obj75414_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj75464")[0];
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
		    window.obj75414_droppedInsideTargetActions_3_runningActionsCount = window.obj75414_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj75414_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj75414_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj75414_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj75414_droppedInsideTargetActions_3_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj75414_droppedInsideTargetActions_3_runningActionsCount = window.obj75414_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj75414_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj75414_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj75414_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj75414_droppedInsideTargetActions_3_actionGroup6();
}
	}
}









};
obj75414_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75414_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj75414").trigger("obj75414_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75414) {
				console.warn("de-queueing event obj75414." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75414").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75414_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90202();
function switchText_90202() {
	window.obj75414_droppedInsideTargetActions_3_runningActionsCount = obj75414_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj75482_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj75482_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj75482").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj75482_content");
			setTimeout(function () {
				window.obj75414_droppedInsideTargetActions_3_runningActionsCount = window.obj75414_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj75414_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj75414_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj75414_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj75414_droppedInsideTargetActions_3_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj75482 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj75414_droppedInsideTargetActions_3_runningActionsCount = window.obj75414_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj75414_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj75414_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj75414_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj75414_droppedInsideTargetActions_3_actionGroup7();
}
		}, 1);
	}
}






};
obj75414_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj75414_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj75414").trigger("obj75414_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75414) {
				console.warn("de-queueing event obj75414." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75414").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75414_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	





















};
obj75414_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75414_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj75414").trigger("obj75414_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75414) {
				console.warn("de-queueing event obj75414." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75414").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75414_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_75426();
function runjs_75426() {
	window.obj75414_droppedInsideTargetActions_2_runningActionsCount = obj75414_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj75478").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj75414_droppedInsideTargetActions_2_runningActionsCount = window.obj75414_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj75414_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj75414_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj75414_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj75414_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj75414_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75414_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj75414").trigger("obj75414_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75414) {
				console.warn("de-queueing event obj75414." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75414").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75414_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_75430();
function switchText_75430() {
	window.obj75414_droppedInsideTargetActions_2_runningActionsCount = obj75414_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj75482_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj75482_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj75482").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj75482_content");
			setTimeout(function () {
				window.obj75414_droppedInsideTargetActions_2_runningActionsCount = window.obj75414_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj75414_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj75414_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj75414_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj75414_droppedInsideTargetActions_2_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj75482 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj75414_droppedInsideTargetActions_2_runningActionsCount = window.obj75414_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj75414_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj75414_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj75414_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj75414_droppedInsideTargetActions_2_actionGroup2();
}
		}, 1);
	}
}






};
obj75414_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75414_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj75414").trigger("obj75414_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75414) {
				console.warn("de-queueing event obj75414." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75414").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75414_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_75427();
function runjs_75427() {
	window.obj75414_droppedInsideTargetActions_2_runningActionsCount = obj75414_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj75478").css("border-color", "#058E3F"); $("#obj75478").css("border-width", "2px"); $("#obj75478").css("border-style", "solid"); $("#obj75478").css("border-radius", "10px"); $("#obj75478").css("-webkit-border-radius", "10px"); $("#obj75478").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj75414_droppedInsideTargetActions_2_runningActionsCount = window.obj75414_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj75414_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj75414_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj75414_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj75414_droppedInsideTargetActions_2_actionGroup3();
}
	}, 1);
}







};
obj75414_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75414_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj75414").trigger("obj75414_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75414) {
				console.warn("de-queueing event obj75414." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75414").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75414_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj75476 
hide_75428();
function hide_75428() {
	var selector = "#obj75476";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj75414_droppedInsideTargetActions_2_runningActionsCount = obj75414_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj75414_droppedInsideTargetActions_2_runningActionsCount = window.obj75414_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj75414_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj75414_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj75414_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj75414_droppedInsideTargetActions_2_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_75428(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj75414_droppedInsideTargetActions_2_runningActionsCount = window.obj75414_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj75414_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj75414_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj75414_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj75414_droppedInsideTargetActions_2_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj75414_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75414_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj75414").trigger("obj75414_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75414) {
				console.warn("de-queueing event obj75414." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75414").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75414_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_75429();
function runjs_75429() {
	window.obj75414_droppedInsideTargetActions_2_runningActionsCount = obj75414_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj75414").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj75414_droppedInsideTargetActions_2_runningActionsCount = window.obj75414_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj75414_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj75414_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj75414_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj75414_droppedInsideTargetActions_2_actionGroup5();
}
	}, 1);
}







};
obj75414_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75414_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj75414").trigger("obj75414_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75414) {
				console.warn("de-queueing event obj75414." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75414").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75414_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj75464 
playAudio_75431();
function playAudio_75431() {
	window.obj75414_droppedInsideTargetActions_2_runningActionsCount = obj75414_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj75464")[0];
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
		    window.obj75414_droppedInsideTargetActions_2_runningActionsCount = window.obj75414_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj75414_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj75414_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj75414_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj75414_droppedInsideTargetActions_2_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj75414_droppedInsideTargetActions_2_runningActionsCount = window.obj75414_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj75414_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj75414_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj75414_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj75414_droppedInsideTargetActions_2_actionGroup6();
}
	}
}









};
obj75414_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75414_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj75414").trigger("obj75414_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75414) {
				console.warn("de-queueing event obj75414." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75414").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75414_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90201();
function switchText_90201() {
	window.obj75414_droppedInsideTargetActions_2_runningActionsCount = obj75414_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj75482_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj75482_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj75482").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj75482_content");
			setTimeout(function () {
				window.obj75414_droppedInsideTargetActions_2_runningActionsCount = window.obj75414_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj75414_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj75414_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj75414_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj75414_droppedInsideTargetActions_2_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj75482 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj75414_droppedInsideTargetActions_2_runningActionsCount = window.obj75414_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj75414_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj75414_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj75414_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj75414_droppedInsideTargetActions_2_actionGroup7();
}
		}, 1);
	}
}






};
obj75414_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj75414_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj75414").trigger("obj75414_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75414) {
				console.warn("de-queueing event obj75414." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75414").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75414_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	





















};
obj75414_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75414_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj75414").trigger("obj75414_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75414) {
				console.warn("de-queueing event obj75414." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75414").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75414_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_75419();
function runjs_75419() {
	window.obj75414_droppedInsideTargetActions_runningActionsCount = obj75414_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj75472").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj75414_droppedInsideTargetActions_runningActionsCount = window.obj75414_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj75414_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj75414_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj75414_droppedInsideTargetActions_runningActionsCount == 0) {
	obj75414_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj75414_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75414_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj75414").trigger("obj75414_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75414) {
				console.warn("de-queueing event obj75414." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75414").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75414_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_75423();
function switchText_75423() {
	window.obj75414_droppedInsideTargetActions_runningActionsCount = obj75414_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj75482_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj75482_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj75482").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj75482_content");
			setTimeout(function () {
				window.obj75414_droppedInsideTargetActions_runningActionsCount = window.obj75414_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj75414_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj75414_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj75414_droppedInsideTargetActions_runningActionsCount == 0) {
	obj75414_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj75482 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj75414_droppedInsideTargetActions_runningActionsCount = window.obj75414_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj75414_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj75414_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj75414_droppedInsideTargetActions_runningActionsCount == 0) {
	obj75414_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj75414_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75414_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj75414").trigger("obj75414_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75414) {
				console.warn("de-queueing event obj75414." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75414").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75414_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_75420();
function runjs_75420() {
	window.obj75414_droppedInsideTargetActions_runningActionsCount = obj75414_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj75472").css("border-color", "#058E3F"); $("#obj75472").css("border-width", "2px"); $("#obj75472").css("border-style", "solid"); $("#obj75472").css("border-radius", "10px"); $("#obj75472").css("-webkit-border-radius", "10px"); $("#obj75472").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj75414_droppedInsideTargetActions_runningActionsCount = window.obj75414_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj75414_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj75414_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj75414_droppedInsideTargetActions_runningActionsCount == 0) {
	obj75414_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj75414_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75414_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj75414").trigger("obj75414_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75414) {
				console.warn("de-queueing event obj75414." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75414").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75414_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj75468 
hide_75421();
function hide_75421() {
	var selector = "#obj75468";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj75414_droppedInsideTargetActions_runningActionsCount = obj75414_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj75414_droppedInsideTargetActions_runningActionsCount = window.obj75414_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj75414_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj75414_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj75414_droppedInsideTargetActions_runningActionsCount == 0) {
	obj75414_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_75421(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj75414_droppedInsideTargetActions_runningActionsCount = window.obj75414_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj75414_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj75414_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj75414_droppedInsideTargetActions_runningActionsCount == 0) {
	obj75414_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj75414_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75414_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj75414").trigger("obj75414_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75414) {
				console.warn("de-queueing event obj75414." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75414").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75414_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_75422();
function runjs_75422() {
	window.obj75414_droppedInsideTargetActions_runningActionsCount = obj75414_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj75414").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj75414_droppedInsideTargetActions_runningActionsCount = window.obj75414_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj75414_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj75414_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj75414_droppedInsideTargetActions_runningActionsCount == 0) {
	obj75414_droppedInsideTargetActions_actionGroup5();
}
	}, 1);
}







};
obj75414_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75414_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj75414").trigger("obj75414_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75414) {
				console.warn("de-queueing event obj75414." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75414").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75414_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj75464 
playAudio_75424();
function playAudio_75424() {
	window.obj75414_droppedInsideTargetActions_runningActionsCount = obj75414_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj75464")[0];
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
		    window.obj75414_droppedInsideTargetActions_runningActionsCount = window.obj75414_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj75414_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj75414_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj75414_droppedInsideTargetActions_runningActionsCount == 0) {
	obj75414_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj75414_droppedInsideTargetActions_runningActionsCount = window.obj75414_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj75414_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj75414_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj75414_droppedInsideTargetActions_runningActionsCount == 0) {
	obj75414_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj75414_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75414_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj75414").trigger("obj75414_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75414) {
				console.warn("de-queueing event obj75414." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75414").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75414_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90200();
function switchText_90200() {
	window.obj75414_droppedInsideTargetActions_runningActionsCount = obj75414_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj75482_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj75482_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj75482").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj75482_content");
			setTimeout(function () {
				window.obj75414_droppedInsideTargetActions_runningActionsCount = window.obj75414_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj75414_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj75414_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj75414_droppedInsideTargetActions_runningActionsCount == 0) {
	obj75414_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj75482 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj75414_droppedInsideTargetActions_runningActionsCount = window.obj75414_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj75414_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj75414_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj75414_droppedInsideTargetActions_runningActionsCount == 0) {
	obj75414_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj75414_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj75414_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj75414").trigger("obj75414_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75414) {
				console.warn("de-queueing event obj75414." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75414").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75414_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj75389_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75389_onTouchDown_activeActionGroupIndex = -1;
		$("#obj75389").trigger("obj75389_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75389) {
				console.warn("de-queueing event obj75389." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75389").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75389_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj75389");
//	action: dragDrop
//	target: obj75389 
dragDrop_75392();
function dragDrop_75392() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj75389_onTouchDown_runningActionsCount = obj75389_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj75389');
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
	  	containerNode = $('#obj75484');
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
    	window.obj75389_onTouchDown_runningActionsCount = window.obj75389_onTouchDown_runningActionsCount - 1;
if (window.obj75389_onTouchDown_runningActionsCount < 0) {
	window.obj75389_onTouchDown_runningActionsCount = 0;
} else if (window.obj75389_onTouchDown_runningActionsCount == 0) {
	obj75389_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj75478","#obj75472","#obj75470");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_75392 = false;
    	var dropped_id_75392;
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
					dropped_75392 = true;
					dropped_id_75392 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_75392) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj75389").trigger('SCActionDragDrop75392_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj75389_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj75389_onTouchDown_activeActionGroupIndex = -1;
		$("#obj75389").trigger("obj75389_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75389) {
				console.warn("de-queueing event obj75389." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75389").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75389_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj75389_SCActionDragDrop75392_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75389_SCActionDragDrop75392_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj75389").trigger("obj75389_SCActionDragDrop75392_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75389) {
				console.warn("de-queueing event obj75389." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75389").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75389_SCActionDragDrop75392_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj75389 
move_92318();
function move_92318() {
	window.obj75389_SCActionDragDrop75392_droppedOutsideTargetActions_runningActionsCount = obj75389_SCActionDragDrop75392_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj75389");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 175;
	var moveY = 570;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj75389_SCActionDragDrop75392_droppedOutsideTargetActions_runningActionsCount = window.obj75389_SCActionDragDrop75392_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj75389_SCActionDragDrop75392_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj75389_SCActionDragDrop75392_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj75389_SCActionDragDrop75392_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj75389_SCActionDragDrop75392_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj75389_SCActionDragDrop75392_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj75389_SCActionDragDrop75392_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj75389").trigger("obj75389_SCActionDragDrop75392_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75389) {
				console.warn("de-queueing event obj75389." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75389").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75389_SCActionDragDrop75392_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj75389_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75389_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj75389").trigger("obj75389_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75389) {
				console.warn("de-queueing event obj75389." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75389").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75389_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_75408();
function runjs_75408() {
	window.obj75389_droppedInsideTargetActions_3_runningActionsCount = obj75389_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj75470").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj75389_droppedInsideTargetActions_3_runningActionsCount = window.obj75389_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj75389_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj75389_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj75389_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj75389_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj75389_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75389_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj75389").trigger("obj75389_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75389) {
				console.warn("de-queueing event obj75389." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75389").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75389_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_75412();
function switchText_75412() {
	window.obj75389_droppedInsideTargetActions_3_runningActionsCount = obj75389_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj75482_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj75482_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj75482").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj75482_content");
			setTimeout(function () {
				window.obj75389_droppedInsideTargetActions_3_runningActionsCount = window.obj75389_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj75389_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj75389_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj75389_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj75389_droppedInsideTargetActions_3_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj75482 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj75389_droppedInsideTargetActions_3_runningActionsCount = window.obj75389_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj75389_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj75389_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj75389_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj75389_droppedInsideTargetActions_3_actionGroup2();
}
		}, 1);
	}
}






};
obj75389_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75389_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj75389").trigger("obj75389_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75389) {
				console.warn("de-queueing event obj75389." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75389").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75389_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_75409();
function runjs_75409() {
	window.obj75389_droppedInsideTargetActions_3_runningActionsCount = obj75389_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj75470").css("border-color", "#058E3F"); $("#obj75470").css("border-width", "2px"); $("#obj75470").css("border-style", "solid"); $("#obj75470").css("border-radius", "10px"); $("#obj75470").css("-webkit-border-radius", "10px"); $("#obj75470").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj75389_droppedInsideTargetActions_3_runningActionsCount = window.obj75389_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj75389_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj75389_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj75389_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj75389_droppedInsideTargetActions_3_actionGroup3();
}
	}, 1);
}







};
obj75389_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75389_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj75389").trigger("obj75389_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75389) {
				console.warn("de-queueing event obj75389." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75389").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75389_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj75466 
hide_75410();
function hide_75410() {
	var selector = "#obj75466";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj75389_droppedInsideTargetActions_3_runningActionsCount = obj75389_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj75389_droppedInsideTargetActions_3_runningActionsCount = window.obj75389_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj75389_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj75389_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj75389_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj75389_droppedInsideTargetActions_3_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_75410(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj75389_droppedInsideTargetActions_3_runningActionsCount = window.obj75389_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj75389_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj75389_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj75389_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj75389_droppedInsideTargetActions_3_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj75389_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75389_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj75389").trigger("obj75389_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75389) {
				console.warn("de-queueing event obj75389." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75389").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75389_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_75411();
function runjs_75411() {
	window.obj75389_droppedInsideTargetActions_3_runningActionsCount = obj75389_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj75389").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj75389_droppedInsideTargetActions_3_runningActionsCount = window.obj75389_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj75389_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj75389_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj75389_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj75389_droppedInsideTargetActions_3_actionGroup5();
}
	}, 1);
}







};
obj75389_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75389_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj75389").trigger("obj75389_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75389) {
				console.warn("de-queueing event obj75389." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75389").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75389_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj75464 
playAudio_75413();
function playAudio_75413() {
	window.obj75389_droppedInsideTargetActions_3_runningActionsCount = obj75389_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj75464")[0];
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
		    window.obj75389_droppedInsideTargetActions_3_runningActionsCount = window.obj75389_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj75389_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj75389_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj75389_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj75389_droppedInsideTargetActions_3_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj75389_droppedInsideTargetActions_3_runningActionsCount = window.obj75389_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj75389_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj75389_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj75389_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj75389_droppedInsideTargetActions_3_actionGroup6();
}
	}
}









};
obj75389_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75389_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj75389").trigger("obj75389_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75389) {
				console.warn("de-queueing event obj75389." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75389").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75389_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90199();
function switchText_90199() {
	window.obj75389_droppedInsideTargetActions_3_runningActionsCount = obj75389_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj75482_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj75482_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj75482").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj75482_content");
			setTimeout(function () {
				window.obj75389_droppedInsideTargetActions_3_runningActionsCount = window.obj75389_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj75389_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj75389_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj75389_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj75389_droppedInsideTargetActions_3_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj75482 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj75389_droppedInsideTargetActions_3_runningActionsCount = window.obj75389_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj75389_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj75389_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj75389_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj75389_droppedInsideTargetActions_3_actionGroup7();
}
		}, 1);
	}
}






};
obj75389_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj75389_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj75389").trigger("obj75389_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75389) {
				console.warn("de-queueing event obj75389." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75389").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75389_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	





















};
obj75389_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75389_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj75389").trigger("obj75389_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75389) {
				console.warn("de-queueing event obj75389." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75389").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75389_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_75401();
function runjs_75401() {
	window.obj75389_droppedInsideTargetActions_2_runningActionsCount = obj75389_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj75472").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj75389_droppedInsideTargetActions_2_runningActionsCount = window.obj75389_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj75389_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj75389_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj75389_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj75389_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj75389_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75389_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj75389").trigger("obj75389_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75389) {
				console.warn("de-queueing event obj75389." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75389").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75389_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_75405();
function switchText_75405() {
	window.obj75389_droppedInsideTargetActions_2_runningActionsCount = obj75389_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj75482_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj75482_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj75482").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj75482_content");
			setTimeout(function () {
				window.obj75389_droppedInsideTargetActions_2_runningActionsCount = window.obj75389_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj75389_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj75389_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj75389_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj75389_droppedInsideTargetActions_2_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj75482 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj75389_droppedInsideTargetActions_2_runningActionsCount = window.obj75389_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj75389_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj75389_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj75389_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj75389_droppedInsideTargetActions_2_actionGroup2();
}
		}, 1);
	}
}






};
obj75389_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75389_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj75389").trigger("obj75389_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75389) {
				console.warn("de-queueing event obj75389." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75389").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75389_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_75402();
function runjs_75402() {
	window.obj75389_droppedInsideTargetActions_2_runningActionsCount = obj75389_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj75472").css("border-color", "#058E3F"); $("#obj75472").css("border-width", "2px"); $("#obj75472").css("border-style", "solid"); $("#obj75472").css("border-radius", "10px"); $("#obj75472").css("-webkit-border-radius", "10px"); $("#obj75472").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj75389_droppedInsideTargetActions_2_runningActionsCount = window.obj75389_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj75389_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj75389_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj75389_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj75389_droppedInsideTargetActions_2_actionGroup3();
}
	}, 1);
}







};
obj75389_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75389_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj75389").trigger("obj75389_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75389) {
				console.warn("de-queueing event obj75389." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75389").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75389_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj75468 
hide_75403();
function hide_75403() {
	var selector = "#obj75468";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj75389_droppedInsideTargetActions_2_runningActionsCount = obj75389_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj75389_droppedInsideTargetActions_2_runningActionsCount = window.obj75389_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj75389_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj75389_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj75389_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj75389_droppedInsideTargetActions_2_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_75403(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj75389_droppedInsideTargetActions_2_runningActionsCount = window.obj75389_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj75389_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj75389_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj75389_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj75389_droppedInsideTargetActions_2_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj75389_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75389_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj75389").trigger("obj75389_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75389) {
				console.warn("de-queueing event obj75389." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75389").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75389_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_75404();
function runjs_75404() {
	window.obj75389_droppedInsideTargetActions_2_runningActionsCount = obj75389_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj75389").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj75389_droppedInsideTargetActions_2_runningActionsCount = window.obj75389_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj75389_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj75389_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj75389_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj75389_droppedInsideTargetActions_2_actionGroup5();
}
	}, 1);
}







};
obj75389_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75389_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj75389").trigger("obj75389_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75389) {
				console.warn("de-queueing event obj75389." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75389").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75389_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj75464 
playAudio_75406();
function playAudio_75406() {
	window.obj75389_droppedInsideTargetActions_2_runningActionsCount = obj75389_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj75464")[0];
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
		    window.obj75389_droppedInsideTargetActions_2_runningActionsCount = window.obj75389_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj75389_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj75389_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj75389_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj75389_droppedInsideTargetActions_2_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj75389_droppedInsideTargetActions_2_runningActionsCount = window.obj75389_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj75389_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj75389_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj75389_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj75389_droppedInsideTargetActions_2_actionGroup6();
}
	}
}









};
obj75389_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75389_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj75389").trigger("obj75389_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75389) {
				console.warn("de-queueing event obj75389." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75389").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75389_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90198();
function switchText_90198() {
	window.obj75389_droppedInsideTargetActions_2_runningActionsCount = obj75389_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj75482_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj75482_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj75482").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj75482_content");
			setTimeout(function () {
				window.obj75389_droppedInsideTargetActions_2_runningActionsCount = window.obj75389_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj75389_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj75389_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj75389_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj75389_droppedInsideTargetActions_2_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj75482 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj75389_droppedInsideTargetActions_2_runningActionsCount = window.obj75389_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj75389_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj75389_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj75389_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj75389_droppedInsideTargetActions_2_actionGroup7();
}
		}, 1);
	}
}






};
obj75389_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj75389_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj75389").trigger("obj75389_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75389) {
				console.warn("de-queueing event obj75389." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75389").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75389_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	





















};
obj75389_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75389_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj75389").trigger("obj75389_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75389) {
				console.warn("de-queueing event obj75389." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75389").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75389_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_75394();
function runjs_75394() {
	window.obj75389_droppedInsideTargetActions_runningActionsCount = obj75389_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj75478").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj75389_droppedInsideTargetActions_runningActionsCount = window.obj75389_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj75389_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj75389_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj75389_droppedInsideTargetActions_runningActionsCount == 0) {
	obj75389_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj75389_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75389_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj75389").trigger("obj75389_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75389) {
				console.warn("de-queueing event obj75389." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75389").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75389_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_75398();
function switchText_75398() {
	window.obj75389_droppedInsideTargetActions_runningActionsCount = obj75389_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj75482_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj75482_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj75482").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj75482_content");
			setTimeout(function () {
				window.obj75389_droppedInsideTargetActions_runningActionsCount = window.obj75389_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj75389_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj75389_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj75389_droppedInsideTargetActions_runningActionsCount == 0) {
	obj75389_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj75482 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj75389_droppedInsideTargetActions_runningActionsCount = window.obj75389_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj75389_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj75389_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj75389_droppedInsideTargetActions_runningActionsCount == 0) {
	obj75389_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj75389_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75389_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj75389").trigger("obj75389_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75389) {
				console.warn("de-queueing event obj75389." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75389").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75389_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_75395();
function runjs_75395() {
	window.obj75389_droppedInsideTargetActions_runningActionsCount = obj75389_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj75478").css("border-color", "#058E3F"); $("#obj75478").css("border-width", "2px"); $("#obj75478").css("border-style", "solid"); $("#obj75478").css("border-radius", "10px"); $("#obj75478").css("-webkit-border-radius", "10px"); $("#obj75478").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj75389_droppedInsideTargetActions_runningActionsCount = window.obj75389_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj75389_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj75389_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj75389_droppedInsideTargetActions_runningActionsCount == 0) {
	obj75389_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj75389_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75389_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj75389").trigger("obj75389_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75389) {
				console.warn("de-queueing event obj75389." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75389").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75389_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj75476 
hide_75396();
function hide_75396() {
	var selector = "#obj75476";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj75389_droppedInsideTargetActions_runningActionsCount = obj75389_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj75389_droppedInsideTargetActions_runningActionsCount = window.obj75389_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj75389_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj75389_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj75389_droppedInsideTargetActions_runningActionsCount == 0) {
	obj75389_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_75396(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj75389_droppedInsideTargetActions_runningActionsCount = window.obj75389_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj75389_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj75389_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj75389_droppedInsideTargetActions_runningActionsCount == 0) {
	obj75389_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj75389_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75389_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj75389").trigger("obj75389_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75389) {
				console.warn("de-queueing event obj75389." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75389").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75389_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_75397();
function runjs_75397() {
	window.obj75389_droppedInsideTargetActions_runningActionsCount = obj75389_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj75389").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj75389_droppedInsideTargetActions_runningActionsCount = window.obj75389_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj75389_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj75389_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj75389_droppedInsideTargetActions_runningActionsCount == 0) {
	obj75389_droppedInsideTargetActions_actionGroup5();
}
	}, 1);
}







};
obj75389_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75389_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj75389").trigger("obj75389_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75389) {
				console.warn("de-queueing event obj75389." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75389").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75389_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj75464 
playAudio_75399();
function playAudio_75399() {
	window.obj75389_droppedInsideTargetActions_runningActionsCount = obj75389_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj75464")[0];
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
		    window.obj75389_droppedInsideTargetActions_runningActionsCount = window.obj75389_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj75389_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj75389_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj75389_droppedInsideTargetActions_runningActionsCount == 0) {
	obj75389_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj75389_droppedInsideTargetActions_runningActionsCount = window.obj75389_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj75389_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj75389_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj75389_droppedInsideTargetActions_runningActionsCount == 0) {
	obj75389_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj75389_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75389_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj75389").trigger("obj75389_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75389) {
				console.warn("de-queueing event obj75389." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75389").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75389_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90197();
function switchText_90197() {
	window.obj75389_droppedInsideTargetActions_runningActionsCount = obj75389_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj75482_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj75482_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj75482").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj75482_content");
			setTimeout(function () {
				window.obj75389_droppedInsideTargetActions_runningActionsCount = window.obj75389_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj75389_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj75389_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj75389_droppedInsideTargetActions_runningActionsCount == 0) {
	obj75389_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj75482 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj75389_droppedInsideTargetActions_runningActionsCount = window.obj75389_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj75389_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj75389_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj75389_droppedInsideTargetActions_runningActionsCount == 0) {
	obj75389_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj75389_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj75389_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj75389").trigger("obj75389_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75389) {
				console.warn("de-queueing event obj75389." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75389").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75389_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj75343_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75343_onTouchDown_activeActionGroupIndex = -1;
		$("#obj75343").trigger("obj75343_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75343) {
				console.warn("de-queueing event obj75343." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75343").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75343_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj75343");
//	action: dragDrop
//	target: obj75343 
dragDrop_75346();
function dragDrop_75346() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj75343_onTouchDown_runningActionsCount = obj75343_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj75343');
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
	  	containerNode = $('#obj75484');
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
    	window.obj75343_onTouchDown_runningActionsCount = window.obj75343_onTouchDown_runningActionsCount - 1;
if (window.obj75343_onTouchDown_runningActionsCount < 0) {
	window.obj75343_onTouchDown_runningActionsCount = 0;
} else if (window.obj75343_onTouchDown_runningActionsCount == 0) {
	obj75343_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj75478","#obj75472","#obj75470");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_75346 = false;
    	var dropped_id_75346;
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
					dropped_75346 = true;
					dropped_id_75346 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_75346) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj75343").trigger('SCActionDragDrop75346_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj75343_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj75343_onTouchDown_activeActionGroupIndex = -1;
		$("#obj75343").trigger("obj75343_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75343) {
				console.warn("de-queueing event obj75343." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75343").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75343_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj75343_SCActionDragDrop75346_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75343_SCActionDragDrop75346_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj75343").trigger("obj75343_SCActionDragDrop75346_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75343) {
				console.warn("de-queueing event obj75343." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75343").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75343_SCActionDragDrop75346_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj75343 
move_92322();
function move_92322() {
	window.obj75343_SCActionDragDrop75346_droppedOutsideTargetActions_runningActionsCount = obj75343_SCActionDragDrop75346_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj75343");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 329;
	var moveY = 569;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj75343_SCActionDragDrop75346_droppedOutsideTargetActions_runningActionsCount = window.obj75343_SCActionDragDrop75346_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj75343_SCActionDragDrop75346_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj75343_SCActionDragDrop75346_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj75343_SCActionDragDrop75346_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj75343_SCActionDragDrop75346_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj75343_SCActionDragDrop75346_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj75343_SCActionDragDrop75346_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj75343").trigger("obj75343_SCActionDragDrop75346_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75343) {
				console.warn("de-queueing event obj75343." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75343").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75343_SCActionDragDrop75346_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj75343_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75343_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj75343").trigger("obj75343_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75343) {
				console.warn("de-queueing event obj75343." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75343").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75343_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_75376();
function runjs_75376() {
	window.obj75343_droppedInsideTargetActions_3_runningActionsCount = obj75343_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj75470").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj75343_droppedInsideTargetActions_3_runningActionsCount = window.obj75343_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj75343_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj75343_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj75343_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj75343_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj75343_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75343_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj75343").trigger("obj75343_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75343) {
				console.warn("de-queueing event obj75343." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75343").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75343_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_75377();
function runjs_75377() {
	window.obj75343_droppedInsideTargetActions_3_runningActionsCount = obj75343_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj75470").css("border-color", "#C00000"); $("#obj75470").css("border-width", "2px"); $("#obj75470").css("border-style", "solid"); $("#obj75470").css("border-radius", "10px"); $("#obj75470").css("-webkit-border-radius", "10px"); $("#obj75470").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj75343_droppedInsideTargetActions_3_runningActionsCount = window.obj75343_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj75343_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj75343_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj75343_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj75343_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj75343_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75343_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj75343").trigger("obj75343_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75343) {
				console.warn("de-queueing event obj75343." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75343").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75343_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj75466 
hide_75378();
function hide_75378() {
	var selector = "#obj75466";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj75343_droppedInsideTargetActions_3_runningActionsCount = obj75343_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj75343_droppedInsideTargetActions_3_runningActionsCount = window.obj75343_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj75343_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj75343_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj75343_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj75343_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_75378(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj75343_droppedInsideTargetActions_3_runningActionsCount = window.obj75343_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj75343_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj75343_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj75343_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj75343_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj75343_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75343_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj75343").trigger("obj75343_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75343) {
				console.warn("de-queueing event obj75343." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75343").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75343_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_75379();
function runjs_75379() {
	window.obj75343_droppedInsideTargetActions_3_runningActionsCount = obj75343_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj75343").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj75343_droppedInsideTargetActions_3_runningActionsCount = window.obj75343_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj75343_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj75343_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj75343_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj75343_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj75343_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75343_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj75343").trigger("obj75343_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75343) {
				console.warn("de-queueing event obj75343." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75343").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75343_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_75380();
function switchText_75380() {
	window.obj75343_droppedInsideTargetActions_3_runningActionsCount = obj75343_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj75482_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj75482_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj75482").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj75482_content");
			setTimeout(function () {
				window.obj75343_droppedInsideTargetActions_3_runningActionsCount = window.obj75343_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj75343_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj75343_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj75343_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj75343_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj75482 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj75343_droppedInsideTargetActions_3_runningActionsCount = window.obj75343_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj75343_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj75343_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj75343_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj75343_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj75343_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75343_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj75343").trigger("obj75343_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75343) {
				console.warn("de-queueing event obj75343." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75343").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75343_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj75343 
move_75381();
function move_75381() {
	window.obj75343_droppedInsideTargetActions_3_runningActionsCount = obj75343_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj75343");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 329;
	var moveY = 569;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj75343_droppedInsideTargetActions_3_runningActionsCount = window.obj75343_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj75343_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj75343_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj75343_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj75343_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj75343_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75343_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj75343").trigger("obj75343_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75343) {
				console.warn("de-queueing event obj75343." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75343").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75343_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_75382();
function runjs_75382() {
	window.obj75343_droppedInsideTargetActions_3_runningActionsCount = obj75343_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj75470").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj75343_droppedInsideTargetActions_3_runningActionsCount = window.obj75343_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj75343_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj75343_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj75343_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj75343_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj75343_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75343_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj75343").trigger("obj75343_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75343) {
				console.warn("de-queueing event obj75343." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75343").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75343_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_75383();
function runjs_75383() {
	window.obj75343_droppedInsideTargetActions_3_runningActionsCount = obj75343_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj75470").css("border-color", "#000000"); $("#obj75470").css("border-width", "1px"); $("#obj75470").css("border-style", "solid"); $("#obj75470").css("border-radius", "10px"); $("#obj75470").css("-webkit-border-radius", "10px"); $("#obj75470").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj75343_droppedInsideTargetActions_3_runningActionsCount = window.obj75343_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj75343_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj75343_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj75343_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj75343_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj75343_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75343_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj75343").trigger("obj75343_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75343) {
				console.warn("de-queueing event obj75343." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75343").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75343_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj75466
(function(){
	window.obj75343_droppedInsideTargetActions_3_runningActionsCount = obj75343_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj75466";
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
					window.obj75343_droppedInsideTargetActions_3_runningActionsCount = window.obj75343_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj75343_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj75343_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj75343_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj75343_droppedInsideTargetActions_3_actionGroup9();
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
				window.obj75343_droppedInsideTargetActions_3_runningActionsCount = window.obj75343_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj75343_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj75343_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj75343_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj75343_droppedInsideTargetActions_3_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj75343_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75343_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj75343").trigger("obj75343_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75343) {
				console.warn("de-queueing event obj75343." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75343").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75343_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_75385();
function runjs_75385() {
	window.obj75343_droppedInsideTargetActions_3_runningActionsCount = obj75343_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj75343").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj75343_droppedInsideTargetActions_3_runningActionsCount = window.obj75343_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj75343_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj75343_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj75343_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj75343_droppedInsideTargetActions_3_actionGroup10();
}
	}, 1);
}







};
obj75343_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75343_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj75343").trigger("obj75343_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75343) {
				console.warn("de-queueing event obj75343." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75343").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75343_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_75386();
function runjs_75386() {
	window.obj75343_droppedInsideTargetActions_3_runningActionsCount = obj75343_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj75343").css("border-color", "rgba(0,0,0,0)"); $("#obj75343").css("border-width", "0px"); $("#obj75343").css("border-style", "solid"); $("#obj75343").css("border-radius", "10px"); $("#obj75343").css("-webkit-border-radius", "10px"); $("#obj75343").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj75343_droppedInsideTargetActions_3_runningActionsCount = window.obj75343_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj75343_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj75343_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj75343_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj75343_droppedInsideTargetActions_3_actionGroup11();
}
	}, 1);
}







};
obj75343_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75343_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj75343").trigger("obj75343_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75343) {
				console.warn("de-queueing event obj75343." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75343").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75343_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj75465 
playAudio_75387();
function playAudio_75387() {
	window.obj75343_droppedInsideTargetActions_3_runningActionsCount = obj75343_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj75465")[0];
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
		    window.obj75343_droppedInsideTargetActions_3_runningActionsCount = window.obj75343_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj75343_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj75343_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj75343_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj75343_droppedInsideTargetActions_3_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj75343_droppedInsideTargetActions_3_runningActionsCount = window.obj75343_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj75343_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj75343_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj75343_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj75343_droppedInsideTargetActions_3_actionGroup12();
}
	}
}









};
obj75343_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75343_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj75343").trigger("obj75343_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75343) {
				console.warn("de-queueing event obj75343." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75343").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75343_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_75388();
function switchText_75388() {
	window.obj75343_droppedInsideTargetActions_3_runningActionsCount = obj75343_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj75482_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj75482_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj75482").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj75482_content");
			setTimeout(function () {
				window.obj75343_droppedInsideTargetActions_3_runningActionsCount = window.obj75343_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj75343_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj75343_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj75343_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj75343_droppedInsideTargetActions_3_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj75482 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj75343_droppedInsideTargetActions_3_runningActionsCount = window.obj75343_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj75343_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj75343_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj75343_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj75343_droppedInsideTargetActions_3_actionGroup13();
}
		}, 1);
	}
}






};
obj75343_droppedInsideTargetActions_3_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj75343_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj75343").trigger("obj75343_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75343) {
				console.warn("de-queueing event obj75343." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75343").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75343_droppedInsideTargetActions_3_activeActionGroupIndex = 13;
	





















};
obj75343_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75343_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj75343").trigger("obj75343_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75343) {
				console.warn("de-queueing event obj75343." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75343").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75343_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_75362();
function runjs_75362() {
	window.obj75343_droppedInsideTargetActions_2_runningActionsCount = obj75343_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj75472").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj75343_droppedInsideTargetActions_2_runningActionsCount = window.obj75343_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj75343_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj75343_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj75343_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj75343_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj75343_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75343_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj75343").trigger("obj75343_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75343) {
				console.warn("de-queueing event obj75343." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75343").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75343_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_75363();
function runjs_75363() {
	window.obj75343_droppedInsideTargetActions_2_runningActionsCount = obj75343_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj75472").css("border-color", "#C00000"); $("#obj75472").css("border-width", "2px"); $("#obj75472").css("border-style", "solid"); $("#obj75472").css("border-radius", "10px"); $("#obj75472").css("-webkit-border-radius", "10px"); $("#obj75472").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj75343_droppedInsideTargetActions_2_runningActionsCount = window.obj75343_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj75343_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj75343_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj75343_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj75343_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj75343_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75343_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj75343").trigger("obj75343_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75343) {
				console.warn("de-queueing event obj75343." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75343").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75343_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj75468 
hide_75364();
function hide_75364() {
	var selector = "#obj75468";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj75343_droppedInsideTargetActions_2_runningActionsCount = obj75343_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj75343_droppedInsideTargetActions_2_runningActionsCount = window.obj75343_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj75343_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj75343_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj75343_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj75343_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_75364(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj75343_droppedInsideTargetActions_2_runningActionsCount = window.obj75343_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj75343_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj75343_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj75343_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj75343_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj75343_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75343_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj75343").trigger("obj75343_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75343) {
				console.warn("de-queueing event obj75343." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75343").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75343_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_75365();
function runjs_75365() {
	window.obj75343_droppedInsideTargetActions_2_runningActionsCount = obj75343_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj75343").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj75343_droppedInsideTargetActions_2_runningActionsCount = window.obj75343_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj75343_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj75343_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj75343_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj75343_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj75343_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75343_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj75343").trigger("obj75343_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75343) {
				console.warn("de-queueing event obj75343." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75343").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75343_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_75366();
function switchText_75366() {
	window.obj75343_droppedInsideTargetActions_2_runningActionsCount = obj75343_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj75482_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj75482_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj75482").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj75482_content");
			setTimeout(function () {
				window.obj75343_droppedInsideTargetActions_2_runningActionsCount = window.obj75343_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj75343_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj75343_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj75343_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj75343_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj75482 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj75343_droppedInsideTargetActions_2_runningActionsCount = window.obj75343_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj75343_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj75343_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj75343_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj75343_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj75343_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75343_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj75343").trigger("obj75343_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75343) {
				console.warn("de-queueing event obj75343." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75343").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75343_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj75343 
move_75367();
function move_75367() {
	window.obj75343_droppedInsideTargetActions_2_runningActionsCount = obj75343_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj75343");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 329;
	var moveY = 569;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj75343_droppedInsideTargetActions_2_runningActionsCount = window.obj75343_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj75343_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj75343_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj75343_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj75343_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj75343_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75343_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj75343").trigger("obj75343_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75343) {
				console.warn("de-queueing event obj75343." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75343").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75343_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_75368();
function runjs_75368() {
	window.obj75343_droppedInsideTargetActions_2_runningActionsCount = obj75343_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj75472").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj75343_droppedInsideTargetActions_2_runningActionsCount = window.obj75343_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj75343_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj75343_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj75343_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj75343_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj75343_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75343_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj75343").trigger("obj75343_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75343) {
				console.warn("de-queueing event obj75343." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75343").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75343_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_75369();
function runjs_75369() {
	window.obj75343_droppedInsideTargetActions_2_runningActionsCount = obj75343_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj75472").css("border-color", "#000000"); $("#obj75472").css("border-width", "1px"); $("#obj75472").css("border-style", "solid"); $("#obj75472").css("border-radius", "10px"); $("#obj75472").css("-webkit-border-radius", "10px"); $("#obj75472").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj75343_droppedInsideTargetActions_2_runningActionsCount = window.obj75343_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj75343_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj75343_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj75343_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj75343_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj75343_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75343_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj75343").trigger("obj75343_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75343) {
				console.warn("de-queueing event obj75343." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75343").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75343_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj75468
(function(){
	window.obj75343_droppedInsideTargetActions_2_runningActionsCount = obj75343_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj75468";
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
					window.obj75343_droppedInsideTargetActions_2_runningActionsCount = window.obj75343_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj75343_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj75343_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj75343_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj75343_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj75343_droppedInsideTargetActions_2_runningActionsCount = window.obj75343_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj75343_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj75343_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj75343_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj75343_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj75343_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75343_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj75343").trigger("obj75343_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75343) {
				console.warn("de-queueing event obj75343." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75343").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75343_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_75371();
function runjs_75371() {
	window.obj75343_droppedInsideTargetActions_2_runningActionsCount = obj75343_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj75343").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj75343_droppedInsideTargetActions_2_runningActionsCount = window.obj75343_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj75343_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj75343_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj75343_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj75343_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj75343_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75343_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj75343").trigger("obj75343_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75343) {
				console.warn("de-queueing event obj75343." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75343").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75343_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_75372();
function runjs_75372() {
	window.obj75343_droppedInsideTargetActions_2_runningActionsCount = obj75343_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj75343").css("border-color", "rgba(0,0,0,0)"); $("#obj75343").css("border-width", "0px"); $("#obj75343").css("border-style", "solid"); $("#obj75343").css("border-radius", "10px"); $("#obj75343").css("-webkit-border-radius", "10px"); $("#obj75343").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj75343_droppedInsideTargetActions_2_runningActionsCount = window.obj75343_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj75343_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj75343_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj75343_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj75343_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj75343_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75343_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj75343").trigger("obj75343_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75343) {
				console.warn("de-queueing event obj75343." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75343").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75343_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj75465 
playAudio_75373();
function playAudio_75373() {
	window.obj75343_droppedInsideTargetActions_2_runningActionsCount = obj75343_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj75465")[0];
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
		    window.obj75343_droppedInsideTargetActions_2_runningActionsCount = window.obj75343_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj75343_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj75343_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj75343_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj75343_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj75343_droppedInsideTargetActions_2_runningActionsCount = window.obj75343_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj75343_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj75343_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj75343_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj75343_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj75343_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75343_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj75343").trigger("obj75343_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75343) {
				console.warn("de-queueing event obj75343." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75343").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75343_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_75374();
function switchText_75374() {
	window.obj75343_droppedInsideTargetActions_2_runningActionsCount = obj75343_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj75482_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj75482_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj75482").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj75482_content");
			setTimeout(function () {
				window.obj75343_droppedInsideTargetActions_2_runningActionsCount = window.obj75343_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj75343_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj75343_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj75343_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj75343_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj75482 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj75343_droppedInsideTargetActions_2_runningActionsCount = window.obj75343_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj75343_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj75343_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj75343_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj75343_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj75343_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj75343_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj75343").trigger("obj75343_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75343) {
				console.warn("de-queueing event obj75343." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75343").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75343_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj75343_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75343_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj75343").trigger("obj75343_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75343) {
				console.warn("de-queueing event obj75343." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75343").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75343_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_75348();
function runjs_75348() {
	window.obj75343_droppedInsideTargetActions_runningActionsCount = obj75343_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj75478").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj75343_droppedInsideTargetActions_runningActionsCount = window.obj75343_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj75343_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj75343_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj75343_droppedInsideTargetActions_runningActionsCount == 0) {
	obj75343_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj75343_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75343_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj75343").trigger("obj75343_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75343) {
				console.warn("de-queueing event obj75343." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75343").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75343_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_75349();
function runjs_75349() {
	window.obj75343_droppedInsideTargetActions_runningActionsCount = obj75343_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj75478").css("border-color", "#C00000"); $("#obj75478").css("border-width", "2px"); $("#obj75478").css("border-style", "solid"); $("#obj75478").css("border-radius", "10px"); $("#obj75478").css("-webkit-border-radius", "10px"); $("#obj75478").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj75343_droppedInsideTargetActions_runningActionsCount = window.obj75343_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj75343_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj75343_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj75343_droppedInsideTargetActions_runningActionsCount == 0) {
	obj75343_droppedInsideTargetActions_actionGroup2();
}
	}, 1);
}







};
obj75343_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75343_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj75343").trigger("obj75343_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75343) {
				console.warn("de-queueing event obj75343." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75343").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75343_droppedInsideTargetActions_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj75476 
hide_75350();
function hide_75350() {
	var selector = "#obj75476";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj75343_droppedInsideTargetActions_runningActionsCount = obj75343_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj75343_droppedInsideTargetActions_runningActionsCount = window.obj75343_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj75343_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj75343_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj75343_droppedInsideTargetActions_runningActionsCount == 0) {
	obj75343_droppedInsideTargetActions_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_75350(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj75343_droppedInsideTargetActions_runningActionsCount = window.obj75343_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj75343_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj75343_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj75343_droppedInsideTargetActions_runningActionsCount == 0) {
	obj75343_droppedInsideTargetActions_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj75343_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75343_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj75343").trigger("obj75343_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75343) {
				console.warn("de-queueing event obj75343." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75343").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75343_droppedInsideTargetActions_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_75351();
function runjs_75351() {
	window.obj75343_droppedInsideTargetActions_runningActionsCount = obj75343_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj75343").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj75343_droppedInsideTargetActions_runningActionsCount = window.obj75343_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj75343_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj75343_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj75343_droppedInsideTargetActions_runningActionsCount == 0) {
	obj75343_droppedInsideTargetActions_actionGroup4();
}
	}, 1);
}







};
obj75343_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75343_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj75343").trigger("obj75343_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75343) {
				console.warn("de-queueing event obj75343." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75343").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75343_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_75352();
function switchText_75352() {
	window.obj75343_droppedInsideTargetActions_runningActionsCount = obj75343_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj75482_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj75482_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj75482").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj75482_content");
			setTimeout(function () {
				window.obj75343_droppedInsideTargetActions_runningActionsCount = window.obj75343_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj75343_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj75343_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj75343_droppedInsideTargetActions_runningActionsCount == 0) {
	obj75343_droppedInsideTargetActions_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj75482 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj75343_droppedInsideTargetActions_runningActionsCount = window.obj75343_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj75343_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj75343_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj75343_droppedInsideTargetActions_runningActionsCount == 0) {
	obj75343_droppedInsideTargetActions_actionGroup5();
}
		}, 1);
	}
}






};
obj75343_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75343_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj75343").trigger("obj75343_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75343) {
				console.warn("de-queueing event obj75343." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75343").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75343_droppedInsideTargetActions_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj75343 
move_75353();
function move_75353() {
	window.obj75343_droppedInsideTargetActions_runningActionsCount = obj75343_droppedInsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj75343");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 329;
	var moveY = 569;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj75343_droppedInsideTargetActions_runningActionsCount = window.obj75343_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj75343_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj75343_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj75343_droppedInsideTargetActions_runningActionsCount == 0) {
	obj75343_droppedInsideTargetActions_actionGroup6();
}
		}, 1);
	});
}



















};
obj75343_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75343_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj75343").trigger("obj75343_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75343) {
				console.warn("de-queueing event obj75343." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75343").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75343_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_75354();
function runjs_75354() {
	window.obj75343_droppedInsideTargetActions_runningActionsCount = obj75343_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj75478").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj75343_droppedInsideTargetActions_runningActionsCount = window.obj75343_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj75343_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj75343_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj75343_droppedInsideTargetActions_runningActionsCount == 0) {
	obj75343_droppedInsideTargetActions_actionGroup7();
}
	}, 1);
}







};
obj75343_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75343_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj75343").trigger("obj75343_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75343) {
				console.warn("de-queueing event obj75343." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75343").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75343_droppedInsideTargetActions_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_75355();
function runjs_75355() {
	window.obj75343_droppedInsideTargetActions_runningActionsCount = obj75343_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj75478").css("border-color", "#000000"); $("#obj75478").css("border-width", "1px"); $("#obj75478").css("border-style", "solid"); $("#obj75478").css("border-radius", "10px"); $("#obj75478").css("-webkit-border-radius", "10px"); $("#obj75478").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj75343_droppedInsideTargetActions_runningActionsCount = window.obj75343_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj75343_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj75343_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj75343_droppedInsideTargetActions_runningActionsCount == 0) {
	obj75343_droppedInsideTargetActions_actionGroup8();
}
	}, 1);
}







};
obj75343_droppedInsideTargetActions_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75343_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj75343").trigger("obj75343_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75343) {
				console.warn("de-queueing event obj75343." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75343").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75343_droppedInsideTargetActions_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj75482
(function(){
	window.obj75343_droppedInsideTargetActions_runningActionsCount = obj75343_droppedInsideTargetActions_runningActionsCount + 1;

	var selector = "#obj75482";
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
					window.obj75343_droppedInsideTargetActions_runningActionsCount = window.obj75343_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj75343_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj75343_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj75343_droppedInsideTargetActions_runningActionsCount == 0) {
	obj75343_droppedInsideTargetActions_actionGroup9();
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
				window.obj75343_droppedInsideTargetActions_runningActionsCount = window.obj75343_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj75343_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj75343_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj75343_droppedInsideTargetActions_runningActionsCount == 0) {
	obj75343_droppedInsideTargetActions_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj75343_droppedInsideTargetActions_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75343_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj75343").trigger("obj75343_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75343) {
				console.warn("de-queueing event obj75343." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75343").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75343_droppedInsideTargetActions_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_75357();
function runjs_75357() {
	window.obj75343_droppedInsideTargetActions_runningActionsCount = obj75343_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj75343").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj75343_droppedInsideTargetActions_runningActionsCount = window.obj75343_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj75343_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj75343_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj75343_droppedInsideTargetActions_runningActionsCount == 0) {
	obj75343_droppedInsideTargetActions_actionGroup10();
}
	}, 1);
}







};
obj75343_droppedInsideTargetActions_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75343_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj75343").trigger("obj75343_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75343) {
				console.warn("de-queueing event obj75343." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75343").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75343_droppedInsideTargetActions_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_75358();
function runjs_75358() {
	window.obj75343_droppedInsideTargetActions_runningActionsCount = obj75343_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj75343").css("border-color", "rgba(0,0,0,0)"); $("#obj75343").css("border-width", "0px"); $("#obj75343").css("border-style", "solid"); $("#obj75343").css("border-radius", "10px"); $("#obj75343").css("-webkit-border-radius", "10px"); $("#obj75343").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj75343_droppedInsideTargetActions_runningActionsCount = window.obj75343_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj75343_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj75343_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj75343_droppedInsideTargetActions_runningActionsCount == 0) {
	obj75343_droppedInsideTargetActions_actionGroup11();
}
	}, 1);
}







};
obj75343_droppedInsideTargetActions_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75343_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj75343").trigger("obj75343_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75343) {
				console.warn("de-queueing event obj75343." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75343").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75343_droppedInsideTargetActions_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj75465 
playAudio_75359();
function playAudio_75359() {
	window.obj75343_droppedInsideTargetActions_runningActionsCount = obj75343_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj75465")[0];
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
		    window.obj75343_droppedInsideTargetActions_runningActionsCount = window.obj75343_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj75343_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj75343_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj75343_droppedInsideTargetActions_runningActionsCount == 0) {
	obj75343_droppedInsideTargetActions_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj75343_droppedInsideTargetActions_runningActionsCount = window.obj75343_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj75343_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj75343_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj75343_droppedInsideTargetActions_runningActionsCount == 0) {
	obj75343_droppedInsideTargetActions_actionGroup12();
}
	}
}









};
obj75343_droppedInsideTargetActions_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75343_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj75343").trigger("obj75343_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75343) {
				console.warn("de-queueing event obj75343." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75343").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75343_droppedInsideTargetActions_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_75360();
function switchText_75360() {
	window.obj75343_droppedInsideTargetActions_runningActionsCount = obj75343_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj75482_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj75482_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj75482").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj75482_content");
			setTimeout(function () {
				window.obj75343_droppedInsideTargetActions_runningActionsCount = window.obj75343_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj75343_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj75343_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj75343_droppedInsideTargetActions_runningActionsCount == 0) {
	obj75343_droppedInsideTargetActions_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj75482 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj75343_droppedInsideTargetActions_runningActionsCount = window.obj75343_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj75343_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj75343_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj75343_droppedInsideTargetActions_runningActionsCount == 0) {
	obj75343_droppedInsideTargetActions_actionGroup13();
}
		}, 1);
	}
}






};
obj75343_droppedInsideTargetActions_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj75343_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj75343").trigger("obj75343_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75343) {
				console.warn("de-queueing event obj75343." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75343").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75343_droppedInsideTargetActions_activeActionGroupIndex = 13;
	





















};
obj75325_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75325_onTap_activeActionGroupIndex = -1;
		$("#obj75325").trigger("obj75325_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75325) {
				console.warn("de-queueing event obj75325." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75325").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75325_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj75325 
hide_75328();
function hide_75328() {
	var selector = "#obj75325";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj75325_onTap_runningActionsCount = obj75325_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj75325_onTap_runningActionsCount = window.obj75325_onTap_runningActionsCount - 1;
if (window.obj75325_onTap_runningActionsCount < 0) {
	window.obj75325_onTap_runningActionsCount = 0;
} else if (window.obj75325_onTap_runningActionsCount == 0) {
	obj75325_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_75328(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj75325_onTap_runningActionsCount = window.obj75325_onTap_runningActionsCount - 1;
if (window.obj75325_onTap_runningActionsCount < 0) {
	window.obj75325_onTap_runningActionsCount = 0;
} else if (window.obj75325_onTap_runningActionsCount == 0) {
	obj75325_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj75315 
stopMovie_75327();
function stopMovie_75327() {
	window.obj75325_onTap_runningActionsCount = obj75325_onTap_runningActionsCount + 1;
	var myVideo = $("#obj75315")[0];
	myVideo.pause();
	window.obj75325_onTap_runningActionsCount = window.obj75325_onTap_runningActionsCount - 1;
if (window.obj75325_onTap_runningActionsCount < 0) {
	window.obj75325_onTap_runningActionsCount = 0;
} else if (window.obj75325_onTap_runningActionsCount == 0) {
	obj75325_onTap_actionGroup1();
}
}
















};
obj75325_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75325_onTap_activeActionGroupIndex = -1;
		$("#obj75325").trigger("obj75325_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75325) {
				console.warn("de-queueing event obj75325." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75325").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75325_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj75317
(function(){
	window.obj75325_onTap_runningActionsCount = obj75325_onTap_runningActionsCount + 1;

	var selector = "#obj75317";
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
					window.obj75325_onTap_runningActionsCount = window.obj75325_onTap_runningActionsCount - 1;
if (window.obj75325_onTap_runningActionsCount < 0) {
	window.obj75325_onTap_runningActionsCount = 0;
} else if (window.obj75325_onTap_runningActionsCount == 0) {
	obj75325_onTap_actionGroup2();
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
				window.obj75325_onTap_runningActionsCount = window.obj75325_onTap_runningActionsCount - 1;
if (window.obj75325_onTap_runningActionsCount < 0) {
	window.obj75325_onTap_runningActionsCount = 0;
} else if (window.obj75325_onTap_runningActionsCount == 0) {
	obj75325_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj75325_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75325_onTap_activeActionGroupIndex = -1;
		$("#obj75325").trigger("obj75325_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75325) {
				console.warn("de-queueing event obj75325." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75325").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75325_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj75315 
move_75330();
function move_75330() {
	window.obj75325_onTap_runningActionsCount = obj75325_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj75315");
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
			window.obj75325_onTap_runningActionsCount = window.obj75325_onTap_runningActionsCount - 1;
if (window.obj75325_onTap_runningActionsCount < 0) {
	window.obj75325_onTap_runningActionsCount = 0;
} else if (window.obj75325_onTap_runningActionsCount == 0) {
	obj75325_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj75325_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj75325_onTap_activeActionGroupIndex = -1;
		$("#obj75325").trigger("obj75325_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75325) {
				console.warn("de-queueing event obj75325." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75325").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75325_onTap_activeActionGroupIndex = 3;
	





















};
obj75317_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75317_onTap_activeActionGroupIndex = -1;
		$("#obj75317").trigger("obj75317_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75317) {
				console.warn("de-queueing event obj75317." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75317").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75317_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj75317 
hide_75320();
function hide_75320() {
	var selector = "#obj75317";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj75317_onTap_runningActionsCount = obj75317_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj75317_onTap_runningActionsCount = window.obj75317_onTap_runningActionsCount - 1;
if (window.obj75317_onTap_runningActionsCount < 0) {
	window.obj75317_onTap_runningActionsCount = 0;
} else if (window.obj75317_onTap_runningActionsCount == 0) {
	obj75317_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_75320(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj75317_onTap_runningActionsCount = window.obj75317_onTap_runningActionsCount - 1;
if (window.obj75317_onTap_runningActionsCount < 0) {
	window.obj75317_onTap_runningActionsCount = 0;
} else if (window.obj75317_onTap_runningActionsCount == 0) {
	obj75317_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj75315 
playPauseMovie_75319();
function playPauseMovie_75319() {
	window.obj75317_onTap_runningActionsCount = obj75317_onTap_runningActionsCount + 1;
	var myVideo = $("#obj75315")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj75317_onTap_runningActionsCount = window.obj75317_onTap_runningActionsCount - 1;
if (window.obj75317_onTap_runningActionsCount < 0) {
	window.obj75317_onTap_runningActionsCount = 0;
} else if (window.obj75317_onTap_runningActionsCount == 0) {
	obj75317_onTap_actionGroup1();
}
}

















};
obj75317_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75317_onTap_activeActionGroupIndex = -1;
		$("#obj75317").trigger("obj75317_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75317) {
				console.warn("de-queueing event obj75317." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75317").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75317_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj75325
(function(){
	window.obj75317_onTap_runningActionsCount = obj75317_onTap_runningActionsCount + 1;

	var selector = "#obj75325";
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
					window.obj75317_onTap_runningActionsCount = window.obj75317_onTap_runningActionsCount - 1;
if (window.obj75317_onTap_runningActionsCount < 0) {
	window.obj75317_onTap_runningActionsCount = 0;
} else if (window.obj75317_onTap_runningActionsCount == 0) {
	obj75317_onTap_actionGroup2();
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
				window.obj75317_onTap_runningActionsCount = window.obj75317_onTap_runningActionsCount - 1;
if (window.obj75317_onTap_runningActionsCount < 0) {
	window.obj75317_onTap_runningActionsCount = 0;
} else if (window.obj75317_onTap_runningActionsCount == 0) {
	obj75317_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj75317_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75317_onTap_activeActionGroupIndex = -1;
		$("#obj75317").trigger("obj75317_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75317) {
				console.warn("de-queueing event obj75317." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75317").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75317_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj75315 
move_75322();
function move_75322() {
	window.obj75317_onTap_runningActionsCount = obj75317_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj75315");
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
			window.obj75317_onTap_runningActionsCount = window.obj75317_onTap_runningActionsCount - 1;
if (window.obj75317_onTap_runningActionsCount < 0) {
	window.obj75317_onTap_runningActionsCount = 0;
} else if (window.obj75317_onTap_runningActionsCount == 0) {
	obj75317_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj75317_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj75317_onTap_activeActionGroupIndex = -1;
		$("#obj75317").trigger("obj75317_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75317) {
				console.warn("de-queueing event obj75317." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75317").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75317_onTap_activeActionGroupIndex = 3;
	





















};
obj87687_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87687_onTap_activeActionGroupIndex = -1;
		$("#obj87687").trigger("obj87687_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87687) {
				console.warn("de-queueing event obj87687." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87687").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87687_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj87692 
stopAudio_87689();
function stopAudio_87689() {
	window.obj87687_onTap_runningActionsCount = obj87687_onTap_runningActionsCount + 1;
	var myAudio = $("#obj87692")[0];
	myAudio.pause();
	window.obj87687_onTap_runningActionsCount = window.obj87687_onTap_runningActionsCount - 1;
if (window.obj87687_onTap_runningActionsCount < 0) {
	window.obj87687_onTap_runningActionsCount = 0;
} else if (window.obj87687_onTap_runningActionsCount == 0) {
	obj87687_onTap_actionGroup1();
}
}








};
obj87687_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87687_onTap_activeActionGroupIndex = -1;
		$("#obj87687").trigger("obj87687_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87687) {
				console.warn("de-queueing event obj87687." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87687").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87687_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj87687 
hide_87690();
function hide_87690() {
	var selector = "#obj87687";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj87687_onTap_runningActionsCount = obj87687_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj87687_onTap_runningActionsCount = window.obj87687_onTap_runningActionsCount - 1;
if (window.obj87687_onTap_runningActionsCount < 0) {
	window.obj87687_onTap_runningActionsCount = 0;
} else if (window.obj87687_onTap_runningActionsCount == 0) {
	obj87687_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_87690(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj87687_onTap_runningActionsCount = window.obj87687_onTap_runningActionsCount - 1;
if (window.obj87687_onTap_runningActionsCount < 0) {
	window.obj87687_onTap_runningActionsCount = 0;
} else if (window.obj87687_onTap_runningActionsCount == 0) {
	obj87687_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj87687_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87687_onTap_activeActionGroupIndex = -1;
		$("#obj87687").trigger("obj87687_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87687) {
				console.warn("de-queueing event obj87687." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87687").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87687_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj87682
(function(){
	window.obj87687_onTap_runningActionsCount = obj87687_onTap_runningActionsCount + 1;

	var selector = "#obj87682";
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
					window.obj87687_onTap_runningActionsCount = window.obj87687_onTap_runningActionsCount - 1;
if (window.obj87687_onTap_runningActionsCount < 0) {
	window.obj87687_onTap_runningActionsCount = 0;
} else if (window.obj87687_onTap_runningActionsCount == 0) {
	obj87687_onTap_actionGroup3();
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
				window.obj87687_onTap_runningActionsCount = window.obj87687_onTap_runningActionsCount - 1;
if (window.obj87687_onTap_runningActionsCount < 0) {
	window.obj87687_onTap_runningActionsCount = 0;
} else if (window.obj87687_onTap_runningActionsCount == 0) {
	obj87687_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj87687_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj87687_onTap_activeActionGroupIndex = -1;
		$("#obj87687").trigger("obj87687_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87687) {
				console.warn("de-queueing event obj87687." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87687").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87687_onTap_activeActionGroupIndex = 3;
	





















};
obj87682_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87682_onTap_activeActionGroupIndex = -1;
		$("#obj87682").trigger("obj87682_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87682) {
				console.warn("de-queueing event obj87682." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87682").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87682_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj87682 
hide_87684();
function hide_87684() {
	var selector = "#obj87682";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj87682_onTap_runningActionsCount = obj87682_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj87682_onTap_runningActionsCount = window.obj87682_onTap_runningActionsCount - 1;
if (window.obj87682_onTap_runningActionsCount < 0) {
	window.obj87682_onTap_runningActionsCount = 0;
} else if (window.obj87682_onTap_runningActionsCount == 0) {
	obj87682_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_87684(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj87682_onTap_runningActionsCount = window.obj87682_onTap_runningActionsCount - 1;
if (window.obj87682_onTap_runningActionsCount < 0) {
	window.obj87682_onTap_runningActionsCount = 0;
} else if (window.obj87682_onTap_runningActionsCount == 0) {
	obj87682_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj87682_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87682_onTap_activeActionGroupIndex = -1;
		$("#obj87682").trigger("obj87682_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87682) {
				console.warn("de-queueing event obj87682." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87682").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87682_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj87687
(function(){
	window.obj87682_onTap_runningActionsCount = obj87682_onTap_runningActionsCount + 1;

	var selector = "#obj87687";
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
					window.obj87682_onTap_runningActionsCount = window.obj87682_onTap_runningActionsCount - 1;
if (window.obj87682_onTap_runningActionsCount < 0) {
	window.obj87682_onTap_runningActionsCount = 0;
} else if (window.obj87682_onTap_runningActionsCount == 0) {
	obj87682_onTap_actionGroup2();
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
				window.obj87682_onTap_runningActionsCount = window.obj87682_onTap_runningActionsCount - 1;
if (window.obj87682_onTap_runningActionsCount < 0) {
	window.obj87682_onTap_runningActionsCount = 0;
} else if (window.obj87682_onTap_runningActionsCount == 0) {
	obj87682_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj87682_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87682_onTap_activeActionGroupIndex = -1;
		$("#obj87682").trigger("obj87682_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87682) {
				console.warn("de-queueing event obj87682." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87682").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87682_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj87692 
playAudio_87686();
function playAudio_87686() {
	window.obj87682_onTap_runningActionsCount = obj87682_onTap_runningActionsCount + 1;
	var myAudio = $("#obj87692")[0];
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
		    window.obj87682_onTap_runningActionsCount = window.obj87682_onTap_runningActionsCount - 1;
if (window.obj87682_onTap_runningActionsCount < 0) {
	window.obj87682_onTap_runningActionsCount = 0;
} else if (window.obj87682_onTap_runningActionsCount == 0) {
	obj87682_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj87682_onTap_runningActionsCount = window.obj87682_onTap_runningActionsCount - 1;
if (window.obj87682_onTap_runningActionsCount < 0) {
	window.obj87682_onTap_runningActionsCount = 0;
} else if (window.obj87682_onTap_runningActionsCount == 0) {
	obj87682_onTap_actionGroup3();
}
	}
}









};
obj87682_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj87682_onTap_activeActionGroupIndex = -1;
		$("#obj87682").trigger("obj87682_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87682) {
				console.warn("de-queueing event obj87682." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87682").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87682_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj75501: Event Touch Down
 *
 */
$("#obj75501").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj75501_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj75501_onTap is still running");
	return;
}
var obj75501_onTap_runningActionsCount = 0;
var obj75501_onTap_loopCount = 0;
obj75501_onTap_actionGroup0();
});










/*
 *
 *   obj75498: Event Touch Down
 *
 */
$("#obj75498").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj75498_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj75498_onTap is still running");
	return;
}
var obj75498_onTap_runningActionsCount = 0;
var obj75498_onTap_loopCount = 0;
obj75498_onTap_actionGroup0();
});










/*
 *
 *   obj75494: Event Touch Down
 *
 */
$("#obj75494").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj75494_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj75494_onTap is still running");
	return;
}
var obj75494_onTap_runningActionsCount = 0;
var obj75494_onTap_loopCount = 0;
obj75494_onTap_actionGroup0();
});











































































































































































/*
 *
 *   obj75439: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj75439");
	var winTarget = document.getElementById("obj75439");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj75439").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj75439_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj75439_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj75439_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj75439_onTouchDown is still running");
	return;
}
var obj75439_onTouchDown_runningActionsCount = 0;
var obj75439_onTouchDown_loopCount = 0;
obj75439_onTouchDown_actionGroup0();
});



/*
 *
 *   obj75439: Event SCActionDragDrop75442_droppedOutsideTargetActions
 *
 */
$("#obj75439").bind("SCActionDragDrop75442_droppedOutsideTargetActions", function(event) {
	if (window.obj75439_SCActionDragDrop75442_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj75439_SCActionDragDrop75442_droppedOutsideTargetActions is still running");
	return;
}
var obj75439_SCActionDragDrop75442_droppedOutsideTargetActions_runningActionsCount = 0;
var obj75439_SCActionDragDrop75442_droppedOutsideTargetActions_loopCount = 0;
obj75439_SCActionDragDrop75442_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj75439: Event droppedInsideTargetActions_3
 *
 */
$("#obj75439").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj75439_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj75439_droppedInsideTargetActions_3 is still running");
	return;
}
var obj75439_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj75439_droppedInsideTargetActions_3_loopCount = 0;
obj75439_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj75439: Event droppedInsideTargetActions_2
 *
 */
$("#obj75439").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj75439_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj75439_droppedInsideTargetActions_2 is still running");
	return;
}
var obj75439_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj75439_droppedInsideTargetActions_2_loopCount = 0;
obj75439_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj75439: Event droppedInsideTargetActions
 *
 */
$("#obj75439").bind("droppedInsideTargetActions", function(event) {
	if (window.obj75439_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj75439_droppedInsideTargetActions is still running");
	return;
}
var obj75439_droppedInsideTargetActions_runningActionsCount = 0;
var obj75439_droppedInsideTargetActions_loopCount = 0;
obj75439_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj75414: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj75414");
	var winTarget = document.getElementById("obj75414");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj75414").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj75414_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj75414_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj75414_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj75414_onTouchDown is still running");
	return;
}
var obj75414_onTouchDown_runningActionsCount = 0;
var obj75414_onTouchDown_loopCount = 0;
obj75414_onTouchDown_actionGroup0();
});



/*
 *
 *   obj75414: Event SCActionDragDrop75417_droppedOutsideTargetActions
 *
 */
$("#obj75414").bind("SCActionDragDrop75417_droppedOutsideTargetActions", function(event) {
	if (window.obj75414_SCActionDragDrop75417_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj75414_SCActionDragDrop75417_droppedOutsideTargetActions is still running");
	return;
}
var obj75414_SCActionDragDrop75417_droppedOutsideTargetActions_runningActionsCount = 0;
var obj75414_SCActionDragDrop75417_droppedOutsideTargetActions_loopCount = 0;
obj75414_SCActionDragDrop75417_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj75414: Event droppedInsideTargetActions_3
 *
 */
$("#obj75414").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj75414_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj75414_droppedInsideTargetActions_3 is still running");
	return;
}
var obj75414_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj75414_droppedInsideTargetActions_3_loopCount = 0;
obj75414_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj75414: Event droppedInsideTargetActions_2
 *
 */
$("#obj75414").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj75414_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj75414_droppedInsideTargetActions_2 is still running");
	return;
}
var obj75414_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj75414_droppedInsideTargetActions_2_loopCount = 0;
obj75414_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj75414: Event droppedInsideTargetActions
 *
 */
$("#obj75414").bind("droppedInsideTargetActions", function(event) {
	if (window.obj75414_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj75414_droppedInsideTargetActions is still running");
	return;
}
var obj75414_droppedInsideTargetActions_runningActionsCount = 0;
var obj75414_droppedInsideTargetActions_loopCount = 0;
obj75414_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj75389: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj75389");
	var winTarget = document.getElementById("obj75389");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj75389").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj75389_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj75389_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj75389_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj75389_onTouchDown is still running");
	return;
}
var obj75389_onTouchDown_runningActionsCount = 0;
var obj75389_onTouchDown_loopCount = 0;
obj75389_onTouchDown_actionGroup0();
});



/*
 *
 *   obj75389: Event SCActionDragDrop75392_droppedOutsideTargetActions
 *
 */
$("#obj75389").bind("SCActionDragDrop75392_droppedOutsideTargetActions", function(event) {
	if (window.obj75389_SCActionDragDrop75392_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj75389_SCActionDragDrop75392_droppedOutsideTargetActions is still running");
	return;
}
var obj75389_SCActionDragDrop75392_droppedOutsideTargetActions_runningActionsCount = 0;
var obj75389_SCActionDragDrop75392_droppedOutsideTargetActions_loopCount = 0;
obj75389_SCActionDragDrop75392_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj75389: Event droppedInsideTargetActions_3
 *
 */
$("#obj75389").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj75389_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj75389_droppedInsideTargetActions_3 is still running");
	return;
}
var obj75389_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj75389_droppedInsideTargetActions_3_loopCount = 0;
obj75389_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj75389: Event droppedInsideTargetActions_2
 *
 */
$("#obj75389").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj75389_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj75389_droppedInsideTargetActions_2 is still running");
	return;
}
var obj75389_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj75389_droppedInsideTargetActions_2_loopCount = 0;
obj75389_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj75389: Event droppedInsideTargetActions
 *
 */
$("#obj75389").bind("droppedInsideTargetActions", function(event) {
	if (window.obj75389_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj75389_droppedInsideTargetActions is still running");
	return;
}
var obj75389_droppedInsideTargetActions_runningActionsCount = 0;
var obj75389_droppedInsideTargetActions_loopCount = 0;
obj75389_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj75343: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj75343");
	var winTarget = document.getElementById("obj75343");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj75343").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj75343_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj75343_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj75343_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj75343_onTouchDown is still running");
	return;
}
var obj75343_onTouchDown_runningActionsCount = 0;
var obj75343_onTouchDown_loopCount = 0;
obj75343_onTouchDown_actionGroup0();
});



/*
 *
 *   obj75343: Event SCActionDragDrop75346_droppedOutsideTargetActions
 *
 */
$("#obj75343").bind("SCActionDragDrop75346_droppedOutsideTargetActions", function(event) {
	if (window.obj75343_SCActionDragDrop75346_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj75343_SCActionDragDrop75346_droppedOutsideTargetActions is still running");
	return;
}
var obj75343_SCActionDragDrop75346_droppedOutsideTargetActions_runningActionsCount = 0;
var obj75343_SCActionDragDrop75346_droppedOutsideTargetActions_loopCount = 0;
obj75343_SCActionDragDrop75346_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj75343: Event droppedInsideTargetActions_3
 *
 */
$("#obj75343").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj75343_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj75343_droppedInsideTargetActions_3 is still running");
	return;
}
var obj75343_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj75343_droppedInsideTargetActions_3_loopCount = 0;
obj75343_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj75343: Event droppedInsideTargetActions_2
 *
 */
$("#obj75343").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj75343_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj75343_droppedInsideTargetActions_2 is still running");
	return;
}
var obj75343_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj75343_droppedInsideTargetActions_2_loopCount = 0;
obj75343_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj75343: Event droppedInsideTargetActions
 *
 */
$("#obj75343").bind("droppedInsideTargetActions", function(event) {
	if (window.obj75343_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj75343_droppedInsideTargetActions is still running");
	return;
}
var obj75343_droppedInsideTargetActions_runningActionsCount = 0;
var obj75343_droppedInsideTargetActions_loopCount = 0;
obj75343_droppedInsideTargetActions_actionGroup0();
});





/*
 *
 *   obj75325: Event Touch Down
 *
 */
$("#obj75325").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj75325_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj75325_onTap is still running");
	return;
}
var obj75325_onTap_runningActionsCount = 0;
var obj75325_onTap_loopCount = 0;
obj75325_onTap_actionGroup0();
});










/*
 *
 *   obj75317: Event Touch Down
 *
 */
$("#obj75317").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj75317_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj75317_onTap is still running");
	return;
}
var obj75317_onTap_runningActionsCount = 0;
var obj75317_onTap_loopCount = 0;
obj75317_onTap_actionGroup0();
});










/*
 *
 *   obj87687: Event Touch Down
 *
 */
$("#obj87687").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj87687_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj87687_onTap is still running");
	return;
}
var obj87687_onTap_runningActionsCount = 0;
var obj87687_onTap_loopCount = 0;
obj87687_onTap_actionGroup0();
});










/*
 *
 *   obj87682: Event Touch Down
 *
 */
$("#obj87682").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj87682_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj87682_onTap is still running");
	return;
}
var obj87682_onTap_runningActionsCount = 0;
var obj87682_onTap_loopCount = 0;
obj87682_onTap_actionGroup0();
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
	
$("#obj75504").trigger('SCEventShow');
$("#obj75501").trigger('SCEventShow');
$("#obj75498").trigger('SCEventShow');
$("#obj75494").trigger('SCEventShow');
$("#obj75492").trigger('SCEventShow');
$("#obj75490").trigger('SCEventShow');
$("#obj75488").trigger('SCEventShow');
$("#obj75486").trigger('SCEventShow');
$("#obj75484").trigger('SCEventShow');
$("#obj75482").trigger('SCEventShow');
$("#obj75480").trigger('SCEventShow');
$("#obj75478").trigger('SCEventShow');
$("#obj75476").trigger('SCEventShow');
$("#obj75474").trigger('SCEventShow');
$("#obj75472").trigger('SCEventShow');
$("#obj75470").trigger('SCEventShow');
$("#obj75468").trigger('SCEventShow');
$("#obj75466").trigger('SCEventShow');
$("#obj75465").trigger('SCEventShow');
$("#obj75464").trigger('SCEventShow');
$("#obj75439").trigger('SCEventShow');
$("#obj75414").trigger('SCEventShow');
$("#obj75389").trigger('SCEventShow');
$("#obj75343").trigger('SCEventShow');
$("#obj75325").trigger('SCEventShow');
$("#obj75317").trigger('SCEventShow');
$("#obj87687").trigger('SCEventShow');
$("#obj87682").trigger('SCEventShow');
$("#obj87692").trigger('SCEventShow');
$("#obj94771").trigger('SCEventShow');
$("#obj75315").trigger('SCEventShow');
	
});