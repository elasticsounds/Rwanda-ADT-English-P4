pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 34114;
pubcoder.page.title = pubcoder.page.title || "119";
pubcoder.page.number = pubcoder.page.number || 119;
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
var obj86620_onTap_activeActionGroupIndex = -1;
var obj86620_onTap_runningActionsCount = 0;
var obj86620_onTap_loopCount = 0;
var obj86617_onTap_activeActionGroupIndex = -1;
var obj86617_onTap_runningActionsCount = 0;
var obj86617_onTap_loopCount = 0;
var obj86500_onDrag_activeActionGroupIndex = -1;
var obj86500_onDrag_runningActionsCount = 0;
var obj86500_onDrag_loopCount = 0;
var obj86500_onTouchDown_activeActionGroupIndex = -1;
var obj86500_onTouchDown_runningActionsCount = 0;
var obj86500_onTouchDown_loopCount = 0;
var obj86500_SCActionDragDrop86503_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj86500_SCActionDragDrop86503_droppedOutsideTargetActions_runningActionsCount = 0;
var obj86500_SCActionDragDrop86503_droppedOutsideTargetActions_loopCount = 0;
var obj86500_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
var obj86500_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj86500_droppedInsideTargetActions_4_loopCount = 0;
var obj86500_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj86500_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj86500_droppedInsideTargetActions_3_loopCount = 0;
var obj86500_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj86500_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj86500_droppedInsideTargetActions_2_loopCount = 0;
var obj86500_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj86500_droppedInsideTargetActions_runningActionsCount = 0;
var obj86500_droppedInsideTargetActions_loopCount = 0;
var obj86447_onDrag_activeActionGroupIndex = -1;
var obj86447_onDrag_runningActionsCount = 0;
var obj86447_onDrag_loopCount = 0;
var obj86447_onTouchDown_activeActionGroupIndex = -1;
var obj86447_onTouchDown_runningActionsCount = 0;
var obj86447_onTouchDown_loopCount = 0;
var obj86447_SCActionDragDrop86450_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj86447_SCActionDragDrop86450_droppedOutsideTargetActions_runningActionsCount = 0;
var obj86447_SCActionDragDrop86450_droppedOutsideTargetActions_loopCount = 0;
var obj86447_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
var obj86447_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj86447_droppedInsideTargetActions_4_loopCount = 0;
var obj86447_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj86447_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj86447_droppedInsideTargetActions_3_loopCount = 0;
var obj86447_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj86447_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj86447_droppedInsideTargetActions_2_loopCount = 0;
var obj86447_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj86447_droppedInsideTargetActions_runningActionsCount = 0;
var obj86447_droppedInsideTargetActions_loopCount = 0;
var obj86394_onDrag_activeActionGroupIndex = -1;
var obj86394_onDrag_runningActionsCount = 0;
var obj86394_onDrag_loopCount = 0;
var obj86394_onTouchDown_activeActionGroupIndex = -1;
var obj86394_onTouchDown_runningActionsCount = 0;
var obj86394_onTouchDown_loopCount = 0;
var obj86394_SCActionDragDrop86397_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj86394_SCActionDragDrop86397_droppedOutsideTargetActions_runningActionsCount = 0;
var obj86394_SCActionDragDrop86397_droppedOutsideTargetActions_loopCount = 0;
var obj86394_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
var obj86394_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj86394_droppedInsideTargetActions_4_loopCount = 0;
var obj86394_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj86394_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj86394_droppedInsideTargetActions_3_loopCount = 0;
var obj86394_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj86394_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj86394_droppedInsideTargetActions_2_loopCount = 0;
var obj86394_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj86394_droppedInsideTargetActions_runningActionsCount = 0;
var obj86394_droppedInsideTargetActions_loopCount = 0;
var obj86341_onDrag_activeActionGroupIndex = -1;
var obj86341_onDrag_runningActionsCount = 0;
var obj86341_onDrag_loopCount = 0;
var obj86341_onTouchDown_activeActionGroupIndex = -1;
var obj86341_onTouchDown_runningActionsCount = 0;
var obj86341_onTouchDown_loopCount = 0;
var obj86341_SCActionDragDrop86344_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj86341_SCActionDragDrop86344_droppedOutsideTargetActions_runningActionsCount = 0;
var obj86341_SCActionDragDrop86344_droppedOutsideTargetActions_loopCount = 0;
var obj86341_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
var obj86341_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj86341_droppedInsideTargetActions_4_loopCount = 0;
var obj86341_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj86341_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj86341_droppedInsideTargetActions_3_loopCount = 0;
var obj86341_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj86341_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj86341_droppedInsideTargetActions_2_loopCount = 0;
var obj86341_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj86341_droppedInsideTargetActions_runningActionsCount = 0;
var obj86341_droppedInsideTargetActions_loopCount = 0;
var obj86323_onTap_activeActionGroupIndex = -1;
var obj86323_onTap_runningActionsCount = 0;
var obj86323_onTap_loopCount = 0;
var obj86315_onTap_activeActionGroupIndex = -1;
var obj86315_onTap_runningActionsCount = 0;
var obj86315_onTap_loopCount = 0;
var obj88297_onTap_activeActionGroupIndex = -1;
var obj88297_onTap_runningActionsCount = 0;
var obj88297_onTap_loopCount = 0;
var obj88292_onTap_activeActionGroupIndex = -1;
var obj88292_onTap_runningActionsCount = 0;
var obj88292_onTap_loopCount = 0;
var obj95844_onTap_activeActionGroupIndex = -1;
var obj95844_onTap_runningActionsCount = 0;
var obj95844_onTap_loopCount = 0;
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
		
obj86620_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86620_onTap_activeActionGroupIndex = -1;
		$("#obj86620").trigger("obj86620_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86620) {
				console.warn("de-queueing event obj86620." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86620").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86620_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_86622();
function goToPage_86622() {
	window.obj86620_onTap_runningActionsCount = obj86620_onTap_runningActionsCount + 1;
	$("#anchor714")[0].click();
	window.obj86620_onTap_runningActionsCount = window.obj86620_onTap_runningActionsCount - 1;
if (window.obj86620_onTap_runningActionsCount < 0) {
	window.obj86620_onTap_runningActionsCount = 0;
} else if (window.obj86620_onTap_runningActionsCount == 0) {
	obj86620_onTap_actionGroup1();
}
}





















};
obj86620_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj86620_onTap_activeActionGroupIndex = -1;
		$("#obj86620").trigger("obj86620_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86620) {
				console.warn("de-queueing event obj86620." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86620").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86620_onTap_activeActionGroupIndex = 1;
	





















};
obj86617_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86617_onTap_activeActionGroupIndex = -1;
		$("#obj86617").trigger("obj86617_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86617) {
				console.warn("de-queueing event obj86617." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86617").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86617_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_86619();
function goToPage_86619() {
	window.obj86617_onTap_runningActionsCount = obj86617_onTap_runningActionsCount + 1;
	$("#anchor715")[0].click();
	window.obj86617_onTap_runningActionsCount = window.obj86617_onTap_runningActionsCount - 1;
if (window.obj86617_onTap_runningActionsCount < 0) {
	window.obj86617_onTap_runningActionsCount = 0;
} else if (window.obj86617_onTap_runningActionsCount == 0) {
	obj86617_onTap_actionGroup1();
}
}





















};
obj86617_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj86617_onTap_activeActionGroupIndex = -1;
		$("#obj86617").trigger("obj86617_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86617) {
				console.warn("de-queueing event obj86617." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86617").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86617_onTap_activeActionGroupIndex = 1;
	





















};
obj86500_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86500_onTouchDown_activeActionGroupIndex = -1;
		$("#obj86500").trigger("obj86500_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86500) {
				console.warn("de-queueing event obj86500." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86500").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86500_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj86500");
//	action: dragDrop
//	target: obj86500 
dragDrop_86503();
function dragDrop_86503() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj86500_onTouchDown_runningActionsCount = obj86500_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj86500');
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
	  	containerNode = $('#obj86603');
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
    	window.obj86500_onTouchDown_runningActionsCount = window.obj86500_onTouchDown_runningActionsCount - 1;
if (window.obj86500_onTouchDown_runningActionsCount < 0) {
	window.obj86500_onTouchDown_runningActionsCount = 0;
} else if (window.obj86500_onTouchDown_runningActionsCount == 0) {
	obj86500_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj86593","#obj86589","#obj86585","#obj86563");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3","droppedInsideTargetActions_4") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_86503 = false;
    	var dropped_id_86503;
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
					dropped_86503 = true;
					dropped_id_86503 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_86503) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj86500").trigger('SCActionDragDrop86503_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj86500_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj86500_onTouchDown_activeActionGroupIndex = -1;
		$("#obj86500").trigger("obj86500_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86500) {
				console.warn("de-queueing event obj86500." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86500").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86500_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj86500_SCActionDragDrop86503_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86500_SCActionDragDrop86503_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj86500").trigger("obj86500_SCActionDragDrop86503_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86500) {
				console.warn("de-queueing event obj86500." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86500").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86500_SCActionDragDrop86503_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj86500 
move_92539();
function move_92539() {
	window.obj86500_SCActionDragDrop86503_droppedOutsideTargetActions_runningActionsCount = obj86500_SCActionDragDrop86503_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj86500");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 328;
	var moveY = 679;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj86500_SCActionDragDrop86503_droppedOutsideTargetActions_runningActionsCount = window.obj86500_SCActionDragDrop86503_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj86500_SCActionDragDrop86503_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj86500_SCActionDragDrop86503_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj86500_SCActionDragDrop86503_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj86500_SCActionDragDrop86503_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj86500_SCActionDragDrop86503_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj86500_SCActionDragDrop86503_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj86500").trigger("obj86500_SCActionDragDrop86503_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86500) {
				console.warn("de-queueing event obj86500." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86500").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86500_SCActionDragDrop86503_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj86500_droppedInsideTargetActions_4_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86500_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj86500").trigger("obj86500_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86500) {
				console.warn("de-queueing event obj86500." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86500").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86500_droppedInsideTargetActions_4_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_86540();
function runjs_86540() {
	window.obj86500_droppedInsideTargetActions_4_runningActionsCount = obj86500_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj86563").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj86500_droppedInsideTargetActions_4_runningActionsCount = window.obj86500_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj86500_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj86500_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj86500_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj86500_droppedInsideTargetActions_4_actionGroup1();
}
	}, 1);
}







};
obj86500_droppedInsideTargetActions_4_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86500_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj86500").trigger("obj86500_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86500) {
				console.warn("de-queueing event obj86500." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86500").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86500_droppedInsideTargetActions_4_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_86541();
function runjs_86541() {
	window.obj86500_droppedInsideTargetActions_4_runningActionsCount = obj86500_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj86563").css("border-color", "#C00000"); $("#obj86563").css("border-width", "2px"); $("#obj86563").css("border-style", "solid"); $("#obj86563").css("border-radius", "10px"); $("#obj86563").css("-webkit-border-radius", "10px"); $("#obj86563").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj86500_droppedInsideTargetActions_4_runningActionsCount = window.obj86500_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj86500_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj86500_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj86500_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj86500_droppedInsideTargetActions_4_actionGroup2();
}
	}, 1);
}







};
obj86500_droppedInsideTargetActions_4_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86500_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj86500").trigger("obj86500_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86500) {
				console.warn("de-queueing event obj86500." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86500").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86500_droppedInsideTargetActions_4_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj86561 
hide_86542();
function hide_86542() {
	var selector = "#obj86561";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj86500_droppedInsideTargetActions_4_runningActionsCount = obj86500_droppedInsideTargetActions_4_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj86500_droppedInsideTargetActions_4_runningActionsCount = window.obj86500_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj86500_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj86500_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj86500_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj86500_droppedInsideTargetActions_4_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_86542(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj86500_droppedInsideTargetActions_4_runningActionsCount = window.obj86500_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj86500_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj86500_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj86500_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj86500_droppedInsideTargetActions_4_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj86500_droppedInsideTargetActions_4_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86500_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj86500").trigger("obj86500_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86500) {
				console.warn("de-queueing event obj86500." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86500").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86500_droppedInsideTargetActions_4_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_86543();
function runjs_86543() {
	window.obj86500_droppedInsideTargetActions_4_runningActionsCount = obj86500_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj86500").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj86500_droppedInsideTargetActions_4_runningActionsCount = window.obj86500_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj86500_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj86500_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj86500_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj86500_droppedInsideTargetActions_4_actionGroup4();
}
	}, 1);
}







};
obj86500_droppedInsideTargetActions_4_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86500_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj86500").trigger("obj86500_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86500) {
				console.warn("de-queueing event obj86500." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86500").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86500_droppedInsideTargetActions_4_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_86544();
function switchText_86544() {
	window.obj86500_droppedInsideTargetActions_4_runningActionsCount = obj86500_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj86571_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj86571_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj86571").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj86571_content");
			setTimeout(function () {
				window.obj86500_droppedInsideTargetActions_4_runningActionsCount = window.obj86500_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj86500_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj86500_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj86500_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj86500_droppedInsideTargetActions_4_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj86571 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj86500_droppedInsideTargetActions_4_runningActionsCount = window.obj86500_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj86500_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj86500_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj86500_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj86500_droppedInsideTargetActions_4_actionGroup5();
}
		}, 1);
	}
}






};
obj86500_droppedInsideTargetActions_4_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86500_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj86500").trigger("obj86500_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86500) {
				console.warn("de-queueing event obj86500." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86500").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86500_droppedInsideTargetActions_4_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj86500 
move_86545();
function move_86545() {
	window.obj86500_droppedInsideTargetActions_4_runningActionsCount = obj86500_droppedInsideTargetActions_4_runningActionsCount + 1;

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
	var targetObject = $("#obj86500");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 328;
	var moveY = 679;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj86500_droppedInsideTargetActions_4_runningActionsCount = window.obj86500_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj86500_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj86500_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj86500_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj86500_droppedInsideTargetActions_4_actionGroup6();
}
		}, 1);
	});
}



















};
obj86500_droppedInsideTargetActions_4_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86500_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj86500").trigger("obj86500_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86500) {
				console.warn("de-queueing event obj86500." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86500").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86500_droppedInsideTargetActions_4_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_86546();
function runjs_86546() {
	window.obj86500_droppedInsideTargetActions_4_runningActionsCount = obj86500_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj86563").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj86500_droppedInsideTargetActions_4_runningActionsCount = window.obj86500_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj86500_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj86500_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj86500_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj86500_droppedInsideTargetActions_4_actionGroup7();
}
	}, 1);
}







};
obj86500_droppedInsideTargetActions_4_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86500_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj86500").trigger("obj86500_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86500) {
				console.warn("de-queueing event obj86500." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86500").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86500_droppedInsideTargetActions_4_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_86547();
function runjs_86547() {
	window.obj86500_droppedInsideTargetActions_4_runningActionsCount = obj86500_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj86563").css("border-color", "#000000"); $("#obj86563").css("border-width", "1px"); $("#obj86563").css("border-style", "solid"); $("#obj86563").css("border-radius", "0px"); $("#obj86563").css("-webkit-border-radius", "0px"); $("#obj86563").css("-moz-border-radius", "0px");
	
	setTimeout(function() {
		window.obj86500_droppedInsideTargetActions_4_runningActionsCount = window.obj86500_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj86500_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj86500_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj86500_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj86500_droppedInsideTargetActions_4_actionGroup8();
}
	}, 1);
}







};
obj86500_droppedInsideTargetActions_4_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86500_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj86500").trigger("obj86500_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86500) {
				console.warn("de-queueing event obj86500." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86500").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86500_droppedInsideTargetActions_4_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj86561
(function(){
	window.obj86500_droppedInsideTargetActions_4_runningActionsCount = obj86500_droppedInsideTargetActions_4_runningActionsCount + 1;

	var selector = "#obj86561";
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
					window.obj86500_droppedInsideTargetActions_4_runningActionsCount = window.obj86500_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj86500_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj86500_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj86500_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj86500_droppedInsideTargetActions_4_actionGroup9();
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
				window.obj86500_droppedInsideTargetActions_4_runningActionsCount = window.obj86500_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj86500_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj86500_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj86500_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj86500_droppedInsideTargetActions_4_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj86500_droppedInsideTargetActions_4_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86500_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj86500").trigger("obj86500_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86500) {
				console.warn("de-queueing event obj86500." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86500").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86500_droppedInsideTargetActions_4_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_86549();
function runjs_86549() {
	window.obj86500_droppedInsideTargetActions_4_runningActionsCount = obj86500_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj86500").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj86500_droppedInsideTargetActions_4_runningActionsCount = window.obj86500_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj86500_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj86500_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj86500_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj86500_droppedInsideTargetActions_4_actionGroup10();
}
	}, 1);
}







};
obj86500_droppedInsideTargetActions_4_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86500_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj86500").trigger("obj86500_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86500) {
				console.warn("de-queueing event obj86500." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86500").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86500_droppedInsideTargetActions_4_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_86550();
function runjs_86550() {
	window.obj86500_droppedInsideTargetActions_4_runningActionsCount = obj86500_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj86500").css("border-color", "rgba(0,0,0,0)"); $("#obj86500").css("border-width", "0px"); $("#obj86500").css("border-style", "solid"); $("#obj86500").css("border-radius", "10px"); $("#obj86500").css("-webkit-border-radius", "10px"); $("#obj86500").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj86500_droppedInsideTargetActions_4_runningActionsCount = window.obj86500_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj86500_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj86500_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj86500_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj86500_droppedInsideTargetActions_4_actionGroup11();
}
	}, 1);
}







};
obj86500_droppedInsideTargetActions_4_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86500_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj86500").trigger("obj86500_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86500) {
				console.warn("de-queueing event obj86500." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86500").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86500_droppedInsideTargetActions_4_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj86567 
playAudio_86551();
function playAudio_86551() {
	window.obj86500_droppedInsideTargetActions_4_runningActionsCount = obj86500_droppedInsideTargetActions_4_runningActionsCount + 1;
	var myAudio = $("#obj86567")[0];
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
		    window.obj86500_droppedInsideTargetActions_4_runningActionsCount = window.obj86500_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj86500_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj86500_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj86500_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj86500_droppedInsideTargetActions_4_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj86500_droppedInsideTargetActions_4_runningActionsCount = window.obj86500_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj86500_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj86500_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj86500_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj86500_droppedInsideTargetActions_4_actionGroup12();
}
	}
}









};
obj86500_droppedInsideTargetActions_4_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86500_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj86500").trigger("obj86500_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86500) {
				console.warn("de-queueing event obj86500." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86500").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86500_droppedInsideTargetActions_4_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_86552();
function switchText_86552() {
	window.obj86500_droppedInsideTargetActions_4_runningActionsCount = obj86500_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj86571_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj86571_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj86571").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj86571_content");
			setTimeout(function () {
				window.obj86500_droppedInsideTargetActions_4_runningActionsCount = window.obj86500_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj86500_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj86500_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj86500_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj86500_droppedInsideTargetActions_4_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj86571 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj86500_droppedInsideTargetActions_4_runningActionsCount = window.obj86500_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj86500_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj86500_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj86500_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj86500_droppedInsideTargetActions_4_actionGroup13();
}
		}, 1);
	}
}






};
obj86500_droppedInsideTargetActions_4_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj86500_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj86500").trigger("obj86500_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86500) {
				console.warn("de-queueing event obj86500." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86500").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86500_droppedInsideTargetActions_4_activeActionGroupIndex = 13;
	





















};
obj86500_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86500_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj86500").trigger("obj86500_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86500) {
				console.warn("de-queueing event obj86500." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86500").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86500_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_86526();
function runjs_86526() {
	window.obj86500_droppedInsideTargetActions_3_runningActionsCount = obj86500_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj86585").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj86500_droppedInsideTargetActions_3_runningActionsCount = window.obj86500_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj86500_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj86500_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj86500_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj86500_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj86500_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86500_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj86500").trigger("obj86500_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86500) {
				console.warn("de-queueing event obj86500." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86500").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86500_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_86527();
function runjs_86527() {
	window.obj86500_droppedInsideTargetActions_3_runningActionsCount = obj86500_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj86585").css("border-color", "#C00000"); $("#obj86585").css("border-width", "2px"); $("#obj86585").css("border-style", "solid"); $("#obj86585").css("border-radius", "10px"); $("#obj86585").css("-webkit-border-radius", "10px"); $("#obj86585").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj86500_droppedInsideTargetActions_3_runningActionsCount = window.obj86500_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj86500_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj86500_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj86500_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj86500_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj86500_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86500_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj86500").trigger("obj86500_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86500) {
				console.warn("de-queueing event obj86500." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86500").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86500_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj86577 
hide_86528();
function hide_86528() {
	var selector = "#obj86577";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj86500_droppedInsideTargetActions_3_runningActionsCount = obj86500_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj86500_droppedInsideTargetActions_3_runningActionsCount = window.obj86500_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj86500_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj86500_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj86500_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj86500_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_86528(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj86500_droppedInsideTargetActions_3_runningActionsCount = window.obj86500_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj86500_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj86500_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj86500_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj86500_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj86500_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86500_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj86500").trigger("obj86500_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86500) {
				console.warn("de-queueing event obj86500." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86500").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86500_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_86529();
function runjs_86529() {
	window.obj86500_droppedInsideTargetActions_3_runningActionsCount = obj86500_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj86500").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj86500_droppedInsideTargetActions_3_runningActionsCount = window.obj86500_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj86500_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj86500_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj86500_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj86500_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj86500_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86500_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj86500").trigger("obj86500_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86500) {
				console.warn("de-queueing event obj86500." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86500").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86500_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_86530();
function switchText_86530() {
	window.obj86500_droppedInsideTargetActions_3_runningActionsCount = obj86500_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj86571_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj86571_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj86571").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj86571_content");
			setTimeout(function () {
				window.obj86500_droppedInsideTargetActions_3_runningActionsCount = window.obj86500_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj86500_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj86500_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj86500_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj86500_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj86571 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj86500_droppedInsideTargetActions_3_runningActionsCount = window.obj86500_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj86500_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj86500_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj86500_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj86500_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj86500_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86500_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj86500").trigger("obj86500_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86500) {
				console.warn("de-queueing event obj86500." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86500").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86500_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj86500 
move_86531();
function move_86531() {
	window.obj86500_droppedInsideTargetActions_3_runningActionsCount = obj86500_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj86500");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 328;
	var moveY = 679;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj86500_droppedInsideTargetActions_3_runningActionsCount = window.obj86500_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj86500_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj86500_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj86500_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj86500_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj86500_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86500_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj86500").trigger("obj86500_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86500) {
				console.warn("de-queueing event obj86500." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86500").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86500_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_86532();
function runjs_86532() {
	window.obj86500_droppedInsideTargetActions_3_runningActionsCount = obj86500_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj86585").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj86500_droppedInsideTargetActions_3_runningActionsCount = window.obj86500_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj86500_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj86500_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj86500_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj86500_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj86500_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86500_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj86500").trigger("obj86500_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86500) {
				console.warn("de-queueing event obj86500." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86500").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86500_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_86533();
function runjs_86533() {
	window.obj86500_droppedInsideTargetActions_3_runningActionsCount = obj86500_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj86585").css("border-color", "#000000"); $("#obj86585").css("border-width", "1px"); $("#obj86585").css("border-style", "solid"); $("#obj86585").css("border-radius", "0px"); $("#obj86585").css("-webkit-border-radius", "0px"); $("#obj86585").css("-moz-border-radius", "0px");
	
	setTimeout(function() {
		window.obj86500_droppedInsideTargetActions_3_runningActionsCount = window.obj86500_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj86500_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj86500_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj86500_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj86500_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj86500_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86500_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj86500").trigger("obj86500_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86500) {
				console.warn("de-queueing event obj86500." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86500").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86500_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj86577
(function(){
	window.obj86500_droppedInsideTargetActions_3_runningActionsCount = obj86500_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj86577";
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
					window.obj86500_droppedInsideTargetActions_3_runningActionsCount = window.obj86500_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj86500_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj86500_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj86500_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj86500_droppedInsideTargetActions_3_actionGroup9();
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
				window.obj86500_droppedInsideTargetActions_3_runningActionsCount = window.obj86500_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj86500_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj86500_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj86500_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj86500_droppedInsideTargetActions_3_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj86500_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86500_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj86500").trigger("obj86500_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86500) {
				console.warn("de-queueing event obj86500." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86500").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86500_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_86535();
function runjs_86535() {
	window.obj86500_droppedInsideTargetActions_3_runningActionsCount = obj86500_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj86500").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj86500_droppedInsideTargetActions_3_runningActionsCount = window.obj86500_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj86500_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj86500_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj86500_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj86500_droppedInsideTargetActions_3_actionGroup10();
}
	}, 1);
}







};
obj86500_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86500_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj86500").trigger("obj86500_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86500) {
				console.warn("de-queueing event obj86500." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86500").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86500_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_86536();
function runjs_86536() {
	window.obj86500_droppedInsideTargetActions_3_runningActionsCount = obj86500_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj86500").css("border-color", "rgba(0,0,0,0)"); $("#obj86500").css("border-width", "0px"); $("#obj86500").css("border-style", "solid"); $("#obj86500").css("border-radius", "10px"); $("#obj86500").css("-webkit-border-radius", "10px"); $("#obj86500").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj86500_droppedInsideTargetActions_3_runningActionsCount = window.obj86500_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj86500_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj86500_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj86500_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj86500_droppedInsideTargetActions_3_actionGroup11();
}
	}, 1);
}







};
obj86500_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86500_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj86500").trigger("obj86500_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86500) {
				console.warn("de-queueing event obj86500." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86500").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86500_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj86567 
playAudio_86537();
function playAudio_86537() {
	window.obj86500_droppedInsideTargetActions_3_runningActionsCount = obj86500_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj86567")[0];
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
		    window.obj86500_droppedInsideTargetActions_3_runningActionsCount = window.obj86500_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj86500_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj86500_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj86500_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj86500_droppedInsideTargetActions_3_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj86500_droppedInsideTargetActions_3_runningActionsCount = window.obj86500_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj86500_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj86500_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj86500_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj86500_droppedInsideTargetActions_3_actionGroup12();
}
	}
}









};
obj86500_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86500_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj86500").trigger("obj86500_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86500) {
				console.warn("de-queueing event obj86500." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86500").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86500_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_86538();
function switchText_86538() {
	window.obj86500_droppedInsideTargetActions_3_runningActionsCount = obj86500_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj86571_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj86571_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj86571").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj86571_content");
			setTimeout(function () {
				window.obj86500_droppedInsideTargetActions_3_runningActionsCount = window.obj86500_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj86500_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj86500_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj86500_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj86500_droppedInsideTargetActions_3_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj86571 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj86500_droppedInsideTargetActions_3_runningActionsCount = window.obj86500_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj86500_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj86500_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj86500_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj86500_droppedInsideTargetActions_3_actionGroup13();
}
		}, 1);
	}
}






};
obj86500_droppedInsideTargetActions_3_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj86500_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj86500").trigger("obj86500_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86500) {
				console.warn("de-queueing event obj86500." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86500").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86500_droppedInsideTargetActions_3_activeActionGroupIndex = 13;
	





















};
obj86500_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86500_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj86500").trigger("obj86500_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86500) {
				console.warn("de-queueing event obj86500." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86500").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86500_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_86512();
function runjs_86512() {
	window.obj86500_droppedInsideTargetActions_2_runningActionsCount = obj86500_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj86589").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj86500_droppedInsideTargetActions_2_runningActionsCount = window.obj86500_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj86500_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj86500_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj86500_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj86500_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj86500_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86500_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj86500").trigger("obj86500_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86500) {
				console.warn("de-queueing event obj86500." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86500").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86500_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_86513();
function runjs_86513() {
	window.obj86500_droppedInsideTargetActions_2_runningActionsCount = obj86500_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj86589").css("border-color", "#C00000"); $("#obj86589").css("border-width", "2px"); $("#obj86589").css("border-style", "solid"); $("#obj86589").css("border-radius", "10px"); $("#obj86589").css("-webkit-border-radius", "10px"); $("#obj86589").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj86500_droppedInsideTargetActions_2_runningActionsCount = window.obj86500_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj86500_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj86500_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj86500_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj86500_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj86500_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86500_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj86500").trigger("obj86500_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86500) {
				console.warn("de-queueing event obj86500." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86500").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86500_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj86579 
hide_86514();
function hide_86514() {
	var selector = "#obj86579";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj86500_droppedInsideTargetActions_2_runningActionsCount = obj86500_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj86500_droppedInsideTargetActions_2_runningActionsCount = window.obj86500_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj86500_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj86500_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj86500_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj86500_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_86514(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj86500_droppedInsideTargetActions_2_runningActionsCount = window.obj86500_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj86500_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj86500_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj86500_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj86500_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj86500_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86500_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj86500").trigger("obj86500_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86500) {
				console.warn("de-queueing event obj86500." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86500").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86500_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_86515();
function runjs_86515() {
	window.obj86500_droppedInsideTargetActions_2_runningActionsCount = obj86500_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj86500").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj86500_droppedInsideTargetActions_2_runningActionsCount = window.obj86500_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj86500_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj86500_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj86500_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj86500_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj86500_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86500_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj86500").trigger("obj86500_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86500) {
				console.warn("de-queueing event obj86500." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86500").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86500_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_86516();
function switchText_86516() {
	window.obj86500_droppedInsideTargetActions_2_runningActionsCount = obj86500_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj86571_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj86571_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj86571").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj86571_content");
			setTimeout(function () {
				window.obj86500_droppedInsideTargetActions_2_runningActionsCount = window.obj86500_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj86500_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj86500_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj86500_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj86500_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj86571 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj86500_droppedInsideTargetActions_2_runningActionsCount = window.obj86500_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj86500_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj86500_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj86500_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj86500_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj86500_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86500_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj86500").trigger("obj86500_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86500) {
				console.warn("de-queueing event obj86500." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86500").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86500_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj86500 
move_86517();
function move_86517() {
	window.obj86500_droppedInsideTargetActions_2_runningActionsCount = obj86500_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj86500");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 328;
	var moveY = 679;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj86500_droppedInsideTargetActions_2_runningActionsCount = window.obj86500_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj86500_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj86500_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj86500_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj86500_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj86500_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86500_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj86500").trigger("obj86500_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86500) {
				console.warn("de-queueing event obj86500." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86500").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86500_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_86518();
function runjs_86518() {
	window.obj86500_droppedInsideTargetActions_2_runningActionsCount = obj86500_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj86589").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj86500_droppedInsideTargetActions_2_runningActionsCount = window.obj86500_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj86500_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj86500_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj86500_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj86500_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj86500_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86500_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj86500").trigger("obj86500_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86500) {
				console.warn("de-queueing event obj86500." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86500").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86500_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_86519();
function runjs_86519() {
	window.obj86500_droppedInsideTargetActions_2_runningActionsCount = obj86500_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj86589").css("border-color", "#000000"); $("#obj86589").css("border-width", "1px"); $("#obj86589").css("border-style", "solid"); $("#obj86589").css("border-radius", "0px"); $("#obj86589").css("-webkit-border-radius", "0px"); $("#obj86589").css("-moz-border-radius", "0px");
	
	setTimeout(function() {
		window.obj86500_droppedInsideTargetActions_2_runningActionsCount = window.obj86500_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj86500_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj86500_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj86500_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj86500_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj86500_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86500_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj86500").trigger("obj86500_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86500) {
				console.warn("de-queueing event obj86500." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86500").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86500_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj86579
(function(){
	window.obj86500_droppedInsideTargetActions_2_runningActionsCount = obj86500_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj86579";
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
					window.obj86500_droppedInsideTargetActions_2_runningActionsCount = window.obj86500_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj86500_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj86500_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj86500_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj86500_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj86500_droppedInsideTargetActions_2_runningActionsCount = window.obj86500_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj86500_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj86500_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj86500_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj86500_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj86500_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86500_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj86500").trigger("obj86500_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86500) {
				console.warn("de-queueing event obj86500." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86500").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86500_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_86521();
function runjs_86521() {
	window.obj86500_droppedInsideTargetActions_2_runningActionsCount = obj86500_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj86500").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj86500_droppedInsideTargetActions_2_runningActionsCount = window.obj86500_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj86500_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj86500_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj86500_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj86500_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj86500_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86500_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj86500").trigger("obj86500_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86500) {
				console.warn("de-queueing event obj86500." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86500").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86500_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_86522();
function runjs_86522() {
	window.obj86500_droppedInsideTargetActions_2_runningActionsCount = obj86500_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj86500").css("border-color", "rgba(0,0,0,0)"); $("#obj86500").css("border-width", "0px"); $("#obj86500").css("border-style", "solid"); $("#obj86500").css("border-radius", "10px"); $("#obj86500").css("-webkit-border-radius", "10px"); $("#obj86500").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj86500_droppedInsideTargetActions_2_runningActionsCount = window.obj86500_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj86500_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj86500_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj86500_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj86500_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj86500_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86500_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj86500").trigger("obj86500_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86500) {
				console.warn("de-queueing event obj86500." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86500").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86500_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj86567 
playAudio_86523();
function playAudio_86523() {
	window.obj86500_droppedInsideTargetActions_2_runningActionsCount = obj86500_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj86567")[0];
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
		    window.obj86500_droppedInsideTargetActions_2_runningActionsCount = window.obj86500_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj86500_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj86500_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj86500_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj86500_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj86500_droppedInsideTargetActions_2_runningActionsCount = window.obj86500_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj86500_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj86500_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj86500_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj86500_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj86500_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86500_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj86500").trigger("obj86500_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86500) {
				console.warn("de-queueing event obj86500." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86500").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86500_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_86524();
function switchText_86524() {
	window.obj86500_droppedInsideTargetActions_2_runningActionsCount = obj86500_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj86571_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj86571_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj86571").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj86571_content");
			setTimeout(function () {
				window.obj86500_droppedInsideTargetActions_2_runningActionsCount = window.obj86500_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj86500_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj86500_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj86500_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj86500_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj86571 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj86500_droppedInsideTargetActions_2_runningActionsCount = window.obj86500_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj86500_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj86500_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj86500_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj86500_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj86500_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj86500_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj86500").trigger("obj86500_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86500) {
				console.warn("de-queueing event obj86500." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86500").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86500_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj86500_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86500_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj86500").trigger("obj86500_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86500) {
				console.warn("de-queueing event obj86500." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86500").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86500_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_86505();
function runjs_86505() {
	window.obj86500_droppedInsideTargetActions_runningActionsCount = obj86500_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj86593").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj86500_droppedInsideTargetActions_runningActionsCount = window.obj86500_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj86500_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj86500_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj86500_droppedInsideTargetActions_runningActionsCount == 0) {
	obj86500_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj86500_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86500_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj86500").trigger("obj86500_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86500) {
				console.warn("de-queueing event obj86500." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86500").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86500_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_86509();
function switchText_86509() {
	window.obj86500_droppedInsideTargetActions_runningActionsCount = obj86500_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj86571_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj86571_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj86571").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj86571_content");
			setTimeout(function () {
				window.obj86500_droppedInsideTargetActions_runningActionsCount = window.obj86500_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj86500_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj86500_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj86500_droppedInsideTargetActions_runningActionsCount == 0) {
	obj86500_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj86571 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj86500_droppedInsideTargetActions_runningActionsCount = window.obj86500_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj86500_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj86500_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj86500_droppedInsideTargetActions_runningActionsCount == 0) {
	obj86500_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj86500_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86500_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj86500").trigger("obj86500_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86500) {
				console.warn("de-queueing event obj86500." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86500").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86500_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_86506();
function runjs_86506() {
	window.obj86500_droppedInsideTargetActions_runningActionsCount = obj86500_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj86593").css("border-color", "#058E3F"); $("#obj86593").css("border-width", "2px"); $("#obj86593").css("border-style", "solid"); $("#obj86593").css("border-radius", "10px"); $("#obj86593").css("-webkit-border-radius", "10px"); $("#obj86593").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj86500_droppedInsideTargetActions_runningActionsCount = window.obj86500_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj86500_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj86500_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj86500_droppedInsideTargetActions_runningActionsCount == 0) {
	obj86500_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj86500_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86500_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj86500").trigger("obj86500_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86500) {
				console.warn("de-queueing event obj86500." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86500").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86500_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj86581 
hide_86507();
function hide_86507() {
	var selector = "#obj86581";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj86500_droppedInsideTargetActions_runningActionsCount = obj86500_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj86500_droppedInsideTargetActions_runningActionsCount = window.obj86500_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj86500_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj86500_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj86500_droppedInsideTargetActions_runningActionsCount == 0) {
	obj86500_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_86507(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj86500_droppedInsideTargetActions_runningActionsCount = window.obj86500_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj86500_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj86500_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj86500_droppedInsideTargetActions_runningActionsCount == 0) {
	obj86500_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj86500_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86500_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj86500").trigger("obj86500_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86500) {
				console.warn("de-queueing event obj86500." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86500").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86500_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_86508();
function runjs_86508() {
	window.obj86500_droppedInsideTargetActions_runningActionsCount = obj86500_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj86500").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj86500_droppedInsideTargetActions_runningActionsCount = window.obj86500_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj86500_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj86500_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj86500_droppedInsideTargetActions_runningActionsCount == 0) {
	obj86500_droppedInsideTargetActions_actionGroup5();
}
	}, 1);
}







};
obj86500_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86500_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj86500").trigger("obj86500_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86500) {
				console.warn("de-queueing event obj86500." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86500").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86500_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj86569 
playAudio_86510();
function playAudio_86510() {
	window.obj86500_droppedInsideTargetActions_runningActionsCount = obj86500_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj86569")[0];
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
		    window.obj86500_droppedInsideTargetActions_runningActionsCount = window.obj86500_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj86500_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj86500_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj86500_droppedInsideTargetActions_runningActionsCount == 0) {
	obj86500_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj86500_droppedInsideTargetActions_runningActionsCount = window.obj86500_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj86500_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj86500_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj86500_droppedInsideTargetActions_runningActionsCount == 0) {
	obj86500_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj86500_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86500_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj86500").trigger("obj86500_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86500) {
				console.warn("de-queueing event obj86500." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86500").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86500_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90427();
function switchText_90427() {
	window.obj86500_droppedInsideTargetActions_runningActionsCount = obj86500_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj86571_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj86571_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj86571").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj86571_content");
			setTimeout(function () {
				window.obj86500_droppedInsideTargetActions_runningActionsCount = window.obj86500_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj86500_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj86500_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj86500_droppedInsideTargetActions_runningActionsCount == 0) {
	obj86500_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj86571 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj86500_droppedInsideTargetActions_runningActionsCount = window.obj86500_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj86500_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj86500_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj86500_droppedInsideTargetActions_runningActionsCount == 0) {
	obj86500_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj86500_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj86500_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj86500").trigger("obj86500_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86500) {
				console.warn("de-queueing event obj86500." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86500").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86500_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj86447_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86447_onTouchDown_activeActionGroupIndex = -1;
		$("#obj86447").trigger("obj86447_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86447) {
				console.warn("de-queueing event obj86447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86447_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj86447");
//	action: dragDrop
//	target: obj86447 
dragDrop_86450();
function dragDrop_86450() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj86447_onTouchDown_runningActionsCount = obj86447_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj86447');
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
	  	containerNode = $('#obj86603');
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
    	window.obj86447_onTouchDown_runningActionsCount = window.obj86447_onTouchDown_runningActionsCount - 1;
if (window.obj86447_onTouchDown_runningActionsCount < 0) {
	window.obj86447_onTouchDown_runningActionsCount = 0;
} else if (window.obj86447_onTouchDown_runningActionsCount == 0) {
	obj86447_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj86589","#obj86593","#obj86585","#obj86563");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3","droppedInsideTargetActions_4") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_86450 = false;
    	var dropped_id_86450;
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
					dropped_86450 = true;
					dropped_id_86450 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_86450) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj86447").trigger('SCActionDragDrop86450_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj86447_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj86447_onTouchDown_activeActionGroupIndex = -1;
		$("#obj86447").trigger("obj86447_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86447) {
				console.warn("de-queueing event obj86447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86447_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj86447_SCActionDragDrop86450_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86447_SCActionDragDrop86450_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj86447").trigger("obj86447_SCActionDragDrop86450_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86447) {
				console.warn("de-queueing event obj86447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86447_SCActionDragDrop86450_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj86447 
move_92537();
function move_92537() {
	window.obj86447_SCActionDragDrop86450_droppedOutsideTargetActions_runningActionsCount = obj86447_SCActionDragDrop86450_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj86447");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 326;
	var moveY = 643;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj86447_SCActionDragDrop86450_droppedOutsideTargetActions_runningActionsCount = window.obj86447_SCActionDragDrop86450_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj86447_SCActionDragDrop86450_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj86447_SCActionDragDrop86450_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj86447_SCActionDragDrop86450_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj86447_SCActionDragDrop86450_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj86447_SCActionDragDrop86450_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj86447_SCActionDragDrop86450_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj86447").trigger("obj86447_SCActionDragDrop86450_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86447) {
				console.warn("de-queueing event obj86447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86447_SCActionDragDrop86450_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj86447_droppedInsideTargetActions_4_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86447_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj86447").trigger("obj86447_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86447) {
				console.warn("de-queueing event obj86447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86447_droppedInsideTargetActions_4_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_86487();
function runjs_86487() {
	window.obj86447_droppedInsideTargetActions_4_runningActionsCount = obj86447_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj86563").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj86447_droppedInsideTargetActions_4_runningActionsCount = window.obj86447_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj86447_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj86447_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj86447_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj86447_droppedInsideTargetActions_4_actionGroup1();
}
	}, 1);
}







};
obj86447_droppedInsideTargetActions_4_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86447_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj86447").trigger("obj86447_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86447) {
				console.warn("de-queueing event obj86447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86447_droppedInsideTargetActions_4_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_86488();
function runjs_86488() {
	window.obj86447_droppedInsideTargetActions_4_runningActionsCount = obj86447_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj86563").css("border-color", "#C00000"); $("#obj86563").css("border-width", "2px"); $("#obj86563").css("border-style", "solid"); $("#obj86563").css("border-radius", "10px"); $("#obj86563").css("-webkit-border-radius", "10px"); $("#obj86563").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj86447_droppedInsideTargetActions_4_runningActionsCount = window.obj86447_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj86447_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj86447_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj86447_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj86447_droppedInsideTargetActions_4_actionGroup2();
}
	}, 1);
}







};
obj86447_droppedInsideTargetActions_4_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86447_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj86447").trigger("obj86447_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86447) {
				console.warn("de-queueing event obj86447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86447_droppedInsideTargetActions_4_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj86561 
hide_86489();
function hide_86489() {
	var selector = "#obj86561";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj86447_droppedInsideTargetActions_4_runningActionsCount = obj86447_droppedInsideTargetActions_4_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj86447_droppedInsideTargetActions_4_runningActionsCount = window.obj86447_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj86447_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj86447_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj86447_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj86447_droppedInsideTargetActions_4_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_86489(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj86447_droppedInsideTargetActions_4_runningActionsCount = window.obj86447_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj86447_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj86447_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj86447_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj86447_droppedInsideTargetActions_4_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj86447_droppedInsideTargetActions_4_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86447_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj86447").trigger("obj86447_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86447) {
				console.warn("de-queueing event obj86447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86447_droppedInsideTargetActions_4_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_86490();
function runjs_86490() {
	window.obj86447_droppedInsideTargetActions_4_runningActionsCount = obj86447_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj86447").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj86447_droppedInsideTargetActions_4_runningActionsCount = window.obj86447_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj86447_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj86447_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj86447_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj86447_droppedInsideTargetActions_4_actionGroup4();
}
	}, 1);
}







};
obj86447_droppedInsideTargetActions_4_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86447_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj86447").trigger("obj86447_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86447) {
				console.warn("de-queueing event obj86447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86447_droppedInsideTargetActions_4_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_86491();
function switchText_86491() {
	window.obj86447_droppedInsideTargetActions_4_runningActionsCount = obj86447_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj86571_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj86571_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj86571").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj86571_content");
			setTimeout(function () {
				window.obj86447_droppedInsideTargetActions_4_runningActionsCount = window.obj86447_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj86447_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj86447_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj86447_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj86447_droppedInsideTargetActions_4_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj86571 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj86447_droppedInsideTargetActions_4_runningActionsCount = window.obj86447_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj86447_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj86447_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj86447_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj86447_droppedInsideTargetActions_4_actionGroup5();
}
		}, 1);
	}
}






};
obj86447_droppedInsideTargetActions_4_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86447_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj86447").trigger("obj86447_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86447) {
				console.warn("de-queueing event obj86447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86447_droppedInsideTargetActions_4_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj86447 
move_86492();
function move_86492() {
	window.obj86447_droppedInsideTargetActions_4_runningActionsCount = obj86447_droppedInsideTargetActions_4_runningActionsCount + 1;

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
	var targetObject = $("#obj86447");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 326;
	var moveY = 643;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj86447_droppedInsideTargetActions_4_runningActionsCount = window.obj86447_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj86447_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj86447_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj86447_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj86447_droppedInsideTargetActions_4_actionGroup6();
}
		}, 1);
	});
}



















};
obj86447_droppedInsideTargetActions_4_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86447_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj86447").trigger("obj86447_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86447) {
				console.warn("de-queueing event obj86447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86447_droppedInsideTargetActions_4_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_86493();
function runjs_86493() {
	window.obj86447_droppedInsideTargetActions_4_runningActionsCount = obj86447_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj86563").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj86447_droppedInsideTargetActions_4_runningActionsCount = window.obj86447_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj86447_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj86447_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj86447_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj86447_droppedInsideTargetActions_4_actionGroup7();
}
	}, 1);
}







};
obj86447_droppedInsideTargetActions_4_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86447_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj86447").trigger("obj86447_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86447) {
				console.warn("de-queueing event obj86447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86447_droppedInsideTargetActions_4_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_86494();
function runjs_86494() {
	window.obj86447_droppedInsideTargetActions_4_runningActionsCount = obj86447_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj86563").css("border-color", "#000000"); $("#obj86563").css("border-width", "1px"); $("#obj86563").css("border-style", "solid"); $("#obj86563").css("border-radius", "0px"); $("#obj86563").css("-webkit-border-radius", "0px"); $("#obj86563").css("-moz-border-radius", "0px");
	
	setTimeout(function() {
		window.obj86447_droppedInsideTargetActions_4_runningActionsCount = window.obj86447_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj86447_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj86447_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj86447_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj86447_droppedInsideTargetActions_4_actionGroup8();
}
	}, 1);
}







};
obj86447_droppedInsideTargetActions_4_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86447_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj86447").trigger("obj86447_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86447) {
				console.warn("de-queueing event obj86447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86447_droppedInsideTargetActions_4_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj86561
(function(){
	window.obj86447_droppedInsideTargetActions_4_runningActionsCount = obj86447_droppedInsideTargetActions_4_runningActionsCount + 1;

	var selector = "#obj86561";
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
					window.obj86447_droppedInsideTargetActions_4_runningActionsCount = window.obj86447_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj86447_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj86447_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj86447_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj86447_droppedInsideTargetActions_4_actionGroup9();
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
				window.obj86447_droppedInsideTargetActions_4_runningActionsCount = window.obj86447_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj86447_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj86447_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj86447_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj86447_droppedInsideTargetActions_4_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj86447_droppedInsideTargetActions_4_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86447_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj86447").trigger("obj86447_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86447) {
				console.warn("de-queueing event obj86447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86447_droppedInsideTargetActions_4_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_86496();
function runjs_86496() {
	window.obj86447_droppedInsideTargetActions_4_runningActionsCount = obj86447_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj86447").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj86447_droppedInsideTargetActions_4_runningActionsCount = window.obj86447_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj86447_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj86447_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj86447_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj86447_droppedInsideTargetActions_4_actionGroup10();
}
	}, 1);
}







};
obj86447_droppedInsideTargetActions_4_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86447_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj86447").trigger("obj86447_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86447) {
				console.warn("de-queueing event obj86447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86447_droppedInsideTargetActions_4_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_86497();
function runjs_86497() {
	window.obj86447_droppedInsideTargetActions_4_runningActionsCount = obj86447_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj86447").css("border-color", "rgba(0,0,0,0)"); $("#obj86447").css("border-width", "0px"); $("#obj86447").css("border-style", "solid"); $("#obj86447").css("border-radius", "10px"); $("#obj86447").css("-webkit-border-radius", "10px"); $("#obj86447").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj86447_droppedInsideTargetActions_4_runningActionsCount = window.obj86447_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj86447_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj86447_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj86447_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj86447_droppedInsideTargetActions_4_actionGroup11();
}
	}, 1);
}







};
obj86447_droppedInsideTargetActions_4_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86447_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj86447").trigger("obj86447_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86447) {
				console.warn("de-queueing event obj86447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86447_droppedInsideTargetActions_4_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj86567 
playAudio_86498();
function playAudio_86498() {
	window.obj86447_droppedInsideTargetActions_4_runningActionsCount = obj86447_droppedInsideTargetActions_4_runningActionsCount + 1;
	var myAudio = $("#obj86567")[0];
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
		    window.obj86447_droppedInsideTargetActions_4_runningActionsCount = window.obj86447_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj86447_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj86447_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj86447_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj86447_droppedInsideTargetActions_4_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj86447_droppedInsideTargetActions_4_runningActionsCount = window.obj86447_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj86447_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj86447_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj86447_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj86447_droppedInsideTargetActions_4_actionGroup12();
}
	}
}









};
obj86447_droppedInsideTargetActions_4_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86447_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj86447").trigger("obj86447_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86447) {
				console.warn("de-queueing event obj86447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86447_droppedInsideTargetActions_4_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_86499();
function switchText_86499() {
	window.obj86447_droppedInsideTargetActions_4_runningActionsCount = obj86447_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj86571_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj86571_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj86571").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj86571_content");
			setTimeout(function () {
				window.obj86447_droppedInsideTargetActions_4_runningActionsCount = window.obj86447_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj86447_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj86447_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj86447_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj86447_droppedInsideTargetActions_4_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj86571 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj86447_droppedInsideTargetActions_4_runningActionsCount = window.obj86447_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj86447_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj86447_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj86447_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj86447_droppedInsideTargetActions_4_actionGroup13();
}
		}, 1);
	}
}






};
obj86447_droppedInsideTargetActions_4_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj86447_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj86447").trigger("obj86447_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86447) {
				console.warn("de-queueing event obj86447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86447_droppedInsideTargetActions_4_activeActionGroupIndex = 13;
	





















};
obj86447_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86447_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj86447").trigger("obj86447_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86447) {
				console.warn("de-queueing event obj86447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86447_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_86473();
function runjs_86473() {
	window.obj86447_droppedInsideTargetActions_3_runningActionsCount = obj86447_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj86585").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj86447_droppedInsideTargetActions_3_runningActionsCount = window.obj86447_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj86447_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj86447_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj86447_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj86447_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj86447_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86447_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj86447").trigger("obj86447_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86447) {
				console.warn("de-queueing event obj86447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86447_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_86474();
function runjs_86474() {
	window.obj86447_droppedInsideTargetActions_3_runningActionsCount = obj86447_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj86585").css("border-color", "#C00000"); $("#obj86585").css("border-width", "2px"); $("#obj86585").css("border-style", "solid"); $("#obj86585").css("border-radius", "10px"); $("#obj86585").css("-webkit-border-radius", "10px"); $("#obj86585").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj86447_droppedInsideTargetActions_3_runningActionsCount = window.obj86447_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj86447_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj86447_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj86447_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj86447_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj86447_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86447_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj86447").trigger("obj86447_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86447) {
				console.warn("de-queueing event obj86447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86447_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj86577 
hide_86475();
function hide_86475() {
	var selector = "#obj86577";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj86447_droppedInsideTargetActions_3_runningActionsCount = obj86447_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj86447_droppedInsideTargetActions_3_runningActionsCount = window.obj86447_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj86447_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj86447_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj86447_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj86447_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_86475(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj86447_droppedInsideTargetActions_3_runningActionsCount = window.obj86447_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj86447_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj86447_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj86447_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj86447_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj86447_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86447_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj86447").trigger("obj86447_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86447) {
				console.warn("de-queueing event obj86447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86447_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_86476();
function runjs_86476() {
	window.obj86447_droppedInsideTargetActions_3_runningActionsCount = obj86447_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj86447").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj86447_droppedInsideTargetActions_3_runningActionsCount = window.obj86447_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj86447_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj86447_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj86447_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj86447_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj86447_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86447_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj86447").trigger("obj86447_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86447) {
				console.warn("de-queueing event obj86447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86447_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_86477();
function switchText_86477() {
	window.obj86447_droppedInsideTargetActions_3_runningActionsCount = obj86447_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj86571_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj86571_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj86571").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj86571_content");
			setTimeout(function () {
				window.obj86447_droppedInsideTargetActions_3_runningActionsCount = window.obj86447_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj86447_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj86447_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj86447_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj86447_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj86571 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj86447_droppedInsideTargetActions_3_runningActionsCount = window.obj86447_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj86447_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj86447_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj86447_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj86447_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj86447_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86447_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj86447").trigger("obj86447_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86447) {
				console.warn("de-queueing event obj86447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86447_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj86447 
move_86478();
function move_86478() {
	window.obj86447_droppedInsideTargetActions_3_runningActionsCount = obj86447_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj86447");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 326;
	var moveY = 643;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj86447_droppedInsideTargetActions_3_runningActionsCount = window.obj86447_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj86447_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj86447_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj86447_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj86447_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj86447_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86447_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj86447").trigger("obj86447_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86447) {
				console.warn("de-queueing event obj86447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86447_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_86479();
function runjs_86479() {
	window.obj86447_droppedInsideTargetActions_3_runningActionsCount = obj86447_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj86585").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj86447_droppedInsideTargetActions_3_runningActionsCount = window.obj86447_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj86447_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj86447_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj86447_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj86447_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj86447_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86447_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj86447").trigger("obj86447_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86447) {
				console.warn("de-queueing event obj86447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86447_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_86480();
function runjs_86480() {
	window.obj86447_droppedInsideTargetActions_3_runningActionsCount = obj86447_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj86585").css("border-color", "#000000"); $("#obj86585").css("border-width", "1px"); $("#obj86585").css("border-style", "solid"); $("#obj86585").css("border-radius", "0px"); $("#obj86585").css("-webkit-border-radius", "0px"); $("#obj86585").css("-moz-border-radius", "0px");
	
	setTimeout(function() {
		window.obj86447_droppedInsideTargetActions_3_runningActionsCount = window.obj86447_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj86447_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj86447_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj86447_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj86447_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj86447_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86447_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj86447").trigger("obj86447_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86447) {
				console.warn("de-queueing event obj86447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86447_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj86577
(function(){
	window.obj86447_droppedInsideTargetActions_3_runningActionsCount = obj86447_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj86577";
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
					window.obj86447_droppedInsideTargetActions_3_runningActionsCount = window.obj86447_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj86447_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj86447_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj86447_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj86447_droppedInsideTargetActions_3_actionGroup9();
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
				window.obj86447_droppedInsideTargetActions_3_runningActionsCount = window.obj86447_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj86447_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj86447_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj86447_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj86447_droppedInsideTargetActions_3_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj86447_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86447_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj86447").trigger("obj86447_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86447) {
				console.warn("de-queueing event obj86447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86447_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_86482();
function runjs_86482() {
	window.obj86447_droppedInsideTargetActions_3_runningActionsCount = obj86447_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj86447").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj86447_droppedInsideTargetActions_3_runningActionsCount = window.obj86447_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj86447_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj86447_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj86447_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj86447_droppedInsideTargetActions_3_actionGroup10();
}
	}, 1);
}







};
obj86447_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86447_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj86447").trigger("obj86447_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86447) {
				console.warn("de-queueing event obj86447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86447_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_86483();
function runjs_86483() {
	window.obj86447_droppedInsideTargetActions_3_runningActionsCount = obj86447_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj86447").css("border-color", "rgba(0,0,0,0)"); $("#obj86447").css("border-width", "0px"); $("#obj86447").css("border-style", "solid"); $("#obj86447").css("border-radius", "10px"); $("#obj86447").css("-webkit-border-radius", "10px"); $("#obj86447").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj86447_droppedInsideTargetActions_3_runningActionsCount = window.obj86447_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj86447_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj86447_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj86447_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj86447_droppedInsideTargetActions_3_actionGroup11();
}
	}, 1);
}







};
obj86447_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86447_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj86447").trigger("obj86447_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86447) {
				console.warn("de-queueing event obj86447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86447_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj86567 
playAudio_86484();
function playAudio_86484() {
	window.obj86447_droppedInsideTargetActions_3_runningActionsCount = obj86447_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj86567")[0];
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
		    window.obj86447_droppedInsideTargetActions_3_runningActionsCount = window.obj86447_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj86447_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj86447_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj86447_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj86447_droppedInsideTargetActions_3_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj86447_droppedInsideTargetActions_3_runningActionsCount = window.obj86447_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj86447_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj86447_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj86447_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj86447_droppedInsideTargetActions_3_actionGroup12();
}
	}
}









};
obj86447_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86447_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj86447").trigger("obj86447_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86447) {
				console.warn("de-queueing event obj86447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86447_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_86485();
function switchText_86485() {
	window.obj86447_droppedInsideTargetActions_3_runningActionsCount = obj86447_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj86571_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj86571_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj86571").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj86571_content");
			setTimeout(function () {
				window.obj86447_droppedInsideTargetActions_3_runningActionsCount = window.obj86447_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj86447_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj86447_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj86447_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj86447_droppedInsideTargetActions_3_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj86571 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj86447_droppedInsideTargetActions_3_runningActionsCount = window.obj86447_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj86447_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj86447_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj86447_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj86447_droppedInsideTargetActions_3_actionGroup13();
}
		}, 1);
	}
}






};
obj86447_droppedInsideTargetActions_3_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj86447_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj86447").trigger("obj86447_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86447) {
				console.warn("de-queueing event obj86447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86447_droppedInsideTargetActions_3_activeActionGroupIndex = 13;
	





















};
obj86447_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86447_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj86447").trigger("obj86447_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86447) {
				console.warn("de-queueing event obj86447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86447_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_86459();
function runjs_86459() {
	window.obj86447_droppedInsideTargetActions_2_runningActionsCount = obj86447_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj86593").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj86447_droppedInsideTargetActions_2_runningActionsCount = window.obj86447_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj86447_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj86447_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj86447_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj86447_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj86447_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86447_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj86447").trigger("obj86447_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86447) {
				console.warn("de-queueing event obj86447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86447_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_86460();
function runjs_86460() {
	window.obj86447_droppedInsideTargetActions_2_runningActionsCount = obj86447_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj86593").css("border-color", "#C00000"); $("#obj86593").css("border-width", "2px"); $("#obj86593").css("border-style", "solid"); $("#obj86593").css("border-radius", "10px"); $("#obj86593").css("-webkit-border-radius", "10px"); $("#obj86593").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj86447_droppedInsideTargetActions_2_runningActionsCount = window.obj86447_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj86447_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj86447_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj86447_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj86447_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj86447_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86447_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj86447").trigger("obj86447_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86447) {
				console.warn("de-queueing event obj86447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86447_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj86581 
hide_86461();
function hide_86461() {
	var selector = "#obj86581";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj86447_droppedInsideTargetActions_2_runningActionsCount = obj86447_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj86447_droppedInsideTargetActions_2_runningActionsCount = window.obj86447_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj86447_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj86447_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj86447_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj86447_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_86461(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj86447_droppedInsideTargetActions_2_runningActionsCount = window.obj86447_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj86447_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj86447_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj86447_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj86447_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj86447_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86447_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj86447").trigger("obj86447_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86447) {
				console.warn("de-queueing event obj86447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86447_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_86462();
function runjs_86462() {
	window.obj86447_droppedInsideTargetActions_2_runningActionsCount = obj86447_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj86447").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj86447_droppedInsideTargetActions_2_runningActionsCount = window.obj86447_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj86447_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj86447_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj86447_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj86447_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj86447_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86447_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj86447").trigger("obj86447_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86447) {
				console.warn("de-queueing event obj86447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86447_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_86463();
function switchText_86463() {
	window.obj86447_droppedInsideTargetActions_2_runningActionsCount = obj86447_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj86571_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj86571_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj86571").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj86571_content");
			setTimeout(function () {
				window.obj86447_droppedInsideTargetActions_2_runningActionsCount = window.obj86447_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj86447_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj86447_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj86447_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj86447_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj86571 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj86447_droppedInsideTargetActions_2_runningActionsCount = window.obj86447_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj86447_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj86447_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj86447_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj86447_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj86447_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86447_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj86447").trigger("obj86447_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86447) {
				console.warn("de-queueing event obj86447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86447_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj86447 
move_86464();
function move_86464() {
	window.obj86447_droppedInsideTargetActions_2_runningActionsCount = obj86447_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj86447");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 326;
	var moveY = 643;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj86447_droppedInsideTargetActions_2_runningActionsCount = window.obj86447_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj86447_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj86447_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj86447_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj86447_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj86447_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86447_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj86447").trigger("obj86447_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86447) {
				console.warn("de-queueing event obj86447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86447_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_86465();
function runjs_86465() {
	window.obj86447_droppedInsideTargetActions_2_runningActionsCount = obj86447_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj86593").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj86447_droppedInsideTargetActions_2_runningActionsCount = window.obj86447_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj86447_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj86447_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj86447_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj86447_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj86447_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86447_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj86447").trigger("obj86447_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86447) {
				console.warn("de-queueing event obj86447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86447_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_86466();
function runjs_86466() {
	window.obj86447_droppedInsideTargetActions_2_runningActionsCount = obj86447_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj86593").css("border-color", "#000000"); $("#obj86593").css("border-width", "1px"); $("#obj86593").css("border-style", "solid"); $("#obj86593").css("border-radius", "0px"); $("#obj86593").css("-webkit-border-radius", "0px"); $("#obj86593").css("-moz-border-radius", "0px");
	
	setTimeout(function() {
		window.obj86447_droppedInsideTargetActions_2_runningActionsCount = window.obj86447_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj86447_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj86447_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj86447_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj86447_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj86447_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86447_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj86447").trigger("obj86447_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86447) {
				console.warn("de-queueing event obj86447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86447_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj86581
(function(){
	window.obj86447_droppedInsideTargetActions_2_runningActionsCount = obj86447_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj86581";
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
					window.obj86447_droppedInsideTargetActions_2_runningActionsCount = window.obj86447_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj86447_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj86447_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj86447_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj86447_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj86447_droppedInsideTargetActions_2_runningActionsCount = window.obj86447_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj86447_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj86447_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj86447_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj86447_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj86447_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86447_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj86447").trigger("obj86447_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86447) {
				console.warn("de-queueing event obj86447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86447_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_86468();
function runjs_86468() {
	window.obj86447_droppedInsideTargetActions_2_runningActionsCount = obj86447_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj86447").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj86447_droppedInsideTargetActions_2_runningActionsCount = window.obj86447_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj86447_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj86447_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj86447_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj86447_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj86447_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86447_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj86447").trigger("obj86447_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86447) {
				console.warn("de-queueing event obj86447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86447_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_86469();
function runjs_86469() {
	window.obj86447_droppedInsideTargetActions_2_runningActionsCount = obj86447_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj86447").css("border-color", "rgba(0,0,0,0)"); $("#obj86447").css("border-width", "0px"); $("#obj86447").css("border-style", "solid"); $("#obj86447").css("border-radius", "10px"); $("#obj86447").css("-webkit-border-radius", "10px"); $("#obj86447").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj86447_droppedInsideTargetActions_2_runningActionsCount = window.obj86447_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj86447_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj86447_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj86447_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj86447_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj86447_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86447_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj86447").trigger("obj86447_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86447) {
				console.warn("de-queueing event obj86447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86447_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj86567 
playAudio_86470();
function playAudio_86470() {
	window.obj86447_droppedInsideTargetActions_2_runningActionsCount = obj86447_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj86567")[0];
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
		    window.obj86447_droppedInsideTargetActions_2_runningActionsCount = window.obj86447_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj86447_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj86447_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj86447_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj86447_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj86447_droppedInsideTargetActions_2_runningActionsCount = window.obj86447_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj86447_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj86447_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj86447_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj86447_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj86447_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86447_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj86447").trigger("obj86447_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86447) {
				console.warn("de-queueing event obj86447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86447_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_86471();
function switchText_86471() {
	window.obj86447_droppedInsideTargetActions_2_runningActionsCount = obj86447_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj86571_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj86571_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj86571").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj86571_content");
			setTimeout(function () {
				window.obj86447_droppedInsideTargetActions_2_runningActionsCount = window.obj86447_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj86447_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj86447_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj86447_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj86447_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj86571 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj86447_droppedInsideTargetActions_2_runningActionsCount = window.obj86447_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj86447_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj86447_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj86447_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj86447_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj86447_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj86447_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj86447").trigger("obj86447_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86447) {
				console.warn("de-queueing event obj86447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86447_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj86447_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86447_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj86447").trigger("obj86447_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86447) {
				console.warn("de-queueing event obj86447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86447_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_86452();
function runjs_86452() {
	window.obj86447_droppedInsideTargetActions_runningActionsCount = obj86447_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj86589").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj86447_droppedInsideTargetActions_runningActionsCount = window.obj86447_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj86447_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj86447_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj86447_droppedInsideTargetActions_runningActionsCount == 0) {
	obj86447_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj86447_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86447_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj86447").trigger("obj86447_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86447) {
				console.warn("de-queueing event obj86447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86447_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_86456();
function switchText_86456() {
	window.obj86447_droppedInsideTargetActions_runningActionsCount = obj86447_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj86571_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj86571_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj86571").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj86571_content");
			setTimeout(function () {
				window.obj86447_droppedInsideTargetActions_runningActionsCount = window.obj86447_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj86447_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj86447_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj86447_droppedInsideTargetActions_runningActionsCount == 0) {
	obj86447_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj86571 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj86447_droppedInsideTargetActions_runningActionsCount = window.obj86447_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj86447_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj86447_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj86447_droppedInsideTargetActions_runningActionsCount == 0) {
	obj86447_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj86447_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86447_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj86447").trigger("obj86447_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86447) {
				console.warn("de-queueing event obj86447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86447_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_86453();
function runjs_86453() {
	window.obj86447_droppedInsideTargetActions_runningActionsCount = obj86447_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj86589").css("border-color", "#058E3F"); $("#obj86589").css("border-width", "2px"); $("#obj86589").css("border-style", "solid"); $("#obj86589").css("border-radius", "10px"); $("#obj86589").css("-webkit-border-radius", "10px"); $("#obj86589").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj86447_droppedInsideTargetActions_runningActionsCount = window.obj86447_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj86447_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj86447_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj86447_droppedInsideTargetActions_runningActionsCount == 0) {
	obj86447_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj86447_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86447_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj86447").trigger("obj86447_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86447) {
				console.warn("de-queueing event obj86447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86447_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj86579 
hide_86454();
function hide_86454() {
	var selector = "#obj86579";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj86447_droppedInsideTargetActions_runningActionsCount = obj86447_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj86447_droppedInsideTargetActions_runningActionsCount = window.obj86447_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj86447_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj86447_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj86447_droppedInsideTargetActions_runningActionsCount == 0) {
	obj86447_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_86454(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj86447_droppedInsideTargetActions_runningActionsCount = window.obj86447_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj86447_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj86447_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj86447_droppedInsideTargetActions_runningActionsCount == 0) {
	obj86447_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj86447_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86447_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj86447").trigger("obj86447_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86447) {
				console.warn("de-queueing event obj86447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86447_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_86455();
function runjs_86455() {
	window.obj86447_droppedInsideTargetActions_runningActionsCount = obj86447_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj86447").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj86447_droppedInsideTargetActions_runningActionsCount = window.obj86447_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj86447_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj86447_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj86447_droppedInsideTargetActions_runningActionsCount == 0) {
	obj86447_droppedInsideTargetActions_actionGroup5();
}
	}, 1);
}







};
obj86447_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86447_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj86447").trigger("obj86447_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86447) {
				console.warn("de-queueing event obj86447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86447_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj86569 
playAudio_86457();
function playAudio_86457() {
	window.obj86447_droppedInsideTargetActions_runningActionsCount = obj86447_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj86569")[0];
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
		    window.obj86447_droppedInsideTargetActions_runningActionsCount = window.obj86447_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj86447_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj86447_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj86447_droppedInsideTargetActions_runningActionsCount == 0) {
	obj86447_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj86447_droppedInsideTargetActions_runningActionsCount = window.obj86447_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj86447_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj86447_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj86447_droppedInsideTargetActions_runningActionsCount == 0) {
	obj86447_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj86447_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86447_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj86447").trigger("obj86447_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86447) {
				console.warn("de-queueing event obj86447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86447_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90426();
function switchText_90426() {
	window.obj86447_droppedInsideTargetActions_runningActionsCount = obj86447_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj86571_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj86571_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj86571").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj86571_content");
			setTimeout(function () {
				window.obj86447_droppedInsideTargetActions_runningActionsCount = window.obj86447_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj86447_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj86447_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj86447_droppedInsideTargetActions_runningActionsCount == 0) {
	obj86447_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj86571 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj86447_droppedInsideTargetActions_runningActionsCount = window.obj86447_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj86447_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj86447_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj86447_droppedInsideTargetActions_runningActionsCount == 0) {
	obj86447_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj86447_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj86447_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj86447").trigger("obj86447_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86447) {
				console.warn("de-queueing event obj86447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86447_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj86394_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86394_onTouchDown_activeActionGroupIndex = -1;
		$("#obj86394").trigger("obj86394_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86394) {
				console.warn("de-queueing event obj86394." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86394").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86394_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj86394");
//	action: dragDrop
//	target: obj86394 
dragDrop_86397();
function dragDrop_86397() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj86394_onTouchDown_runningActionsCount = obj86394_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj86394');
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
	  	containerNode = $('#obj86603');
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
    	window.obj86394_onTouchDown_runningActionsCount = window.obj86394_onTouchDown_runningActionsCount - 1;
if (window.obj86394_onTouchDown_runningActionsCount < 0) {
	window.obj86394_onTouchDown_runningActionsCount = 0;
} else if (window.obj86394_onTouchDown_runningActionsCount == 0) {
	obj86394_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj86585","#obj86589","#obj86593","#obj86563");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3","droppedInsideTargetActions_4") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_86397 = false;
    	var dropped_id_86397;
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
					dropped_86397 = true;
					dropped_id_86397 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_86397) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj86394").trigger('SCActionDragDrop86397_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj86394_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj86394_onTouchDown_activeActionGroupIndex = -1;
		$("#obj86394").trigger("obj86394_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86394) {
				console.warn("de-queueing event obj86394." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86394").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86394_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj86394_SCActionDragDrop86397_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86394_SCActionDragDrop86397_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj86394").trigger("obj86394_SCActionDragDrop86397_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86394) {
				console.warn("de-queueing event obj86394." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86394").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86394_SCActionDragDrop86397_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj86394 
move_92533();
function move_92533() {
	window.obj86394_SCActionDragDrop86397_droppedOutsideTargetActions_runningActionsCount = obj86394_SCActionDragDrop86397_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj86394");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 133;
	var moveY = 643;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj86394_SCActionDragDrop86397_droppedOutsideTargetActions_runningActionsCount = window.obj86394_SCActionDragDrop86397_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj86394_SCActionDragDrop86397_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj86394_SCActionDragDrop86397_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj86394_SCActionDragDrop86397_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj86394_SCActionDragDrop86397_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj86394_SCActionDragDrop86397_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj86394_SCActionDragDrop86397_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj86394").trigger("obj86394_SCActionDragDrop86397_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86394) {
				console.warn("de-queueing event obj86394." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86394").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86394_SCActionDragDrop86397_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj86394_droppedInsideTargetActions_4_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86394_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj86394").trigger("obj86394_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86394) {
				console.warn("de-queueing event obj86394." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86394").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86394_droppedInsideTargetActions_4_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_86434();
function runjs_86434() {
	window.obj86394_droppedInsideTargetActions_4_runningActionsCount = obj86394_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj86563").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj86394_droppedInsideTargetActions_4_runningActionsCount = window.obj86394_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj86394_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj86394_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj86394_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj86394_droppedInsideTargetActions_4_actionGroup1();
}
	}, 1);
}







};
obj86394_droppedInsideTargetActions_4_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86394_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj86394").trigger("obj86394_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86394) {
				console.warn("de-queueing event obj86394." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86394").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86394_droppedInsideTargetActions_4_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_86435();
function runjs_86435() {
	window.obj86394_droppedInsideTargetActions_4_runningActionsCount = obj86394_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj86563").css("border-color", "#C00000"); $("#obj86563").css("border-width", "2px"); $("#obj86563").css("border-style", "solid"); $("#obj86563").css("border-radius", "10px"); $("#obj86563").css("-webkit-border-radius", "10px"); $("#obj86563").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj86394_droppedInsideTargetActions_4_runningActionsCount = window.obj86394_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj86394_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj86394_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj86394_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj86394_droppedInsideTargetActions_4_actionGroup2();
}
	}, 1);
}







};
obj86394_droppedInsideTargetActions_4_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86394_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj86394").trigger("obj86394_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86394) {
				console.warn("de-queueing event obj86394." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86394").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86394_droppedInsideTargetActions_4_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj86561 
hide_86436();
function hide_86436() {
	var selector = "#obj86561";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj86394_droppedInsideTargetActions_4_runningActionsCount = obj86394_droppedInsideTargetActions_4_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj86394_droppedInsideTargetActions_4_runningActionsCount = window.obj86394_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj86394_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj86394_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj86394_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj86394_droppedInsideTargetActions_4_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_86436(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj86394_droppedInsideTargetActions_4_runningActionsCount = window.obj86394_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj86394_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj86394_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj86394_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj86394_droppedInsideTargetActions_4_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj86394_droppedInsideTargetActions_4_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86394_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj86394").trigger("obj86394_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86394) {
				console.warn("de-queueing event obj86394." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86394").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86394_droppedInsideTargetActions_4_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_86437();
function runjs_86437() {
	window.obj86394_droppedInsideTargetActions_4_runningActionsCount = obj86394_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj86394").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj86394_droppedInsideTargetActions_4_runningActionsCount = window.obj86394_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj86394_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj86394_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj86394_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj86394_droppedInsideTargetActions_4_actionGroup4();
}
	}, 1);
}







};
obj86394_droppedInsideTargetActions_4_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86394_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj86394").trigger("obj86394_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86394) {
				console.warn("de-queueing event obj86394." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86394").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86394_droppedInsideTargetActions_4_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_86438();
function switchText_86438() {
	window.obj86394_droppedInsideTargetActions_4_runningActionsCount = obj86394_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj86571_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj86571_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj86571").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj86571_content");
			setTimeout(function () {
				window.obj86394_droppedInsideTargetActions_4_runningActionsCount = window.obj86394_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj86394_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj86394_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj86394_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj86394_droppedInsideTargetActions_4_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj86571 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj86394_droppedInsideTargetActions_4_runningActionsCount = window.obj86394_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj86394_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj86394_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj86394_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj86394_droppedInsideTargetActions_4_actionGroup5();
}
		}, 1);
	}
}






};
obj86394_droppedInsideTargetActions_4_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86394_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj86394").trigger("obj86394_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86394) {
				console.warn("de-queueing event obj86394." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86394").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86394_droppedInsideTargetActions_4_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj86394 
move_86439();
function move_86439() {
	window.obj86394_droppedInsideTargetActions_4_runningActionsCount = obj86394_droppedInsideTargetActions_4_runningActionsCount + 1;

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
	var targetObject = $("#obj86394");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 133;
	var moveY = 643;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj86394_droppedInsideTargetActions_4_runningActionsCount = window.obj86394_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj86394_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj86394_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj86394_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj86394_droppedInsideTargetActions_4_actionGroup6();
}
		}, 1);
	});
}



















};
obj86394_droppedInsideTargetActions_4_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86394_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj86394").trigger("obj86394_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86394) {
				console.warn("de-queueing event obj86394." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86394").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86394_droppedInsideTargetActions_4_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_86440();
function runjs_86440() {
	window.obj86394_droppedInsideTargetActions_4_runningActionsCount = obj86394_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj86563").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj86394_droppedInsideTargetActions_4_runningActionsCount = window.obj86394_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj86394_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj86394_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj86394_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj86394_droppedInsideTargetActions_4_actionGroup7();
}
	}, 1);
}







};
obj86394_droppedInsideTargetActions_4_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86394_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj86394").trigger("obj86394_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86394) {
				console.warn("de-queueing event obj86394." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86394").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86394_droppedInsideTargetActions_4_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_86441();
function runjs_86441() {
	window.obj86394_droppedInsideTargetActions_4_runningActionsCount = obj86394_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj86563").css("border-color", "#000000"); $("#obj86563").css("border-width", "1px"); $("#obj86563").css("border-style", "solid"); $("#obj86563").css("border-radius", "0px"); $("#obj86563").css("-webkit-border-radius", "0px"); $("#obj86563").css("-moz-border-radius", "0px");
	
	setTimeout(function() {
		window.obj86394_droppedInsideTargetActions_4_runningActionsCount = window.obj86394_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj86394_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj86394_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj86394_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj86394_droppedInsideTargetActions_4_actionGroup8();
}
	}, 1);
}







};
obj86394_droppedInsideTargetActions_4_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86394_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj86394").trigger("obj86394_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86394) {
				console.warn("de-queueing event obj86394." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86394").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86394_droppedInsideTargetActions_4_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj86561
(function(){
	window.obj86394_droppedInsideTargetActions_4_runningActionsCount = obj86394_droppedInsideTargetActions_4_runningActionsCount + 1;

	var selector = "#obj86561";
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
					window.obj86394_droppedInsideTargetActions_4_runningActionsCount = window.obj86394_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj86394_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj86394_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj86394_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj86394_droppedInsideTargetActions_4_actionGroup9();
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
				window.obj86394_droppedInsideTargetActions_4_runningActionsCount = window.obj86394_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj86394_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj86394_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj86394_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj86394_droppedInsideTargetActions_4_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj86394_droppedInsideTargetActions_4_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86394_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj86394").trigger("obj86394_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86394) {
				console.warn("de-queueing event obj86394." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86394").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86394_droppedInsideTargetActions_4_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_86443();
function runjs_86443() {
	window.obj86394_droppedInsideTargetActions_4_runningActionsCount = obj86394_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj86394").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj86394_droppedInsideTargetActions_4_runningActionsCount = window.obj86394_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj86394_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj86394_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj86394_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj86394_droppedInsideTargetActions_4_actionGroup10();
}
	}, 1);
}







};
obj86394_droppedInsideTargetActions_4_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86394_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj86394").trigger("obj86394_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86394) {
				console.warn("de-queueing event obj86394." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86394").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86394_droppedInsideTargetActions_4_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_86444();
function runjs_86444() {
	window.obj86394_droppedInsideTargetActions_4_runningActionsCount = obj86394_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj86394").css("border-color", "rgba(0,0,0,0)"); $("#obj86394").css("border-width", "0px"); $("#obj86394").css("border-style", "solid"); $("#obj86394").css("border-radius", "10px"); $("#obj86394").css("-webkit-border-radius", "10px"); $("#obj86394").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj86394_droppedInsideTargetActions_4_runningActionsCount = window.obj86394_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj86394_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj86394_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj86394_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj86394_droppedInsideTargetActions_4_actionGroup11();
}
	}, 1);
}







};
obj86394_droppedInsideTargetActions_4_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86394_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj86394").trigger("obj86394_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86394) {
				console.warn("de-queueing event obj86394." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86394").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86394_droppedInsideTargetActions_4_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj86567 
playAudio_86445();
function playAudio_86445() {
	window.obj86394_droppedInsideTargetActions_4_runningActionsCount = obj86394_droppedInsideTargetActions_4_runningActionsCount + 1;
	var myAudio = $("#obj86567")[0];
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
		    window.obj86394_droppedInsideTargetActions_4_runningActionsCount = window.obj86394_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj86394_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj86394_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj86394_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj86394_droppedInsideTargetActions_4_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj86394_droppedInsideTargetActions_4_runningActionsCount = window.obj86394_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj86394_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj86394_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj86394_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj86394_droppedInsideTargetActions_4_actionGroup12();
}
	}
}









};
obj86394_droppedInsideTargetActions_4_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86394_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj86394").trigger("obj86394_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86394) {
				console.warn("de-queueing event obj86394." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86394").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86394_droppedInsideTargetActions_4_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_86446();
function switchText_86446() {
	window.obj86394_droppedInsideTargetActions_4_runningActionsCount = obj86394_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj86571_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj86571_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj86571").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj86571_content");
			setTimeout(function () {
				window.obj86394_droppedInsideTargetActions_4_runningActionsCount = window.obj86394_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj86394_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj86394_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj86394_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj86394_droppedInsideTargetActions_4_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj86571 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj86394_droppedInsideTargetActions_4_runningActionsCount = window.obj86394_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj86394_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj86394_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj86394_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj86394_droppedInsideTargetActions_4_actionGroup13();
}
		}, 1);
	}
}






};
obj86394_droppedInsideTargetActions_4_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj86394_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj86394").trigger("obj86394_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86394) {
				console.warn("de-queueing event obj86394." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86394").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86394_droppedInsideTargetActions_4_activeActionGroupIndex = 13;
	





















};
obj86394_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86394_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj86394").trigger("obj86394_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86394) {
				console.warn("de-queueing event obj86394." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86394").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86394_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_86420();
function runjs_86420() {
	window.obj86394_droppedInsideTargetActions_3_runningActionsCount = obj86394_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj86593").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj86394_droppedInsideTargetActions_3_runningActionsCount = window.obj86394_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj86394_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj86394_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj86394_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj86394_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj86394_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86394_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj86394").trigger("obj86394_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86394) {
				console.warn("de-queueing event obj86394." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86394").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86394_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_86421();
function runjs_86421() {
	window.obj86394_droppedInsideTargetActions_3_runningActionsCount = obj86394_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj86593").css("border-color", "#C00000"); $("#obj86593").css("border-width", "2px"); $("#obj86593").css("border-style", "solid"); $("#obj86593").css("border-radius", "10px"); $("#obj86593").css("-webkit-border-radius", "10px"); $("#obj86593").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj86394_droppedInsideTargetActions_3_runningActionsCount = window.obj86394_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj86394_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj86394_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj86394_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj86394_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj86394_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86394_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj86394").trigger("obj86394_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86394) {
				console.warn("de-queueing event obj86394." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86394").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86394_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj86581 
hide_86422();
function hide_86422() {
	var selector = "#obj86581";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj86394_droppedInsideTargetActions_3_runningActionsCount = obj86394_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj86394_droppedInsideTargetActions_3_runningActionsCount = window.obj86394_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj86394_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj86394_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj86394_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj86394_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_86422(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj86394_droppedInsideTargetActions_3_runningActionsCount = window.obj86394_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj86394_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj86394_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj86394_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj86394_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj86394_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86394_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj86394").trigger("obj86394_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86394) {
				console.warn("de-queueing event obj86394." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86394").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86394_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_86423();
function runjs_86423() {
	window.obj86394_droppedInsideTargetActions_3_runningActionsCount = obj86394_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj86394").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj86394_droppedInsideTargetActions_3_runningActionsCount = window.obj86394_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj86394_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj86394_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj86394_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj86394_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj86394_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86394_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj86394").trigger("obj86394_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86394) {
				console.warn("de-queueing event obj86394." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86394").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86394_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_86424();
function switchText_86424() {
	window.obj86394_droppedInsideTargetActions_3_runningActionsCount = obj86394_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj86571_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj86571_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj86571").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj86571_content");
			setTimeout(function () {
				window.obj86394_droppedInsideTargetActions_3_runningActionsCount = window.obj86394_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj86394_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj86394_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj86394_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj86394_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj86571 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj86394_droppedInsideTargetActions_3_runningActionsCount = window.obj86394_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj86394_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj86394_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj86394_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj86394_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj86394_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86394_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj86394").trigger("obj86394_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86394) {
				console.warn("de-queueing event obj86394." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86394").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86394_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj86394 
move_86425();
function move_86425() {
	window.obj86394_droppedInsideTargetActions_3_runningActionsCount = obj86394_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj86394");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 133;
	var moveY = 643;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj86394_droppedInsideTargetActions_3_runningActionsCount = window.obj86394_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj86394_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj86394_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj86394_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj86394_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj86394_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86394_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj86394").trigger("obj86394_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86394) {
				console.warn("de-queueing event obj86394." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86394").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86394_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_86426();
function runjs_86426() {
	window.obj86394_droppedInsideTargetActions_3_runningActionsCount = obj86394_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj86593").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj86394_droppedInsideTargetActions_3_runningActionsCount = window.obj86394_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj86394_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj86394_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj86394_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj86394_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj86394_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86394_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj86394").trigger("obj86394_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86394) {
				console.warn("de-queueing event obj86394." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86394").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86394_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_86427();
function runjs_86427() {
	window.obj86394_droppedInsideTargetActions_3_runningActionsCount = obj86394_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj86593").css("border-color", "#000000"); $("#obj86593").css("border-width", "1px"); $("#obj86593").css("border-style", "solid"); $("#obj86593").css("border-radius", "0px"); $("#obj86593").css("-webkit-border-radius", "0px"); $("#obj86593").css("-moz-border-radius", "0px");
	
	setTimeout(function() {
		window.obj86394_droppedInsideTargetActions_3_runningActionsCount = window.obj86394_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj86394_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj86394_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj86394_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj86394_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj86394_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86394_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj86394").trigger("obj86394_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86394) {
				console.warn("de-queueing event obj86394." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86394").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86394_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj86581
(function(){
	window.obj86394_droppedInsideTargetActions_3_runningActionsCount = obj86394_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj86581";
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
					window.obj86394_droppedInsideTargetActions_3_runningActionsCount = window.obj86394_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj86394_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj86394_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj86394_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj86394_droppedInsideTargetActions_3_actionGroup9();
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
				window.obj86394_droppedInsideTargetActions_3_runningActionsCount = window.obj86394_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj86394_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj86394_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj86394_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj86394_droppedInsideTargetActions_3_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj86394_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86394_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj86394").trigger("obj86394_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86394) {
				console.warn("de-queueing event obj86394." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86394").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86394_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_86429();
function runjs_86429() {
	window.obj86394_droppedInsideTargetActions_3_runningActionsCount = obj86394_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj86394").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj86394_droppedInsideTargetActions_3_runningActionsCount = window.obj86394_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj86394_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj86394_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj86394_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj86394_droppedInsideTargetActions_3_actionGroup10();
}
	}, 1);
}







};
obj86394_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86394_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj86394").trigger("obj86394_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86394) {
				console.warn("de-queueing event obj86394." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86394").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86394_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_86430();
function runjs_86430() {
	window.obj86394_droppedInsideTargetActions_3_runningActionsCount = obj86394_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj86394").css("border-color", "rgba(0,0,0,0)"); $("#obj86394").css("border-width", "0px"); $("#obj86394").css("border-style", "solid"); $("#obj86394").css("border-radius", "10px"); $("#obj86394").css("-webkit-border-radius", "10px"); $("#obj86394").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj86394_droppedInsideTargetActions_3_runningActionsCount = window.obj86394_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj86394_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj86394_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj86394_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj86394_droppedInsideTargetActions_3_actionGroup11();
}
	}, 1);
}







};
obj86394_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86394_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj86394").trigger("obj86394_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86394) {
				console.warn("de-queueing event obj86394." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86394").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86394_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj86567 
playAudio_86431();
function playAudio_86431() {
	window.obj86394_droppedInsideTargetActions_3_runningActionsCount = obj86394_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj86567")[0];
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
		    window.obj86394_droppedInsideTargetActions_3_runningActionsCount = window.obj86394_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj86394_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj86394_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj86394_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj86394_droppedInsideTargetActions_3_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj86394_droppedInsideTargetActions_3_runningActionsCount = window.obj86394_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj86394_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj86394_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj86394_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj86394_droppedInsideTargetActions_3_actionGroup12();
}
	}
}









};
obj86394_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86394_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj86394").trigger("obj86394_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86394) {
				console.warn("de-queueing event obj86394." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86394").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86394_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_86432();
function switchText_86432() {
	window.obj86394_droppedInsideTargetActions_3_runningActionsCount = obj86394_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj86571_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj86571_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj86571").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj86571_content");
			setTimeout(function () {
				window.obj86394_droppedInsideTargetActions_3_runningActionsCount = window.obj86394_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj86394_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj86394_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj86394_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj86394_droppedInsideTargetActions_3_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj86571 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj86394_droppedInsideTargetActions_3_runningActionsCount = window.obj86394_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj86394_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj86394_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj86394_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj86394_droppedInsideTargetActions_3_actionGroup13();
}
		}, 1);
	}
}






};
obj86394_droppedInsideTargetActions_3_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj86394_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj86394").trigger("obj86394_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86394) {
				console.warn("de-queueing event obj86394." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86394").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86394_droppedInsideTargetActions_3_activeActionGroupIndex = 13;
	





















};
obj86394_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86394_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj86394").trigger("obj86394_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86394) {
				console.warn("de-queueing event obj86394." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86394").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86394_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_86406();
function runjs_86406() {
	window.obj86394_droppedInsideTargetActions_2_runningActionsCount = obj86394_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj86589").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj86394_droppedInsideTargetActions_2_runningActionsCount = window.obj86394_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj86394_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj86394_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj86394_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj86394_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj86394_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86394_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj86394").trigger("obj86394_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86394) {
				console.warn("de-queueing event obj86394." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86394").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86394_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_86407();
function runjs_86407() {
	window.obj86394_droppedInsideTargetActions_2_runningActionsCount = obj86394_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj86589").css("border-color", "#C00000"); $("#obj86589").css("border-width", "2px"); $("#obj86589").css("border-style", "solid"); $("#obj86589").css("border-radius", "10px"); $("#obj86589").css("-webkit-border-radius", "10px"); $("#obj86589").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj86394_droppedInsideTargetActions_2_runningActionsCount = window.obj86394_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj86394_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj86394_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj86394_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj86394_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj86394_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86394_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj86394").trigger("obj86394_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86394) {
				console.warn("de-queueing event obj86394." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86394").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86394_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj86579 
hide_86408();
function hide_86408() {
	var selector = "#obj86579";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj86394_droppedInsideTargetActions_2_runningActionsCount = obj86394_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj86394_droppedInsideTargetActions_2_runningActionsCount = window.obj86394_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj86394_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj86394_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj86394_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj86394_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_86408(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj86394_droppedInsideTargetActions_2_runningActionsCount = window.obj86394_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj86394_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj86394_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj86394_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj86394_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj86394_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86394_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj86394").trigger("obj86394_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86394) {
				console.warn("de-queueing event obj86394." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86394").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86394_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_86409();
function runjs_86409() {
	window.obj86394_droppedInsideTargetActions_2_runningActionsCount = obj86394_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj86394").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj86394_droppedInsideTargetActions_2_runningActionsCount = window.obj86394_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj86394_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj86394_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj86394_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj86394_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj86394_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86394_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj86394").trigger("obj86394_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86394) {
				console.warn("de-queueing event obj86394." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86394").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86394_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_86410();
function switchText_86410() {
	window.obj86394_droppedInsideTargetActions_2_runningActionsCount = obj86394_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj86571_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj86571_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj86571").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj86571_content");
			setTimeout(function () {
				window.obj86394_droppedInsideTargetActions_2_runningActionsCount = window.obj86394_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj86394_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj86394_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj86394_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj86394_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj86571 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj86394_droppedInsideTargetActions_2_runningActionsCount = window.obj86394_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj86394_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj86394_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj86394_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj86394_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj86394_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86394_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj86394").trigger("obj86394_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86394) {
				console.warn("de-queueing event obj86394." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86394").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86394_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj86394 
move_86411();
function move_86411() {
	window.obj86394_droppedInsideTargetActions_2_runningActionsCount = obj86394_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj86394");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 133;
	var moveY = 643;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj86394_droppedInsideTargetActions_2_runningActionsCount = window.obj86394_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj86394_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj86394_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj86394_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj86394_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj86394_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86394_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj86394").trigger("obj86394_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86394) {
				console.warn("de-queueing event obj86394." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86394").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86394_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_86412();
function runjs_86412() {
	window.obj86394_droppedInsideTargetActions_2_runningActionsCount = obj86394_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj86589").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj86394_droppedInsideTargetActions_2_runningActionsCount = window.obj86394_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj86394_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj86394_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj86394_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj86394_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj86394_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86394_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj86394").trigger("obj86394_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86394) {
				console.warn("de-queueing event obj86394." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86394").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86394_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_86413();
function runjs_86413() {
	window.obj86394_droppedInsideTargetActions_2_runningActionsCount = obj86394_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj86589").css("border-color", "#000000"); $("#obj86589").css("border-width", "1px"); $("#obj86589").css("border-style", "solid"); $("#obj86589").css("border-radius", "0px"); $("#obj86589").css("-webkit-border-radius", "0px"); $("#obj86589").css("-moz-border-radius", "0px");
	
	setTimeout(function() {
		window.obj86394_droppedInsideTargetActions_2_runningActionsCount = window.obj86394_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj86394_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj86394_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj86394_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj86394_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj86394_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86394_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj86394").trigger("obj86394_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86394) {
				console.warn("de-queueing event obj86394." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86394").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86394_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj86579
(function(){
	window.obj86394_droppedInsideTargetActions_2_runningActionsCount = obj86394_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj86579";
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
					window.obj86394_droppedInsideTargetActions_2_runningActionsCount = window.obj86394_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj86394_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj86394_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj86394_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj86394_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj86394_droppedInsideTargetActions_2_runningActionsCount = window.obj86394_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj86394_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj86394_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj86394_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj86394_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj86394_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86394_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj86394").trigger("obj86394_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86394) {
				console.warn("de-queueing event obj86394." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86394").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86394_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_86415();
function runjs_86415() {
	window.obj86394_droppedInsideTargetActions_2_runningActionsCount = obj86394_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj86394").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj86394_droppedInsideTargetActions_2_runningActionsCount = window.obj86394_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj86394_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj86394_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj86394_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj86394_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj86394_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86394_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj86394").trigger("obj86394_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86394) {
				console.warn("de-queueing event obj86394." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86394").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86394_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_86416();
function runjs_86416() {
	window.obj86394_droppedInsideTargetActions_2_runningActionsCount = obj86394_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj86394").css("border-color", "rgba(0,0,0,0)"); $("#obj86394").css("border-width", "0px"); $("#obj86394").css("border-style", "solid"); $("#obj86394").css("border-radius", "10px"); $("#obj86394").css("-webkit-border-radius", "10px"); $("#obj86394").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj86394_droppedInsideTargetActions_2_runningActionsCount = window.obj86394_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj86394_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj86394_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj86394_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj86394_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj86394_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86394_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj86394").trigger("obj86394_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86394) {
				console.warn("de-queueing event obj86394." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86394").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86394_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj86567 
playAudio_86417();
function playAudio_86417() {
	window.obj86394_droppedInsideTargetActions_2_runningActionsCount = obj86394_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj86567")[0];
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
		    window.obj86394_droppedInsideTargetActions_2_runningActionsCount = window.obj86394_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj86394_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj86394_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj86394_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj86394_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj86394_droppedInsideTargetActions_2_runningActionsCount = window.obj86394_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj86394_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj86394_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj86394_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj86394_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj86394_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86394_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj86394").trigger("obj86394_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86394) {
				console.warn("de-queueing event obj86394." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86394").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86394_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_86418();
function switchText_86418() {
	window.obj86394_droppedInsideTargetActions_2_runningActionsCount = obj86394_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj86571_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj86571_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj86571").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj86571_content");
			setTimeout(function () {
				window.obj86394_droppedInsideTargetActions_2_runningActionsCount = window.obj86394_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj86394_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj86394_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj86394_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj86394_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj86571 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj86394_droppedInsideTargetActions_2_runningActionsCount = window.obj86394_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj86394_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj86394_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj86394_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj86394_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj86394_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj86394_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj86394").trigger("obj86394_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86394) {
				console.warn("de-queueing event obj86394." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86394").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86394_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj86394_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86394_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj86394").trigger("obj86394_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86394) {
				console.warn("de-queueing event obj86394." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86394").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86394_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_86399();
function runjs_86399() {
	window.obj86394_droppedInsideTargetActions_runningActionsCount = obj86394_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj86585").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj86394_droppedInsideTargetActions_runningActionsCount = window.obj86394_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj86394_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj86394_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj86394_droppedInsideTargetActions_runningActionsCount == 0) {
	obj86394_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj86394_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86394_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj86394").trigger("obj86394_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86394) {
				console.warn("de-queueing event obj86394." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86394").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86394_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_86403();
function switchText_86403() {
	window.obj86394_droppedInsideTargetActions_runningActionsCount = obj86394_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj86571_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj86571_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj86571").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj86571_content");
			setTimeout(function () {
				window.obj86394_droppedInsideTargetActions_runningActionsCount = window.obj86394_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj86394_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj86394_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj86394_droppedInsideTargetActions_runningActionsCount == 0) {
	obj86394_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj86571 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj86394_droppedInsideTargetActions_runningActionsCount = window.obj86394_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj86394_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj86394_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj86394_droppedInsideTargetActions_runningActionsCount == 0) {
	obj86394_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj86394_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86394_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj86394").trigger("obj86394_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86394) {
				console.warn("de-queueing event obj86394." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86394").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86394_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_86400();
function runjs_86400() {
	window.obj86394_droppedInsideTargetActions_runningActionsCount = obj86394_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj86585").css("border-color", "#058E3F"); $("#obj86585").css("border-width", "2px"); $("#obj86585").css("border-style", "solid"); $("#obj86585").css("border-radius", "10px"); $("#obj86585").css("-webkit-border-radius", "10px"); $("#obj86585").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj86394_droppedInsideTargetActions_runningActionsCount = window.obj86394_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj86394_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj86394_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj86394_droppedInsideTargetActions_runningActionsCount == 0) {
	obj86394_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj86394_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86394_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj86394").trigger("obj86394_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86394) {
				console.warn("de-queueing event obj86394." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86394").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86394_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj86577 
hide_86401();
function hide_86401() {
	var selector = "#obj86577";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj86394_droppedInsideTargetActions_runningActionsCount = obj86394_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj86394_droppedInsideTargetActions_runningActionsCount = window.obj86394_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj86394_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj86394_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj86394_droppedInsideTargetActions_runningActionsCount == 0) {
	obj86394_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_86401(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj86394_droppedInsideTargetActions_runningActionsCount = window.obj86394_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj86394_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj86394_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj86394_droppedInsideTargetActions_runningActionsCount == 0) {
	obj86394_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj86394_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86394_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj86394").trigger("obj86394_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86394) {
				console.warn("de-queueing event obj86394." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86394").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86394_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_86402();
function runjs_86402() {
	window.obj86394_droppedInsideTargetActions_runningActionsCount = obj86394_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj86394").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj86394_droppedInsideTargetActions_runningActionsCount = window.obj86394_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj86394_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj86394_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj86394_droppedInsideTargetActions_runningActionsCount == 0) {
	obj86394_droppedInsideTargetActions_actionGroup5();
}
	}, 1);
}







};
obj86394_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86394_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj86394").trigger("obj86394_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86394) {
				console.warn("de-queueing event obj86394." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86394").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86394_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj86569 
playAudio_86404();
function playAudio_86404() {
	window.obj86394_droppedInsideTargetActions_runningActionsCount = obj86394_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj86569")[0];
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
		    window.obj86394_droppedInsideTargetActions_runningActionsCount = window.obj86394_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj86394_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj86394_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj86394_droppedInsideTargetActions_runningActionsCount == 0) {
	obj86394_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj86394_droppedInsideTargetActions_runningActionsCount = window.obj86394_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj86394_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj86394_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj86394_droppedInsideTargetActions_runningActionsCount == 0) {
	obj86394_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj86394_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86394_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj86394").trigger("obj86394_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86394) {
				console.warn("de-queueing event obj86394." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86394").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86394_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90424();
function switchText_90424() {
	window.obj86394_droppedInsideTargetActions_runningActionsCount = obj86394_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj86571_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj86571_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj86571").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj86571_content");
			setTimeout(function () {
				window.obj86394_droppedInsideTargetActions_runningActionsCount = window.obj86394_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj86394_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj86394_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj86394_droppedInsideTargetActions_runningActionsCount == 0) {
	obj86394_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj86571 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj86394_droppedInsideTargetActions_runningActionsCount = window.obj86394_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj86394_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj86394_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj86394_droppedInsideTargetActions_runningActionsCount == 0) {
	obj86394_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj86394_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj86394_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj86394").trigger("obj86394_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86394) {
				console.warn("de-queueing event obj86394." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86394").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86394_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj86341_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86341_onTouchDown_activeActionGroupIndex = -1;
		$("#obj86341").trigger("obj86341_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86341) {
				console.warn("de-queueing event obj86341." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86341").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86341_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj86341");
//	action: dragDrop
//	target: obj86341 
dragDrop_86344();
function dragDrop_86344() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj86341_onTouchDown_runningActionsCount = obj86341_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj86341');
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
	  	containerNode = $('#obj86603');
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
    	window.obj86341_onTouchDown_runningActionsCount = window.obj86341_onTouchDown_runningActionsCount - 1;
if (window.obj86341_onTouchDown_runningActionsCount < 0) {
	window.obj86341_onTouchDown_runningActionsCount = 0;
} else if (window.obj86341_onTouchDown_runningActionsCount == 0) {
	obj86341_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj86563","#obj86589","#obj86585","#obj86593");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3","droppedInsideTargetActions_4") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_86344 = false;
    	var dropped_id_86344;
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
					dropped_86344 = true;
					dropped_id_86344 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_86344) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj86341").trigger('SCActionDragDrop86344_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj86341_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj86341_onTouchDown_activeActionGroupIndex = -1;
		$("#obj86341").trigger("obj86341_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86341) {
				console.warn("de-queueing event obj86341." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86341").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86341_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj86341_SCActionDragDrop86344_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86341_SCActionDragDrop86344_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj86341").trigger("obj86341_SCActionDragDrop86344_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86341) {
				console.warn("de-queueing event obj86341." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86341").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86341_SCActionDragDrop86344_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj86341 
move_92535();
function move_92535() {
	window.obj86341_SCActionDragDrop86344_droppedOutsideTargetActions_runningActionsCount = obj86341_SCActionDragDrop86344_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj86341");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 133;
	var moveY = 679;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj86341_SCActionDragDrop86344_droppedOutsideTargetActions_runningActionsCount = window.obj86341_SCActionDragDrop86344_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj86341_SCActionDragDrop86344_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj86341_SCActionDragDrop86344_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj86341_SCActionDragDrop86344_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj86341_SCActionDragDrop86344_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj86341_SCActionDragDrop86344_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj86341_SCActionDragDrop86344_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj86341").trigger("obj86341_SCActionDragDrop86344_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86341) {
				console.warn("de-queueing event obj86341." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86341").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86341_SCActionDragDrop86344_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj86341_droppedInsideTargetActions_4_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86341_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj86341").trigger("obj86341_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86341) {
				console.warn("de-queueing event obj86341." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86341").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86341_droppedInsideTargetActions_4_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_86381();
function runjs_86381() {
	window.obj86341_droppedInsideTargetActions_4_runningActionsCount = obj86341_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj86593").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj86341_droppedInsideTargetActions_4_runningActionsCount = window.obj86341_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj86341_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj86341_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj86341_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj86341_droppedInsideTargetActions_4_actionGroup1();
}
	}, 1);
}







};
obj86341_droppedInsideTargetActions_4_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86341_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj86341").trigger("obj86341_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86341) {
				console.warn("de-queueing event obj86341." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86341").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86341_droppedInsideTargetActions_4_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_86382();
function runjs_86382() {
	window.obj86341_droppedInsideTargetActions_4_runningActionsCount = obj86341_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj86593").css("border-color", "#C00000"); $("#obj86593").css("border-width", "2px"); $("#obj86593").css("border-style", "solid"); $("#obj86593").css("border-radius", "10px"); $("#obj86593").css("-webkit-border-radius", "10px"); $("#obj86593").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj86341_droppedInsideTargetActions_4_runningActionsCount = window.obj86341_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj86341_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj86341_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj86341_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj86341_droppedInsideTargetActions_4_actionGroup2();
}
	}, 1);
}







};
obj86341_droppedInsideTargetActions_4_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86341_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj86341").trigger("obj86341_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86341) {
				console.warn("de-queueing event obj86341." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86341").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86341_droppedInsideTargetActions_4_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj86581 
hide_86383();
function hide_86383() {
	var selector = "#obj86581";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj86341_droppedInsideTargetActions_4_runningActionsCount = obj86341_droppedInsideTargetActions_4_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj86341_droppedInsideTargetActions_4_runningActionsCount = window.obj86341_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj86341_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj86341_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj86341_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj86341_droppedInsideTargetActions_4_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_86383(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj86341_droppedInsideTargetActions_4_runningActionsCount = window.obj86341_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj86341_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj86341_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj86341_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj86341_droppedInsideTargetActions_4_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj86341_droppedInsideTargetActions_4_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86341_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj86341").trigger("obj86341_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86341) {
				console.warn("de-queueing event obj86341." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86341").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86341_droppedInsideTargetActions_4_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_86384();
function runjs_86384() {
	window.obj86341_droppedInsideTargetActions_4_runningActionsCount = obj86341_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj86341").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj86341_droppedInsideTargetActions_4_runningActionsCount = window.obj86341_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj86341_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj86341_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj86341_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj86341_droppedInsideTargetActions_4_actionGroup4();
}
	}, 1);
}







};
obj86341_droppedInsideTargetActions_4_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86341_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj86341").trigger("obj86341_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86341) {
				console.warn("de-queueing event obj86341." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86341").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86341_droppedInsideTargetActions_4_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_86385();
function switchText_86385() {
	window.obj86341_droppedInsideTargetActions_4_runningActionsCount = obj86341_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj86571_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj86571_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj86571").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj86571_content");
			setTimeout(function () {
				window.obj86341_droppedInsideTargetActions_4_runningActionsCount = window.obj86341_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj86341_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj86341_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj86341_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj86341_droppedInsideTargetActions_4_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj86571 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj86341_droppedInsideTargetActions_4_runningActionsCount = window.obj86341_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj86341_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj86341_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj86341_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj86341_droppedInsideTargetActions_4_actionGroup5();
}
		}, 1);
	}
}






};
obj86341_droppedInsideTargetActions_4_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86341_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj86341").trigger("obj86341_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86341) {
				console.warn("de-queueing event obj86341." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86341").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86341_droppedInsideTargetActions_4_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj86341 
move_86386();
function move_86386() {
	window.obj86341_droppedInsideTargetActions_4_runningActionsCount = obj86341_droppedInsideTargetActions_4_runningActionsCount + 1;

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
	var targetObject = $("#obj86341");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 133;
	var moveY = 679;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj86341_droppedInsideTargetActions_4_runningActionsCount = window.obj86341_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj86341_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj86341_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj86341_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj86341_droppedInsideTargetActions_4_actionGroup6();
}
		}, 1);
	});
}



















};
obj86341_droppedInsideTargetActions_4_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86341_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj86341").trigger("obj86341_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86341) {
				console.warn("de-queueing event obj86341." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86341").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86341_droppedInsideTargetActions_4_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_86387();
function runjs_86387() {
	window.obj86341_droppedInsideTargetActions_4_runningActionsCount = obj86341_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj86593").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj86341_droppedInsideTargetActions_4_runningActionsCount = window.obj86341_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj86341_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj86341_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj86341_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj86341_droppedInsideTargetActions_4_actionGroup7();
}
	}, 1);
}







};
obj86341_droppedInsideTargetActions_4_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86341_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj86341").trigger("obj86341_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86341) {
				console.warn("de-queueing event obj86341." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86341").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86341_droppedInsideTargetActions_4_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_86388();
function runjs_86388() {
	window.obj86341_droppedInsideTargetActions_4_runningActionsCount = obj86341_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj86593").css("border-color", "#000000"); $("#obj86593").css("border-width", "1px"); $("#obj86593").css("border-style", "solid"); $("#obj86593").css("border-radius", "0px"); $("#obj86593").css("-webkit-border-radius", "0px"); $("#obj86593").css("-moz-border-radius", "0px");
	
	setTimeout(function() {
		window.obj86341_droppedInsideTargetActions_4_runningActionsCount = window.obj86341_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj86341_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj86341_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj86341_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj86341_droppedInsideTargetActions_4_actionGroup8();
}
	}, 1);
}







};
obj86341_droppedInsideTargetActions_4_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86341_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj86341").trigger("obj86341_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86341) {
				console.warn("de-queueing event obj86341." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86341").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86341_droppedInsideTargetActions_4_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj86581
(function(){
	window.obj86341_droppedInsideTargetActions_4_runningActionsCount = obj86341_droppedInsideTargetActions_4_runningActionsCount + 1;

	var selector = "#obj86581";
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
					window.obj86341_droppedInsideTargetActions_4_runningActionsCount = window.obj86341_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj86341_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj86341_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj86341_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj86341_droppedInsideTargetActions_4_actionGroup9();
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
				window.obj86341_droppedInsideTargetActions_4_runningActionsCount = window.obj86341_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj86341_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj86341_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj86341_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj86341_droppedInsideTargetActions_4_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj86341_droppedInsideTargetActions_4_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86341_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj86341").trigger("obj86341_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86341) {
				console.warn("de-queueing event obj86341." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86341").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86341_droppedInsideTargetActions_4_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_86390();
function runjs_86390() {
	window.obj86341_droppedInsideTargetActions_4_runningActionsCount = obj86341_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj86341").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj86341_droppedInsideTargetActions_4_runningActionsCount = window.obj86341_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj86341_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj86341_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj86341_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj86341_droppedInsideTargetActions_4_actionGroup10();
}
	}, 1);
}







};
obj86341_droppedInsideTargetActions_4_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86341_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj86341").trigger("obj86341_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86341) {
				console.warn("de-queueing event obj86341." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86341").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86341_droppedInsideTargetActions_4_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_86391();
function runjs_86391() {
	window.obj86341_droppedInsideTargetActions_4_runningActionsCount = obj86341_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj86341").css("border-color", "rgba(0,0,0,0)"); $("#obj86341").css("border-width", "0px"); $("#obj86341").css("border-style", "solid"); $("#obj86341").css("border-radius", "10px"); $("#obj86341").css("-webkit-border-radius", "10px"); $("#obj86341").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj86341_droppedInsideTargetActions_4_runningActionsCount = window.obj86341_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj86341_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj86341_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj86341_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj86341_droppedInsideTargetActions_4_actionGroup11();
}
	}, 1);
}







};
obj86341_droppedInsideTargetActions_4_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86341_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj86341").trigger("obj86341_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86341) {
				console.warn("de-queueing event obj86341." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86341").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86341_droppedInsideTargetActions_4_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj86567 
playAudio_86392();
function playAudio_86392() {
	window.obj86341_droppedInsideTargetActions_4_runningActionsCount = obj86341_droppedInsideTargetActions_4_runningActionsCount + 1;
	var myAudio = $("#obj86567")[0];
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
		    window.obj86341_droppedInsideTargetActions_4_runningActionsCount = window.obj86341_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj86341_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj86341_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj86341_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj86341_droppedInsideTargetActions_4_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj86341_droppedInsideTargetActions_4_runningActionsCount = window.obj86341_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj86341_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj86341_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj86341_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj86341_droppedInsideTargetActions_4_actionGroup12();
}
	}
}









};
obj86341_droppedInsideTargetActions_4_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86341_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj86341").trigger("obj86341_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86341) {
				console.warn("de-queueing event obj86341." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86341").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86341_droppedInsideTargetActions_4_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_86393();
function switchText_86393() {
	window.obj86341_droppedInsideTargetActions_4_runningActionsCount = obj86341_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj86571_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj86571_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj86571").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj86571_content");
			setTimeout(function () {
				window.obj86341_droppedInsideTargetActions_4_runningActionsCount = window.obj86341_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj86341_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj86341_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj86341_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj86341_droppedInsideTargetActions_4_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj86571 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj86341_droppedInsideTargetActions_4_runningActionsCount = window.obj86341_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj86341_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj86341_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj86341_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj86341_droppedInsideTargetActions_4_actionGroup13();
}
		}, 1);
	}
}






};
obj86341_droppedInsideTargetActions_4_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj86341_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj86341").trigger("obj86341_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86341) {
				console.warn("de-queueing event obj86341." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86341").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86341_droppedInsideTargetActions_4_activeActionGroupIndex = 13;
	





















};
obj86341_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86341_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj86341").trigger("obj86341_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86341) {
				console.warn("de-queueing event obj86341." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86341").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86341_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_86367();
function runjs_86367() {
	window.obj86341_droppedInsideTargetActions_3_runningActionsCount = obj86341_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj86585").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj86341_droppedInsideTargetActions_3_runningActionsCount = window.obj86341_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj86341_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj86341_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj86341_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj86341_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj86341_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86341_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj86341").trigger("obj86341_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86341) {
				console.warn("de-queueing event obj86341." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86341").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86341_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_86368();
function runjs_86368() {
	window.obj86341_droppedInsideTargetActions_3_runningActionsCount = obj86341_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj86585").css("border-color", "#C00000"); $("#obj86585").css("border-width", "2px"); $("#obj86585").css("border-style", "solid"); $("#obj86585").css("border-radius", "10px"); $("#obj86585").css("-webkit-border-radius", "10px"); $("#obj86585").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj86341_droppedInsideTargetActions_3_runningActionsCount = window.obj86341_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj86341_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj86341_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj86341_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj86341_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj86341_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86341_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj86341").trigger("obj86341_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86341) {
				console.warn("de-queueing event obj86341." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86341").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86341_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj86577 
hide_86369();
function hide_86369() {
	var selector = "#obj86577";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj86341_droppedInsideTargetActions_3_runningActionsCount = obj86341_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj86341_droppedInsideTargetActions_3_runningActionsCount = window.obj86341_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj86341_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj86341_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj86341_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj86341_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_86369(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj86341_droppedInsideTargetActions_3_runningActionsCount = window.obj86341_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj86341_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj86341_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj86341_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj86341_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj86341_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86341_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj86341").trigger("obj86341_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86341) {
				console.warn("de-queueing event obj86341." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86341").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86341_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_86370();
function runjs_86370() {
	window.obj86341_droppedInsideTargetActions_3_runningActionsCount = obj86341_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj86341").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj86341_droppedInsideTargetActions_3_runningActionsCount = window.obj86341_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj86341_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj86341_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj86341_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj86341_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj86341_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86341_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj86341").trigger("obj86341_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86341) {
				console.warn("de-queueing event obj86341." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86341").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86341_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_86371();
function switchText_86371() {
	window.obj86341_droppedInsideTargetActions_3_runningActionsCount = obj86341_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj86571_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj86571_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj86571").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj86571_content");
			setTimeout(function () {
				window.obj86341_droppedInsideTargetActions_3_runningActionsCount = window.obj86341_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj86341_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj86341_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj86341_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj86341_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj86571 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj86341_droppedInsideTargetActions_3_runningActionsCount = window.obj86341_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj86341_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj86341_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj86341_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj86341_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj86341_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86341_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj86341").trigger("obj86341_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86341) {
				console.warn("de-queueing event obj86341." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86341").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86341_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj86341 
move_86372();
function move_86372() {
	window.obj86341_droppedInsideTargetActions_3_runningActionsCount = obj86341_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj86341");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 133;
	var moveY = 679;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj86341_droppedInsideTargetActions_3_runningActionsCount = window.obj86341_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj86341_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj86341_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj86341_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj86341_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj86341_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86341_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj86341").trigger("obj86341_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86341) {
				console.warn("de-queueing event obj86341." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86341").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86341_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_86373();
function runjs_86373() {
	window.obj86341_droppedInsideTargetActions_3_runningActionsCount = obj86341_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj86585").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj86341_droppedInsideTargetActions_3_runningActionsCount = window.obj86341_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj86341_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj86341_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj86341_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj86341_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj86341_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86341_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj86341").trigger("obj86341_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86341) {
				console.warn("de-queueing event obj86341." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86341").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86341_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_86374();
function runjs_86374() {
	window.obj86341_droppedInsideTargetActions_3_runningActionsCount = obj86341_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj86585").css("border-color", "#000000"); $("#obj86585").css("border-width", "1px"); $("#obj86585").css("border-style", "solid"); $("#obj86585").css("border-radius", "0px"); $("#obj86585").css("-webkit-border-radius", "0px"); $("#obj86585").css("-moz-border-radius", "0px");
	
	setTimeout(function() {
		window.obj86341_droppedInsideTargetActions_3_runningActionsCount = window.obj86341_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj86341_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj86341_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj86341_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj86341_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj86341_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86341_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj86341").trigger("obj86341_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86341) {
				console.warn("de-queueing event obj86341." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86341").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86341_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj86577
(function(){
	window.obj86341_droppedInsideTargetActions_3_runningActionsCount = obj86341_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj86577";
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
					window.obj86341_droppedInsideTargetActions_3_runningActionsCount = window.obj86341_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj86341_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj86341_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj86341_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj86341_droppedInsideTargetActions_3_actionGroup9();
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
				window.obj86341_droppedInsideTargetActions_3_runningActionsCount = window.obj86341_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj86341_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj86341_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj86341_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj86341_droppedInsideTargetActions_3_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj86341_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86341_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj86341").trigger("obj86341_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86341) {
				console.warn("de-queueing event obj86341." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86341").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86341_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_86376();
function runjs_86376() {
	window.obj86341_droppedInsideTargetActions_3_runningActionsCount = obj86341_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj86341").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj86341_droppedInsideTargetActions_3_runningActionsCount = window.obj86341_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj86341_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj86341_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj86341_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj86341_droppedInsideTargetActions_3_actionGroup10();
}
	}, 1);
}







};
obj86341_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86341_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj86341").trigger("obj86341_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86341) {
				console.warn("de-queueing event obj86341." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86341").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86341_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_86377();
function runjs_86377() {
	window.obj86341_droppedInsideTargetActions_3_runningActionsCount = obj86341_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj86341").css("border-color", "rgba(0,0,0,0)"); $("#obj86341").css("border-width", "0px"); $("#obj86341").css("border-style", "solid"); $("#obj86341").css("border-radius", "10px"); $("#obj86341").css("-webkit-border-radius", "10px"); $("#obj86341").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj86341_droppedInsideTargetActions_3_runningActionsCount = window.obj86341_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj86341_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj86341_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj86341_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj86341_droppedInsideTargetActions_3_actionGroup11();
}
	}, 1);
}







};
obj86341_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86341_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj86341").trigger("obj86341_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86341) {
				console.warn("de-queueing event obj86341." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86341").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86341_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj86567 
playAudio_86378();
function playAudio_86378() {
	window.obj86341_droppedInsideTargetActions_3_runningActionsCount = obj86341_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj86567")[0];
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
		    window.obj86341_droppedInsideTargetActions_3_runningActionsCount = window.obj86341_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj86341_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj86341_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj86341_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj86341_droppedInsideTargetActions_3_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj86341_droppedInsideTargetActions_3_runningActionsCount = window.obj86341_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj86341_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj86341_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj86341_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj86341_droppedInsideTargetActions_3_actionGroup12();
}
	}
}









};
obj86341_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86341_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj86341").trigger("obj86341_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86341) {
				console.warn("de-queueing event obj86341." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86341").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86341_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_86379();
function switchText_86379() {
	window.obj86341_droppedInsideTargetActions_3_runningActionsCount = obj86341_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj86571_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj86571_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj86571").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj86571_content");
			setTimeout(function () {
				window.obj86341_droppedInsideTargetActions_3_runningActionsCount = window.obj86341_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj86341_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj86341_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj86341_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj86341_droppedInsideTargetActions_3_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj86571 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj86341_droppedInsideTargetActions_3_runningActionsCount = window.obj86341_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj86341_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj86341_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj86341_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj86341_droppedInsideTargetActions_3_actionGroup13();
}
		}, 1);
	}
}






};
obj86341_droppedInsideTargetActions_3_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj86341_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj86341").trigger("obj86341_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86341) {
				console.warn("de-queueing event obj86341." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86341").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86341_droppedInsideTargetActions_3_activeActionGroupIndex = 13;
	





















};
obj86341_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86341_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj86341").trigger("obj86341_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86341) {
				console.warn("de-queueing event obj86341." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86341").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86341_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_86353();
function runjs_86353() {
	window.obj86341_droppedInsideTargetActions_2_runningActionsCount = obj86341_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj86589").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj86341_droppedInsideTargetActions_2_runningActionsCount = window.obj86341_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj86341_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj86341_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj86341_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj86341_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj86341_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86341_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj86341").trigger("obj86341_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86341) {
				console.warn("de-queueing event obj86341." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86341").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86341_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_86354();
function runjs_86354() {
	window.obj86341_droppedInsideTargetActions_2_runningActionsCount = obj86341_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj86589").css("border-color", "#C00000"); $("#obj86589").css("border-width", "2px"); $("#obj86589").css("border-style", "solid"); $("#obj86589").css("border-radius", "10px"); $("#obj86589").css("-webkit-border-radius", "10px"); $("#obj86589").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj86341_droppedInsideTargetActions_2_runningActionsCount = window.obj86341_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj86341_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj86341_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj86341_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj86341_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj86341_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86341_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj86341").trigger("obj86341_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86341) {
				console.warn("de-queueing event obj86341." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86341").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86341_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj86579 
hide_86355();
function hide_86355() {
	var selector = "#obj86579";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj86341_droppedInsideTargetActions_2_runningActionsCount = obj86341_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj86341_droppedInsideTargetActions_2_runningActionsCount = window.obj86341_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj86341_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj86341_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj86341_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj86341_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_86355(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj86341_droppedInsideTargetActions_2_runningActionsCount = window.obj86341_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj86341_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj86341_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj86341_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj86341_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj86341_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86341_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj86341").trigger("obj86341_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86341) {
				console.warn("de-queueing event obj86341." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86341").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86341_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_86356();
function runjs_86356() {
	window.obj86341_droppedInsideTargetActions_2_runningActionsCount = obj86341_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj86341").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj86341_droppedInsideTargetActions_2_runningActionsCount = window.obj86341_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj86341_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj86341_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj86341_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj86341_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj86341_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86341_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj86341").trigger("obj86341_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86341) {
				console.warn("de-queueing event obj86341." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86341").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86341_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_86357();
function switchText_86357() {
	window.obj86341_droppedInsideTargetActions_2_runningActionsCount = obj86341_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj86571_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj86571_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj86571").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj86571_content");
			setTimeout(function () {
				window.obj86341_droppedInsideTargetActions_2_runningActionsCount = window.obj86341_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj86341_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj86341_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj86341_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj86341_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj86571 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj86341_droppedInsideTargetActions_2_runningActionsCount = window.obj86341_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj86341_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj86341_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj86341_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj86341_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj86341_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86341_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj86341").trigger("obj86341_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86341) {
				console.warn("de-queueing event obj86341." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86341").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86341_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj86341 
move_86358();
function move_86358() {
	window.obj86341_droppedInsideTargetActions_2_runningActionsCount = obj86341_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj86341");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 133;
	var moveY = 679;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj86341_droppedInsideTargetActions_2_runningActionsCount = window.obj86341_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj86341_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj86341_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj86341_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj86341_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj86341_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86341_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj86341").trigger("obj86341_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86341) {
				console.warn("de-queueing event obj86341." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86341").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86341_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_86359();
function runjs_86359() {
	window.obj86341_droppedInsideTargetActions_2_runningActionsCount = obj86341_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj86589").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj86341_droppedInsideTargetActions_2_runningActionsCount = window.obj86341_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj86341_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj86341_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj86341_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj86341_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj86341_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86341_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj86341").trigger("obj86341_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86341) {
				console.warn("de-queueing event obj86341." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86341").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86341_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_86360();
function runjs_86360() {
	window.obj86341_droppedInsideTargetActions_2_runningActionsCount = obj86341_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj86589").css("border-color", "#000000"); $("#obj86589").css("border-width", "1px"); $("#obj86589").css("border-style", "solid"); $("#obj86589").css("border-radius", "0px"); $("#obj86589").css("-webkit-border-radius", "0px"); $("#obj86589").css("-moz-border-radius", "0px");
	
	setTimeout(function() {
		window.obj86341_droppedInsideTargetActions_2_runningActionsCount = window.obj86341_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj86341_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj86341_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj86341_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj86341_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj86341_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86341_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj86341").trigger("obj86341_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86341) {
				console.warn("de-queueing event obj86341." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86341").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86341_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj86579
(function(){
	window.obj86341_droppedInsideTargetActions_2_runningActionsCount = obj86341_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj86579";
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
					window.obj86341_droppedInsideTargetActions_2_runningActionsCount = window.obj86341_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj86341_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj86341_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj86341_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj86341_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj86341_droppedInsideTargetActions_2_runningActionsCount = window.obj86341_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj86341_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj86341_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj86341_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj86341_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj86341_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86341_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj86341").trigger("obj86341_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86341) {
				console.warn("de-queueing event obj86341." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86341").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86341_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_86362();
function runjs_86362() {
	window.obj86341_droppedInsideTargetActions_2_runningActionsCount = obj86341_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj86341").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj86341_droppedInsideTargetActions_2_runningActionsCount = window.obj86341_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj86341_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj86341_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj86341_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj86341_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj86341_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86341_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj86341").trigger("obj86341_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86341) {
				console.warn("de-queueing event obj86341." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86341").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86341_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_86363();
function runjs_86363() {
	window.obj86341_droppedInsideTargetActions_2_runningActionsCount = obj86341_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj86341").css("border-color", "rgba(0,0,0,0)"); $("#obj86341").css("border-width", "0px"); $("#obj86341").css("border-style", "solid"); $("#obj86341").css("border-radius", "10px"); $("#obj86341").css("-webkit-border-radius", "10px"); $("#obj86341").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj86341_droppedInsideTargetActions_2_runningActionsCount = window.obj86341_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj86341_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj86341_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj86341_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj86341_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj86341_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86341_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj86341").trigger("obj86341_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86341) {
				console.warn("de-queueing event obj86341." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86341").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86341_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj86567 
playAudio_86364();
function playAudio_86364() {
	window.obj86341_droppedInsideTargetActions_2_runningActionsCount = obj86341_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj86567")[0];
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
		    window.obj86341_droppedInsideTargetActions_2_runningActionsCount = window.obj86341_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj86341_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj86341_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj86341_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj86341_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj86341_droppedInsideTargetActions_2_runningActionsCount = window.obj86341_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj86341_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj86341_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj86341_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj86341_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj86341_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86341_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj86341").trigger("obj86341_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86341) {
				console.warn("de-queueing event obj86341." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86341").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86341_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_86365();
function switchText_86365() {
	window.obj86341_droppedInsideTargetActions_2_runningActionsCount = obj86341_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj86571_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj86571_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj86571").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj86571_content");
			setTimeout(function () {
				window.obj86341_droppedInsideTargetActions_2_runningActionsCount = window.obj86341_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj86341_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj86341_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj86341_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj86341_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj86571 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj86341_droppedInsideTargetActions_2_runningActionsCount = window.obj86341_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj86341_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj86341_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj86341_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj86341_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj86341_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj86341_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj86341").trigger("obj86341_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86341) {
				console.warn("de-queueing event obj86341." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86341").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86341_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj86341_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86341_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj86341").trigger("obj86341_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86341) {
				console.warn("de-queueing event obj86341." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86341").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86341_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_86346();
function runjs_86346() {
	window.obj86341_droppedInsideTargetActions_runningActionsCount = obj86341_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj86563").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj86341_droppedInsideTargetActions_runningActionsCount = window.obj86341_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj86341_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj86341_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj86341_droppedInsideTargetActions_runningActionsCount == 0) {
	obj86341_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj86341_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86341_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj86341").trigger("obj86341_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86341) {
				console.warn("de-queueing event obj86341." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86341").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86341_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_86350();
function switchText_86350() {
	window.obj86341_droppedInsideTargetActions_runningActionsCount = obj86341_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj86571_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj86571_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj86571").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj86571_content");
			setTimeout(function () {
				window.obj86341_droppedInsideTargetActions_runningActionsCount = window.obj86341_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj86341_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj86341_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj86341_droppedInsideTargetActions_runningActionsCount == 0) {
	obj86341_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj86571 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj86341_droppedInsideTargetActions_runningActionsCount = window.obj86341_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj86341_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj86341_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj86341_droppedInsideTargetActions_runningActionsCount == 0) {
	obj86341_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj86341_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86341_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj86341").trigger("obj86341_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86341) {
				console.warn("de-queueing event obj86341." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86341").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86341_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_86347();
function runjs_86347() {
	window.obj86341_droppedInsideTargetActions_runningActionsCount = obj86341_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj86563").css("border-color", "#058E3F"); $("#obj86563").css("border-width", "2px"); $("#obj86563").css("border-style", "solid"); $("#obj86563").css("border-radius", "10px"); $("#obj86563").css("-webkit-border-radius", "10px"); $("#obj86563").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj86341_droppedInsideTargetActions_runningActionsCount = window.obj86341_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj86341_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj86341_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj86341_droppedInsideTargetActions_runningActionsCount == 0) {
	obj86341_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj86341_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86341_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj86341").trigger("obj86341_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86341) {
				console.warn("de-queueing event obj86341." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86341").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86341_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj86561 
hide_86348();
function hide_86348() {
	var selector = "#obj86561";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj86341_droppedInsideTargetActions_runningActionsCount = obj86341_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj86341_droppedInsideTargetActions_runningActionsCount = window.obj86341_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj86341_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj86341_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj86341_droppedInsideTargetActions_runningActionsCount == 0) {
	obj86341_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_86348(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj86341_droppedInsideTargetActions_runningActionsCount = window.obj86341_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj86341_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj86341_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj86341_droppedInsideTargetActions_runningActionsCount == 0) {
	obj86341_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj86341_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86341_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj86341").trigger("obj86341_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86341) {
				console.warn("de-queueing event obj86341." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86341").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86341_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_86349();
function runjs_86349() {
	window.obj86341_droppedInsideTargetActions_runningActionsCount = obj86341_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj86341").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj86341_droppedInsideTargetActions_runningActionsCount = window.obj86341_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj86341_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj86341_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj86341_droppedInsideTargetActions_runningActionsCount == 0) {
	obj86341_droppedInsideTargetActions_actionGroup5();
}
	}, 1);
}







};
obj86341_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86341_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj86341").trigger("obj86341_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86341) {
				console.warn("de-queueing event obj86341." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86341").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86341_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj86569 
playAudio_86351();
function playAudio_86351() {
	window.obj86341_droppedInsideTargetActions_runningActionsCount = obj86341_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj86569")[0];
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
		    window.obj86341_droppedInsideTargetActions_runningActionsCount = window.obj86341_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj86341_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj86341_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj86341_droppedInsideTargetActions_runningActionsCount == 0) {
	obj86341_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj86341_droppedInsideTargetActions_runningActionsCount = window.obj86341_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj86341_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj86341_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj86341_droppedInsideTargetActions_runningActionsCount == 0) {
	obj86341_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj86341_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86341_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj86341").trigger("obj86341_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86341) {
				console.warn("de-queueing event obj86341." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86341").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86341_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90425();
function switchText_90425() {
	window.obj86341_droppedInsideTargetActions_runningActionsCount = obj86341_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj86571_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj86571_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj86571").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj86571_content");
			setTimeout(function () {
				window.obj86341_droppedInsideTargetActions_runningActionsCount = window.obj86341_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj86341_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj86341_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj86341_droppedInsideTargetActions_runningActionsCount == 0) {
	obj86341_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj86571 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj86341_droppedInsideTargetActions_runningActionsCount = window.obj86341_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj86341_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj86341_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj86341_droppedInsideTargetActions_runningActionsCount == 0) {
	obj86341_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj86341_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj86341_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj86341").trigger("obj86341_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86341) {
				console.warn("de-queueing event obj86341." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86341").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86341_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj86323_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86323_onTap_activeActionGroupIndex = -1;
		$("#obj86323").trigger("obj86323_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86323) {
				console.warn("de-queueing event obj86323." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86323").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86323_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj86323 
hide_86326();
function hide_86326() {
	var selector = "#obj86323";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj86323_onTap_runningActionsCount = obj86323_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj86323_onTap_runningActionsCount = window.obj86323_onTap_runningActionsCount - 1;
if (window.obj86323_onTap_runningActionsCount < 0) {
	window.obj86323_onTap_runningActionsCount = 0;
} else if (window.obj86323_onTap_runningActionsCount == 0) {
	obj86323_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_86326(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj86323_onTap_runningActionsCount = window.obj86323_onTap_runningActionsCount - 1;
if (window.obj86323_onTap_runningActionsCount < 0) {
	window.obj86323_onTap_runningActionsCount = 0;
} else if (window.obj86323_onTap_runningActionsCount == 0) {
	obj86323_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj86313 
stopMovie_86325();
function stopMovie_86325() {
	window.obj86323_onTap_runningActionsCount = obj86323_onTap_runningActionsCount + 1;
	var myVideo = $("#obj86313")[0];
	myVideo.pause();
	window.obj86323_onTap_runningActionsCount = window.obj86323_onTap_runningActionsCount - 1;
if (window.obj86323_onTap_runningActionsCount < 0) {
	window.obj86323_onTap_runningActionsCount = 0;
} else if (window.obj86323_onTap_runningActionsCount == 0) {
	obj86323_onTap_actionGroup1();
}
}
















};
obj86323_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86323_onTap_activeActionGroupIndex = -1;
		$("#obj86323").trigger("obj86323_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86323) {
				console.warn("de-queueing event obj86323." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86323").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86323_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj86315
(function(){
	window.obj86323_onTap_runningActionsCount = obj86323_onTap_runningActionsCount + 1;

	var selector = "#obj86315";
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
					window.obj86323_onTap_runningActionsCount = window.obj86323_onTap_runningActionsCount - 1;
if (window.obj86323_onTap_runningActionsCount < 0) {
	window.obj86323_onTap_runningActionsCount = 0;
} else if (window.obj86323_onTap_runningActionsCount == 0) {
	obj86323_onTap_actionGroup2();
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
				window.obj86323_onTap_runningActionsCount = window.obj86323_onTap_runningActionsCount - 1;
if (window.obj86323_onTap_runningActionsCount < 0) {
	window.obj86323_onTap_runningActionsCount = 0;
} else if (window.obj86323_onTap_runningActionsCount == 0) {
	obj86323_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj86323_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86323_onTap_activeActionGroupIndex = -1;
		$("#obj86323").trigger("obj86323_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86323) {
				console.warn("de-queueing event obj86323." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86323").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86323_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj86313 
move_86328();
function move_86328() {
	window.obj86323_onTap_runningActionsCount = obj86323_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj86313");
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
			window.obj86323_onTap_runningActionsCount = window.obj86323_onTap_runningActionsCount - 1;
if (window.obj86323_onTap_runningActionsCount < 0) {
	window.obj86323_onTap_runningActionsCount = 0;
} else if (window.obj86323_onTap_runningActionsCount == 0) {
	obj86323_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj86323_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj86323_onTap_activeActionGroupIndex = -1;
		$("#obj86323").trigger("obj86323_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86323) {
				console.warn("de-queueing event obj86323." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86323").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86323_onTap_activeActionGroupIndex = 3;
	





















};
obj86315_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86315_onTap_activeActionGroupIndex = -1;
		$("#obj86315").trigger("obj86315_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86315) {
				console.warn("de-queueing event obj86315." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86315").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86315_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj86315 
hide_86318();
function hide_86318() {
	var selector = "#obj86315";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj86315_onTap_runningActionsCount = obj86315_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj86315_onTap_runningActionsCount = window.obj86315_onTap_runningActionsCount - 1;
if (window.obj86315_onTap_runningActionsCount < 0) {
	window.obj86315_onTap_runningActionsCount = 0;
} else if (window.obj86315_onTap_runningActionsCount == 0) {
	obj86315_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_86318(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj86315_onTap_runningActionsCount = window.obj86315_onTap_runningActionsCount - 1;
if (window.obj86315_onTap_runningActionsCount < 0) {
	window.obj86315_onTap_runningActionsCount = 0;
} else if (window.obj86315_onTap_runningActionsCount == 0) {
	obj86315_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj86313 
playPauseMovie_86317();
function playPauseMovie_86317() {
	window.obj86315_onTap_runningActionsCount = obj86315_onTap_runningActionsCount + 1;
	var myVideo = $("#obj86313")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj86315_onTap_runningActionsCount = window.obj86315_onTap_runningActionsCount - 1;
if (window.obj86315_onTap_runningActionsCount < 0) {
	window.obj86315_onTap_runningActionsCount = 0;
} else if (window.obj86315_onTap_runningActionsCount == 0) {
	obj86315_onTap_actionGroup1();
}
}

















};
obj86315_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86315_onTap_activeActionGroupIndex = -1;
		$("#obj86315").trigger("obj86315_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86315) {
				console.warn("de-queueing event obj86315." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86315").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86315_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj86323
(function(){
	window.obj86315_onTap_runningActionsCount = obj86315_onTap_runningActionsCount + 1;

	var selector = "#obj86323";
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
					window.obj86315_onTap_runningActionsCount = window.obj86315_onTap_runningActionsCount - 1;
if (window.obj86315_onTap_runningActionsCount < 0) {
	window.obj86315_onTap_runningActionsCount = 0;
} else if (window.obj86315_onTap_runningActionsCount == 0) {
	obj86315_onTap_actionGroup2();
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
				window.obj86315_onTap_runningActionsCount = window.obj86315_onTap_runningActionsCount - 1;
if (window.obj86315_onTap_runningActionsCount < 0) {
	window.obj86315_onTap_runningActionsCount = 0;
} else if (window.obj86315_onTap_runningActionsCount == 0) {
	obj86315_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj86315_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86315_onTap_activeActionGroupIndex = -1;
		$("#obj86315").trigger("obj86315_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86315) {
				console.warn("de-queueing event obj86315." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86315").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86315_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj86313 
move_86320();
function move_86320() {
	window.obj86315_onTap_runningActionsCount = obj86315_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj86313");
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
			window.obj86315_onTap_runningActionsCount = window.obj86315_onTap_runningActionsCount - 1;
if (window.obj86315_onTap_runningActionsCount < 0) {
	window.obj86315_onTap_runningActionsCount = 0;
} else if (window.obj86315_onTap_runningActionsCount == 0) {
	obj86315_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj86315_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj86315_onTap_activeActionGroupIndex = -1;
		$("#obj86315").trigger("obj86315_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86315) {
				console.warn("de-queueing event obj86315." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86315").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86315_onTap_activeActionGroupIndex = 3;
	





















};
obj88297_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88297_onTap_activeActionGroupIndex = -1;
		$("#obj88297").trigger("obj88297_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88297) {
				console.warn("de-queueing event obj88297." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88297").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88297_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj88302 
stopAudio_88299();
function stopAudio_88299() {
	window.obj88297_onTap_runningActionsCount = obj88297_onTap_runningActionsCount + 1;
	var myAudio = $("#obj88302")[0];
	myAudio.pause();
	window.obj88297_onTap_runningActionsCount = window.obj88297_onTap_runningActionsCount - 1;
if (window.obj88297_onTap_runningActionsCount < 0) {
	window.obj88297_onTap_runningActionsCount = 0;
} else if (window.obj88297_onTap_runningActionsCount == 0) {
	obj88297_onTap_actionGroup1();
}
}








};
obj88297_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88297_onTap_activeActionGroupIndex = -1;
		$("#obj88297").trigger("obj88297_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88297) {
				console.warn("de-queueing event obj88297." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88297").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88297_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj88297 
hide_88300();
function hide_88300() {
	var selector = "#obj88297";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj88297_onTap_runningActionsCount = obj88297_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj88297_onTap_runningActionsCount = window.obj88297_onTap_runningActionsCount - 1;
if (window.obj88297_onTap_runningActionsCount < 0) {
	window.obj88297_onTap_runningActionsCount = 0;
} else if (window.obj88297_onTap_runningActionsCount == 0) {
	obj88297_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_88300(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj88297_onTap_runningActionsCount = window.obj88297_onTap_runningActionsCount - 1;
if (window.obj88297_onTap_runningActionsCount < 0) {
	window.obj88297_onTap_runningActionsCount = 0;
} else if (window.obj88297_onTap_runningActionsCount == 0) {
	obj88297_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj88297_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88297_onTap_activeActionGroupIndex = -1;
		$("#obj88297").trigger("obj88297_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88297) {
				console.warn("de-queueing event obj88297." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88297").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88297_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj88292
(function(){
	window.obj88297_onTap_runningActionsCount = obj88297_onTap_runningActionsCount + 1;

	var selector = "#obj88292";
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
					window.obj88297_onTap_runningActionsCount = window.obj88297_onTap_runningActionsCount - 1;
if (window.obj88297_onTap_runningActionsCount < 0) {
	window.obj88297_onTap_runningActionsCount = 0;
} else if (window.obj88297_onTap_runningActionsCount == 0) {
	obj88297_onTap_actionGroup3();
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
				window.obj88297_onTap_runningActionsCount = window.obj88297_onTap_runningActionsCount - 1;
if (window.obj88297_onTap_runningActionsCount < 0) {
	window.obj88297_onTap_runningActionsCount = 0;
} else if (window.obj88297_onTap_runningActionsCount == 0) {
	obj88297_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj88297_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj88297_onTap_activeActionGroupIndex = -1;
		$("#obj88297").trigger("obj88297_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88297) {
				console.warn("de-queueing event obj88297." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88297").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88297_onTap_activeActionGroupIndex = 3;
	





















};
obj88292_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88292_onTap_activeActionGroupIndex = -1;
		$("#obj88292").trigger("obj88292_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88292) {
				console.warn("de-queueing event obj88292." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88292").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88292_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj88292 
hide_88294();
function hide_88294() {
	var selector = "#obj88292";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj88292_onTap_runningActionsCount = obj88292_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj88292_onTap_runningActionsCount = window.obj88292_onTap_runningActionsCount - 1;
if (window.obj88292_onTap_runningActionsCount < 0) {
	window.obj88292_onTap_runningActionsCount = 0;
} else if (window.obj88292_onTap_runningActionsCount == 0) {
	obj88292_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_88294(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj88292_onTap_runningActionsCount = window.obj88292_onTap_runningActionsCount - 1;
if (window.obj88292_onTap_runningActionsCount < 0) {
	window.obj88292_onTap_runningActionsCount = 0;
} else if (window.obj88292_onTap_runningActionsCount == 0) {
	obj88292_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj88292_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88292_onTap_activeActionGroupIndex = -1;
		$("#obj88292").trigger("obj88292_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88292) {
				console.warn("de-queueing event obj88292." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88292").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88292_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj88297
(function(){
	window.obj88292_onTap_runningActionsCount = obj88292_onTap_runningActionsCount + 1;

	var selector = "#obj88297";
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
					window.obj88292_onTap_runningActionsCount = window.obj88292_onTap_runningActionsCount - 1;
if (window.obj88292_onTap_runningActionsCount < 0) {
	window.obj88292_onTap_runningActionsCount = 0;
} else if (window.obj88292_onTap_runningActionsCount == 0) {
	obj88292_onTap_actionGroup2();
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
				window.obj88292_onTap_runningActionsCount = window.obj88292_onTap_runningActionsCount - 1;
if (window.obj88292_onTap_runningActionsCount < 0) {
	window.obj88292_onTap_runningActionsCount = 0;
} else if (window.obj88292_onTap_runningActionsCount == 0) {
	obj88292_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj88292_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88292_onTap_activeActionGroupIndex = -1;
		$("#obj88292").trigger("obj88292_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88292) {
				console.warn("de-queueing event obj88292." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88292").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88292_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj88302 
playAudio_88296();
function playAudio_88296() {
	window.obj88292_onTap_runningActionsCount = obj88292_onTap_runningActionsCount + 1;
	var myAudio = $("#obj88302")[0];
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
		    window.obj88292_onTap_runningActionsCount = window.obj88292_onTap_runningActionsCount - 1;
if (window.obj88292_onTap_runningActionsCount < 0) {
	window.obj88292_onTap_runningActionsCount = 0;
} else if (window.obj88292_onTap_runningActionsCount == 0) {
	obj88292_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj88292_onTap_runningActionsCount = window.obj88292_onTap_runningActionsCount - 1;
if (window.obj88292_onTap_runningActionsCount < 0) {
	window.obj88292_onTap_runningActionsCount = 0;
} else if (window.obj88292_onTap_runningActionsCount == 0) {
	obj88292_onTap_actionGroup3();
}
	}
}









};
obj88292_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj88292_onTap_activeActionGroupIndex = -1;
		$("#obj88292").trigger("obj88292_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88292) {
				console.warn("de-queueing event obj88292." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88292").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88292_onTap_activeActionGroupIndex = 3;
	





















};
obj95844_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj95844_onTap_activeActionGroupIndex = -1;
		$("#obj95844").trigger("obj95844_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 95844) {
				console.warn("de-queueing event obj95844." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj95844").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj95844_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_95846();
function goToPage_95846() {
	window.obj95844_onTap_runningActionsCount = obj95844_onTap_runningActionsCount + 1;
	$("#anchor719")[0].click();
	window.obj95844_onTap_runningActionsCount = window.obj95844_onTap_runningActionsCount - 1;
if (window.obj95844_onTap_runningActionsCount < 0) {
	window.obj95844_onTap_runningActionsCount = 0;
} else if (window.obj95844_onTap_runningActionsCount == 0) {
	obj95844_onTap_actionGroup1();
}
}





















};
obj95844_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj95844_onTap_activeActionGroupIndex = -1;
		$("#obj95844").trigger("obj95844_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 95844) {
				console.warn("de-queueing event obj95844." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj95844").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj95844_onTap_activeActionGroupIndex = 1;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj86620: Event Touch Down
 *
 */
$("#obj86620").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj86620_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj86620_onTap is still running");
	return;
}
var obj86620_onTap_runningActionsCount = 0;
var obj86620_onTap_loopCount = 0;
obj86620_onTap_actionGroup0();
});










/*
 *
 *   obj86617: Event Touch Down
 *
 */
$("#obj86617").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj86617_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj86617_onTap is still running");
	return;
}
var obj86617_onTap_runningActionsCount = 0;
var obj86617_onTap_loopCount = 0;
obj86617_onTap_actionGroup0();
});











































































































































































































































































































































/*
 *
 *   obj86500: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj86500");
	var winTarget = document.getElementById("obj86500");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj86500").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj86500_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj86500_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj86500_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj86500_onTouchDown is still running");
	return;
}
var obj86500_onTouchDown_runningActionsCount = 0;
var obj86500_onTouchDown_loopCount = 0;
obj86500_onTouchDown_actionGroup0();
});



/*
 *
 *   obj86500: Event SCActionDragDrop86503_droppedOutsideTargetActions
 *
 */
$("#obj86500").bind("SCActionDragDrop86503_droppedOutsideTargetActions", function(event) {
	if (window.obj86500_SCActionDragDrop86503_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj86500_SCActionDragDrop86503_droppedOutsideTargetActions is still running");
	return;
}
var obj86500_SCActionDragDrop86503_droppedOutsideTargetActions_runningActionsCount = 0;
var obj86500_SCActionDragDrop86503_droppedOutsideTargetActions_loopCount = 0;
obj86500_SCActionDragDrop86503_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj86500: Event droppedInsideTargetActions_4
 *
 */
$("#obj86500").bind("droppedInsideTargetActions_4", function(event) {
	if (window.obj86500_droppedInsideTargetActions_4_activeActionGroupIndex != -1) {
	console.warn("action list window.obj86500_droppedInsideTargetActions_4 is still running");
	return;
}
var obj86500_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj86500_droppedInsideTargetActions_4_loopCount = 0;
obj86500_droppedInsideTargetActions_4_actionGroup0();
});
/*
 *
 *   obj86500: Event droppedInsideTargetActions_3
 *
 */
$("#obj86500").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj86500_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj86500_droppedInsideTargetActions_3 is still running");
	return;
}
var obj86500_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj86500_droppedInsideTargetActions_3_loopCount = 0;
obj86500_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj86500: Event droppedInsideTargetActions_2
 *
 */
$("#obj86500").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj86500_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj86500_droppedInsideTargetActions_2 is still running");
	return;
}
var obj86500_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj86500_droppedInsideTargetActions_2_loopCount = 0;
obj86500_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj86500: Event droppedInsideTargetActions
 *
 */
$("#obj86500").bind("droppedInsideTargetActions", function(event) {
	if (window.obj86500_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj86500_droppedInsideTargetActions is still running");
	return;
}
var obj86500_droppedInsideTargetActions_runningActionsCount = 0;
var obj86500_droppedInsideTargetActions_loopCount = 0;
obj86500_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj86447: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj86447");
	var winTarget = document.getElementById("obj86447");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj86447").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj86447_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj86447_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj86447_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj86447_onTouchDown is still running");
	return;
}
var obj86447_onTouchDown_runningActionsCount = 0;
var obj86447_onTouchDown_loopCount = 0;
obj86447_onTouchDown_actionGroup0();
});



/*
 *
 *   obj86447: Event SCActionDragDrop86450_droppedOutsideTargetActions
 *
 */
$("#obj86447").bind("SCActionDragDrop86450_droppedOutsideTargetActions", function(event) {
	if (window.obj86447_SCActionDragDrop86450_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj86447_SCActionDragDrop86450_droppedOutsideTargetActions is still running");
	return;
}
var obj86447_SCActionDragDrop86450_droppedOutsideTargetActions_runningActionsCount = 0;
var obj86447_SCActionDragDrop86450_droppedOutsideTargetActions_loopCount = 0;
obj86447_SCActionDragDrop86450_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj86447: Event droppedInsideTargetActions_4
 *
 */
$("#obj86447").bind("droppedInsideTargetActions_4", function(event) {
	if (window.obj86447_droppedInsideTargetActions_4_activeActionGroupIndex != -1) {
	console.warn("action list window.obj86447_droppedInsideTargetActions_4 is still running");
	return;
}
var obj86447_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj86447_droppedInsideTargetActions_4_loopCount = 0;
obj86447_droppedInsideTargetActions_4_actionGroup0();
});
/*
 *
 *   obj86447: Event droppedInsideTargetActions_3
 *
 */
$("#obj86447").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj86447_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj86447_droppedInsideTargetActions_3 is still running");
	return;
}
var obj86447_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj86447_droppedInsideTargetActions_3_loopCount = 0;
obj86447_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj86447: Event droppedInsideTargetActions_2
 *
 */
$("#obj86447").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj86447_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj86447_droppedInsideTargetActions_2 is still running");
	return;
}
var obj86447_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj86447_droppedInsideTargetActions_2_loopCount = 0;
obj86447_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj86447: Event droppedInsideTargetActions
 *
 */
$("#obj86447").bind("droppedInsideTargetActions", function(event) {
	if (window.obj86447_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj86447_droppedInsideTargetActions is still running");
	return;
}
var obj86447_droppedInsideTargetActions_runningActionsCount = 0;
var obj86447_droppedInsideTargetActions_loopCount = 0;
obj86447_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj86394: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj86394");
	var winTarget = document.getElementById("obj86394");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj86394").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj86394_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj86394_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj86394_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj86394_onTouchDown is still running");
	return;
}
var obj86394_onTouchDown_runningActionsCount = 0;
var obj86394_onTouchDown_loopCount = 0;
obj86394_onTouchDown_actionGroup0();
});



/*
 *
 *   obj86394: Event SCActionDragDrop86397_droppedOutsideTargetActions
 *
 */
$("#obj86394").bind("SCActionDragDrop86397_droppedOutsideTargetActions", function(event) {
	if (window.obj86394_SCActionDragDrop86397_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj86394_SCActionDragDrop86397_droppedOutsideTargetActions is still running");
	return;
}
var obj86394_SCActionDragDrop86397_droppedOutsideTargetActions_runningActionsCount = 0;
var obj86394_SCActionDragDrop86397_droppedOutsideTargetActions_loopCount = 0;
obj86394_SCActionDragDrop86397_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj86394: Event droppedInsideTargetActions_4
 *
 */
$("#obj86394").bind("droppedInsideTargetActions_4", function(event) {
	if (window.obj86394_droppedInsideTargetActions_4_activeActionGroupIndex != -1) {
	console.warn("action list window.obj86394_droppedInsideTargetActions_4 is still running");
	return;
}
var obj86394_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj86394_droppedInsideTargetActions_4_loopCount = 0;
obj86394_droppedInsideTargetActions_4_actionGroup0();
});
/*
 *
 *   obj86394: Event droppedInsideTargetActions_3
 *
 */
$("#obj86394").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj86394_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj86394_droppedInsideTargetActions_3 is still running");
	return;
}
var obj86394_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj86394_droppedInsideTargetActions_3_loopCount = 0;
obj86394_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj86394: Event droppedInsideTargetActions_2
 *
 */
$("#obj86394").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj86394_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj86394_droppedInsideTargetActions_2 is still running");
	return;
}
var obj86394_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj86394_droppedInsideTargetActions_2_loopCount = 0;
obj86394_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj86394: Event droppedInsideTargetActions
 *
 */
$("#obj86394").bind("droppedInsideTargetActions", function(event) {
	if (window.obj86394_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj86394_droppedInsideTargetActions is still running");
	return;
}
var obj86394_droppedInsideTargetActions_runningActionsCount = 0;
var obj86394_droppedInsideTargetActions_loopCount = 0;
obj86394_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj86341: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj86341");
	var winTarget = document.getElementById("obj86341");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj86341").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj86341_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj86341_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj86341_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj86341_onTouchDown is still running");
	return;
}
var obj86341_onTouchDown_runningActionsCount = 0;
var obj86341_onTouchDown_loopCount = 0;
obj86341_onTouchDown_actionGroup0();
});



/*
 *
 *   obj86341: Event SCActionDragDrop86344_droppedOutsideTargetActions
 *
 */
$("#obj86341").bind("SCActionDragDrop86344_droppedOutsideTargetActions", function(event) {
	if (window.obj86341_SCActionDragDrop86344_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj86341_SCActionDragDrop86344_droppedOutsideTargetActions is still running");
	return;
}
var obj86341_SCActionDragDrop86344_droppedOutsideTargetActions_runningActionsCount = 0;
var obj86341_SCActionDragDrop86344_droppedOutsideTargetActions_loopCount = 0;
obj86341_SCActionDragDrop86344_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj86341: Event droppedInsideTargetActions_4
 *
 */
$("#obj86341").bind("droppedInsideTargetActions_4", function(event) {
	if (window.obj86341_droppedInsideTargetActions_4_activeActionGroupIndex != -1) {
	console.warn("action list window.obj86341_droppedInsideTargetActions_4 is still running");
	return;
}
var obj86341_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj86341_droppedInsideTargetActions_4_loopCount = 0;
obj86341_droppedInsideTargetActions_4_actionGroup0();
});
/*
 *
 *   obj86341: Event droppedInsideTargetActions_3
 *
 */
$("#obj86341").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj86341_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj86341_droppedInsideTargetActions_3 is still running");
	return;
}
var obj86341_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj86341_droppedInsideTargetActions_3_loopCount = 0;
obj86341_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj86341: Event droppedInsideTargetActions_2
 *
 */
$("#obj86341").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj86341_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj86341_droppedInsideTargetActions_2 is still running");
	return;
}
var obj86341_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj86341_droppedInsideTargetActions_2_loopCount = 0;
obj86341_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj86341: Event droppedInsideTargetActions
 *
 */
$("#obj86341").bind("droppedInsideTargetActions", function(event) {
	if (window.obj86341_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj86341_droppedInsideTargetActions is still running");
	return;
}
var obj86341_droppedInsideTargetActions_runningActionsCount = 0;
var obj86341_droppedInsideTargetActions_loopCount = 0;
obj86341_droppedInsideTargetActions_actionGroup0();
});





/*
 *
 *   obj86323: Event Touch Down
 *
 */
$("#obj86323").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj86323_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj86323_onTap is still running");
	return;
}
var obj86323_onTap_runningActionsCount = 0;
var obj86323_onTap_loopCount = 0;
obj86323_onTap_actionGroup0();
});










/*
 *
 *   obj86315: Event Touch Down
 *
 */
$("#obj86315").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj86315_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj86315_onTap is still running");
	return;
}
var obj86315_onTap_runningActionsCount = 0;
var obj86315_onTap_loopCount = 0;
obj86315_onTap_actionGroup0();
});










/*
 *
 *   obj88297: Event Touch Down
 *
 */
$("#obj88297").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj88297_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj88297_onTap is still running");
	return;
}
var obj88297_onTap_runningActionsCount = 0;
var obj88297_onTap_loopCount = 0;
obj88297_onTap_actionGroup0();
});










/*
 *
 *   obj88292: Event Touch Down
 *
 */
$("#obj88292").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj88292_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj88292_onTap is still running");
	return;
}
var obj88292_onTap_runningActionsCount = 0;
var obj88292_onTap_loopCount = 0;
obj88292_onTap_actionGroup0();
});






























/*
 *
 *   obj95844: Event Touch Down
 *
 */
$("#obj95844").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj95844_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj95844_onTap is still running");
	return;
}
var obj95844_onTap_runningActionsCount = 0;
var obj95844_onTap_loopCount = 0;
obj95844_onTap_actionGroup0();
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
	
$("#obj86623").trigger('SCEventShow');
$("#obj86620").trigger('SCEventShow');
$("#obj86617").trigger('SCEventShow');
$("#obj86615").trigger('SCEventShow');
$("#obj86613").trigger('SCEventShow');
$("#obj86611").trigger('SCEventShow');
$("#obj86609").trigger('SCEventShow');
$("#obj86607").trigger('SCEventShow');
$("#obj86605").trigger('SCEventShow');
$("#obj86603").trigger('SCEventShow');
$("#obj86601").trigger('SCEventShow');
$("#obj86599").trigger('SCEventShow');
$("#obj86597").trigger('SCEventShow');
$("#obj86595").trigger('SCEventShow');
$("#obj86593").trigger('SCEventShow');
$("#obj86591").trigger('SCEventShow');
$("#obj86589").trigger('SCEventShow');
$("#obj86587").trigger('SCEventShow');
$("#obj86585").trigger('SCEventShow');
$("#obj86583").trigger('SCEventShow');
$("#obj86581").trigger('SCEventShow');
$("#obj86579").trigger('SCEventShow');
$("#obj86577").trigger('SCEventShow');
$("#obj86575").trigger('SCEventShow');
$("#obj86573").trigger('SCEventShow');
$("#obj86571").trigger('SCEventShow');
$("#obj86569").trigger('SCEventShow');
$("#obj86567").trigger('SCEventShow');
$("#obj86565").trigger('SCEventShow');
$("#obj86563").trigger('SCEventShow');
$("#obj86561").trigger('SCEventShow');
$("#obj86559").trigger('SCEventShow');
$("#obj86557").trigger('SCEventShow');
$("#obj86555").trigger('SCEventShow');
$("#obj86553").trigger('SCEventShow');
$("#obj86500").trigger('SCEventShow');
$("#obj86447").trigger('SCEventShow');
$("#obj86394").trigger('SCEventShow');
$("#obj86341").trigger('SCEventShow');
$("#obj86323").trigger('SCEventShow');
$("#obj86315").trigger('SCEventShow');
$("#obj88297").trigger('SCEventShow');
$("#obj88292").trigger('SCEventShow');
$("#obj88302").trigger('SCEventShow');
$("#obj94867").trigger('SCEventShow');
$("#obj95844").trigger('SCEventShow');
$("#obj86313").trigger('SCEventShow');
	
});