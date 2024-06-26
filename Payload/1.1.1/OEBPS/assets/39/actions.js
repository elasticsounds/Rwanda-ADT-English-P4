pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 8050;
pubcoder.page.title = pubcoder.page.title || "39";
pubcoder.page.number = pubcoder.page.number || 39;
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
var obj69335_onTap_activeActionGroupIndex = -1;
var obj69335_onTap_runningActionsCount = 0;
var obj69335_onTap_loopCount = 0;
var obj69332_onTap_activeActionGroupIndex = -1;
var obj69332_onTap_runningActionsCount = 0;
var obj69332_onTap_loopCount = 0;
var obj69328_onTap_activeActionGroupIndex = -1;
var obj69328_onTap_runningActionsCount = 0;
var obj69328_onTap_loopCount = 0;
var obj69255_onDrag_activeActionGroupIndex = -1;
var obj69255_onDrag_runningActionsCount = 0;
var obj69255_onDrag_loopCount = 0;
var obj69255_onTouchDown_activeActionGroupIndex = -1;
var obj69255_onTouchDown_runningActionsCount = 0;
var obj69255_onTouchDown_loopCount = 0;
var obj69255_SCActionDragDrop69258_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj69255_SCActionDragDrop69258_droppedOutsideTargetActions_runningActionsCount = 0;
var obj69255_SCActionDragDrop69258_droppedOutsideTargetActions_loopCount = 0;
var obj69255_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj69255_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj69255_droppedInsideTargetActions_3_loopCount = 0;
var obj69255_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj69255_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj69255_droppedInsideTargetActions_2_loopCount = 0;
var obj69255_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj69255_droppedInsideTargetActions_runningActionsCount = 0;
var obj69255_droppedInsideTargetActions_loopCount = 0;
var obj69216_onDrag_activeActionGroupIndex = -1;
var obj69216_onDrag_runningActionsCount = 0;
var obj69216_onDrag_loopCount = 0;
var obj69216_onTouchDown_activeActionGroupIndex = -1;
var obj69216_onTouchDown_runningActionsCount = 0;
var obj69216_onTouchDown_loopCount = 0;
var obj69216_SCActionDragDrop69219_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj69216_SCActionDragDrop69219_droppedOutsideTargetActions_runningActionsCount = 0;
var obj69216_SCActionDragDrop69219_droppedOutsideTargetActions_loopCount = 0;
var obj69216_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj69216_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj69216_droppedInsideTargetActions_3_loopCount = 0;
var obj69216_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj69216_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj69216_droppedInsideTargetActions_2_loopCount = 0;
var obj69216_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj69216_droppedInsideTargetActions_runningActionsCount = 0;
var obj69216_droppedInsideTargetActions_loopCount = 0;
var obj69177_onDrag_activeActionGroupIndex = -1;
var obj69177_onDrag_runningActionsCount = 0;
var obj69177_onDrag_loopCount = 0;
var obj69177_onTouchDown_activeActionGroupIndex = -1;
var obj69177_onTouchDown_runningActionsCount = 0;
var obj69177_onTouchDown_loopCount = 0;
var obj69177_SCActionDragDrop69180_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj69177_SCActionDragDrop69180_droppedOutsideTargetActions_runningActionsCount = 0;
var obj69177_SCActionDragDrop69180_droppedOutsideTargetActions_loopCount = 0;
var obj69177_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj69177_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj69177_droppedInsideTargetActions_3_loopCount = 0;
var obj69177_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj69177_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj69177_droppedInsideTargetActions_2_loopCount = 0;
var obj69177_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj69177_droppedInsideTargetActions_runningActionsCount = 0;
var obj69177_droppedInsideTargetActions_loopCount = 0;
var obj69159_onTap_activeActionGroupIndex = -1;
var obj69159_onTap_runningActionsCount = 0;
var obj69159_onTap_loopCount = 0;
var obj69151_onTap_activeActionGroupIndex = -1;
var obj69151_onTap_runningActionsCount = 0;
var obj69151_onTap_loopCount = 0;
var obj87202_onTap_activeActionGroupIndex = -1;
var obj87202_onTap_runningActionsCount = 0;
var obj87202_onTap_loopCount = 0;
var obj87197_onTap_activeActionGroupIndex = -1;
var obj87197_onTap_runningActionsCount = 0;
var obj87197_onTap_loopCount = 0;
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
		
obj69335_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69335_onTap_activeActionGroupIndex = -1;
		$("#obj69335").trigger("obj69335_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69335) {
				console.warn("de-queueing event obj69335." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69335").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69335_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_69337();
function goToPage_69337() {
	window.obj69335_onTap_runningActionsCount = obj69335_onTap_runningActionsCount + 1;
	$("#anchor236")[0].click();
	window.obj69335_onTap_runningActionsCount = window.obj69335_onTap_runningActionsCount - 1;
if (window.obj69335_onTap_runningActionsCount < 0) {
	window.obj69335_onTap_runningActionsCount = 0;
} else if (window.obj69335_onTap_runningActionsCount == 0) {
	obj69335_onTap_actionGroup1();
}
}





















};
obj69335_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj69335_onTap_activeActionGroupIndex = -1;
		$("#obj69335").trigger("obj69335_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69335) {
				console.warn("de-queueing event obj69335." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69335").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69335_onTap_activeActionGroupIndex = 1;
	





















};
obj69332_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69332_onTap_activeActionGroupIndex = -1;
		$("#obj69332").trigger("obj69332_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69332) {
				console.warn("de-queueing event obj69332." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69332").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69332_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_69334();
function goToPage_69334() {
	window.obj69332_onTap_runningActionsCount = obj69332_onTap_runningActionsCount + 1;
	$("#anchor237")[0].click();
	window.obj69332_onTap_runningActionsCount = window.obj69332_onTap_runningActionsCount - 1;
if (window.obj69332_onTap_runningActionsCount < 0) {
	window.obj69332_onTap_runningActionsCount = 0;
} else if (window.obj69332_onTap_runningActionsCount == 0) {
	obj69332_onTap_actionGroup1();
}
}





















};
obj69332_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj69332_onTap_activeActionGroupIndex = -1;
		$("#obj69332").trigger("obj69332_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69332) {
				console.warn("de-queueing event obj69332." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69332").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69332_onTap_activeActionGroupIndex = 1;
	





















};
obj69328_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69328_onTap_activeActionGroupIndex = -1;
		$("#obj69328").trigger("obj69328_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69328) {
				console.warn("de-queueing event obj69328." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69328").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69328_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_69330();
function goToPage_69330() {
	window.obj69328_onTap_runningActionsCount = obj69328_onTap_runningActionsCount + 1;
	$("#anchor238")[0].click();
	window.obj69328_onTap_runningActionsCount = window.obj69328_onTap_runningActionsCount - 1;
if (window.obj69328_onTap_runningActionsCount < 0) {
	window.obj69328_onTap_runningActionsCount = 0;
} else if (window.obj69328_onTap_runningActionsCount == 0) {
	obj69328_onTap_actionGroup1();
}
}





















};
obj69328_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj69328_onTap_activeActionGroupIndex = -1;
		$("#obj69328").trigger("obj69328_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69328) {
				console.warn("de-queueing event obj69328." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69328").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69328_onTap_activeActionGroupIndex = 1;
	





















};
obj69255_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69255_onTouchDown_activeActionGroupIndex = -1;
		$("#obj69255").trigger("obj69255_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69255) {
				console.warn("de-queueing event obj69255." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69255").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69255_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj69255");
//	action: dragDrop
//	target: obj69255 
dragDrop_69258();
function dragDrop_69258() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj69255_onTouchDown_runningActionsCount = obj69255_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj69255');
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
	  	containerNode = $('#obj69318');
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
    	window.obj69255_onTouchDown_runningActionsCount = window.obj69255_onTouchDown_runningActionsCount - 1;
if (window.obj69255_onTouchDown_runningActionsCount < 0) {
	window.obj69255_onTouchDown_runningActionsCount = 0;
} else if (window.obj69255_onTouchDown_runningActionsCount == 0) {
	obj69255_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj69306","#obj69310","#obj69308");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_69258 = false;
    	var dropped_id_69258;
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
					dropped_69258 = true;
					dropped_id_69258 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_69258) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj69255").trigger('SCActionDragDrop69258_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj69255_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj69255_onTouchDown_activeActionGroupIndex = -1;
		$("#obj69255").trigger("obj69255_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69255) {
				console.warn("de-queueing event obj69255." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69255").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69255_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj69255_SCActionDragDrop69258_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69255_SCActionDragDrop69258_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj69255").trigger("obj69255_SCActionDragDrop69258_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69255) {
				console.warn("de-queueing event obj69255." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69255").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69255_SCActionDragDrop69258_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj69255 
move_92210();
function move_92210() {
	window.obj69255_SCActionDragDrop69258_droppedOutsideTargetActions_runningActionsCount = obj69255_SCActionDragDrop69258_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj69255");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 74;
	var moveY = 583;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj69255_SCActionDragDrop69258_droppedOutsideTargetActions_runningActionsCount = window.obj69255_SCActionDragDrop69258_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj69255_SCActionDragDrop69258_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj69255_SCActionDragDrop69258_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj69255_SCActionDragDrop69258_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj69255_SCActionDragDrop69258_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj69255_SCActionDragDrop69258_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj69255_SCActionDragDrop69258_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj69255").trigger("obj69255_SCActionDragDrop69258_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69255) {
				console.warn("de-queueing event obj69255." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69255").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69255_SCActionDragDrop69258_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj69255_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69255_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj69255").trigger("obj69255_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69255) {
				console.warn("de-queueing event obj69255." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69255").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69255_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_69281();
function runjs_69281() {
	window.obj69255_droppedInsideTargetActions_3_runningActionsCount = obj69255_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj69308").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj69255_droppedInsideTargetActions_3_runningActionsCount = window.obj69255_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj69255_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj69255_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj69255_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj69255_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj69255_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69255_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj69255").trigger("obj69255_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69255) {
				console.warn("de-queueing event obj69255." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69255").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69255_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_69282();
function runjs_69282() {
	window.obj69255_droppedInsideTargetActions_3_runningActionsCount = obj69255_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj69308").css("border-color", "#C00000"); $("#obj69308").css("border-width", "2px"); $("#obj69308").css("border-style", "solid"); $("#obj69308").css("border-radius", "10px"); $("#obj69308").css("-webkit-border-radius", "10px"); $("#obj69308").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj69255_droppedInsideTargetActions_3_runningActionsCount = window.obj69255_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj69255_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj69255_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj69255_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj69255_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj69255_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69255_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj69255").trigger("obj69255_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69255) {
				console.warn("de-queueing event obj69255." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69255").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69255_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj69302 
hide_69283();
function hide_69283() {
	var selector = "#obj69302";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj69255_droppedInsideTargetActions_3_runningActionsCount = obj69255_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj69255_droppedInsideTargetActions_3_runningActionsCount = window.obj69255_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj69255_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj69255_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj69255_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj69255_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_69283(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj69255_droppedInsideTargetActions_3_runningActionsCount = window.obj69255_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj69255_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj69255_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj69255_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj69255_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj69255_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69255_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj69255").trigger("obj69255_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69255) {
				console.warn("de-queueing event obj69255." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69255").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69255_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_69284();
function runjs_69284() {
	window.obj69255_droppedInsideTargetActions_3_runningActionsCount = obj69255_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj69255").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj69255_droppedInsideTargetActions_3_runningActionsCount = window.obj69255_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj69255_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj69255_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj69255_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj69255_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj69255_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69255_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj69255").trigger("obj69255_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69255) {
				console.warn("de-queueing event obj69255." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69255").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69255_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_69285();
function switchText_69285() {
	window.obj69255_droppedInsideTargetActions_3_runningActionsCount = obj69255_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj69296_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj69296_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj69296").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj69296_content");
			setTimeout(function () {
				window.obj69255_droppedInsideTargetActions_3_runningActionsCount = window.obj69255_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj69255_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj69255_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj69255_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj69255_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj69296 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj69255_droppedInsideTargetActions_3_runningActionsCount = window.obj69255_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj69255_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj69255_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj69255_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj69255_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj69255_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69255_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj69255").trigger("obj69255_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69255) {
				console.warn("de-queueing event obj69255." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69255").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69255_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj69255 
move_69286();
function move_69286() {
	window.obj69255_droppedInsideTargetActions_3_runningActionsCount = obj69255_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj69255");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 74;
	var moveY = 583;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj69255_droppedInsideTargetActions_3_runningActionsCount = window.obj69255_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj69255_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj69255_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj69255_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj69255_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj69255_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69255_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj69255").trigger("obj69255_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69255) {
				console.warn("de-queueing event obj69255." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69255").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69255_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_69287();
function runjs_69287() {
	window.obj69255_droppedInsideTargetActions_3_runningActionsCount = obj69255_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj69308").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj69255_droppedInsideTargetActions_3_runningActionsCount = window.obj69255_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj69255_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj69255_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj69255_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj69255_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj69255_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69255_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj69255").trigger("obj69255_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69255) {
				console.warn("de-queueing event obj69255." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69255").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69255_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_69288();
function runjs_69288() {
	window.obj69255_droppedInsideTargetActions_3_runningActionsCount = obj69255_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj69308").css("border-color", "#000000"); $("#obj69308").css("border-width", "1px"); $("#obj69308").css("border-style", "solid"); $("#obj69308").css("border-radius", "10px"); $("#obj69308").css("-webkit-border-radius", "10px"); $("#obj69308").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj69255_droppedInsideTargetActions_3_runningActionsCount = window.obj69255_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj69255_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj69255_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj69255_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj69255_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj69255_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69255_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj69255").trigger("obj69255_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69255) {
				console.warn("de-queueing event obj69255." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69255").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69255_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj69302
(function(){
	window.obj69255_droppedInsideTargetActions_3_runningActionsCount = obj69255_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj69302";
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
					window.obj69255_droppedInsideTargetActions_3_runningActionsCount = window.obj69255_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj69255_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj69255_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj69255_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj69255_droppedInsideTargetActions_3_actionGroup9();
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
				window.obj69255_droppedInsideTargetActions_3_runningActionsCount = window.obj69255_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj69255_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj69255_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj69255_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj69255_droppedInsideTargetActions_3_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj69255_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69255_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj69255").trigger("obj69255_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69255) {
				console.warn("de-queueing event obj69255." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69255").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69255_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_69290();
function runjs_69290() {
	window.obj69255_droppedInsideTargetActions_3_runningActionsCount = obj69255_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj69255").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj69255_droppedInsideTargetActions_3_runningActionsCount = window.obj69255_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj69255_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj69255_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj69255_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj69255_droppedInsideTargetActions_3_actionGroup10();
}
	}, 1);
}







};
obj69255_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69255_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj69255").trigger("obj69255_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69255) {
				console.warn("de-queueing event obj69255." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69255").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69255_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_69291();
function runjs_69291() {
	window.obj69255_droppedInsideTargetActions_3_runningActionsCount = obj69255_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj69255").css("border-color", "rgba(0,0,0,0)"); $("#obj69255").css("border-width", "0px"); $("#obj69255").css("border-style", "solid"); $("#obj69255").css("border-radius", "10px"); $("#obj69255").css("-webkit-border-radius", "10px"); $("#obj69255").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj69255_droppedInsideTargetActions_3_runningActionsCount = window.obj69255_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj69255_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj69255_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj69255_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj69255_droppedInsideTargetActions_3_actionGroup11();
}
	}, 1);
}







};
obj69255_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69255_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj69255").trigger("obj69255_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69255) {
				console.warn("de-queueing event obj69255." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69255").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69255_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj69295 
playAudio_69292();
function playAudio_69292() {
	window.obj69255_droppedInsideTargetActions_3_runningActionsCount = obj69255_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj69295")[0];
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
		    window.obj69255_droppedInsideTargetActions_3_runningActionsCount = window.obj69255_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj69255_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj69255_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj69255_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj69255_droppedInsideTargetActions_3_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj69255_droppedInsideTargetActions_3_runningActionsCount = window.obj69255_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj69255_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj69255_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj69255_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj69255_droppedInsideTargetActions_3_actionGroup12();
}
	}
}









};
obj69255_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69255_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj69255").trigger("obj69255_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69255) {
				console.warn("de-queueing event obj69255." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69255").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69255_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_69293();
function switchText_69293() {
	window.obj69255_droppedInsideTargetActions_3_runningActionsCount = obj69255_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj69296_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj69296_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj69296").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj69296_content");
			setTimeout(function () {
				window.obj69255_droppedInsideTargetActions_3_runningActionsCount = window.obj69255_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj69255_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj69255_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj69255_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj69255_droppedInsideTargetActions_3_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj69296 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj69255_droppedInsideTargetActions_3_runningActionsCount = window.obj69255_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj69255_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj69255_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj69255_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj69255_droppedInsideTargetActions_3_actionGroup13();
}
		}, 1);
	}
}






};
obj69255_droppedInsideTargetActions_3_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj69255_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj69255").trigger("obj69255_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69255) {
				console.warn("de-queueing event obj69255." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69255").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69255_droppedInsideTargetActions_3_activeActionGroupIndex = 13;
	





















};
obj69255_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69255_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj69255").trigger("obj69255_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69255) {
				console.warn("de-queueing event obj69255." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69255").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69255_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_69267();
function runjs_69267() {
	window.obj69255_droppedInsideTargetActions_2_runningActionsCount = obj69255_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj69310").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj69255_droppedInsideTargetActions_2_runningActionsCount = window.obj69255_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj69255_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj69255_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj69255_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj69255_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj69255_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69255_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj69255").trigger("obj69255_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69255) {
				console.warn("de-queueing event obj69255." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69255").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69255_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_69268();
function runjs_69268() {
	window.obj69255_droppedInsideTargetActions_2_runningActionsCount = obj69255_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj69310").css("border-color", "#C00000"); $("#obj69310").css("border-width", "2px"); $("#obj69310").css("border-style", "solid"); $("#obj69310").css("border-radius", "10px"); $("#obj69310").css("-webkit-border-radius", "10px"); $("#obj69310").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj69255_droppedInsideTargetActions_2_runningActionsCount = window.obj69255_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj69255_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj69255_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj69255_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj69255_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj69255_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69255_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj69255").trigger("obj69255_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69255) {
				console.warn("de-queueing event obj69255." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69255").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69255_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj69304 
hide_69269();
function hide_69269() {
	var selector = "#obj69304";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj69255_droppedInsideTargetActions_2_runningActionsCount = obj69255_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj69255_droppedInsideTargetActions_2_runningActionsCount = window.obj69255_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj69255_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj69255_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj69255_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj69255_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_69269(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj69255_droppedInsideTargetActions_2_runningActionsCount = window.obj69255_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj69255_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj69255_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj69255_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj69255_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj69255_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69255_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj69255").trigger("obj69255_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69255) {
				console.warn("de-queueing event obj69255." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69255").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69255_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_69270();
function runjs_69270() {
	window.obj69255_droppedInsideTargetActions_2_runningActionsCount = obj69255_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj69255").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj69255_droppedInsideTargetActions_2_runningActionsCount = window.obj69255_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj69255_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj69255_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj69255_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj69255_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj69255_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69255_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj69255").trigger("obj69255_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69255) {
				console.warn("de-queueing event obj69255." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69255").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69255_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_69271();
function switchText_69271() {
	window.obj69255_droppedInsideTargetActions_2_runningActionsCount = obj69255_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj69296_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj69296_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj69296").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj69296_content");
			setTimeout(function () {
				window.obj69255_droppedInsideTargetActions_2_runningActionsCount = window.obj69255_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj69255_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj69255_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj69255_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj69255_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj69296 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj69255_droppedInsideTargetActions_2_runningActionsCount = window.obj69255_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj69255_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj69255_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj69255_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj69255_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj69255_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69255_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj69255").trigger("obj69255_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69255) {
				console.warn("de-queueing event obj69255." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69255").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69255_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj69255 
move_69272();
function move_69272() {
	window.obj69255_droppedInsideTargetActions_2_runningActionsCount = obj69255_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj69255");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 74;
	var moveY = 583;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj69255_droppedInsideTargetActions_2_runningActionsCount = window.obj69255_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj69255_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj69255_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj69255_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj69255_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj69255_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69255_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj69255").trigger("obj69255_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69255) {
				console.warn("de-queueing event obj69255." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69255").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69255_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_69273();
function runjs_69273() {
	window.obj69255_droppedInsideTargetActions_2_runningActionsCount = obj69255_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj69310").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj69255_droppedInsideTargetActions_2_runningActionsCount = window.obj69255_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj69255_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj69255_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj69255_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj69255_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj69255_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69255_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj69255").trigger("obj69255_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69255) {
				console.warn("de-queueing event obj69255." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69255").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69255_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_69274();
function runjs_69274() {
	window.obj69255_droppedInsideTargetActions_2_runningActionsCount = obj69255_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj69310").css("border-color", "#000000"); $("#obj69310").css("border-width", "1px"); $("#obj69310").css("border-style", "solid"); $("#obj69310").css("border-radius", "10px"); $("#obj69310").css("-webkit-border-radius", "10px"); $("#obj69310").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj69255_droppedInsideTargetActions_2_runningActionsCount = window.obj69255_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj69255_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj69255_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj69255_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj69255_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj69255_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69255_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj69255").trigger("obj69255_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69255) {
				console.warn("de-queueing event obj69255." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69255").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69255_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj69304
(function(){
	window.obj69255_droppedInsideTargetActions_2_runningActionsCount = obj69255_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj69304";
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
					window.obj69255_droppedInsideTargetActions_2_runningActionsCount = window.obj69255_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj69255_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj69255_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj69255_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj69255_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj69255_droppedInsideTargetActions_2_runningActionsCount = window.obj69255_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj69255_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj69255_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj69255_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj69255_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj69255_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69255_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj69255").trigger("obj69255_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69255) {
				console.warn("de-queueing event obj69255." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69255").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69255_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_69276();
function runjs_69276() {
	window.obj69255_droppedInsideTargetActions_2_runningActionsCount = obj69255_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj69255").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj69255_droppedInsideTargetActions_2_runningActionsCount = window.obj69255_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj69255_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj69255_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj69255_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj69255_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj69255_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69255_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj69255").trigger("obj69255_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69255) {
				console.warn("de-queueing event obj69255." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69255").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69255_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_69277();
function runjs_69277() {
	window.obj69255_droppedInsideTargetActions_2_runningActionsCount = obj69255_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj69255").css("border-color", "rgba(0,0,0,0)"); $("#obj69255").css("border-width", "0px"); $("#obj69255").css("border-style", "solid"); $("#obj69255").css("border-radius", "10px"); $("#obj69255").css("-webkit-border-radius", "10px"); $("#obj69255").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj69255_droppedInsideTargetActions_2_runningActionsCount = window.obj69255_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj69255_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj69255_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj69255_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj69255_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj69255_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69255_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj69255").trigger("obj69255_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69255) {
				console.warn("de-queueing event obj69255." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69255").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69255_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj69295 
playAudio_69278();
function playAudio_69278() {
	window.obj69255_droppedInsideTargetActions_2_runningActionsCount = obj69255_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj69295")[0];
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
		    window.obj69255_droppedInsideTargetActions_2_runningActionsCount = window.obj69255_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj69255_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj69255_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj69255_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj69255_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj69255_droppedInsideTargetActions_2_runningActionsCount = window.obj69255_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj69255_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj69255_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj69255_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj69255_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj69255_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69255_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj69255").trigger("obj69255_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69255) {
				console.warn("de-queueing event obj69255." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69255").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69255_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_69279();
function switchText_69279() {
	window.obj69255_droppedInsideTargetActions_2_runningActionsCount = obj69255_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj69296_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj69296_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj69296").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj69296_content");
			setTimeout(function () {
				window.obj69255_droppedInsideTargetActions_2_runningActionsCount = window.obj69255_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj69255_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj69255_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj69255_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj69255_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj69296 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj69255_droppedInsideTargetActions_2_runningActionsCount = window.obj69255_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj69255_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj69255_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj69255_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj69255_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj69255_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj69255_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj69255").trigger("obj69255_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69255) {
				console.warn("de-queueing event obj69255." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69255").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69255_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj69255_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69255_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj69255").trigger("obj69255_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69255) {
				console.warn("de-queueing event obj69255." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69255").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69255_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_69260();
function runjs_69260() {
	window.obj69255_droppedInsideTargetActions_runningActionsCount = obj69255_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj69306").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj69255_droppedInsideTargetActions_runningActionsCount = window.obj69255_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj69255_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj69255_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj69255_droppedInsideTargetActions_runningActionsCount == 0) {
	obj69255_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj69255_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69255_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj69255").trigger("obj69255_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69255) {
				console.warn("de-queueing event obj69255." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69255").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69255_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_69264();
function switchText_69264() {
	window.obj69255_droppedInsideTargetActions_runningActionsCount = obj69255_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj69296_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj69296_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj69296").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj69296_content");
			setTimeout(function () {
				window.obj69255_droppedInsideTargetActions_runningActionsCount = window.obj69255_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj69255_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj69255_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj69255_droppedInsideTargetActions_runningActionsCount == 0) {
	obj69255_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj69296 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj69255_droppedInsideTargetActions_runningActionsCount = window.obj69255_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj69255_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj69255_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj69255_droppedInsideTargetActions_runningActionsCount == 0) {
	obj69255_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj69255_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69255_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj69255").trigger("obj69255_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69255) {
				console.warn("de-queueing event obj69255." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69255").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69255_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_69261();
function runjs_69261() {
	window.obj69255_droppedInsideTargetActions_runningActionsCount = obj69255_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj69306").css("border-color", "#058E3F"); $("#obj69306").css("border-width", "2px"); $("#obj69306").css("border-style", "solid"); $("#obj69306").css("border-radius", "10px"); $("#obj69306").css("-webkit-border-radius", "10px"); $("#obj69306").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj69255_droppedInsideTargetActions_runningActionsCount = window.obj69255_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj69255_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj69255_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj69255_droppedInsideTargetActions_runningActionsCount == 0) {
	obj69255_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj69255_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69255_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj69255").trigger("obj69255_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69255) {
				console.warn("de-queueing event obj69255." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69255").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69255_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj69300 
hide_69262();
function hide_69262() {
	var selector = "#obj69300";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj69255_droppedInsideTargetActions_runningActionsCount = obj69255_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj69255_droppedInsideTargetActions_runningActionsCount = window.obj69255_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj69255_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj69255_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj69255_droppedInsideTargetActions_runningActionsCount == 0) {
	obj69255_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_69262(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj69255_droppedInsideTargetActions_runningActionsCount = window.obj69255_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj69255_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj69255_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj69255_droppedInsideTargetActions_runningActionsCount == 0) {
	obj69255_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj69255_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69255_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj69255").trigger("obj69255_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69255) {
				console.warn("de-queueing event obj69255." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69255").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69255_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_69263();
function runjs_69263() {
	window.obj69255_droppedInsideTargetActions_runningActionsCount = obj69255_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj69255").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj69255_droppedInsideTargetActions_runningActionsCount = window.obj69255_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj69255_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj69255_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj69255_droppedInsideTargetActions_runningActionsCount == 0) {
	obj69255_droppedInsideTargetActions_actionGroup5();
}
	}, 1);
}







};
obj69255_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69255_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj69255").trigger("obj69255_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69255) {
				console.warn("de-queueing event obj69255." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69255").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69255_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj69294 
playAudio_69265();
function playAudio_69265() {
	window.obj69255_droppedInsideTargetActions_runningActionsCount = obj69255_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj69294")[0];
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
		    window.obj69255_droppedInsideTargetActions_runningActionsCount = window.obj69255_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj69255_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj69255_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj69255_droppedInsideTargetActions_runningActionsCount == 0) {
	obj69255_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj69255_droppedInsideTargetActions_runningActionsCount = window.obj69255_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj69255_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj69255_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj69255_droppedInsideTargetActions_runningActionsCount == 0) {
	obj69255_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj69255_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69255_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj69255").trigger("obj69255_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69255) {
				console.warn("de-queueing event obj69255." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69255").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69255_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90137();
function switchText_90137() {
	window.obj69255_droppedInsideTargetActions_runningActionsCount = obj69255_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj69296_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj69296_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj69296").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj69296_content");
			setTimeout(function () {
				window.obj69255_droppedInsideTargetActions_runningActionsCount = window.obj69255_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj69255_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj69255_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj69255_droppedInsideTargetActions_runningActionsCount == 0) {
	obj69255_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj69296 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj69255_droppedInsideTargetActions_runningActionsCount = window.obj69255_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj69255_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj69255_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj69255_droppedInsideTargetActions_runningActionsCount == 0) {
	obj69255_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj69255_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj69255_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj69255").trigger("obj69255_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69255) {
				console.warn("de-queueing event obj69255." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69255").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69255_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj69216_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69216_onTouchDown_activeActionGroupIndex = -1;
		$("#obj69216").trigger("obj69216_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69216) {
				console.warn("de-queueing event obj69216." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69216").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69216_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj69216");
//	action: dragDrop
//	target: obj69216 
dragDrop_69219();
function dragDrop_69219() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj69216_onTouchDown_runningActionsCount = obj69216_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj69216');
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
	  	containerNode = $('#obj69318');
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
    	window.obj69216_onTouchDown_runningActionsCount = window.obj69216_onTouchDown_runningActionsCount - 1;
if (window.obj69216_onTouchDown_runningActionsCount < 0) {
	window.obj69216_onTouchDown_runningActionsCount = 0;
} else if (window.obj69216_onTouchDown_runningActionsCount == 0) {
	obj69216_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj69308","#obj69310","#obj69306");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_69219 = false;
    	var dropped_id_69219;
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
					dropped_69219 = true;
					dropped_id_69219 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_69219) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj69216").trigger('SCActionDragDrop69219_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj69216_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj69216_onTouchDown_activeActionGroupIndex = -1;
		$("#obj69216").trigger("obj69216_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69216) {
				console.warn("de-queueing event obj69216." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69216").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69216_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj69216_SCActionDragDrop69219_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69216_SCActionDragDrop69219_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj69216").trigger("obj69216_SCActionDragDrop69219_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69216) {
				console.warn("de-queueing event obj69216." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69216").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69216_SCActionDragDrop69219_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj69216 
move_92212();
function move_92212() {
	window.obj69216_SCActionDragDrop69219_droppedOutsideTargetActions_runningActionsCount = obj69216_SCActionDragDrop69219_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj69216");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 216;
	var moveY = 582;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj69216_SCActionDragDrop69219_droppedOutsideTargetActions_runningActionsCount = window.obj69216_SCActionDragDrop69219_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj69216_SCActionDragDrop69219_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj69216_SCActionDragDrop69219_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj69216_SCActionDragDrop69219_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj69216_SCActionDragDrop69219_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj69216_SCActionDragDrop69219_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj69216_SCActionDragDrop69219_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj69216").trigger("obj69216_SCActionDragDrop69219_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69216) {
				console.warn("de-queueing event obj69216." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69216").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69216_SCActionDragDrop69219_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj69216_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69216_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj69216").trigger("obj69216_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69216) {
				console.warn("de-queueing event obj69216." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69216").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69216_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_69242();
function runjs_69242() {
	window.obj69216_droppedInsideTargetActions_3_runningActionsCount = obj69216_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj69306").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj69216_droppedInsideTargetActions_3_runningActionsCount = window.obj69216_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj69216_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj69216_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj69216_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj69216_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj69216_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69216_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj69216").trigger("obj69216_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69216) {
				console.warn("de-queueing event obj69216." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69216").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69216_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_69243();
function runjs_69243() {
	window.obj69216_droppedInsideTargetActions_3_runningActionsCount = obj69216_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj69306").css("border-color", "#C00000"); $("#obj69306").css("border-width", "2px"); $("#obj69306").css("border-style", "solid"); $("#obj69306").css("border-radius", "10px"); $("#obj69306").css("-webkit-border-radius", "10px"); $("#obj69306").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj69216_droppedInsideTargetActions_3_runningActionsCount = window.obj69216_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj69216_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj69216_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj69216_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj69216_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj69216_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69216_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj69216").trigger("obj69216_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69216) {
				console.warn("de-queueing event obj69216." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69216").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69216_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj69300 
hide_69244();
function hide_69244() {
	var selector = "#obj69300";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj69216_droppedInsideTargetActions_3_runningActionsCount = obj69216_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj69216_droppedInsideTargetActions_3_runningActionsCount = window.obj69216_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj69216_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj69216_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj69216_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj69216_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_69244(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj69216_droppedInsideTargetActions_3_runningActionsCount = window.obj69216_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj69216_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj69216_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj69216_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj69216_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj69216_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69216_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj69216").trigger("obj69216_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69216) {
				console.warn("de-queueing event obj69216." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69216").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69216_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_69245();
function runjs_69245() {
	window.obj69216_droppedInsideTargetActions_3_runningActionsCount = obj69216_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj69216").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj69216_droppedInsideTargetActions_3_runningActionsCount = window.obj69216_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj69216_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj69216_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj69216_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj69216_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj69216_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69216_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj69216").trigger("obj69216_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69216) {
				console.warn("de-queueing event obj69216." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69216").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69216_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_69246();
function switchText_69246() {
	window.obj69216_droppedInsideTargetActions_3_runningActionsCount = obj69216_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj69296_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj69296_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj69296").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj69296_content");
			setTimeout(function () {
				window.obj69216_droppedInsideTargetActions_3_runningActionsCount = window.obj69216_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj69216_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj69216_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj69216_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj69216_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj69296 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj69216_droppedInsideTargetActions_3_runningActionsCount = window.obj69216_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj69216_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj69216_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj69216_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj69216_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj69216_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69216_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj69216").trigger("obj69216_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69216) {
				console.warn("de-queueing event obj69216." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69216").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69216_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj69216 
move_69247();
function move_69247() {
	window.obj69216_droppedInsideTargetActions_3_runningActionsCount = obj69216_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj69216");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 216;
	var moveY = 582;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj69216_droppedInsideTargetActions_3_runningActionsCount = window.obj69216_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj69216_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj69216_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj69216_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj69216_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj69216_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69216_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj69216").trigger("obj69216_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69216) {
				console.warn("de-queueing event obj69216." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69216").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69216_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_69248();
function runjs_69248() {
	window.obj69216_droppedInsideTargetActions_3_runningActionsCount = obj69216_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj69306").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj69216_droppedInsideTargetActions_3_runningActionsCount = window.obj69216_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj69216_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj69216_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj69216_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj69216_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj69216_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69216_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj69216").trigger("obj69216_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69216) {
				console.warn("de-queueing event obj69216." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69216").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69216_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_69249();
function runjs_69249() {
	window.obj69216_droppedInsideTargetActions_3_runningActionsCount = obj69216_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj69306").css("border-color", "#000000"); $("#obj69306").css("border-width", "1px"); $("#obj69306").css("border-style", "solid"); $("#obj69306").css("border-radius", "10px"); $("#obj69306").css("-webkit-border-radius", "10px"); $("#obj69306").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj69216_droppedInsideTargetActions_3_runningActionsCount = window.obj69216_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj69216_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj69216_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj69216_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj69216_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj69216_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69216_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj69216").trigger("obj69216_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69216) {
				console.warn("de-queueing event obj69216." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69216").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69216_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj69300
(function(){
	window.obj69216_droppedInsideTargetActions_3_runningActionsCount = obj69216_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj69300";
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
					window.obj69216_droppedInsideTargetActions_3_runningActionsCount = window.obj69216_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj69216_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj69216_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj69216_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj69216_droppedInsideTargetActions_3_actionGroup9();
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
				window.obj69216_droppedInsideTargetActions_3_runningActionsCount = window.obj69216_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj69216_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj69216_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj69216_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj69216_droppedInsideTargetActions_3_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj69216_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69216_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj69216").trigger("obj69216_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69216) {
				console.warn("de-queueing event obj69216." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69216").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69216_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_69251();
function runjs_69251() {
	window.obj69216_droppedInsideTargetActions_3_runningActionsCount = obj69216_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj69216").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj69216_droppedInsideTargetActions_3_runningActionsCount = window.obj69216_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj69216_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj69216_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj69216_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj69216_droppedInsideTargetActions_3_actionGroup10();
}
	}, 1);
}







};
obj69216_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69216_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj69216").trigger("obj69216_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69216) {
				console.warn("de-queueing event obj69216." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69216").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69216_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_69252();
function runjs_69252() {
	window.obj69216_droppedInsideTargetActions_3_runningActionsCount = obj69216_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj69216").css("border-color", "rgba(0,0,0,0)"); $("#obj69216").css("border-width", "0px"); $("#obj69216").css("border-style", "solid"); $("#obj69216").css("border-radius", "10px"); $("#obj69216").css("-webkit-border-radius", "10px"); $("#obj69216").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj69216_droppedInsideTargetActions_3_runningActionsCount = window.obj69216_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj69216_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj69216_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj69216_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj69216_droppedInsideTargetActions_3_actionGroup11();
}
	}, 1);
}







};
obj69216_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69216_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj69216").trigger("obj69216_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69216) {
				console.warn("de-queueing event obj69216." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69216").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69216_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj69295 
playAudio_69253();
function playAudio_69253() {
	window.obj69216_droppedInsideTargetActions_3_runningActionsCount = obj69216_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj69295")[0];
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
		    window.obj69216_droppedInsideTargetActions_3_runningActionsCount = window.obj69216_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj69216_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj69216_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj69216_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj69216_droppedInsideTargetActions_3_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj69216_droppedInsideTargetActions_3_runningActionsCount = window.obj69216_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj69216_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj69216_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj69216_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj69216_droppedInsideTargetActions_3_actionGroup12();
}
	}
}









};
obj69216_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69216_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj69216").trigger("obj69216_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69216) {
				console.warn("de-queueing event obj69216." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69216").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69216_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_69254();
function switchText_69254() {
	window.obj69216_droppedInsideTargetActions_3_runningActionsCount = obj69216_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj69296_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj69296_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj69296").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj69296_content");
			setTimeout(function () {
				window.obj69216_droppedInsideTargetActions_3_runningActionsCount = window.obj69216_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj69216_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj69216_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj69216_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj69216_droppedInsideTargetActions_3_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj69296 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj69216_droppedInsideTargetActions_3_runningActionsCount = window.obj69216_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj69216_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj69216_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj69216_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj69216_droppedInsideTargetActions_3_actionGroup13();
}
		}, 1);
	}
}






};
obj69216_droppedInsideTargetActions_3_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj69216_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj69216").trigger("obj69216_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69216) {
				console.warn("de-queueing event obj69216." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69216").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69216_droppedInsideTargetActions_3_activeActionGroupIndex = 13;
	





















};
obj69216_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69216_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj69216").trigger("obj69216_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69216) {
				console.warn("de-queueing event obj69216." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69216").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69216_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_69228();
function runjs_69228() {
	window.obj69216_droppedInsideTargetActions_2_runningActionsCount = obj69216_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj69310").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj69216_droppedInsideTargetActions_2_runningActionsCount = window.obj69216_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj69216_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj69216_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj69216_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj69216_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj69216_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69216_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj69216").trigger("obj69216_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69216) {
				console.warn("de-queueing event obj69216." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69216").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69216_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_69229();
function runjs_69229() {
	window.obj69216_droppedInsideTargetActions_2_runningActionsCount = obj69216_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj69310").css("border-color", "#C00000"); $("#obj69310").css("border-width", "2px"); $("#obj69310").css("border-style", "solid"); $("#obj69310").css("border-radius", "10px"); $("#obj69310").css("-webkit-border-radius", "10px"); $("#obj69310").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj69216_droppedInsideTargetActions_2_runningActionsCount = window.obj69216_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj69216_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj69216_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj69216_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj69216_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj69216_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69216_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj69216").trigger("obj69216_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69216) {
				console.warn("de-queueing event obj69216." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69216").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69216_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj69304 
hide_69230();
function hide_69230() {
	var selector = "#obj69304";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj69216_droppedInsideTargetActions_2_runningActionsCount = obj69216_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj69216_droppedInsideTargetActions_2_runningActionsCount = window.obj69216_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj69216_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj69216_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj69216_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj69216_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_69230(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj69216_droppedInsideTargetActions_2_runningActionsCount = window.obj69216_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj69216_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj69216_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj69216_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj69216_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj69216_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69216_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj69216").trigger("obj69216_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69216) {
				console.warn("de-queueing event obj69216." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69216").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69216_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_69231();
function runjs_69231() {
	window.obj69216_droppedInsideTargetActions_2_runningActionsCount = obj69216_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj69216").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj69216_droppedInsideTargetActions_2_runningActionsCount = window.obj69216_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj69216_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj69216_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj69216_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj69216_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj69216_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69216_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj69216").trigger("obj69216_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69216) {
				console.warn("de-queueing event obj69216." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69216").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69216_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_69232();
function switchText_69232() {
	window.obj69216_droppedInsideTargetActions_2_runningActionsCount = obj69216_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj69296_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj69296_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj69296").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj69296_content");
			setTimeout(function () {
				window.obj69216_droppedInsideTargetActions_2_runningActionsCount = window.obj69216_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj69216_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj69216_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj69216_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj69216_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj69296 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj69216_droppedInsideTargetActions_2_runningActionsCount = window.obj69216_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj69216_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj69216_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj69216_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj69216_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj69216_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69216_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj69216").trigger("obj69216_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69216) {
				console.warn("de-queueing event obj69216." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69216").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69216_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj69216 
move_69233();
function move_69233() {
	window.obj69216_droppedInsideTargetActions_2_runningActionsCount = obj69216_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj69216");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 216;
	var moveY = 582;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj69216_droppedInsideTargetActions_2_runningActionsCount = window.obj69216_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj69216_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj69216_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj69216_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj69216_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj69216_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69216_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj69216").trigger("obj69216_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69216) {
				console.warn("de-queueing event obj69216." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69216").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69216_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_69234();
function runjs_69234() {
	window.obj69216_droppedInsideTargetActions_2_runningActionsCount = obj69216_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj69310").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj69216_droppedInsideTargetActions_2_runningActionsCount = window.obj69216_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj69216_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj69216_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj69216_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj69216_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj69216_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69216_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj69216").trigger("obj69216_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69216) {
				console.warn("de-queueing event obj69216." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69216").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69216_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_69235();
function runjs_69235() {
	window.obj69216_droppedInsideTargetActions_2_runningActionsCount = obj69216_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj69310").css("border-color", "#000000"); $("#obj69310").css("border-width", "1px"); $("#obj69310").css("border-style", "solid"); $("#obj69310").css("border-radius", "10px"); $("#obj69310").css("-webkit-border-radius", "10px"); $("#obj69310").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj69216_droppedInsideTargetActions_2_runningActionsCount = window.obj69216_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj69216_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj69216_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj69216_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj69216_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj69216_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69216_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj69216").trigger("obj69216_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69216) {
				console.warn("de-queueing event obj69216." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69216").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69216_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj69304
(function(){
	window.obj69216_droppedInsideTargetActions_2_runningActionsCount = obj69216_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj69304";
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
					window.obj69216_droppedInsideTargetActions_2_runningActionsCount = window.obj69216_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj69216_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj69216_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj69216_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj69216_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj69216_droppedInsideTargetActions_2_runningActionsCount = window.obj69216_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj69216_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj69216_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj69216_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj69216_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj69216_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69216_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj69216").trigger("obj69216_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69216) {
				console.warn("de-queueing event obj69216." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69216").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69216_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_69237();
function runjs_69237() {
	window.obj69216_droppedInsideTargetActions_2_runningActionsCount = obj69216_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj69216").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj69216_droppedInsideTargetActions_2_runningActionsCount = window.obj69216_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj69216_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj69216_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj69216_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj69216_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj69216_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69216_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj69216").trigger("obj69216_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69216) {
				console.warn("de-queueing event obj69216." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69216").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69216_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_69238();
function runjs_69238() {
	window.obj69216_droppedInsideTargetActions_2_runningActionsCount = obj69216_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj69216").css("border-color", "rgba(0,0,0,0)"); $("#obj69216").css("border-width", "0px"); $("#obj69216").css("border-style", "solid"); $("#obj69216").css("border-radius", "10px"); $("#obj69216").css("-webkit-border-radius", "10px"); $("#obj69216").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj69216_droppedInsideTargetActions_2_runningActionsCount = window.obj69216_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj69216_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj69216_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj69216_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj69216_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj69216_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69216_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj69216").trigger("obj69216_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69216) {
				console.warn("de-queueing event obj69216." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69216").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69216_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj69295 
playAudio_69239();
function playAudio_69239() {
	window.obj69216_droppedInsideTargetActions_2_runningActionsCount = obj69216_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj69295")[0];
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
		    window.obj69216_droppedInsideTargetActions_2_runningActionsCount = window.obj69216_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj69216_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj69216_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj69216_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj69216_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj69216_droppedInsideTargetActions_2_runningActionsCount = window.obj69216_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj69216_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj69216_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj69216_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj69216_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj69216_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69216_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj69216").trigger("obj69216_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69216) {
				console.warn("de-queueing event obj69216." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69216").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69216_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_69240();
function switchText_69240() {
	window.obj69216_droppedInsideTargetActions_2_runningActionsCount = obj69216_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj69296_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj69296_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj69296").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj69296_content");
			setTimeout(function () {
				window.obj69216_droppedInsideTargetActions_2_runningActionsCount = window.obj69216_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj69216_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj69216_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj69216_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj69216_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj69296 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj69216_droppedInsideTargetActions_2_runningActionsCount = window.obj69216_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj69216_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj69216_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj69216_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj69216_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj69216_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj69216_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj69216").trigger("obj69216_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69216) {
				console.warn("de-queueing event obj69216." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69216").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69216_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj69216_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69216_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj69216").trigger("obj69216_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69216) {
				console.warn("de-queueing event obj69216." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69216").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69216_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_69221();
function runjs_69221() {
	window.obj69216_droppedInsideTargetActions_runningActionsCount = obj69216_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj69308").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj69216_droppedInsideTargetActions_runningActionsCount = window.obj69216_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj69216_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj69216_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj69216_droppedInsideTargetActions_runningActionsCount == 0) {
	obj69216_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj69216_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69216_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj69216").trigger("obj69216_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69216) {
				console.warn("de-queueing event obj69216." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69216").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69216_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_69225();
function switchText_69225() {
	window.obj69216_droppedInsideTargetActions_runningActionsCount = obj69216_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj69296_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj69296_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj69296").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj69296_content");
			setTimeout(function () {
				window.obj69216_droppedInsideTargetActions_runningActionsCount = window.obj69216_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj69216_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj69216_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj69216_droppedInsideTargetActions_runningActionsCount == 0) {
	obj69216_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj69296 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj69216_droppedInsideTargetActions_runningActionsCount = window.obj69216_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj69216_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj69216_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj69216_droppedInsideTargetActions_runningActionsCount == 0) {
	obj69216_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj69216_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69216_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj69216").trigger("obj69216_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69216) {
				console.warn("de-queueing event obj69216." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69216").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69216_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_69222();
function runjs_69222() {
	window.obj69216_droppedInsideTargetActions_runningActionsCount = obj69216_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj69308").css("border-color", "#058E3F"); $("#obj69308").css("border-width", "2px"); $("#obj69308").css("border-style", "solid"); $("#obj69308").css("border-radius", "10px"); $("#obj69308").css("-webkit-border-radius", "10px"); $("#obj69308").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj69216_droppedInsideTargetActions_runningActionsCount = window.obj69216_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj69216_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj69216_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj69216_droppedInsideTargetActions_runningActionsCount == 0) {
	obj69216_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj69216_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69216_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj69216").trigger("obj69216_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69216) {
				console.warn("de-queueing event obj69216." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69216").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69216_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj69302 
hide_69223();
function hide_69223() {
	var selector = "#obj69302";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj69216_droppedInsideTargetActions_runningActionsCount = obj69216_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj69216_droppedInsideTargetActions_runningActionsCount = window.obj69216_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj69216_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj69216_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj69216_droppedInsideTargetActions_runningActionsCount == 0) {
	obj69216_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_69223(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj69216_droppedInsideTargetActions_runningActionsCount = window.obj69216_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj69216_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj69216_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj69216_droppedInsideTargetActions_runningActionsCount == 0) {
	obj69216_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj69216_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69216_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj69216").trigger("obj69216_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69216) {
				console.warn("de-queueing event obj69216." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69216").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69216_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_69224();
function runjs_69224() {
	window.obj69216_droppedInsideTargetActions_runningActionsCount = obj69216_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj69216").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj69216_droppedInsideTargetActions_runningActionsCount = window.obj69216_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj69216_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj69216_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj69216_droppedInsideTargetActions_runningActionsCount == 0) {
	obj69216_droppedInsideTargetActions_actionGroup5();
}
	}, 1);
}







};
obj69216_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69216_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj69216").trigger("obj69216_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69216) {
				console.warn("de-queueing event obj69216." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69216").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69216_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj69294 
playAudio_69226();
function playAudio_69226() {
	window.obj69216_droppedInsideTargetActions_runningActionsCount = obj69216_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj69294")[0];
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
		    window.obj69216_droppedInsideTargetActions_runningActionsCount = window.obj69216_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj69216_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj69216_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj69216_droppedInsideTargetActions_runningActionsCount == 0) {
	obj69216_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj69216_droppedInsideTargetActions_runningActionsCount = window.obj69216_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj69216_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj69216_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj69216_droppedInsideTargetActions_runningActionsCount == 0) {
	obj69216_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj69216_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69216_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj69216").trigger("obj69216_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69216) {
				console.warn("de-queueing event obj69216." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69216").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69216_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90138();
function switchText_90138() {
	window.obj69216_droppedInsideTargetActions_runningActionsCount = obj69216_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj69296_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj69296_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj69296").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj69296_content");
			setTimeout(function () {
				window.obj69216_droppedInsideTargetActions_runningActionsCount = window.obj69216_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj69216_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj69216_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj69216_droppedInsideTargetActions_runningActionsCount == 0) {
	obj69216_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj69296 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj69216_droppedInsideTargetActions_runningActionsCount = window.obj69216_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj69216_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj69216_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj69216_droppedInsideTargetActions_runningActionsCount == 0) {
	obj69216_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj69216_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj69216_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj69216").trigger("obj69216_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69216) {
				console.warn("de-queueing event obj69216." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69216").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69216_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj69177_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69177_onTouchDown_activeActionGroupIndex = -1;
		$("#obj69177").trigger("obj69177_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69177) {
				console.warn("de-queueing event obj69177." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69177").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69177_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj69177");
//	action: dragDrop
//	target: obj69177 
dragDrop_69180();
function dragDrop_69180() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj69177_onTouchDown_runningActionsCount = obj69177_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj69177');
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
	  	containerNode = $('#obj69318');
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
    	window.obj69177_onTouchDown_runningActionsCount = window.obj69177_onTouchDown_runningActionsCount - 1;
if (window.obj69177_onTouchDown_runningActionsCount < 0) {
	window.obj69177_onTouchDown_runningActionsCount = 0;
} else if (window.obj69177_onTouchDown_runningActionsCount == 0) {
	obj69177_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj69310","#obj69308","#obj69306");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_69180 = false;
    	var dropped_id_69180;
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
					dropped_69180 = true;
					dropped_id_69180 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_69180) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj69177").trigger('SCActionDragDrop69180_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj69177_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj69177_onTouchDown_activeActionGroupIndex = -1;
		$("#obj69177").trigger("obj69177_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69177) {
				console.warn("de-queueing event obj69177." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69177").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69177_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj69177_SCActionDragDrop69180_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69177_SCActionDragDrop69180_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj69177").trigger("obj69177_SCActionDragDrop69180_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69177) {
				console.warn("de-queueing event obj69177." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69177").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69177_SCActionDragDrop69180_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj69177 
move_92214();
function move_92214() {
	window.obj69177_SCActionDragDrop69180_droppedOutsideTargetActions_runningActionsCount = obj69177_SCActionDragDrop69180_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj69177");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 395;
	var moveY = 582;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj69177_SCActionDragDrop69180_droppedOutsideTargetActions_runningActionsCount = window.obj69177_SCActionDragDrop69180_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj69177_SCActionDragDrop69180_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj69177_SCActionDragDrop69180_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj69177_SCActionDragDrop69180_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj69177_SCActionDragDrop69180_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj69177_SCActionDragDrop69180_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj69177_SCActionDragDrop69180_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj69177").trigger("obj69177_SCActionDragDrop69180_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69177) {
				console.warn("de-queueing event obj69177." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69177").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69177_SCActionDragDrop69180_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj69177_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69177_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj69177").trigger("obj69177_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69177) {
				console.warn("de-queueing event obj69177." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69177").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69177_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_69203();
function runjs_69203() {
	window.obj69177_droppedInsideTargetActions_3_runningActionsCount = obj69177_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj69306").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj69177_droppedInsideTargetActions_3_runningActionsCount = window.obj69177_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj69177_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj69177_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj69177_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj69177_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj69177_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69177_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj69177").trigger("obj69177_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69177) {
				console.warn("de-queueing event obj69177." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69177").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69177_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_69204();
function runjs_69204() {
	window.obj69177_droppedInsideTargetActions_3_runningActionsCount = obj69177_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj69306").css("border-color", "#C00000"); $("#obj69306").css("border-width", "2px"); $("#obj69306").css("border-style", "solid"); $("#obj69306").css("border-radius", "10px"); $("#obj69306").css("-webkit-border-radius", "10px"); $("#obj69306").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj69177_droppedInsideTargetActions_3_runningActionsCount = window.obj69177_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj69177_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj69177_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj69177_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj69177_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj69177_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69177_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj69177").trigger("obj69177_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69177) {
				console.warn("de-queueing event obj69177." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69177").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69177_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj69300 
hide_69205();
function hide_69205() {
	var selector = "#obj69300";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj69177_droppedInsideTargetActions_3_runningActionsCount = obj69177_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj69177_droppedInsideTargetActions_3_runningActionsCount = window.obj69177_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj69177_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj69177_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj69177_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj69177_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_69205(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj69177_droppedInsideTargetActions_3_runningActionsCount = window.obj69177_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj69177_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj69177_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj69177_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj69177_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj69177_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69177_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj69177").trigger("obj69177_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69177) {
				console.warn("de-queueing event obj69177." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69177").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69177_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_69206();
function runjs_69206() {
	window.obj69177_droppedInsideTargetActions_3_runningActionsCount = obj69177_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj69177").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj69177_droppedInsideTargetActions_3_runningActionsCount = window.obj69177_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj69177_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj69177_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj69177_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj69177_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj69177_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69177_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj69177").trigger("obj69177_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69177) {
				console.warn("de-queueing event obj69177." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69177").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69177_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_69207();
function switchText_69207() {
	window.obj69177_droppedInsideTargetActions_3_runningActionsCount = obj69177_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj69296_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj69296_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj69296").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj69296_content");
			setTimeout(function () {
				window.obj69177_droppedInsideTargetActions_3_runningActionsCount = window.obj69177_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj69177_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj69177_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj69177_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj69177_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj69296 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj69177_droppedInsideTargetActions_3_runningActionsCount = window.obj69177_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj69177_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj69177_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj69177_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj69177_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj69177_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69177_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj69177").trigger("obj69177_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69177) {
				console.warn("de-queueing event obj69177." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69177").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69177_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj69177 
move_69208();
function move_69208() {
	window.obj69177_droppedInsideTargetActions_3_runningActionsCount = obj69177_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj69177");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 395;
	var moveY = 582;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj69177_droppedInsideTargetActions_3_runningActionsCount = window.obj69177_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj69177_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj69177_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj69177_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj69177_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj69177_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69177_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj69177").trigger("obj69177_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69177) {
				console.warn("de-queueing event obj69177." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69177").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69177_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_69209();
function runjs_69209() {
	window.obj69177_droppedInsideTargetActions_3_runningActionsCount = obj69177_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj69306").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj69177_droppedInsideTargetActions_3_runningActionsCount = window.obj69177_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj69177_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj69177_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj69177_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj69177_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj69177_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69177_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj69177").trigger("obj69177_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69177) {
				console.warn("de-queueing event obj69177." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69177").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69177_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_69210();
function runjs_69210() {
	window.obj69177_droppedInsideTargetActions_3_runningActionsCount = obj69177_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj69306").css("border-color", "#000000"); $("#obj69306").css("border-width", "1px"); $("#obj69306").css("border-style", "solid"); $("#obj69306").css("border-radius", "10px"); $("#obj69306").css("-webkit-border-radius", "10px"); $("#obj69306").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj69177_droppedInsideTargetActions_3_runningActionsCount = window.obj69177_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj69177_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj69177_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj69177_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj69177_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj69177_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69177_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj69177").trigger("obj69177_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69177) {
				console.warn("de-queueing event obj69177." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69177").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69177_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj69300
(function(){
	window.obj69177_droppedInsideTargetActions_3_runningActionsCount = obj69177_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj69300";
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
					window.obj69177_droppedInsideTargetActions_3_runningActionsCount = window.obj69177_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj69177_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj69177_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj69177_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj69177_droppedInsideTargetActions_3_actionGroup9();
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
				window.obj69177_droppedInsideTargetActions_3_runningActionsCount = window.obj69177_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj69177_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj69177_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj69177_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj69177_droppedInsideTargetActions_3_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj69177_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69177_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj69177").trigger("obj69177_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69177) {
				console.warn("de-queueing event obj69177." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69177").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69177_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_69212();
function runjs_69212() {
	window.obj69177_droppedInsideTargetActions_3_runningActionsCount = obj69177_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj69177").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj69177_droppedInsideTargetActions_3_runningActionsCount = window.obj69177_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj69177_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj69177_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj69177_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj69177_droppedInsideTargetActions_3_actionGroup10();
}
	}, 1);
}







};
obj69177_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69177_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj69177").trigger("obj69177_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69177) {
				console.warn("de-queueing event obj69177." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69177").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69177_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_69213();
function runjs_69213() {
	window.obj69177_droppedInsideTargetActions_3_runningActionsCount = obj69177_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj69177").css("border-color", "rgba(0,0,0,0)"); $("#obj69177").css("border-width", "0px"); $("#obj69177").css("border-style", "solid"); $("#obj69177").css("border-radius", "10px"); $("#obj69177").css("-webkit-border-radius", "10px"); $("#obj69177").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj69177_droppedInsideTargetActions_3_runningActionsCount = window.obj69177_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj69177_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj69177_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj69177_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj69177_droppedInsideTargetActions_3_actionGroup11();
}
	}, 1);
}







};
obj69177_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69177_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj69177").trigger("obj69177_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69177) {
				console.warn("de-queueing event obj69177." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69177").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69177_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj69295 
playAudio_69214();
function playAudio_69214() {
	window.obj69177_droppedInsideTargetActions_3_runningActionsCount = obj69177_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj69295")[0];
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
		    window.obj69177_droppedInsideTargetActions_3_runningActionsCount = window.obj69177_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj69177_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj69177_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj69177_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj69177_droppedInsideTargetActions_3_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj69177_droppedInsideTargetActions_3_runningActionsCount = window.obj69177_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj69177_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj69177_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj69177_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj69177_droppedInsideTargetActions_3_actionGroup12();
}
	}
}









};
obj69177_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69177_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj69177").trigger("obj69177_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69177) {
				console.warn("de-queueing event obj69177." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69177").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69177_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_69215();
function switchText_69215() {
	window.obj69177_droppedInsideTargetActions_3_runningActionsCount = obj69177_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj69296_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj69296_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj69296").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj69296_content");
			setTimeout(function () {
				window.obj69177_droppedInsideTargetActions_3_runningActionsCount = window.obj69177_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj69177_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj69177_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj69177_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj69177_droppedInsideTargetActions_3_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj69296 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj69177_droppedInsideTargetActions_3_runningActionsCount = window.obj69177_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj69177_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj69177_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj69177_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj69177_droppedInsideTargetActions_3_actionGroup13();
}
		}, 1);
	}
}






};
obj69177_droppedInsideTargetActions_3_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj69177_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj69177").trigger("obj69177_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69177) {
				console.warn("de-queueing event obj69177." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69177").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69177_droppedInsideTargetActions_3_activeActionGroupIndex = 13;
	





















};
obj69177_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69177_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj69177").trigger("obj69177_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69177) {
				console.warn("de-queueing event obj69177." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69177").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69177_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_69189();
function runjs_69189() {
	window.obj69177_droppedInsideTargetActions_2_runningActionsCount = obj69177_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj69308").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj69177_droppedInsideTargetActions_2_runningActionsCount = window.obj69177_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj69177_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj69177_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj69177_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj69177_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj69177_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69177_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj69177").trigger("obj69177_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69177) {
				console.warn("de-queueing event obj69177." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69177").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69177_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_69190();
function runjs_69190() {
	window.obj69177_droppedInsideTargetActions_2_runningActionsCount = obj69177_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj69308").css("border-color", "#C00000"); $("#obj69308").css("border-width", "2px"); $("#obj69308").css("border-style", "solid"); $("#obj69308").css("border-radius", "10px"); $("#obj69308").css("-webkit-border-radius", "10px"); $("#obj69308").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj69177_droppedInsideTargetActions_2_runningActionsCount = window.obj69177_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj69177_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj69177_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj69177_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj69177_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj69177_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69177_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj69177").trigger("obj69177_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69177) {
				console.warn("de-queueing event obj69177." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69177").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69177_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj69302 
hide_69191();
function hide_69191() {
	var selector = "#obj69302";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj69177_droppedInsideTargetActions_2_runningActionsCount = obj69177_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj69177_droppedInsideTargetActions_2_runningActionsCount = window.obj69177_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj69177_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj69177_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj69177_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj69177_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_69191(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj69177_droppedInsideTargetActions_2_runningActionsCount = window.obj69177_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj69177_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj69177_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj69177_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj69177_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj69177_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69177_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj69177").trigger("obj69177_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69177) {
				console.warn("de-queueing event obj69177." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69177").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69177_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_69192();
function runjs_69192() {
	window.obj69177_droppedInsideTargetActions_2_runningActionsCount = obj69177_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj69177").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj69177_droppedInsideTargetActions_2_runningActionsCount = window.obj69177_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj69177_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj69177_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj69177_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj69177_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj69177_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69177_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj69177").trigger("obj69177_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69177) {
				console.warn("de-queueing event obj69177." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69177").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69177_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_69193();
function switchText_69193() {
	window.obj69177_droppedInsideTargetActions_2_runningActionsCount = obj69177_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj69296_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj69296_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj69296").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj69296_content");
			setTimeout(function () {
				window.obj69177_droppedInsideTargetActions_2_runningActionsCount = window.obj69177_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj69177_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj69177_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj69177_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj69177_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj69296 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj69177_droppedInsideTargetActions_2_runningActionsCount = window.obj69177_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj69177_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj69177_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj69177_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj69177_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj69177_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69177_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj69177").trigger("obj69177_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69177) {
				console.warn("de-queueing event obj69177." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69177").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69177_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj69177 
move_69194();
function move_69194() {
	window.obj69177_droppedInsideTargetActions_2_runningActionsCount = obj69177_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj69177");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 395;
	var moveY = 582;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj69177_droppedInsideTargetActions_2_runningActionsCount = window.obj69177_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj69177_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj69177_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj69177_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj69177_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj69177_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69177_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj69177").trigger("obj69177_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69177) {
				console.warn("de-queueing event obj69177." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69177").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69177_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_69195();
function runjs_69195() {
	window.obj69177_droppedInsideTargetActions_2_runningActionsCount = obj69177_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj69308").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj69177_droppedInsideTargetActions_2_runningActionsCount = window.obj69177_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj69177_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj69177_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj69177_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj69177_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj69177_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69177_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj69177").trigger("obj69177_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69177) {
				console.warn("de-queueing event obj69177." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69177").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69177_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_69196();
function runjs_69196() {
	window.obj69177_droppedInsideTargetActions_2_runningActionsCount = obj69177_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj69308").css("border-color", "#000000"); $("#obj69308").css("border-width", "1px"); $("#obj69308").css("border-style", "solid"); $("#obj69308").css("border-radius", "10px"); $("#obj69308").css("-webkit-border-radius", "10px"); $("#obj69308").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj69177_droppedInsideTargetActions_2_runningActionsCount = window.obj69177_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj69177_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj69177_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj69177_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj69177_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj69177_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69177_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj69177").trigger("obj69177_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69177) {
				console.warn("de-queueing event obj69177." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69177").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69177_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj69302
(function(){
	window.obj69177_droppedInsideTargetActions_2_runningActionsCount = obj69177_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj69302";
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
					window.obj69177_droppedInsideTargetActions_2_runningActionsCount = window.obj69177_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj69177_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj69177_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj69177_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj69177_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj69177_droppedInsideTargetActions_2_runningActionsCount = window.obj69177_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj69177_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj69177_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj69177_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj69177_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj69177_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69177_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj69177").trigger("obj69177_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69177) {
				console.warn("de-queueing event obj69177." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69177").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69177_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_69198();
function runjs_69198() {
	window.obj69177_droppedInsideTargetActions_2_runningActionsCount = obj69177_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj69177").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj69177_droppedInsideTargetActions_2_runningActionsCount = window.obj69177_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj69177_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj69177_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj69177_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj69177_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj69177_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69177_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj69177").trigger("obj69177_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69177) {
				console.warn("de-queueing event obj69177." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69177").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69177_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_69199();
function runjs_69199() {
	window.obj69177_droppedInsideTargetActions_2_runningActionsCount = obj69177_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj69177").css("border-color", "rgba(0,0,0,0)"); $("#obj69177").css("border-width", "0px"); $("#obj69177").css("border-style", "solid"); $("#obj69177").css("border-radius", "10px"); $("#obj69177").css("-webkit-border-radius", "10px"); $("#obj69177").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj69177_droppedInsideTargetActions_2_runningActionsCount = window.obj69177_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj69177_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj69177_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj69177_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj69177_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj69177_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69177_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj69177").trigger("obj69177_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69177) {
				console.warn("de-queueing event obj69177." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69177").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69177_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj69295 
playAudio_69200();
function playAudio_69200() {
	window.obj69177_droppedInsideTargetActions_2_runningActionsCount = obj69177_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj69295")[0];
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
		    window.obj69177_droppedInsideTargetActions_2_runningActionsCount = window.obj69177_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj69177_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj69177_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj69177_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj69177_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj69177_droppedInsideTargetActions_2_runningActionsCount = window.obj69177_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj69177_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj69177_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj69177_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj69177_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj69177_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69177_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj69177").trigger("obj69177_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69177) {
				console.warn("de-queueing event obj69177." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69177").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69177_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_69201();
function switchText_69201() {
	window.obj69177_droppedInsideTargetActions_2_runningActionsCount = obj69177_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj69296_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj69296_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj69296").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj69296_content");
			setTimeout(function () {
				window.obj69177_droppedInsideTargetActions_2_runningActionsCount = window.obj69177_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj69177_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj69177_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj69177_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj69177_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj69296 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj69177_droppedInsideTargetActions_2_runningActionsCount = window.obj69177_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj69177_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj69177_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj69177_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj69177_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj69177_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj69177_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj69177").trigger("obj69177_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69177) {
				console.warn("de-queueing event obj69177." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69177").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69177_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj69177_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69177_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj69177").trigger("obj69177_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69177) {
				console.warn("de-queueing event obj69177." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69177").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69177_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_69182();
function runjs_69182() {
	window.obj69177_droppedInsideTargetActions_runningActionsCount = obj69177_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj69310").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj69177_droppedInsideTargetActions_runningActionsCount = window.obj69177_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj69177_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj69177_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj69177_droppedInsideTargetActions_runningActionsCount == 0) {
	obj69177_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj69177_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69177_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj69177").trigger("obj69177_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69177) {
				console.warn("de-queueing event obj69177." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69177").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69177_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_69186();
function switchText_69186() {
	window.obj69177_droppedInsideTargetActions_runningActionsCount = obj69177_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj69296_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj69296_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj69296").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj69296_content");
			setTimeout(function () {
				window.obj69177_droppedInsideTargetActions_runningActionsCount = window.obj69177_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj69177_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj69177_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj69177_droppedInsideTargetActions_runningActionsCount == 0) {
	obj69177_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj69296 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj69177_droppedInsideTargetActions_runningActionsCount = window.obj69177_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj69177_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj69177_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj69177_droppedInsideTargetActions_runningActionsCount == 0) {
	obj69177_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj69177_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69177_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj69177").trigger("obj69177_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69177) {
				console.warn("de-queueing event obj69177." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69177").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69177_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_69183();
function runjs_69183() {
	window.obj69177_droppedInsideTargetActions_runningActionsCount = obj69177_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj69310").css("border-color", "#058E3F"); $("#obj69310").css("border-width", "2px"); $("#obj69310").css("border-style", "solid"); $("#obj69310").css("border-radius", "10px"); $("#obj69310").css("-webkit-border-radius", "10px"); $("#obj69310").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj69177_droppedInsideTargetActions_runningActionsCount = window.obj69177_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj69177_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj69177_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj69177_droppedInsideTargetActions_runningActionsCount == 0) {
	obj69177_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj69177_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69177_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj69177").trigger("obj69177_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69177) {
				console.warn("de-queueing event obj69177." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69177").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69177_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj69304 
hide_69184();
function hide_69184() {
	var selector = "#obj69304";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj69177_droppedInsideTargetActions_runningActionsCount = obj69177_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj69177_droppedInsideTargetActions_runningActionsCount = window.obj69177_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj69177_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj69177_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj69177_droppedInsideTargetActions_runningActionsCount == 0) {
	obj69177_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_69184(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj69177_droppedInsideTargetActions_runningActionsCount = window.obj69177_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj69177_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj69177_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj69177_droppedInsideTargetActions_runningActionsCount == 0) {
	obj69177_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj69177_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69177_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj69177").trigger("obj69177_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69177) {
				console.warn("de-queueing event obj69177." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69177").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69177_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_69185();
function runjs_69185() {
	window.obj69177_droppedInsideTargetActions_runningActionsCount = obj69177_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj69177").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj69177_droppedInsideTargetActions_runningActionsCount = window.obj69177_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj69177_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj69177_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj69177_droppedInsideTargetActions_runningActionsCount == 0) {
	obj69177_droppedInsideTargetActions_actionGroup5();
}
	}, 1);
}







};
obj69177_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69177_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj69177").trigger("obj69177_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69177) {
				console.warn("de-queueing event obj69177." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69177").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69177_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj69294 
playAudio_69187();
function playAudio_69187() {
	window.obj69177_droppedInsideTargetActions_runningActionsCount = obj69177_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj69294")[0];
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
		    window.obj69177_droppedInsideTargetActions_runningActionsCount = window.obj69177_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj69177_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj69177_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj69177_droppedInsideTargetActions_runningActionsCount == 0) {
	obj69177_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj69177_droppedInsideTargetActions_runningActionsCount = window.obj69177_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj69177_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj69177_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj69177_droppedInsideTargetActions_runningActionsCount == 0) {
	obj69177_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj69177_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69177_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj69177").trigger("obj69177_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69177) {
				console.warn("de-queueing event obj69177." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69177").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69177_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90139();
function switchText_90139() {
	window.obj69177_droppedInsideTargetActions_runningActionsCount = obj69177_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj69296_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj69296_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj69296").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj69296_content");
			setTimeout(function () {
				window.obj69177_droppedInsideTargetActions_runningActionsCount = window.obj69177_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj69177_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj69177_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj69177_droppedInsideTargetActions_runningActionsCount == 0) {
	obj69177_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj69296 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj69177_droppedInsideTargetActions_runningActionsCount = window.obj69177_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj69177_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj69177_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj69177_droppedInsideTargetActions_runningActionsCount == 0) {
	obj69177_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj69177_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj69177_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj69177").trigger("obj69177_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69177) {
				console.warn("de-queueing event obj69177." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69177").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69177_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj69159_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69159_onTap_activeActionGroupIndex = -1;
		$("#obj69159").trigger("obj69159_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69159) {
				console.warn("de-queueing event obj69159." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69159").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69159_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj69159 
hide_69162();
function hide_69162() {
	var selector = "#obj69159";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj69159_onTap_runningActionsCount = obj69159_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj69159_onTap_runningActionsCount = window.obj69159_onTap_runningActionsCount - 1;
if (window.obj69159_onTap_runningActionsCount < 0) {
	window.obj69159_onTap_runningActionsCount = 0;
} else if (window.obj69159_onTap_runningActionsCount == 0) {
	obj69159_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_69162(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj69159_onTap_runningActionsCount = window.obj69159_onTap_runningActionsCount - 1;
if (window.obj69159_onTap_runningActionsCount < 0) {
	window.obj69159_onTap_runningActionsCount = 0;
} else if (window.obj69159_onTap_runningActionsCount == 0) {
	obj69159_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj69149 
stopMovie_69161();
function stopMovie_69161() {
	window.obj69159_onTap_runningActionsCount = obj69159_onTap_runningActionsCount + 1;
	var myVideo = $("#obj69149")[0];
	myVideo.pause();
	window.obj69159_onTap_runningActionsCount = window.obj69159_onTap_runningActionsCount - 1;
if (window.obj69159_onTap_runningActionsCount < 0) {
	window.obj69159_onTap_runningActionsCount = 0;
} else if (window.obj69159_onTap_runningActionsCount == 0) {
	obj69159_onTap_actionGroup1();
}
}
















};
obj69159_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69159_onTap_activeActionGroupIndex = -1;
		$("#obj69159").trigger("obj69159_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69159) {
				console.warn("de-queueing event obj69159." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69159").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69159_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj69151
(function(){
	window.obj69159_onTap_runningActionsCount = obj69159_onTap_runningActionsCount + 1;

	var selector = "#obj69151";
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
					window.obj69159_onTap_runningActionsCount = window.obj69159_onTap_runningActionsCount - 1;
if (window.obj69159_onTap_runningActionsCount < 0) {
	window.obj69159_onTap_runningActionsCount = 0;
} else if (window.obj69159_onTap_runningActionsCount == 0) {
	obj69159_onTap_actionGroup2();
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
				window.obj69159_onTap_runningActionsCount = window.obj69159_onTap_runningActionsCount - 1;
if (window.obj69159_onTap_runningActionsCount < 0) {
	window.obj69159_onTap_runningActionsCount = 0;
} else if (window.obj69159_onTap_runningActionsCount == 0) {
	obj69159_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj69159_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69159_onTap_activeActionGroupIndex = -1;
		$("#obj69159").trigger("obj69159_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69159) {
				console.warn("de-queueing event obj69159." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69159").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69159_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj69149 
move_69164();
function move_69164() {
	window.obj69159_onTap_runningActionsCount = obj69159_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj69149");
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
			window.obj69159_onTap_runningActionsCount = window.obj69159_onTap_runningActionsCount - 1;
if (window.obj69159_onTap_runningActionsCount < 0) {
	window.obj69159_onTap_runningActionsCount = 0;
} else if (window.obj69159_onTap_runningActionsCount == 0) {
	obj69159_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj69159_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj69159_onTap_activeActionGroupIndex = -1;
		$("#obj69159").trigger("obj69159_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69159) {
				console.warn("de-queueing event obj69159." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69159").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69159_onTap_activeActionGroupIndex = 3;
	





















};
obj69151_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69151_onTap_activeActionGroupIndex = -1;
		$("#obj69151").trigger("obj69151_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69151) {
				console.warn("de-queueing event obj69151." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69151").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69151_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj69151 
hide_69154();
function hide_69154() {
	var selector = "#obj69151";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj69151_onTap_runningActionsCount = obj69151_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj69151_onTap_runningActionsCount = window.obj69151_onTap_runningActionsCount - 1;
if (window.obj69151_onTap_runningActionsCount < 0) {
	window.obj69151_onTap_runningActionsCount = 0;
} else if (window.obj69151_onTap_runningActionsCount == 0) {
	obj69151_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_69154(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj69151_onTap_runningActionsCount = window.obj69151_onTap_runningActionsCount - 1;
if (window.obj69151_onTap_runningActionsCount < 0) {
	window.obj69151_onTap_runningActionsCount = 0;
} else if (window.obj69151_onTap_runningActionsCount == 0) {
	obj69151_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj69149 
playPauseMovie_69153();
function playPauseMovie_69153() {
	window.obj69151_onTap_runningActionsCount = obj69151_onTap_runningActionsCount + 1;
	var myVideo = $("#obj69149")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj69151_onTap_runningActionsCount = window.obj69151_onTap_runningActionsCount - 1;
if (window.obj69151_onTap_runningActionsCount < 0) {
	window.obj69151_onTap_runningActionsCount = 0;
} else if (window.obj69151_onTap_runningActionsCount == 0) {
	obj69151_onTap_actionGroup1();
}
}

















};
obj69151_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69151_onTap_activeActionGroupIndex = -1;
		$("#obj69151").trigger("obj69151_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69151) {
				console.warn("de-queueing event obj69151." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69151").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69151_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj69159
(function(){
	window.obj69151_onTap_runningActionsCount = obj69151_onTap_runningActionsCount + 1;

	var selector = "#obj69159";
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
					window.obj69151_onTap_runningActionsCount = window.obj69151_onTap_runningActionsCount - 1;
if (window.obj69151_onTap_runningActionsCount < 0) {
	window.obj69151_onTap_runningActionsCount = 0;
} else if (window.obj69151_onTap_runningActionsCount == 0) {
	obj69151_onTap_actionGroup2();
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
				window.obj69151_onTap_runningActionsCount = window.obj69151_onTap_runningActionsCount - 1;
if (window.obj69151_onTap_runningActionsCount < 0) {
	window.obj69151_onTap_runningActionsCount = 0;
} else if (window.obj69151_onTap_runningActionsCount == 0) {
	obj69151_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj69151_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69151_onTap_activeActionGroupIndex = -1;
		$("#obj69151").trigger("obj69151_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69151) {
				console.warn("de-queueing event obj69151." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69151").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69151_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj69149 
move_69156();
function move_69156() {
	window.obj69151_onTap_runningActionsCount = obj69151_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj69149");
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
			window.obj69151_onTap_runningActionsCount = window.obj69151_onTap_runningActionsCount - 1;
if (window.obj69151_onTap_runningActionsCount < 0) {
	window.obj69151_onTap_runningActionsCount = 0;
} else if (window.obj69151_onTap_runningActionsCount == 0) {
	obj69151_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj69151_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj69151_onTap_activeActionGroupIndex = -1;
		$("#obj69151").trigger("obj69151_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69151) {
				console.warn("de-queueing event obj69151." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69151").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69151_onTap_activeActionGroupIndex = 3;
	





















};
obj87202_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87202_onTap_activeActionGroupIndex = -1;
		$("#obj87202").trigger("obj87202_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87202) {
				console.warn("de-queueing event obj87202." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87202").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87202_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj87207 
stopAudio_87204();
function stopAudio_87204() {
	window.obj87202_onTap_runningActionsCount = obj87202_onTap_runningActionsCount + 1;
	var myAudio = $("#obj87207")[0];
	myAudio.pause();
	window.obj87202_onTap_runningActionsCount = window.obj87202_onTap_runningActionsCount - 1;
if (window.obj87202_onTap_runningActionsCount < 0) {
	window.obj87202_onTap_runningActionsCount = 0;
} else if (window.obj87202_onTap_runningActionsCount == 0) {
	obj87202_onTap_actionGroup1();
}
}








};
obj87202_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87202_onTap_activeActionGroupIndex = -1;
		$("#obj87202").trigger("obj87202_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87202) {
				console.warn("de-queueing event obj87202." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87202").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87202_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj87202 
hide_87205();
function hide_87205() {
	var selector = "#obj87202";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj87202_onTap_runningActionsCount = obj87202_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj87202_onTap_runningActionsCount = window.obj87202_onTap_runningActionsCount - 1;
if (window.obj87202_onTap_runningActionsCount < 0) {
	window.obj87202_onTap_runningActionsCount = 0;
} else if (window.obj87202_onTap_runningActionsCount == 0) {
	obj87202_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_87205(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj87202_onTap_runningActionsCount = window.obj87202_onTap_runningActionsCount - 1;
if (window.obj87202_onTap_runningActionsCount < 0) {
	window.obj87202_onTap_runningActionsCount = 0;
} else if (window.obj87202_onTap_runningActionsCount == 0) {
	obj87202_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj87202_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87202_onTap_activeActionGroupIndex = -1;
		$("#obj87202").trigger("obj87202_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87202) {
				console.warn("de-queueing event obj87202." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87202").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87202_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj87197
(function(){
	window.obj87202_onTap_runningActionsCount = obj87202_onTap_runningActionsCount + 1;

	var selector = "#obj87197";
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
					window.obj87202_onTap_runningActionsCount = window.obj87202_onTap_runningActionsCount - 1;
if (window.obj87202_onTap_runningActionsCount < 0) {
	window.obj87202_onTap_runningActionsCount = 0;
} else if (window.obj87202_onTap_runningActionsCount == 0) {
	obj87202_onTap_actionGroup3();
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
				window.obj87202_onTap_runningActionsCount = window.obj87202_onTap_runningActionsCount - 1;
if (window.obj87202_onTap_runningActionsCount < 0) {
	window.obj87202_onTap_runningActionsCount = 0;
} else if (window.obj87202_onTap_runningActionsCount == 0) {
	obj87202_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj87202_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj87202_onTap_activeActionGroupIndex = -1;
		$("#obj87202").trigger("obj87202_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87202) {
				console.warn("de-queueing event obj87202." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87202").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87202_onTap_activeActionGroupIndex = 3;
	





















};
obj87197_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87197_onTap_activeActionGroupIndex = -1;
		$("#obj87197").trigger("obj87197_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87197) {
				console.warn("de-queueing event obj87197." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87197").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87197_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj87197 
hide_87199();
function hide_87199() {
	var selector = "#obj87197";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj87197_onTap_runningActionsCount = obj87197_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj87197_onTap_runningActionsCount = window.obj87197_onTap_runningActionsCount - 1;
if (window.obj87197_onTap_runningActionsCount < 0) {
	window.obj87197_onTap_runningActionsCount = 0;
} else if (window.obj87197_onTap_runningActionsCount == 0) {
	obj87197_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_87199(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj87197_onTap_runningActionsCount = window.obj87197_onTap_runningActionsCount - 1;
if (window.obj87197_onTap_runningActionsCount < 0) {
	window.obj87197_onTap_runningActionsCount = 0;
} else if (window.obj87197_onTap_runningActionsCount == 0) {
	obj87197_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj87197_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87197_onTap_activeActionGroupIndex = -1;
		$("#obj87197").trigger("obj87197_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87197) {
				console.warn("de-queueing event obj87197." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87197").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87197_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj87202
(function(){
	window.obj87197_onTap_runningActionsCount = obj87197_onTap_runningActionsCount + 1;

	var selector = "#obj87202";
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
					window.obj87197_onTap_runningActionsCount = window.obj87197_onTap_runningActionsCount - 1;
if (window.obj87197_onTap_runningActionsCount < 0) {
	window.obj87197_onTap_runningActionsCount = 0;
} else if (window.obj87197_onTap_runningActionsCount == 0) {
	obj87197_onTap_actionGroup2();
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
				window.obj87197_onTap_runningActionsCount = window.obj87197_onTap_runningActionsCount - 1;
if (window.obj87197_onTap_runningActionsCount < 0) {
	window.obj87197_onTap_runningActionsCount = 0;
} else if (window.obj87197_onTap_runningActionsCount == 0) {
	obj87197_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj87197_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87197_onTap_activeActionGroupIndex = -1;
		$("#obj87197").trigger("obj87197_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87197) {
				console.warn("de-queueing event obj87197." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87197").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87197_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj87207 
playAudio_87201();
function playAudio_87201() {
	window.obj87197_onTap_runningActionsCount = obj87197_onTap_runningActionsCount + 1;
	var myAudio = $("#obj87207")[0];
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
		    window.obj87197_onTap_runningActionsCount = window.obj87197_onTap_runningActionsCount - 1;
if (window.obj87197_onTap_runningActionsCount < 0) {
	window.obj87197_onTap_runningActionsCount = 0;
} else if (window.obj87197_onTap_runningActionsCount == 0) {
	obj87197_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj87197_onTap_runningActionsCount = window.obj87197_onTap_runningActionsCount - 1;
if (window.obj87197_onTap_runningActionsCount < 0) {
	window.obj87197_onTap_runningActionsCount = 0;
} else if (window.obj87197_onTap_runningActionsCount == 0) {
	obj87197_onTap_actionGroup3();
}
	}
}









};
obj87197_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj87197_onTap_activeActionGroupIndex = -1;
		$("#obj87197").trigger("obj87197_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87197) {
				console.warn("de-queueing event obj87197." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87197").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87197_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj69335: Event Touch Down
 *
 */
$("#obj69335").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj69335_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj69335_onTap is still running");
	return;
}
var obj69335_onTap_runningActionsCount = 0;
var obj69335_onTap_loopCount = 0;
obj69335_onTap_actionGroup0();
});










/*
 *
 *   obj69332: Event Touch Down
 *
 */
$("#obj69332").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj69332_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj69332_onTap is still running");
	return;
}
var obj69332_onTap_runningActionsCount = 0;
var obj69332_onTap_loopCount = 0;
obj69332_onTap_actionGroup0();
});










/*
 *
 *   obj69328: Event Touch Down
 *
 */
$("#obj69328").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj69328_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj69328_onTap is still running");
	return;
}
var obj69328_onTap_runningActionsCount = 0;
var obj69328_onTap_loopCount = 0;
obj69328_onTap_actionGroup0();
});































































































































































































/*
 *
 *   obj69255: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj69255");
	var winTarget = document.getElementById("obj69255");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj69255").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj69255_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj69255_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj69255_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj69255_onTouchDown is still running");
	return;
}
var obj69255_onTouchDown_runningActionsCount = 0;
var obj69255_onTouchDown_loopCount = 0;
obj69255_onTouchDown_actionGroup0();
});



/*
 *
 *   obj69255: Event SCActionDragDrop69258_droppedOutsideTargetActions
 *
 */
$("#obj69255").bind("SCActionDragDrop69258_droppedOutsideTargetActions", function(event) {
	if (window.obj69255_SCActionDragDrop69258_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj69255_SCActionDragDrop69258_droppedOutsideTargetActions is still running");
	return;
}
var obj69255_SCActionDragDrop69258_droppedOutsideTargetActions_runningActionsCount = 0;
var obj69255_SCActionDragDrop69258_droppedOutsideTargetActions_loopCount = 0;
obj69255_SCActionDragDrop69258_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj69255: Event droppedInsideTargetActions_3
 *
 */
$("#obj69255").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj69255_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj69255_droppedInsideTargetActions_3 is still running");
	return;
}
var obj69255_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj69255_droppedInsideTargetActions_3_loopCount = 0;
obj69255_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj69255: Event droppedInsideTargetActions_2
 *
 */
$("#obj69255").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj69255_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj69255_droppedInsideTargetActions_2 is still running");
	return;
}
var obj69255_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj69255_droppedInsideTargetActions_2_loopCount = 0;
obj69255_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj69255: Event droppedInsideTargetActions
 *
 */
$("#obj69255").bind("droppedInsideTargetActions", function(event) {
	if (window.obj69255_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj69255_droppedInsideTargetActions is still running");
	return;
}
var obj69255_droppedInsideTargetActions_runningActionsCount = 0;
var obj69255_droppedInsideTargetActions_loopCount = 0;
obj69255_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj69216: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj69216");
	var winTarget = document.getElementById("obj69216");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj69216").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj69216_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj69216_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj69216_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj69216_onTouchDown is still running");
	return;
}
var obj69216_onTouchDown_runningActionsCount = 0;
var obj69216_onTouchDown_loopCount = 0;
obj69216_onTouchDown_actionGroup0();
});



/*
 *
 *   obj69216: Event SCActionDragDrop69219_droppedOutsideTargetActions
 *
 */
$("#obj69216").bind("SCActionDragDrop69219_droppedOutsideTargetActions", function(event) {
	if (window.obj69216_SCActionDragDrop69219_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj69216_SCActionDragDrop69219_droppedOutsideTargetActions is still running");
	return;
}
var obj69216_SCActionDragDrop69219_droppedOutsideTargetActions_runningActionsCount = 0;
var obj69216_SCActionDragDrop69219_droppedOutsideTargetActions_loopCount = 0;
obj69216_SCActionDragDrop69219_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj69216: Event droppedInsideTargetActions_3
 *
 */
$("#obj69216").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj69216_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj69216_droppedInsideTargetActions_3 is still running");
	return;
}
var obj69216_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj69216_droppedInsideTargetActions_3_loopCount = 0;
obj69216_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj69216: Event droppedInsideTargetActions_2
 *
 */
$("#obj69216").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj69216_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj69216_droppedInsideTargetActions_2 is still running");
	return;
}
var obj69216_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj69216_droppedInsideTargetActions_2_loopCount = 0;
obj69216_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj69216: Event droppedInsideTargetActions
 *
 */
$("#obj69216").bind("droppedInsideTargetActions", function(event) {
	if (window.obj69216_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj69216_droppedInsideTargetActions is still running");
	return;
}
var obj69216_droppedInsideTargetActions_runningActionsCount = 0;
var obj69216_droppedInsideTargetActions_loopCount = 0;
obj69216_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj69177: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj69177");
	var winTarget = document.getElementById("obj69177");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj69177").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj69177_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj69177_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj69177_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj69177_onTouchDown is still running");
	return;
}
var obj69177_onTouchDown_runningActionsCount = 0;
var obj69177_onTouchDown_loopCount = 0;
obj69177_onTouchDown_actionGroup0();
});



/*
 *
 *   obj69177: Event SCActionDragDrop69180_droppedOutsideTargetActions
 *
 */
$("#obj69177").bind("SCActionDragDrop69180_droppedOutsideTargetActions", function(event) {
	if (window.obj69177_SCActionDragDrop69180_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj69177_SCActionDragDrop69180_droppedOutsideTargetActions is still running");
	return;
}
var obj69177_SCActionDragDrop69180_droppedOutsideTargetActions_runningActionsCount = 0;
var obj69177_SCActionDragDrop69180_droppedOutsideTargetActions_loopCount = 0;
obj69177_SCActionDragDrop69180_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj69177: Event droppedInsideTargetActions_3
 *
 */
$("#obj69177").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj69177_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj69177_droppedInsideTargetActions_3 is still running");
	return;
}
var obj69177_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj69177_droppedInsideTargetActions_3_loopCount = 0;
obj69177_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj69177: Event droppedInsideTargetActions_2
 *
 */
$("#obj69177").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj69177_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj69177_droppedInsideTargetActions_2 is still running");
	return;
}
var obj69177_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj69177_droppedInsideTargetActions_2_loopCount = 0;
obj69177_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj69177: Event droppedInsideTargetActions
 *
 */
$("#obj69177").bind("droppedInsideTargetActions", function(event) {
	if (window.obj69177_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj69177_droppedInsideTargetActions is still running");
	return;
}
var obj69177_droppedInsideTargetActions_runningActionsCount = 0;
var obj69177_droppedInsideTargetActions_loopCount = 0;
obj69177_droppedInsideTargetActions_actionGroup0();
});





/*
 *
 *   obj69159: Event Touch Down
 *
 */
$("#obj69159").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj69159_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj69159_onTap is still running");
	return;
}
var obj69159_onTap_runningActionsCount = 0;
var obj69159_onTap_loopCount = 0;
obj69159_onTap_actionGroup0();
});










/*
 *
 *   obj69151: Event Touch Down
 *
 */
$("#obj69151").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj69151_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj69151_onTap is still running");
	return;
}
var obj69151_onTap_runningActionsCount = 0;
var obj69151_onTap_loopCount = 0;
obj69151_onTap_actionGroup0();
});










/*
 *
 *   obj87202: Event Touch Down
 *
 */
$("#obj87202").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj87202_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj87202_onTap is still running");
	return;
}
var obj87202_onTap_runningActionsCount = 0;
var obj87202_onTap_loopCount = 0;
obj87202_onTap_actionGroup0();
});










/*
 *
 *   obj87197: Event Touch Down
 *
 */
$("#obj87197").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj87197_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj87197_onTap is still running");
	return;
}
var obj87197_onTap_runningActionsCount = 0;
var obj87197_onTap_loopCount = 0;
obj87197_onTap_actionGroup0();
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
	
$("#obj69338").trigger('SCEventShow');
$("#obj69335").trigger('SCEventShow');
$("#obj69332").trigger('SCEventShow');
$("#obj69328").trigger('SCEventShow');
$("#obj69326").trigger('SCEventShow');
$("#obj69324").trigger('SCEventShow');
$("#obj69322").trigger('SCEventShow');
$("#obj69320").trigger('SCEventShow');
$("#obj69318").trigger('SCEventShow');
$("#obj69316").trigger('SCEventShow');
$("#obj69314").trigger('SCEventShow');
$("#obj69312").trigger('SCEventShow');
$("#obj69310").trigger('SCEventShow');
$("#obj69308").trigger('SCEventShow');
$("#obj69306").trigger('SCEventShow');
$("#obj69304").trigger('SCEventShow');
$("#obj69302").trigger('SCEventShow');
$("#obj69300").trigger('SCEventShow');
$("#obj69298").trigger('SCEventShow');
$("#obj69296").trigger('SCEventShow');
$("#obj69295").trigger('SCEventShow');
$("#obj69294").trigger('SCEventShow');
$("#obj69255").trigger('SCEventShow');
$("#obj69216").trigger('SCEventShow');
$("#obj69177").trigger('SCEventShow');
$("#obj69159").trigger('SCEventShow');
$("#obj69151").trigger('SCEventShow');
$("#obj87202").trigger('SCEventShow');
$("#obj87197").trigger('SCEventShow');
$("#obj87207").trigger('SCEventShow');
$("#obj94707").trigger('SCEventShow');
$("#obj69149").trigger('SCEventShow');
	
});