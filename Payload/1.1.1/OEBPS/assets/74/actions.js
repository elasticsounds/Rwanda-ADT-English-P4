pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 18366;
pubcoder.page.title = pubcoder.page.title || "74";
pubcoder.page.number = pubcoder.page.number || 74;
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
var obj75844_onTap_activeActionGroupIndex = -1;
var obj75844_onTap_runningActionsCount = 0;
var obj75844_onTap_loopCount = 0;
var obj75841_onTap_activeActionGroupIndex = -1;
var obj75841_onTap_runningActionsCount = 0;
var obj75841_onTap_loopCount = 0;
var obj75837_onTap_activeActionGroupIndex = -1;
var obj75837_onTap_runningActionsCount = 0;
var obj75837_onTap_loopCount = 0;
var obj75768_onDrag_activeActionGroupIndex = -1;
var obj75768_onDrag_runningActionsCount = 0;
var obj75768_onDrag_loopCount = 0;
var obj75768_onTouchDown_activeActionGroupIndex = -1;
var obj75768_onTouchDown_runningActionsCount = 0;
var obj75768_onTouchDown_loopCount = 0;
var obj75768_SCActionDragDrop75771_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj75768_SCActionDragDrop75771_droppedOutsideTargetActions_runningActionsCount = 0;
var obj75768_SCActionDragDrop75771_droppedOutsideTargetActions_loopCount = 0;
var obj75768_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj75768_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj75768_droppedInsideTargetActions_3_loopCount = 0;
var obj75768_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj75768_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj75768_droppedInsideTargetActions_2_loopCount = 0;
var obj75768_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj75768_droppedInsideTargetActions_runningActionsCount = 0;
var obj75768_droppedInsideTargetActions_loopCount = 0;
var obj75725_onDrag_activeActionGroupIndex = -1;
var obj75725_onDrag_runningActionsCount = 0;
var obj75725_onDrag_loopCount = 0;
var obj75725_onTouchDown_activeActionGroupIndex = -1;
var obj75725_onTouchDown_runningActionsCount = 0;
var obj75725_onTouchDown_loopCount = 0;
var obj75725_SCActionDragDrop75728_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj75725_SCActionDragDrop75728_droppedOutsideTargetActions_runningActionsCount = 0;
var obj75725_SCActionDragDrop75728_droppedOutsideTargetActions_loopCount = 0;
var obj75725_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj75725_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj75725_droppedInsideTargetActions_3_loopCount = 0;
var obj75725_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj75725_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj75725_droppedInsideTargetActions_2_loopCount = 0;
var obj75725_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj75725_droppedInsideTargetActions_runningActionsCount = 0;
var obj75725_droppedInsideTargetActions_loopCount = 0;
var obj75686_onDrag_activeActionGroupIndex = -1;
var obj75686_onDrag_runningActionsCount = 0;
var obj75686_onDrag_loopCount = 0;
var obj75686_onTouchDown_activeActionGroupIndex = -1;
var obj75686_onTouchDown_runningActionsCount = 0;
var obj75686_onTouchDown_loopCount = 0;
var obj75686_SCActionDragDrop75689_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj75686_SCActionDragDrop75689_droppedOutsideTargetActions_runningActionsCount = 0;
var obj75686_SCActionDragDrop75689_droppedOutsideTargetActions_loopCount = 0;
var obj75686_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj75686_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj75686_droppedInsideTargetActions_3_loopCount = 0;
var obj75686_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj75686_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj75686_droppedInsideTargetActions_2_loopCount = 0;
var obj75686_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj75686_droppedInsideTargetActions_runningActionsCount = 0;
var obj75686_droppedInsideTargetActions_loopCount = 0;
var obj75668_onTap_activeActionGroupIndex = -1;
var obj75668_onTap_runningActionsCount = 0;
var obj75668_onTap_loopCount = 0;
var obj75660_onTap_activeActionGroupIndex = -1;
var obj75660_onTap_runningActionsCount = 0;
var obj75660_onTap_loopCount = 0;
var obj87729_onTap_activeActionGroupIndex = -1;
var obj87729_onTap_runningActionsCount = 0;
var obj87729_onTap_loopCount = 0;
var obj87724_onTap_activeActionGroupIndex = -1;
var obj87724_onTap_runningActionsCount = 0;
var obj87724_onTap_loopCount = 0;
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
		
obj75844_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75844_onTap_activeActionGroupIndex = -1;
		$("#obj75844").trigger("obj75844_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75844) {
				console.warn("de-queueing event obj75844." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75844").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75844_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_75846();
function goToPage_75846() {
	window.obj75844_onTap_runningActionsCount = obj75844_onTap_runningActionsCount + 1;
	$("#anchor437")[0].click();
	window.obj75844_onTap_runningActionsCount = window.obj75844_onTap_runningActionsCount - 1;
if (window.obj75844_onTap_runningActionsCount < 0) {
	window.obj75844_onTap_runningActionsCount = 0;
} else if (window.obj75844_onTap_runningActionsCount == 0) {
	obj75844_onTap_actionGroup1();
}
}





















};
obj75844_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj75844_onTap_activeActionGroupIndex = -1;
		$("#obj75844").trigger("obj75844_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75844) {
				console.warn("de-queueing event obj75844." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75844").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75844_onTap_activeActionGroupIndex = 1;
	





















};
obj75841_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75841_onTap_activeActionGroupIndex = -1;
		$("#obj75841").trigger("obj75841_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75841) {
				console.warn("de-queueing event obj75841." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75841").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75841_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_75843();
function goToPage_75843() {
	window.obj75841_onTap_runningActionsCount = obj75841_onTap_runningActionsCount + 1;
	$("#anchor438")[0].click();
	window.obj75841_onTap_runningActionsCount = window.obj75841_onTap_runningActionsCount - 1;
if (window.obj75841_onTap_runningActionsCount < 0) {
	window.obj75841_onTap_runningActionsCount = 0;
} else if (window.obj75841_onTap_runningActionsCount == 0) {
	obj75841_onTap_actionGroup1();
}
}





















};
obj75841_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj75841_onTap_activeActionGroupIndex = -1;
		$("#obj75841").trigger("obj75841_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75841) {
				console.warn("de-queueing event obj75841." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75841").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75841_onTap_activeActionGroupIndex = 1;
	





















};
obj75837_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75837_onTap_activeActionGroupIndex = -1;
		$("#obj75837").trigger("obj75837_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75837) {
				console.warn("de-queueing event obj75837." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75837").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75837_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_75839();
function goToPage_75839() {
	window.obj75837_onTap_runningActionsCount = obj75837_onTap_runningActionsCount + 1;
	$("#anchor439")[0].click();
	window.obj75837_onTap_runningActionsCount = window.obj75837_onTap_runningActionsCount - 1;
if (window.obj75837_onTap_runningActionsCount < 0) {
	window.obj75837_onTap_runningActionsCount = 0;
} else if (window.obj75837_onTap_runningActionsCount == 0) {
	obj75837_onTap_actionGroup1();
}
}





















};
obj75837_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj75837_onTap_activeActionGroupIndex = -1;
		$("#obj75837").trigger("obj75837_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75837) {
				console.warn("de-queueing event obj75837." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75837").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75837_onTap_activeActionGroupIndex = 1;
	





















};
obj75768_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75768_onTouchDown_activeActionGroupIndex = -1;
		$("#obj75768").trigger("obj75768_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75768) {
				console.warn("de-queueing event obj75768." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75768").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75768_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj75768");
//	action: dragDrop
//	target: obj75768 
dragDrop_75771();
function dragDrop_75771() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj75768_onTouchDown_runningActionsCount = obj75768_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj75768');
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
	  	containerNode = $('#obj75827');
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
    	window.obj75768_onTouchDown_runningActionsCount = window.obj75768_onTouchDown_runningActionsCount - 1;
if (window.obj75768_onTouchDown_runningActionsCount < 0) {
	window.obj75768_onTouchDown_runningActionsCount = 0;
} else if (window.obj75768_onTouchDown_runningActionsCount == 0) {
	obj75768_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj75815","#obj75819","#obj75817");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_75771 = false;
    	var dropped_id_75771;
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
					dropped_75771 = true;
					dropped_id_75771 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_75771) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj75768").trigger('SCActionDragDrop75771_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj75768_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj75768_onTouchDown_activeActionGroupIndex = -1;
		$("#obj75768").trigger("obj75768_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75768) {
				console.warn("de-queueing event obj75768." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75768").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75768_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj75768_SCActionDragDrop75771_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75768_SCActionDragDrop75771_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj75768").trigger("obj75768_SCActionDragDrop75771_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75768) {
				console.warn("de-queueing event obj75768." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75768").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75768_SCActionDragDrop75771_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj75768 
move_92332();
function move_92332() {
	window.obj75768_SCActionDragDrop75771_droppedOutsideTargetActions_runningActionsCount = obj75768_SCActionDragDrop75771_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj75768");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 389;
	var moveY = 582;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj75768_SCActionDragDrop75771_droppedOutsideTargetActions_runningActionsCount = window.obj75768_SCActionDragDrop75771_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj75768_SCActionDragDrop75771_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj75768_SCActionDragDrop75771_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj75768_SCActionDragDrop75771_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj75768_SCActionDragDrop75771_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj75768_SCActionDragDrop75771_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj75768_SCActionDragDrop75771_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj75768").trigger("obj75768_SCActionDragDrop75771_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75768) {
				console.warn("de-queueing event obj75768." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75768").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75768_SCActionDragDrop75771_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj75768_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75768_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj75768").trigger("obj75768_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75768) {
				console.warn("de-queueing event obj75768." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75768").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75768_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_75794();
function runjs_75794() {
	window.obj75768_droppedInsideTargetActions_3_runningActionsCount = obj75768_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj75817").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj75768_droppedInsideTargetActions_3_runningActionsCount = window.obj75768_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj75768_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj75768_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj75768_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj75768_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj75768_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75768_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj75768").trigger("obj75768_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75768) {
				console.warn("de-queueing event obj75768." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75768").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75768_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_75795();
function runjs_75795() {
	window.obj75768_droppedInsideTargetActions_3_runningActionsCount = obj75768_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj75817").css("border-color", "#C00000"); $("#obj75817").css("border-width", "2px"); $("#obj75817").css("border-style", "solid"); $("#obj75817").css("border-radius", "10px"); $("#obj75817").css("-webkit-border-radius", "10px"); $("#obj75817").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj75768_droppedInsideTargetActions_3_runningActionsCount = window.obj75768_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj75768_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj75768_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj75768_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj75768_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj75768_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75768_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj75768").trigger("obj75768_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75768) {
				console.warn("de-queueing event obj75768." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75768").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75768_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj75811 
hide_75796();
function hide_75796() {
	var selector = "#obj75811";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj75768_droppedInsideTargetActions_3_runningActionsCount = obj75768_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj75768_droppedInsideTargetActions_3_runningActionsCount = window.obj75768_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj75768_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj75768_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj75768_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj75768_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_75796(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj75768_droppedInsideTargetActions_3_runningActionsCount = window.obj75768_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj75768_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj75768_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj75768_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj75768_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj75768_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75768_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj75768").trigger("obj75768_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75768) {
				console.warn("de-queueing event obj75768." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75768").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75768_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_75797();
function runjs_75797() {
	window.obj75768_droppedInsideTargetActions_3_runningActionsCount = obj75768_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj75768").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj75768_droppedInsideTargetActions_3_runningActionsCount = window.obj75768_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj75768_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj75768_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj75768_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj75768_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj75768_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75768_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj75768").trigger("obj75768_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75768) {
				console.warn("de-queueing event obj75768." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75768").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75768_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_75798();
function switchText_75798() {
	window.obj75768_droppedInsideTargetActions_3_runningActionsCount = obj75768_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj75766_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj75766_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj75766").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj75766_content");
			setTimeout(function () {
				window.obj75768_droppedInsideTargetActions_3_runningActionsCount = window.obj75768_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj75768_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj75768_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj75768_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj75768_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj75766 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj75768_droppedInsideTargetActions_3_runningActionsCount = window.obj75768_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj75768_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj75768_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj75768_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj75768_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj75768_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75768_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj75768").trigger("obj75768_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75768) {
				console.warn("de-queueing event obj75768." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75768").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75768_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj75768 
move_75799();
function move_75799() {
	window.obj75768_droppedInsideTargetActions_3_runningActionsCount = obj75768_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj75768");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 389;
	var moveY = 582;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj75768_droppedInsideTargetActions_3_runningActionsCount = window.obj75768_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj75768_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj75768_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj75768_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj75768_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj75768_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75768_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj75768").trigger("obj75768_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75768) {
				console.warn("de-queueing event obj75768." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75768").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75768_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_75800();
function runjs_75800() {
	window.obj75768_droppedInsideTargetActions_3_runningActionsCount = obj75768_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj75817").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj75768_droppedInsideTargetActions_3_runningActionsCount = window.obj75768_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj75768_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj75768_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj75768_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj75768_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj75768_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75768_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj75768").trigger("obj75768_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75768) {
				console.warn("de-queueing event obj75768." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75768").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75768_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_75801();
function runjs_75801() {
	window.obj75768_droppedInsideTargetActions_3_runningActionsCount = obj75768_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj75817").css("border-color", "#000000"); $("#obj75817").css("border-width", "1px"); $("#obj75817").css("border-style", "solid"); $("#obj75817").css("border-radius", "10px"); $("#obj75817").css("-webkit-border-radius", "10px"); $("#obj75817").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj75768_droppedInsideTargetActions_3_runningActionsCount = window.obj75768_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj75768_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj75768_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj75768_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj75768_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj75768_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75768_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj75768").trigger("obj75768_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75768) {
				console.warn("de-queueing event obj75768." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75768").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75768_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj75811
(function(){
	window.obj75768_droppedInsideTargetActions_3_runningActionsCount = obj75768_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj75811";
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
					window.obj75768_droppedInsideTargetActions_3_runningActionsCount = window.obj75768_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj75768_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj75768_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj75768_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj75768_droppedInsideTargetActions_3_actionGroup9();
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
				window.obj75768_droppedInsideTargetActions_3_runningActionsCount = window.obj75768_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj75768_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj75768_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj75768_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj75768_droppedInsideTargetActions_3_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj75768_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75768_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj75768").trigger("obj75768_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75768) {
				console.warn("de-queueing event obj75768." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75768").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75768_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_75803();
function runjs_75803() {
	window.obj75768_droppedInsideTargetActions_3_runningActionsCount = obj75768_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj75768").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj75768_droppedInsideTargetActions_3_runningActionsCount = window.obj75768_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj75768_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj75768_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj75768_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj75768_droppedInsideTargetActions_3_actionGroup10();
}
	}, 1);
}







};
obj75768_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75768_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj75768").trigger("obj75768_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75768) {
				console.warn("de-queueing event obj75768." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75768").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75768_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_75804();
function runjs_75804() {
	window.obj75768_droppedInsideTargetActions_3_runningActionsCount = obj75768_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj75768").css("border-color", "rgba(0,0,0,0)"); $("#obj75768").css("border-width", "0px"); $("#obj75768").css("border-style", "solid"); $("#obj75768").css("border-radius", "10px"); $("#obj75768").css("-webkit-border-radius", "10px"); $("#obj75768").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj75768_droppedInsideTargetActions_3_runningActionsCount = window.obj75768_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj75768_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj75768_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj75768_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj75768_droppedInsideTargetActions_3_actionGroup11();
}
	}, 1);
}







};
obj75768_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75768_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj75768").trigger("obj75768_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75768) {
				console.warn("de-queueing event obj75768." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75768").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75768_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj75765 
playAudio_75805();
function playAudio_75805() {
	window.obj75768_droppedInsideTargetActions_3_runningActionsCount = obj75768_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj75765")[0];
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
		    window.obj75768_droppedInsideTargetActions_3_runningActionsCount = window.obj75768_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj75768_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj75768_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj75768_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj75768_droppedInsideTargetActions_3_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj75768_droppedInsideTargetActions_3_runningActionsCount = window.obj75768_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj75768_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj75768_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj75768_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj75768_droppedInsideTargetActions_3_actionGroup12();
}
	}
}









};
obj75768_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75768_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj75768").trigger("obj75768_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75768) {
				console.warn("de-queueing event obj75768." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75768").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75768_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_75806();
function switchText_75806() {
	window.obj75768_droppedInsideTargetActions_3_runningActionsCount = obj75768_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj75766_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj75766_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj75766").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj75766_content");
			setTimeout(function () {
				window.obj75768_droppedInsideTargetActions_3_runningActionsCount = window.obj75768_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj75768_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj75768_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj75768_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj75768_droppedInsideTargetActions_3_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj75766 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj75768_droppedInsideTargetActions_3_runningActionsCount = window.obj75768_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj75768_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj75768_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj75768_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj75768_droppedInsideTargetActions_3_actionGroup13();
}
		}, 1);
	}
}






};
obj75768_droppedInsideTargetActions_3_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj75768_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj75768").trigger("obj75768_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75768) {
				console.warn("de-queueing event obj75768." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75768").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75768_droppedInsideTargetActions_3_activeActionGroupIndex = 13;
	





















};
obj75768_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75768_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj75768").trigger("obj75768_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75768) {
				console.warn("de-queueing event obj75768." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75768").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75768_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_75780();
function runjs_75780() {
	window.obj75768_droppedInsideTargetActions_2_runningActionsCount = obj75768_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj75819").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj75768_droppedInsideTargetActions_2_runningActionsCount = window.obj75768_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj75768_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj75768_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj75768_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj75768_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj75768_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75768_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj75768").trigger("obj75768_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75768) {
				console.warn("de-queueing event obj75768." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75768").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75768_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_75781();
function runjs_75781() {
	window.obj75768_droppedInsideTargetActions_2_runningActionsCount = obj75768_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj75819").css("border-color", "#C00000"); $("#obj75819").css("border-width", "2px"); $("#obj75819").css("border-style", "solid"); $("#obj75819").css("border-radius", "10px"); $("#obj75819").css("-webkit-border-radius", "10px"); $("#obj75819").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj75768_droppedInsideTargetActions_2_runningActionsCount = window.obj75768_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj75768_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj75768_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj75768_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj75768_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj75768_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75768_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj75768").trigger("obj75768_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75768) {
				console.warn("de-queueing event obj75768." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75768").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75768_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj75813 
hide_75782();
function hide_75782() {
	var selector = "#obj75813";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj75768_droppedInsideTargetActions_2_runningActionsCount = obj75768_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj75768_droppedInsideTargetActions_2_runningActionsCount = window.obj75768_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj75768_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj75768_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj75768_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj75768_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_75782(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj75768_droppedInsideTargetActions_2_runningActionsCount = window.obj75768_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj75768_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj75768_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj75768_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj75768_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj75768_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75768_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj75768").trigger("obj75768_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75768) {
				console.warn("de-queueing event obj75768." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75768").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75768_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_75783();
function runjs_75783() {
	window.obj75768_droppedInsideTargetActions_2_runningActionsCount = obj75768_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj75768").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj75768_droppedInsideTargetActions_2_runningActionsCount = window.obj75768_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj75768_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj75768_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj75768_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj75768_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj75768_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75768_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj75768").trigger("obj75768_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75768) {
				console.warn("de-queueing event obj75768." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75768").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75768_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_75784();
function switchText_75784() {
	window.obj75768_droppedInsideTargetActions_2_runningActionsCount = obj75768_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj75766_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj75766_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj75766").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj75766_content");
			setTimeout(function () {
				window.obj75768_droppedInsideTargetActions_2_runningActionsCount = window.obj75768_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj75768_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj75768_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj75768_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj75768_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj75766 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj75768_droppedInsideTargetActions_2_runningActionsCount = window.obj75768_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj75768_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj75768_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj75768_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj75768_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj75768_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75768_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj75768").trigger("obj75768_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75768) {
				console.warn("de-queueing event obj75768." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75768").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75768_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj75768 
move_75785();
function move_75785() {
	window.obj75768_droppedInsideTargetActions_2_runningActionsCount = obj75768_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj75768");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 389;
	var moveY = 582;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj75768_droppedInsideTargetActions_2_runningActionsCount = window.obj75768_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj75768_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj75768_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj75768_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj75768_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj75768_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75768_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj75768").trigger("obj75768_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75768) {
				console.warn("de-queueing event obj75768." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75768").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75768_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_75786();
function runjs_75786() {
	window.obj75768_droppedInsideTargetActions_2_runningActionsCount = obj75768_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj75819").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj75768_droppedInsideTargetActions_2_runningActionsCount = window.obj75768_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj75768_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj75768_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj75768_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj75768_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj75768_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75768_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj75768").trigger("obj75768_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75768) {
				console.warn("de-queueing event obj75768." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75768").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75768_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_75787();
function runjs_75787() {
	window.obj75768_droppedInsideTargetActions_2_runningActionsCount = obj75768_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj75819").css("border-color", "#000000"); $("#obj75819").css("border-width", "1px"); $("#obj75819").css("border-style", "solid"); $("#obj75819").css("border-radius", "10px"); $("#obj75819").css("-webkit-border-radius", "10px"); $("#obj75819").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj75768_droppedInsideTargetActions_2_runningActionsCount = window.obj75768_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj75768_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj75768_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj75768_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj75768_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj75768_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75768_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj75768").trigger("obj75768_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75768) {
				console.warn("de-queueing event obj75768." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75768").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75768_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj75813
(function(){
	window.obj75768_droppedInsideTargetActions_2_runningActionsCount = obj75768_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj75813";
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
					window.obj75768_droppedInsideTargetActions_2_runningActionsCount = window.obj75768_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj75768_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj75768_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj75768_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj75768_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj75768_droppedInsideTargetActions_2_runningActionsCount = window.obj75768_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj75768_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj75768_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj75768_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj75768_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj75768_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75768_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj75768").trigger("obj75768_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75768) {
				console.warn("de-queueing event obj75768." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75768").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75768_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_75789();
function runjs_75789() {
	window.obj75768_droppedInsideTargetActions_2_runningActionsCount = obj75768_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj75768").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj75768_droppedInsideTargetActions_2_runningActionsCount = window.obj75768_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj75768_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj75768_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj75768_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj75768_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj75768_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75768_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj75768").trigger("obj75768_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75768) {
				console.warn("de-queueing event obj75768." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75768").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75768_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_75790();
function runjs_75790() {
	window.obj75768_droppedInsideTargetActions_2_runningActionsCount = obj75768_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj75768").css("border-color", "rgba(0,0,0,0)"); $("#obj75768").css("border-width", "0px"); $("#obj75768").css("border-style", "solid"); $("#obj75768").css("border-radius", "10px"); $("#obj75768").css("-webkit-border-radius", "10px"); $("#obj75768").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj75768_droppedInsideTargetActions_2_runningActionsCount = window.obj75768_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj75768_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj75768_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj75768_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj75768_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj75768_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75768_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj75768").trigger("obj75768_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75768) {
				console.warn("de-queueing event obj75768." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75768").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75768_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj75765 
playAudio_75791();
function playAudio_75791() {
	window.obj75768_droppedInsideTargetActions_2_runningActionsCount = obj75768_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj75765")[0];
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
		    window.obj75768_droppedInsideTargetActions_2_runningActionsCount = window.obj75768_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj75768_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj75768_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj75768_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj75768_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj75768_droppedInsideTargetActions_2_runningActionsCount = window.obj75768_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj75768_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj75768_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj75768_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj75768_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj75768_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75768_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj75768").trigger("obj75768_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75768) {
				console.warn("de-queueing event obj75768." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75768").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75768_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_75792();
function switchText_75792() {
	window.obj75768_droppedInsideTargetActions_2_runningActionsCount = obj75768_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj75766_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj75766_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj75766").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj75766_content");
			setTimeout(function () {
				window.obj75768_droppedInsideTargetActions_2_runningActionsCount = window.obj75768_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj75768_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj75768_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj75768_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj75768_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj75766 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj75768_droppedInsideTargetActions_2_runningActionsCount = window.obj75768_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj75768_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj75768_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj75768_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj75768_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj75768_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj75768_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj75768").trigger("obj75768_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75768) {
				console.warn("de-queueing event obj75768." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75768").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75768_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj75768_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75768_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj75768").trigger("obj75768_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75768) {
				console.warn("de-queueing event obj75768." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75768").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75768_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_75773();
function runjs_75773() {
	window.obj75768_droppedInsideTargetActions_runningActionsCount = obj75768_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj75815").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj75768_droppedInsideTargetActions_runningActionsCount = window.obj75768_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj75768_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj75768_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj75768_droppedInsideTargetActions_runningActionsCount == 0) {
	obj75768_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj75768_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75768_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj75768").trigger("obj75768_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75768) {
				console.warn("de-queueing event obj75768." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75768").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75768_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_75777();
function switchText_75777() {
	window.obj75768_droppedInsideTargetActions_runningActionsCount = obj75768_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj75766_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj75766_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj75766").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj75766_content");
			setTimeout(function () {
				window.obj75768_droppedInsideTargetActions_runningActionsCount = window.obj75768_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj75768_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj75768_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj75768_droppedInsideTargetActions_runningActionsCount == 0) {
	obj75768_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj75766 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj75768_droppedInsideTargetActions_runningActionsCount = window.obj75768_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj75768_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj75768_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj75768_droppedInsideTargetActions_runningActionsCount == 0) {
	obj75768_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj75768_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75768_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj75768").trigger("obj75768_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75768) {
				console.warn("de-queueing event obj75768." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75768").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75768_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_75774();
function runjs_75774() {
	window.obj75768_droppedInsideTargetActions_runningActionsCount = obj75768_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj75815").css("border-color", "#058E3F"); $("#obj75815").css("border-width", "2px"); $("#obj75815").css("border-style", "solid"); $("#obj75815").css("border-radius", "10px"); $("#obj75815").css("-webkit-border-radius", "10px"); $("#obj75815").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj75768_droppedInsideTargetActions_runningActionsCount = window.obj75768_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj75768_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj75768_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj75768_droppedInsideTargetActions_runningActionsCount == 0) {
	obj75768_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj75768_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75768_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj75768").trigger("obj75768_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75768) {
				console.warn("de-queueing event obj75768." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75768").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75768_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj75809 
hide_75775();
function hide_75775() {
	var selector = "#obj75809";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj75768_droppedInsideTargetActions_runningActionsCount = obj75768_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj75768_droppedInsideTargetActions_runningActionsCount = window.obj75768_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj75768_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj75768_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj75768_droppedInsideTargetActions_runningActionsCount == 0) {
	obj75768_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_75775(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj75768_droppedInsideTargetActions_runningActionsCount = window.obj75768_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj75768_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj75768_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj75768_droppedInsideTargetActions_runningActionsCount == 0) {
	obj75768_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj75768_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75768_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj75768").trigger("obj75768_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75768) {
				console.warn("de-queueing event obj75768." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75768").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75768_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_75776();
function runjs_75776() {
	window.obj75768_droppedInsideTargetActions_runningActionsCount = obj75768_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj75768").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj75768_droppedInsideTargetActions_runningActionsCount = window.obj75768_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj75768_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj75768_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj75768_droppedInsideTargetActions_runningActionsCount == 0) {
	obj75768_droppedInsideTargetActions_actionGroup5();
}
	}, 1);
}







};
obj75768_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75768_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj75768").trigger("obj75768_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75768) {
				console.warn("de-queueing event obj75768." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75768").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75768_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj75764 
playAudio_75778();
function playAudio_75778() {
	window.obj75768_droppedInsideTargetActions_runningActionsCount = obj75768_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj75764")[0];
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
		    window.obj75768_droppedInsideTargetActions_runningActionsCount = window.obj75768_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj75768_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj75768_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj75768_droppedInsideTargetActions_runningActionsCount == 0) {
	obj75768_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj75768_droppedInsideTargetActions_runningActionsCount = window.obj75768_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj75768_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj75768_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj75768_droppedInsideTargetActions_runningActionsCount == 0) {
	obj75768_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj75768_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75768_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj75768").trigger("obj75768_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75768) {
				console.warn("de-queueing event obj75768." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75768").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75768_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90265();
function switchText_90265() {
	window.obj75768_droppedInsideTargetActions_runningActionsCount = obj75768_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj75766_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj75766_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj75766").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj75766_content");
			setTimeout(function () {
				window.obj75768_droppedInsideTargetActions_runningActionsCount = window.obj75768_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj75768_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj75768_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj75768_droppedInsideTargetActions_runningActionsCount == 0) {
	obj75768_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj75766 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj75768_droppedInsideTargetActions_runningActionsCount = window.obj75768_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj75768_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj75768_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj75768_droppedInsideTargetActions_runningActionsCount == 0) {
	obj75768_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj75768_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj75768_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj75768").trigger("obj75768_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75768) {
				console.warn("de-queueing event obj75768." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75768").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75768_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj75725_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75725_onTouchDown_activeActionGroupIndex = -1;
		$("#obj75725").trigger("obj75725_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75725) {
				console.warn("de-queueing event obj75725." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75725").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75725_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj75725");
//	action: dragDrop
//	target: obj75725 
dragDrop_75728();
function dragDrop_75728() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj75725_onTouchDown_runningActionsCount = obj75725_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj75725');
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
	  	containerNode = $('#obj75827');
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
    	window.obj75725_onTouchDown_runningActionsCount = window.obj75725_onTouchDown_runningActionsCount - 1;
if (window.obj75725_onTouchDown_runningActionsCount < 0) {
	window.obj75725_onTouchDown_runningActionsCount = 0;
} else if (window.obj75725_onTouchDown_runningActionsCount == 0) {
	obj75725_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj75817","#obj75819","#obj75815");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_75728 = false;
    	var dropped_id_75728;
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
					dropped_75728 = true;
					dropped_id_75728 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_75728) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj75725").trigger('SCActionDragDrop75728_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj75725_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj75725_onTouchDown_activeActionGroupIndex = -1;
		$("#obj75725").trigger("obj75725_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75725) {
				console.warn("de-queueing event obj75725." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75725").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75725_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj75725_SCActionDragDrop75728_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75725_SCActionDragDrop75728_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj75725").trigger("obj75725_SCActionDragDrop75728_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75725) {
				console.warn("de-queueing event obj75725." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75725").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75725_SCActionDragDrop75728_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj75725 
move_92330();
function move_92330() {
	window.obj75725_SCActionDragDrop75728_droppedOutsideTargetActions_runningActionsCount = obj75725_SCActionDragDrop75728_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj75725");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 231;
	var moveY = 582;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj75725_SCActionDragDrop75728_droppedOutsideTargetActions_runningActionsCount = window.obj75725_SCActionDragDrop75728_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj75725_SCActionDragDrop75728_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj75725_SCActionDragDrop75728_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj75725_SCActionDragDrop75728_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj75725_SCActionDragDrop75728_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj75725_SCActionDragDrop75728_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj75725_SCActionDragDrop75728_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj75725").trigger("obj75725_SCActionDragDrop75728_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75725) {
				console.warn("de-queueing event obj75725." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75725").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75725_SCActionDragDrop75728_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj75725_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75725_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj75725").trigger("obj75725_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75725) {
				console.warn("de-queueing event obj75725." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75725").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75725_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_75751();
function runjs_75751() {
	window.obj75725_droppedInsideTargetActions_3_runningActionsCount = obj75725_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj75815").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj75725_droppedInsideTargetActions_3_runningActionsCount = window.obj75725_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj75725_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj75725_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj75725_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj75725_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj75725_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75725_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj75725").trigger("obj75725_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75725) {
				console.warn("de-queueing event obj75725." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75725").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75725_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_75752();
function runjs_75752() {
	window.obj75725_droppedInsideTargetActions_3_runningActionsCount = obj75725_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj75815").css("border-color", "#C00000"); $("#obj75815").css("border-width", "2px"); $("#obj75815").css("border-style", "solid"); $("#obj75815").css("border-radius", "10px"); $("#obj75815").css("-webkit-border-radius", "10px"); $("#obj75815").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj75725_droppedInsideTargetActions_3_runningActionsCount = window.obj75725_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj75725_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj75725_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj75725_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj75725_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj75725_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75725_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj75725").trigger("obj75725_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75725) {
				console.warn("de-queueing event obj75725." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75725").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75725_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj75809 
hide_75753();
function hide_75753() {
	var selector = "#obj75809";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj75725_droppedInsideTargetActions_3_runningActionsCount = obj75725_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj75725_droppedInsideTargetActions_3_runningActionsCount = window.obj75725_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj75725_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj75725_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj75725_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj75725_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_75753(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj75725_droppedInsideTargetActions_3_runningActionsCount = window.obj75725_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj75725_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj75725_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj75725_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj75725_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj75725_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75725_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj75725").trigger("obj75725_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75725) {
				console.warn("de-queueing event obj75725." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75725").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75725_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_75754();
function runjs_75754() {
	window.obj75725_droppedInsideTargetActions_3_runningActionsCount = obj75725_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj75725").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj75725_droppedInsideTargetActions_3_runningActionsCount = window.obj75725_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj75725_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj75725_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj75725_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj75725_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj75725_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75725_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj75725").trigger("obj75725_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75725) {
				console.warn("de-queueing event obj75725." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75725").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75725_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_75755();
function switchText_75755() {
	window.obj75725_droppedInsideTargetActions_3_runningActionsCount = obj75725_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj75766_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj75766_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj75766").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj75766_content");
			setTimeout(function () {
				window.obj75725_droppedInsideTargetActions_3_runningActionsCount = window.obj75725_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj75725_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj75725_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj75725_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj75725_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj75766 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj75725_droppedInsideTargetActions_3_runningActionsCount = window.obj75725_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj75725_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj75725_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj75725_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj75725_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj75725_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75725_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj75725").trigger("obj75725_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75725) {
				console.warn("de-queueing event obj75725." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75725").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75725_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj75725 
move_75756();
function move_75756() {
	window.obj75725_droppedInsideTargetActions_3_runningActionsCount = obj75725_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj75725");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 231;
	var moveY = 582;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj75725_droppedInsideTargetActions_3_runningActionsCount = window.obj75725_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj75725_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj75725_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj75725_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj75725_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj75725_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75725_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj75725").trigger("obj75725_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75725) {
				console.warn("de-queueing event obj75725." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75725").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75725_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_75757();
function runjs_75757() {
	window.obj75725_droppedInsideTargetActions_3_runningActionsCount = obj75725_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj75815").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj75725_droppedInsideTargetActions_3_runningActionsCount = window.obj75725_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj75725_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj75725_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj75725_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj75725_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj75725_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75725_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj75725").trigger("obj75725_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75725) {
				console.warn("de-queueing event obj75725." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75725").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75725_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_75758();
function runjs_75758() {
	window.obj75725_droppedInsideTargetActions_3_runningActionsCount = obj75725_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj75815").css("border-color", "#000000"); $("#obj75815").css("border-width", "1px"); $("#obj75815").css("border-style", "solid"); $("#obj75815").css("border-radius", "10px"); $("#obj75815").css("-webkit-border-radius", "10px"); $("#obj75815").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj75725_droppedInsideTargetActions_3_runningActionsCount = window.obj75725_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj75725_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj75725_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj75725_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj75725_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj75725_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75725_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj75725").trigger("obj75725_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75725) {
				console.warn("de-queueing event obj75725." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75725").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75725_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj75809
(function(){
	window.obj75725_droppedInsideTargetActions_3_runningActionsCount = obj75725_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj75809";
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
					window.obj75725_droppedInsideTargetActions_3_runningActionsCount = window.obj75725_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj75725_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj75725_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj75725_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj75725_droppedInsideTargetActions_3_actionGroup9();
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
				window.obj75725_droppedInsideTargetActions_3_runningActionsCount = window.obj75725_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj75725_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj75725_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj75725_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj75725_droppedInsideTargetActions_3_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj75725_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75725_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj75725").trigger("obj75725_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75725) {
				console.warn("de-queueing event obj75725." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75725").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75725_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_75760();
function runjs_75760() {
	window.obj75725_droppedInsideTargetActions_3_runningActionsCount = obj75725_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj75725").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj75725_droppedInsideTargetActions_3_runningActionsCount = window.obj75725_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj75725_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj75725_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj75725_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj75725_droppedInsideTargetActions_3_actionGroup10();
}
	}, 1);
}







};
obj75725_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75725_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj75725").trigger("obj75725_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75725) {
				console.warn("de-queueing event obj75725." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75725").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75725_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_75761();
function runjs_75761() {
	window.obj75725_droppedInsideTargetActions_3_runningActionsCount = obj75725_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj75725").css("border-color", "rgba(0,0,0,0)"); $("#obj75725").css("border-width", "0px"); $("#obj75725").css("border-style", "solid"); $("#obj75725").css("border-radius", "10px"); $("#obj75725").css("-webkit-border-radius", "10px"); $("#obj75725").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj75725_droppedInsideTargetActions_3_runningActionsCount = window.obj75725_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj75725_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj75725_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj75725_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj75725_droppedInsideTargetActions_3_actionGroup11();
}
	}, 1);
}







};
obj75725_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75725_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj75725").trigger("obj75725_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75725) {
				console.warn("de-queueing event obj75725." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75725").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75725_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj75765 
playAudio_75762();
function playAudio_75762() {
	window.obj75725_droppedInsideTargetActions_3_runningActionsCount = obj75725_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj75765")[0];
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
		    window.obj75725_droppedInsideTargetActions_3_runningActionsCount = window.obj75725_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj75725_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj75725_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj75725_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj75725_droppedInsideTargetActions_3_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj75725_droppedInsideTargetActions_3_runningActionsCount = window.obj75725_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj75725_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj75725_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj75725_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj75725_droppedInsideTargetActions_3_actionGroup12();
}
	}
}









};
obj75725_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75725_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj75725").trigger("obj75725_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75725) {
				console.warn("de-queueing event obj75725." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75725").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75725_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_75763();
function switchText_75763() {
	window.obj75725_droppedInsideTargetActions_3_runningActionsCount = obj75725_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj75766_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj75766_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj75766").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj75766_content");
			setTimeout(function () {
				window.obj75725_droppedInsideTargetActions_3_runningActionsCount = window.obj75725_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj75725_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj75725_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj75725_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj75725_droppedInsideTargetActions_3_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj75766 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj75725_droppedInsideTargetActions_3_runningActionsCount = window.obj75725_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj75725_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj75725_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj75725_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj75725_droppedInsideTargetActions_3_actionGroup13();
}
		}, 1);
	}
}






};
obj75725_droppedInsideTargetActions_3_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj75725_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj75725").trigger("obj75725_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75725) {
				console.warn("de-queueing event obj75725." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75725").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75725_droppedInsideTargetActions_3_activeActionGroupIndex = 13;
	





















};
obj75725_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75725_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj75725").trigger("obj75725_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75725) {
				console.warn("de-queueing event obj75725." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75725").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75725_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_75737();
function runjs_75737() {
	window.obj75725_droppedInsideTargetActions_2_runningActionsCount = obj75725_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj75819").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj75725_droppedInsideTargetActions_2_runningActionsCount = window.obj75725_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj75725_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj75725_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj75725_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj75725_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj75725_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75725_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj75725").trigger("obj75725_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75725) {
				console.warn("de-queueing event obj75725." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75725").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75725_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_75738();
function runjs_75738() {
	window.obj75725_droppedInsideTargetActions_2_runningActionsCount = obj75725_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj75819").css("border-color", "#C00000"); $("#obj75819").css("border-width", "2px"); $("#obj75819").css("border-style", "solid"); $("#obj75819").css("border-radius", "10px"); $("#obj75819").css("-webkit-border-radius", "10px"); $("#obj75819").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj75725_droppedInsideTargetActions_2_runningActionsCount = window.obj75725_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj75725_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj75725_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj75725_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj75725_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj75725_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75725_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj75725").trigger("obj75725_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75725) {
				console.warn("de-queueing event obj75725." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75725").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75725_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj75813 
hide_75739();
function hide_75739() {
	var selector = "#obj75813";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj75725_droppedInsideTargetActions_2_runningActionsCount = obj75725_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj75725_droppedInsideTargetActions_2_runningActionsCount = window.obj75725_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj75725_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj75725_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj75725_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj75725_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_75739(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj75725_droppedInsideTargetActions_2_runningActionsCount = window.obj75725_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj75725_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj75725_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj75725_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj75725_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj75725_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75725_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj75725").trigger("obj75725_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75725) {
				console.warn("de-queueing event obj75725." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75725").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75725_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_75740();
function runjs_75740() {
	window.obj75725_droppedInsideTargetActions_2_runningActionsCount = obj75725_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj75725").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj75725_droppedInsideTargetActions_2_runningActionsCount = window.obj75725_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj75725_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj75725_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj75725_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj75725_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj75725_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75725_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj75725").trigger("obj75725_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75725) {
				console.warn("de-queueing event obj75725." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75725").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75725_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_75741();
function switchText_75741() {
	window.obj75725_droppedInsideTargetActions_2_runningActionsCount = obj75725_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj75766_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj75766_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj75766").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj75766_content");
			setTimeout(function () {
				window.obj75725_droppedInsideTargetActions_2_runningActionsCount = window.obj75725_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj75725_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj75725_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj75725_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj75725_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj75766 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj75725_droppedInsideTargetActions_2_runningActionsCount = window.obj75725_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj75725_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj75725_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj75725_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj75725_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj75725_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75725_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj75725").trigger("obj75725_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75725) {
				console.warn("de-queueing event obj75725." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75725").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75725_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj75725 
move_75742();
function move_75742() {
	window.obj75725_droppedInsideTargetActions_2_runningActionsCount = obj75725_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj75725");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 231;
	var moveY = 582;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj75725_droppedInsideTargetActions_2_runningActionsCount = window.obj75725_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj75725_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj75725_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj75725_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj75725_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj75725_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75725_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj75725").trigger("obj75725_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75725) {
				console.warn("de-queueing event obj75725." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75725").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75725_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_75743();
function runjs_75743() {
	window.obj75725_droppedInsideTargetActions_2_runningActionsCount = obj75725_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj75819").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj75725_droppedInsideTargetActions_2_runningActionsCount = window.obj75725_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj75725_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj75725_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj75725_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj75725_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj75725_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75725_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj75725").trigger("obj75725_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75725) {
				console.warn("de-queueing event obj75725." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75725").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75725_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_75744();
function runjs_75744() {
	window.obj75725_droppedInsideTargetActions_2_runningActionsCount = obj75725_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj75819").css("border-color", "#000000"); $("#obj75819").css("border-width", "1px"); $("#obj75819").css("border-style", "solid"); $("#obj75819").css("border-radius", "10px"); $("#obj75819").css("-webkit-border-radius", "10px"); $("#obj75819").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj75725_droppedInsideTargetActions_2_runningActionsCount = window.obj75725_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj75725_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj75725_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj75725_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj75725_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj75725_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75725_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj75725").trigger("obj75725_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75725) {
				console.warn("de-queueing event obj75725." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75725").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75725_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj75813
(function(){
	window.obj75725_droppedInsideTargetActions_2_runningActionsCount = obj75725_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj75813";
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
					window.obj75725_droppedInsideTargetActions_2_runningActionsCount = window.obj75725_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj75725_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj75725_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj75725_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj75725_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj75725_droppedInsideTargetActions_2_runningActionsCount = window.obj75725_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj75725_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj75725_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj75725_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj75725_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj75725_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75725_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj75725").trigger("obj75725_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75725) {
				console.warn("de-queueing event obj75725." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75725").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75725_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_75746();
function runjs_75746() {
	window.obj75725_droppedInsideTargetActions_2_runningActionsCount = obj75725_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj75725").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj75725_droppedInsideTargetActions_2_runningActionsCount = window.obj75725_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj75725_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj75725_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj75725_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj75725_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj75725_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75725_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj75725").trigger("obj75725_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75725) {
				console.warn("de-queueing event obj75725." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75725").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75725_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_75747();
function runjs_75747() {
	window.obj75725_droppedInsideTargetActions_2_runningActionsCount = obj75725_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj75725").css("border-color", "rgba(0,0,0,0)"); $("#obj75725").css("border-width", "0px"); $("#obj75725").css("border-style", "solid"); $("#obj75725").css("border-radius", "10px"); $("#obj75725").css("-webkit-border-radius", "10px"); $("#obj75725").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj75725_droppedInsideTargetActions_2_runningActionsCount = window.obj75725_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj75725_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj75725_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj75725_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj75725_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj75725_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75725_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj75725").trigger("obj75725_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75725) {
				console.warn("de-queueing event obj75725." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75725").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75725_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj75765 
playAudio_75748();
function playAudio_75748() {
	window.obj75725_droppedInsideTargetActions_2_runningActionsCount = obj75725_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj75765")[0];
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
		    window.obj75725_droppedInsideTargetActions_2_runningActionsCount = window.obj75725_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj75725_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj75725_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj75725_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj75725_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj75725_droppedInsideTargetActions_2_runningActionsCount = window.obj75725_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj75725_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj75725_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj75725_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj75725_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj75725_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75725_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj75725").trigger("obj75725_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75725) {
				console.warn("de-queueing event obj75725." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75725").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75725_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_75749();
function switchText_75749() {
	window.obj75725_droppedInsideTargetActions_2_runningActionsCount = obj75725_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj75766_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj75766_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj75766").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj75766_content");
			setTimeout(function () {
				window.obj75725_droppedInsideTargetActions_2_runningActionsCount = window.obj75725_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj75725_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj75725_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj75725_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj75725_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj75766 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj75725_droppedInsideTargetActions_2_runningActionsCount = window.obj75725_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj75725_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj75725_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj75725_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj75725_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj75725_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj75725_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj75725").trigger("obj75725_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75725) {
				console.warn("de-queueing event obj75725." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75725").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75725_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj75725_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75725_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj75725").trigger("obj75725_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75725) {
				console.warn("de-queueing event obj75725." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75725").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75725_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_75730();
function runjs_75730() {
	window.obj75725_droppedInsideTargetActions_runningActionsCount = obj75725_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj75817").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj75725_droppedInsideTargetActions_runningActionsCount = window.obj75725_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj75725_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj75725_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj75725_droppedInsideTargetActions_runningActionsCount == 0) {
	obj75725_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj75725_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75725_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj75725").trigger("obj75725_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75725) {
				console.warn("de-queueing event obj75725." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75725").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75725_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_75734();
function switchText_75734() {
	window.obj75725_droppedInsideTargetActions_runningActionsCount = obj75725_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj75766_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj75766_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj75766").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj75766_content");
			setTimeout(function () {
				window.obj75725_droppedInsideTargetActions_runningActionsCount = window.obj75725_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj75725_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj75725_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj75725_droppedInsideTargetActions_runningActionsCount == 0) {
	obj75725_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj75766 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj75725_droppedInsideTargetActions_runningActionsCount = window.obj75725_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj75725_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj75725_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj75725_droppedInsideTargetActions_runningActionsCount == 0) {
	obj75725_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj75725_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75725_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj75725").trigger("obj75725_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75725) {
				console.warn("de-queueing event obj75725." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75725").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75725_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_75731();
function runjs_75731() {
	window.obj75725_droppedInsideTargetActions_runningActionsCount = obj75725_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj75817").css("border-color", "#058E3F"); $("#obj75817").css("border-width", "2px"); $("#obj75817").css("border-style", "solid"); $("#obj75817").css("border-radius", "10px"); $("#obj75817").css("-webkit-border-radius", "10px"); $("#obj75817").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj75725_droppedInsideTargetActions_runningActionsCount = window.obj75725_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj75725_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj75725_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj75725_droppedInsideTargetActions_runningActionsCount == 0) {
	obj75725_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj75725_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75725_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj75725").trigger("obj75725_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75725) {
				console.warn("de-queueing event obj75725." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75725").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75725_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj75811 
hide_75732();
function hide_75732() {
	var selector = "#obj75811";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj75725_droppedInsideTargetActions_runningActionsCount = obj75725_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj75725_droppedInsideTargetActions_runningActionsCount = window.obj75725_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj75725_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj75725_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj75725_droppedInsideTargetActions_runningActionsCount == 0) {
	obj75725_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_75732(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj75725_droppedInsideTargetActions_runningActionsCount = window.obj75725_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj75725_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj75725_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj75725_droppedInsideTargetActions_runningActionsCount == 0) {
	obj75725_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj75725_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75725_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj75725").trigger("obj75725_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75725) {
				console.warn("de-queueing event obj75725." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75725").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75725_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_75733();
function runjs_75733() {
	window.obj75725_droppedInsideTargetActions_runningActionsCount = obj75725_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj75725").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj75725_droppedInsideTargetActions_runningActionsCount = window.obj75725_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj75725_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj75725_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj75725_droppedInsideTargetActions_runningActionsCount == 0) {
	obj75725_droppedInsideTargetActions_actionGroup5();
}
	}, 1);
}







};
obj75725_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75725_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj75725").trigger("obj75725_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75725) {
				console.warn("de-queueing event obj75725." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75725").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75725_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj75764 
playAudio_75735();
function playAudio_75735() {
	window.obj75725_droppedInsideTargetActions_runningActionsCount = obj75725_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj75764")[0];
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
		    window.obj75725_droppedInsideTargetActions_runningActionsCount = window.obj75725_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj75725_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj75725_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj75725_droppedInsideTargetActions_runningActionsCount == 0) {
	obj75725_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj75725_droppedInsideTargetActions_runningActionsCount = window.obj75725_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj75725_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj75725_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj75725_droppedInsideTargetActions_runningActionsCount == 0) {
	obj75725_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj75725_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75725_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj75725").trigger("obj75725_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75725) {
				console.warn("de-queueing event obj75725." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75725").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75725_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90264();
function switchText_90264() {
	window.obj75725_droppedInsideTargetActions_runningActionsCount = obj75725_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj75766_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj75766_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj75766").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj75766_content");
			setTimeout(function () {
				window.obj75725_droppedInsideTargetActions_runningActionsCount = window.obj75725_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj75725_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj75725_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj75725_droppedInsideTargetActions_runningActionsCount == 0) {
	obj75725_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj75766 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj75725_droppedInsideTargetActions_runningActionsCount = window.obj75725_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj75725_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj75725_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj75725_droppedInsideTargetActions_runningActionsCount == 0) {
	obj75725_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj75725_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj75725_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj75725").trigger("obj75725_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75725) {
				console.warn("de-queueing event obj75725." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75725").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75725_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj75686_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75686_onTouchDown_activeActionGroupIndex = -1;
		$("#obj75686").trigger("obj75686_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75686) {
				console.warn("de-queueing event obj75686." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75686").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75686_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj75686");
//	action: dragDrop
//	target: obj75686 
dragDrop_75689();
function dragDrop_75689() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj75686_onTouchDown_runningActionsCount = obj75686_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj75686');
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
	  	containerNode = $('#obj75827');
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
    	window.obj75686_onTouchDown_runningActionsCount = window.obj75686_onTouchDown_runningActionsCount - 1;
if (window.obj75686_onTouchDown_runningActionsCount < 0) {
	window.obj75686_onTouchDown_runningActionsCount = 0;
} else if (window.obj75686_onTouchDown_runningActionsCount == 0) {
	obj75686_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj75819","#obj75817","#obj75815");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_75689 = false;
    	var dropped_id_75689;
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
					dropped_75689 = true;
					dropped_id_75689 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_75689) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj75686").trigger('SCActionDragDrop75689_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj75686_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj75686_onTouchDown_activeActionGroupIndex = -1;
		$("#obj75686").trigger("obj75686_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75686) {
				console.warn("de-queueing event obj75686." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75686").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75686_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj75686_SCActionDragDrop75689_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75686_SCActionDragDrop75689_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj75686").trigger("obj75686_SCActionDragDrop75689_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75686) {
				console.warn("de-queueing event obj75686." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75686").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75686_SCActionDragDrop75689_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj75686 
move_92328();
function move_92328() {
	window.obj75686_SCActionDragDrop75689_droppedOutsideTargetActions_runningActionsCount = obj75686_SCActionDragDrop75689_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj75686");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 73;
	var moveY = 582;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj75686_SCActionDragDrop75689_droppedOutsideTargetActions_runningActionsCount = window.obj75686_SCActionDragDrop75689_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj75686_SCActionDragDrop75689_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj75686_SCActionDragDrop75689_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj75686_SCActionDragDrop75689_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj75686_SCActionDragDrop75689_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj75686_SCActionDragDrop75689_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj75686_SCActionDragDrop75689_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj75686").trigger("obj75686_SCActionDragDrop75689_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75686) {
				console.warn("de-queueing event obj75686." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75686").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75686_SCActionDragDrop75689_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj75686_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75686_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj75686").trigger("obj75686_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75686) {
				console.warn("de-queueing event obj75686." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75686").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75686_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_75712();
function runjs_75712() {
	window.obj75686_droppedInsideTargetActions_3_runningActionsCount = obj75686_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj75815").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj75686_droppedInsideTargetActions_3_runningActionsCount = window.obj75686_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj75686_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj75686_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj75686_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj75686_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj75686_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75686_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj75686").trigger("obj75686_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75686) {
				console.warn("de-queueing event obj75686." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75686").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75686_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_75713();
function runjs_75713() {
	window.obj75686_droppedInsideTargetActions_3_runningActionsCount = obj75686_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj75815").css("border-color", "#C00000"); $("#obj75815").css("border-width", "2px"); $("#obj75815").css("border-style", "solid"); $("#obj75815").css("border-radius", "10px"); $("#obj75815").css("-webkit-border-radius", "10px"); $("#obj75815").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj75686_droppedInsideTargetActions_3_runningActionsCount = window.obj75686_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj75686_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj75686_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj75686_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj75686_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj75686_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75686_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj75686").trigger("obj75686_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75686) {
				console.warn("de-queueing event obj75686." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75686").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75686_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj75809 
hide_75714();
function hide_75714() {
	var selector = "#obj75809";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj75686_droppedInsideTargetActions_3_runningActionsCount = obj75686_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj75686_droppedInsideTargetActions_3_runningActionsCount = window.obj75686_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj75686_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj75686_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj75686_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj75686_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_75714(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj75686_droppedInsideTargetActions_3_runningActionsCount = window.obj75686_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj75686_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj75686_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj75686_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj75686_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj75686_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75686_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj75686").trigger("obj75686_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75686) {
				console.warn("de-queueing event obj75686." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75686").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75686_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_75715();
function runjs_75715() {
	window.obj75686_droppedInsideTargetActions_3_runningActionsCount = obj75686_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj75686").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj75686_droppedInsideTargetActions_3_runningActionsCount = window.obj75686_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj75686_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj75686_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj75686_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj75686_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj75686_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75686_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj75686").trigger("obj75686_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75686) {
				console.warn("de-queueing event obj75686." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75686").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75686_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_75716();
function switchText_75716() {
	window.obj75686_droppedInsideTargetActions_3_runningActionsCount = obj75686_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj75766_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj75766_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj75766").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj75766_content");
			setTimeout(function () {
				window.obj75686_droppedInsideTargetActions_3_runningActionsCount = window.obj75686_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj75686_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj75686_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj75686_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj75686_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj75766 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj75686_droppedInsideTargetActions_3_runningActionsCount = window.obj75686_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj75686_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj75686_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj75686_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj75686_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj75686_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75686_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj75686").trigger("obj75686_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75686) {
				console.warn("de-queueing event obj75686." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75686").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75686_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj75686 
move_75717();
function move_75717() {
	window.obj75686_droppedInsideTargetActions_3_runningActionsCount = obj75686_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj75686");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 73;
	var moveY = 582;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj75686_droppedInsideTargetActions_3_runningActionsCount = window.obj75686_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj75686_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj75686_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj75686_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj75686_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj75686_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75686_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj75686").trigger("obj75686_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75686) {
				console.warn("de-queueing event obj75686." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75686").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75686_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_75718();
function runjs_75718() {
	window.obj75686_droppedInsideTargetActions_3_runningActionsCount = obj75686_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj75815").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj75686_droppedInsideTargetActions_3_runningActionsCount = window.obj75686_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj75686_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj75686_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj75686_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj75686_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj75686_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75686_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj75686").trigger("obj75686_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75686) {
				console.warn("de-queueing event obj75686." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75686").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75686_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_75719();
function runjs_75719() {
	window.obj75686_droppedInsideTargetActions_3_runningActionsCount = obj75686_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj75815").css("border-color", "#000000"); $("#obj75815").css("border-width", "1px"); $("#obj75815").css("border-style", "solid"); $("#obj75815").css("border-radius", "10px"); $("#obj75815").css("-webkit-border-radius", "10px"); $("#obj75815").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj75686_droppedInsideTargetActions_3_runningActionsCount = window.obj75686_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj75686_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj75686_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj75686_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj75686_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj75686_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75686_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj75686").trigger("obj75686_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75686) {
				console.warn("de-queueing event obj75686." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75686").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75686_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj75809
(function(){
	window.obj75686_droppedInsideTargetActions_3_runningActionsCount = obj75686_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj75809";
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
					window.obj75686_droppedInsideTargetActions_3_runningActionsCount = window.obj75686_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj75686_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj75686_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj75686_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj75686_droppedInsideTargetActions_3_actionGroup9();
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
				window.obj75686_droppedInsideTargetActions_3_runningActionsCount = window.obj75686_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj75686_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj75686_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj75686_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj75686_droppedInsideTargetActions_3_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj75686_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75686_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj75686").trigger("obj75686_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75686) {
				console.warn("de-queueing event obj75686." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75686").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75686_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_75721();
function runjs_75721() {
	window.obj75686_droppedInsideTargetActions_3_runningActionsCount = obj75686_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj75686").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj75686_droppedInsideTargetActions_3_runningActionsCount = window.obj75686_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj75686_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj75686_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj75686_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj75686_droppedInsideTargetActions_3_actionGroup10();
}
	}, 1);
}







};
obj75686_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75686_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj75686").trigger("obj75686_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75686) {
				console.warn("de-queueing event obj75686." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75686").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75686_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_75722();
function runjs_75722() {
	window.obj75686_droppedInsideTargetActions_3_runningActionsCount = obj75686_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj75686").css("border-color", "rgba(0,0,0,0)"); $("#obj75686").css("border-width", "0px"); $("#obj75686").css("border-style", "solid"); $("#obj75686").css("border-radius", "10px"); $("#obj75686").css("-webkit-border-radius", "10px"); $("#obj75686").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj75686_droppedInsideTargetActions_3_runningActionsCount = window.obj75686_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj75686_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj75686_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj75686_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj75686_droppedInsideTargetActions_3_actionGroup11();
}
	}, 1);
}







};
obj75686_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75686_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj75686").trigger("obj75686_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75686) {
				console.warn("de-queueing event obj75686." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75686").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75686_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj75765 
playAudio_75723();
function playAudio_75723() {
	window.obj75686_droppedInsideTargetActions_3_runningActionsCount = obj75686_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj75765")[0];
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
		    window.obj75686_droppedInsideTargetActions_3_runningActionsCount = window.obj75686_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj75686_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj75686_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj75686_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj75686_droppedInsideTargetActions_3_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj75686_droppedInsideTargetActions_3_runningActionsCount = window.obj75686_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj75686_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj75686_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj75686_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj75686_droppedInsideTargetActions_3_actionGroup12();
}
	}
}









};
obj75686_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75686_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj75686").trigger("obj75686_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75686) {
				console.warn("de-queueing event obj75686." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75686").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75686_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_75724();
function switchText_75724() {
	window.obj75686_droppedInsideTargetActions_3_runningActionsCount = obj75686_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj75766_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj75766_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj75766").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj75766_content");
			setTimeout(function () {
				window.obj75686_droppedInsideTargetActions_3_runningActionsCount = window.obj75686_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj75686_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj75686_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj75686_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj75686_droppedInsideTargetActions_3_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj75766 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj75686_droppedInsideTargetActions_3_runningActionsCount = window.obj75686_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj75686_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj75686_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj75686_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj75686_droppedInsideTargetActions_3_actionGroup13();
}
		}, 1);
	}
}






};
obj75686_droppedInsideTargetActions_3_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj75686_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj75686").trigger("obj75686_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75686) {
				console.warn("de-queueing event obj75686." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75686").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75686_droppedInsideTargetActions_3_activeActionGroupIndex = 13;
	





















};
obj75686_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75686_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj75686").trigger("obj75686_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75686) {
				console.warn("de-queueing event obj75686." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75686").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75686_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_75698();
function runjs_75698() {
	window.obj75686_droppedInsideTargetActions_2_runningActionsCount = obj75686_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj75817").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj75686_droppedInsideTargetActions_2_runningActionsCount = window.obj75686_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj75686_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj75686_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj75686_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj75686_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj75686_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75686_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj75686").trigger("obj75686_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75686) {
				console.warn("de-queueing event obj75686." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75686").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75686_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_75699();
function runjs_75699() {
	window.obj75686_droppedInsideTargetActions_2_runningActionsCount = obj75686_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj75817").css("border-color", "#C00000"); $("#obj75817").css("border-width", "2px"); $("#obj75817").css("border-style", "solid"); $("#obj75817").css("border-radius", "10px"); $("#obj75817").css("-webkit-border-radius", "10px"); $("#obj75817").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj75686_droppedInsideTargetActions_2_runningActionsCount = window.obj75686_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj75686_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj75686_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj75686_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj75686_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj75686_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75686_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj75686").trigger("obj75686_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75686) {
				console.warn("de-queueing event obj75686." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75686").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75686_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj75811 
hide_75700();
function hide_75700() {
	var selector = "#obj75811";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj75686_droppedInsideTargetActions_2_runningActionsCount = obj75686_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj75686_droppedInsideTargetActions_2_runningActionsCount = window.obj75686_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj75686_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj75686_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj75686_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj75686_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_75700(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj75686_droppedInsideTargetActions_2_runningActionsCount = window.obj75686_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj75686_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj75686_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj75686_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj75686_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj75686_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75686_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj75686").trigger("obj75686_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75686) {
				console.warn("de-queueing event obj75686." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75686").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75686_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_75701();
function runjs_75701() {
	window.obj75686_droppedInsideTargetActions_2_runningActionsCount = obj75686_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj75686").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj75686_droppedInsideTargetActions_2_runningActionsCount = window.obj75686_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj75686_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj75686_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj75686_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj75686_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj75686_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75686_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj75686").trigger("obj75686_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75686) {
				console.warn("de-queueing event obj75686." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75686").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75686_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_75702();
function switchText_75702() {
	window.obj75686_droppedInsideTargetActions_2_runningActionsCount = obj75686_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj75766_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj75766_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj75766").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj75766_content");
			setTimeout(function () {
				window.obj75686_droppedInsideTargetActions_2_runningActionsCount = window.obj75686_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj75686_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj75686_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj75686_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj75686_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj75766 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj75686_droppedInsideTargetActions_2_runningActionsCount = window.obj75686_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj75686_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj75686_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj75686_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj75686_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj75686_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75686_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj75686").trigger("obj75686_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75686) {
				console.warn("de-queueing event obj75686." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75686").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75686_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj75686 
move_75703();
function move_75703() {
	window.obj75686_droppedInsideTargetActions_2_runningActionsCount = obj75686_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj75686");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 73;
	var moveY = 582;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj75686_droppedInsideTargetActions_2_runningActionsCount = window.obj75686_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj75686_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj75686_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj75686_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj75686_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj75686_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75686_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj75686").trigger("obj75686_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75686) {
				console.warn("de-queueing event obj75686." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75686").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75686_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_75704();
function runjs_75704() {
	window.obj75686_droppedInsideTargetActions_2_runningActionsCount = obj75686_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj75817").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj75686_droppedInsideTargetActions_2_runningActionsCount = window.obj75686_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj75686_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj75686_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj75686_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj75686_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj75686_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75686_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj75686").trigger("obj75686_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75686) {
				console.warn("de-queueing event obj75686." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75686").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75686_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_75705();
function runjs_75705() {
	window.obj75686_droppedInsideTargetActions_2_runningActionsCount = obj75686_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj75817").css("border-color", "#000000"); $("#obj75817").css("border-width", "1px"); $("#obj75817").css("border-style", "solid"); $("#obj75817").css("border-radius", "10px"); $("#obj75817").css("-webkit-border-radius", "10px"); $("#obj75817").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj75686_droppedInsideTargetActions_2_runningActionsCount = window.obj75686_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj75686_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj75686_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj75686_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj75686_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj75686_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75686_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj75686").trigger("obj75686_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75686) {
				console.warn("de-queueing event obj75686." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75686").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75686_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj75811
(function(){
	window.obj75686_droppedInsideTargetActions_2_runningActionsCount = obj75686_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj75811";
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
					window.obj75686_droppedInsideTargetActions_2_runningActionsCount = window.obj75686_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj75686_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj75686_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj75686_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj75686_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj75686_droppedInsideTargetActions_2_runningActionsCount = window.obj75686_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj75686_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj75686_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj75686_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj75686_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj75686_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75686_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj75686").trigger("obj75686_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75686) {
				console.warn("de-queueing event obj75686." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75686").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75686_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_75707();
function runjs_75707() {
	window.obj75686_droppedInsideTargetActions_2_runningActionsCount = obj75686_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj75686").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj75686_droppedInsideTargetActions_2_runningActionsCount = window.obj75686_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj75686_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj75686_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj75686_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj75686_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj75686_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75686_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj75686").trigger("obj75686_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75686) {
				console.warn("de-queueing event obj75686." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75686").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75686_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_75708();
function runjs_75708() {
	window.obj75686_droppedInsideTargetActions_2_runningActionsCount = obj75686_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj75686").css("border-color", "rgba(0,0,0,0)"); $("#obj75686").css("border-width", "0px"); $("#obj75686").css("border-style", "solid"); $("#obj75686").css("border-radius", "10px"); $("#obj75686").css("-webkit-border-radius", "10px"); $("#obj75686").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj75686_droppedInsideTargetActions_2_runningActionsCount = window.obj75686_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj75686_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj75686_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj75686_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj75686_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj75686_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75686_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj75686").trigger("obj75686_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75686) {
				console.warn("de-queueing event obj75686." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75686").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75686_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj75765 
playAudio_75709();
function playAudio_75709() {
	window.obj75686_droppedInsideTargetActions_2_runningActionsCount = obj75686_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj75765")[0];
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
		    window.obj75686_droppedInsideTargetActions_2_runningActionsCount = window.obj75686_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj75686_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj75686_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj75686_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj75686_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj75686_droppedInsideTargetActions_2_runningActionsCount = window.obj75686_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj75686_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj75686_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj75686_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj75686_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj75686_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75686_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj75686").trigger("obj75686_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75686) {
				console.warn("de-queueing event obj75686." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75686").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75686_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_75710();
function switchText_75710() {
	window.obj75686_droppedInsideTargetActions_2_runningActionsCount = obj75686_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj75766_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj75766_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj75766").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj75766_content");
			setTimeout(function () {
				window.obj75686_droppedInsideTargetActions_2_runningActionsCount = window.obj75686_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj75686_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj75686_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj75686_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj75686_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj75766 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj75686_droppedInsideTargetActions_2_runningActionsCount = window.obj75686_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj75686_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj75686_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj75686_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj75686_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj75686_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj75686_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj75686").trigger("obj75686_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75686) {
				console.warn("de-queueing event obj75686." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75686").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75686_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj75686_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75686_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj75686").trigger("obj75686_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75686) {
				console.warn("de-queueing event obj75686." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75686").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75686_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_75691();
function runjs_75691() {
	window.obj75686_droppedInsideTargetActions_runningActionsCount = obj75686_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj75819").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj75686_droppedInsideTargetActions_runningActionsCount = window.obj75686_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj75686_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj75686_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj75686_droppedInsideTargetActions_runningActionsCount == 0) {
	obj75686_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj75686_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75686_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj75686").trigger("obj75686_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75686) {
				console.warn("de-queueing event obj75686." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75686").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75686_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_75695();
function switchText_75695() {
	window.obj75686_droppedInsideTargetActions_runningActionsCount = obj75686_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj75766_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj75766_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj75766").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj75766_content");
			setTimeout(function () {
				window.obj75686_droppedInsideTargetActions_runningActionsCount = window.obj75686_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj75686_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj75686_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj75686_droppedInsideTargetActions_runningActionsCount == 0) {
	obj75686_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj75766 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj75686_droppedInsideTargetActions_runningActionsCount = window.obj75686_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj75686_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj75686_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj75686_droppedInsideTargetActions_runningActionsCount == 0) {
	obj75686_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj75686_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75686_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj75686").trigger("obj75686_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75686) {
				console.warn("de-queueing event obj75686." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75686").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75686_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_75692();
function runjs_75692() {
	window.obj75686_droppedInsideTargetActions_runningActionsCount = obj75686_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj75819").css("border-color", "#058E3F"); $("#obj75819").css("border-width", "2px"); $("#obj75819").css("border-style", "solid"); $("#obj75819").css("border-radius", "10px"); $("#obj75819").css("-webkit-border-radius", "10px"); $("#obj75819").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj75686_droppedInsideTargetActions_runningActionsCount = window.obj75686_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj75686_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj75686_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj75686_droppedInsideTargetActions_runningActionsCount == 0) {
	obj75686_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj75686_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75686_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj75686").trigger("obj75686_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75686) {
				console.warn("de-queueing event obj75686." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75686").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75686_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj75813 
hide_75693();
function hide_75693() {
	var selector = "#obj75813";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj75686_droppedInsideTargetActions_runningActionsCount = obj75686_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj75686_droppedInsideTargetActions_runningActionsCount = window.obj75686_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj75686_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj75686_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj75686_droppedInsideTargetActions_runningActionsCount == 0) {
	obj75686_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_75693(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj75686_droppedInsideTargetActions_runningActionsCount = window.obj75686_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj75686_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj75686_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj75686_droppedInsideTargetActions_runningActionsCount == 0) {
	obj75686_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj75686_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75686_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj75686").trigger("obj75686_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75686) {
				console.warn("de-queueing event obj75686." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75686").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75686_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_75694();
function runjs_75694() {
	window.obj75686_droppedInsideTargetActions_runningActionsCount = obj75686_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj75686").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj75686_droppedInsideTargetActions_runningActionsCount = window.obj75686_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj75686_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj75686_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj75686_droppedInsideTargetActions_runningActionsCount == 0) {
	obj75686_droppedInsideTargetActions_actionGroup5();
}
	}, 1);
}







};
obj75686_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75686_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj75686").trigger("obj75686_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75686) {
				console.warn("de-queueing event obj75686." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75686").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75686_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj75764 
playAudio_75696();
function playAudio_75696() {
	window.obj75686_droppedInsideTargetActions_runningActionsCount = obj75686_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj75764")[0];
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
		    window.obj75686_droppedInsideTargetActions_runningActionsCount = window.obj75686_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj75686_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj75686_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj75686_droppedInsideTargetActions_runningActionsCount == 0) {
	obj75686_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj75686_droppedInsideTargetActions_runningActionsCount = window.obj75686_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj75686_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj75686_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj75686_droppedInsideTargetActions_runningActionsCount == 0) {
	obj75686_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj75686_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75686_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj75686").trigger("obj75686_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75686) {
				console.warn("de-queueing event obj75686." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75686").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75686_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90263();
function switchText_90263() {
	window.obj75686_droppedInsideTargetActions_runningActionsCount = obj75686_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj75766_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj75766_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj75766").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj75766_content");
			setTimeout(function () {
				window.obj75686_droppedInsideTargetActions_runningActionsCount = window.obj75686_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj75686_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj75686_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj75686_droppedInsideTargetActions_runningActionsCount == 0) {
	obj75686_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj75766 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj75686_droppedInsideTargetActions_runningActionsCount = window.obj75686_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj75686_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj75686_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj75686_droppedInsideTargetActions_runningActionsCount == 0) {
	obj75686_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj75686_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj75686_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj75686").trigger("obj75686_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75686) {
				console.warn("de-queueing event obj75686." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75686").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75686_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj75668_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75668_onTap_activeActionGroupIndex = -1;
		$("#obj75668").trigger("obj75668_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75668) {
				console.warn("de-queueing event obj75668." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75668").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75668_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj75668 
hide_75671();
function hide_75671() {
	var selector = "#obj75668";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj75668_onTap_runningActionsCount = obj75668_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj75668_onTap_runningActionsCount = window.obj75668_onTap_runningActionsCount - 1;
if (window.obj75668_onTap_runningActionsCount < 0) {
	window.obj75668_onTap_runningActionsCount = 0;
} else if (window.obj75668_onTap_runningActionsCount == 0) {
	obj75668_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_75671(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj75668_onTap_runningActionsCount = window.obj75668_onTap_runningActionsCount - 1;
if (window.obj75668_onTap_runningActionsCount < 0) {
	window.obj75668_onTap_runningActionsCount = 0;
} else if (window.obj75668_onTap_runningActionsCount == 0) {
	obj75668_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj75658 
stopMovie_75670();
function stopMovie_75670() {
	window.obj75668_onTap_runningActionsCount = obj75668_onTap_runningActionsCount + 1;
	var myVideo = $("#obj75658")[0];
	myVideo.pause();
	window.obj75668_onTap_runningActionsCount = window.obj75668_onTap_runningActionsCount - 1;
if (window.obj75668_onTap_runningActionsCount < 0) {
	window.obj75668_onTap_runningActionsCount = 0;
} else if (window.obj75668_onTap_runningActionsCount == 0) {
	obj75668_onTap_actionGroup1();
}
}
















};
obj75668_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75668_onTap_activeActionGroupIndex = -1;
		$("#obj75668").trigger("obj75668_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75668) {
				console.warn("de-queueing event obj75668." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75668").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75668_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj75660
(function(){
	window.obj75668_onTap_runningActionsCount = obj75668_onTap_runningActionsCount + 1;

	var selector = "#obj75660";
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
					window.obj75668_onTap_runningActionsCount = window.obj75668_onTap_runningActionsCount - 1;
if (window.obj75668_onTap_runningActionsCount < 0) {
	window.obj75668_onTap_runningActionsCount = 0;
} else if (window.obj75668_onTap_runningActionsCount == 0) {
	obj75668_onTap_actionGroup2();
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
				window.obj75668_onTap_runningActionsCount = window.obj75668_onTap_runningActionsCount - 1;
if (window.obj75668_onTap_runningActionsCount < 0) {
	window.obj75668_onTap_runningActionsCount = 0;
} else if (window.obj75668_onTap_runningActionsCount == 0) {
	obj75668_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj75668_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75668_onTap_activeActionGroupIndex = -1;
		$("#obj75668").trigger("obj75668_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75668) {
				console.warn("de-queueing event obj75668." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75668").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75668_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj75658 
move_75673();
function move_75673() {
	window.obj75668_onTap_runningActionsCount = obj75668_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj75658");
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
			window.obj75668_onTap_runningActionsCount = window.obj75668_onTap_runningActionsCount - 1;
if (window.obj75668_onTap_runningActionsCount < 0) {
	window.obj75668_onTap_runningActionsCount = 0;
} else if (window.obj75668_onTap_runningActionsCount == 0) {
	obj75668_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj75668_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj75668_onTap_activeActionGroupIndex = -1;
		$("#obj75668").trigger("obj75668_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75668) {
				console.warn("de-queueing event obj75668." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75668").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75668_onTap_activeActionGroupIndex = 3;
	





















};
obj75660_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75660_onTap_activeActionGroupIndex = -1;
		$("#obj75660").trigger("obj75660_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75660) {
				console.warn("de-queueing event obj75660." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75660").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75660_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj75660 
hide_75663();
function hide_75663() {
	var selector = "#obj75660";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj75660_onTap_runningActionsCount = obj75660_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj75660_onTap_runningActionsCount = window.obj75660_onTap_runningActionsCount - 1;
if (window.obj75660_onTap_runningActionsCount < 0) {
	window.obj75660_onTap_runningActionsCount = 0;
} else if (window.obj75660_onTap_runningActionsCount == 0) {
	obj75660_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_75663(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj75660_onTap_runningActionsCount = window.obj75660_onTap_runningActionsCount - 1;
if (window.obj75660_onTap_runningActionsCount < 0) {
	window.obj75660_onTap_runningActionsCount = 0;
} else if (window.obj75660_onTap_runningActionsCount == 0) {
	obj75660_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj75658 
playPauseMovie_75662();
function playPauseMovie_75662() {
	window.obj75660_onTap_runningActionsCount = obj75660_onTap_runningActionsCount + 1;
	var myVideo = $("#obj75658")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj75660_onTap_runningActionsCount = window.obj75660_onTap_runningActionsCount - 1;
if (window.obj75660_onTap_runningActionsCount < 0) {
	window.obj75660_onTap_runningActionsCount = 0;
} else if (window.obj75660_onTap_runningActionsCount == 0) {
	obj75660_onTap_actionGroup1();
}
}

















};
obj75660_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75660_onTap_activeActionGroupIndex = -1;
		$("#obj75660").trigger("obj75660_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75660) {
				console.warn("de-queueing event obj75660." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75660").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75660_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj75668
(function(){
	window.obj75660_onTap_runningActionsCount = obj75660_onTap_runningActionsCount + 1;

	var selector = "#obj75668";
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
					window.obj75660_onTap_runningActionsCount = window.obj75660_onTap_runningActionsCount - 1;
if (window.obj75660_onTap_runningActionsCount < 0) {
	window.obj75660_onTap_runningActionsCount = 0;
} else if (window.obj75660_onTap_runningActionsCount == 0) {
	obj75660_onTap_actionGroup2();
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
				window.obj75660_onTap_runningActionsCount = window.obj75660_onTap_runningActionsCount - 1;
if (window.obj75660_onTap_runningActionsCount < 0) {
	window.obj75660_onTap_runningActionsCount = 0;
} else if (window.obj75660_onTap_runningActionsCount == 0) {
	obj75660_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj75660_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75660_onTap_activeActionGroupIndex = -1;
		$("#obj75660").trigger("obj75660_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75660) {
				console.warn("de-queueing event obj75660." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75660").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75660_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj75658 
move_75665();
function move_75665() {
	window.obj75660_onTap_runningActionsCount = obj75660_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj75658");
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
			window.obj75660_onTap_runningActionsCount = window.obj75660_onTap_runningActionsCount - 1;
if (window.obj75660_onTap_runningActionsCount < 0) {
	window.obj75660_onTap_runningActionsCount = 0;
} else if (window.obj75660_onTap_runningActionsCount == 0) {
	obj75660_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj75660_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj75660_onTap_activeActionGroupIndex = -1;
		$("#obj75660").trigger("obj75660_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75660) {
				console.warn("de-queueing event obj75660." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75660").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75660_onTap_activeActionGroupIndex = 3;
	





















};
obj87729_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87729_onTap_activeActionGroupIndex = -1;
		$("#obj87729").trigger("obj87729_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87729) {
				console.warn("de-queueing event obj87729." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87729").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87729_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj87734 
stopAudio_87731();
function stopAudio_87731() {
	window.obj87729_onTap_runningActionsCount = obj87729_onTap_runningActionsCount + 1;
	var myAudio = $("#obj87734")[0];
	myAudio.pause();
	window.obj87729_onTap_runningActionsCount = window.obj87729_onTap_runningActionsCount - 1;
if (window.obj87729_onTap_runningActionsCount < 0) {
	window.obj87729_onTap_runningActionsCount = 0;
} else if (window.obj87729_onTap_runningActionsCount == 0) {
	obj87729_onTap_actionGroup1();
}
}








};
obj87729_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87729_onTap_activeActionGroupIndex = -1;
		$("#obj87729").trigger("obj87729_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87729) {
				console.warn("de-queueing event obj87729." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87729").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87729_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj87729 
hide_87732();
function hide_87732() {
	var selector = "#obj87729";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj87729_onTap_runningActionsCount = obj87729_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj87729_onTap_runningActionsCount = window.obj87729_onTap_runningActionsCount - 1;
if (window.obj87729_onTap_runningActionsCount < 0) {
	window.obj87729_onTap_runningActionsCount = 0;
} else if (window.obj87729_onTap_runningActionsCount == 0) {
	obj87729_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_87732(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj87729_onTap_runningActionsCount = window.obj87729_onTap_runningActionsCount - 1;
if (window.obj87729_onTap_runningActionsCount < 0) {
	window.obj87729_onTap_runningActionsCount = 0;
} else if (window.obj87729_onTap_runningActionsCount == 0) {
	obj87729_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj87729_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87729_onTap_activeActionGroupIndex = -1;
		$("#obj87729").trigger("obj87729_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87729) {
				console.warn("de-queueing event obj87729." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87729").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87729_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj87724
(function(){
	window.obj87729_onTap_runningActionsCount = obj87729_onTap_runningActionsCount + 1;

	var selector = "#obj87724";
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
					window.obj87729_onTap_runningActionsCount = window.obj87729_onTap_runningActionsCount - 1;
if (window.obj87729_onTap_runningActionsCount < 0) {
	window.obj87729_onTap_runningActionsCount = 0;
} else if (window.obj87729_onTap_runningActionsCount == 0) {
	obj87729_onTap_actionGroup3();
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
				window.obj87729_onTap_runningActionsCount = window.obj87729_onTap_runningActionsCount - 1;
if (window.obj87729_onTap_runningActionsCount < 0) {
	window.obj87729_onTap_runningActionsCount = 0;
} else if (window.obj87729_onTap_runningActionsCount == 0) {
	obj87729_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj87729_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj87729_onTap_activeActionGroupIndex = -1;
		$("#obj87729").trigger("obj87729_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87729) {
				console.warn("de-queueing event obj87729." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87729").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87729_onTap_activeActionGroupIndex = 3;
	





















};
obj87724_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87724_onTap_activeActionGroupIndex = -1;
		$("#obj87724").trigger("obj87724_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87724) {
				console.warn("de-queueing event obj87724." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87724").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87724_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj87724 
hide_87726();
function hide_87726() {
	var selector = "#obj87724";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj87724_onTap_runningActionsCount = obj87724_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj87724_onTap_runningActionsCount = window.obj87724_onTap_runningActionsCount - 1;
if (window.obj87724_onTap_runningActionsCount < 0) {
	window.obj87724_onTap_runningActionsCount = 0;
} else if (window.obj87724_onTap_runningActionsCount == 0) {
	obj87724_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_87726(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj87724_onTap_runningActionsCount = window.obj87724_onTap_runningActionsCount - 1;
if (window.obj87724_onTap_runningActionsCount < 0) {
	window.obj87724_onTap_runningActionsCount = 0;
} else if (window.obj87724_onTap_runningActionsCount == 0) {
	obj87724_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj87724_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87724_onTap_activeActionGroupIndex = -1;
		$("#obj87724").trigger("obj87724_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87724) {
				console.warn("de-queueing event obj87724." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87724").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87724_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj87729
(function(){
	window.obj87724_onTap_runningActionsCount = obj87724_onTap_runningActionsCount + 1;

	var selector = "#obj87729";
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
					window.obj87724_onTap_runningActionsCount = window.obj87724_onTap_runningActionsCount - 1;
if (window.obj87724_onTap_runningActionsCount < 0) {
	window.obj87724_onTap_runningActionsCount = 0;
} else if (window.obj87724_onTap_runningActionsCount == 0) {
	obj87724_onTap_actionGroup2();
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
				window.obj87724_onTap_runningActionsCount = window.obj87724_onTap_runningActionsCount - 1;
if (window.obj87724_onTap_runningActionsCount < 0) {
	window.obj87724_onTap_runningActionsCount = 0;
} else if (window.obj87724_onTap_runningActionsCount == 0) {
	obj87724_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj87724_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87724_onTap_activeActionGroupIndex = -1;
		$("#obj87724").trigger("obj87724_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87724) {
				console.warn("de-queueing event obj87724." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87724").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87724_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj87734 
playAudio_87728();
function playAudio_87728() {
	window.obj87724_onTap_runningActionsCount = obj87724_onTap_runningActionsCount + 1;
	var myAudio = $("#obj87734")[0];
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
		    window.obj87724_onTap_runningActionsCount = window.obj87724_onTap_runningActionsCount - 1;
if (window.obj87724_onTap_runningActionsCount < 0) {
	window.obj87724_onTap_runningActionsCount = 0;
} else if (window.obj87724_onTap_runningActionsCount == 0) {
	obj87724_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj87724_onTap_runningActionsCount = window.obj87724_onTap_runningActionsCount - 1;
if (window.obj87724_onTap_runningActionsCount < 0) {
	window.obj87724_onTap_runningActionsCount = 0;
} else if (window.obj87724_onTap_runningActionsCount == 0) {
	obj87724_onTap_actionGroup3();
}
	}
}









};
obj87724_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj87724_onTap_activeActionGroupIndex = -1;
		$("#obj87724").trigger("obj87724_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87724) {
				console.warn("de-queueing event obj87724." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87724").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87724_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj75844: Event Touch Down
 *
 */
$("#obj75844").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj75844_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj75844_onTap is still running");
	return;
}
var obj75844_onTap_runningActionsCount = 0;
var obj75844_onTap_loopCount = 0;
obj75844_onTap_actionGroup0();
});










/*
 *
 *   obj75841: Event Touch Down
 *
 */
$("#obj75841").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj75841_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj75841_onTap is still running");
	return;
}
var obj75841_onTap_runningActionsCount = 0;
var obj75841_onTap_loopCount = 0;
obj75841_onTap_actionGroup0();
});










/*
 *
 *   obj75837: Event Touch Down
 *
 */
$("#obj75837").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj75837_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj75837_onTap is still running");
	return;
}
var obj75837_onTap_runningActionsCount = 0;
var obj75837_onTap_loopCount = 0;
obj75837_onTap_actionGroup0();
});

































































































































































/*
 *
 *   obj75768: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj75768");
	var winTarget = document.getElementById("obj75768");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj75768").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj75768_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj75768_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj75768_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj75768_onTouchDown is still running");
	return;
}
var obj75768_onTouchDown_runningActionsCount = 0;
var obj75768_onTouchDown_loopCount = 0;
obj75768_onTouchDown_actionGroup0();
});



/*
 *
 *   obj75768: Event SCActionDragDrop75771_droppedOutsideTargetActions
 *
 */
$("#obj75768").bind("SCActionDragDrop75771_droppedOutsideTargetActions", function(event) {
	if (window.obj75768_SCActionDragDrop75771_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj75768_SCActionDragDrop75771_droppedOutsideTargetActions is still running");
	return;
}
var obj75768_SCActionDragDrop75771_droppedOutsideTargetActions_runningActionsCount = 0;
var obj75768_SCActionDragDrop75771_droppedOutsideTargetActions_loopCount = 0;
obj75768_SCActionDragDrop75771_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj75768: Event droppedInsideTargetActions_3
 *
 */
$("#obj75768").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj75768_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj75768_droppedInsideTargetActions_3 is still running");
	return;
}
var obj75768_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj75768_droppedInsideTargetActions_3_loopCount = 0;
obj75768_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj75768: Event droppedInsideTargetActions_2
 *
 */
$("#obj75768").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj75768_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj75768_droppedInsideTargetActions_2 is still running");
	return;
}
var obj75768_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj75768_droppedInsideTargetActions_2_loopCount = 0;
obj75768_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj75768: Event droppedInsideTargetActions
 *
 */
$("#obj75768").bind("droppedInsideTargetActions", function(event) {
	if (window.obj75768_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj75768_droppedInsideTargetActions is still running");
	return;
}
var obj75768_droppedInsideTargetActions_runningActionsCount = 0;
var obj75768_droppedInsideTargetActions_loopCount = 0;
obj75768_droppedInsideTargetActions_actionGroup0();
});




































/*
 *
 *   obj75725: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj75725");
	var winTarget = document.getElementById("obj75725");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj75725").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj75725_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj75725_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj75725_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj75725_onTouchDown is still running");
	return;
}
var obj75725_onTouchDown_runningActionsCount = 0;
var obj75725_onTouchDown_loopCount = 0;
obj75725_onTouchDown_actionGroup0();
});



/*
 *
 *   obj75725: Event SCActionDragDrop75728_droppedOutsideTargetActions
 *
 */
$("#obj75725").bind("SCActionDragDrop75728_droppedOutsideTargetActions", function(event) {
	if (window.obj75725_SCActionDragDrop75728_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj75725_SCActionDragDrop75728_droppedOutsideTargetActions is still running");
	return;
}
var obj75725_SCActionDragDrop75728_droppedOutsideTargetActions_runningActionsCount = 0;
var obj75725_SCActionDragDrop75728_droppedOutsideTargetActions_loopCount = 0;
obj75725_SCActionDragDrop75728_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj75725: Event droppedInsideTargetActions_3
 *
 */
$("#obj75725").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj75725_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj75725_droppedInsideTargetActions_3 is still running");
	return;
}
var obj75725_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj75725_droppedInsideTargetActions_3_loopCount = 0;
obj75725_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj75725: Event droppedInsideTargetActions_2
 *
 */
$("#obj75725").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj75725_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj75725_droppedInsideTargetActions_2 is still running");
	return;
}
var obj75725_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj75725_droppedInsideTargetActions_2_loopCount = 0;
obj75725_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj75725: Event droppedInsideTargetActions
 *
 */
$("#obj75725").bind("droppedInsideTargetActions", function(event) {
	if (window.obj75725_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj75725_droppedInsideTargetActions is still running");
	return;
}
var obj75725_droppedInsideTargetActions_runningActionsCount = 0;
var obj75725_droppedInsideTargetActions_loopCount = 0;
obj75725_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj75686: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj75686");
	var winTarget = document.getElementById("obj75686");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj75686").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj75686_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj75686_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj75686_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj75686_onTouchDown is still running");
	return;
}
var obj75686_onTouchDown_runningActionsCount = 0;
var obj75686_onTouchDown_loopCount = 0;
obj75686_onTouchDown_actionGroup0();
});



/*
 *
 *   obj75686: Event SCActionDragDrop75689_droppedOutsideTargetActions
 *
 */
$("#obj75686").bind("SCActionDragDrop75689_droppedOutsideTargetActions", function(event) {
	if (window.obj75686_SCActionDragDrop75689_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj75686_SCActionDragDrop75689_droppedOutsideTargetActions is still running");
	return;
}
var obj75686_SCActionDragDrop75689_droppedOutsideTargetActions_runningActionsCount = 0;
var obj75686_SCActionDragDrop75689_droppedOutsideTargetActions_loopCount = 0;
obj75686_SCActionDragDrop75689_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj75686: Event droppedInsideTargetActions_3
 *
 */
$("#obj75686").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj75686_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj75686_droppedInsideTargetActions_3 is still running");
	return;
}
var obj75686_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj75686_droppedInsideTargetActions_3_loopCount = 0;
obj75686_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj75686: Event droppedInsideTargetActions_2
 *
 */
$("#obj75686").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj75686_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj75686_droppedInsideTargetActions_2 is still running");
	return;
}
var obj75686_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj75686_droppedInsideTargetActions_2_loopCount = 0;
obj75686_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj75686: Event droppedInsideTargetActions
 *
 */
$("#obj75686").bind("droppedInsideTargetActions", function(event) {
	if (window.obj75686_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj75686_droppedInsideTargetActions is still running");
	return;
}
var obj75686_droppedInsideTargetActions_runningActionsCount = 0;
var obj75686_droppedInsideTargetActions_loopCount = 0;
obj75686_droppedInsideTargetActions_actionGroup0();
});





/*
 *
 *   obj75668: Event Touch Down
 *
 */
$("#obj75668").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj75668_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj75668_onTap is still running");
	return;
}
var obj75668_onTap_runningActionsCount = 0;
var obj75668_onTap_loopCount = 0;
obj75668_onTap_actionGroup0();
});










/*
 *
 *   obj75660: Event Touch Down
 *
 */
$("#obj75660").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj75660_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj75660_onTap is still running");
	return;
}
var obj75660_onTap_runningActionsCount = 0;
var obj75660_onTap_loopCount = 0;
obj75660_onTap_actionGroup0();
});










/*
 *
 *   obj87729: Event Touch Down
 *
 */
$("#obj87729").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj87729_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj87729_onTap is still running");
	return;
}
var obj87729_onTap_runningActionsCount = 0;
var obj87729_onTap_loopCount = 0;
obj87729_onTap_actionGroup0();
});










/*
 *
 *   obj87724: Event Touch Down
 *
 */
$("#obj87724").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj87724_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj87724_onTap is still running");
	return;
}
var obj87724_onTap_runningActionsCount = 0;
var obj87724_onTap_loopCount = 0;
obj87724_onTap_actionGroup0();
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
	
$("#obj75847").trigger('SCEventShow');
$("#obj75844").trigger('SCEventShow');
$("#obj75841").trigger('SCEventShow');
$("#obj75837").trigger('SCEventShow');
$("#obj75835").trigger('SCEventShow');
$("#obj75833").trigger('SCEventShow');
$("#obj75831").trigger('SCEventShow');
$("#obj75829").trigger('SCEventShow');
$("#obj75827").trigger('SCEventShow');
$("#obj75825").trigger('SCEventShow');
$("#obj75823").trigger('SCEventShow');
$("#obj75821").trigger('SCEventShow');
$("#obj75819").trigger('SCEventShow');
$("#obj75817").trigger('SCEventShow');
$("#obj75815").trigger('SCEventShow');
$("#obj75813").trigger('SCEventShow');
$("#obj75811").trigger('SCEventShow');
$("#obj75809").trigger('SCEventShow');
$("#obj75807").trigger('SCEventShow');
$("#obj75768").trigger('SCEventShow');
$("#obj75766").trigger('SCEventShow');
$("#obj75765").trigger('SCEventShow');
$("#obj75764").trigger('SCEventShow');
$("#obj75725").trigger('SCEventShow');
$("#obj75686").trigger('SCEventShow');
$("#obj75668").trigger('SCEventShow');
$("#obj75660").trigger('SCEventShow');
$("#obj87729").trigger('SCEventShow');
$("#obj87724").trigger('SCEventShow');
$("#obj87734").trigger('SCEventShow');
$("#obj94777").trigger('SCEventShow');
$("#obj75658").trigger('SCEventShow');
	
});