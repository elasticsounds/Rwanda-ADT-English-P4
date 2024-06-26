pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 29545;
pubcoder.page.title = pubcoder.page.title || "108";
pubcoder.page.number = pubcoder.page.number || 108;
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
var obj83877_onTap_activeActionGroupIndex = -1;
var obj83877_onTap_runningActionsCount = 0;
var obj83877_onTap_loopCount = 0;
var obj83874_onTap_activeActionGroupIndex = -1;
var obj83874_onTap_runningActionsCount = 0;
var obj83874_onTap_loopCount = 0;
var obj83870_onTap_activeActionGroupIndex = -1;
var obj83870_onTap_runningActionsCount = 0;
var obj83870_onTap_loopCount = 0;
var obj83802_onDrag_activeActionGroupIndex = -1;
var obj83802_onDrag_runningActionsCount = 0;
var obj83802_onDrag_loopCount = 0;
var obj83802_onTouchDown_activeActionGroupIndex = -1;
var obj83802_onTouchDown_runningActionsCount = 0;
var obj83802_onTouchDown_loopCount = 0;
var obj83802_SCActionDragDrop83805_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj83802_SCActionDragDrop83805_droppedOutsideTargetActions_runningActionsCount = 0;
var obj83802_SCActionDragDrop83805_droppedOutsideTargetActions_loopCount = 0;
var obj83802_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj83802_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj83802_droppedInsideTargetActions_3_loopCount = 0;
var obj83802_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj83802_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj83802_droppedInsideTargetActions_2_loopCount = 0;
var obj83802_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj83802_droppedInsideTargetActions_runningActionsCount = 0;
var obj83802_droppedInsideTargetActions_loopCount = 0;
var obj83756_onDrag_activeActionGroupIndex = -1;
var obj83756_onDrag_runningActionsCount = 0;
var obj83756_onDrag_loopCount = 0;
var obj83756_onTouchDown_activeActionGroupIndex = -1;
var obj83756_onTouchDown_runningActionsCount = 0;
var obj83756_onTouchDown_loopCount = 0;
var obj83756_SCActionDragDrop83759_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj83756_SCActionDragDrop83759_droppedOutsideTargetActions_runningActionsCount = 0;
var obj83756_SCActionDragDrop83759_droppedOutsideTargetActions_loopCount = 0;
var obj83756_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj83756_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj83756_droppedInsideTargetActions_3_loopCount = 0;
var obj83756_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj83756_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj83756_droppedInsideTargetActions_2_loopCount = 0;
var obj83756_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj83756_droppedInsideTargetActions_runningActionsCount = 0;
var obj83756_droppedInsideTargetActions_loopCount = 0;
var obj83716_onDrag_activeActionGroupIndex = -1;
var obj83716_onDrag_runningActionsCount = 0;
var obj83716_onDrag_loopCount = 0;
var obj83716_onTouchDown_activeActionGroupIndex = -1;
var obj83716_onTouchDown_runningActionsCount = 0;
var obj83716_onTouchDown_loopCount = 0;
var obj83716_SCActionDragDrop83719_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj83716_SCActionDragDrop83719_droppedOutsideTargetActions_runningActionsCount = 0;
var obj83716_SCActionDragDrop83719_droppedOutsideTargetActions_loopCount = 0;
var obj83716_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj83716_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj83716_droppedInsideTargetActions_3_loopCount = 0;
var obj83716_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj83716_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj83716_droppedInsideTargetActions_2_loopCount = 0;
var obj83716_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj83716_droppedInsideTargetActions_runningActionsCount = 0;
var obj83716_droppedInsideTargetActions_loopCount = 0;
var obj83694_onTap_activeActionGroupIndex = -1;
var obj83694_onTap_runningActionsCount = 0;
var obj83694_onTap_loopCount = 0;
var obj83686_onTap_activeActionGroupIndex = -1;
var obj83686_onTap_runningActionsCount = 0;
var obj83686_onTap_loopCount = 0;
var obj88165_onTap_activeActionGroupIndex = -1;
var obj88165_onTap_runningActionsCount = 0;
var obj88165_onTap_loopCount = 0;
var obj88160_onTap_activeActionGroupIndex = -1;
var obj88160_onTap_runningActionsCount = 0;
var obj88160_onTap_loopCount = 0;
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
		
obj83877_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83877_onTap_activeActionGroupIndex = -1;
		$("#obj83877").trigger("obj83877_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83877) {
				console.warn("de-queueing event obj83877." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83877").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83877_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_83879();
function goToPage_83879() {
	window.obj83877_onTap_runningActionsCount = obj83877_onTap_runningActionsCount + 1;
	$("#anchor645")[0].click();
	window.obj83877_onTap_runningActionsCount = window.obj83877_onTap_runningActionsCount - 1;
if (window.obj83877_onTap_runningActionsCount < 0) {
	window.obj83877_onTap_runningActionsCount = 0;
} else if (window.obj83877_onTap_runningActionsCount == 0) {
	obj83877_onTap_actionGroup1();
}
}





















};
obj83877_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj83877_onTap_activeActionGroupIndex = -1;
		$("#obj83877").trigger("obj83877_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83877) {
				console.warn("de-queueing event obj83877." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83877").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83877_onTap_activeActionGroupIndex = 1;
	





















};
obj83874_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83874_onTap_activeActionGroupIndex = -1;
		$("#obj83874").trigger("obj83874_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83874) {
				console.warn("de-queueing event obj83874." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83874").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83874_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_83876();
function goToPage_83876() {
	window.obj83874_onTap_runningActionsCount = obj83874_onTap_runningActionsCount + 1;
	$("#anchor646")[0].click();
	window.obj83874_onTap_runningActionsCount = window.obj83874_onTap_runningActionsCount - 1;
if (window.obj83874_onTap_runningActionsCount < 0) {
	window.obj83874_onTap_runningActionsCount = 0;
} else if (window.obj83874_onTap_runningActionsCount == 0) {
	obj83874_onTap_actionGroup1();
}
}





















};
obj83874_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj83874_onTap_activeActionGroupIndex = -1;
		$("#obj83874").trigger("obj83874_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83874) {
				console.warn("de-queueing event obj83874." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83874").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83874_onTap_activeActionGroupIndex = 1;
	





















};
obj83870_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83870_onTap_activeActionGroupIndex = -1;
		$("#obj83870").trigger("obj83870_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83870) {
				console.warn("de-queueing event obj83870." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83870").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83870_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_83872();
function goToPage_83872() {
	window.obj83870_onTap_runningActionsCount = obj83870_onTap_runningActionsCount + 1;
	$("#anchor647")[0].click();
	window.obj83870_onTap_runningActionsCount = window.obj83870_onTap_runningActionsCount - 1;
if (window.obj83870_onTap_runningActionsCount < 0) {
	window.obj83870_onTap_runningActionsCount = 0;
} else if (window.obj83870_onTap_runningActionsCount == 0) {
	obj83870_onTap_actionGroup1();
}
}





















};
obj83870_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj83870_onTap_activeActionGroupIndex = -1;
		$("#obj83870").trigger("obj83870_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83870) {
				console.warn("de-queueing event obj83870." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83870").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83870_onTap_activeActionGroupIndex = 1;
	





















};
obj83802_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83802_onTouchDown_activeActionGroupIndex = -1;
		$("#obj83802").trigger("obj83802_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83802) {
				console.warn("de-queueing event obj83802." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83802").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83802_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj83802");
//	action: dragDrop
//	target: obj83802 
dragDrop_83805();
function dragDrop_83805() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj83802_onTouchDown_runningActionsCount = obj83802_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj83802');
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
	  	containerNode = $('#obj83860');
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
    	window.obj83802_onTouchDown_runningActionsCount = window.obj83802_onTouchDown_runningActionsCount - 1;
if (window.obj83802_onTouchDown_runningActionsCount < 0) {
	window.obj83802_onTouchDown_runningActionsCount = 0;
} else if (window.obj83802_onTouchDown_runningActionsCount == 0) {
	obj83802_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj83854","#obj83858","#obj83856");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_83805 = false;
    	var dropped_id_83805;
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
					dropped_83805 = true;
					dropped_id_83805 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_83805) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj83802").trigger('SCActionDragDrop83805_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj83802_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj83802_onTouchDown_activeActionGroupIndex = -1;
		$("#obj83802").trigger("obj83802_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83802) {
				console.warn("de-queueing event obj83802." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83802").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83802_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj83802_SCActionDragDrop83805_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83802_SCActionDragDrop83805_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj83802").trigger("obj83802_SCActionDragDrop83805_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83802) {
				console.warn("de-queueing event obj83802." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83802").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83802_SCActionDragDrop83805_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj83802 
move_92475();
function move_92475() {
	window.obj83802_SCActionDragDrop83805_droppedOutsideTargetActions_runningActionsCount = obj83802_SCActionDragDrop83805_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj83802");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 394;
	var moveY = 567;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj83802_SCActionDragDrop83805_droppedOutsideTargetActions_runningActionsCount = window.obj83802_SCActionDragDrop83805_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj83802_SCActionDragDrop83805_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj83802_SCActionDragDrop83805_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj83802_SCActionDragDrop83805_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj83802_SCActionDragDrop83805_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj83802_SCActionDragDrop83805_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj83802_SCActionDragDrop83805_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj83802").trigger("obj83802_SCActionDragDrop83805_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83802) {
				console.warn("de-queueing event obj83802." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83802").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83802_SCActionDragDrop83805_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj83802_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83802_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj83802").trigger("obj83802_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83802) {
				console.warn("de-queueing event obj83802." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83802").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83802_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_83823();
function runjs_83823() {
	window.obj83802_droppedInsideTargetActions_3_runningActionsCount = obj83802_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj83856").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj83802_droppedInsideTargetActions_3_runningActionsCount = window.obj83802_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj83802_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj83802_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj83802_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj83802_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj83802_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83802_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj83802").trigger("obj83802_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83802) {
				console.warn("de-queueing event obj83802." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83802").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83802_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_83824();
function runjs_83824() {
	window.obj83802_droppedInsideTargetActions_3_runningActionsCount = obj83802_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj83856").css("border-color", "#C00000"); $("#obj83856").css("border-width", "2px"); $("#obj83856").css("border-style", "solid"); $("#obj83856").css("border-radius", "10px"); $("#obj83856").css("-webkit-border-radius", "10px"); $("#obj83856").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj83802_droppedInsideTargetActions_3_runningActionsCount = window.obj83802_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj83802_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj83802_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj83802_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj83802_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj83802_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83802_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj83802").trigger("obj83802_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83802) {
				console.warn("de-queueing event obj83802." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83802").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83802_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	















//	action: Switch Text
switchText_83825();
function switchText_83825() {
	window.obj83802_droppedInsideTargetActions_3_runningActionsCount = obj83802_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj83800_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj83800_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj83800").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj83800_content");
			setTimeout(function () {
				window.obj83802_droppedInsideTargetActions_3_runningActionsCount = window.obj83802_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj83802_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj83802_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj83802_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj83802_droppedInsideTargetActions_3_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj83800 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj83802_droppedInsideTargetActions_3_runningActionsCount = window.obj83802_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj83802_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj83802_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj83802_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj83802_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
	}
}






};
obj83802_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83802_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj83802").trigger("obj83802_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83802) {
				console.warn("de-queueing event obj83802." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83802").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83802_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	


//	action: move
//	target: obj83802 
move_83826();
function move_83826() {
	window.obj83802_droppedInsideTargetActions_3_runningActionsCount = obj83802_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj83802");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 394;
	var moveY = 567;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj83802_droppedInsideTargetActions_3_runningActionsCount = window.obj83802_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj83802_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj83802_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj83802_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj83802_droppedInsideTargetActions_3_actionGroup4();
}
		}, 1);
	});
}



















};
obj83802_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83802_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj83802").trigger("obj83802_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83802) {
				console.warn("de-queueing event obj83802." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83802").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83802_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_83827();
function runjs_83827() {
	window.obj83802_droppedInsideTargetActions_3_runningActionsCount = obj83802_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj83856").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj83802_droppedInsideTargetActions_3_runningActionsCount = window.obj83802_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj83802_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj83802_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj83802_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj83802_droppedInsideTargetActions_3_actionGroup5();
}
	}, 1);
}







};
obj83802_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83802_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj83802").trigger("obj83802_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83802) {
				console.warn("de-queueing event obj83802." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83802").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83802_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	















//	action: Run JavaScript
runjs_83828();
function runjs_83828() {
	window.obj83802_droppedInsideTargetActions_3_runningActionsCount = obj83802_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj83856").css("border-color", "#000000"); $("#obj83856").css("border-width", "1px"); $("#obj83856").css("border-style", "solid"); $("#obj83856").css("border-radius", "15px"); $("#obj83856").css("-webkit-border-radius", "15px"); $("#obj83856").css("-moz-border-radius", "15px");
	
	setTimeout(function() {
		window.obj83802_droppedInsideTargetActions_3_runningActionsCount = window.obj83802_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj83802_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj83802_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj83802_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj83802_droppedInsideTargetActions_3_actionGroup6();
}
	}, 1);
}







};
obj83802_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83802_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj83802").trigger("obj83802_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83802) {
				console.warn("de-queueing event obj83802." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83802").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83802_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_83829();
function runjs_83829() {
	window.obj83802_droppedInsideTargetActions_3_runningActionsCount = obj83802_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj83802").css("border-color", "rgba(0,0,0,0)"); $("#obj83802").css("border-width", "0px"); $("#obj83802").css("border-style", "solid"); $("#obj83802").css("border-radius", "20px"); $("#obj83802").css("-webkit-border-radius", "20px"); $("#obj83802").css("-moz-border-radius", "20px"); $("#obj83802_img").css("top", "0px").css("left", "0px");
	
	setTimeout(function() {
		window.obj83802_droppedInsideTargetActions_3_runningActionsCount = window.obj83802_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj83802_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj83802_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj83802_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj83802_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj83802_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83802_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj83802").trigger("obj83802_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83802) {
				console.warn("de-queueing event obj83802." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83802").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83802_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Switch Text
switchText_83830();
function switchText_83830() {
	window.obj83802_droppedInsideTargetActions_3_runningActionsCount = obj83802_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj83800_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj83800_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj83800").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj83800_content");
			setTimeout(function () {
				window.obj83802_droppedInsideTargetActions_3_runningActionsCount = window.obj83802_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj83802_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj83802_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj83802_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj83802_droppedInsideTargetActions_3_actionGroup8();
}
			}, 1);
		});
	} else {
		$("#obj83800 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj83802_droppedInsideTargetActions_3_runningActionsCount = window.obj83802_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj83802_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj83802_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj83802_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj83802_droppedInsideTargetActions_3_actionGroup8();
}
		}, 1);
	}
}






};
obj83802_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83802_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj83802").trigger("obj83802_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83802) {
				console.warn("de-queueing event obj83802." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83802").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83802_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	












//	action: playAudio
//	target: obj83799 
playAudio_83831();
function playAudio_83831() {
	window.obj83802_droppedInsideTargetActions_3_runningActionsCount = obj83802_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj83799")[0];
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
		    window.obj83802_droppedInsideTargetActions_3_runningActionsCount = window.obj83802_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj83802_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj83802_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj83802_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj83802_droppedInsideTargetActions_3_actionGroup9();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj83802_droppedInsideTargetActions_3_runningActionsCount = window.obj83802_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj83802_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj83802_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj83802_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj83802_droppedInsideTargetActions_3_actionGroup9();
}
	}
}









};
obj83802_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj83802_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj83802").trigger("obj83802_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83802) {
				console.warn("de-queueing event obj83802." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83802").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83802_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	





















};
obj83802_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83802_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj83802").trigger("obj83802_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83802) {
				console.warn("de-queueing event obj83802." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83802").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83802_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_83813();
function runjs_83813() {
	window.obj83802_droppedInsideTargetActions_2_runningActionsCount = obj83802_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj83858").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj83802_droppedInsideTargetActions_2_runningActionsCount = window.obj83802_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj83802_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj83802_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj83802_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj83802_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj83802_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83802_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj83802").trigger("obj83802_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83802) {
				console.warn("de-queueing event obj83802." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83802").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83802_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_83814();
function runjs_83814() {
	window.obj83802_droppedInsideTargetActions_2_runningActionsCount = obj83802_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj83858").css("border-color", "#C00000"); $("#obj83858").css("border-width", "2px"); $("#obj83858").css("border-style", "solid"); $("#obj83858").css("border-radius", "10px"); $("#obj83858").css("-webkit-border-radius", "10px"); $("#obj83858").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj83802_droppedInsideTargetActions_2_runningActionsCount = window.obj83802_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj83802_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj83802_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj83802_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj83802_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj83802_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83802_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj83802").trigger("obj83802_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83802) {
				console.warn("de-queueing event obj83802." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83802").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83802_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	















//	action: Switch Text
switchText_83815();
function switchText_83815() {
	window.obj83802_droppedInsideTargetActions_2_runningActionsCount = obj83802_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj83800_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj83800_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj83800").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj83800_content");
			setTimeout(function () {
				window.obj83802_droppedInsideTargetActions_2_runningActionsCount = window.obj83802_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj83802_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj83802_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj83802_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj83802_droppedInsideTargetActions_2_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj83800 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj83802_droppedInsideTargetActions_2_runningActionsCount = window.obj83802_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj83802_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj83802_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj83802_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj83802_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
	}
}






};
obj83802_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83802_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj83802").trigger("obj83802_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83802) {
				console.warn("de-queueing event obj83802." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83802").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83802_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	


//	action: move
//	target: obj83802 
move_83816();
function move_83816() {
	window.obj83802_droppedInsideTargetActions_2_runningActionsCount = obj83802_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj83802");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 394;
	var moveY = 567;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj83802_droppedInsideTargetActions_2_runningActionsCount = window.obj83802_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj83802_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj83802_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj83802_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj83802_droppedInsideTargetActions_2_actionGroup4();
}
		}, 1);
	});
}



















};
obj83802_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83802_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj83802").trigger("obj83802_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83802) {
				console.warn("de-queueing event obj83802." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83802").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83802_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_83817();
function runjs_83817() {
	window.obj83802_droppedInsideTargetActions_2_runningActionsCount = obj83802_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj83858").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj83802_droppedInsideTargetActions_2_runningActionsCount = window.obj83802_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj83802_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj83802_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj83802_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj83802_droppedInsideTargetActions_2_actionGroup5();
}
	}, 1);
}







};
obj83802_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83802_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj83802").trigger("obj83802_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83802) {
				console.warn("de-queueing event obj83802." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83802").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83802_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	















//	action: Run JavaScript
runjs_83818();
function runjs_83818() {
	window.obj83802_droppedInsideTargetActions_2_runningActionsCount = obj83802_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj83858").css("border-color", "#000000"); $("#obj83858").css("border-width", "1px"); $("#obj83858").css("border-style", "solid"); $("#obj83858").css("border-radius", "15px"); $("#obj83858").css("-webkit-border-radius", "15px"); $("#obj83858").css("-moz-border-radius", "15px");
	
	setTimeout(function() {
		window.obj83802_droppedInsideTargetActions_2_runningActionsCount = window.obj83802_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj83802_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj83802_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj83802_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj83802_droppedInsideTargetActions_2_actionGroup6();
}
	}, 1);
}







};
obj83802_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83802_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj83802").trigger("obj83802_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83802) {
				console.warn("de-queueing event obj83802." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83802").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83802_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_83819();
function runjs_83819() {
	window.obj83802_droppedInsideTargetActions_2_runningActionsCount = obj83802_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj83802").css("border-color", "rgba(0,0,0,0)"); $("#obj83802").css("border-width", "0px"); $("#obj83802").css("border-style", "solid"); $("#obj83802").css("border-radius", "20px"); $("#obj83802").css("-webkit-border-radius", "20px"); $("#obj83802").css("-moz-border-radius", "20px"); $("#obj83802_img").css("top", "0px").css("left", "0px");
	
	setTimeout(function() {
		window.obj83802_droppedInsideTargetActions_2_runningActionsCount = window.obj83802_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj83802_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj83802_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj83802_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj83802_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj83802_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83802_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj83802").trigger("obj83802_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83802) {
				console.warn("de-queueing event obj83802." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83802").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83802_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Switch Text
switchText_83820();
function switchText_83820() {
	window.obj83802_droppedInsideTargetActions_2_runningActionsCount = obj83802_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj83800_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj83800_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj83800").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj83800_content");
			setTimeout(function () {
				window.obj83802_droppedInsideTargetActions_2_runningActionsCount = window.obj83802_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj83802_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj83802_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj83802_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj83802_droppedInsideTargetActions_2_actionGroup8();
}
			}, 1);
		});
	} else {
		$("#obj83800 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj83802_droppedInsideTargetActions_2_runningActionsCount = window.obj83802_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj83802_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj83802_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj83802_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj83802_droppedInsideTargetActions_2_actionGroup8();
}
		}, 1);
	}
}






};
obj83802_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83802_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj83802").trigger("obj83802_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83802) {
				console.warn("de-queueing event obj83802." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83802").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83802_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	












//	action: playAudio
//	target: obj83799 
playAudio_83821();
function playAudio_83821() {
	window.obj83802_droppedInsideTargetActions_2_runningActionsCount = obj83802_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj83799")[0];
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
		    window.obj83802_droppedInsideTargetActions_2_runningActionsCount = window.obj83802_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj83802_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj83802_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj83802_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj83802_droppedInsideTargetActions_2_actionGroup9();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj83802_droppedInsideTargetActions_2_runningActionsCount = window.obj83802_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj83802_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj83802_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj83802_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj83802_droppedInsideTargetActions_2_actionGroup9();
}
	}
}









};
obj83802_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj83802_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj83802").trigger("obj83802_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83802) {
				console.warn("de-queueing event obj83802." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83802").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83802_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	





















};
obj83802_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83802_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj83802").trigger("obj83802_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83802) {
				console.warn("de-queueing event obj83802." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83802").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83802_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_83807();
function runjs_83807() {
	window.obj83802_droppedInsideTargetActions_runningActionsCount = obj83802_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj83854").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj83802_droppedInsideTargetActions_runningActionsCount = window.obj83802_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj83802_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj83802_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj83802_droppedInsideTargetActions_runningActionsCount == 0) {
	obj83802_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj83802_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83802_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj83802").trigger("obj83802_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83802) {
				console.warn("de-queueing event obj83802." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83802").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83802_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_83810();
function switchText_83810() {
	window.obj83802_droppedInsideTargetActions_runningActionsCount = obj83802_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj83800_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj83800_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj83800").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj83800_content");
			setTimeout(function () {
				window.obj83802_droppedInsideTargetActions_runningActionsCount = window.obj83802_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj83802_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj83802_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj83802_droppedInsideTargetActions_runningActionsCount == 0) {
	obj83802_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj83800 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj83802_droppedInsideTargetActions_runningActionsCount = window.obj83802_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj83802_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj83802_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj83802_droppedInsideTargetActions_runningActionsCount == 0) {
	obj83802_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj83802_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83802_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj83802").trigger("obj83802_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83802) {
				console.warn("de-queueing event obj83802." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83802").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83802_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_83808();
function runjs_83808() {
	window.obj83802_droppedInsideTargetActions_runningActionsCount = obj83802_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj83854").css("border-color", "#058E3F"); $("#obj83854").css("border-width", "2px"); $("#obj83854").css("border-style", "solid"); $("#obj83854").css("border-radius", "10px"); $("#obj83854").css("-webkit-border-radius", "10px"); $("#obj83854").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj83802_droppedInsideTargetActions_runningActionsCount = window.obj83802_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj83802_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj83802_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj83802_droppedInsideTargetActions_runningActionsCount == 0) {
	obj83802_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj83802_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83802_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj83802").trigger("obj83802_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83802) {
				console.warn("de-queueing event obj83802." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83802").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83802_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj83842 
hide_83809();
function hide_83809() {
	var selector = "#obj83842";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj83802_droppedInsideTargetActions_runningActionsCount = obj83802_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj83802_droppedInsideTargetActions_runningActionsCount = window.obj83802_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj83802_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj83802_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj83802_droppedInsideTargetActions_runningActionsCount == 0) {
	obj83802_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_83809(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj83802_droppedInsideTargetActions_runningActionsCount = window.obj83802_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj83802_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj83802_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj83802_droppedInsideTargetActions_runningActionsCount == 0) {
	obj83802_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj83802_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83802_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj83802").trigger("obj83802_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83802) {
				console.warn("de-queueing event obj83802." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83802").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83802_droppedInsideTargetActions_activeActionGroupIndex = 4;
	












//	action: playAudio
//	target: obj83798 
playAudio_83811();
function playAudio_83811() {
	window.obj83802_droppedInsideTargetActions_runningActionsCount = obj83802_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj83798")[0];
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
		    window.obj83802_droppedInsideTargetActions_runningActionsCount = window.obj83802_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj83802_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj83802_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj83802_droppedInsideTargetActions_runningActionsCount == 0) {
	obj83802_droppedInsideTargetActions_actionGroup5();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj83802_droppedInsideTargetActions_runningActionsCount = window.obj83802_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj83802_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj83802_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj83802_droppedInsideTargetActions_runningActionsCount == 0) {
	obj83802_droppedInsideTargetActions_actionGroup5();
}
	}
}









};
obj83802_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83802_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj83802").trigger("obj83802_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83802) {
				console.warn("de-queueing event obj83802." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83802").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83802_droppedInsideTargetActions_activeActionGroupIndex = 5;
	















//	action: Switch Text
switchText_90396();
function switchText_90396() {
	window.obj83802_droppedInsideTargetActions_runningActionsCount = obj83802_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj83800_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj83800_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj83800").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj83800_content");
			setTimeout(function () {
				window.obj83802_droppedInsideTargetActions_runningActionsCount = window.obj83802_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj83802_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj83802_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj83802_droppedInsideTargetActions_runningActionsCount == 0) {
	obj83802_droppedInsideTargetActions_actionGroup6();
}
			}, 1);
		});
	} else {
		$("#obj83800 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj83802_droppedInsideTargetActions_runningActionsCount = window.obj83802_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj83802_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj83802_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj83802_droppedInsideTargetActions_runningActionsCount == 0) {
	obj83802_droppedInsideTargetActions_actionGroup6();
}
		}, 1);
	}
}






};
obj83802_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj83802_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj83802").trigger("obj83802_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83802) {
				console.warn("de-queueing event obj83802." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83802").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83802_droppedInsideTargetActions_activeActionGroupIndex = 6;
	





















};
obj83756_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83756_onTouchDown_activeActionGroupIndex = -1;
		$("#obj83756").trigger("obj83756_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83756) {
				console.warn("de-queueing event obj83756." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83756").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83756_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj83756");
//	action: dragDrop
//	target: obj83756 
dragDrop_83759();
function dragDrop_83759() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj83756_onTouchDown_runningActionsCount = obj83756_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj83756');
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
	  	containerNode = $('#obj83860');
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
    	window.obj83756_onTouchDown_runningActionsCount = window.obj83756_onTouchDown_runningActionsCount - 1;
if (window.obj83756_onTouchDown_runningActionsCount < 0) {
	window.obj83756_onTouchDown_runningActionsCount = 0;
} else if (window.obj83756_onTouchDown_runningActionsCount == 0) {
	obj83756_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj83856","#obj83858","#obj83854");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_83759 = false;
    	var dropped_id_83759;
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
					dropped_83759 = true;
					dropped_id_83759 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_83759) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj83756").trigger('SCActionDragDrop83759_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj83756_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj83756_onTouchDown_activeActionGroupIndex = -1;
		$("#obj83756").trigger("obj83756_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83756) {
				console.warn("de-queueing event obj83756." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83756").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83756_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj83756_SCActionDragDrop83759_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83756_SCActionDragDrop83759_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj83756").trigger("obj83756_SCActionDragDrop83759_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83756) {
				console.warn("de-queueing event obj83756." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83756").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83756_SCActionDragDrop83759_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj83756 
move_92471();
function move_92471() {
	window.obj83756_SCActionDragDrop83759_droppedOutsideTargetActions_runningActionsCount = obj83756_SCActionDragDrop83759_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj83756");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 62;
	var moveY = 567;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj83756_SCActionDragDrop83759_droppedOutsideTargetActions_runningActionsCount = window.obj83756_SCActionDragDrop83759_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj83756_SCActionDragDrop83759_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj83756_SCActionDragDrop83759_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj83756_SCActionDragDrop83759_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj83756_SCActionDragDrop83759_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj83756_SCActionDragDrop83759_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj83756_SCActionDragDrop83759_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj83756").trigger("obj83756_SCActionDragDrop83759_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83756) {
				console.warn("de-queueing event obj83756." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83756").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83756_SCActionDragDrop83759_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj83756_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83756_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj83756").trigger("obj83756_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83756) {
				console.warn("de-queueing event obj83756." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83756").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83756_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_83777();
function runjs_83777() {
	window.obj83756_droppedInsideTargetActions_3_runningActionsCount = obj83756_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj83854").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj83756_droppedInsideTargetActions_3_runningActionsCount = window.obj83756_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj83756_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj83756_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj83756_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj83756_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj83756_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83756_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj83756").trigger("obj83756_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83756) {
				console.warn("de-queueing event obj83756." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83756").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83756_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_83778();
function runjs_83778() {
	window.obj83756_droppedInsideTargetActions_3_runningActionsCount = obj83756_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj83854").css("border-color", "#C00000"); $("#obj83854").css("border-width", "2px"); $("#obj83854").css("border-style", "solid"); $("#obj83854").css("border-radius", "10px"); $("#obj83854").css("-webkit-border-radius", "10px"); $("#obj83854").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj83756_droppedInsideTargetActions_3_runningActionsCount = window.obj83756_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj83756_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj83756_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj83756_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj83756_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj83756_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83756_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj83756").trigger("obj83756_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83756) {
				console.warn("de-queueing event obj83756." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83756").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83756_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	















//	action: Switch Text
switchText_83779();
function switchText_83779() {
	window.obj83756_droppedInsideTargetActions_3_runningActionsCount = obj83756_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj83800_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj83800_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj83800").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj83800_content");
			setTimeout(function () {
				window.obj83756_droppedInsideTargetActions_3_runningActionsCount = window.obj83756_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj83756_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj83756_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj83756_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj83756_droppedInsideTargetActions_3_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj83800 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj83756_droppedInsideTargetActions_3_runningActionsCount = window.obj83756_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj83756_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj83756_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj83756_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj83756_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
	}
}






};
obj83756_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83756_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj83756").trigger("obj83756_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83756) {
				console.warn("de-queueing event obj83756." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83756").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83756_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	


//	action: move
//	target: obj83756 
move_83780();
function move_83780() {
	window.obj83756_droppedInsideTargetActions_3_runningActionsCount = obj83756_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj83756");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 62;
	var moveY = 567;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj83756_droppedInsideTargetActions_3_runningActionsCount = window.obj83756_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj83756_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj83756_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj83756_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj83756_droppedInsideTargetActions_3_actionGroup4();
}
		}, 1);
	});
}



















};
obj83756_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83756_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj83756").trigger("obj83756_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83756) {
				console.warn("de-queueing event obj83756." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83756").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83756_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_83781();
function runjs_83781() {
	window.obj83756_droppedInsideTargetActions_3_runningActionsCount = obj83756_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj83854").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj83756_droppedInsideTargetActions_3_runningActionsCount = window.obj83756_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj83756_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj83756_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj83756_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj83756_droppedInsideTargetActions_3_actionGroup5();
}
	}, 1);
}







};
obj83756_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83756_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj83756").trigger("obj83756_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83756) {
				console.warn("de-queueing event obj83756." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83756").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83756_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	















//	action: Run JavaScript
runjs_83782();
function runjs_83782() {
	window.obj83756_droppedInsideTargetActions_3_runningActionsCount = obj83756_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj83854").css("border-color", "#000000"); $("#obj83854").css("border-width", "1px"); $("#obj83854").css("border-style", "solid"); $("#obj83854").css("border-radius", "15px"); $("#obj83854").css("-webkit-border-radius", "15px"); $("#obj83854").css("-moz-border-radius", "15px");
	
	setTimeout(function() {
		window.obj83756_droppedInsideTargetActions_3_runningActionsCount = window.obj83756_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj83756_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj83756_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj83756_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj83756_droppedInsideTargetActions_3_actionGroup6();
}
	}, 1);
}







};
obj83756_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83756_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj83756").trigger("obj83756_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83756) {
				console.warn("de-queueing event obj83756." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83756").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83756_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_83783();
function runjs_83783() {
	window.obj83756_droppedInsideTargetActions_3_runningActionsCount = obj83756_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj83756").css("border-color", "rgba(0,0,0,0)"); $("#obj83756").css("border-width", "0px"); $("#obj83756").css("border-style", "solid"); $("#obj83756").css("border-radius", "20px"); $("#obj83756").css("-webkit-border-radius", "20px"); $("#obj83756").css("-moz-border-radius", "20px"); $("#obj83756_img").css("top", "0px").css("left", "0px");
	
	setTimeout(function() {
		window.obj83756_droppedInsideTargetActions_3_runningActionsCount = window.obj83756_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj83756_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj83756_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj83756_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj83756_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj83756_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83756_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj83756").trigger("obj83756_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83756) {
				console.warn("de-queueing event obj83756." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83756").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83756_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Switch Text
switchText_83784();
function switchText_83784() {
	window.obj83756_droppedInsideTargetActions_3_runningActionsCount = obj83756_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj83800_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj83800_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj83800").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj83800_content");
			setTimeout(function () {
				window.obj83756_droppedInsideTargetActions_3_runningActionsCount = window.obj83756_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj83756_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj83756_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj83756_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj83756_droppedInsideTargetActions_3_actionGroup8();
}
			}, 1);
		});
	} else {
		$("#obj83800 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj83756_droppedInsideTargetActions_3_runningActionsCount = window.obj83756_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj83756_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj83756_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj83756_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj83756_droppedInsideTargetActions_3_actionGroup8();
}
		}, 1);
	}
}






};
obj83756_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83756_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj83756").trigger("obj83756_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83756) {
				console.warn("de-queueing event obj83756." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83756").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83756_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	












//	action: playAudio
//	target: obj83799 
playAudio_83785();
function playAudio_83785() {
	window.obj83756_droppedInsideTargetActions_3_runningActionsCount = obj83756_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj83799")[0];
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
		    window.obj83756_droppedInsideTargetActions_3_runningActionsCount = window.obj83756_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj83756_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj83756_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj83756_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj83756_droppedInsideTargetActions_3_actionGroup9();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj83756_droppedInsideTargetActions_3_runningActionsCount = window.obj83756_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj83756_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj83756_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj83756_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj83756_droppedInsideTargetActions_3_actionGroup9();
}
	}
}









};
obj83756_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj83756_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj83756").trigger("obj83756_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83756) {
				console.warn("de-queueing event obj83756." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83756").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83756_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	





















};
obj83756_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83756_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj83756").trigger("obj83756_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83756) {
				console.warn("de-queueing event obj83756." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83756").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83756_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_83767();
function runjs_83767() {
	window.obj83756_droppedInsideTargetActions_2_runningActionsCount = obj83756_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj83858").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj83756_droppedInsideTargetActions_2_runningActionsCount = window.obj83756_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj83756_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj83756_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj83756_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj83756_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj83756_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83756_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj83756").trigger("obj83756_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83756) {
				console.warn("de-queueing event obj83756." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83756").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83756_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_83768();
function runjs_83768() {
	window.obj83756_droppedInsideTargetActions_2_runningActionsCount = obj83756_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj83858").css("border-color", "#C00000"); $("#obj83858").css("border-width", "2px"); $("#obj83858").css("border-style", "solid"); $("#obj83858").css("border-radius", "10px"); $("#obj83858").css("-webkit-border-radius", "10px"); $("#obj83858").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj83756_droppedInsideTargetActions_2_runningActionsCount = window.obj83756_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj83756_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj83756_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj83756_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj83756_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj83756_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83756_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj83756").trigger("obj83756_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83756) {
				console.warn("de-queueing event obj83756." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83756").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83756_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	















//	action: Switch Text
switchText_83769();
function switchText_83769() {
	window.obj83756_droppedInsideTargetActions_2_runningActionsCount = obj83756_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj83800_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj83800_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj83800").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj83800_content");
			setTimeout(function () {
				window.obj83756_droppedInsideTargetActions_2_runningActionsCount = window.obj83756_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj83756_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj83756_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj83756_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj83756_droppedInsideTargetActions_2_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj83800 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj83756_droppedInsideTargetActions_2_runningActionsCount = window.obj83756_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj83756_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj83756_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj83756_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj83756_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
	}
}






};
obj83756_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83756_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj83756").trigger("obj83756_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83756) {
				console.warn("de-queueing event obj83756." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83756").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83756_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	


//	action: move
//	target: obj83756 
move_83770();
function move_83770() {
	window.obj83756_droppedInsideTargetActions_2_runningActionsCount = obj83756_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj83756");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 62;
	var moveY = 567;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj83756_droppedInsideTargetActions_2_runningActionsCount = window.obj83756_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj83756_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj83756_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj83756_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj83756_droppedInsideTargetActions_2_actionGroup4();
}
		}, 1);
	});
}



















};
obj83756_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83756_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj83756").trigger("obj83756_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83756) {
				console.warn("de-queueing event obj83756." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83756").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83756_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_83771();
function runjs_83771() {
	window.obj83756_droppedInsideTargetActions_2_runningActionsCount = obj83756_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj83858").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj83756_droppedInsideTargetActions_2_runningActionsCount = window.obj83756_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj83756_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj83756_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj83756_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj83756_droppedInsideTargetActions_2_actionGroup5();
}
	}, 1);
}







};
obj83756_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83756_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj83756").trigger("obj83756_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83756) {
				console.warn("de-queueing event obj83756." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83756").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83756_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	















//	action: Run JavaScript
runjs_83772();
function runjs_83772() {
	window.obj83756_droppedInsideTargetActions_2_runningActionsCount = obj83756_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj83858").css("border-color", "#000000"); $("#obj83858").css("border-width", "1px"); $("#obj83858").css("border-style", "solid"); $("#obj83858").css("border-radius", "15px"); $("#obj83858").css("-webkit-border-radius", "15px"); $("#obj83858").css("-moz-border-radius", "15px");
	
	setTimeout(function() {
		window.obj83756_droppedInsideTargetActions_2_runningActionsCount = window.obj83756_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj83756_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj83756_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj83756_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj83756_droppedInsideTargetActions_2_actionGroup6();
}
	}, 1);
}







};
obj83756_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83756_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj83756").trigger("obj83756_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83756) {
				console.warn("de-queueing event obj83756." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83756").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83756_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_83773();
function runjs_83773() {
	window.obj83756_droppedInsideTargetActions_2_runningActionsCount = obj83756_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj83756").css("border-color", "rgba(0,0,0,0)"); $("#obj83756").css("border-width", "0px"); $("#obj83756").css("border-style", "solid"); $("#obj83756").css("border-radius", "20px"); $("#obj83756").css("-webkit-border-radius", "20px"); $("#obj83756").css("-moz-border-radius", "20px"); $("#obj83756_img").css("top", "0px").css("left", "0px");
	
	setTimeout(function() {
		window.obj83756_droppedInsideTargetActions_2_runningActionsCount = window.obj83756_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj83756_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj83756_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj83756_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj83756_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj83756_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83756_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj83756").trigger("obj83756_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83756) {
				console.warn("de-queueing event obj83756." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83756").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83756_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Switch Text
switchText_83774();
function switchText_83774() {
	window.obj83756_droppedInsideTargetActions_2_runningActionsCount = obj83756_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj83800_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj83800_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj83800").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj83800_content");
			setTimeout(function () {
				window.obj83756_droppedInsideTargetActions_2_runningActionsCount = window.obj83756_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj83756_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj83756_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj83756_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj83756_droppedInsideTargetActions_2_actionGroup8();
}
			}, 1);
		});
	} else {
		$("#obj83800 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj83756_droppedInsideTargetActions_2_runningActionsCount = window.obj83756_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj83756_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj83756_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj83756_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj83756_droppedInsideTargetActions_2_actionGroup8();
}
		}, 1);
	}
}






};
obj83756_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83756_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj83756").trigger("obj83756_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83756) {
				console.warn("de-queueing event obj83756." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83756").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83756_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	












//	action: playAudio
//	target: obj83799 
playAudio_83775();
function playAudio_83775() {
	window.obj83756_droppedInsideTargetActions_2_runningActionsCount = obj83756_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj83799")[0];
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
		    window.obj83756_droppedInsideTargetActions_2_runningActionsCount = window.obj83756_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj83756_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj83756_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj83756_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj83756_droppedInsideTargetActions_2_actionGroup9();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj83756_droppedInsideTargetActions_2_runningActionsCount = window.obj83756_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj83756_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj83756_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj83756_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj83756_droppedInsideTargetActions_2_actionGroup9();
}
	}
}









};
obj83756_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj83756_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj83756").trigger("obj83756_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83756) {
				console.warn("de-queueing event obj83756." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83756").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83756_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	





















};
obj83756_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83756_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj83756").trigger("obj83756_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83756) {
				console.warn("de-queueing event obj83756." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83756").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83756_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_83761();
function runjs_83761() {
	window.obj83756_droppedInsideTargetActions_runningActionsCount = obj83756_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj83856").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj83756_droppedInsideTargetActions_runningActionsCount = window.obj83756_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj83756_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj83756_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj83756_droppedInsideTargetActions_runningActionsCount == 0) {
	obj83756_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj83756_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83756_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj83756").trigger("obj83756_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83756) {
				console.warn("de-queueing event obj83756." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83756").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83756_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_83764();
function switchText_83764() {
	window.obj83756_droppedInsideTargetActions_runningActionsCount = obj83756_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj83800_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj83800_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj83800").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj83800_content");
			setTimeout(function () {
				window.obj83756_droppedInsideTargetActions_runningActionsCount = window.obj83756_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj83756_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj83756_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj83756_droppedInsideTargetActions_runningActionsCount == 0) {
	obj83756_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj83800 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj83756_droppedInsideTargetActions_runningActionsCount = window.obj83756_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj83756_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj83756_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj83756_droppedInsideTargetActions_runningActionsCount == 0) {
	obj83756_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj83756_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83756_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj83756").trigger("obj83756_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83756) {
				console.warn("de-queueing event obj83756." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83756").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83756_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_83762();
function runjs_83762() {
	window.obj83756_droppedInsideTargetActions_runningActionsCount = obj83756_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj83856").css("border-color", "#058E3F"); $("#obj83856").css("border-width", "2px"); $("#obj83856").css("border-style", "solid"); $("#obj83856").css("border-radius", "10px"); $("#obj83856").css("-webkit-border-radius", "10px"); $("#obj83856").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj83756_droppedInsideTargetActions_runningActionsCount = window.obj83756_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj83756_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj83756_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj83756_droppedInsideTargetActions_runningActionsCount == 0) {
	obj83756_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj83756_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83756_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj83756").trigger("obj83756_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83756) {
				console.warn("de-queueing event obj83756." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83756").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83756_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj83844 
hide_83763();
function hide_83763() {
	var selector = "#obj83844";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj83756_droppedInsideTargetActions_runningActionsCount = obj83756_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj83756_droppedInsideTargetActions_runningActionsCount = window.obj83756_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj83756_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj83756_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj83756_droppedInsideTargetActions_runningActionsCount == 0) {
	obj83756_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_83763(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj83756_droppedInsideTargetActions_runningActionsCount = window.obj83756_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj83756_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj83756_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj83756_droppedInsideTargetActions_runningActionsCount == 0) {
	obj83756_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj83756_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83756_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj83756").trigger("obj83756_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83756) {
				console.warn("de-queueing event obj83756." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83756").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83756_droppedInsideTargetActions_activeActionGroupIndex = 4;
	












//	action: playAudio
//	target: obj83798 
playAudio_83765();
function playAudio_83765() {
	window.obj83756_droppedInsideTargetActions_runningActionsCount = obj83756_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj83798")[0];
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
		    window.obj83756_droppedInsideTargetActions_runningActionsCount = window.obj83756_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj83756_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj83756_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj83756_droppedInsideTargetActions_runningActionsCount == 0) {
	obj83756_droppedInsideTargetActions_actionGroup5();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj83756_droppedInsideTargetActions_runningActionsCount = window.obj83756_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj83756_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj83756_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj83756_droppedInsideTargetActions_runningActionsCount == 0) {
	obj83756_droppedInsideTargetActions_actionGroup5();
}
	}
}









};
obj83756_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83756_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj83756").trigger("obj83756_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83756) {
				console.warn("de-queueing event obj83756." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83756").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83756_droppedInsideTargetActions_activeActionGroupIndex = 5;
	















//	action: Switch Text
switchText_90394();
function switchText_90394() {
	window.obj83756_droppedInsideTargetActions_runningActionsCount = obj83756_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj83800_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj83800_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj83800").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj83800_content");
			setTimeout(function () {
				window.obj83756_droppedInsideTargetActions_runningActionsCount = window.obj83756_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj83756_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj83756_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj83756_droppedInsideTargetActions_runningActionsCount == 0) {
	obj83756_droppedInsideTargetActions_actionGroup6();
}
			}, 1);
		});
	} else {
		$("#obj83800 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj83756_droppedInsideTargetActions_runningActionsCount = window.obj83756_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj83756_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj83756_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj83756_droppedInsideTargetActions_runningActionsCount == 0) {
	obj83756_droppedInsideTargetActions_actionGroup6();
}
		}, 1);
	}
}






};
obj83756_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj83756_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj83756").trigger("obj83756_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83756) {
				console.warn("de-queueing event obj83756." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83756").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83756_droppedInsideTargetActions_activeActionGroupIndex = 6;
	





















};
obj83716_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83716_onTouchDown_activeActionGroupIndex = -1;
		$("#obj83716").trigger("obj83716_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83716) {
				console.warn("de-queueing event obj83716." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83716").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83716_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj83716");
//	action: dragDrop
//	target: obj83716 
dragDrop_83719();
function dragDrop_83719() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj83716_onTouchDown_runningActionsCount = obj83716_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj83716');
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
	  	containerNode = $('#obj83860');
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
    	window.obj83716_onTouchDown_runningActionsCount = window.obj83716_onTouchDown_runningActionsCount - 1;
if (window.obj83716_onTouchDown_runningActionsCount < 0) {
	window.obj83716_onTouchDown_runningActionsCount = 0;
} else if (window.obj83716_onTouchDown_runningActionsCount == 0) {
	obj83716_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj83858","#obj83854","#obj83856");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_83719 = false;
    	var dropped_id_83719;
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
					dropped_83719 = true;
					dropped_id_83719 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_83719) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj83716").trigger('SCActionDragDrop83719_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj83716_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj83716_onTouchDown_activeActionGroupIndex = -1;
		$("#obj83716").trigger("obj83716_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83716) {
				console.warn("de-queueing event obj83716." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83716").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83716_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj83716_SCActionDragDrop83719_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83716_SCActionDragDrop83719_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj83716").trigger("obj83716_SCActionDragDrop83719_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83716) {
				console.warn("de-queueing event obj83716." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83716").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83716_SCActionDragDrop83719_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj83716 
move_92473();
function move_92473() {
	window.obj83716_SCActionDragDrop83719_droppedOutsideTargetActions_runningActionsCount = obj83716_SCActionDragDrop83719_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj83716");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 232;
	var moveY = 567;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj83716_SCActionDragDrop83719_droppedOutsideTargetActions_runningActionsCount = window.obj83716_SCActionDragDrop83719_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj83716_SCActionDragDrop83719_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj83716_SCActionDragDrop83719_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj83716_SCActionDragDrop83719_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj83716_SCActionDragDrop83719_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj83716_SCActionDragDrop83719_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj83716_SCActionDragDrop83719_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj83716").trigger("obj83716_SCActionDragDrop83719_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83716) {
				console.warn("de-queueing event obj83716." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83716").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83716_SCActionDragDrop83719_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj83716_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83716_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj83716").trigger("obj83716_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83716) {
				console.warn("de-queueing event obj83716." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83716").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83716_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_83737();
function runjs_83737() {
	window.obj83716_droppedInsideTargetActions_3_runningActionsCount = obj83716_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj83856").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj83716_droppedInsideTargetActions_3_runningActionsCount = window.obj83716_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj83716_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj83716_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj83716_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj83716_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj83716_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83716_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj83716").trigger("obj83716_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83716) {
				console.warn("de-queueing event obj83716." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83716").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83716_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_83738();
function runjs_83738() {
	window.obj83716_droppedInsideTargetActions_3_runningActionsCount = obj83716_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj83856").css("border-color", "#C00000"); $("#obj83856").css("border-width", "2px"); $("#obj83856").css("border-style", "solid"); $("#obj83856").css("border-radius", "10px"); $("#obj83856").css("-webkit-border-radius", "10px"); $("#obj83856").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj83716_droppedInsideTargetActions_3_runningActionsCount = window.obj83716_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj83716_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj83716_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj83716_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj83716_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj83716_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83716_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj83716").trigger("obj83716_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83716) {
				console.warn("de-queueing event obj83716." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83716").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83716_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	















//	action: Switch Text
switchText_83739();
function switchText_83739() {
	window.obj83716_droppedInsideTargetActions_3_runningActionsCount = obj83716_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj83800_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj83800_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj83800").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj83800_content");
			setTimeout(function () {
				window.obj83716_droppedInsideTargetActions_3_runningActionsCount = window.obj83716_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj83716_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj83716_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj83716_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj83716_droppedInsideTargetActions_3_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj83800 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj83716_droppedInsideTargetActions_3_runningActionsCount = window.obj83716_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj83716_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj83716_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj83716_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj83716_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
	}
}






};
obj83716_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83716_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj83716").trigger("obj83716_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83716) {
				console.warn("de-queueing event obj83716." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83716").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83716_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	


//	action: move
//	target: obj83716 
move_83740();
function move_83740() {
	window.obj83716_droppedInsideTargetActions_3_runningActionsCount = obj83716_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj83716");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 232;
	var moveY = 567;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj83716_droppedInsideTargetActions_3_runningActionsCount = window.obj83716_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj83716_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj83716_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj83716_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj83716_droppedInsideTargetActions_3_actionGroup4();
}
		}, 1);
	});
}



















};
obj83716_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83716_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj83716").trigger("obj83716_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83716) {
				console.warn("de-queueing event obj83716." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83716").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83716_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_83741();
function runjs_83741() {
	window.obj83716_droppedInsideTargetActions_3_runningActionsCount = obj83716_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj83856").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj83716_droppedInsideTargetActions_3_runningActionsCount = window.obj83716_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj83716_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj83716_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj83716_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj83716_droppedInsideTargetActions_3_actionGroup5();
}
	}, 1);
}







};
obj83716_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83716_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj83716").trigger("obj83716_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83716) {
				console.warn("de-queueing event obj83716." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83716").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83716_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	















//	action: Run JavaScript
runjs_83742();
function runjs_83742() {
	window.obj83716_droppedInsideTargetActions_3_runningActionsCount = obj83716_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj83856").css("border-color", "#000000"); $("#obj83856").css("border-width", "1px"); $("#obj83856").css("border-style", "solid"); $("#obj83856").css("border-radius", "15px"); $("#obj83856").css("-webkit-border-radius", "15px"); $("#obj83856").css("-moz-border-radius", "15px");
	
	setTimeout(function() {
		window.obj83716_droppedInsideTargetActions_3_runningActionsCount = window.obj83716_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj83716_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj83716_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj83716_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj83716_droppedInsideTargetActions_3_actionGroup6();
}
	}, 1);
}







};
obj83716_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83716_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj83716").trigger("obj83716_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83716) {
				console.warn("de-queueing event obj83716." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83716").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83716_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_83743();
function runjs_83743() {
	window.obj83716_droppedInsideTargetActions_3_runningActionsCount = obj83716_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj83716").css("border-color", "rgba(0,0,0,0)"); $("#obj83716").css("border-width", "0px"); $("#obj83716").css("border-style", "solid"); $("#obj83716").css("border-radius", "20px"); $("#obj83716").css("-webkit-border-radius", "20px"); $("#obj83716").css("-moz-border-radius", "20px"); $("#obj83716_img").css("top", "0px").css("left", "0px");
	
	setTimeout(function() {
		window.obj83716_droppedInsideTargetActions_3_runningActionsCount = window.obj83716_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj83716_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj83716_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj83716_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj83716_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj83716_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83716_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj83716").trigger("obj83716_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83716) {
				console.warn("de-queueing event obj83716." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83716").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83716_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Switch Text
switchText_83744();
function switchText_83744() {
	window.obj83716_droppedInsideTargetActions_3_runningActionsCount = obj83716_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj83800_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj83800_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj83800").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj83800_content");
			setTimeout(function () {
				window.obj83716_droppedInsideTargetActions_3_runningActionsCount = window.obj83716_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj83716_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj83716_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj83716_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj83716_droppedInsideTargetActions_3_actionGroup8();
}
			}, 1);
		});
	} else {
		$("#obj83800 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj83716_droppedInsideTargetActions_3_runningActionsCount = window.obj83716_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj83716_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj83716_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj83716_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj83716_droppedInsideTargetActions_3_actionGroup8();
}
		}, 1);
	}
}






};
obj83716_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83716_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj83716").trigger("obj83716_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83716) {
				console.warn("de-queueing event obj83716." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83716").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83716_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	












//	action: playAudio
//	target: obj83799 
playAudio_83745();
function playAudio_83745() {
	window.obj83716_droppedInsideTargetActions_3_runningActionsCount = obj83716_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj83799")[0];
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
		    window.obj83716_droppedInsideTargetActions_3_runningActionsCount = window.obj83716_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj83716_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj83716_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj83716_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj83716_droppedInsideTargetActions_3_actionGroup9();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj83716_droppedInsideTargetActions_3_runningActionsCount = window.obj83716_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj83716_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj83716_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj83716_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj83716_droppedInsideTargetActions_3_actionGroup9();
}
	}
}









};
obj83716_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj83716_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj83716").trigger("obj83716_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83716) {
				console.warn("de-queueing event obj83716." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83716").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83716_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	





















};
obj83716_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83716_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj83716").trigger("obj83716_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83716) {
				console.warn("de-queueing event obj83716." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83716").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83716_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_83727();
function runjs_83727() {
	window.obj83716_droppedInsideTargetActions_2_runningActionsCount = obj83716_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj83854").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj83716_droppedInsideTargetActions_2_runningActionsCount = window.obj83716_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj83716_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj83716_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj83716_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj83716_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj83716_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83716_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj83716").trigger("obj83716_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83716) {
				console.warn("de-queueing event obj83716." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83716").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83716_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_83728();
function runjs_83728() {
	window.obj83716_droppedInsideTargetActions_2_runningActionsCount = obj83716_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj83854").css("border-color", "#C00000"); $("#obj83854").css("border-width", "2px"); $("#obj83854").css("border-style", "solid"); $("#obj83854").css("border-radius", "10px"); $("#obj83854").css("-webkit-border-radius", "10px"); $("#obj83854").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj83716_droppedInsideTargetActions_2_runningActionsCount = window.obj83716_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj83716_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj83716_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj83716_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj83716_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj83716_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83716_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj83716").trigger("obj83716_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83716) {
				console.warn("de-queueing event obj83716." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83716").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83716_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	















//	action: Switch Text
switchText_83729();
function switchText_83729() {
	window.obj83716_droppedInsideTargetActions_2_runningActionsCount = obj83716_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj83800_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj83800_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj83800").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj83800_content");
			setTimeout(function () {
				window.obj83716_droppedInsideTargetActions_2_runningActionsCount = window.obj83716_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj83716_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj83716_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj83716_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj83716_droppedInsideTargetActions_2_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj83800 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj83716_droppedInsideTargetActions_2_runningActionsCount = window.obj83716_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj83716_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj83716_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj83716_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj83716_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
	}
}






};
obj83716_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83716_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj83716").trigger("obj83716_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83716) {
				console.warn("de-queueing event obj83716." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83716").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83716_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	


//	action: move
//	target: obj83716 
move_83730();
function move_83730() {
	window.obj83716_droppedInsideTargetActions_2_runningActionsCount = obj83716_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj83716");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 232;
	var moveY = 567;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj83716_droppedInsideTargetActions_2_runningActionsCount = window.obj83716_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj83716_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj83716_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj83716_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj83716_droppedInsideTargetActions_2_actionGroup4();
}
		}, 1);
	});
}



















};
obj83716_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83716_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj83716").trigger("obj83716_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83716) {
				console.warn("de-queueing event obj83716." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83716").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83716_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_83731();
function runjs_83731() {
	window.obj83716_droppedInsideTargetActions_2_runningActionsCount = obj83716_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj83854").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj83716_droppedInsideTargetActions_2_runningActionsCount = window.obj83716_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj83716_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj83716_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj83716_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj83716_droppedInsideTargetActions_2_actionGroup5();
}
	}, 1);
}







};
obj83716_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83716_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj83716").trigger("obj83716_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83716) {
				console.warn("de-queueing event obj83716." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83716").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83716_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	















//	action: Run JavaScript
runjs_83732();
function runjs_83732() {
	window.obj83716_droppedInsideTargetActions_2_runningActionsCount = obj83716_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj83854").css("border-color", "#000000"); $("#obj83854").css("border-width", "1px"); $("#obj83854").css("border-style", "solid"); $("#obj83854").css("border-radius", "15px"); $("#obj83854").css("-webkit-border-radius", "15px"); $("#obj83854").css("-moz-border-radius", "15px");
	
	setTimeout(function() {
		window.obj83716_droppedInsideTargetActions_2_runningActionsCount = window.obj83716_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj83716_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj83716_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj83716_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj83716_droppedInsideTargetActions_2_actionGroup6();
}
	}, 1);
}







};
obj83716_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83716_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj83716").trigger("obj83716_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83716) {
				console.warn("de-queueing event obj83716." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83716").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83716_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_83733();
function runjs_83733() {
	window.obj83716_droppedInsideTargetActions_2_runningActionsCount = obj83716_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj83716").css("border-color", "rgba(0,0,0,0)"); $("#obj83716").css("border-width", "0px"); $("#obj83716").css("border-style", "solid"); $("#obj83716").css("border-radius", "20px"); $("#obj83716").css("-webkit-border-radius", "20px"); $("#obj83716").css("-moz-border-radius", "20px"); $("#obj83716_img").css("top", "0px").css("left", "0px");
	
	setTimeout(function() {
		window.obj83716_droppedInsideTargetActions_2_runningActionsCount = window.obj83716_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj83716_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj83716_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj83716_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj83716_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj83716_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83716_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj83716").trigger("obj83716_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83716) {
				console.warn("de-queueing event obj83716." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83716").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83716_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Switch Text
switchText_83734();
function switchText_83734() {
	window.obj83716_droppedInsideTargetActions_2_runningActionsCount = obj83716_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj83800_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj83800_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj83800").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj83800_content");
			setTimeout(function () {
				window.obj83716_droppedInsideTargetActions_2_runningActionsCount = window.obj83716_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj83716_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj83716_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj83716_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj83716_droppedInsideTargetActions_2_actionGroup8();
}
			}, 1);
		});
	} else {
		$("#obj83800 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj83716_droppedInsideTargetActions_2_runningActionsCount = window.obj83716_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj83716_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj83716_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj83716_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj83716_droppedInsideTargetActions_2_actionGroup8();
}
		}, 1);
	}
}






};
obj83716_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83716_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj83716").trigger("obj83716_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83716) {
				console.warn("de-queueing event obj83716." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83716").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83716_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	












//	action: playAudio
//	target: obj83799 
playAudio_83735();
function playAudio_83735() {
	window.obj83716_droppedInsideTargetActions_2_runningActionsCount = obj83716_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj83799")[0];
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
		    window.obj83716_droppedInsideTargetActions_2_runningActionsCount = window.obj83716_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj83716_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj83716_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj83716_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj83716_droppedInsideTargetActions_2_actionGroup9();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj83716_droppedInsideTargetActions_2_runningActionsCount = window.obj83716_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj83716_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj83716_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj83716_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj83716_droppedInsideTargetActions_2_actionGroup9();
}
	}
}









};
obj83716_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj83716_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj83716").trigger("obj83716_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83716) {
				console.warn("de-queueing event obj83716." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83716").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83716_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	





















};
obj83716_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83716_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj83716").trigger("obj83716_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83716) {
				console.warn("de-queueing event obj83716." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83716").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83716_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_83721();
function runjs_83721() {
	window.obj83716_droppedInsideTargetActions_runningActionsCount = obj83716_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj83858").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj83716_droppedInsideTargetActions_runningActionsCount = window.obj83716_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj83716_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj83716_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj83716_droppedInsideTargetActions_runningActionsCount == 0) {
	obj83716_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj83716_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83716_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj83716").trigger("obj83716_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83716) {
				console.warn("de-queueing event obj83716." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83716").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83716_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_83724();
function switchText_83724() {
	window.obj83716_droppedInsideTargetActions_runningActionsCount = obj83716_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj83800_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj83800_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj83800").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj83800_content");
			setTimeout(function () {
				window.obj83716_droppedInsideTargetActions_runningActionsCount = window.obj83716_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj83716_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj83716_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj83716_droppedInsideTargetActions_runningActionsCount == 0) {
	obj83716_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj83800 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj83716_droppedInsideTargetActions_runningActionsCount = window.obj83716_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj83716_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj83716_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj83716_droppedInsideTargetActions_runningActionsCount == 0) {
	obj83716_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj83716_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83716_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj83716").trigger("obj83716_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83716) {
				console.warn("de-queueing event obj83716." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83716").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83716_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_83722();
function runjs_83722() {
	window.obj83716_droppedInsideTargetActions_runningActionsCount = obj83716_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj83858").css("border-color", "#058E3F"); $("#obj83858").css("border-width", "2px"); $("#obj83858").css("border-style", "solid"); $("#obj83858").css("border-radius", "10px"); $("#obj83858").css("-webkit-border-radius", "10px"); $("#obj83858").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj83716_droppedInsideTargetActions_runningActionsCount = window.obj83716_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj83716_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj83716_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj83716_droppedInsideTargetActions_runningActionsCount == 0) {
	obj83716_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj83716_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83716_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj83716").trigger("obj83716_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83716) {
				console.warn("de-queueing event obj83716." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83716").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83716_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj83846 
hide_83723();
function hide_83723() {
	var selector = "#obj83846";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj83716_droppedInsideTargetActions_runningActionsCount = obj83716_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj83716_droppedInsideTargetActions_runningActionsCount = window.obj83716_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj83716_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj83716_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj83716_droppedInsideTargetActions_runningActionsCount == 0) {
	obj83716_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_83723(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj83716_droppedInsideTargetActions_runningActionsCount = window.obj83716_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj83716_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj83716_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj83716_droppedInsideTargetActions_runningActionsCount == 0) {
	obj83716_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj83716_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83716_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj83716").trigger("obj83716_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83716) {
				console.warn("de-queueing event obj83716." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83716").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83716_droppedInsideTargetActions_activeActionGroupIndex = 4;
	












//	action: playAudio
//	target: obj83798 
playAudio_83725();
function playAudio_83725() {
	window.obj83716_droppedInsideTargetActions_runningActionsCount = obj83716_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj83798")[0];
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
		    window.obj83716_droppedInsideTargetActions_runningActionsCount = window.obj83716_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj83716_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj83716_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj83716_droppedInsideTargetActions_runningActionsCount == 0) {
	obj83716_droppedInsideTargetActions_actionGroup5();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj83716_droppedInsideTargetActions_runningActionsCount = window.obj83716_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj83716_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj83716_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj83716_droppedInsideTargetActions_runningActionsCount == 0) {
	obj83716_droppedInsideTargetActions_actionGroup5();
}
	}
}









};
obj83716_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83716_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj83716").trigger("obj83716_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83716) {
				console.warn("de-queueing event obj83716." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83716").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83716_droppedInsideTargetActions_activeActionGroupIndex = 5;
	















//	action: Switch Text
switchText_90395();
function switchText_90395() {
	window.obj83716_droppedInsideTargetActions_runningActionsCount = obj83716_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj83800_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj83800_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj83800").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj83800_content");
			setTimeout(function () {
				window.obj83716_droppedInsideTargetActions_runningActionsCount = window.obj83716_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj83716_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj83716_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj83716_droppedInsideTargetActions_runningActionsCount == 0) {
	obj83716_droppedInsideTargetActions_actionGroup6();
}
			}, 1);
		});
	} else {
		$("#obj83800 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj83716_droppedInsideTargetActions_runningActionsCount = window.obj83716_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj83716_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj83716_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj83716_droppedInsideTargetActions_runningActionsCount == 0) {
	obj83716_droppedInsideTargetActions_actionGroup6();
}
		}, 1);
	}
}






};
obj83716_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj83716_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj83716").trigger("obj83716_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83716) {
				console.warn("de-queueing event obj83716." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83716").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83716_droppedInsideTargetActions_activeActionGroupIndex = 6;
	





















};
obj83694_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83694_onTap_activeActionGroupIndex = -1;
		$("#obj83694").trigger("obj83694_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83694) {
				console.warn("de-queueing event obj83694." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83694").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83694_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj83694 
hide_83697();
function hide_83697() {
	var selector = "#obj83694";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj83694_onTap_runningActionsCount = obj83694_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj83694_onTap_runningActionsCount = window.obj83694_onTap_runningActionsCount - 1;
if (window.obj83694_onTap_runningActionsCount < 0) {
	window.obj83694_onTap_runningActionsCount = 0;
} else if (window.obj83694_onTap_runningActionsCount == 0) {
	obj83694_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_83697(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj83694_onTap_runningActionsCount = window.obj83694_onTap_runningActionsCount - 1;
if (window.obj83694_onTap_runningActionsCount < 0) {
	window.obj83694_onTap_runningActionsCount = 0;
} else if (window.obj83694_onTap_runningActionsCount == 0) {
	obj83694_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj83684 
stopMovie_83696();
function stopMovie_83696() {
	window.obj83694_onTap_runningActionsCount = obj83694_onTap_runningActionsCount + 1;
	var myVideo = $("#obj83684")[0];
	myVideo.pause();
	window.obj83694_onTap_runningActionsCount = window.obj83694_onTap_runningActionsCount - 1;
if (window.obj83694_onTap_runningActionsCount < 0) {
	window.obj83694_onTap_runningActionsCount = 0;
} else if (window.obj83694_onTap_runningActionsCount == 0) {
	obj83694_onTap_actionGroup1();
}
}
















};
obj83694_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83694_onTap_activeActionGroupIndex = -1;
		$("#obj83694").trigger("obj83694_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83694) {
				console.warn("de-queueing event obj83694." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83694").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83694_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj83686
(function(){
	window.obj83694_onTap_runningActionsCount = obj83694_onTap_runningActionsCount + 1;

	var selector = "#obj83686";
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
					window.obj83694_onTap_runningActionsCount = window.obj83694_onTap_runningActionsCount - 1;
if (window.obj83694_onTap_runningActionsCount < 0) {
	window.obj83694_onTap_runningActionsCount = 0;
} else if (window.obj83694_onTap_runningActionsCount == 0) {
	obj83694_onTap_actionGroup2();
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
				window.obj83694_onTap_runningActionsCount = window.obj83694_onTap_runningActionsCount - 1;
if (window.obj83694_onTap_runningActionsCount < 0) {
	window.obj83694_onTap_runningActionsCount = 0;
} else if (window.obj83694_onTap_runningActionsCount == 0) {
	obj83694_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj83694_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83694_onTap_activeActionGroupIndex = -1;
		$("#obj83694").trigger("obj83694_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83694) {
				console.warn("de-queueing event obj83694." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83694").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83694_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj83684 
move_83699();
function move_83699() {
	window.obj83694_onTap_runningActionsCount = obj83694_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj83684");
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
			window.obj83694_onTap_runningActionsCount = window.obj83694_onTap_runningActionsCount - 1;
if (window.obj83694_onTap_runningActionsCount < 0) {
	window.obj83694_onTap_runningActionsCount = 0;
} else if (window.obj83694_onTap_runningActionsCount == 0) {
	obj83694_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj83694_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj83694_onTap_activeActionGroupIndex = -1;
		$("#obj83694").trigger("obj83694_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83694) {
				console.warn("de-queueing event obj83694." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83694").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83694_onTap_activeActionGroupIndex = 3;
	





















};
obj83686_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83686_onTap_activeActionGroupIndex = -1;
		$("#obj83686").trigger("obj83686_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83686) {
				console.warn("de-queueing event obj83686." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83686").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83686_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj83686 
hide_83689();
function hide_83689() {
	var selector = "#obj83686";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj83686_onTap_runningActionsCount = obj83686_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj83686_onTap_runningActionsCount = window.obj83686_onTap_runningActionsCount - 1;
if (window.obj83686_onTap_runningActionsCount < 0) {
	window.obj83686_onTap_runningActionsCount = 0;
} else if (window.obj83686_onTap_runningActionsCount == 0) {
	obj83686_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_83689(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj83686_onTap_runningActionsCount = window.obj83686_onTap_runningActionsCount - 1;
if (window.obj83686_onTap_runningActionsCount < 0) {
	window.obj83686_onTap_runningActionsCount = 0;
} else if (window.obj83686_onTap_runningActionsCount == 0) {
	obj83686_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj83684 
playPauseMovie_83688();
function playPauseMovie_83688() {
	window.obj83686_onTap_runningActionsCount = obj83686_onTap_runningActionsCount + 1;
	var myVideo = $("#obj83684")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj83686_onTap_runningActionsCount = window.obj83686_onTap_runningActionsCount - 1;
if (window.obj83686_onTap_runningActionsCount < 0) {
	window.obj83686_onTap_runningActionsCount = 0;
} else if (window.obj83686_onTap_runningActionsCount == 0) {
	obj83686_onTap_actionGroup1();
}
}

















};
obj83686_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83686_onTap_activeActionGroupIndex = -1;
		$("#obj83686").trigger("obj83686_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83686) {
				console.warn("de-queueing event obj83686." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83686").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83686_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj83694
(function(){
	window.obj83686_onTap_runningActionsCount = obj83686_onTap_runningActionsCount + 1;

	var selector = "#obj83694";
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
					window.obj83686_onTap_runningActionsCount = window.obj83686_onTap_runningActionsCount - 1;
if (window.obj83686_onTap_runningActionsCount < 0) {
	window.obj83686_onTap_runningActionsCount = 0;
} else if (window.obj83686_onTap_runningActionsCount == 0) {
	obj83686_onTap_actionGroup2();
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
				window.obj83686_onTap_runningActionsCount = window.obj83686_onTap_runningActionsCount - 1;
if (window.obj83686_onTap_runningActionsCount < 0) {
	window.obj83686_onTap_runningActionsCount = 0;
} else if (window.obj83686_onTap_runningActionsCount == 0) {
	obj83686_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj83686_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83686_onTap_activeActionGroupIndex = -1;
		$("#obj83686").trigger("obj83686_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83686) {
				console.warn("de-queueing event obj83686." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83686").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83686_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj83684 
move_83691();
function move_83691() {
	window.obj83686_onTap_runningActionsCount = obj83686_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj83684");
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
			window.obj83686_onTap_runningActionsCount = window.obj83686_onTap_runningActionsCount - 1;
if (window.obj83686_onTap_runningActionsCount < 0) {
	window.obj83686_onTap_runningActionsCount = 0;
} else if (window.obj83686_onTap_runningActionsCount == 0) {
	obj83686_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj83686_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj83686_onTap_activeActionGroupIndex = -1;
		$("#obj83686").trigger("obj83686_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83686) {
				console.warn("de-queueing event obj83686." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83686").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83686_onTap_activeActionGroupIndex = 3;
	





















};
obj88165_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88165_onTap_activeActionGroupIndex = -1;
		$("#obj88165").trigger("obj88165_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88165) {
				console.warn("de-queueing event obj88165." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88165").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88165_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj88170 
stopAudio_88167();
function stopAudio_88167() {
	window.obj88165_onTap_runningActionsCount = obj88165_onTap_runningActionsCount + 1;
	var myAudio = $("#obj88170")[0];
	myAudio.pause();
	window.obj88165_onTap_runningActionsCount = window.obj88165_onTap_runningActionsCount - 1;
if (window.obj88165_onTap_runningActionsCount < 0) {
	window.obj88165_onTap_runningActionsCount = 0;
} else if (window.obj88165_onTap_runningActionsCount == 0) {
	obj88165_onTap_actionGroup1();
}
}








};
obj88165_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88165_onTap_activeActionGroupIndex = -1;
		$("#obj88165").trigger("obj88165_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88165) {
				console.warn("de-queueing event obj88165." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88165").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88165_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj88165 
hide_88168();
function hide_88168() {
	var selector = "#obj88165";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj88165_onTap_runningActionsCount = obj88165_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj88165_onTap_runningActionsCount = window.obj88165_onTap_runningActionsCount - 1;
if (window.obj88165_onTap_runningActionsCount < 0) {
	window.obj88165_onTap_runningActionsCount = 0;
} else if (window.obj88165_onTap_runningActionsCount == 0) {
	obj88165_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_88168(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj88165_onTap_runningActionsCount = window.obj88165_onTap_runningActionsCount - 1;
if (window.obj88165_onTap_runningActionsCount < 0) {
	window.obj88165_onTap_runningActionsCount = 0;
} else if (window.obj88165_onTap_runningActionsCount == 0) {
	obj88165_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj88165_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88165_onTap_activeActionGroupIndex = -1;
		$("#obj88165").trigger("obj88165_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88165) {
				console.warn("de-queueing event obj88165." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88165").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88165_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj88160
(function(){
	window.obj88165_onTap_runningActionsCount = obj88165_onTap_runningActionsCount + 1;

	var selector = "#obj88160";
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
					window.obj88165_onTap_runningActionsCount = window.obj88165_onTap_runningActionsCount - 1;
if (window.obj88165_onTap_runningActionsCount < 0) {
	window.obj88165_onTap_runningActionsCount = 0;
} else if (window.obj88165_onTap_runningActionsCount == 0) {
	obj88165_onTap_actionGroup3();
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
				window.obj88165_onTap_runningActionsCount = window.obj88165_onTap_runningActionsCount - 1;
if (window.obj88165_onTap_runningActionsCount < 0) {
	window.obj88165_onTap_runningActionsCount = 0;
} else if (window.obj88165_onTap_runningActionsCount == 0) {
	obj88165_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj88165_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj88165_onTap_activeActionGroupIndex = -1;
		$("#obj88165").trigger("obj88165_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88165) {
				console.warn("de-queueing event obj88165." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88165").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88165_onTap_activeActionGroupIndex = 3;
	





















};
obj88160_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88160_onTap_activeActionGroupIndex = -1;
		$("#obj88160").trigger("obj88160_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88160) {
				console.warn("de-queueing event obj88160." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88160").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88160_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj88160 
hide_88162();
function hide_88162() {
	var selector = "#obj88160";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj88160_onTap_runningActionsCount = obj88160_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj88160_onTap_runningActionsCount = window.obj88160_onTap_runningActionsCount - 1;
if (window.obj88160_onTap_runningActionsCount < 0) {
	window.obj88160_onTap_runningActionsCount = 0;
} else if (window.obj88160_onTap_runningActionsCount == 0) {
	obj88160_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_88162(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj88160_onTap_runningActionsCount = window.obj88160_onTap_runningActionsCount - 1;
if (window.obj88160_onTap_runningActionsCount < 0) {
	window.obj88160_onTap_runningActionsCount = 0;
} else if (window.obj88160_onTap_runningActionsCount == 0) {
	obj88160_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj88160_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88160_onTap_activeActionGroupIndex = -1;
		$("#obj88160").trigger("obj88160_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88160) {
				console.warn("de-queueing event obj88160." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88160").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88160_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj88165
(function(){
	window.obj88160_onTap_runningActionsCount = obj88160_onTap_runningActionsCount + 1;

	var selector = "#obj88165";
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
					window.obj88160_onTap_runningActionsCount = window.obj88160_onTap_runningActionsCount - 1;
if (window.obj88160_onTap_runningActionsCount < 0) {
	window.obj88160_onTap_runningActionsCount = 0;
} else if (window.obj88160_onTap_runningActionsCount == 0) {
	obj88160_onTap_actionGroup2();
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
				window.obj88160_onTap_runningActionsCount = window.obj88160_onTap_runningActionsCount - 1;
if (window.obj88160_onTap_runningActionsCount < 0) {
	window.obj88160_onTap_runningActionsCount = 0;
} else if (window.obj88160_onTap_runningActionsCount == 0) {
	obj88160_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj88160_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88160_onTap_activeActionGroupIndex = -1;
		$("#obj88160").trigger("obj88160_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88160) {
				console.warn("de-queueing event obj88160." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88160").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88160_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj88170 
playAudio_88164();
function playAudio_88164() {
	window.obj88160_onTap_runningActionsCount = obj88160_onTap_runningActionsCount + 1;
	var myAudio = $("#obj88170")[0];
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
		    window.obj88160_onTap_runningActionsCount = window.obj88160_onTap_runningActionsCount - 1;
if (window.obj88160_onTap_runningActionsCount < 0) {
	window.obj88160_onTap_runningActionsCount = 0;
} else if (window.obj88160_onTap_runningActionsCount == 0) {
	obj88160_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj88160_onTap_runningActionsCount = window.obj88160_onTap_runningActionsCount - 1;
if (window.obj88160_onTap_runningActionsCount < 0) {
	window.obj88160_onTap_runningActionsCount = 0;
} else if (window.obj88160_onTap_runningActionsCount == 0) {
	obj88160_onTap_actionGroup3();
}
	}
}









};
obj88160_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj88160_onTap_activeActionGroupIndex = -1;
		$("#obj88160").trigger("obj88160_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88160) {
				console.warn("de-queueing event obj88160." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88160").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88160_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj83877: Event Touch Down
 *
 */
$("#obj83877").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj83877_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj83877_onTap is still running");
	return;
}
var obj83877_onTap_runningActionsCount = 0;
var obj83877_onTap_loopCount = 0;
obj83877_onTap_actionGroup0();
});










/*
 *
 *   obj83874: Event Touch Down
 *
 */
$("#obj83874").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj83874_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj83874_onTap is still running");
	return;
}
var obj83874_onTap_runningActionsCount = 0;
var obj83874_onTap_loopCount = 0;
obj83874_onTap_actionGroup0();
});










/*
 *
 *   obj83870: Event Touch Down
 *
 */
$("#obj83870").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj83870_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj83870_onTap is still running");
	return;
}
var obj83870_onTap_runningActionsCount = 0;
var obj83870_onTap_loopCount = 0;
obj83870_onTap_actionGroup0();
});

































































































































































/*
 *
 *   obj83802: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj83802");
	var winTarget = document.getElementById("obj83802");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj83802").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj83802_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj83802_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj83802_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj83802_onTouchDown is still running");
	return;
}
var obj83802_onTouchDown_runningActionsCount = 0;
var obj83802_onTouchDown_loopCount = 0;
obj83802_onTouchDown_actionGroup0();
});



/*
 *
 *   obj83802: Event SCActionDragDrop83805_droppedOutsideTargetActions
 *
 */
$("#obj83802").bind("SCActionDragDrop83805_droppedOutsideTargetActions", function(event) {
	if (window.obj83802_SCActionDragDrop83805_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj83802_SCActionDragDrop83805_droppedOutsideTargetActions is still running");
	return;
}
var obj83802_SCActionDragDrop83805_droppedOutsideTargetActions_runningActionsCount = 0;
var obj83802_SCActionDragDrop83805_droppedOutsideTargetActions_loopCount = 0;
obj83802_SCActionDragDrop83805_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj83802: Event droppedInsideTargetActions_3
 *
 */
$("#obj83802").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj83802_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj83802_droppedInsideTargetActions_3 is still running");
	return;
}
var obj83802_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj83802_droppedInsideTargetActions_3_loopCount = 0;
obj83802_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj83802: Event droppedInsideTargetActions_2
 *
 */
$("#obj83802").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj83802_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj83802_droppedInsideTargetActions_2 is still running");
	return;
}
var obj83802_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj83802_droppedInsideTargetActions_2_loopCount = 0;
obj83802_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj83802: Event droppedInsideTargetActions
 *
 */
$("#obj83802").bind("droppedInsideTargetActions", function(event) {
	if (window.obj83802_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj83802_droppedInsideTargetActions is still running");
	return;
}
var obj83802_droppedInsideTargetActions_runningActionsCount = 0;
var obj83802_droppedInsideTargetActions_loopCount = 0;
obj83802_droppedInsideTargetActions_actionGroup0();
});




































/*
 *
 *   obj83756: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj83756");
	var winTarget = document.getElementById("obj83756");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj83756").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj83756_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj83756_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj83756_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj83756_onTouchDown is still running");
	return;
}
var obj83756_onTouchDown_runningActionsCount = 0;
var obj83756_onTouchDown_loopCount = 0;
obj83756_onTouchDown_actionGroup0();
});



/*
 *
 *   obj83756: Event SCActionDragDrop83759_droppedOutsideTargetActions
 *
 */
$("#obj83756").bind("SCActionDragDrop83759_droppedOutsideTargetActions", function(event) {
	if (window.obj83756_SCActionDragDrop83759_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj83756_SCActionDragDrop83759_droppedOutsideTargetActions is still running");
	return;
}
var obj83756_SCActionDragDrop83759_droppedOutsideTargetActions_runningActionsCount = 0;
var obj83756_SCActionDragDrop83759_droppedOutsideTargetActions_loopCount = 0;
obj83756_SCActionDragDrop83759_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj83756: Event droppedInsideTargetActions_3
 *
 */
$("#obj83756").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj83756_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj83756_droppedInsideTargetActions_3 is still running");
	return;
}
var obj83756_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj83756_droppedInsideTargetActions_3_loopCount = 0;
obj83756_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj83756: Event droppedInsideTargetActions_2
 *
 */
$("#obj83756").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj83756_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj83756_droppedInsideTargetActions_2 is still running");
	return;
}
var obj83756_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj83756_droppedInsideTargetActions_2_loopCount = 0;
obj83756_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj83756: Event droppedInsideTargetActions
 *
 */
$("#obj83756").bind("droppedInsideTargetActions", function(event) {
	if (window.obj83756_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj83756_droppedInsideTargetActions is still running");
	return;
}
var obj83756_droppedInsideTargetActions_runningActionsCount = 0;
var obj83756_droppedInsideTargetActions_loopCount = 0;
obj83756_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj83716: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj83716");
	var winTarget = document.getElementById("obj83716");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj83716").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj83716_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj83716_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj83716_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj83716_onTouchDown is still running");
	return;
}
var obj83716_onTouchDown_runningActionsCount = 0;
var obj83716_onTouchDown_loopCount = 0;
obj83716_onTouchDown_actionGroup0();
});



/*
 *
 *   obj83716: Event SCActionDragDrop83719_droppedOutsideTargetActions
 *
 */
$("#obj83716").bind("SCActionDragDrop83719_droppedOutsideTargetActions", function(event) {
	if (window.obj83716_SCActionDragDrop83719_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj83716_SCActionDragDrop83719_droppedOutsideTargetActions is still running");
	return;
}
var obj83716_SCActionDragDrop83719_droppedOutsideTargetActions_runningActionsCount = 0;
var obj83716_SCActionDragDrop83719_droppedOutsideTargetActions_loopCount = 0;
obj83716_SCActionDragDrop83719_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj83716: Event droppedInsideTargetActions_3
 *
 */
$("#obj83716").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj83716_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj83716_droppedInsideTargetActions_3 is still running");
	return;
}
var obj83716_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj83716_droppedInsideTargetActions_3_loopCount = 0;
obj83716_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj83716: Event droppedInsideTargetActions_2
 *
 */
$("#obj83716").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj83716_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj83716_droppedInsideTargetActions_2 is still running");
	return;
}
var obj83716_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj83716_droppedInsideTargetActions_2_loopCount = 0;
obj83716_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj83716: Event droppedInsideTargetActions
 *
 */
$("#obj83716").bind("droppedInsideTargetActions", function(event) {
	if (window.obj83716_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj83716_droppedInsideTargetActions is still running");
	return;
}
var obj83716_droppedInsideTargetActions_runningActionsCount = 0;
var obj83716_droppedInsideTargetActions_loopCount = 0;
obj83716_droppedInsideTargetActions_actionGroup0();
});

























/*
 *
 *   obj83694: Event Touch Down
 *
 */
$("#obj83694").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj83694_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj83694_onTap is still running");
	return;
}
var obj83694_onTap_runningActionsCount = 0;
var obj83694_onTap_loopCount = 0;
obj83694_onTap_actionGroup0();
});










/*
 *
 *   obj83686: Event Touch Down
 *
 */
$("#obj83686").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj83686_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj83686_onTap is still running");
	return;
}
var obj83686_onTap_runningActionsCount = 0;
var obj83686_onTap_loopCount = 0;
obj83686_onTap_actionGroup0();
});










/*
 *
 *   obj88165: Event Touch Down
 *
 */
$("#obj88165").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj88165_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj88165_onTap is still running");
	return;
}
var obj88165_onTap_runningActionsCount = 0;
var obj88165_onTap_loopCount = 0;
obj88165_onTap_actionGroup0();
});










/*
 *
 *   obj88160: Event Touch Down
 *
 */
$("#obj88160").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj88160_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj88160_onTap is still running");
	return;
}
var obj88160_onTap_runningActionsCount = 0;
var obj88160_onTap_loopCount = 0;
obj88160_onTap_actionGroup0();
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
	
$("#obj83880").trigger('SCEventShow');
$("#obj83877").trigger('SCEventShow');
$("#obj83874").trigger('SCEventShow');
$("#obj83870").trigger('SCEventShow');
$("#obj83796").trigger('SCEventShow');
$("#obj83868").trigger('SCEventShow');
$("#obj83866").trigger('SCEventShow');
$("#obj83864").trigger('SCEventShow');
$("#obj83862").trigger('SCEventShow');
$("#obj83860").trigger('SCEventShow');
$("#obj83858").trigger('SCEventShow');
$("#obj83856").trigger('SCEventShow');
$("#obj83854").trigger('SCEventShow');
$("#obj83852").trigger('SCEventShow');
$("#obj83850").trigger('SCEventShow');
$("#obj83848").trigger('SCEventShow');
$("#obj83846").trigger('SCEventShow');
$("#obj83844").trigger('SCEventShow');
$("#obj83842").trigger('SCEventShow');
$("#obj83802").trigger('SCEventShow');
$("#obj83800").trigger('SCEventShow');
$("#obj83799").trigger('SCEventShow');
$("#obj83798").trigger('SCEventShow');
$("#obj83756").trigger('SCEventShow');
$("#obj83716").trigger('SCEventShow');
$("#obj83714").trigger('SCEventShow');
$("#obj83712").trigger('SCEventShow');
$("#obj83694").trigger('SCEventShow');
$("#obj83686").trigger('SCEventShow');
$("#obj88165").trigger('SCEventShow');
$("#obj88160").trigger('SCEventShow');
$("#obj88170").trigger('SCEventShow');
$("#obj94845").trigger('SCEventShow');
$("#obj83684").trigger('SCEventShow');
	
});