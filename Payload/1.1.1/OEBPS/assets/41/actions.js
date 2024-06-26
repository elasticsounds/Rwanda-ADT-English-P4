pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 8441;
pubcoder.page.title = pubcoder.page.title || "41";
pubcoder.page.number = pubcoder.page.number || 41;
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
var obj69578_onTap_activeActionGroupIndex = -1;
var obj69578_onTap_runningActionsCount = 0;
var obj69578_onTap_loopCount = 0;
var obj69575_onTap_activeActionGroupIndex = -1;
var obj69575_onTap_runningActionsCount = 0;
var obj69575_onTap_loopCount = 0;
var obj69571_onTap_activeActionGroupIndex = -1;
var obj69571_onTap_runningActionsCount = 0;
var obj69571_onTap_loopCount = 0;
var obj69492_onDrag_activeActionGroupIndex = -1;
var obj69492_onDrag_runningActionsCount = 0;
var obj69492_onDrag_loopCount = 0;
var obj69492_onTouchDown_activeActionGroupIndex = -1;
var obj69492_onTouchDown_runningActionsCount = 0;
var obj69492_onTouchDown_loopCount = 0;
var obj69492_SCActionDragDrop69495_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj69492_SCActionDragDrop69495_droppedOutsideTargetActions_runningActionsCount = 0;
var obj69492_SCActionDragDrop69495_droppedOutsideTargetActions_loopCount = 0;
var obj69492_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj69492_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj69492_droppedInsideTargetActions_3_loopCount = 0;
var obj69492_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj69492_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj69492_droppedInsideTargetActions_2_loopCount = 0;
var obj69492_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj69492_droppedInsideTargetActions_runningActionsCount = 0;
var obj69492_droppedInsideTargetActions_loopCount = 0;
var obj69453_onDrag_activeActionGroupIndex = -1;
var obj69453_onDrag_runningActionsCount = 0;
var obj69453_onDrag_loopCount = 0;
var obj69453_onTouchDown_activeActionGroupIndex = -1;
var obj69453_onTouchDown_runningActionsCount = 0;
var obj69453_onTouchDown_loopCount = 0;
var obj69453_SCActionDragDrop69456_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj69453_SCActionDragDrop69456_droppedOutsideTargetActions_runningActionsCount = 0;
var obj69453_SCActionDragDrop69456_droppedOutsideTargetActions_loopCount = 0;
var obj69453_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj69453_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj69453_droppedInsideTargetActions_3_loopCount = 0;
var obj69453_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj69453_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj69453_droppedInsideTargetActions_2_loopCount = 0;
var obj69453_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj69453_droppedInsideTargetActions_runningActionsCount = 0;
var obj69453_droppedInsideTargetActions_loopCount = 0;
var obj69414_onDrag_activeActionGroupIndex = -1;
var obj69414_onDrag_runningActionsCount = 0;
var obj69414_onDrag_loopCount = 0;
var obj69414_onTouchDown_activeActionGroupIndex = -1;
var obj69414_onTouchDown_runningActionsCount = 0;
var obj69414_onTouchDown_loopCount = 0;
var obj69414_SCActionDragDrop69417_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj69414_SCActionDragDrop69417_droppedOutsideTargetActions_runningActionsCount = 0;
var obj69414_SCActionDragDrop69417_droppedOutsideTargetActions_loopCount = 0;
var obj69414_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj69414_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj69414_droppedInsideTargetActions_3_loopCount = 0;
var obj69414_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj69414_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj69414_droppedInsideTargetActions_2_loopCount = 0;
var obj69414_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj69414_droppedInsideTargetActions_runningActionsCount = 0;
var obj69414_droppedInsideTargetActions_loopCount = 0;
var obj69396_onTap_activeActionGroupIndex = -1;
var obj69396_onTap_runningActionsCount = 0;
var obj69396_onTap_loopCount = 0;
var obj69388_onTap_activeActionGroupIndex = -1;
var obj69388_onTap_runningActionsCount = 0;
var obj69388_onTap_loopCount = 0;
var obj87226_onTap_activeActionGroupIndex = -1;
var obj87226_onTap_runningActionsCount = 0;
var obj87226_onTap_loopCount = 0;
var obj87221_onTap_activeActionGroupIndex = -1;
var obj87221_onTap_runningActionsCount = 0;
var obj87221_onTap_loopCount = 0;
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
		
obj69578_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69578_onTap_activeActionGroupIndex = -1;
		$("#obj69578").trigger("obj69578_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69578) {
				console.warn("de-queueing event obj69578." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69578").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69578_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_69580();
function goToPage_69580() {
	window.obj69578_onTap_runningActionsCount = obj69578_onTap_runningActionsCount + 1;
	$("#anchor247")[0].click();
	window.obj69578_onTap_runningActionsCount = window.obj69578_onTap_runningActionsCount - 1;
if (window.obj69578_onTap_runningActionsCount < 0) {
	window.obj69578_onTap_runningActionsCount = 0;
} else if (window.obj69578_onTap_runningActionsCount == 0) {
	obj69578_onTap_actionGroup1();
}
}





















};
obj69578_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj69578_onTap_activeActionGroupIndex = -1;
		$("#obj69578").trigger("obj69578_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69578) {
				console.warn("de-queueing event obj69578." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69578").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69578_onTap_activeActionGroupIndex = 1;
	





















};
obj69575_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69575_onTap_activeActionGroupIndex = -1;
		$("#obj69575").trigger("obj69575_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69575) {
				console.warn("de-queueing event obj69575." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69575").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69575_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_69577();
function goToPage_69577() {
	window.obj69575_onTap_runningActionsCount = obj69575_onTap_runningActionsCount + 1;
	$("#anchor248")[0].click();
	window.obj69575_onTap_runningActionsCount = window.obj69575_onTap_runningActionsCount - 1;
if (window.obj69575_onTap_runningActionsCount < 0) {
	window.obj69575_onTap_runningActionsCount = 0;
} else if (window.obj69575_onTap_runningActionsCount == 0) {
	obj69575_onTap_actionGroup1();
}
}





















};
obj69575_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj69575_onTap_activeActionGroupIndex = -1;
		$("#obj69575").trigger("obj69575_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69575) {
				console.warn("de-queueing event obj69575." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69575").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69575_onTap_activeActionGroupIndex = 1;
	





















};
obj69571_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69571_onTap_activeActionGroupIndex = -1;
		$("#obj69571").trigger("obj69571_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69571) {
				console.warn("de-queueing event obj69571." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69571").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69571_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_69573();
function goToPage_69573() {
	window.obj69571_onTap_runningActionsCount = obj69571_onTap_runningActionsCount + 1;
	$("#anchor249")[0].click();
	window.obj69571_onTap_runningActionsCount = window.obj69571_onTap_runningActionsCount - 1;
if (window.obj69571_onTap_runningActionsCount < 0) {
	window.obj69571_onTap_runningActionsCount = 0;
} else if (window.obj69571_onTap_runningActionsCount == 0) {
	obj69571_onTap_actionGroup1();
}
}





















};
obj69571_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj69571_onTap_activeActionGroupIndex = -1;
		$("#obj69571").trigger("obj69571_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69571) {
				console.warn("de-queueing event obj69571." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69571").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69571_onTap_activeActionGroupIndex = 1;
	





















};
obj69492_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69492_onTouchDown_activeActionGroupIndex = -1;
		$("#obj69492").trigger("obj69492_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69492) {
				console.warn("de-queueing event obj69492." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69492").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69492_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj69492");
//	action: dragDrop
//	target: obj69492 
dragDrop_69495();
function dragDrop_69495() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj69492_onTouchDown_runningActionsCount = obj69492_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj69492');
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
	  	containerNode = $('#obj69563');
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
    	window.obj69492_onTouchDown_runningActionsCount = window.obj69492_onTouchDown_runningActionsCount - 1;
if (window.obj69492_onTouchDown_runningActionsCount < 0) {
	window.obj69492_onTouchDown_runningActionsCount = 0;
} else if (window.obj69492_onTouchDown_runningActionsCount == 0) {
	obj69492_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj69547","#obj69553","#obj69541");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_69495 = false;
    	var dropped_id_69495;
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
					dropped_69495 = true;
					dropped_id_69495 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_69495) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj69492").trigger('SCActionDragDrop69495_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj69492_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj69492_onTouchDown_activeActionGroupIndex = -1;
		$("#obj69492").trigger("obj69492_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69492) {
				console.warn("de-queueing event obj69492." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69492").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69492_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj69492_SCActionDragDrop69495_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69492_SCActionDragDrop69495_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj69492").trigger("obj69492_SCActionDragDrop69495_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69492) {
				console.warn("de-queueing event obj69492." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69492").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69492_SCActionDragDrop69495_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj69492 
move_92216();
function move_92216() {
	window.obj69492_SCActionDragDrop69495_droppedOutsideTargetActions_runningActionsCount = obj69492_SCActionDragDrop69495_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj69492");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 109;
	var moveY = 621;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj69492_SCActionDragDrop69495_droppedOutsideTargetActions_runningActionsCount = window.obj69492_SCActionDragDrop69495_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj69492_SCActionDragDrop69495_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj69492_SCActionDragDrop69495_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj69492_SCActionDragDrop69495_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj69492_SCActionDragDrop69495_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj69492_SCActionDragDrop69495_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj69492_SCActionDragDrop69495_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj69492").trigger("obj69492_SCActionDragDrop69495_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69492) {
				console.warn("de-queueing event obj69492." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69492").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69492_SCActionDragDrop69495_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj69492_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69492_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj69492").trigger("obj69492_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69492) {
				console.warn("de-queueing event obj69492." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69492").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69492_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_69518();
function runjs_69518() {
	window.obj69492_droppedInsideTargetActions_3_runningActionsCount = obj69492_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj69541").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj69492_droppedInsideTargetActions_3_runningActionsCount = window.obj69492_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj69492_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj69492_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj69492_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj69492_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj69492_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69492_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj69492").trigger("obj69492_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69492) {
				console.warn("de-queueing event obj69492." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69492").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69492_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_69519();
function runjs_69519() {
	window.obj69492_droppedInsideTargetActions_3_runningActionsCount = obj69492_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj69541").css("border-color", "#C00000"); $("#obj69541").css("border-width", "2px"); $("#obj69541").css("border-style", "solid"); $("#obj69541").css("border-radius", "10px"); $("#obj69541").css("-webkit-border-radius", "10px"); $("#obj69541").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj69492_droppedInsideTargetActions_3_runningActionsCount = window.obj69492_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj69492_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj69492_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj69492_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj69492_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj69492_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69492_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj69492").trigger("obj69492_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69492) {
				console.warn("de-queueing event obj69492." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69492").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69492_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj69539 
hide_69520();
function hide_69520() {
	var selector = "#obj69539";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj69492_droppedInsideTargetActions_3_runningActionsCount = obj69492_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj69492_droppedInsideTargetActions_3_runningActionsCount = window.obj69492_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj69492_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj69492_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj69492_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj69492_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_69520(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj69492_droppedInsideTargetActions_3_runningActionsCount = window.obj69492_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj69492_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj69492_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj69492_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj69492_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj69492_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69492_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj69492").trigger("obj69492_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69492) {
				console.warn("de-queueing event obj69492." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69492").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69492_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_69521();
function runjs_69521() {
	window.obj69492_droppedInsideTargetActions_3_runningActionsCount = obj69492_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj69492").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj69492_droppedInsideTargetActions_3_runningActionsCount = window.obj69492_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj69492_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj69492_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj69492_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj69492_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj69492_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69492_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj69492").trigger("obj69492_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69492) {
				console.warn("de-queueing event obj69492." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69492").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69492_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_69522();
function switchText_69522() {
	window.obj69492_droppedInsideTargetActions_3_runningActionsCount = obj69492_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj69535_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj69535_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj69535").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj69535_content");
			setTimeout(function () {
				window.obj69492_droppedInsideTargetActions_3_runningActionsCount = window.obj69492_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj69492_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj69492_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj69492_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj69492_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj69535 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj69492_droppedInsideTargetActions_3_runningActionsCount = window.obj69492_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj69492_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj69492_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj69492_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj69492_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj69492_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69492_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj69492").trigger("obj69492_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69492) {
				console.warn("de-queueing event obj69492." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69492").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69492_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj69492 
move_69523();
function move_69523() {
	window.obj69492_droppedInsideTargetActions_3_runningActionsCount = obj69492_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj69492");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 109;
	var moveY = 621;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj69492_droppedInsideTargetActions_3_runningActionsCount = window.obj69492_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj69492_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj69492_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj69492_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj69492_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj69492_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69492_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj69492").trigger("obj69492_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69492) {
				console.warn("de-queueing event obj69492." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69492").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69492_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_69524();
function runjs_69524() {
	window.obj69492_droppedInsideTargetActions_3_runningActionsCount = obj69492_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj69541").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj69492_droppedInsideTargetActions_3_runningActionsCount = window.obj69492_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj69492_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj69492_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj69492_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj69492_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj69492_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69492_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj69492").trigger("obj69492_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69492) {
				console.warn("de-queueing event obj69492." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69492").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69492_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_69525();
function runjs_69525() {
	window.obj69492_droppedInsideTargetActions_3_runningActionsCount = obj69492_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj69541").css("border-color", "#000000"); $("#obj69541").css("border-width", "1px"); $("#obj69541").css("border-style", "solid"); $("#obj69541").css("border-radius", "10px"); $("#obj69541").css("-webkit-border-radius", "10px"); $("#obj69541").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj69492_droppedInsideTargetActions_3_runningActionsCount = window.obj69492_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj69492_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj69492_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj69492_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj69492_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj69492_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69492_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj69492").trigger("obj69492_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69492) {
				console.warn("de-queueing event obj69492." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69492").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69492_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj69539
(function(){
	window.obj69492_droppedInsideTargetActions_3_runningActionsCount = obj69492_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj69539";
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
					window.obj69492_droppedInsideTargetActions_3_runningActionsCount = window.obj69492_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj69492_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj69492_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj69492_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj69492_droppedInsideTargetActions_3_actionGroup9();
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
				window.obj69492_droppedInsideTargetActions_3_runningActionsCount = window.obj69492_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj69492_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj69492_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj69492_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj69492_droppedInsideTargetActions_3_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj69492_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69492_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj69492").trigger("obj69492_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69492) {
				console.warn("de-queueing event obj69492." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69492").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69492_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_69527();
function runjs_69527() {
	window.obj69492_droppedInsideTargetActions_3_runningActionsCount = obj69492_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj69492").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj69492_droppedInsideTargetActions_3_runningActionsCount = window.obj69492_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj69492_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj69492_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj69492_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj69492_droppedInsideTargetActions_3_actionGroup10();
}
	}, 1);
}







};
obj69492_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69492_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj69492").trigger("obj69492_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69492) {
				console.warn("de-queueing event obj69492." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69492").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69492_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_69528();
function runjs_69528() {
	window.obj69492_droppedInsideTargetActions_3_runningActionsCount = obj69492_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj69492").css("border-color", "rgba(0,0,0,0)"); $("#obj69492").css("border-width", "0px"); $("#obj69492").css("border-style", "solid"); $("#obj69492").css("border-radius", "10px"); $("#obj69492").css("-webkit-border-radius", "10px"); $("#obj69492").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj69492_droppedInsideTargetActions_3_runningActionsCount = window.obj69492_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj69492_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj69492_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj69492_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj69492_droppedInsideTargetActions_3_actionGroup11();
}
	}, 1);
}







};
obj69492_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69492_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj69492").trigger("obj69492_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69492) {
				console.warn("de-queueing event obj69492." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69492").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69492_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj69534 
playAudio_69529();
function playAudio_69529() {
	window.obj69492_droppedInsideTargetActions_3_runningActionsCount = obj69492_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj69534")[0];
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
		    window.obj69492_droppedInsideTargetActions_3_runningActionsCount = window.obj69492_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj69492_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj69492_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj69492_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj69492_droppedInsideTargetActions_3_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj69492_droppedInsideTargetActions_3_runningActionsCount = window.obj69492_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj69492_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj69492_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj69492_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj69492_droppedInsideTargetActions_3_actionGroup12();
}
	}
}









};
obj69492_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69492_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj69492").trigger("obj69492_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69492) {
				console.warn("de-queueing event obj69492." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69492").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69492_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_69530();
function switchText_69530() {
	window.obj69492_droppedInsideTargetActions_3_runningActionsCount = obj69492_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj69535_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj69535_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj69535").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj69535_content");
			setTimeout(function () {
				window.obj69492_droppedInsideTargetActions_3_runningActionsCount = window.obj69492_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj69492_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj69492_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj69492_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj69492_droppedInsideTargetActions_3_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj69535 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj69492_droppedInsideTargetActions_3_runningActionsCount = window.obj69492_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj69492_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj69492_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj69492_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj69492_droppedInsideTargetActions_3_actionGroup13();
}
		}, 1);
	}
}






};
obj69492_droppedInsideTargetActions_3_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj69492_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj69492").trigger("obj69492_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69492) {
				console.warn("de-queueing event obj69492." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69492").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69492_droppedInsideTargetActions_3_activeActionGroupIndex = 13;
	





















};
obj69492_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69492_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj69492").trigger("obj69492_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69492) {
				console.warn("de-queueing event obj69492." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69492").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69492_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_69504();
function runjs_69504() {
	window.obj69492_droppedInsideTargetActions_2_runningActionsCount = obj69492_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj69553").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj69492_droppedInsideTargetActions_2_runningActionsCount = window.obj69492_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj69492_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj69492_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj69492_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj69492_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj69492_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69492_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj69492").trigger("obj69492_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69492) {
				console.warn("de-queueing event obj69492." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69492").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69492_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_69505();
function runjs_69505() {
	window.obj69492_droppedInsideTargetActions_2_runningActionsCount = obj69492_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj69553").css("border-color", "#C00000"); $("#obj69553").css("border-width", "2px"); $("#obj69553").css("border-style", "solid"); $("#obj69553").css("border-radius", "10px"); $("#obj69553").css("-webkit-border-radius", "10px"); $("#obj69553").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj69492_droppedInsideTargetActions_2_runningActionsCount = window.obj69492_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj69492_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj69492_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj69492_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj69492_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj69492_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69492_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj69492").trigger("obj69492_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69492) {
				console.warn("de-queueing event obj69492." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69492").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69492_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj69551 
hide_69506();
function hide_69506() {
	var selector = "#obj69551";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj69492_droppedInsideTargetActions_2_runningActionsCount = obj69492_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj69492_droppedInsideTargetActions_2_runningActionsCount = window.obj69492_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj69492_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj69492_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj69492_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj69492_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_69506(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj69492_droppedInsideTargetActions_2_runningActionsCount = window.obj69492_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj69492_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj69492_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj69492_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj69492_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj69492_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69492_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj69492").trigger("obj69492_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69492) {
				console.warn("de-queueing event obj69492." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69492").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69492_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_69507();
function runjs_69507() {
	window.obj69492_droppedInsideTargetActions_2_runningActionsCount = obj69492_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj69492").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj69492_droppedInsideTargetActions_2_runningActionsCount = window.obj69492_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj69492_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj69492_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj69492_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj69492_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj69492_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69492_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj69492").trigger("obj69492_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69492) {
				console.warn("de-queueing event obj69492." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69492").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69492_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_69508();
function switchText_69508() {
	window.obj69492_droppedInsideTargetActions_2_runningActionsCount = obj69492_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj69535_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj69535_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj69535").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj69535_content");
			setTimeout(function () {
				window.obj69492_droppedInsideTargetActions_2_runningActionsCount = window.obj69492_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj69492_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj69492_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj69492_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj69492_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj69535 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj69492_droppedInsideTargetActions_2_runningActionsCount = window.obj69492_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj69492_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj69492_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj69492_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj69492_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj69492_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69492_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj69492").trigger("obj69492_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69492) {
				console.warn("de-queueing event obj69492." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69492").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69492_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj69492 
move_69509();
function move_69509() {
	window.obj69492_droppedInsideTargetActions_2_runningActionsCount = obj69492_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj69492");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 109;
	var moveY = 621;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj69492_droppedInsideTargetActions_2_runningActionsCount = window.obj69492_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj69492_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj69492_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj69492_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj69492_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj69492_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69492_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj69492").trigger("obj69492_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69492) {
				console.warn("de-queueing event obj69492." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69492").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69492_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_69510();
function runjs_69510() {
	window.obj69492_droppedInsideTargetActions_2_runningActionsCount = obj69492_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj69553").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj69492_droppedInsideTargetActions_2_runningActionsCount = window.obj69492_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj69492_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj69492_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj69492_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj69492_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj69492_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69492_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj69492").trigger("obj69492_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69492) {
				console.warn("de-queueing event obj69492." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69492").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69492_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_69511();
function runjs_69511() {
	window.obj69492_droppedInsideTargetActions_2_runningActionsCount = obj69492_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj69553").css("border-color", "#000000"); $("#obj69553").css("border-width", "1px"); $("#obj69553").css("border-style", "solid"); $("#obj69553").css("border-radius", "10px"); $("#obj69553").css("-webkit-border-radius", "10px"); $("#obj69553").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj69492_droppedInsideTargetActions_2_runningActionsCount = window.obj69492_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj69492_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj69492_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj69492_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj69492_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj69492_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69492_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj69492").trigger("obj69492_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69492) {
				console.warn("de-queueing event obj69492." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69492").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69492_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj69551
(function(){
	window.obj69492_droppedInsideTargetActions_2_runningActionsCount = obj69492_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj69551";
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
					window.obj69492_droppedInsideTargetActions_2_runningActionsCount = window.obj69492_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj69492_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj69492_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj69492_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj69492_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj69492_droppedInsideTargetActions_2_runningActionsCount = window.obj69492_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj69492_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj69492_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj69492_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj69492_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj69492_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69492_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj69492").trigger("obj69492_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69492) {
				console.warn("de-queueing event obj69492." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69492").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69492_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_69513();
function runjs_69513() {
	window.obj69492_droppedInsideTargetActions_2_runningActionsCount = obj69492_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj69492").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj69492_droppedInsideTargetActions_2_runningActionsCount = window.obj69492_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj69492_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj69492_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj69492_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj69492_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj69492_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69492_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj69492").trigger("obj69492_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69492) {
				console.warn("de-queueing event obj69492." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69492").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69492_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_69514();
function runjs_69514() {
	window.obj69492_droppedInsideTargetActions_2_runningActionsCount = obj69492_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj69492").css("border-color", "rgba(0,0,0,0)"); $("#obj69492").css("border-width", "0px"); $("#obj69492").css("border-style", "solid"); $("#obj69492").css("border-radius", "10px"); $("#obj69492").css("-webkit-border-radius", "10px"); $("#obj69492").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj69492_droppedInsideTargetActions_2_runningActionsCount = window.obj69492_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj69492_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj69492_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj69492_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj69492_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj69492_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69492_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj69492").trigger("obj69492_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69492) {
				console.warn("de-queueing event obj69492." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69492").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69492_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj69534 
playAudio_69515();
function playAudio_69515() {
	window.obj69492_droppedInsideTargetActions_2_runningActionsCount = obj69492_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj69534")[0];
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
		    window.obj69492_droppedInsideTargetActions_2_runningActionsCount = window.obj69492_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj69492_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj69492_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj69492_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj69492_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj69492_droppedInsideTargetActions_2_runningActionsCount = window.obj69492_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj69492_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj69492_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj69492_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj69492_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj69492_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69492_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj69492").trigger("obj69492_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69492) {
				console.warn("de-queueing event obj69492." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69492").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69492_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_69516();
function switchText_69516() {
	window.obj69492_droppedInsideTargetActions_2_runningActionsCount = obj69492_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj69535_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj69535_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj69535").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj69535_content");
			setTimeout(function () {
				window.obj69492_droppedInsideTargetActions_2_runningActionsCount = window.obj69492_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj69492_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj69492_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj69492_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj69492_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj69535 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj69492_droppedInsideTargetActions_2_runningActionsCount = window.obj69492_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj69492_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj69492_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj69492_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj69492_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj69492_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj69492_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj69492").trigger("obj69492_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69492) {
				console.warn("de-queueing event obj69492." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69492").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69492_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj69492_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69492_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj69492").trigger("obj69492_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69492) {
				console.warn("de-queueing event obj69492." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69492").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69492_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_69497();
function runjs_69497() {
	window.obj69492_droppedInsideTargetActions_runningActionsCount = obj69492_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj69547").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj69492_droppedInsideTargetActions_runningActionsCount = window.obj69492_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj69492_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj69492_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj69492_droppedInsideTargetActions_runningActionsCount == 0) {
	obj69492_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj69492_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69492_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj69492").trigger("obj69492_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69492) {
				console.warn("de-queueing event obj69492." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69492").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69492_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_69501();
function switchText_69501() {
	window.obj69492_droppedInsideTargetActions_runningActionsCount = obj69492_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj69535_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj69535_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj69535").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj69535_content");
			setTimeout(function () {
				window.obj69492_droppedInsideTargetActions_runningActionsCount = window.obj69492_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj69492_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj69492_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj69492_droppedInsideTargetActions_runningActionsCount == 0) {
	obj69492_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj69535 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj69492_droppedInsideTargetActions_runningActionsCount = window.obj69492_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj69492_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj69492_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj69492_droppedInsideTargetActions_runningActionsCount == 0) {
	obj69492_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj69492_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69492_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj69492").trigger("obj69492_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69492) {
				console.warn("de-queueing event obj69492." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69492").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69492_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_69498();
function runjs_69498() {
	window.obj69492_droppedInsideTargetActions_runningActionsCount = obj69492_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj69547").css("border-color", "#058E3F"); $("#obj69547").css("border-width", "2px"); $("#obj69547").css("border-style", "solid"); $("#obj69547").css("border-radius", "10px"); $("#obj69547").css("-webkit-border-radius", "10px"); $("#obj69547").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj69492_droppedInsideTargetActions_runningActionsCount = window.obj69492_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj69492_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj69492_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj69492_droppedInsideTargetActions_runningActionsCount == 0) {
	obj69492_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj69492_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69492_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj69492").trigger("obj69492_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69492) {
				console.warn("de-queueing event obj69492." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69492").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69492_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj69545 
hide_69499();
function hide_69499() {
	var selector = "#obj69545";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj69492_droppedInsideTargetActions_runningActionsCount = obj69492_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj69492_droppedInsideTargetActions_runningActionsCount = window.obj69492_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj69492_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj69492_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj69492_droppedInsideTargetActions_runningActionsCount == 0) {
	obj69492_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_69499(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj69492_droppedInsideTargetActions_runningActionsCount = window.obj69492_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj69492_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj69492_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj69492_droppedInsideTargetActions_runningActionsCount == 0) {
	obj69492_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj69492_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69492_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj69492").trigger("obj69492_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69492) {
				console.warn("de-queueing event obj69492." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69492").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69492_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_69500();
function runjs_69500() {
	window.obj69492_droppedInsideTargetActions_runningActionsCount = obj69492_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj69492").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj69492_droppedInsideTargetActions_runningActionsCount = window.obj69492_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj69492_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj69492_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj69492_droppedInsideTargetActions_runningActionsCount == 0) {
	obj69492_droppedInsideTargetActions_actionGroup5();
}
	}, 1);
}







};
obj69492_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69492_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj69492").trigger("obj69492_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69492) {
				console.warn("de-queueing event obj69492." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69492").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69492_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj69533 
playAudio_69502();
function playAudio_69502() {
	window.obj69492_droppedInsideTargetActions_runningActionsCount = obj69492_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj69533")[0];
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
		    window.obj69492_droppedInsideTargetActions_runningActionsCount = window.obj69492_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj69492_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj69492_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj69492_droppedInsideTargetActions_runningActionsCount == 0) {
	obj69492_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj69492_droppedInsideTargetActions_runningActionsCount = window.obj69492_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj69492_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj69492_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj69492_droppedInsideTargetActions_runningActionsCount == 0) {
	obj69492_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj69492_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69492_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj69492").trigger("obj69492_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69492) {
				console.warn("de-queueing event obj69492." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69492").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69492_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90140();
function switchText_90140() {
	window.obj69492_droppedInsideTargetActions_runningActionsCount = obj69492_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj69535_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj69535_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj69535").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj69535_content");
			setTimeout(function () {
				window.obj69492_droppedInsideTargetActions_runningActionsCount = window.obj69492_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj69492_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj69492_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj69492_droppedInsideTargetActions_runningActionsCount == 0) {
	obj69492_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj69535 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj69492_droppedInsideTargetActions_runningActionsCount = window.obj69492_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj69492_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj69492_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj69492_droppedInsideTargetActions_runningActionsCount == 0) {
	obj69492_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj69492_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj69492_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj69492").trigger("obj69492_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69492) {
				console.warn("de-queueing event obj69492." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69492").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69492_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj69453_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69453_onTouchDown_activeActionGroupIndex = -1;
		$("#obj69453").trigger("obj69453_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69453) {
				console.warn("de-queueing event obj69453." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69453").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69453_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj69453");
//	action: dragDrop
//	target: obj69453 
dragDrop_69456();
function dragDrop_69456() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj69453_onTouchDown_runningActionsCount = obj69453_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj69453');
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
	  	containerNode = $('#obj69563');
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
    	window.obj69453_onTouchDown_runningActionsCount = window.obj69453_onTouchDown_runningActionsCount - 1;
if (window.obj69453_onTouchDown_runningActionsCount < 0) {
	window.obj69453_onTouchDown_runningActionsCount = 0;
} else if (window.obj69453_onTouchDown_runningActionsCount == 0) {
	obj69453_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj69553","#obj69547","#obj69541");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_69456 = false;
    	var dropped_id_69456;
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
					dropped_69456 = true;
					dropped_id_69456 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_69456) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj69453").trigger('SCActionDragDrop69456_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj69453_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj69453_onTouchDown_activeActionGroupIndex = -1;
		$("#obj69453").trigger("obj69453_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69453) {
				console.warn("de-queueing event obj69453." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69453").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69453_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj69453_SCActionDragDrop69456_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69453_SCActionDragDrop69456_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj69453").trigger("obj69453_SCActionDragDrop69456_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69453) {
				console.warn("de-queueing event obj69453." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69453").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69453_SCActionDragDrop69456_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj69453 
move_92218();
function move_92218() {
	window.obj69453_SCActionDragDrop69456_droppedOutsideTargetActions_runningActionsCount = obj69453_SCActionDragDrop69456_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj69453");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 236;
	var moveY = 620;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj69453_SCActionDragDrop69456_droppedOutsideTargetActions_runningActionsCount = window.obj69453_SCActionDragDrop69456_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj69453_SCActionDragDrop69456_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj69453_SCActionDragDrop69456_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj69453_SCActionDragDrop69456_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj69453_SCActionDragDrop69456_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj69453_SCActionDragDrop69456_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj69453_SCActionDragDrop69456_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj69453").trigger("obj69453_SCActionDragDrop69456_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69453) {
				console.warn("de-queueing event obj69453." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69453").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69453_SCActionDragDrop69456_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj69453_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69453_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj69453").trigger("obj69453_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69453) {
				console.warn("de-queueing event obj69453." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69453").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69453_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_69479();
function runjs_69479() {
	window.obj69453_droppedInsideTargetActions_3_runningActionsCount = obj69453_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj69541").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj69453_droppedInsideTargetActions_3_runningActionsCount = window.obj69453_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj69453_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj69453_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj69453_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj69453_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj69453_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69453_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj69453").trigger("obj69453_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69453) {
				console.warn("de-queueing event obj69453." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69453").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69453_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_69480();
function runjs_69480() {
	window.obj69453_droppedInsideTargetActions_3_runningActionsCount = obj69453_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj69541").css("border-color", "#C00000"); $("#obj69541").css("border-width", "2px"); $("#obj69541").css("border-style", "solid"); $("#obj69541").css("border-radius", "10px"); $("#obj69541").css("-webkit-border-radius", "10px"); $("#obj69541").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj69453_droppedInsideTargetActions_3_runningActionsCount = window.obj69453_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj69453_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj69453_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj69453_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj69453_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj69453_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69453_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj69453").trigger("obj69453_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69453) {
				console.warn("de-queueing event obj69453." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69453").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69453_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj69539 
hide_69481();
function hide_69481() {
	var selector = "#obj69539";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj69453_droppedInsideTargetActions_3_runningActionsCount = obj69453_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj69453_droppedInsideTargetActions_3_runningActionsCount = window.obj69453_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj69453_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj69453_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj69453_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj69453_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_69481(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj69453_droppedInsideTargetActions_3_runningActionsCount = window.obj69453_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj69453_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj69453_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj69453_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj69453_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj69453_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69453_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj69453").trigger("obj69453_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69453) {
				console.warn("de-queueing event obj69453." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69453").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69453_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_69482();
function runjs_69482() {
	window.obj69453_droppedInsideTargetActions_3_runningActionsCount = obj69453_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj69453").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj69453_droppedInsideTargetActions_3_runningActionsCount = window.obj69453_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj69453_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj69453_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj69453_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj69453_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj69453_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69453_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj69453").trigger("obj69453_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69453) {
				console.warn("de-queueing event obj69453." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69453").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69453_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_69483();
function switchText_69483() {
	window.obj69453_droppedInsideTargetActions_3_runningActionsCount = obj69453_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj69535_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj69535_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj69535").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj69535_content");
			setTimeout(function () {
				window.obj69453_droppedInsideTargetActions_3_runningActionsCount = window.obj69453_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj69453_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj69453_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj69453_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj69453_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj69535 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj69453_droppedInsideTargetActions_3_runningActionsCount = window.obj69453_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj69453_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj69453_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj69453_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj69453_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj69453_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69453_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj69453").trigger("obj69453_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69453) {
				console.warn("de-queueing event obj69453." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69453").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69453_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj69453 
move_69484();
function move_69484() {
	window.obj69453_droppedInsideTargetActions_3_runningActionsCount = obj69453_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj69453");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 236;
	var moveY = 620;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj69453_droppedInsideTargetActions_3_runningActionsCount = window.obj69453_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj69453_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj69453_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj69453_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj69453_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj69453_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69453_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj69453").trigger("obj69453_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69453) {
				console.warn("de-queueing event obj69453." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69453").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69453_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_69485();
function runjs_69485() {
	window.obj69453_droppedInsideTargetActions_3_runningActionsCount = obj69453_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj69541").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj69453_droppedInsideTargetActions_3_runningActionsCount = window.obj69453_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj69453_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj69453_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj69453_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj69453_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj69453_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69453_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj69453").trigger("obj69453_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69453) {
				console.warn("de-queueing event obj69453." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69453").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69453_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_69486();
function runjs_69486() {
	window.obj69453_droppedInsideTargetActions_3_runningActionsCount = obj69453_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj69541").css("border-color", "#000000"); $("#obj69541").css("border-width", "1px"); $("#obj69541").css("border-style", "solid"); $("#obj69541").css("border-radius", "10px"); $("#obj69541").css("-webkit-border-radius", "10px"); $("#obj69541").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj69453_droppedInsideTargetActions_3_runningActionsCount = window.obj69453_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj69453_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj69453_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj69453_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj69453_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj69453_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69453_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj69453").trigger("obj69453_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69453) {
				console.warn("de-queueing event obj69453." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69453").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69453_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj69539
(function(){
	window.obj69453_droppedInsideTargetActions_3_runningActionsCount = obj69453_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj69539";
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
					window.obj69453_droppedInsideTargetActions_3_runningActionsCount = window.obj69453_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj69453_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj69453_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj69453_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj69453_droppedInsideTargetActions_3_actionGroup9();
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
				window.obj69453_droppedInsideTargetActions_3_runningActionsCount = window.obj69453_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj69453_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj69453_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj69453_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj69453_droppedInsideTargetActions_3_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj69453_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69453_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj69453").trigger("obj69453_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69453) {
				console.warn("de-queueing event obj69453." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69453").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69453_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_69488();
function runjs_69488() {
	window.obj69453_droppedInsideTargetActions_3_runningActionsCount = obj69453_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj69453").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj69453_droppedInsideTargetActions_3_runningActionsCount = window.obj69453_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj69453_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj69453_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj69453_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj69453_droppedInsideTargetActions_3_actionGroup10();
}
	}, 1);
}







};
obj69453_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69453_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj69453").trigger("obj69453_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69453) {
				console.warn("de-queueing event obj69453." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69453").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69453_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_69489();
function runjs_69489() {
	window.obj69453_droppedInsideTargetActions_3_runningActionsCount = obj69453_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj69453").css("border-color", "rgba(0,0,0,0)"); $("#obj69453").css("border-width", "0px"); $("#obj69453").css("border-style", "solid"); $("#obj69453").css("border-radius", "10px"); $("#obj69453").css("-webkit-border-radius", "10px"); $("#obj69453").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj69453_droppedInsideTargetActions_3_runningActionsCount = window.obj69453_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj69453_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj69453_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj69453_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj69453_droppedInsideTargetActions_3_actionGroup11();
}
	}, 1);
}







};
obj69453_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69453_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj69453").trigger("obj69453_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69453) {
				console.warn("de-queueing event obj69453." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69453").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69453_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj69534 
playAudio_69490();
function playAudio_69490() {
	window.obj69453_droppedInsideTargetActions_3_runningActionsCount = obj69453_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj69534")[0];
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
		    window.obj69453_droppedInsideTargetActions_3_runningActionsCount = window.obj69453_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj69453_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj69453_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj69453_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj69453_droppedInsideTargetActions_3_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj69453_droppedInsideTargetActions_3_runningActionsCount = window.obj69453_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj69453_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj69453_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj69453_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj69453_droppedInsideTargetActions_3_actionGroup12();
}
	}
}









};
obj69453_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69453_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj69453").trigger("obj69453_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69453) {
				console.warn("de-queueing event obj69453." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69453").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69453_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_69491();
function switchText_69491() {
	window.obj69453_droppedInsideTargetActions_3_runningActionsCount = obj69453_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj69535_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj69535_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj69535").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj69535_content");
			setTimeout(function () {
				window.obj69453_droppedInsideTargetActions_3_runningActionsCount = window.obj69453_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj69453_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj69453_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj69453_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj69453_droppedInsideTargetActions_3_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj69535 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj69453_droppedInsideTargetActions_3_runningActionsCount = window.obj69453_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj69453_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj69453_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj69453_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj69453_droppedInsideTargetActions_3_actionGroup13();
}
		}, 1);
	}
}






};
obj69453_droppedInsideTargetActions_3_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj69453_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj69453").trigger("obj69453_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69453) {
				console.warn("de-queueing event obj69453." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69453").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69453_droppedInsideTargetActions_3_activeActionGroupIndex = 13;
	





















};
obj69453_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69453_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj69453").trigger("obj69453_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69453) {
				console.warn("de-queueing event obj69453." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69453").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69453_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_69465();
function runjs_69465() {
	window.obj69453_droppedInsideTargetActions_2_runningActionsCount = obj69453_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj69547").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj69453_droppedInsideTargetActions_2_runningActionsCount = window.obj69453_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj69453_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj69453_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj69453_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj69453_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj69453_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69453_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj69453").trigger("obj69453_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69453) {
				console.warn("de-queueing event obj69453." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69453").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69453_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_69466();
function runjs_69466() {
	window.obj69453_droppedInsideTargetActions_2_runningActionsCount = obj69453_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj69547").css("border-color", "#C00000"); $("#obj69547").css("border-width", "2px"); $("#obj69547").css("border-style", "solid"); $("#obj69547").css("border-radius", "10px"); $("#obj69547").css("-webkit-border-radius", "10px"); $("#obj69547").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj69453_droppedInsideTargetActions_2_runningActionsCount = window.obj69453_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj69453_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj69453_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj69453_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj69453_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj69453_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69453_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj69453").trigger("obj69453_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69453) {
				console.warn("de-queueing event obj69453." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69453").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69453_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj69545 
hide_69467();
function hide_69467() {
	var selector = "#obj69545";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj69453_droppedInsideTargetActions_2_runningActionsCount = obj69453_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj69453_droppedInsideTargetActions_2_runningActionsCount = window.obj69453_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj69453_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj69453_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj69453_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj69453_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_69467(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj69453_droppedInsideTargetActions_2_runningActionsCount = window.obj69453_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj69453_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj69453_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj69453_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj69453_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj69453_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69453_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj69453").trigger("obj69453_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69453) {
				console.warn("de-queueing event obj69453." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69453").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69453_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_69468();
function runjs_69468() {
	window.obj69453_droppedInsideTargetActions_2_runningActionsCount = obj69453_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj69453").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj69453_droppedInsideTargetActions_2_runningActionsCount = window.obj69453_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj69453_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj69453_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj69453_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj69453_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj69453_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69453_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj69453").trigger("obj69453_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69453) {
				console.warn("de-queueing event obj69453." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69453").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69453_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_69469();
function switchText_69469() {
	window.obj69453_droppedInsideTargetActions_2_runningActionsCount = obj69453_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj69535_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj69535_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj69535").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj69535_content");
			setTimeout(function () {
				window.obj69453_droppedInsideTargetActions_2_runningActionsCount = window.obj69453_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj69453_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj69453_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj69453_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj69453_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj69535 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj69453_droppedInsideTargetActions_2_runningActionsCount = window.obj69453_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj69453_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj69453_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj69453_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj69453_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj69453_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69453_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj69453").trigger("obj69453_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69453) {
				console.warn("de-queueing event obj69453." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69453").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69453_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj69453 
move_69470();
function move_69470() {
	window.obj69453_droppedInsideTargetActions_2_runningActionsCount = obj69453_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj69453");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 236;
	var moveY = 620;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj69453_droppedInsideTargetActions_2_runningActionsCount = window.obj69453_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj69453_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj69453_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj69453_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj69453_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj69453_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69453_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj69453").trigger("obj69453_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69453) {
				console.warn("de-queueing event obj69453." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69453").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69453_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_69471();
function runjs_69471() {
	window.obj69453_droppedInsideTargetActions_2_runningActionsCount = obj69453_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj69547").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj69453_droppedInsideTargetActions_2_runningActionsCount = window.obj69453_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj69453_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj69453_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj69453_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj69453_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj69453_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69453_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj69453").trigger("obj69453_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69453) {
				console.warn("de-queueing event obj69453." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69453").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69453_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_69472();
function runjs_69472() {
	window.obj69453_droppedInsideTargetActions_2_runningActionsCount = obj69453_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj69547").css("border-color", "#000000"); $("#obj69547").css("border-width", "1px"); $("#obj69547").css("border-style", "solid"); $("#obj69547").css("border-radius", "10px"); $("#obj69547").css("-webkit-border-radius", "10px"); $("#obj69547").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj69453_droppedInsideTargetActions_2_runningActionsCount = window.obj69453_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj69453_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj69453_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj69453_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj69453_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj69453_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69453_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj69453").trigger("obj69453_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69453) {
				console.warn("de-queueing event obj69453." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69453").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69453_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj69545
(function(){
	window.obj69453_droppedInsideTargetActions_2_runningActionsCount = obj69453_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj69545";
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
					window.obj69453_droppedInsideTargetActions_2_runningActionsCount = window.obj69453_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj69453_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj69453_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj69453_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj69453_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj69453_droppedInsideTargetActions_2_runningActionsCount = window.obj69453_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj69453_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj69453_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj69453_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj69453_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj69453_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69453_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj69453").trigger("obj69453_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69453) {
				console.warn("de-queueing event obj69453." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69453").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69453_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_69474();
function runjs_69474() {
	window.obj69453_droppedInsideTargetActions_2_runningActionsCount = obj69453_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj69453").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj69453_droppedInsideTargetActions_2_runningActionsCount = window.obj69453_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj69453_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj69453_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj69453_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj69453_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj69453_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69453_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj69453").trigger("obj69453_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69453) {
				console.warn("de-queueing event obj69453." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69453").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69453_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_69475();
function runjs_69475() {
	window.obj69453_droppedInsideTargetActions_2_runningActionsCount = obj69453_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj69453").css("border-color", "rgba(0,0,0,0)"); $("#obj69453").css("border-width", "0px"); $("#obj69453").css("border-style", "solid"); $("#obj69453").css("border-radius", "10px"); $("#obj69453").css("-webkit-border-radius", "10px"); $("#obj69453").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj69453_droppedInsideTargetActions_2_runningActionsCount = window.obj69453_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj69453_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj69453_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj69453_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj69453_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj69453_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69453_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj69453").trigger("obj69453_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69453) {
				console.warn("de-queueing event obj69453." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69453").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69453_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj69534 
playAudio_69476();
function playAudio_69476() {
	window.obj69453_droppedInsideTargetActions_2_runningActionsCount = obj69453_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj69534")[0];
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
		    window.obj69453_droppedInsideTargetActions_2_runningActionsCount = window.obj69453_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj69453_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj69453_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj69453_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj69453_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj69453_droppedInsideTargetActions_2_runningActionsCount = window.obj69453_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj69453_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj69453_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj69453_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj69453_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj69453_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69453_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj69453").trigger("obj69453_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69453) {
				console.warn("de-queueing event obj69453." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69453").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69453_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_69477();
function switchText_69477() {
	window.obj69453_droppedInsideTargetActions_2_runningActionsCount = obj69453_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj69535_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj69535_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj69535").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj69535_content");
			setTimeout(function () {
				window.obj69453_droppedInsideTargetActions_2_runningActionsCount = window.obj69453_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj69453_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj69453_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj69453_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj69453_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj69535 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj69453_droppedInsideTargetActions_2_runningActionsCount = window.obj69453_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj69453_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj69453_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj69453_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj69453_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj69453_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj69453_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj69453").trigger("obj69453_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69453) {
				console.warn("de-queueing event obj69453." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69453").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69453_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj69453_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69453_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj69453").trigger("obj69453_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69453) {
				console.warn("de-queueing event obj69453." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69453").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69453_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_69458();
function runjs_69458() {
	window.obj69453_droppedInsideTargetActions_runningActionsCount = obj69453_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj69553").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj69453_droppedInsideTargetActions_runningActionsCount = window.obj69453_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj69453_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj69453_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj69453_droppedInsideTargetActions_runningActionsCount == 0) {
	obj69453_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj69453_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69453_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj69453").trigger("obj69453_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69453) {
				console.warn("de-queueing event obj69453." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69453").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69453_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_69462();
function switchText_69462() {
	window.obj69453_droppedInsideTargetActions_runningActionsCount = obj69453_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj69535_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj69535_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj69535").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj69535_content");
			setTimeout(function () {
				window.obj69453_droppedInsideTargetActions_runningActionsCount = window.obj69453_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj69453_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj69453_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj69453_droppedInsideTargetActions_runningActionsCount == 0) {
	obj69453_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj69535 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj69453_droppedInsideTargetActions_runningActionsCount = window.obj69453_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj69453_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj69453_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj69453_droppedInsideTargetActions_runningActionsCount == 0) {
	obj69453_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj69453_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69453_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj69453").trigger("obj69453_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69453) {
				console.warn("de-queueing event obj69453." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69453").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69453_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_69459();
function runjs_69459() {
	window.obj69453_droppedInsideTargetActions_runningActionsCount = obj69453_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj69553").css("border-color", "#058E3F"); $("#obj69553").css("border-width", "2px"); $("#obj69553").css("border-style", "solid"); $("#obj69553").css("border-radius", "10px"); $("#obj69553").css("-webkit-border-radius", "10px"); $("#obj69553").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj69453_droppedInsideTargetActions_runningActionsCount = window.obj69453_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj69453_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj69453_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj69453_droppedInsideTargetActions_runningActionsCount == 0) {
	obj69453_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj69453_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69453_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj69453").trigger("obj69453_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69453) {
				console.warn("de-queueing event obj69453." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69453").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69453_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj69551 
hide_69460();
function hide_69460() {
	var selector = "#obj69551";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj69453_droppedInsideTargetActions_runningActionsCount = obj69453_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj69453_droppedInsideTargetActions_runningActionsCount = window.obj69453_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj69453_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj69453_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj69453_droppedInsideTargetActions_runningActionsCount == 0) {
	obj69453_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_69460(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj69453_droppedInsideTargetActions_runningActionsCount = window.obj69453_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj69453_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj69453_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj69453_droppedInsideTargetActions_runningActionsCount == 0) {
	obj69453_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj69453_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69453_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj69453").trigger("obj69453_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69453) {
				console.warn("de-queueing event obj69453." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69453").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69453_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_69461();
function runjs_69461() {
	window.obj69453_droppedInsideTargetActions_runningActionsCount = obj69453_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj69453").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj69453_droppedInsideTargetActions_runningActionsCount = window.obj69453_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj69453_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj69453_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj69453_droppedInsideTargetActions_runningActionsCount == 0) {
	obj69453_droppedInsideTargetActions_actionGroup5();
}
	}, 1);
}







};
obj69453_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69453_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj69453").trigger("obj69453_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69453) {
				console.warn("de-queueing event obj69453." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69453").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69453_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj69533 
playAudio_69463();
function playAudio_69463() {
	window.obj69453_droppedInsideTargetActions_runningActionsCount = obj69453_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj69533")[0];
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
		    window.obj69453_droppedInsideTargetActions_runningActionsCount = window.obj69453_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj69453_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj69453_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj69453_droppedInsideTargetActions_runningActionsCount == 0) {
	obj69453_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj69453_droppedInsideTargetActions_runningActionsCount = window.obj69453_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj69453_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj69453_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj69453_droppedInsideTargetActions_runningActionsCount == 0) {
	obj69453_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj69453_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69453_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj69453").trigger("obj69453_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69453) {
				console.warn("de-queueing event obj69453." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69453").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69453_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90141();
function switchText_90141() {
	window.obj69453_droppedInsideTargetActions_runningActionsCount = obj69453_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj69535_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj69535_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj69535").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj69535_content");
			setTimeout(function () {
				window.obj69453_droppedInsideTargetActions_runningActionsCount = window.obj69453_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj69453_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj69453_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj69453_droppedInsideTargetActions_runningActionsCount == 0) {
	obj69453_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj69535 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj69453_droppedInsideTargetActions_runningActionsCount = window.obj69453_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj69453_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj69453_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj69453_droppedInsideTargetActions_runningActionsCount == 0) {
	obj69453_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj69453_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj69453_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj69453").trigger("obj69453_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69453) {
				console.warn("de-queueing event obj69453." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69453").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69453_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj69414_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69414_onTouchDown_activeActionGroupIndex = -1;
		$("#obj69414").trigger("obj69414_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69414) {
				console.warn("de-queueing event obj69414." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69414").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69414_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj69414");
//	action: dragDrop
//	target: obj69414 
dragDrop_69417();
function dragDrop_69417() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj69414_onTouchDown_runningActionsCount = obj69414_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj69414');
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
	  	containerNode = $('#obj69563');
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
    	window.obj69414_onTouchDown_runningActionsCount = window.obj69414_onTouchDown_runningActionsCount - 1;
if (window.obj69414_onTouchDown_runningActionsCount < 0) {
	window.obj69414_onTouchDown_runningActionsCount = 0;
} else if (window.obj69414_onTouchDown_runningActionsCount == 0) {
	obj69414_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj69541","#obj69553","#obj69547");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_69417 = false;
    	var dropped_id_69417;
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
					dropped_69417 = true;
					dropped_id_69417 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_69417) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj69414").trigger('SCActionDragDrop69417_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj69414_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj69414_onTouchDown_activeActionGroupIndex = -1;
		$("#obj69414").trigger("obj69414_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69414) {
				console.warn("de-queueing event obj69414." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69414").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69414_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj69414_SCActionDragDrop69417_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69414_SCActionDragDrop69417_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj69414").trigger("obj69414_SCActionDragDrop69417_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69414) {
				console.warn("de-queueing event obj69414." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69414").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69414_SCActionDragDrop69417_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj69414 
move_92220();
function move_92220() {
	window.obj69414_SCActionDragDrop69417_droppedOutsideTargetActions_runningActionsCount = obj69414_SCActionDragDrop69417_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj69414");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 365;
	var moveY = 621;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj69414_SCActionDragDrop69417_droppedOutsideTargetActions_runningActionsCount = window.obj69414_SCActionDragDrop69417_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj69414_SCActionDragDrop69417_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj69414_SCActionDragDrop69417_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj69414_SCActionDragDrop69417_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj69414_SCActionDragDrop69417_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj69414_SCActionDragDrop69417_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj69414_SCActionDragDrop69417_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj69414").trigger("obj69414_SCActionDragDrop69417_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69414) {
				console.warn("de-queueing event obj69414." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69414").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69414_SCActionDragDrop69417_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj69414_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69414_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj69414").trigger("obj69414_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69414) {
				console.warn("de-queueing event obj69414." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69414").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69414_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_69440();
function runjs_69440() {
	window.obj69414_droppedInsideTargetActions_3_runningActionsCount = obj69414_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj69547").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj69414_droppedInsideTargetActions_3_runningActionsCount = window.obj69414_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj69414_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj69414_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj69414_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj69414_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj69414_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69414_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj69414").trigger("obj69414_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69414) {
				console.warn("de-queueing event obj69414." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69414").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69414_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_69441();
function runjs_69441() {
	window.obj69414_droppedInsideTargetActions_3_runningActionsCount = obj69414_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj69547").css("border-color", "#C00000"); $("#obj69547").css("border-width", "2px"); $("#obj69547").css("border-style", "solid"); $("#obj69547").css("border-radius", "10px"); $("#obj69547").css("-webkit-border-radius", "10px"); $("#obj69547").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj69414_droppedInsideTargetActions_3_runningActionsCount = window.obj69414_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj69414_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj69414_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj69414_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj69414_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj69414_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69414_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj69414").trigger("obj69414_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69414) {
				console.warn("de-queueing event obj69414." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69414").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69414_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj69545 
hide_69442();
function hide_69442() {
	var selector = "#obj69545";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj69414_droppedInsideTargetActions_3_runningActionsCount = obj69414_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj69414_droppedInsideTargetActions_3_runningActionsCount = window.obj69414_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj69414_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj69414_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj69414_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj69414_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_69442(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj69414_droppedInsideTargetActions_3_runningActionsCount = window.obj69414_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj69414_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj69414_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj69414_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj69414_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj69414_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69414_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj69414").trigger("obj69414_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69414) {
				console.warn("de-queueing event obj69414." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69414").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69414_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_69443();
function runjs_69443() {
	window.obj69414_droppedInsideTargetActions_3_runningActionsCount = obj69414_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj69414").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj69414_droppedInsideTargetActions_3_runningActionsCount = window.obj69414_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj69414_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj69414_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj69414_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj69414_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj69414_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69414_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj69414").trigger("obj69414_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69414) {
				console.warn("de-queueing event obj69414." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69414").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69414_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_69444();
function switchText_69444() {
	window.obj69414_droppedInsideTargetActions_3_runningActionsCount = obj69414_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj69535_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj69535_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj69535").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj69535_content");
			setTimeout(function () {
				window.obj69414_droppedInsideTargetActions_3_runningActionsCount = window.obj69414_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj69414_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj69414_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj69414_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj69414_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj69535 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj69414_droppedInsideTargetActions_3_runningActionsCount = window.obj69414_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj69414_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj69414_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj69414_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj69414_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj69414_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69414_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj69414").trigger("obj69414_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69414) {
				console.warn("de-queueing event obj69414." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69414").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69414_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj69414 
move_69445();
function move_69445() {
	window.obj69414_droppedInsideTargetActions_3_runningActionsCount = obj69414_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj69414");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 365;
	var moveY = 621;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj69414_droppedInsideTargetActions_3_runningActionsCount = window.obj69414_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj69414_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj69414_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj69414_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj69414_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj69414_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69414_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj69414").trigger("obj69414_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69414) {
				console.warn("de-queueing event obj69414." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69414").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69414_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_69446();
function runjs_69446() {
	window.obj69414_droppedInsideTargetActions_3_runningActionsCount = obj69414_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj69547").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj69414_droppedInsideTargetActions_3_runningActionsCount = window.obj69414_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj69414_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj69414_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj69414_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj69414_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj69414_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69414_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj69414").trigger("obj69414_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69414) {
				console.warn("de-queueing event obj69414." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69414").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69414_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_69447();
function runjs_69447() {
	window.obj69414_droppedInsideTargetActions_3_runningActionsCount = obj69414_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj69547").css("border-color", "#000000"); $("#obj69547").css("border-width", "1px"); $("#obj69547").css("border-style", "solid"); $("#obj69547").css("border-radius", "10px"); $("#obj69547").css("-webkit-border-radius", "10px"); $("#obj69547").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj69414_droppedInsideTargetActions_3_runningActionsCount = window.obj69414_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj69414_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj69414_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj69414_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj69414_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj69414_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69414_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj69414").trigger("obj69414_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69414) {
				console.warn("de-queueing event obj69414." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69414").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69414_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj69545
(function(){
	window.obj69414_droppedInsideTargetActions_3_runningActionsCount = obj69414_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj69545";
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
					window.obj69414_droppedInsideTargetActions_3_runningActionsCount = window.obj69414_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj69414_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj69414_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj69414_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj69414_droppedInsideTargetActions_3_actionGroup9();
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
				window.obj69414_droppedInsideTargetActions_3_runningActionsCount = window.obj69414_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj69414_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj69414_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj69414_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj69414_droppedInsideTargetActions_3_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj69414_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69414_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj69414").trigger("obj69414_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69414) {
				console.warn("de-queueing event obj69414." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69414").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69414_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_69449();
function runjs_69449() {
	window.obj69414_droppedInsideTargetActions_3_runningActionsCount = obj69414_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj69414").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj69414_droppedInsideTargetActions_3_runningActionsCount = window.obj69414_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj69414_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj69414_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj69414_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj69414_droppedInsideTargetActions_3_actionGroup10();
}
	}, 1);
}







};
obj69414_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69414_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj69414").trigger("obj69414_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69414) {
				console.warn("de-queueing event obj69414." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69414").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69414_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_69450();
function runjs_69450() {
	window.obj69414_droppedInsideTargetActions_3_runningActionsCount = obj69414_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj69414").css("border-color", "rgba(0,0,0,0)"); $("#obj69414").css("border-width", "0px"); $("#obj69414").css("border-style", "solid"); $("#obj69414").css("border-radius", "10px"); $("#obj69414").css("-webkit-border-radius", "10px"); $("#obj69414").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj69414_droppedInsideTargetActions_3_runningActionsCount = window.obj69414_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj69414_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj69414_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj69414_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj69414_droppedInsideTargetActions_3_actionGroup11();
}
	}, 1);
}







};
obj69414_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69414_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj69414").trigger("obj69414_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69414) {
				console.warn("de-queueing event obj69414." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69414").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69414_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj69534 
playAudio_69451();
function playAudio_69451() {
	window.obj69414_droppedInsideTargetActions_3_runningActionsCount = obj69414_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj69534")[0];
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
		    window.obj69414_droppedInsideTargetActions_3_runningActionsCount = window.obj69414_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj69414_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj69414_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj69414_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj69414_droppedInsideTargetActions_3_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj69414_droppedInsideTargetActions_3_runningActionsCount = window.obj69414_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj69414_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj69414_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj69414_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj69414_droppedInsideTargetActions_3_actionGroup12();
}
	}
}









};
obj69414_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69414_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj69414").trigger("obj69414_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69414) {
				console.warn("de-queueing event obj69414." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69414").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69414_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_69452();
function switchText_69452() {
	window.obj69414_droppedInsideTargetActions_3_runningActionsCount = obj69414_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj69535_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj69535_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj69535").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj69535_content");
			setTimeout(function () {
				window.obj69414_droppedInsideTargetActions_3_runningActionsCount = window.obj69414_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj69414_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj69414_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj69414_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj69414_droppedInsideTargetActions_3_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj69535 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj69414_droppedInsideTargetActions_3_runningActionsCount = window.obj69414_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj69414_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj69414_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj69414_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj69414_droppedInsideTargetActions_3_actionGroup13();
}
		}, 1);
	}
}






};
obj69414_droppedInsideTargetActions_3_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj69414_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj69414").trigger("obj69414_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69414) {
				console.warn("de-queueing event obj69414." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69414").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69414_droppedInsideTargetActions_3_activeActionGroupIndex = 13;
	





















};
obj69414_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69414_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj69414").trigger("obj69414_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69414) {
				console.warn("de-queueing event obj69414." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69414").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69414_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_69426();
function runjs_69426() {
	window.obj69414_droppedInsideTargetActions_2_runningActionsCount = obj69414_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj69553").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj69414_droppedInsideTargetActions_2_runningActionsCount = window.obj69414_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj69414_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj69414_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj69414_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj69414_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj69414_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69414_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj69414").trigger("obj69414_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69414) {
				console.warn("de-queueing event obj69414." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69414").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69414_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_69427();
function runjs_69427() {
	window.obj69414_droppedInsideTargetActions_2_runningActionsCount = obj69414_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj69553").css("border-color", "#C00000"); $("#obj69553").css("border-width", "2px"); $("#obj69553").css("border-style", "solid"); $("#obj69553").css("border-radius", "10px"); $("#obj69553").css("-webkit-border-radius", "10px"); $("#obj69553").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj69414_droppedInsideTargetActions_2_runningActionsCount = window.obj69414_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj69414_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj69414_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj69414_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj69414_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj69414_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69414_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj69414").trigger("obj69414_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69414) {
				console.warn("de-queueing event obj69414." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69414").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69414_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj69551 
hide_69428();
function hide_69428() {
	var selector = "#obj69551";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj69414_droppedInsideTargetActions_2_runningActionsCount = obj69414_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj69414_droppedInsideTargetActions_2_runningActionsCount = window.obj69414_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj69414_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj69414_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj69414_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj69414_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_69428(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj69414_droppedInsideTargetActions_2_runningActionsCount = window.obj69414_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj69414_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj69414_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj69414_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj69414_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj69414_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69414_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj69414").trigger("obj69414_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69414) {
				console.warn("de-queueing event obj69414." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69414").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69414_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_69429();
function runjs_69429() {
	window.obj69414_droppedInsideTargetActions_2_runningActionsCount = obj69414_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj69414").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj69414_droppedInsideTargetActions_2_runningActionsCount = window.obj69414_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj69414_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj69414_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj69414_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj69414_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj69414_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69414_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj69414").trigger("obj69414_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69414) {
				console.warn("de-queueing event obj69414." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69414").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69414_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_69430();
function switchText_69430() {
	window.obj69414_droppedInsideTargetActions_2_runningActionsCount = obj69414_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj69535_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj69535_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj69535").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj69535_content");
			setTimeout(function () {
				window.obj69414_droppedInsideTargetActions_2_runningActionsCount = window.obj69414_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj69414_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj69414_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj69414_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj69414_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj69535 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj69414_droppedInsideTargetActions_2_runningActionsCount = window.obj69414_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj69414_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj69414_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj69414_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj69414_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj69414_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69414_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj69414").trigger("obj69414_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69414) {
				console.warn("de-queueing event obj69414." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69414").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69414_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj69414 
move_69431();
function move_69431() {
	window.obj69414_droppedInsideTargetActions_2_runningActionsCount = obj69414_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj69414");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 365;
	var moveY = 621;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj69414_droppedInsideTargetActions_2_runningActionsCount = window.obj69414_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj69414_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj69414_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj69414_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj69414_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj69414_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69414_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj69414").trigger("obj69414_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69414) {
				console.warn("de-queueing event obj69414." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69414").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69414_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_69432();
function runjs_69432() {
	window.obj69414_droppedInsideTargetActions_2_runningActionsCount = obj69414_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj69553").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj69414_droppedInsideTargetActions_2_runningActionsCount = window.obj69414_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj69414_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj69414_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj69414_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj69414_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj69414_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69414_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj69414").trigger("obj69414_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69414) {
				console.warn("de-queueing event obj69414." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69414").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69414_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_69433();
function runjs_69433() {
	window.obj69414_droppedInsideTargetActions_2_runningActionsCount = obj69414_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj69553").css("border-color", "#000000"); $("#obj69553").css("border-width", "1px"); $("#obj69553").css("border-style", "solid"); $("#obj69553").css("border-radius", "10px"); $("#obj69553").css("-webkit-border-radius", "10px"); $("#obj69553").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj69414_droppedInsideTargetActions_2_runningActionsCount = window.obj69414_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj69414_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj69414_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj69414_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj69414_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj69414_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69414_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj69414").trigger("obj69414_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69414) {
				console.warn("de-queueing event obj69414." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69414").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69414_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj69551
(function(){
	window.obj69414_droppedInsideTargetActions_2_runningActionsCount = obj69414_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj69551";
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
					window.obj69414_droppedInsideTargetActions_2_runningActionsCount = window.obj69414_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj69414_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj69414_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj69414_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj69414_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj69414_droppedInsideTargetActions_2_runningActionsCount = window.obj69414_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj69414_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj69414_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj69414_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj69414_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj69414_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69414_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj69414").trigger("obj69414_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69414) {
				console.warn("de-queueing event obj69414." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69414").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69414_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_69435();
function runjs_69435() {
	window.obj69414_droppedInsideTargetActions_2_runningActionsCount = obj69414_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj69414").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj69414_droppedInsideTargetActions_2_runningActionsCount = window.obj69414_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj69414_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj69414_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj69414_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj69414_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj69414_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69414_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj69414").trigger("obj69414_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69414) {
				console.warn("de-queueing event obj69414." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69414").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69414_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_69436();
function runjs_69436() {
	window.obj69414_droppedInsideTargetActions_2_runningActionsCount = obj69414_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj69414").css("border-color", "rgba(0,0,0,0)"); $("#obj69414").css("border-width", "0px"); $("#obj69414").css("border-style", "solid"); $("#obj69414").css("border-radius", "10px"); $("#obj69414").css("-webkit-border-radius", "10px"); $("#obj69414").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj69414_droppedInsideTargetActions_2_runningActionsCount = window.obj69414_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj69414_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj69414_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj69414_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj69414_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj69414_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69414_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj69414").trigger("obj69414_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69414) {
				console.warn("de-queueing event obj69414." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69414").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69414_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj69534 
playAudio_69437();
function playAudio_69437() {
	window.obj69414_droppedInsideTargetActions_2_runningActionsCount = obj69414_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj69534")[0];
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
		    window.obj69414_droppedInsideTargetActions_2_runningActionsCount = window.obj69414_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj69414_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj69414_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj69414_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj69414_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj69414_droppedInsideTargetActions_2_runningActionsCount = window.obj69414_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj69414_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj69414_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj69414_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj69414_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj69414_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69414_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj69414").trigger("obj69414_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69414) {
				console.warn("de-queueing event obj69414." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69414").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69414_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_69438();
function switchText_69438() {
	window.obj69414_droppedInsideTargetActions_2_runningActionsCount = obj69414_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj69535_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj69535_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj69535").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj69535_content");
			setTimeout(function () {
				window.obj69414_droppedInsideTargetActions_2_runningActionsCount = window.obj69414_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj69414_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj69414_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj69414_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj69414_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj69535 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj69414_droppedInsideTargetActions_2_runningActionsCount = window.obj69414_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj69414_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj69414_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj69414_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj69414_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj69414_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj69414_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj69414").trigger("obj69414_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69414) {
				console.warn("de-queueing event obj69414." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69414").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69414_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj69414_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69414_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj69414").trigger("obj69414_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69414) {
				console.warn("de-queueing event obj69414." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69414").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69414_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_69419();
function runjs_69419() {
	window.obj69414_droppedInsideTargetActions_runningActionsCount = obj69414_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj69541").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj69414_droppedInsideTargetActions_runningActionsCount = window.obj69414_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj69414_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj69414_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj69414_droppedInsideTargetActions_runningActionsCount == 0) {
	obj69414_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj69414_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69414_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj69414").trigger("obj69414_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69414) {
				console.warn("de-queueing event obj69414." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69414").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69414_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_69423();
function switchText_69423() {
	window.obj69414_droppedInsideTargetActions_runningActionsCount = obj69414_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj69535_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj69535_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj69535").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj69535_content");
			setTimeout(function () {
				window.obj69414_droppedInsideTargetActions_runningActionsCount = window.obj69414_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj69414_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj69414_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj69414_droppedInsideTargetActions_runningActionsCount == 0) {
	obj69414_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj69535 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj69414_droppedInsideTargetActions_runningActionsCount = window.obj69414_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj69414_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj69414_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj69414_droppedInsideTargetActions_runningActionsCount == 0) {
	obj69414_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj69414_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69414_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj69414").trigger("obj69414_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69414) {
				console.warn("de-queueing event obj69414." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69414").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69414_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_69420();
function runjs_69420() {
	window.obj69414_droppedInsideTargetActions_runningActionsCount = obj69414_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj69541").css("border-color", "#058E3F"); $("#obj69541").css("border-width", "2px"); $("#obj69541").css("border-style", "solid"); $("#obj69541").css("border-radius", "10px"); $("#obj69541").css("-webkit-border-radius", "10px"); $("#obj69541").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj69414_droppedInsideTargetActions_runningActionsCount = window.obj69414_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj69414_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj69414_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj69414_droppedInsideTargetActions_runningActionsCount == 0) {
	obj69414_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj69414_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69414_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj69414").trigger("obj69414_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69414) {
				console.warn("de-queueing event obj69414." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69414").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69414_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj69539 
hide_69421();
function hide_69421() {
	var selector = "#obj69539";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj69414_droppedInsideTargetActions_runningActionsCount = obj69414_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj69414_droppedInsideTargetActions_runningActionsCount = window.obj69414_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj69414_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj69414_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj69414_droppedInsideTargetActions_runningActionsCount == 0) {
	obj69414_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_69421(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj69414_droppedInsideTargetActions_runningActionsCount = window.obj69414_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj69414_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj69414_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj69414_droppedInsideTargetActions_runningActionsCount == 0) {
	obj69414_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj69414_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69414_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj69414").trigger("obj69414_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69414) {
				console.warn("de-queueing event obj69414." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69414").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69414_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_69422();
function runjs_69422() {
	window.obj69414_droppedInsideTargetActions_runningActionsCount = obj69414_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj69414").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj69414_droppedInsideTargetActions_runningActionsCount = window.obj69414_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj69414_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj69414_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj69414_droppedInsideTargetActions_runningActionsCount == 0) {
	obj69414_droppedInsideTargetActions_actionGroup5();
}
	}, 1);
}







};
obj69414_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69414_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj69414").trigger("obj69414_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69414) {
				console.warn("de-queueing event obj69414." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69414").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69414_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj69533 
playAudio_69424();
function playAudio_69424() {
	window.obj69414_droppedInsideTargetActions_runningActionsCount = obj69414_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj69533")[0];
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
		    window.obj69414_droppedInsideTargetActions_runningActionsCount = window.obj69414_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj69414_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj69414_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj69414_droppedInsideTargetActions_runningActionsCount == 0) {
	obj69414_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj69414_droppedInsideTargetActions_runningActionsCount = window.obj69414_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj69414_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj69414_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj69414_droppedInsideTargetActions_runningActionsCount == 0) {
	obj69414_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj69414_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69414_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj69414").trigger("obj69414_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69414) {
				console.warn("de-queueing event obj69414." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69414").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69414_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90142();
function switchText_90142() {
	window.obj69414_droppedInsideTargetActions_runningActionsCount = obj69414_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj69535_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj69535_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj69535").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj69535_content");
			setTimeout(function () {
				window.obj69414_droppedInsideTargetActions_runningActionsCount = window.obj69414_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj69414_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj69414_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj69414_droppedInsideTargetActions_runningActionsCount == 0) {
	obj69414_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj69535 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj69414_droppedInsideTargetActions_runningActionsCount = window.obj69414_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj69414_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj69414_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj69414_droppedInsideTargetActions_runningActionsCount == 0) {
	obj69414_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj69414_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj69414_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj69414").trigger("obj69414_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69414) {
				console.warn("de-queueing event obj69414." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69414").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69414_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj69396_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69396_onTap_activeActionGroupIndex = -1;
		$("#obj69396").trigger("obj69396_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69396) {
				console.warn("de-queueing event obj69396." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69396").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69396_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj69396 
hide_69399();
function hide_69399() {
	var selector = "#obj69396";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj69396_onTap_runningActionsCount = obj69396_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj69396_onTap_runningActionsCount = window.obj69396_onTap_runningActionsCount - 1;
if (window.obj69396_onTap_runningActionsCount < 0) {
	window.obj69396_onTap_runningActionsCount = 0;
} else if (window.obj69396_onTap_runningActionsCount == 0) {
	obj69396_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_69399(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj69396_onTap_runningActionsCount = window.obj69396_onTap_runningActionsCount - 1;
if (window.obj69396_onTap_runningActionsCount < 0) {
	window.obj69396_onTap_runningActionsCount = 0;
} else if (window.obj69396_onTap_runningActionsCount == 0) {
	obj69396_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj69386 
stopMovie_69398();
function stopMovie_69398() {
	window.obj69396_onTap_runningActionsCount = obj69396_onTap_runningActionsCount + 1;
	var myVideo = $("#obj69386")[0];
	myVideo.pause();
	window.obj69396_onTap_runningActionsCount = window.obj69396_onTap_runningActionsCount - 1;
if (window.obj69396_onTap_runningActionsCount < 0) {
	window.obj69396_onTap_runningActionsCount = 0;
} else if (window.obj69396_onTap_runningActionsCount == 0) {
	obj69396_onTap_actionGroup1();
}
}
















};
obj69396_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69396_onTap_activeActionGroupIndex = -1;
		$("#obj69396").trigger("obj69396_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69396) {
				console.warn("de-queueing event obj69396." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69396").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69396_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj69388
(function(){
	window.obj69396_onTap_runningActionsCount = obj69396_onTap_runningActionsCount + 1;

	var selector = "#obj69388";
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
					window.obj69396_onTap_runningActionsCount = window.obj69396_onTap_runningActionsCount - 1;
if (window.obj69396_onTap_runningActionsCount < 0) {
	window.obj69396_onTap_runningActionsCount = 0;
} else if (window.obj69396_onTap_runningActionsCount == 0) {
	obj69396_onTap_actionGroup2();
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
				window.obj69396_onTap_runningActionsCount = window.obj69396_onTap_runningActionsCount - 1;
if (window.obj69396_onTap_runningActionsCount < 0) {
	window.obj69396_onTap_runningActionsCount = 0;
} else if (window.obj69396_onTap_runningActionsCount == 0) {
	obj69396_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj69396_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69396_onTap_activeActionGroupIndex = -1;
		$("#obj69396").trigger("obj69396_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69396) {
				console.warn("de-queueing event obj69396." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69396").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69396_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj69386 
move_69401();
function move_69401() {
	window.obj69396_onTap_runningActionsCount = obj69396_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj69386");
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
			window.obj69396_onTap_runningActionsCount = window.obj69396_onTap_runningActionsCount - 1;
if (window.obj69396_onTap_runningActionsCount < 0) {
	window.obj69396_onTap_runningActionsCount = 0;
} else if (window.obj69396_onTap_runningActionsCount == 0) {
	obj69396_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj69396_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj69396_onTap_activeActionGroupIndex = -1;
		$("#obj69396").trigger("obj69396_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69396) {
				console.warn("de-queueing event obj69396." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69396").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69396_onTap_activeActionGroupIndex = 3;
	





















};
obj69388_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69388_onTap_activeActionGroupIndex = -1;
		$("#obj69388").trigger("obj69388_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69388) {
				console.warn("de-queueing event obj69388." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69388").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69388_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj69388 
hide_69391();
function hide_69391() {
	var selector = "#obj69388";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj69388_onTap_runningActionsCount = obj69388_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj69388_onTap_runningActionsCount = window.obj69388_onTap_runningActionsCount - 1;
if (window.obj69388_onTap_runningActionsCount < 0) {
	window.obj69388_onTap_runningActionsCount = 0;
} else if (window.obj69388_onTap_runningActionsCount == 0) {
	obj69388_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_69391(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj69388_onTap_runningActionsCount = window.obj69388_onTap_runningActionsCount - 1;
if (window.obj69388_onTap_runningActionsCount < 0) {
	window.obj69388_onTap_runningActionsCount = 0;
} else if (window.obj69388_onTap_runningActionsCount == 0) {
	obj69388_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj69386 
playPauseMovie_69390();
function playPauseMovie_69390() {
	window.obj69388_onTap_runningActionsCount = obj69388_onTap_runningActionsCount + 1;
	var myVideo = $("#obj69386")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj69388_onTap_runningActionsCount = window.obj69388_onTap_runningActionsCount - 1;
if (window.obj69388_onTap_runningActionsCount < 0) {
	window.obj69388_onTap_runningActionsCount = 0;
} else if (window.obj69388_onTap_runningActionsCount == 0) {
	obj69388_onTap_actionGroup1();
}
}

















};
obj69388_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69388_onTap_activeActionGroupIndex = -1;
		$("#obj69388").trigger("obj69388_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69388) {
				console.warn("de-queueing event obj69388." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69388").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69388_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj69396
(function(){
	window.obj69388_onTap_runningActionsCount = obj69388_onTap_runningActionsCount + 1;

	var selector = "#obj69396";
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
					window.obj69388_onTap_runningActionsCount = window.obj69388_onTap_runningActionsCount - 1;
if (window.obj69388_onTap_runningActionsCount < 0) {
	window.obj69388_onTap_runningActionsCount = 0;
} else if (window.obj69388_onTap_runningActionsCount == 0) {
	obj69388_onTap_actionGroup2();
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
				window.obj69388_onTap_runningActionsCount = window.obj69388_onTap_runningActionsCount - 1;
if (window.obj69388_onTap_runningActionsCount < 0) {
	window.obj69388_onTap_runningActionsCount = 0;
} else if (window.obj69388_onTap_runningActionsCount == 0) {
	obj69388_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj69388_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69388_onTap_activeActionGroupIndex = -1;
		$("#obj69388").trigger("obj69388_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69388) {
				console.warn("de-queueing event obj69388." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69388").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69388_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj69386 
move_69393();
function move_69393() {
	window.obj69388_onTap_runningActionsCount = obj69388_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj69386");
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
			window.obj69388_onTap_runningActionsCount = window.obj69388_onTap_runningActionsCount - 1;
if (window.obj69388_onTap_runningActionsCount < 0) {
	window.obj69388_onTap_runningActionsCount = 0;
} else if (window.obj69388_onTap_runningActionsCount == 0) {
	obj69388_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj69388_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj69388_onTap_activeActionGroupIndex = -1;
		$("#obj69388").trigger("obj69388_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69388) {
				console.warn("de-queueing event obj69388." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69388").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69388_onTap_activeActionGroupIndex = 3;
	





















};
obj87226_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87226_onTap_activeActionGroupIndex = -1;
		$("#obj87226").trigger("obj87226_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87226) {
				console.warn("de-queueing event obj87226." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87226").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87226_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj87231 
stopAudio_87228();
function stopAudio_87228() {
	window.obj87226_onTap_runningActionsCount = obj87226_onTap_runningActionsCount + 1;
	var myAudio = $("#obj87231")[0];
	myAudio.pause();
	window.obj87226_onTap_runningActionsCount = window.obj87226_onTap_runningActionsCount - 1;
if (window.obj87226_onTap_runningActionsCount < 0) {
	window.obj87226_onTap_runningActionsCount = 0;
} else if (window.obj87226_onTap_runningActionsCount == 0) {
	obj87226_onTap_actionGroup1();
}
}








};
obj87226_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87226_onTap_activeActionGroupIndex = -1;
		$("#obj87226").trigger("obj87226_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87226) {
				console.warn("de-queueing event obj87226." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87226").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87226_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj87226 
hide_87229();
function hide_87229() {
	var selector = "#obj87226";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj87226_onTap_runningActionsCount = obj87226_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj87226_onTap_runningActionsCount = window.obj87226_onTap_runningActionsCount - 1;
if (window.obj87226_onTap_runningActionsCount < 0) {
	window.obj87226_onTap_runningActionsCount = 0;
} else if (window.obj87226_onTap_runningActionsCount == 0) {
	obj87226_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_87229(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj87226_onTap_runningActionsCount = window.obj87226_onTap_runningActionsCount - 1;
if (window.obj87226_onTap_runningActionsCount < 0) {
	window.obj87226_onTap_runningActionsCount = 0;
} else if (window.obj87226_onTap_runningActionsCount == 0) {
	obj87226_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj87226_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87226_onTap_activeActionGroupIndex = -1;
		$("#obj87226").trigger("obj87226_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87226) {
				console.warn("de-queueing event obj87226." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87226").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87226_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj87221
(function(){
	window.obj87226_onTap_runningActionsCount = obj87226_onTap_runningActionsCount + 1;

	var selector = "#obj87221";
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
					window.obj87226_onTap_runningActionsCount = window.obj87226_onTap_runningActionsCount - 1;
if (window.obj87226_onTap_runningActionsCount < 0) {
	window.obj87226_onTap_runningActionsCount = 0;
} else if (window.obj87226_onTap_runningActionsCount == 0) {
	obj87226_onTap_actionGroup3();
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
				window.obj87226_onTap_runningActionsCount = window.obj87226_onTap_runningActionsCount - 1;
if (window.obj87226_onTap_runningActionsCount < 0) {
	window.obj87226_onTap_runningActionsCount = 0;
} else if (window.obj87226_onTap_runningActionsCount == 0) {
	obj87226_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj87226_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj87226_onTap_activeActionGroupIndex = -1;
		$("#obj87226").trigger("obj87226_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87226) {
				console.warn("de-queueing event obj87226." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87226").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87226_onTap_activeActionGroupIndex = 3;
	





















};
obj87221_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87221_onTap_activeActionGroupIndex = -1;
		$("#obj87221").trigger("obj87221_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87221) {
				console.warn("de-queueing event obj87221." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87221").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87221_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj87221 
hide_87223();
function hide_87223() {
	var selector = "#obj87221";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj87221_onTap_runningActionsCount = obj87221_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj87221_onTap_runningActionsCount = window.obj87221_onTap_runningActionsCount - 1;
if (window.obj87221_onTap_runningActionsCount < 0) {
	window.obj87221_onTap_runningActionsCount = 0;
} else if (window.obj87221_onTap_runningActionsCount == 0) {
	obj87221_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_87223(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj87221_onTap_runningActionsCount = window.obj87221_onTap_runningActionsCount - 1;
if (window.obj87221_onTap_runningActionsCount < 0) {
	window.obj87221_onTap_runningActionsCount = 0;
} else if (window.obj87221_onTap_runningActionsCount == 0) {
	obj87221_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj87221_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87221_onTap_activeActionGroupIndex = -1;
		$("#obj87221").trigger("obj87221_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87221) {
				console.warn("de-queueing event obj87221." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87221").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87221_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj87226
(function(){
	window.obj87221_onTap_runningActionsCount = obj87221_onTap_runningActionsCount + 1;

	var selector = "#obj87226";
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
					window.obj87221_onTap_runningActionsCount = window.obj87221_onTap_runningActionsCount - 1;
if (window.obj87221_onTap_runningActionsCount < 0) {
	window.obj87221_onTap_runningActionsCount = 0;
} else if (window.obj87221_onTap_runningActionsCount == 0) {
	obj87221_onTap_actionGroup2();
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
				window.obj87221_onTap_runningActionsCount = window.obj87221_onTap_runningActionsCount - 1;
if (window.obj87221_onTap_runningActionsCount < 0) {
	window.obj87221_onTap_runningActionsCount = 0;
} else if (window.obj87221_onTap_runningActionsCount == 0) {
	obj87221_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj87221_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87221_onTap_activeActionGroupIndex = -1;
		$("#obj87221").trigger("obj87221_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87221) {
				console.warn("de-queueing event obj87221." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87221").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87221_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj87231 
playAudio_87225();
function playAudio_87225() {
	window.obj87221_onTap_runningActionsCount = obj87221_onTap_runningActionsCount + 1;
	var myAudio = $("#obj87231")[0];
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
		    window.obj87221_onTap_runningActionsCount = window.obj87221_onTap_runningActionsCount - 1;
if (window.obj87221_onTap_runningActionsCount < 0) {
	window.obj87221_onTap_runningActionsCount = 0;
} else if (window.obj87221_onTap_runningActionsCount == 0) {
	obj87221_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj87221_onTap_runningActionsCount = window.obj87221_onTap_runningActionsCount - 1;
if (window.obj87221_onTap_runningActionsCount < 0) {
	window.obj87221_onTap_runningActionsCount = 0;
} else if (window.obj87221_onTap_runningActionsCount == 0) {
	obj87221_onTap_actionGroup3();
}
	}
}









};
obj87221_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj87221_onTap_activeActionGroupIndex = -1;
		$("#obj87221").trigger("obj87221_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87221) {
				console.warn("de-queueing event obj87221." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87221").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87221_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj69578: Event Touch Down
 *
 */
$("#obj69578").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj69578_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj69578_onTap is still running");
	return;
}
var obj69578_onTap_runningActionsCount = 0;
var obj69578_onTap_loopCount = 0;
obj69578_onTap_actionGroup0();
});










/*
 *
 *   obj69575: Event Touch Down
 *
 */
$("#obj69575").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj69575_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj69575_onTap is still running");
	return;
}
var obj69575_onTap_runningActionsCount = 0;
var obj69575_onTap_loopCount = 0;
obj69575_onTap_actionGroup0();
});










/*
 *
 *   obj69571: Event Touch Down
 *
 */
$("#obj69571").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj69571_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj69571_onTap is still running");
	return;
}
var obj69571_onTap_runningActionsCount = 0;
var obj69571_onTap_loopCount = 0;
obj69571_onTap_actionGroup0();
});





























































































































































































































/*
 *
 *   obj69492: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj69492");
	var winTarget = document.getElementById("obj69492");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj69492").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj69492_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj69492_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj69492_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj69492_onTouchDown is still running");
	return;
}
var obj69492_onTouchDown_runningActionsCount = 0;
var obj69492_onTouchDown_loopCount = 0;
obj69492_onTouchDown_actionGroup0();
});



/*
 *
 *   obj69492: Event SCActionDragDrop69495_droppedOutsideTargetActions
 *
 */
$("#obj69492").bind("SCActionDragDrop69495_droppedOutsideTargetActions", function(event) {
	if (window.obj69492_SCActionDragDrop69495_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj69492_SCActionDragDrop69495_droppedOutsideTargetActions is still running");
	return;
}
var obj69492_SCActionDragDrop69495_droppedOutsideTargetActions_runningActionsCount = 0;
var obj69492_SCActionDragDrop69495_droppedOutsideTargetActions_loopCount = 0;
obj69492_SCActionDragDrop69495_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj69492: Event droppedInsideTargetActions_3
 *
 */
$("#obj69492").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj69492_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj69492_droppedInsideTargetActions_3 is still running");
	return;
}
var obj69492_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj69492_droppedInsideTargetActions_3_loopCount = 0;
obj69492_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj69492: Event droppedInsideTargetActions_2
 *
 */
$("#obj69492").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj69492_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj69492_droppedInsideTargetActions_2 is still running");
	return;
}
var obj69492_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj69492_droppedInsideTargetActions_2_loopCount = 0;
obj69492_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj69492: Event droppedInsideTargetActions
 *
 */
$("#obj69492").bind("droppedInsideTargetActions", function(event) {
	if (window.obj69492_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj69492_droppedInsideTargetActions is still running");
	return;
}
var obj69492_droppedInsideTargetActions_runningActionsCount = 0;
var obj69492_droppedInsideTargetActions_loopCount = 0;
obj69492_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj69453: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj69453");
	var winTarget = document.getElementById("obj69453");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj69453").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj69453_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj69453_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj69453_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj69453_onTouchDown is still running");
	return;
}
var obj69453_onTouchDown_runningActionsCount = 0;
var obj69453_onTouchDown_loopCount = 0;
obj69453_onTouchDown_actionGroup0();
});



/*
 *
 *   obj69453: Event SCActionDragDrop69456_droppedOutsideTargetActions
 *
 */
$("#obj69453").bind("SCActionDragDrop69456_droppedOutsideTargetActions", function(event) {
	if (window.obj69453_SCActionDragDrop69456_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj69453_SCActionDragDrop69456_droppedOutsideTargetActions is still running");
	return;
}
var obj69453_SCActionDragDrop69456_droppedOutsideTargetActions_runningActionsCount = 0;
var obj69453_SCActionDragDrop69456_droppedOutsideTargetActions_loopCount = 0;
obj69453_SCActionDragDrop69456_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj69453: Event droppedInsideTargetActions_3
 *
 */
$("#obj69453").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj69453_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj69453_droppedInsideTargetActions_3 is still running");
	return;
}
var obj69453_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj69453_droppedInsideTargetActions_3_loopCount = 0;
obj69453_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj69453: Event droppedInsideTargetActions_2
 *
 */
$("#obj69453").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj69453_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj69453_droppedInsideTargetActions_2 is still running");
	return;
}
var obj69453_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj69453_droppedInsideTargetActions_2_loopCount = 0;
obj69453_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj69453: Event droppedInsideTargetActions
 *
 */
$("#obj69453").bind("droppedInsideTargetActions", function(event) {
	if (window.obj69453_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj69453_droppedInsideTargetActions is still running");
	return;
}
var obj69453_droppedInsideTargetActions_runningActionsCount = 0;
var obj69453_droppedInsideTargetActions_loopCount = 0;
obj69453_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj69414: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj69414");
	var winTarget = document.getElementById("obj69414");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj69414").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj69414_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj69414_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj69414_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj69414_onTouchDown is still running");
	return;
}
var obj69414_onTouchDown_runningActionsCount = 0;
var obj69414_onTouchDown_loopCount = 0;
obj69414_onTouchDown_actionGroup0();
});



/*
 *
 *   obj69414: Event SCActionDragDrop69417_droppedOutsideTargetActions
 *
 */
$("#obj69414").bind("SCActionDragDrop69417_droppedOutsideTargetActions", function(event) {
	if (window.obj69414_SCActionDragDrop69417_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj69414_SCActionDragDrop69417_droppedOutsideTargetActions is still running");
	return;
}
var obj69414_SCActionDragDrop69417_droppedOutsideTargetActions_runningActionsCount = 0;
var obj69414_SCActionDragDrop69417_droppedOutsideTargetActions_loopCount = 0;
obj69414_SCActionDragDrop69417_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj69414: Event droppedInsideTargetActions_3
 *
 */
$("#obj69414").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj69414_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj69414_droppedInsideTargetActions_3 is still running");
	return;
}
var obj69414_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj69414_droppedInsideTargetActions_3_loopCount = 0;
obj69414_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj69414: Event droppedInsideTargetActions_2
 *
 */
$("#obj69414").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj69414_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj69414_droppedInsideTargetActions_2 is still running");
	return;
}
var obj69414_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj69414_droppedInsideTargetActions_2_loopCount = 0;
obj69414_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj69414: Event droppedInsideTargetActions
 *
 */
$("#obj69414").bind("droppedInsideTargetActions", function(event) {
	if (window.obj69414_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj69414_droppedInsideTargetActions is still running");
	return;
}
var obj69414_droppedInsideTargetActions_runningActionsCount = 0;
var obj69414_droppedInsideTargetActions_loopCount = 0;
obj69414_droppedInsideTargetActions_actionGroup0();
});





/*
 *
 *   obj69396: Event Touch Down
 *
 */
$("#obj69396").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj69396_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj69396_onTap is still running");
	return;
}
var obj69396_onTap_runningActionsCount = 0;
var obj69396_onTap_loopCount = 0;
obj69396_onTap_actionGroup0();
});










/*
 *
 *   obj69388: Event Touch Down
 *
 */
$("#obj69388").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj69388_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj69388_onTap is still running");
	return;
}
var obj69388_onTap_runningActionsCount = 0;
var obj69388_onTap_loopCount = 0;
obj69388_onTap_actionGroup0();
});










/*
 *
 *   obj87226: Event Touch Down
 *
 */
$("#obj87226").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj87226_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj87226_onTap is still running");
	return;
}
var obj87226_onTap_runningActionsCount = 0;
var obj87226_onTap_loopCount = 0;
obj87226_onTap_actionGroup0();
});










/*
 *
 *   obj87221: Event Touch Down
 *
 */
$("#obj87221").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj87221_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj87221_onTap is still running");
	return;
}
var obj87221_onTap_runningActionsCount = 0;
var obj87221_onTap_loopCount = 0;
obj87221_onTap_actionGroup0();
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
	
$("#obj69581").trigger('SCEventShow');
$("#obj69578").trigger('SCEventShow');
$("#obj69575").trigger('SCEventShow');
$("#obj69571").trigger('SCEventShow');
$("#obj69569").trigger('SCEventShow');
$("#obj69567").trigger('SCEventShow');
$("#obj69565").trigger('SCEventShow');
$("#obj69563").trigger('SCEventShow');
$("#obj69561").trigger('SCEventShow');
$("#obj69559").trigger('SCEventShow');
$("#obj69557").trigger('SCEventShow');
$("#obj69555").trigger('SCEventShow');
$("#obj69553").trigger('SCEventShow');
$("#obj69551").trigger('SCEventShow');
$("#obj69549").trigger('SCEventShow');
$("#obj69547").trigger('SCEventShow');
$("#obj69545").trigger('SCEventShow');
$("#obj69543").trigger('SCEventShow');
$("#obj69541").trigger('SCEventShow');
$("#obj69539").trigger('SCEventShow');
$("#obj69537").trigger('SCEventShow');
$("#obj69535").trigger('SCEventShow');
$("#obj69534").trigger('SCEventShow');
$("#obj69533").trigger('SCEventShow');
$("#obj69531").trigger('SCEventShow');
$("#obj69492").trigger('SCEventShow');
$("#obj69453").trigger('SCEventShow');
$("#obj69414").trigger('SCEventShow');
$("#obj69396").trigger('SCEventShow');
$("#obj69388").trigger('SCEventShow');
$("#obj87226").trigger('SCEventShow');
$("#obj87221").trigger('SCEventShow');
$("#obj87231").trigger('SCEventShow');
$("#obj94711").trigger('SCEventShow');
$("#obj69386").trigger('SCEventShow');
	
});