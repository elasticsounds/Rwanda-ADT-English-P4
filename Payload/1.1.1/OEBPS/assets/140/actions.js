pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 41565;
pubcoder.page.title = pubcoder.page.title || "140";
pubcoder.page.number = pubcoder.page.number || 140;
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
var obj41726_onTap_activeActionGroupIndex = -1;
var obj41726_onTap_runningActionsCount = 0;
var obj41726_onTap_loopCount = 0;
var obj41723_onTap_activeActionGroupIndex = -1;
var obj41723_onTap_runningActionsCount = 0;
var obj41723_onTap_loopCount = 0;
var obj41719_onTap_activeActionGroupIndex = -1;
var obj41719_onTap_runningActionsCount = 0;
var obj41719_onTap_loopCount = 0;
var obj41609_onDrag_activeActionGroupIndex = -1;
var obj41609_onDrag_runningActionsCount = 0;
var obj41609_onDrag_loopCount = 0;
var obj41609_onTouchDown_activeActionGroupIndex = -1;
var obj41609_onTouchDown_runningActionsCount = 0;
var obj41609_onTouchDown_loopCount = 0;
var obj41609_SCActionDragDrop41612_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj41609_SCActionDragDrop41612_droppedOutsideTargetActions_runningActionsCount = 0;
var obj41609_SCActionDragDrop41612_droppedOutsideTargetActions_loopCount = 0;
var obj41609_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj41609_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj41609_droppedInsideTargetActions_2_loopCount = 0;
var obj41609_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj41609_droppedInsideTargetActions_runningActionsCount = 0;
var obj41609_droppedInsideTargetActions_loopCount = 0;
var obj41570_onDrag_activeActionGroupIndex = -1;
var obj41570_onDrag_runningActionsCount = 0;
var obj41570_onDrag_loopCount = 0;
var obj41570_onTouchDown_activeActionGroupIndex = -1;
var obj41570_onTouchDown_runningActionsCount = 0;
var obj41570_onTouchDown_loopCount = 0;
var obj41570_SCActionDragDrop41573_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj41570_SCActionDragDrop41573_droppedOutsideTargetActions_runningActionsCount = 0;
var obj41570_SCActionDragDrop41573_droppedOutsideTargetActions_loopCount = 0;
var obj41570_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj41570_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj41570_droppedInsideTargetActions_2_loopCount = 0;
var obj41570_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj41570_droppedInsideTargetActions_runningActionsCount = 0;
var obj41570_droppedInsideTargetActions_loopCount = 0;
var obj67246_onTap_activeActionGroupIndex = -1;
var obj67246_onTap_runningActionsCount = 0;
var obj67246_onTap_loopCount = 0;
var obj67238_onTap_activeActionGroupIndex = -1;
var obj67238_onTap_runningActionsCount = 0;
var obj67238_onTap_loopCount = 0;
var obj88549_onTap_activeActionGroupIndex = -1;
var obj88549_onTap_runningActionsCount = 0;
var obj88549_onTap_loopCount = 0;
var obj88544_onTap_activeActionGroupIndex = -1;
var obj88544_onTap_runningActionsCount = 0;
var obj88544_onTap_loopCount = 0;
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
		
obj41726_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41726_onTap_activeActionGroupIndex = -1;
		$("#obj41726").trigger("obj41726_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41726) {
				console.warn("de-queueing event obj41726." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41726").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41726_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_41728();
function goToPage_41728() {
	window.obj41726_onTap_runningActionsCount = obj41726_onTap_runningActionsCount + 1;
	$("#anchor831")[0].click();
	window.obj41726_onTap_runningActionsCount = window.obj41726_onTap_runningActionsCount - 1;
if (window.obj41726_onTap_runningActionsCount < 0) {
	window.obj41726_onTap_runningActionsCount = 0;
} else if (window.obj41726_onTap_runningActionsCount == 0) {
	obj41726_onTap_actionGroup1();
}
}





















};
obj41726_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj41726_onTap_activeActionGroupIndex = -1;
		$("#obj41726").trigger("obj41726_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41726) {
				console.warn("de-queueing event obj41726." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41726").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41726_onTap_activeActionGroupIndex = 1;
	





















};
obj41723_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41723_onTap_activeActionGroupIndex = -1;
		$("#obj41723").trigger("obj41723_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41723) {
				console.warn("de-queueing event obj41723." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41723").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41723_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_41725();
function goToPage_41725() {
	window.obj41723_onTap_runningActionsCount = obj41723_onTap_runningActionsCount + 1;
	$("#anchor832")[0].click();
	window.obj41723_onTap_runningActionsCount = window.obj41723_onTap_runningActionsCount - 1;
if (window.obj41723_onTap_runningActionsCount < 0) {
	window.obj41723_onTap_runningActionsCount = 0;
} else if (window.obj41723_onTap_runningActionsCount == 0) {
	obj41723_onTap_actionGroup1();
}
}





















};
obj41723_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj41723_onTap_activeActionGroupIndex = -1;
		$("#obj41723").trigger("obj41723_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41723) {
				console.warn("de-queueing event obj41723." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41723").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41723_onTap_activeActionGroupIndex = 1;
	





















};
obj41719_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41719_onTap_activeActionGroupIndex = -1;
		$("#obj41719").trigger("obj41719_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41719) {
				console.warn("de-queueing event obj41719." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41719").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41719_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_41721();
function goToPage_41721() {
	window.obj41719_onTap_runningActionsCount = obj41719_onTap_runningActionsCount + 1;
	$("#anchor833")[0].click();
	window.obj41719_onTap_runningActionsCount = window.obj41719_onTap_runningActionsCount - 1;
if (window.obj41719_onTap_runningActionsCount < 0) {
	window.obj41719_onTap_runningActionsCount = 0;
} else if (window.obj41719_onTap_runningActionsCount == 0) {
	obj41719_onTap_actionGroup1();
}
}





















};
obj41719_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj41719_onTap_activeActionGroupIndex = -1;
		$("#obj41719").trigger("obj41719_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41719) {
				console.warn("de-queueing event obj41719." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41719").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41719_onTap_activeActionGroupIndex = 1;
	





















};
obj41609_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41609_onTouchDown_activeActionGroupIndex = -1;
		$("#obj41609").trigger("obj41609_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41609) {
				console.warn("de-queueing event obj41609." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41609").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41609_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj41609");
//	action: dragDrop
//	target: obj41609 
dragDrop_41612();
function dragDrop_41612() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj41609_onTouchDown_runningActionsCount = obj41609_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj41609');
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
	  	containerNode = $('#obj41711');
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
    	window.obj41609_onTouchDown_runningActionsCount = window.obj41609_onTouchDown_runningActionsCount - 1;
if (window.obj41609_onTouchDown_runningActionsCount < 0) {
	window.obj41609_onTouchDown_runningActionsCount = 0;
} else if (window.obj41609_onTouchDown_runningActionsCount == 0) {
	obj41609_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj41701","#obj41703");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_41612 = false;
    	var dropped_id_41612;
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
					dropped_41612 = true;
					dropped_id_41612 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_41612) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj41609").trigger('SCActionDragDrop41612_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj41609_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj41609_onTouchDown_activeActionGroupIndex = -1;
		$("#obj41609").trigger("obj41609_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41609) {
				console.warn("de-queueing event obj41609." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41609").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41609_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj41609_SCActionDragDrop41612_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41609_SCActionDragDrop41612_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj41609").trigger("obj41609_SCActionDragDrop41612_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41609) {
				console.warn("de-queueing event obj41609." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41609").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41609_SCActionDragDrop41612_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj41609 
move_92619();
function move_92619() {
	window.obj41609_SCActionDragDrop41612_droppedOutsideTargetActions_runningActionsCount = obj41609_SCActionDragDrop41612_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj41609");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 318;
	var moveY = 599;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj41609_SCActionDragDrop41612_droppedOutsideTargetActions_runningActionsCount = window.obj41609_SCActionDragDrop41612_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj41609_SCActionDragDrop41612_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj41609_SCActionDragDrop41612_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj41609_SCActionDragDrop41612_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj41609_SCActionDragDrop41612_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj41609_SCActionDragDrop41612_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj41609_SCActionDragDrop41612_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj41609").trigger("obj41609_SCActionDragDrop41612_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41609) {
				console.warn("de-queueing event obj41609." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41609").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41609_SCActionDragDrop41612_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj41609_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41609_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj41609").trigger("obj41609_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41609) {
				console.warn("de-queueing event obj41609." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41609").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41609_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_41621();
function runjs_41621() {
	window.obj41609_droppedInsideTargetActions_2_runningActionsCount = obj41609_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj41703").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj41609_droppedInsideTargetActions_2_runningActionsCount = window.obj41609_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj41609_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj41609_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj41609_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj41609_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj41609_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41609_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj41609").trigger("obj41609_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41609) {
				console.warn("de-queueing event obj41609." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41609").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41609_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_41622();
function runjs_41622() {
	window.obj41609_droppedInsideTargetActions_2_runningActionsCount = obj41609_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj41703").css("border-color", "#C00000"); $("#obj41703").css("border-width", "2px"); $("#obj41703").css("border-style", "solid"); $("#obj41703").css("border-radius", "10px"); $("#obj41703").css("-webkit-border-radius", "10px"); $("#obj41703").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj41609_droppedInsideTargetActions_2_runningActionsCount = window.obj41609_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj41609_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj41609_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj41609_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj41609_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj41609_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41609_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj41609").trigger("obj41609_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41609) {
				console.warn("de-queueing event obj41609." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41609").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41609_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj41697 
hide_41623();
function hide_41623() {
	var selector = "#obj41697";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj41609_droppedInsideTargetActions_2_runningActionsCount = obj41609_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj41609_droppedInsideTargetActions_2_runningActionsCount = window.obj41609_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj41609_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj41609_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj41609_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj41609_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_41623(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj41609_droppedInsideTargetActions_2_runningActionsCount = window.obj41609_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj41609_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj41609_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj41609_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj41609_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj41609_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41609_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj41609").trigger("obj41609_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41609) {
				console.warn("de-queueing event obj41609." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41609").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41609_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_41624();
function runjs_41624() {
	window.obj41609_droppedInsideTargetActions_2_runningActionsCount = obj41609_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj41609").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj41609_droppedInsideTargetActions_2_runningActionsCount = window.obj41609_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj41609_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj41609_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj41609_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj41609_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj41609_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41609_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj41609").trigger("obj41609_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41609) {
				console.warn("de-queueing event obj41609." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41609").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41609_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_41625();
function switchText_41625() {
	window.obj41609_droppedInsideTargetActions_2_runningActionsCount = obj41609_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj41650_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj41650_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj41650").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj41650_content");
			setTimeout(function () {
				window.obj41609_droppedInsideTargetActions_2_runningActionsCount = window.obj41609_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj41609_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj41609_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj41609_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj41609_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj41650 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj41609_droppedInsideTargetActions_2_runningActionsCount = window.obj41609_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj41609_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj41609_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj41609_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj41609_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj41609_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41609_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj41609").trigger("obj41609_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41609) {
				console.warn("de-queueing event obj41609." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41609").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41609_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj41609 
move_41626();
function move_41626() {
	window.obj41609_droppedInsideTargetActions_2_runningActionsCount = obj41609_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj41609");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 318;
	var moveY = 599;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj41609_droppedInsideTargetActions_2_runningActionsCount = window.obj41609_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj41609_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj41609_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj41609_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj41609_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj41609_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41609_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj41609").trigger("obj41609_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41609) {
				console.warn("de-queueing event obj41609." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41609").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41609_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_41627();
function runjs_41627() {
	window.obj41609_droppedInsideTargetActions_2_runningActionsCount = obj41609_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj41703").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj41609_droppedInsideTargetActions_2_runningActionsCount = window.obj41609_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj41609_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj41609_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj41609_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj41609_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj41609_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41609_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj41609").trigger("obj41609_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41609) {
				console.warn("de-queueing event obj41609." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41609").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41609_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_41628();
function runjs_41628() {
	window.obj41609_droppedInsideTargetActions_2_runningActionsCount = obj41609_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj41703").css("border-color", "#000000"); $("#obj41703").css("border-width", "1px"); $("#obj41703").css("border-style", "solid"); $("#obj41703").css("border-radius", "10px"); $("#obj41703").css("-webkit-border-radius", "10px"); $("#obj41703").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj41609_droppedInsideTargetActions_2_runningActionsCount = window.obj41609_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj41609_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj41609_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj41609_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj41609_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj41609_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41609_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj41609").trigger("obj41609_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41609) {
				console.warn("de-queueing event obj41609." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41609").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41609_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj41697
(function(){
	window.obj41609_droppedInsideTargetActions_2_runningActionsCount = obj41609_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj41697";
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
					window.obj41609_droppedInsideTargetActions_2_runningActionsCount = window.obj41609_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj41609_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj41609_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj41609_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj41609_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj41609_droppedInsideTargetActions_2_runningActionsCount = window.obj41609_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj41609_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj41609_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj41609_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj41609_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj41609_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41609_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj41609").trigger("obj41609_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41609) {
				console.warn("de-queueing event obj41609." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41609").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41609_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_41630();
function runjs_41630() {
	window.obj41609_droppedInsideTargetActions_2_runningActionsCount = obj41609_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj41609").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj41609_droppedInsideTargetActions_2_runningActionsCount = window.obj41609_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj41609_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj41609_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj41609_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj41609_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj41609_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41609_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj41609").trigger("obj41609_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41609) {
				console.warn("de-queueing event obj41609." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41609").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41609_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_41631();
function runjs_41631() {
	window.obj41609_droppedInsideTargetActions_2_runningActionsCount = obj41609_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj41609").css("border-color", "rgba(0,0,0,0)"); $("#obj41609").css("border-width", "0px"); $("#obj41609").css("border-style", "solid"); $("#obj41609").css("border-radius", "10px"); $("#obj41609").css("-webkit-border-radius", "10px"); $("#obj41609").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj41609_droppedInsideTargetActions_2_runningActionsCount = window.obj41609_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj41609_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj41609_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj41609_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj41609_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj41609_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41609_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj41609").trigger("obj41609_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41609) {
				console.warn("de-queueing event obj41609." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41609").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41609_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj41649 
playAudio_41632();
function playAudio_41632() {
	window.obj41609_droppedInsideTargetActions_2_runningActionsCount = obj41609_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj41649")[0];
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
		    window.obj41609_droppedInsideTargetActions_2_runningActionsCount = window.obj41609_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj41609_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj41609_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj41609_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj41609_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj41609_droppedInsideTargetActions_2_runningActionsCount = window.obj41609_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj41609_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj41609_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj41609_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj41609_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj41609_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41609_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj41609").trigger("obj41609_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41609) {
				console.warn("de-queueing event obj41609." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41609").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41609_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_41633();
function switchText_41633() {
	window.obj41609_droppedInsideTargetActions_2_runningActionsCount = obj41609_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj41650_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj41650_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj41650").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj41650_content");
			setTimeout(function () {
				window.obj41609_droppedInsideTargetActions_2_runningActionsCount = window.obj41609_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj41609_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj41609_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj41609_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj41609_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj41650 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj41609_droppedInsideTargetActions_2_runningActionsCount = window.obj41609_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj41609_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj41609_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj41609_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj41609_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj41609_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj41609_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj41609").trigger("obj41609_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41609) {
				console.warn("de-queueing event obj41609." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41609").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41609_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj41609_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41609_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj41609").trigger("obj41609_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41609) {
				console.warn("de-queueing event obj41609." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41609").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41609_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_41614();
function runjs_41614() {
	window.obj41609_droppedInsideTargetActions_runningActionsCount = obj41609_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj41701").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj41609_droppedInsideTargetActions_runningActionsCount = window.obj41609_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj41609_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj41609_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj41609_droppedInsideTargetActions_runningActionsCount == 0) {
	obj41609_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj41609_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41609_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj41609").trigger("obj41609_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41609) {
				console.warn("de-queueing event obj41609." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41609").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41609_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_41618();
function switchText_41618() {
	window.obj41609_droppedInsideTargetActions_runningActionsCount = obj41609_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj41650_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj41650_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj41650").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj41650_content");
			setTimeout(function () {
				window.obj41609_droppedInsideTargetActions_runningActionsCount = window.obj41609_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj41609_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj41609_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj41609_droppedInsideTargetActions_runningActionsCount == 0) {
	obj41609_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj41650 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj41609_droppedInsideTargetActions_runningActionsCount = window.obj41609_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj41609_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj41609_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj41609_droppedInsideTargetActions_runningActionsCount == 0) {
	obj41609_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj41609_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41609_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj41609").trigger("obj41609_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41609) {
				console.warn("de-queueing event obj41609." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41609").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41609_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_41615();
function runjs_41615() {
	window.obj41609_droppedInsideTargetActions_runningActionsCount = obj41609_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj41701").css("border-color", "#058E3F"); $("#obj41701").css("border-width", "2px"); $("#obj41701").css("border-style", "solid"); $("#obj41701").css("border-radius", "10px"); $("#obj41701").css("-webkit-border-radius", "10px"); $("#obj41701").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj41609_droppedInsideTargetActions_runningActionsCount = window.obj41609_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj41609_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj41609_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj41609_droppedInsideTargetActions_runningActionsCount == 0) {
	obj41609_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj41609_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41609_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj41609").trigger("obj41609_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41609) {
				console.warn("de-queueing event obj41609." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41609").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41609_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj41695 
hide_41616();
function hide_41616() {
	var selector = "#obj41695";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj41609_droppedInsideTargetActions_runningActionsCount = obj41609_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj41609_droppedInsideTargetActions_runningActionsCount = window.obj41609_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj41609_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj41609_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj41609_droppedInsideTargetActions_runningActionsCount == 0) {
	obj41609_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_41616(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj41609_droppedInsideTargetActions_runningActionsCount = window.obj41609_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj41609_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj41609_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj41609_droppedInsideTargetActions_runningActionsCount == 0) {
	obj41609_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj41609_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41609_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj41609").trigger("obj41609_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41609) {
				console.warn("de-queueing event obj41609." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41609").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41609_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_41617();
function runjs_41617() {
	window.obj41609_droppedInsideTargetActions_runningActionsCount = obj41609_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj41609").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj41609_droppedInsideTargetActions_runningActionsCount = window.obj41609_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj41609_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj41609_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj41609_droppedInsideTargetActions_runningActionsCount == 0) {
	obj41609_droppedInsideTargetActions_actionGroup5();
}
	}, 1);
}







};
obj41609_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41609_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj41609").trigger("obj41609_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41609) {
				console.warn("de-queueing event obj41609." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41609").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41609_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj41648 
playAudio_41619();
function playAudio_41619() {
	window.obj41609_droppedInsideTargetActions_runningActionsCount = obj41609_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj41648")[0];
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
		    window.obj41609_droppedInsideTargetActions_runningActionsCount = window.obj41609_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj41609_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj41609_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj41609_droppedInsideTargetActions_runningActionsCount == 0) {
	obj41609_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj41609_droppedInsideTargetActions_runningActionsCount = window.obj41609_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj41609_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj41609_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj41609_droppedInsideTargetActions_runningActionsCount == 0) {
	obj41609_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj41609_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41609_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj41609").trigger("obj41609_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41609) {
				console.warn("de-queueing event obj41609." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41609").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41609_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90504();
function switchText_90504() {
	window.obj41609_droppedInsideTargetActions_runningActionsCount = obj41609_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj41650_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj41650_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj41650").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj41650_content");
			setTimeout(function () {
				window.obj41609_droppedInsideTargetActions_runningActionsCount = window.obj41609_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj41609_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj41609_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj41609_droppedInsideTargetActions_runningActionsCount == 0) {
	obj41609_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj41650 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj41609_droppedInsideTargetActions_runningActionsCount = window.obj41609_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj41609_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj41609_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj41609_droppedInsideTargetActions_runningActionsCount == 0) {
	obj41609_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj41609_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj41609_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj41609").trigger("obj41609_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41609) {
				console.warn("de-queueing event obj41609." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41609").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41609_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj41570_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41570_onTouchDown_activeActionGroupIndex = -1;
		$("#obj41570").trigger("obj41570_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41570) {
				console.warn("de-queueing event obj41570." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41570").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41570_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj41570");
//	action: dragDrop
//	target: obj41570 
dragDrop_41573();
function dragDrop_41573() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj41570_onTouchDown_runningActionsCount = obj41570_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj41570');
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
	  	containerNode = $('#obj41711');
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
    	window.obj41570_onTouchDown_runningActionsCount = window.obj41570_onTouchDown_runningActionsCount - 1;
if (window.obj41570_onTouchDown_runningActionsCount < 0) {
	window.obj41570_onTouchDown_runningActionsCount = 0;
} else if (window.obj41570_onTouchDown_runningActionsCount == 0) {
	obj41570_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj41703","#obj41701");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_41573 = false;
    	var dropped_id_41573;
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
					dropped_41573 = true;
					dropped_id_41573 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_41573) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj41570").trigger('SCActionDragDrop41573_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj41570_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj41570_onTouchDown_activeActionGroupIndex = -1;
		$("#obj41570").trigger("obj41570_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41570) {
				console.warn("de-queueing event obj41570." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41570").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41570_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj41570_SCActionDragDrop41573_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41570_SCActionDragDrop41573_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj41570").trigger("obj41570_SCActionDragDrop41573_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41570) {
				console.warn("de-queueing event obj41570." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41570").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41570_SCActionDragDrop41573_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj41570 
move_92617();
function move_92617() {
	window.obj41570_SCActionDragDrop41573_droppedOutsideTargetActions_runningActionsCount = obj41570_SCActionDragDrop41573_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj41570");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 156;
	var moveY = 599;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj41570_SCActionDragDrop41573_droppedOutsideTargetActions_runningActionsCount = window.obj41570_SCActionDragDrop41573_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj41570_SCActionDragDrop41573_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj41570_SCActionDragDrop41573_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj41570_SCActionDragDrop41573_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj41570_SCActionDragDrop41573_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj41570_SCActionDragDrop41573_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj41570_SCActionDragDrop41573_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj41570").trigger("obj41570_SCActionDragDrop41573_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41570) {
				console.warn("de-queueing event obj41570." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41570").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41570_SCActionDragDrop41573_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj41570_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41570_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj41570").trigger("obj41570_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41570) {
				console.warn("de-queueing event obj41570." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41570").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41570_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_41582();
function runjs_41582() {
	window.obj41570_droppedInsideTargetActions_2_runningActionsCount = obj41570_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj41701").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj41570_droppedInsideTargetActions_2_runningActionsCount = window.obj41570_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj41570_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj41570_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj41570_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj41570_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj41570_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41570_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj41570").trigger("obj41570_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41570) {
				console.warn("de-queueing event obj41570." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41570").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41570_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_41583();
function runjs_41583() {
	window.obj41570_droppedInsideTargetActions_2_runningActionsCount = obj41570_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj41701").css("border-color", "#C00000"); $("#obj41701").css("border-width", "2px"); $("#obj41701").css("border-style", "solid"); $("#obj41701").css("border-radius", "10px"); $("#obj41701").css("-webkit-border-radius", "10px"); $("#obj41701").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj41570_droppedInsideTargetActions_2_runningActionsCount = window.obj41570_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj41570_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj41570_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj41570_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj41570_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj41570_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41570_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj41570").trigger("obj41570_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41570) {
				console.warn("de-queueing event obj41570." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41570").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41570_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj41695 
hide_41584();
function hide_41584() {
	var selector = "#obj41695";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj41570_droppedInsideTargetActions_2_runningActionsCount = obj41570_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj41570_droppedInsideTargetActions_2_runningActionsCount = window.obj41570_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj41570_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj41570_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj41570_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj41570_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_41584(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj41570_droppedInsideTargetActions_2_runningActionsCount = window.obj41570_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj41570_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj41570_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj41570_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj41570_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj41570_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41570_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj41570").trigger("obj41570_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41570) {
				console.warn("de-queueing event obj41570." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41570").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41570_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_41585();
function runjs_41585() {
	window.obj41570_droppedInsideTargetActions_2_runningActionsCount = obj41570_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj41570").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj41570_droppedInsideTargetActions_2_runningActionsCount = window.obj41570_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj41570_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj41570_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj41570_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj41570_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj41570_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41570_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj41570").trigger("obj41570_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41570) {
				console.warn("de-queueing event obj41570." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41570").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41570_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_41586();
function switchText_41586() {
	window.obj41570_droppedInsideTargetActions_2_runningActionsCount = obj41570_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj41650_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj41650_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj41650").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj41650_content");
			setTimeout(function () {
				window.obj41570_droppedInsideTargetActions_2_runningActionsCount = window.obj41570_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj41570_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj41570_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj41570_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj41570_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj41650 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj41570_droppedInsideTargetActions_2_runningActionsCount = window.obj41570_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj41570_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj41570_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj41570_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj41570_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj41570_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41570_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj41570").trigger("obj41570_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41570) {
				console.warn("de-queueing event obj41570." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41570").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41570_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj41570 
move_41587();
function move_41587() {
	window.obj41570_droppedInsideTargetActions_2_runningActionsCount = obj41570_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj41570");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 156;
	var moveY = 599;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj41570_droppedInsideTargetActions_2_runningActionsCount = window.obj41570_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj41570_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj41570_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj41570_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj41570_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj41570_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41570_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj41570").trigger("obj41570_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41570) {
				console.warn("de-queueing event obj41570." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41570").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41570_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_41588();
function runjs_41588() {
	window.obj41570_droppedInsideTargetActions_2_runningActionsCount = obj41570_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj41701").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj41570_droppedInsideTargetActions_2_runningActionsCount = window.obj41570_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj41570_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj41570_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj41570_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj41570_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj41570_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41570_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj41570").trigger("obj41570_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41570) {
				console.warn("de-queueing event obj41570." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41570").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41570_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_41589();
function runjs_41589() {
	window.obj41570_droppedInsideTargetActions_2_runningActionsCount = obj41570_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj41701").css("border-color", "#000000"); $("#obj41701").css("border-width", "1px"); $("#obj41701").css("border-style", "solid"); $("#obj41701").css("border-radius", "10px"); $("#obj41701").css("-webkit-border-radius", "10px"); $("#obj41701").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj41570_droppedInsideTargetActions_2_runningActionsCount = window.obj41570_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj41570_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj41570_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj41570_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj41570_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj41570_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41570_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj41570").trigger("obj41570_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41570) {
				console.warn("de-queueing event obj41570." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41570").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41570_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj41695
(function(){
	window.obj41570_droppedInsideTargetActions_2_runningActionsCount = obj41570_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj41695";
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
					window.obj41570_droppedInsideTargetActions_2_runningActionsCount = window.obj41570_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj41570_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj41570_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj41570_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj41570_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj41570_droppedInsideTargetActions_2_runningActionsCount = window.obj41570_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj41570_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj41570_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj41570_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj41570_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj41570_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41570_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj41570").trigger("obj41570_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41570) {
				console.warn("de-queueing event obj41570." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41570").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41570_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_41591();
function runjs_41591() {
	window.obj41570_droppedInsideTargetActions_2_runningActionsCount = obj41570_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj41570").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj41570_droppedInsideTargetActions_2_runningActionsCount = window.obj41570_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj41570_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj41570_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj41570_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj41570_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj41570_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41570_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj41570").trigger("obj41570_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41570) {
				console.warn("de-queueing event obj41570." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41570").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41570_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_41592();
function runjs_41592() {
	window.obj41570_droppedInsideTargetActions_2_runningActionsCount = obj41570_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj41570").css("border-color", "rgba(0,0,0,0)"); $("#obj41570").css("border-width", "0px"); $("#obj41570").css("border-style", "solid"); $("#obj41570").css("border-radius", "10px"); $("#obj41570").css("-webkit-border-radius", "10px"); $("#obj41570").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj41570_droppedInsideTargetActions_2_runningActionsCount = window.obj41570_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj41570_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj41570_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj41570_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj41570_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj41570_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41570_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj41570").trigger("obj41570_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41570) {
				console.warn("de-queueing event obj41570." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41570").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41570_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj41649 
playAudio_41593();
function playAudio_41593() {
	window.obj41570_droppedInsideTargetActions_2_runningActionsCount = obj41570_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj41649")[0];
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
		    window.obj41570_droppedInsideTargetActions_2_runningActionsCount = window.obj41570_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj41570_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj41570_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj41570_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj41570_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj41570_droppedInsideTargetActions_2_runningActionsCount = window.obj41570_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj41570_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj41570_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj41570_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj41570_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj41570_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41570_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj41570").trigger("obj41570_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41570) {
				console.warn("de-queueing event obj41570." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41570").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41570_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_41594();
function switchText_41594() {
	window.obj41570_droppedInsideTargetActions_2_runningActionsCount = obj41570_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj41650_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj41650_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj41650").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj41650_content");
			setTimeout(function () {
				window.obj41570_droppedInsideTargetActions_2_runningActionsCount = window.obj41570_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj41570_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj41570_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj41570_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj41570_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj41650 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj41570_droppedInsideTargetActions_2_runningActionsCount = window.obj41570_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj41570_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj41570_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj41570_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj41570_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj41570_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj41570_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj41570").trigger("obj41570_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41570) {
				console.warn("de-queueing event obj41570." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41570").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41570_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj41570_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41570_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj41570").trigger("obj41570_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41570) {
				console.warn("de-queueing event obj41570." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41570").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41570_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_41575();
function runjs_41575() {
	window.obj41570_droppedInsideTargetActions_runningActionsCount = obj41570_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj41703").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj41570_droppedInsideTargetActions_runningActionsCount = window.obj41570_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj41570_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj41570_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj41570_droppedInsideTargetActions_runningActionsCount == 0) {
	obj41570_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj41570_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41570_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj41570").trigger("obj41570_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41570) {
				console.warn("de-queueing event obj41570." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41570").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41570_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_41579();
function switchText_41579() {
	window.obj41570_droppedInsideTargetActions_runningActionsCount = obj41570_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj41650_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj41650_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj41650").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj41650_content");
			setTimeout(function () {
				window.obj41570_droppedInsideTargetActions_runningActionsCount = window.obj41570_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj41570_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj41570_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj41570_droppedInsideTargetActions_runningActionsCount == 0) {
	obj41570_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj41650 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj41570_droppedInsideTargetActions_runningActionsCount = window.obj41570_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj41570_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj41570_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj41570_droppedInsideTargetActions_runningActionsCount == 0) {
	obj41570_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj41570_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41570_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj41570").trigger("obj41570_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41570) {
				console.warn("de-queueing event obj41570." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41570").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41570_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_41576();
function runjs_41576() {
	window.obj41570_droppedInsideTargetActions_runningActionsCount = obj41570_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj41703").css("border-color", "#058E3F"); $("#obj41703").css("border-width", "2px"); $("#obj41703").css("border-style", "solid"); $("#obj41703").css("border-radius", "10px"); $("#obj41703").css("-webkit-border-radius", "10px"); $("#obj41703").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj41570_droppedInsideTargetActions_runningActionsCount = window.obj41570_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj41570_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj41570_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj41570_droppedInsideTargetActions_runningActionsCount == 0) {
	obj41570_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj41570_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41570_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj41570").trigger("obj41570_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41570) {
				console.warn("de-queueing event obj41570." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41570").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41570_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj41697 
hide_41577();
function hide_41577() {
	var selector = "#obj41697";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj41570_droppedInsideTargetActions_runningActionsCount = obj41570_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj41570_droppedInsideTargetActions_runningActionsCount = window.obj41570_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj41570_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj41570_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj41570_droppedInsideTargetActions_runningActionsCount == 0) {
	obj41570_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_41577(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj41570_droppedInsideTargetActions_runningActionsCount = window.obj41570_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj41570_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj41570_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj41570_droppedInsideTargetActions_runningActionsCount == 0) {
	obj41570_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj41570_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41570_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj41570").trigger("obj41570_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41570) {
				console.warn("de-queueing event obj41570." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41570").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41570_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_41578();
function runjs_41578() {
	window.obj41570_droppedInsideTargetActions_runningActionsCount = obj41570_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj41570").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj41570_droppedInsideTargetActions_runningActionsCount = window.obj41570_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj41570_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj41570_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj41570_droppedInsideTargetActions_runningActionsCount == 0) {
	obj41570_droppedInsideTargetActions_actionGroup5();
}
	}, 1);
}







};
obj41570_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41570_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj41570").trigger("obj41570_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41570) {
				console.warn("de-queueing event obj41570." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41570").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41570_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj41648 
playAudio_41580();
function playAudio_41580() {
	window.obj41570_droppedInsideTargetActions_runningActionsCount = obj41570_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj41648")[0];
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
		    window.obj41570_droppedInsideTargetActions_runningActionsCount = window.obj41570_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj41570_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj41570_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj41570_droppedInsideTargetActions_runningActionsCount == 0) {
	obj41570_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj41570_droppedInsideTargetActions_runningActionsCount = window.obj41570_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj41570_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj41570_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj41570_droppedInsideTargetActions_runningActionsCount == 0) {
	obj41570_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj41570_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj41570_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj41570").trigger("obj41570_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41570) {
				console.warn("de-queueing event obj41570." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41570").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41570_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90503();
function switchText_90503() {
	window.obj41570_droppedInsideTargetActions_runningActionsCount = obj41570_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj41650_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj41650_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj41650").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj41650_content");
			setTimeout(function () {
				window.obj41570_droppedInsideTargetActions_runningActionsCount = window.obj41570_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj41570_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj41570_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj41570_droppedInsideTargetActions_runningActionsCount == 0) {
	obj41570_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj41650 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj41570_droppedInsideTargetActions_runningActionsCount = window.obj41570_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj41570_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj41570_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj41570_droppedInsideTargetActions_runningActionsCount == 0) {
	obj41570_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj41570_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj41570_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj41570").trigger("obj41570_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 41570) {
				console.warn("de-queueing event obj41570." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj41570").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj41570_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj67246_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67246_onTap_activeActionGroupIndex = -1;
		$("#obj67246").trigger("obj67246_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67246) {
				console.warn("de-queueing event obj67246." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67246").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67246_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj67246 
hide_67249();
function hide_67249() {
	var selector = "#obj67246";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj67246_onTap_runningActionsCount = obj67246_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj67246_onTap_runningActionsCount = window.obj67246_onTap_runningActionsCount - 1;
if (window.obj67246_onTap_runningActionsCount < 0) {
	window.obj67246_onTap_runningActionsCount = 0;
} else if (window.obj67246_onTap_runningActionsCount == 0) {
	obj67246_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_67249(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj67246_onTap_runningActionsCount = window.obj67246_onTap_runningActionsCount - 1;
if (window.obj67246_onTap_runningActionsCount < 0) {
	window.obj67246_onTap_runningActionsCount = 0;
} else if (window.obj67246_onTap_runningActionsCount == 0) {
	obj67246_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj67252 
stopMovie_67248();
function stopMovie_67248() {
	window.obj67246_onTap_runningActionsCount = obj67246_onTap_runningActionsCount + 1;
	var myVideo = $("#obj67252")[0];
	myVideo.pause();
	window.obj67246_onTap_runningActionsCount = window.obj67246_onTap_runningActionsCount - 1;
if (window.obj67246_onTap_runningActionsCount < 0) {
	window.obj67246_onTap_runningActionsCount = 0;
} else if (window.obj67246_onTap_runningActionsCount == 0) {
	obj67246_onTap_actionGroup1();
}
}
















};
obj67246_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67246_onTap_activeActionGroupIndex = -1;
		$("#obj67246").trigger("obj67246_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67246) {
				console.warn("de-queueing event obj67246." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67246").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67246_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj67238
(function(){
	window.obj67246_onTap_runningActionsCount = obj67246_onTap_runningActionsCount + 1;

	var selector = "#obj67238";
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
					window.obj67246_onTap_runningActionsCount = window.obj67246_onTap_runningActionsCount - 1;
if (window.obj67246_onTap_runningActionsCount < 0) {
	window.obj67246_onTap_runningActionsCount = 0;
} else if (window.obj67246_onTap_runningActionsCount == 0) {
	obj67246_onTap_actionGroup2();
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
				window.obj67246_onTap_runningActionsCount = window.obj67246_onTap_runningActionsCount - 1;
if (window.obj67246_onTap_runningActionsCount < 0) {
	window.obj67246_onTap_runningActionsCount = 0;
} else if (window.obj67246_onTap_runningActionsCount == 0) {
	obj67246_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj67246_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67246_onTap_activeActionGroupIndex = -1;
		$("#obj67246").trigger("obj67246_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67246) {
				console.warn("de-queueing event obj67246." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67246").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67246_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj67252 
move_67251();
function move_67251() {
	window.obj67246_onTap_runningActionsCount = obj67246_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj67252");
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
			window.obj67246_onTap_runningActionsCount = window.obj67246_onTap_runningActionsCount - 1;
if (window.obj67246_onTap_runningActionsCount < 0) {
	window.obj67246_onTap_runningActionsCount = 0;
} else if (window.obj67246_onTap_runningActionsCount == 0) {
	obj67246_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj67246_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj67246_onTap_activeActionGroupIndex = -1;
		$("#obj67246").trigger("obj67246_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67246) {
				console.warn("de-queueing event obj67246." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67246").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67246_onTap_activeActionGroupIndex = 3;
	





















};
obj67238_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67238_onTap_activeActionGroupIndex = -1;
		$("#obj67238").trigger("obj67238_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67238) {
				console.warn("de-queueing event obj67238." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67238").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67238_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj67238 
hide_67241();
function hide_67241() {
	var selector = "#obj67238";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj67238_onTap_runningActionsCount = obj67238_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj67238_onTap_runningActionsCount = window.obj67238_onTap_runningActionsCount - 1;
if (window.obj67238_onTap_runningActionsCount < 0) {
	window.obj67238_onTap_runningActionsCount = 0;
} else if (window.obj67238_onTap_runningActionsCount == 0) {
	obj67238_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_67241(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj67238_onTap_runningActionsCount = window.obj67238_onTap_runningActionsCount - 1;
if (window.obj67238_onTap_runningActionsCount < 0) {
	window.obj67238_onTap_runningActionsCount = 0;
} else if (window.obj67238_onTap_runningActionsCount == 0) {
	obj67238_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj67252 
playPauseMovie_67240();
function playPauseMovie_67240() {
	window.obj67238_onTap_runningActionsCount = obj67238_onTap_runningActionsCount + 1;
	var myVideo = $("#obj67252")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj67238_onTap_runningActionsCount = window.obj67238_onTap_runningActionsCount - 1;
if (window.obj67238_onTap_runningActionsCount < 0) {
	window.obj67238_onTap_runningActionsCount = 0;
} else if (window.obj67238_onTap_runningActionsCount == 0) {
	obj67238_onTap_actionGroup1();
}
}

















};
obj67238_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67238_onTap_activeActionGroupIndex = -1;
		$("#obj67238").trigger("obj67238_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67238) {
				console.warn("de-queueing event obj67238." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67238").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67238_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj67246
(function(){
	window.obj67238_onTap_runningActionsCount = obj67238_onTap_runningActionsCount + 1;

	var selector = "#obj67246";
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
					window.obj67238_onTap_runningActionsCount = window.obj67238_onTap_runningActionsCount - 1;
if (window.obj67238_onTap_runningActionsCount < 0) {
	window.obj67238_onTap_runningActionsCount = 0;
} else if (window.obj67238_onTap_runningActionsCount == 0) {
	obj67238_onTap_actionGroup2();
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
				window.obj67238_onTap_runningActionsCount = window.obj67238_onTap_runningActionsCount - 1;
if (window.obj67238_onTap_runningActionsCount < 0) {
	window.obj67238_onTap_runningActionsCount = 0;
} else if (window.obj67238_onTap_runningActionsCount == 0) {
	obj67238_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj67238_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67238_onTap_activeActionGroupIndex = -1;
		$("#obj67238").trigger("obj67238_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67238) {
				console.warn("de-queueing event obj67238." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67238").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67238_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj67252 
move_67243();
function move_67243() {
	window.obj67238_onTap_runningActionsCount = obj67238_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj67252");
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
			window.obj67238_onTap_runningActionsCount = window.obj67238_onTap_runningActionsCount - 1;
if (window.obj67238_onTap_runningActionsCount < 0) {
	window.obj67238_onTap_runningActionsCount = 0;
} else if (window.obj67238_onTap_runningActionsCount == 0) {
	obj67238_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj67238_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj67238_onTap_activeActionGroupIndex = -1;
		$("#obj67238").trigger("obj67238_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67238) {
				console.warn("de-queueing event obj67238." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67238").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67238_onTap_activeActionGroupIndex = 3;
	





















};
obj88549_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88549_onTap_activeActionGroupIndex = -1;
		$("#obj88549").trigger("obj88549_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88549) {
				console.warn("de-queueing event obj88549." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88549").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88549_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj88554 
stopAudio_88551();
function stopAudio_88551() {
	window.obj88549_onTap_runningActionsCount = obj88549_onTap_runningActionsCount + 1;
	var myAudio = $("#obj88554")[0];
	myAudio.pause();
	window.obj88549_onTap_runningActionsCount = window.obj88549_onTap_runningActionsCount - 1;
if (window.obj88549_onTap_runningActionsCount < 0) {
	window.obj88549_onTap_runningActionsCount = 0;
} else if (window.obj88549_onTap_runningActionsCount == 0) {
	obj88549_onTap_actionGroup1();
}
}








};
obj88549_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88549_onTap_activeActionGroupIndex = -1;
		$("#obj88549").trigger("obj88549_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88549) {
				console.warn("de-queueing event obj88549." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88549").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88549_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj88549 
hide_88552();
function hide_88552() {
	var selector = "#obj88549";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj88549_onTap_runningActionsCount = obj88549_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj88549_onTap_runningActionsCount = window.obj88549_onTap_runningActionsCount - 1;
if (window.obj88549_onTap_runningActionsCount < 0) {
	window.obj88549_onTap_runningActionsCount = 0;
} else if (window.obj88549_onTap_runningActionsCount == 0) {
	obj88549_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_88552(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj88549_onTap_runningActionsCount = window.obj88549_onTap_runningActionsCount - 1;
if (window.obj88549_onTap_runningActionsCount < 0) {
	window.obj88549_onTap_runningActionsCount = 0;
} else if (window.obj88549_onTap_runningActionsCount == 0) {
	obj88549_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj88549_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88549_onTap_activeActionGroupIndex = -1;
		$("#obj88549").trigger("obj88549_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88549) {
				console.warn("de-queueing event obj88549." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88549").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88549_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj88544
(function(){
	window.obj88549_onTap_runningActionsCount = obj88549_onTap_runningActionsCount + 1;

	var selector = "#obj88544";
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
					window.obj88549_onTap_runningActionsCount = window.obj88549_onTap_runningActionsCount - 1;
if (window.obj88549_onTap_runningActionsCount < 0) {
	window.obj88549_onTap_runningActionsCount = 0;
} else if (window.obj88549_onTap_runningActionsCount == 0) {
	obj88549_onTap_actionGroup3();
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
				window.obj88549_onTap_runningActionsCount = window.obj88549_onTap_runningActionsCount - 1;
if (window.obj88549_onTap_runningActionsCount < 0) {
	window.obj88549_onTap_runningActionsCount = 0;
} else if (window.obj88549_onTap_runningActionsCount == 0) {
	obj88549_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj88549_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj88549_onTap_activeActionGroupIndex = -1;
		$("#obj88549").trigger("obj88549_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88549) {
				console.warn("de-queueing event obj88549." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88549").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88549_onTap_activeActionGroupIndex = 3;
	





















};
obj88544_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88544_onTap_activeActionGroupIndex = -1;
		$("#obj88544").trigger("obj88544_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88544) {
				console.warn("de-queueing event obj88544." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88544").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88544_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj88544 
hide_88546();
function hide_88546() {
	var selector = "#obj88544";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj88544_onTap_runningActionsCount = obj88544_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj88544_onTap_runningActionsCount = window.obj88544_onTap_runningActionsCount - 1;
if (window.obj88544_onTap_runningActionsCount < 0) {
	window.obj88544_onTap_runningActionsCount = 0;
} else if (window.obj88544_onTap_runningActionsCount == 0) {
	obj88544_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_88546(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj88544_onTap_runningActionsCount = window.obj88544_onTap_runningActionsCount - 1;
if (window.obj88544_onTap_runningActionsCount < 0) {
	window.obj88544_onTap_runningActionsCount = 0;
} else if (window.obj88544_onTap_runningActionsCount == 0) {
	obj88544_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj88544_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88544_onTap_activeActionGroupIndex = -1;
		$("#obj88544").trigger("obj88544_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88544) {
				console.warn("de-queueing event obj88544." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88544").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88544_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj88549
(function(){
	window.obj88544_onTap_runningActionsCount = obj88544_onTap_runningActionsCount + 1;

	var selector = "#obj88549";
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
					window.obj88544_onTap_runningActionsCount = window.obj88544_onTap_runningActionsCount - 1;
if (window.obj88544_onTap_runningActionsCount < 0) {
	window.obj88544_onTap_runningActionsCount = 0;
} else if (window.obj88544_onTap_runningActionsCount == 0) {
	obj88544_onTap_actionGroup2();
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
				window.obj88544_onTap_runningActionsCount = window.obj88544_onTap_runningActionsCount - 1;
if (window.obj88544_onTap_runningActionsCount < 0) {
	window.obj88544_onTap_runningActionsCount = 0;
} else if (window.obj88544_onTap_runningActionsCount == 0) {
	obj88544_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj88544_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88544_onTap_activeActionGroupIndex = -1;
		$("#obj88544").trigger("obj88544_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88544) {
				console.warn("de-queueing event obj88544." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88544").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88544_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj88554 
playAudio_88548();
function playAudio_88548() {
	window.obj88544_onTap_runningActionsCount = obj88544_onTap_runningActionsCount + 1;
	var myAudio = $("#obj88554")[0];
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
		    window.obj88544_onTap_runningActionsCount = window.obj88544_onTap_runningActionsCount - 1;
if (window.obj88544_onTap_runningActionsCount < 0) {
	window.obj88544_onTap_runningActionsCount = 0;
} else if (window.obj88544_onTap_runningActionsCount == 0) {
	obj88544_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj88544_onTap_runningActionsCount = window.obj88544_onTap_runningActionsCount - 1;
if (window.obj88544_onTap_runningActionsCount < 0) {
	window.obj88544_onTap_runningActionsCount = 0;
} else if (window.obj88544_onTap_runningActionsCount == 0) {
	obj88544_onTap_actionGroup3();
}
	}
}









};
obj88544_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj88544_onTap_activeActionGroupIndex = -1;
		$("#obj88544").trigger("obj88544_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88544) {
				console.warn("de-queueing event obj88544." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88544").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88544_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj41726: Event Touch Down
 *
 */
$("#obj41726").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj41726_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj41726_onTap is still running");
	return;
}
var obj41726_onTap_runningActionsCount = 0;
var obj41726_onTap_loopCount = 0;
obj41726_onTap_actionGroup0();
});










/*
 *
 *   obj41723: Event Touch Down
 *
 */
$("#obj41723").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj41723_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj41723_onTap is still running");
	return;
}
var obj41723_onTap_runningActionsCount = 0;
var obj41723_onTap_loopCount = 0;
obj41723_onTap_actionGroup0();
});










/*
 *
 *   obj41719: Event Touch Down
 *
 */
$("#obj41719").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj41719_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj41719_onTap is still running");
	return;
}
var obj41719_onTap_runningActionsCount = 0;
var obj41719_onTap_loopCount = 0;
obj41719_onTap_actionGroup0();
});























































































































































/*
 *
 *   obj41609: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj41609");
	var winTarget = document.getElementById("obj41609");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj41609").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj41609_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj41609_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj41609_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj41609_onTouchDown is still running");
	return;
}
var obj41609_onTouchDown_runningActionsCount = 0;
var obj41609_onTouchDown_loopCount = 0;
obj41609_onTouchDown_actionGroup0();
});



/*
 *
 *   obj41609: Event SCActionDragDrop41612_droppedOutsideTargetActions
 *
 */
$("#obj41609").bind("SCActionDragDrop41612_droppedOutsideTargetActions", function(event) {
	if (window.obj41609_SCActionDragDrop41612_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj41609_SCActionDragDrop41612_droppedOutsideTargetActions is still running");
	return;
}
var obj41609_SCActionDragDrop41612_droppedOutsideTargetActions_runningActionsCount = 0;
var obj41609_SCActionDragDrop41612_droppedOutsideTargetActions_loopCount = 0;
obj41609_SCActionDragDrop41612_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj41609: Event droppedInsideTargetActions_2
 *
 */
$("#obj41609").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj41609_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj41609_droppedInsideTargetActions_2 is still running");
	return;
}
var obj41609_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj41609_droppedInsideTargetActions_2_loopCount = 0;
obj41609_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj41609: Event droppedInsideTargetActions
 *
 */
$("#obj41609").bind("droppedInsideTargetActions", function(event) {
	if (window.obj41609_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj41609_droppedInsideTargetActions is still running");
	return;
}
var obj41609_droppedInsideTargetActions_runningActionsCount = 0;
var obj41609_droppedInsideTargetActions_loopCount = 0;
obj41609_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj41570: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj41570");
	var winTarget = document.getElementById("obj41570");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj41570").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj41570_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj41570_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj41570_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj41570_onTouchDown is still running");
	return;
}
var obj41570_onTouchDown_runningActionsCount = 0;
var obj41570_onTouchDown_loopCount = 0;
obj41570_onTouchDown_actionGroup0();
});



/*
 *
 *   obj41570: Event SCActionDragDrop41573_droppedOutsideTargetActions
 *
 */
$("#obj41570").bind("SCActionDragDrop41573_droppedOutsideTargetActions", function(event) {
	if (window.obj41570_SCActionDragDrop41573_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj41570_SCActionDragDrop41573_droppedOutsideTargetActions is still running");
	return;
}
var obj41570_SCActionDragDrop41573_droppedOutsideTargetActions_runningActionsCount = 0;
var obj41570_SCActionDragDrop41573_droppedOutsideTargetActions_loopCount = 0;
obj41570_SCActionDragDrop41573_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj41570: Event droppedInsideTargetActions_2
 *
 */
$("#obj41570").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj41570_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj41570_droppedInsideTargetActions_2 is still running");
	return;
}
var obj41570_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj41570_droppedInsideTargetActions_2_loopCount = 0;
obj41570_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj41570: Event droppedInsideTargetActions
 *
 */
$("#obj41570").bind("droppedInsideTargetActions", function(event) {
	if (window.obj41570_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj41570_droppedInsideTargetActions is still running");
	return;
}
var obj41570_droppedInsideTargetActions_runningActionsCount = 0;
var obj41570_droppedInsideTargetActions_loopCount = 0;
obj41570_droppedInsideTargetActions_actionGroup0();
});















/*
 *
 *   obj67246: Event Touch Down
 *
 */
$("#obj67246").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj67246_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj67246_onTap is still running");
	return;
}
var obj67246_onTap_runningActionsCount = 0;
var obj67246_onTap_loopCount = 0;
obj67246_onTap_actionGroup0();
});










/*
 *
 *   obj67238: Event Touch Down
 *
 */
$("#obj67238").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj67238_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj67238_onTap is still running");
	return;
}
var obj67238_onTap_runningActionsCount = 0;
var obj67238_onTap_loopCount = 0;
obj67238_onTap_actionGroup0();
});










/*
 *
 *   obj88549: Event Touch Down
 *
 */
$("#obj88549").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj88549_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj88549_onTap is still running");
	return;
}
var obj88549_onTap_runningActionsCount = 0;
var obj88549_onTap_loopCount = 0;
obj88549_onTap_actionGroup0();
});










/*
 *
 *   obj88544: Event Touch Down
 *
 */
$("#obj88544").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj88544_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj88544_onTap is still running");
	return;
}
var obj88544_onTap_runningActionsCount = 0;
var obj88544_onTap_loopCount = 0;
obj88544_onTap_actionGroup0();
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
	
$("#obj41742").trigger('SCEventShow');
$("#obj41726").trigger('SCEventShow');
$("#obj41723").trigger('SCEventShow');
$("#obj41719").trigger('SCEventShow');
$("#obj41717").trigger('SCEventShow');
$("#obj41715").trigger('SCEventShow');
$("#obj41713").trigger('SCEventShow');
$("#obj41711").trigger('SCEventShow');
$("#obj41709").trigger('SCEventShow');
$("#obj41707").trigger('SCEventShow');
$("#obj41703").trigger('SCEventShow');
$("#obj41701").trigger('SCEventShow');
$("#obj41697").trigger('SCEventShow');
$("#obj41695").trigger('SCEventShow');
$("#obj41691").trigger('SCEventShow');
$("#obj41650").trigger('SCEventShow');
$("#obj41649").trigger('SCEventShow');
$("#obj41648").trigger('SCEventShow');
$("#obj41609").trigger('SCEventShow');
$("#obj41570").trigger('SCEventShow');
$("#obj41744").trigger('SCEventShow');
$("#obj67246").trigger('SCEventShow');
$("#obj67238").trigger('SCEventShow');
$("#obj88549").trigger('SCEventShow');
$("#obj88544").trigger('SCEventShow');
$("#obj88554").trigger('SCEventShow');
$("#obj94909").trigger('SCEventShow');
$("#obj67252").trigger('SCEventShow');
	
});