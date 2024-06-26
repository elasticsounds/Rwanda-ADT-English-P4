pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 38968;
pubcoder.page.title = pubcoder.page.title || "132";
pubcoder.page.number = pubcoder.page.number || 132;
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
var obj39526_onTap_activeActionGroupIndex = -1;
var obj39526_onTap_runningActionsCount = 0;
var obj39526_onTap_loopCount = 0;
var obj39523_onTap_activeActionGroupIndex = -1;
var obj39523_onTap_runningActionsCount = 0;
var obj39523_onTap_loopCount = 0;
var obj39519_onTap_activeActionGroupIndex = -1;
var obj39519_onTap_runningActionsCount = 0;
var obj39519_onTap_loopCount = 0;
var obj39293_onDrag_activeActionGroupIndex = -1;
var obj39293_onDrag_runningActionsCount = 0;
var obj39293_onDrag_loopCount = 0;
var obj39293_onTouchDown_activeActionGroupIndex = -1;
var obj39293_onTouchDown_runningActionsCount = 0;
var obj39293_onTouchDown_loopCount = 0;
var obj39293_SCActionDragDrop39296_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj39293_SCActionDragDrop39296_droppedOutsideTargetActions_runningActionsCount = 0;
var obj39293_SCActionDragDrop39296_droppedOutsideTargetActions_loopCount = 0;
var obj39293_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj39293_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj39293_droppedInsideTargetActions_3_loopCount = 0;
var obj39293_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj39293_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj39293_droppedInsideTargetActions_2_loopCount = 0;
var obj39293_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj39293_droppedInsideTargetActions_runningActionsCount = 0;
var obj39293_droppedInsideTargetActions_loopCount = 0;
var obj39547_onDrag_activeActionGroupIndex = -1;
var obj39547_onDrag_runningActionsCount = 0;
var obj39547_onDrag_loopCount = 0;
var obj39547_onTouchDown_activeActionGroupIndex = -1;
var obj39547_onTouchDown_runningActionsCount = 0;
var obj39547_onTouchDown_loopCount = 0;
var obj39547_SCActionDragDrop39550_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj39547_SCActionDragDrop39550_droppedOutsideTargetActions_runningActionsCount = 0;
var obj39547_SCActionDragDrop39550_droppedOutsideTargetActions_loopCount = 0;
var obj39547_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj39547_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj39547_droppedInsideTargetActions_3_loopCount = 0;
var obj39547_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj39547_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj39547_droppedInsideTargetActions_2_loopCount = 0;
var obj39547_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj39547_droppedInsideTargetActions_runningActionsCount = 0;
var obj39547_droppedInsideTargetActions_loopCount = 0;
var obj39586_onDrag_activeActionGroupIndex = -1;
var obj39586_onDrag_runningActionsCount = 0;
var obj39586_onDrag_loopCount = 0;
var obj39586_onTouchDown_activeActionGroupIndex = -1;
var obj39586_onTouchDown_runningActionsCount = 0;
var obj39586_onTouchDown_loopCount = 0;
var obj39586_SCActionDragDrop39589_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj39586_SCActionDragDrop39589_droppedOutsideTargetActions_runningActionsCount = 0;
var obj39586_SCActionDragDrop39589_droppedOutsideTargetActions_loopCount = 0;
var obj39586_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj39586_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj39586_droppedInsideTargetActions_3_loopCount = 0;
var obj39586_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj39586_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj39586_droppedInsideTargetActions_2_loopCount = 0;
var obj39586_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj39586_droppedInsideTargetActions_runningActionsCount = 0;
var obj39586_droppedInsideTargetActions_loopCount = 0;
var obj67118_onTap_activeActionGroupIndex = -1;
var obj67118_onTap_runningActionsCount = 0;
var obj67118_onTap_loopCount = 0;
var obj67110_onTap_activeActionGroupIndex = -1;
var obj67110_onTap_runningActionsCount = 0;
var obj67110_onTap_loopCount = 0;
var obj88453_onTap_activeActionGroupIndex = -1;
var obj88453_onTap_runningActionsCount = 0;
var obj88453_onTap_loopCount = 0;
var obj88448_onTap_activeActionGroupIndex = -1;
var obj88448_onTap_runningActionsCount = 0;
var obj88448_onTap_loopCount = 0;
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
		
obj39526_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj39526_onTap_activeActionGroupIndex = -1;
		$("#obj39526").trigger("obj39526_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 39526) {
				console.warn("de-queueing event obj39526." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj39526").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj39526_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_39528();
function goToPage_39528() {
	window.obj39526_onTap_runningActionsCount = obj39526_onTap_runningActionsCount + 1;
	$("#anchor790")[0].click();
	window.obj39526_onTap_runningActionsCount = window.obj39526_onTap_runningActionsCount - 1;
if (window.obj39526_onTap_runningActionsCount < 0) {
	window.obj39526_onTap_runningActionsCount = 0;
} else if (window.obj39526_onTap_runningActionsCount == 0) {
	obj39526_onTap_actionGroup1();
}
}





















};
obj39526_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj39526_onTap_activeActionGroupIndex = -1;
		$("#obj39526").trigger("obj39526_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 39526) {
				console.warn("de-queueing event obj39526." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj39526").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj39526_onTap_activeActionGroupIndex = 1;
	





















};
obj39523_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj39523_onTap_activeActionGroupIndex = -1;
		$("#obj39523").trigger("obj39523_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 39523) {
				console.warn("de-queueing event obj39523." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj39523").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj39523_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_39525();
function goToPage_39525() {
	window.obj39523_onTap_runningActionsCount = obj39523_onTap_runningActionsCount + 1;
	$("#anchor791")[0].click();
	window.obj39523_onTap_runningActionsCount = window.obj39523_onTap_runningActionsCount - 1;
if (window.obj39523_onTap_runningActionsCount < 0) {
	window.obj39523_onTap_runningActionsCount = 0;
} else if (window.obj39523_onTap_runningActionsCount == 0) {
	obj39523_onTap_actionGroup1();
}
}





















};
obj39523_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj39523_onTap_activeActionGroupIndex = -1;
		$("#obj39523").trigger("obj39523_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 39523) {
				console.warn("de-queueing event obj39523." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj39523").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj39523_onTap_activeActionGroupIndex = 1;
	





















};
obj39519_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj39519_onTap_activeActionGroupIndex = -1;
		$("#obj39519").trigger("obj39519_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 39519) {
				console.warn("de-queueing event obj39519." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj39519").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj39519_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_39521();
function goToPage_39521() {
	window.obj39519_onTap_runningActionsCount = obj39519_onTap_runningActionsCount + 1;
	$("#anchor792")[0].click();
	window.obj39519_onTap_runningActionsCount = window.obj39519_onTap_runningActionsCount - 1;
if (window.obj39519_onTap_runningActionsCount < 0) {
	window.obj39519_onTap_runningActionsCount = 0;
} else if (window.obj39519_onTap_runningActionsCount == 0) {
	obj39519_onTap_actionGroup1();
}
}





















};
obj39519_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj39519_onTap_activeActionGroupIndex = -1;
		$("#obj39519").trigger("obj39519_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 39519) {
				console.warn("de-queueing event obj39519." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj39519").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj39519_onTap_activeActionGroupIndex = 1;
	





















};
obj39293_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj39293_onTouchDown_activeActionGroupIndex = -1;
		$("#obj39293").trigger("obj39293_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 39293) {
				console.warn("de-queueing event obj39293." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj39293").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj39293_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj39293");
//	action: dragDrop
//	target: obj39293 
dragDrop_39296();
function dragDrop_39296() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj39293_onTouchDown_runningActionsCount = obj39293_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj39293');
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
	  	containerNode = $('#obj39511');
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
    	window.obj39293_onTouchDown_runningActionsCount = window.obj39293_onTouchDown_runningActionsCount - 1;
if (window.obj39293_onTouchDown_runningActionsCount < 0) {
	window.obj39293_onTouchDown_runningActionsCount = 0;
} else if (window.obj39293_onTouchDown_runningActionsCount == 0) {
	obj39293_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj39501","#obj39495","#obj39489");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_39296 = false;
    	var dropped_id_39296;
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
					dropped_39296 = true;
					dropped_id_39296 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_39296) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj39293").trigger('SCActionDragDrop39296_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj39293_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj39293_onTouchDown_activeActionGroupIndex = -1;
		$("#obj39293").trigger("obj39293_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 39293) {
				console.warn("de-queueing event obj39293." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj39293").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj39293_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj39293_SCActionDragDrop39296_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj39293_SCActionDragDrop39296_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj39293").trigger("obj39293_SCActionDragDrop39296_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 39293) {
				console.warn("de-queueing event obj39293." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj39293").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj39293_SCActionDragDrop39296_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj39293 
move_92591();
function move_92591() {
	window.obj39293_SCActionDragDrop39296_droppedOutsideTargetActions_runningActionsCount = obj39293_SCActionDragDrop39296_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj39293");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 381;
	var moveY = 609;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj39293_SCActionDragDrop39296_droppedOutsideTargetActions_runningActionsCount = window.obj39293_SCActionDragDrop39296_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj39293_SCActionDragDrop39296_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj39293_SCActionDragDrop39296_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj39293_SCActionDragDrop39296_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj39293_SCActionDragDrop39296_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj39293_SCActionDragDrop39296_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj39293_SCActionDragDrop39296_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj39293").trigger("obj39293_SCActionDragDrop39296_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 39293) {
				console.warn("de-queueing event obj39293." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj39293").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj39293_SCActionDragDrop39296_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj39293_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj39293_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj39293").trigger("obj39293_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 39293) {
				console.warn("de-queueing event obj39293." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj39293").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj39293_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_39319();
function runjs_39319() {
	window.obj39293_droppedInsideTargetActions_3_runningActionsCount = obj39293_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj39489").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj39293_droppedInsideTargetActions_3_runningActionsCount = window.obj39293_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj39293_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj39293_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj39293_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj39293_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj39293_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj39293_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj39293").trigger("obj39293_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 39293) {
				console.warn("de-queueing event obj39293." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj39293").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj39293_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_39320();
function runjs_39320() {
	window.obj39293_droppedInsideTargetActions_3_runningActionsCount = obj39293_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj39489").css("border-color", "#C00000"); $("#obj39489").css("border-width", "2px"); $("#obj39489").css("border-style", "solid"); $("#obj39489").css("border-radius", "10px"); $("#obj39489").css("-webkit-border-radius", "10px"); $("#obj39489").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj39293_droppedInsideTargetActions_3_runningActionsCount = window.obj39293_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj39293_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj39293_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj39293_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj39293_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj39293_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj39293_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj39293").trigger("obj39293_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 39293) {
				console.warn("de-queueing event obj39293." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj39293").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj39293_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj39487 
hide_39321();
function hide_39321() {
	var selector = "#obj39487";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj39293_droppedInsideTargetActions_3_runningActionsCount = obj39293_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj39293_droppedInsideTargetActions_3_runningActionsCount = window.obj39293_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj39293_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj39293_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj39293_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj39293_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_39321(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj39293_droppedInsideTargetActions_3_runningActionsCount = window.obj39293_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj39293_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj39293_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj39293_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj39293_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj39293_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj39293_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj39293").trigger("obj39293_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 39293) {
				console.warn("de-queueing event obj39293." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj39293").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj39293_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_39322();
function runjs_39322() {
	window.obj39293_droppedInsideTargetActions_3_runningActionsCount = obj39293_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj39293").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj39293_droppedInsideTargetActions_3_runningActionsCount = window.obj39293_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj39293_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj39293_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj39293_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj39293_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj39293_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj39293_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj39293").trigger("obj39293_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 39293) {
				console.warn("de-queueing event obj39293." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj39293").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj39293_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_39323();
function switchText_39323() {
	window.obj39293_droppedInsideTargetActions_3_runningActionsCount = obj39293_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj39485_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj39485_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj39485").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj39485_content");
			setTimeout(function () {
				window.obj39293_droppedInsideTargetActions_3_runningActionsCount = window.obj39293_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj39293_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj39293_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj39293_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj39293_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj39485 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj39293_droppedInsideTargetActions_3_runningActionsCount = window.obj39293_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj39293_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj39293_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj39293_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj39293_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj39293_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj39293_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj39293").trigger("obj39293_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 39293) {
				console.warn("de-queueing event obj39293." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj39293").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj39293_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj39293 
move_39324();
function move_39324() {
	window.obj39293_droppedInsideTargetActions_3_runningActionsCount = obj39293_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj39293");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 381;
	var moveY = 609;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj39293_droppedInsideTargetActions_3_runningActionsCount = window.obj39293_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj39293_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj39293_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj39293_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj39293_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj39293_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj39293_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj39293").trigger("obj39293_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 39293) {
				console.warn("de-queueing event obj39293." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj39293").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj39293_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_39325();
function runjs_39325() {
	window.obj39293_droppedInsideTargetActions_3_runningActionsCount = obj39293_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj39489").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj39293_droppedInsideTargetActions_3_runningActionsCount = window.obj39293_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj39293_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj39293_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj39293_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj39293_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj39293_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj39293_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj39293").trigger("obj39293_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 39293) {
				console.warn("de-queueing event obj39293." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj39293").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj39293_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_39326();
function runjs_39326() {
	window.obj39293_droppedInsideTargetActions_3_runningActionsCount = obj39293_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj39489").css("border-color", "#000000"); $("#obj39489").css("border-width", "1px"); $("#obj39489").css("border-style", "solid"); $("#obj39489").css("border-radius", "10px"); $("#obj39489").css("-webkit-border-radius", "10px"); $("#obj39489").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj39293_droppedInsideTargetActions_3_runningActionsCount = window.obj39293_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj39293_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj39293_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj39293_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj39293_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj39293_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj39293_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj39293").trigger("obj39293_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 39293) {
				console.warn("de-queueing event obj39293." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj39293").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj39293_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj39487
(function(){
	window.obj39293_droppedInsideTargetActions_3_runningActionsCount = obj39293_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj39487";
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
					window.obj39293_droppedInsideTargetActions_3_runningActionsCount = window.obj39293_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj39293_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj39293_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj39293_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj39293_droppedInsideTargetActions_3_actionGroup9();
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
				window.obj39293_droppedInsideTargetActions_3_runningActionsCount = window.obj39293_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj39293_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj39293_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj39293_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj39293_droppedInsideTargetActions_3_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj39293_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj39293_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj39293").trigger("obj39293_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 39293) {
				console.warn("de-queueing event obj39293." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj39293").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj39293_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_39328();
function runjs_39328() {
	window.obj39293_droppedInsideTargetActions_3_runningActionsCount = obj39293_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj39293").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj39293_droppedInsideTargetActions_3_runningActionsCount = window.obj39293_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj39293_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj39293_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj39293_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj39293_droppedInsideTargetActions_3_actionGroup10();
}
	}, 1);
}







};
obj39293_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj39293_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj39293").trigger("obj39293_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 39293) {
				console.warn("de-queueing event obj39293." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj39293").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj39293_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_39329();
function runjs_39329() {
	window.obj39293_droppedInsideTargetActions_3_runningActionsCount = obj39293_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj39293").css("border-color", "rgba(0,0,0,0)"); $("#obj39293").css("border-width", "0px"); $("#obj39293").css("border-style", "solid"); $("#obj39293").css("border-radius", "10px"); $("#obj39293").css("-webkit-border-radius", "10px"); $("#obj39293").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj39293_droppedInsideTargetActions_3_runningActionsCount = window.obj39293_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj39293_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj39293_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj39293_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj39293_droppedInsideTargetActions_3_actionGroup11();
}
	}, 1);
}







};
obj39293_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj39293_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj39293").trigger("obj39293_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 39293) {
				console.warn("de-queueing event obj39293." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj39293").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj39293_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj39477 
playAudio_39330();
function playAudio_39330() {
	window.obj39293_droppedInsideTargetActions_3_runningActionsCount = obj39293_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj39477")[0];
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
		    window.obj39293_droppedInsideTargetActions_3_runningActionsCount = window.obj39293_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj39293_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj39293_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj39293_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj39293_droppedInsideTargetActions_3_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj39293_droppedInsideTargetActions_3_runningActionsCount = window.obj39293_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj39293_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj39293_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj39293_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj39293_droppedInsideTargetActions_3_actionGroup12();
}
	}
}









};
obj39293_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj39293_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj39293").trigger("obj39293_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 39293) {
				console.warn("de-queueing event obj39293." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj39293").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj39293_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_39331();
function switchText_39331() {
	window.obj39293_droppedInsideTargetActions_3_runningActionsCount = obj39293_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj39485_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj39485_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj39485").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj39485_content");
			setTimeout(function () {
				window.obj39293_droppedInsideTargetActions_3_runningActionsCount = window.obj39293_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj39293_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj39293_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj39293_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj39293_droppedInsideTargetActions_3_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj39485 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj39293_droppedInsideTargetActions_3_runningActionsCount = window.obj39293_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj39293_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj39293_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj39293_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj39293_droppedInsideTargetActions_3_actionGroup13();
}
		}, 1);
	}
}






};
obj39293_droppedInsideTargetActions_3_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj39293_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj39293").trigger("obj39293_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 39293) {
				console.warn("de-queueing event obj39293." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj39293").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj39293_droppedInsideTargetActions_3_activeActionGroupIndex = 13;
	





















};
obj39293_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj39293_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj39293").trigger("obj39293_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 39293) {
				console.warn("de-queueing event obj39293." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj39293").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj39293_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_39305();
function runjs_39305() {
	window.obj39293_droppedInsideTargetActions_2_runningActionsCount = obj39293_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj39495").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj39293_droppedInsideTargetActions_2_runningActionsCount = window.obj39293_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj39293_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj39293_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj39293_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj39293_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj39293_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj39293_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj39293").trigger("obj39293_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 39293) {
				console.warn("de-queueing event obj39293." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj39293").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj39293_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_39306();
function runjs_39306() {
	window.obj39293_droppedInsideTargetActions_2_runningActionsCount = obj39293_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj39495").css("border-color", "#C00000"); $("#obj39495").css("border-width", "2px"); $("#obj39495").css("border-style", "solid"); $("#obj39495").css("border-radius", "10px"); $("#obj39495").css("-webkit-border-radius", "10px"); $("#obj39495").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj39293_droppedInsideTargetActions_2_runningActionsCount = window.obj39293_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj39293_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj39293_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj39293_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj39293_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj39293_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj39293_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj39293").trigger("obj39293_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 39293) {
				console.warn("de-queueing event obj39293." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj39293").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj39293_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj39493 
hide_39307();
function hide_39307() {
	var selector = "#obj39493";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj39293_droppedInsideTargetActions_2_runningActionsCount = obj39293_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj39293_droppedInsideTargetActions_2_runningActionsCount = window.obj39293_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj39293_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj39293_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj39293_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj39293_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_39307(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj39293_droppedInsideTargetActions_2_runningActionsCount = window.obj39293_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj39293_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj39293_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj39293_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj39293_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj39293_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj39293_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj39293").trigger("obj39293_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 39293) {
				console.warn("de-queueing event obj39293." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj39293").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj39293_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_39308();
function runjs_39308() {
	window.obj39293_droppedInsideTargetActions_2_runningActionsCount = obj39293_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj39293").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj39293_droppedInsideTargetActions_2_runningActionsCount = window.obj39293_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj39293_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj39293_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj39293_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj39293_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj39293_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj39293_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj39293").trigger("obj39293_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 39293) {
				console.warn("de-queueing event obj39293." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj39293").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj39293_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_39309();
function switchText_39309() {
	window.obj39293_droppedInsideTargetActions_2_runningActionsCount = obj39293_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj39485_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj39485_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj39485").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj39485_content");
			setTimeout(function () {
				window.obj39293_droppedInsideTargetActions_2_runningActionsCount = window.obj39293_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj39293_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj39293_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj39293_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj39293_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj39485 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj39293_droppedInsideTargetActions_2_runningActionsCount = window.obj39293_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj39293_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj39293_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj39293_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj39293_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj39293_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj39293_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj39293").trigger("obj39293_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 39293) {
				console.warn("de-queueing event obj39293." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj39293").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj39293_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj39293 
move_39310();
function move_39310() {
	window.obj39293_droppedInsideTargetActions_2_runningActionsCount = obj39293_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj39293");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 381;
	var moveY = 609;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj39293_droppedInsideTargetActions_2_runningActionsCount = window.obj39293_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj39293_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj39293_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj39293_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj39293_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj39293_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj39293_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj39293").trigger("obj39293_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 39293) {
				console.warn("de-queueing event obj39293." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj39293").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj39293_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_39311();
function runjs_39311() {
	window.obj39293_droppedInsideTargetActions_2_runningActionsCount = obj39293_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj39495").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj39293_droppedInsideTargetActions_2_runningActionsCount = window.obj39293_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj39293_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj39293_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj39293_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj39293_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj39293_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj39293_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj39293").trigger("obj39293_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 39293) {
				console.warn("de-queueing event obj39293." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj39293").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj39293_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_39312();
function runjs_39312() {
	window.obj39293_droppedInsideTargetActions_2_runningActionsCount = obj39293_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj39495").css("border-color", "#000000"); $("#obj39495").css("border-width", "1px"); $("#obj39495").css("border-style", "solid"); $("#obj39495").css("border-radius", "10px"); $("#obj39495").css("-webkit-border-radius", "10px"); $("#obj39495").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj39293_droppedInsideTargetActions_2_runningActionsCount = window.obj39293_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj39293_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj39293_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj39293_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj39293_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj39293_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj39293_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj39293").trigger("obj39293_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 39293) {
				console.warn("de-queueing event obj39293." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj39293").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj39293_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj39493
(function(){
	window.obj39293_droppedInsideTargetActions_2_runningActionsCount = obj39293_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj39493";
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
					window.obj39293_droppedInsideTargetActions_2_runningActionsCount = window.obj39293_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj39293_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj39293_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj39293_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj39293_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj39293_droppedInsideTargetActions_2_runningActionsCount = window.obj39293_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj39293_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj39293_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj39293_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj39293_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj39293_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj39293_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj39293").trigger("obj39293_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 39293) {
				console.warn("de-queueing event obj39293." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj39293").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj39293_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_39314();
function runjs_39314() {
	window.obj39293_droppedInsideTargetActions_2_runningActionsCount = obj39293_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj39293").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj39293_droppedInsideTargetActions_2_runningActionsCount = window.obj39293_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj39293_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj39293_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj39293_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj39293_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj39293_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj39293_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj39293").trigger("obj39293_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 39293) {
				console.warn("de-queueing event obj39293." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj39293").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj39293_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_39315();
function runjs_39315() {
	window.obj39293_droppedInsideTargetActions_2_runningActionsCount = obj39293_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj39293").css("border-color", "rgba(0,0,0,0)"); $("#obj39293").css("border-width", "0px"); $("#obj39293").css("border-style", "solid"); $("#obj39293").css("border-radius", "10px"); $("#obj39293").css("-webkit-border-radius", "10px"); $("#obj39293").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj39293_droppedInsideTargetActions_2_runningActionsCount = window.obj39293_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj39293_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj39293_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj39293_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj39293_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj39293_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj39293_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj39293").trigger("obj39293_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 39293) {
				console.warn("de-queueing event obj39293." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj39293").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj39293_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj39477 
playAudio_39316();
function playAudio_39316() {
	window.obj39293_droppedInsideTargetActions_2_runningActionsCount = obj39293_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj39477")[0];
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
		    window.obj39293_droppedInsideTargetActions_2_runningActionsCount = window.obj39293_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj39293_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj39293_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj39293_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj39293_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj39293_droppedInsideTargetActions_2_runningActionsCount = window.obj39293_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj39293_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj39293_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj39293_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj39293_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj39293_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj39293_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj39293").trigger("obj39293_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 39293) {
				console.warn("de-queueing event obj39293." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj39293").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj39293_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_39317();
function switchText_39317() {
	window.obj39293_droppedInsideTargetActions_2_runningActionsCount = obj39293_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj39485_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj39485_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj39485").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj39485_content");
			setTimeout(function () {
				window.obj39293_droppedInsideTargetActions_2_runningActionsCount = window.obj39293_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj39293_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj39293_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj39293_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj39293_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj39485 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj39293_droppedInsideTargetActions_2_runningActionsCount = window.obj39293_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj39293_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj39293_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj39293_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj39293_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj39293_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj39293_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj39293").trigger("obj39293_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 39293) {
				console.warn("de-queueing event obj39293." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj39293").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj39293_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj39293_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj39293_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj39293").trigger("obj39293_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 39293) {
				console.warn("de-queueing event obj39293." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj39293").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj39293_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_39298();
function runjs_39298() {
	window.obj39293_droppedInsideTargetActions_runningActionsCount = obj39293_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj39501").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj39293_droppedInsideTargetActions_runningActionsCount = window.obj39293_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj39293_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj39293_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj39293_droppedInsideTargetActions_runningActionsCount == 0) {
	obj39293_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj39293_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj39293_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj39293").trigger("obj39293_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 39293) {
				console.warn("de-queueing event obj39293." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj39293").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj39293_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_39302();
function switchText_39302() {
	window.obj39293_droppedInsideTargetActions_runningActionsCount = obj39293_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj39485_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj39485_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj39485").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj39485_content");
			setTimeout(function () {
				window.obj39293_droppedInsideTargetActions_runningActionsCount = window.obj39293_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj39293_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj39293_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj39293_droppedInsideTargetActions_runningActionsCount == 0) {
	obj39293_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj39485 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj39293_droppedInsideTargetActions_runningActionsCount = window.obj39293_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj39293_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj39293_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj39293_droppedInsideTargetActions_runningActionsCount == 0) {
	obj39293_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj39293_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj39293_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj39293").trigger("obj39293_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 39293) {
				console.warn("de-queueing event obj39293." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj39293").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj39293_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_39299();
function runjs_39299() {
	window.obj39293_droppedInsideTargetActions_runningActionsCount = obj39293_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj39501").css("border-color", "#058E3F"); $("#obj39501").css("border-width", "2px"); $("#obj39501").css("border-style", "solid"); $("#obj39501").css("border-radius", "10px"); $("#obj39501").css("-webkit-border-radius", "10px"); $("#obj39501").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj39293_droppedInsideTargetActions_runningActionsCount = window.obj39293_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj39293_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj39293_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj39293_droppedInsideTargetActions_runningActionsCount == 0) {
	obj39293_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj39293_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj39293_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj39293").trigger("obj39293_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 39293) {
				console.warn("de-queueing event obj39293." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj39293").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj39293_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj39499 
hide_39300();
function hide_39300() {
	var selector = "#obj39499";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj39293_droppedInsideTargetActions_runningActionsCount = obj39293_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj39293_droppedInsideTargetActions_runningActionsCount = window.obj39293_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj39293_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj39293_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj39293_droppedInsideTargetActions_runningActionsCount == 0) {
	obj39293_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_39300(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj39293_droppedInsideTargetActions_runningActionsCount = window.obj39293_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj39293_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj39293_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj39293_droppedInsideTargetActions_runningActionsCount == 0) {
	obj39293_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj39293_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj39293_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj39293").trigger("obj39293_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 39293) {
				console.warn("de-queueing event obj39293." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj39293").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj39293_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_39301();
function runjs_39301() {
	window.obj39293_droppedInsideTargetActions_runningActionsCount = obj39293_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj39293").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj39293_droppedInsideTargetActions_runningActionsCount = window.obj39293_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj39293_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj39293_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj39293_droppedInsideTargetActions_runningActionsCount == 0) {
	obj39293_droppedInsideTargetActions_actionGroup5();
}
	}, 1);
}







};
obj39293_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj39293_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj39293").trigger("obj39293_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 39293) {
				console.warn("de-queueing event obj39293." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj39293").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj39293_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj39479 
playAudio_39303();
function playAudio_39303() {
	window.obj39293_droppedInsideTargetActions_runningActionsCount = obj39293_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj39479")[0];
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
		    window.obj39293_droppedInsideTargetActions_runningActionsCount = window.obj39293_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj39293_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj39293_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj39293_droppedInsideTargetActions_runningActionsCount == 0) {
	obj39293_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj39293_droppedInsideTargetActions_runningActionsCount = window.obj39293_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj39293_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj39293_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj39293_droppedInsideTargetActions_runningActionsCount == 0) {
	obj39293_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj39293_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj39293_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj39293").trigger("obj39293_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 39293) {
				console.warn("de-queueing event obj39293." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj39293").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj39293_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90472();
function switchText_90472() {
	window.obj39293_droppedInsideTargetActions_runningActionsCount = obj39293_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj39485_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj39485_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj39485").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj39485_content");
			setTimeout(function () {
				window.obj39293_droppedInsideTargetActions_runningActionsCount = window.obj39293_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj39293_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj39293_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj39293_droppedInsideTargetActions_runningActionsCount == 0) {
	obj39293_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj39485 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj39293_droppedInsideTargetActions_runningActionsCount = window.obj39293_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj39293_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj39293_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj39293_droppedInsideTargetActions_runningActionsCount == 0) {
	obj39293_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj39293_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj39293_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj39293").trigger("obj39293_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 39293) {
				console.warn("de-queueing event obj39293." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj39293").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj39293_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj39547_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj39547_onTouchDown_activeActionGroupIndex = -1;
		$("#obj39547").trigger("obj39547_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 39547) {
				console.warn("de-queueing event obj39547." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj39547").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj39547_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj39547");
//	action: dragDrop
//	target: obj39547 
dragDrop_39550();
function dragDrop_39550() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj39547_onTouchDown_runningActionsCount = obj39547_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj39547');
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
	  	containerNode = $('#obj39511');
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
    	window.obj39547_onTouchDown_runningActionsCount = window.obj39547_onTouchDown_runningActionsCount - 1;
if (window.obj39547_onTouchDown_runningActionsCount < 0) {
	window.obj39547_onTouchDown_runningActionsCount = 0;
} else if (window.obj39547_onTouchDown_runningActionsCount == 0) {
	obj39547_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj39495","#obj39501","#obj39489");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_39550 = false;
    	var dropped_id_39550;
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
					dropped_39550 = true;
					dropped_id_39550 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_39550) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj39547").trigger('SCActionDragDrop39550_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj39547_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj39547_onTouchDown_activeActionGroupIndex = -1;
		$("#obj39547").trigger("obj39547_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 39547) {
				console.warn("de-queueing event obj39547." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj39547").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj39547_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj39547_SCActionDragDrop39550_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj39547_SCActionDragDrop39550_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj39547").trigger("obj39547_SCActionDragDrop39550_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 39547) {
				console.warn("de-queueing event obj39547." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj39547").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj39547_SCActionDragDrop39550_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj39547 
move_92589();
function move_92589() {
	window.obj39547_SCActionDragDrop39550_droppedOutsideTargetActions_runningActionsCount = obj39547_SCActionDragDrop39550_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj39547");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 250;
	var moveY = 609;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj39547_SCActionDragDrop39550_droppedOutsideTargetActions_runningActionsCount = window.obj39547_SCActionDragDrop39550_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj39547_SCActionDragDrop39550_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj39547_SCActionDragDrop39550_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj39547_SCActionDragDrop39550_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj39547_SCActionDragDrop39550_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj39547_SCActionDragDrop39550_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj39547_SCActionDragDrop39550_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj39547").trigger("obj39547_SCActionDragDrop39550_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 39547) {
				console.warn("de-queueing event obj39547." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj39547").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj39547_SCActionDragDrop39550_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj39547_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj39547_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj39547").trigger("obj39547_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 39547) {
				console.warn("de-queueing event obj39547." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj39547").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj39547_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_39573();
function runjs_39573() {
	window.obj39547_droppedInsideTargetActions_3_runningActionsCount = obj39547_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj39489").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj39547_droppedInsideTargetActions_3_runningActionsCount = window.obj39547_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj39547_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj39547_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj39547_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj39547_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj39547_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj39547_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj39547").trigger("obj39547_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 39547) {
				console.warn("de-queueing event obj39547." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj39547").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj39547_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_39574();
function runjs_39574() {
	window.obj39547_droppedInsideTargetActions_3_runningActionsCount = obj39547_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj39489").css("border-color", "#C00000"); $("#obj39489").css("border-width", "2px"); $("#obj39489").css("border-style", "solid"); $("#obj39489").css("border-radius", "10px"); $("#obj39489").css("-webkit-border-radius", "10px"); $("#obj39489").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj39547_droppedInsideTargetActions_3_runningActionsCount = window.obj39547_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj39547_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj39547_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj39547_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj39547_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj39547_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj39547_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj39547").trigger("obj39547_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 39547) {
				console.warn("de-queueing event obj39547." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj39547").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj39547_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj39487 
hide_39575();
function hide_39575() {
	var selector = "#obj39487";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj39547_droppedInsideTargetActions_3_runningActionsCount = obj39547_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj39547_droppedInsideTargetActions_3_runningActionsCount = window.obj39547_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj39547_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj39547_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj39547_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj39547_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_39575(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj39547_droppedInsideTargetActions_3_runningActionsCount = window.obj39547_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj39547_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj39547_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj39547_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj39547_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj39547_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj39547_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj39547").trigger("obj39547_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 39547) {
				console.warn("de-queueing event obj39547." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj39547").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj39547_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_39576();
function runjs_39576() {
	window.obj39547_droppedInsideTargetActions_3_runningActionsCount = obj39547_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj39547").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj39547_droppedInsideTargetActions_3_runningActionsCount = window.obj39547_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj39547_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj39547_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj39547_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj39547_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj39547_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj39547_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj39547").trigger("obj39547_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 39547) {
				console.warn("de-queueing event obj39547." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj39547").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj39547_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_39577();
function switchText_39577() {
	window.obj39547_droppedInsideTargetActions_3_runningActionsCount = obj39547_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj39485_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj39485_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj39485").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj39485_content");
			setTimeout(function () {
				window.obj39547_droppedInsideTargetActions_3_runningActionsCount = window.obj39547_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj39547_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj39547_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj39547_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj39547_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj39485 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj39547_droppedInsideTargetActions_3_runningActionsCount = window.obj39547_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj39547_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj39547_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj39547_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj39547_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj39547_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj39547_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj39547").trigger("obj39547_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 39547) {
				console.warn("de-queueing event obj39547." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj39547").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj39547_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj39547 
move_39578();
function move_39578() {
	window.obj39547_droppedInsideTargetActions_3_runningActionsCount = obj39547_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj39547");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 250;
	var moveY = 609;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj39547_droppedInsideTargetActions_3_runningActionsCount = window.obj39547_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj39547_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj39547_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj39547_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj39547_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj39547_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj39547_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj39547").trigger("obj39547_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 39547) {
				console.warn("de-queueing event obj39547." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj39547").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj39547_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_39579();
function runjs_39579() {
	window.obj39547_droppedInsideTargetActions_3_runningActionsCount = obj39547_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj39489").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj39547_droppedInsideTargetActions_3_runningActionsCount = window.obj39547_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj39547_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj39547_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj39547_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj39547_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj39547_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj39547_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj39547").trigger("obj39547_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 39547) {
				console.warn("de-queueing event obj39547." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj39547").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj39547_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_39580();
function runjs_39580() {
	window.obj39547_droppedInsideTargetActions_3_runningActionsCount = obj39547_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj39489").css("border-color", "#000000"); $("#obj39489").css("border-width", "1px"); $("#obj39489").css("border-style", "solid"); $("#obj39489").css("border-radius", "10px"); $("#obj39489").css("-webkit-border-radius", "10px"); $("#obj39489").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj39547_droppedInsideTargetActions_3_runningActionsCount = window.obj39547_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj39547_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj39547_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj39547_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj39547_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj39547_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj39547_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj39547").trigger("obj39547_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 39547) {
				console.warn("de-queueing event obj39547." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj39547").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj39547_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj39487
(function(){
	window.obj39547_droppedInsideTargetActions_3_runningActionsCount = obj39547_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj39487";
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
					window.obj39547_droppedInsideTargetActions_3_runningActionsCount = window.obj39547_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj39547_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj39547_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj39547_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj39547_droppedInsideTargetActions_3_actionGroup9();
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
				window.obj39547_droppedInsideTargetActions_3_runningActionsCount = window.obj39547_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj39547_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj39547_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj39547_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj39547_droppedInsideTargetActions_3_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj39547_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj39547_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj39547").trigger("obj39547_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 39547) {
				console.warn("de-queueing event obj39547." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj39547").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj39547_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_39582();
function runjs_39582() {
	window.obj39547_droppedInsideTargetActions_3_runningActionsCount = obj39547_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj39547").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj39547_droppedInsideTargetActions_3_runningActionsCount = window.obj39547_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj39547_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj39547_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj39547_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj39547_droppedInsideTargetActions_3_actionGroup10();
}
	}, 1);
}







};
obj39547_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj39547_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj39547").trigger("obj39547_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 39547) {
				console.warn("de-queueing event obj39547." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj39547").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj39547_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_39583();
function runjs_39583() {
	window.obj39547_droppedInsideTargetActions_3_runningActionsCount = obj39547_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj39547").css("border-color", "rgba(0,0,0,0)"); $("#obj39547").css("border-width", "0px"); $("#obj39547").css("border-style", "solid"); $("#obj39547").css("border-radius", "10px"); $("#obj39547").css("-webkit-border-radius", "10px"); $("#obj39547").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj39547_droppedInsideTargetActions_3_runningActionsCount = window.obj39547_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj39547_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj39547_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj39547_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj39547_droppedInsideTargetActions_3_actionGroup11();
}
	}, 1);
}







};
obj39547_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj39547_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj39547").trigger("obj39547_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 39547) {
				console.warn("de-queueing event obj39547." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj39547").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj39547_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj39477 
playAudio_39584();
function playAudio_39584() {
	window.obj39547_droppedInsideTargetActions_3_runningActionsCount = obj39547_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj39477")[0];
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
		    window.obj39547_droppedInsideTargetActions_3_runningActionsCount = window.obj39547_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj39547_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj39547_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj39547_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj39547_droppedInsideTargetActions_3_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj39547_droppedInsideTargetActions_3_runningActionsCount = window.obj39547_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj39547_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj39547_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj39547_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj39547_droppedInsideTargetActions_3_actionGroup12();
}
	}
}









};
obj39547_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj39547_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj39547").trigger("obj39547_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 39547) {
				console.warn("de-queueing event obj39547." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj39547").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj39547_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_39585();
function switchText_39585() {
	window.obj39547_droppedInsideTargetActions_3_runningActionsCount = obj39547_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj39485_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj39485_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj39485").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj39485_content");
			setTimeout(function () {
				window.obj39547_droppedInsideTargetActions_3_runningActionsCount = window.obj39547_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj39547_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj39547_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj39547_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj39547_droppedInsideTargetActions_3_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj39485 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj39547_droppedInsideTargetActions_3_runningActionsCount = window.obj39547_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj39547_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj39547_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj39547_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj39547_droppedInsideTargetActions_3_actionGroup13();
}
		}, 1);
	}
}






};
obj39547_droppedInsideTargetActions_3_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj39547_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj39547").trigger("obj39547_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 39547) {
				console.warn("de-queueing event obj39547." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj39547").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj39547_droppedInsideTargetActions_3_activeActionGroupIndex = 13;
	





















};
obj39547_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj39547_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj39547").trigger("obj39547_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 39547) {
				console.warn("de-queueing event obj39547." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj39547").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj39547_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_39559();
function runjs_39559() {
	window.obj39547_droppedInsideTargetActions_2_runningActionsCount = obj39547_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj39501").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj39547_droppedInsideTargetActions_2_runningActionsCount = window.obj39547_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj39547_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj39547_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj39547_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj39547_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj39547_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj39547_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj39547").trigger("obj39547_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 39547) {
				console.warn("de-queueing event obj39547." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj39547").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj39547_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_39560();
function runjs_39560() {
	window.obj39547_droppedInsideTargetActions_2_runningActionsCount = obj39547_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj39501").css("border-color", "#C00000"); $("#obj39501").css("border-width", "2px"); $("#obj39501").css("border-style", "solid"); $("#obj39501").css("border-radius", "10px"); $("#obj39501").css("-webkit-border-radius", "10px"); $("#obj39501").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj39547_droppedInsideTargetActions_2_runningActionsCount = window.obj39547_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj39547_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj39547_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj39547_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj39547_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj39547_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj39547_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj39547").trigger("obj39547_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 39547) {
				console.warn("de-queueing event obj39547." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj39547").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj39547_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj39499 
hide_39561();
function hide_39561() {
	var selector = "#obj39499";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj39547_droppedInsideTargetActions_2_runningActionsCount = obj39547_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj39547_droppedInsideTargetActions_2_runningActionsCount = window.obj39547_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj39547_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj39547_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj39547_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj39547_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_39561(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj39547_droppedInsideTargetActions_2_runningActionsCount = window.obj39547_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj39547_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj39547_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj39547_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj39547_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj39547_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj39547_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj39547").trigger("obj39547_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 39547) {
				console.warn("de-queueing event obj39547." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj39547").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj39547_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_39562();
function runjs_39562() {
	window.obj39547_droppedInsideTargetActions_2_runningActionsCount = obj39547_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj39547").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj39547_droppedInsideTargetActions_2_runningActionsCount = window.obj39547_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj39547_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj39547_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj39547_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj39547_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj39547_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj39547_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj39547").trigger("obj39547_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 39547) {
				console.warn("de-queueing event obj39547." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj39547").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj39547_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_39563();
function switchText_39563() {
	window.obj39547_droppedInsideTargetActions_2_runningActionsCount = obj39547_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj39485_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj39485_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj39485").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj39485_content");
			setTimeout(function () {
				window.obj39547_droppedInsideTargetActions_2_runningActionsCount = window.obj39547_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj39547_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj39547_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj39547_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj39547_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj39485 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj39547_droppedInsideTargetActions_2_runningActionsCount = window.obj39547_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj39547_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj39547_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj39547_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj39547_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj39547_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj39547_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj39547").trigger("obj39547_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 39547) {
				console.warn("de-queueing event obj39547." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj39547").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj39547_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj39547 
move_39564();
function move_39564() {
	window.obj39547_droppedInsideTargetActions_2_runningActionsCount = obj39547_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj39547");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 250;
	var moveY = 609;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj39547_droppedInsideTargetActions_2_runningActionsCount = window.obj39547_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj39547_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj39547_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj39547_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj39547_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj39547_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj39547_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj39547").trigger("obj39547_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 39547) {
				console.warn("de-queueing event obj39547." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj39547").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj39547_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_39565();
function runjs_39565() {
	window.obj39547_droppedInsideTargetActions_2_runningActionsCount = obj39547_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj39501").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj39547_droppedInsideTargetActions_2_runningActionsCount = window.obj39547_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj39547_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj39547_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj39547_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj39547_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj39547_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj39547_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj39547").trigger("obj39547_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 39547) {
				console.warn("de-queueing event obj39547." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj39547").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj39547_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_39566();
function runjs_39566() {
	window.obj39547_droppedInsideTargetActions_2_runningActionsCount = obj39547_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj39501").css("border-color", "#000000"); $("#obj39501").css("border-width", "1px"); $("#obj39501").css("border-style", "solid"); $("#obj39501").css("border-radius", "10px"); $("#obj39501").css("-webkit-border-radius", "10px"); $("#obj39501").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj39547_droppedInsideTargetActions_2_runningActionsCount = window.obj39547_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj39547_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj39547_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj39547_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj39547_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj39547_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj39547_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj39547").trigger("obj39547_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 39547) {
				console.warn("de-queueing event obj39547." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj39547").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj39547_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj39499
(function(){
	window.obj39547_droppedInsideTargetActions_2_runningActionsCount = obj39547_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj39499";
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
					window.obj39547_droppedInsideTargetActions_2_runningActionsCount = window.obj39547_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj39547_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj39547_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj39547_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj39547_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj39547_droppedInsideTargetActions_2_runningActionsCount = window.obj39547_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj39547_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj39547_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj39547_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj39547_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj39547_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj39547_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj39547").trigger("obj39547_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 39547) {
				console.warn("de-queueing event obj39547." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj39547").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj39547_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_39568();
function runjs_39568() {
	window.obj39547_droppedInsideTargetActions_2_runningActionsCount = obj39547_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj39547").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj39547_droppedInsideTargetActions_2_runningActionsCount = window.obj39547_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj39547_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj39547_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj39547_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj39547_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj39547_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj39547_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj39547").trigger("obj39547_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 39547) {
				console.warn("de-queueing event obj39547." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj39547").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj39547_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_39569();
function runjs_39569() {
	window.obj39547_droppedInsideTargetActions_2_runningActionsCount = obj39547_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj39547").css("border-color", "rgba(0,0,0,0)"); $("#obj39547").css("border-width", "0px"); $("#obj39547").css("border-style", "solid"); $("#obj39547").css("border-radius", "10px"); $("#obj39547").css("-webkit-border-radius", "10px"); $("#obj39547").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj39547_droppedInsideTargetActions_2_runningActionsCount = window.obj39547_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj39547_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj39547_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj39547_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj39547_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj39547_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj39547_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj39547").trigger("obj39547_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 39547) {
				console.warn("de-queueing event obj39547." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj39547").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj39547_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj39477 
playAudio_39570();
function playAudio_39570() {
	window.obj39547_droppedInsideTargetActions_2_runningActionsCount = obj39547_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj39477")[0];
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
		    window.obj39547_droppedInsideTargetActions_2_runningActionsCount = window.obj39547_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj39547_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj39547_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj39547_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj39547_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj39547_droppedInsideTargetActions_2_runningActionsCount = window.obj39547_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj39547_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj39547_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj39547_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj39547_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj39547_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj39547_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj39547").trigger("obj39547_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 39547) {
				console.warn("de-queueing event obj39547." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj39547").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj39547_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_39571();
function switchText_39571() {
	window.obj39547_droppedInsideTargetActions_2_runningActionsCount = obj39547_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj39485_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj39485_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj39485").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj39485_content");
			setTimeout(function () {
				window.obj39547_droppedInsideTargetActions_2_runningActionsCount = window.obj39547_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj39547_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj39547_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj39547_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj39547_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj39485 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj39547_droppedInsideTargetActions_2_runningActionsCount = window.obj39547_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj39547_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj39547_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj39547_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj39547_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj39547_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj39547_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj39547").trigger("obj39547_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 39547) {
				console.warn("de-queueing event obj39547." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj39547").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj39547_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj39547_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj39547_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj39547").trigger("obj39547_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 39547) {
				console.warn("de-queueing event obj39547." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj39547").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj39547_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_39552();
function runjs_39552() {
	window.obj39547_droppedInsideTargetActions_runningActionsCount = obj39547_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj39495").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj39547_droppedInsideTargetActions_runningActionsCount = window.obj39547_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj39547_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj39547_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj39547_droppedInsideTargetActions_runningActionsCount == 0) {
	obj39547_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj39547_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj39547_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj39547").trigger("obj39547_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 39547) {
				console.warn("de-queueing event obj39547." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj39547").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj39547_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_39556();
function switchText_39556() {
	window.obj39547_droppedInsideTargetActions_runningActionsCount = obj39547_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj39485_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj39485_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj39485").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj39485_content");
			setTimeout(function () {
				window.obj39547_droppedInsideTargetActions_runningActionsCount = window.obj39547_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj39547_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj39547_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj39547_droppedInsideTargetActions_runningActionsCount == 0) {
	obj39547_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj39485 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj39547_droppedInsideTargetActions_runningActionsCount = window.obj39547_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj39547_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj39547_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj39547_droppedInsideTargetActions_runningActionsCount == 0) {
	obj39547_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj39547_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj39547_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj39547").trigger("obj39547_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 39547) {
				console.warn("de-queueing event obj39547." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj39547").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj39547_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_39553();
function runjs_39553() {
	window.obj39547_droppedInsideTargetActions_runningActionsCount = obj39547_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj39495").css("border-color", "#058E3F"); $("#obj39495").css("border-width", "2px"); $("#obj39495").css("border-style", "solid"); $("#obj39495").css("border-radius", "10px"); $("#obj39495").css("-webkit-border-radius", "10px"); $("#obj39495").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj39547_droppedInsideTargetActions_runningActionsCount = window.obj39547_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj39547_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj39547_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj39547_droppedInsideTargetActions_runningActionsCount == 0) {
	obj39547_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj39547_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj39547_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj39547").trigger("obj39547_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 39547) {
				console.warn("de-queueing event obj39547." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj39547").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj39547_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj39493 
hide_39554();
function hide_39554() {
	var selector = "#obj39493";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj39547_droppedInsideTargetActions_runningActionsCount = obj39547_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj39547_droppedInsideTargetActions_runningActionsCount = window.obj39547_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj39547_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj39547_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj39547_droppedInsideTargetActions_runningActionsCount == 0) {
	obj39547_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_39554(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj39547_droppedInsideTargetActions_runningActionsCount = window.obj39547_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj39547_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj39547_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj39547_droppedInsideTargetActions_runningActionsCount == 0) {
	obj39547_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj39547_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj39547_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj39547").trigger("obj39547_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 39547) {
				console.warn("de-queueing event obj39547." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj39547").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj39547_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_39555();
function runjs_39555() {
	window.obj39547_droppedInsideTargetActions_runningActionsCount = obj39547_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj39547").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj39547_droppedInsideTargetActions_runningActionsCount = window.obj39547_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj39547_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj39547_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj39547_droppedInsideTargetActions_runningActionsCount == 0) {
	obj39547_droppedInsideTargetActions_actionGroup5();
}
	}, 1);
}







};
obj39547_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj39547_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj39547").trigger("obj39547_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 39547) {
				console.warn("de-queueing event obj39547." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj39547").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj39547_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj39479 
playAudio_39557();
function playAudio_39557() {
	window.obj39547_droppedInsideTargetActions_runningActionsCount = obj39547_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj39479")[0];
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
		    window.obj39547_droppedInsideTargetActions_runningActionsCount = window.obj39547_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj39547_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj39547_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj39547_droppedInsideTargetActions_runningActionsCount == 0) {
	obj39547_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj39547_droppedInsideTargetActions_runningActionsCount = window.obj39547_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj39547_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj39547_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj39547_droppedInsideTargetActions_runningActionsCount == 0) {
	obj39547_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj39547_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj39547_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj39547").trigger("obj39547_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 39547) {
				console.warn("de-queueing event obj39547." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj39547").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj39547_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90471();
function switchText_90471() {
	window.obj39547_droppedInsideTargetActions_runningActionsCount = obj39547_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj39485_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj39485_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj39485").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj39485_content");
			setTimeout(function () {
				window.obj39547_droppedInsideTargetActions_runningActionsCount = window.obj39547_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj39547_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj39547_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj39547_droppedInsideTargetActions_runningActionsCount == 0) {
	obj39547_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj39485 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj39547_droppedInsideTargetActions_runningActionsCount = window.obj39547_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj39547_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj39547_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj39547_droppedInsideTargetActions_runningActionsCount == 0) {
	obj39547_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj39547_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj39547_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj39547").trigger("obj39547_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 39547) {
				console.warn("de-queueing event obj39547." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj39547").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj39547_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj39586_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj39586_onTouchDown_activeActionGroupIndex = -1;
		$("#obj39586").trigger("obj39586_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 39586) {
				console.warn("de-queueing event obj39586." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj39586").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj39586_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj39586");
//	action: dragDrop
//	target: obj39586 
dragDrop_39589();
function dragDrop_39589() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj39586_onTouchDown_runningActionsCount = obj39586_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj39586');
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
	  	containerNode = $('#obj39511');
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
    	window.obj39586_onTouchDown_runningActionsCount = window.obj39586_onTouchDown_runningActionsCount - 1;
if (window.obj39586_onTouchDown_runningActionsCount < 0) {
	window.obj39586_onTouchDown_runningActionsCount = 0;
} else if (window.obj39586_onTouchDown_runningActionsCount == 0) {
	obj39586_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj39489","#obj39495","#obj39501");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_39589 = false;
    	var dropped_id_39589;
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
					dropped_39589 = true;
					dropped_id_39589 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_39589) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj39586").trigger('SCActionDragDrop39589_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj39586_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj39586_onTouchDown_activeActionGroupIndex = -1;
		$("#obj39586").trigger("obj39586_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 39586) {
				console.warn("de-queueing event obj39586." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj39586").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj39586_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj39586_SCActionDragDrop39589_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj39586_SCActionDragDrop39589_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj39586").trigger("obj39586_SCActionDragDrop39589_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 39586) {
				console.warn("de-queueing event obj39586." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj39586").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj39586_SCActionDragDrop39589_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj39586 
move_92587();
function move_92587() {
	window.obj39586_SCActionDragDrop39589_droppedOutsideTargetActions_runningActionsCount = obj39586_SCActionDragDrop39589_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj39586");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 120;
	var moveY = 609;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj39586_SCActionDragDrop39589_droppedOutsideTargetActions_runningActionsCount = window.obj39586_SCActionDragDrop39589_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj39586_SCActionDragDrop39589_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj39586_SCActionDragDrop39589_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj39586_SCActionDragDrop39589_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj39586_SCActionDragDrop39589_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj39586_SCActionDragDrop39589_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj39586_SCActionDragDrop39589_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj39586").trigger("obj39586_SCActionDragDrop39589_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 39586) {
				console.warn("de-queueing event obj39586." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj39586").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj39586_SCActionDragDrop39589_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj39586_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj39586_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj39586").trigger("obj39586_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 39586) {
				console.warn("de-queueing event obj39586." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj39586").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj39586_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_39625();
function runjs_39625() {
	window.obj39586_droppedInsideTargetActions_3_runningActionsCount = obj39586_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj39501").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj39586_droppedInsideTargetActions_3_runningActionsCount = window.obj39586_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj39586_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj39586_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj39586_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj39586_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj39586_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj39586_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj39586").trigger("obj39586_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 39586) {
				console.warn("de-queueing event obj39586." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj39586").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj39586_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_39626();
function runjs_39626() {
	window.obj39586_droppedInsideTargetActions_3_runningActionsCount = obj39586_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj39501").css("border-color", "#C00000"); $("#obj39501").css("border-width", "2px"); $("#obj39501").css("border-style", "solid"); $("#obj39501").css("border-radius", "10px"); $("#obj39501").css("-webkit-border-radius", "10px"); $("#obj39501").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj39586_droppedInsideTargetActions_3_runningActionsCount = window.obj39586_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj39586_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj39586_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj39586_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj39586_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj39586_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj39586_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj39586").trigger("obj39586_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 39586) {
				console.warn("de-queueing event obj39586." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj39586").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj39586_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj39499 
hide_39627();
function hide_39627() {
	var selector = "#obj39499";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj39586_droppedInsideTargetActions_3_runningActionsCount = obj39586_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj39586_droppedInsideTargetActions_3_runningActionsCount = window.obj39586_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj39586_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj39586_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj39586_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj39586_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_39627(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj39586_droppedInsideTargetActions_3_runningActionsCount = window.obj39586_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj39586_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj39586_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj39586_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj39586_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj39586_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj39586_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj39586").trigger("obj39586_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 39586) {
				console.warn("de-queueing event obj39586." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj39586").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj39586_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_39628();
function runjs_39628() {
	window.obj39586_droppedInsideTargetActions_3_runningActionsCount = obj39586_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj39586").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj39586_droppedInsideTargetActions_3_runningActionsCount = window.obj39586_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj39586_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj39586_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj39586_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj39586_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj39586_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj39586_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj39586").trigger("obj39586_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 39586) {
				console.warn("de-queueing event obj39586." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj39586").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj39586_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_39629();
function switchText_39629() {
	window.obj39586_droppedInsideTargetActions_3_runningActionsCount = obj39586_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj39485_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj39485_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj39485").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj39485_content");
			setTimeout(function () {
				window.obj39586_droppedInsideTargetActions_3_runningActionsCount = window.obj39586_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj39586_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj39586_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj39586_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj39586_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj39485 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj39586_droppedInsideTargetActions_3_runningActionsCount = window.obj39586_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj39586_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj39586_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj39586_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj39586_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj39586_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj39586_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj39586").trigger("obj39586_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 39586) {
				console.warn("de-queueing event obj39586." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj39586").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj39586_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj39586 
move_39630();
function move_39630() {
	window.obj39586_droppedInsideTargetActions_3_runningActionsCount = obj39586_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj39586");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 120;
	var moveY = 609;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj39586_droppedInsideTargetActions_3_runningActionsCount = window.obj39586_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj39586_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj39586_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj39586_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj39586_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj39586_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj39586_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj39586").trigger("obj39586_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 39586) {
				console.warn("de-queueing event obj39586." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj39586").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj39586_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_39631();
function runjs_39631() {
	window.obj39586_droppedInsideTargetActions_3_runningActionsCount = obj39586_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj39501").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj39586_droppedInsideTargetActions_3_runningActionsCount = window.obj39586_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj39586_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj39586_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj39586_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj39586_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj39586_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj39586_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj39586").trigger("obj39586_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 39586) {
				console.warn("de-queueing event obj39586." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj39586").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj39586_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_39632();
function runjs_39632() {
	window.obj39586_droppedInsideTargetActions_3_runningActionsCount = obj39586_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj39501").css("border-color", "#000000"); $("#obj39501").css("border-width", "1px"); $("#obj39501").css("border-style", "solid"); $("#obj39501").css("border-radius", "10px"); $("#obj39501").css("-webkit-border-radius", "10px"); $("#obj39501").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj39586_droppedInsideTargetActions_3_runningActionsCount = window.obj39586_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj39586_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj39586_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj39586_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj39586_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj39586_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj39586_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj39586").trigger("obj39586_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 39586) {
				console.warn("de-queueing event obj39586." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj39586").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj39586_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj39499
(function(){
	window.obj39586_droppedInsideTargetActions_3_runningActionsCount = obj39586_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj39499";
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
					window.obj39586_droppedInsideTargetActions_3_runningActionsCount = window.obj39586_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj39586_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj39586_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj39586_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj39586_droppedInsideTargetActions_3_actionGroup9();
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
				window.obj39586_droppedInsideTargetActions_3_runningActionsCount = window.obj39586_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj39586_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj39586_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj39586_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj39586_droppedInsideTargetActions_3_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj39586_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj39586_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj39586").trigger("obj39586_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 39586) {
				console.warn("de-queueing event obj39586." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj39586").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj39586_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_39634();
function runjs_39634() {
	window.obj39586_droppedInsideTargetActions_3_runningActionsCount = obj39586_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj39586").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj39586_droppedInsideTargetActions_3_runningActionsCount = window.obj39586_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj39586_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj39586_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj39586_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj39586_droppedInsideTargetActions_3_actionGroup10();
}
	}, 1);
}







};
obj39586_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj39586_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj39586").trigger("obj39586_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 39586) {
				console.warn("de-queueing event obj39586." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj39586").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj39586_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_39635();
function runjs_39635() {
	window.obj39586_droppedInsideTargetActions_3_runningActionsCount = obj39586_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj39586").css("border-color", "rgba(0,0,0,0)"); $("#obj39586").css("border-width", "0px"); $("#obj39586").css("border-style", "solid"); $("#obj39586").css("border-radius", "10px"); $("#obj39586").css("-webkit-border-radius", "10px"); $("#obj39586").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj39586_droppedInsideTargetActions_3_runningActionsCount = window.obj39586_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj39586_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj39586_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj39586_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj39586_droppedInsideTargetActions_3_actionGroup11();
}
	}, 1);
}







};
obj39586_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj39586_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj39586").trigger("obj39586_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 39586) {
				console.warn("de-queueing event obj39586." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj39586").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj39586_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj39477 
playAudio_39636();
function playAudio_39636() {
	window.obj39586_droppedInsideTargetActions_3_runningActionsCount = obj39586_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj39477")[0];
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
		    window.obj39586_droppedInsideTargetActions_3_runningActionsCount = window.obj39586_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj39586_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj39586_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj39586_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj39586_droppedInsideTargetActions_3_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj39586_droppedInsideTargetActions_3_runningActionsCount = window.obj39586_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj39586_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj39586_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj39586_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj39586_droppedInsideTargetActions_3_actionGroup12();
}
	}
}









};
obj39586_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj39586_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj39586").trigger("obj39586_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 39586) {
				console.warn("de-queueing event obj39586." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj39586").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj39586_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_39637();
function switchText_39637() {
	window.obj39586_droppedInsideTargetActions_3_runningActionsCount = obj39586_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj39485_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj39485_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj39485").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj39485_content");
			setTimeout(function () {
				window.obj39586_droppedInsideTargetActions_3_runningActionsCount = window.obj39586_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj39586_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj39586_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj39586_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj39586_droppedInsideTargetActions_3_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj39485 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj39586_droppedInsideTargetActions_3_runningActionsCount = window.obj39586_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj39586_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj39586_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj39586_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj39586_droppedInsideTargetActions_3_actionGroup13();
}
		}, 1);
	}
}






};
obj39586_droppedInsideTargetActions_3_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj39586_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj39586").trigger("obj39586_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 39586) {
				console.warn("de-queueing event obj39586." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj39586").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj39586_droppedInsideTargetActions_3_activeActionGroupIndex = 13;
	





















};
obj39586_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj39586_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj39586").trigger("obj39586_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 39586) {
				console.warn("de-queueing event obj39586." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj39586").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj39586_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_39598();
function runjs_39598() {
	window.obj39586_droppedInsideTargetActions_2_runningActionsCount = obj39586_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj39495").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj39586_droppedInsideTargetActions_2_runningActionsCount = window.obj39586_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj39586_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj39586_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj39586_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj39586_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj39586_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj39586_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj39586").trigger("obj39586_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 39586) {
				console.warn("de-queueing event obj39586." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj39586").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj39586_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_39599();
function runjs_39599() {
	window.obj39586_droppedInsideTargetActions_2_runningActionsCount = obj39586_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj39495").css("border-color", "#C00000"); $("#obj39495").css("border-width", "2px"); $("#obj39495").css("border-style", "solid"); $("#obj39495").css("border-radius", "10px"); $("#obj39495").css("-webkit-border-radius", "10px"); $("#obj39495").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj39586_droppedInsideTargetActions_2_runningActionsCount = window.obj39586_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj39586_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj39586_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj39586_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj39586_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj39586_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj39586_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj39586").trigger("obj39586_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 39586) {
				console.warn("de-queueing event obj39586." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj39586").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj39586_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj39493 
hide_39600();
function hide_39600() {
	var selector = "#obj39493";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj39586_droppedInsideTargetActions_2_runningActionsCount = obj39586_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj39586_droppedInsideTargetActions_2_runningActionsCount = window.obj39586_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj39586_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj39586_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj39586_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj39586_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_39600(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj39586_droppedInsideTargetActions_2_runningActionsCount = window.obj39586_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj39586_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj39586_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj39586_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj39586_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj39586_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj39586_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj39586").trigger("obj39586_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 39586) {
				console.warn("de-queueing event obj39586." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj39586").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj39586_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_39601();
function runjs_39601() {
	window.obj39586_droppedInsideTargetActions_2_runningActionsCount = obj39586_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj39586").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj39586_droppedInsideTargetActions_2_runningActionsCount = window.obj39586_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj39586_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj39586_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj39586_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj39586_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj39586_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj39586_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj39586").trigger("obj39586_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 39586) {
				console.warn("de-queueing event obj39586." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj39586").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj39586_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_39602();
function switchText_39602() {
	window.obj39586_droppedInsideTargetActions_2_runningActionsCount = obj39586_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj39485_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj39485_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj39485").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj39485_content");
			setTimeout(function () {
				window.obj39586_droppedInsideTargetActions_2_runningActionsCount = window.obj39586_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj39586_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj39586_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj39586_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj39586_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj39485 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj39586_droppedInsideTargetActions_2_runningActionsCount = window.obj39586_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj39586_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj39586_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj39586_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj39586_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj39586_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj39586_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj39586").trigger("obj39586_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 39586) {
				console.warn("de-queueing event obj39586." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj39586").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj39586_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj39586 
move_39603();
function move_39603() {
	window.obj39586_droppedInsideTargetActions_2_runningActionsCount = obj39586_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj39586");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 120;
	var moveY = 609;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj39586_droppedInsideTargetActions_2_runningActionsCount = window.obj39586_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj39586_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj39586_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj39586_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj39586_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj39586_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj39586_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj39586").trigger("obj39586_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 39586) {
				console.warn("de-queueing event obj39586." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj39586").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj39586_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_39604();
function runjs_39604() {
	window.obj39586_droppedInsideTargetActions_2_runningActionsCount = obj39586_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj39495").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj39586_droppedInsideTargetActions_2_runningActionsCount = window.obj39586_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj39586_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj39586_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj39586_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj39586_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj39586_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj39586_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj39586").trigger("obj39586_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 39586) {
				console.warn("de-queueing event obj39586." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj39586").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj39586_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_39605();
function runjs_39605() {
	window.obj39586_droppedInsideTargetActions_2_runningActionsCount = obj39586_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj39495").css("border-color", "#000000"); $("#obj39495").css("border-width", "1px"); $("#obj39495").css("border-style", "solid"); $("#obj39495").css("border-radius", "10px"); $("#obj39495").css("-webkit-border-radius", "10px"); $("#obj39495").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj39586_droppedInsideTargetActions_2_runningActionsCount = window.obj39586_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj39586_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj39586_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj39586_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj39586_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj39586_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj39586_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj39586").trigger("obj39586_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 39586) {
				console.warn("de-queueing event obj39586." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj39586").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj39586_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj39493
(function(){
	window.obj39586_droppedInsideTargetActions_2_runningActionsCount = obj39586_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj39493";
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
					window.obj39586_droppedInsideTargetActions_2_runningActionsCount = window.obj39586_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj39586_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj39586_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj39586_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj39586_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj39586_droppedInsideTargetActions_2_runningActionsCount = window.obj39586_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj39586_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj39586_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj39586_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj39586_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj39586_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj39586_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj39586").trigger("obj39586_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 39586) {
				console.warn("de-queueing event obj39586." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj39586").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj39586_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_39607();
function runjs_39607() {
	window.obj39586_droppedInsideTargetActions_2_runningActionsCount = obj39586_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj39586").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj39586_droppedInsideTargetActions_2_runningActionsCount = window.obj39586_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj39586_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj39586_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj39586_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj39586_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj39586_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj39586_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj39586").trigger("obj39586_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 39586) {
				console.warn("de-queueing event obj39586." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj39586").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj39586_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_39608();
function runjs_39608() {
	window.obj39586_droppedInsideTargetActions_2_runningActionsCount = obj39586_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj39586").css("border-color", "rgba(0,0,0,0)"); $("#obj39586").css("border-width", "0px"); $("#obj39586").css("border-style", "solid"); $("#obj39586").css("border-radius", "10px"); $("#obj39586").css("-webkit-border-radius", "10px"); $("#obj39586").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj39586_droppedInsideTargetActions_2_runningActionsCount = window.obj39586_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj39586_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj39586_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj39586_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj39586_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj39586_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj39586_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj39586").trigger("obj39586_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 39586) {
				console.warn("de-queueing event obj39586." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj39586").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj39586_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj39477 
playAudio_39609();
function playAudio_39609() {
	window.obj39586_droppedInsideTargetActions_2_runningActionsCount = obj39586_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj39477")[0];
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
		    window.obj39586_droppedInsideTargetActions_2_runningActionsCount = window.obj39586_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj39586_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj39586_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj39586_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj39586_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj39586_droppedInsideTargetActions_2_runningActionsCount = window.obj39586_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj39586_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj39586_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj39586_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj39586_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj39586_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj39586_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj39586").trigger("obj39586_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 39586) {
				console.warn("de-queueing event obj39586." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj39586").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj39586_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_39610();
function switchText_39610() {
	window.obj39586_droppedInsideTargetActions_2_runningActionsCount = obj39586_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj39485_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj39485_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj39485").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj39485_content");
			setTimeout(function () {
				window.obj39586_droppedInsideTargetActions_2_runningActionsCount = window.obj39586_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj39586_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj39586_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj39586_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj39586_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj39485 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj39586_droppedInsideTargetActions_2_runningActionsCount = window.obj39586_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj39586_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj39586_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj39586_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj39586_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj39586_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj39586_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj39586").trigger("obj39586_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 39586) {
				console.warn("de-queueing event obj39586." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj39586").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj39586_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj39586_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj39586_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj39586").trigger("obj39586_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 39586) {
				console.warn("de-queueing event obj39586." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj39586").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj39586_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_39591();
function runjs_39591() {
	window.obj39586_droppedInsideTargetActions_runningActionsCount = obj39586_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj39489").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj39586_droppedInsideTargetActions_runningActionsCount = window.obj39586_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj39586_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj39586_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj39586_droppedInsideTargetActions_runningActionsCount == 0) {
	obj39586_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj39586_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj39586_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj39586").trigger("obj39586_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 39586) {
				console.warn("de-queueing event obj39586." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj39586").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj39586_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_39595();
function switchText_39595() {
	window.obj39586_droppedInsideTargetActions_runningActionsCount = obj39586_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj39485_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj39485_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj39485").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj39485_content");
			setTimeout(function () {
				window.obj39586_droppedInsideTargetActions_runningActionsCount = window.obj39586_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj39586_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj39586_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj39586_droppedInsideTargetActions_runningActionsCount == 0) {
	obj39586_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj39485 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj39586_droppedInsideTargetActions_runningActionsCount = window.obj39586_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj39586_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj39586_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj39586_droppedInsideTargetActions_runningActionsCount == 0) {
	obj39586_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj39586_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj39586_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj39586").trigger("obj39586_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 39586) {
				console.warn("de-queueing event obj39586." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj39586").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj39586_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_39592();
function runjs_39592() {
	window.obj39586_droppedInsideTargetActions_runningActionsCount = obj39586_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj39489").css("border-color", "#058E3F"); $("#obj39489").css("border-width", "2px"); $("#obj39489").css("border-style", "solid"); $("#obj39489").css("border-radius", "10px"); $("#obj39489").css("-webkit-border-radius", "10px"); $("#obj39489").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj39586_droppedInsideTargetActions_runningActionsCount = window.obj39586_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj39586_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj39586_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj39586_droppedInsideTargetActions_runningActionsCount == 0) {
	obj39586_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj39586_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj39586_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj39586").trigger("obj39586_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 39586) {
				console.warn("de-queueing event obj39586." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj39586").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj39586_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj39487 
hide_39593();
function hide_39593() {
	var selector = "#obj39487";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj39586_droppedInsideTargetActions_runningActionsCount = obj39586_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj39586_droppedInsideTargetActions_runningActionsCount = window.obj39586_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj39586_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj39586_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj39586_droppedInsideTargetActions_runningActionsCount == 0) {
	obj39586_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_39593(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj39586_droppedInsideTargetActions_runningActionsCount = window.obj39586_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj39586_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj39586_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj39586_droppedInsideTargetActions_runningActionsCount == 0) {
	obj39586_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj39586_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj39586_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj39586").trigger("obj39586_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 39586) {
				console.warn("de-queueing event obj39586." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj39586").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj39586_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_39594();
function runjs_39594() {
	window.obj39586_droppedInsideTargetActions_runningActionsCount = obj39586_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj39586").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj39586_droppedInsideTargetActions_runningActionsCount = window.obj39586_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj39586_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj39586_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj39586_droppedInsideTargetActions_runningActionsCount == 0) {
	obj39586_droppedInsideTargetActions_actionGroup5();
}
	}, 1);
}







};
obj39586_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj39586_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj39586").trigger("obj39586_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 39586) {
				console.warn("de-queueing event obj39586." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj39586").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj39586_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj39479 
playAudio_39596();
function playAudio_39596() {
	window.obj39586_droppedInsideTargetActions_runningActionsCount = obj39586_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj39479")[0];
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
		    window.obj39586_droppedInsideTargetActions_runningActionsCount = window.obj39586_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj39586_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj39586_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj39586_droppedInsideTargetActions_runningActionsCount == 0) {
	obj39586_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj39586_droppedInsideTargetActions_runningActionsCount = window.obj39586_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj39586_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj39586_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj39586_droppedInsideTargetActions_runningActionsCount == 0) {
	obj39586_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj39586_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj39586_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj39586").trigger("obj39586_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 39586) {
				console.warn("de-queueing event obj39586." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj39586").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj39586_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90470();
function switchText_90470() {
	window.obj39586_droppedInsideTargetActions_runningActionsCount = obj39586_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj39485_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj39485_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj39485").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj39485_content");
			setTimeout(function () {
				window.obj39586_droppedInsideTargetActions_runningActionsCount = window.obj39586_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj39586_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj39586_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj39586_droppedInsideTargetActions_runningActionsCount == 0) {
	obj39586_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj39485 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj39586_droppedInsideTargetActions_runningActionsCount = window.obj39586_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj39586_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj39586_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj39586_droppedInsideTargetActions_runningActionsCount == 0) {
	obj39586_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj39586_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj39586_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj39586").trigger("obj39586_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 39586) {
				console.warn("de-queueing event obj39586." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj39586").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj39586_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj67118_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67118_onTap_activeActionGroupIndex = -1;
		$("#obj67118").trigger("obj67118_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67118) {
				console.warn("de-queueing event obj67118." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67118").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67118_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj67118 
hide_67121();
function hide_67121() {
	var selector = "#obj67118";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj67118_onTap_runningActionsCount = obj67118_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj67118_onTap_runningActionsCount = window.obj67118_onTap_runningActionsCount - 1;
if (window.obj67118_onTap_runningActionsCount < 0) {
	window.obj67118_onTap_runningActionsCount = 0;
} else if (window.obj67118_onTap_runningActionsCount == 0) {
	obj67118_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_67121(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj67118_onTap_runningActionsCount = window.obj67118_onTap_runningActionsCount - 1;
if (window.obj67118_onTap_runningActionsCount < 0) {
	window.obj67118_onTap_runningActionsCount = 0;
} else if (window.obj67118_onTap_runningActionsCount == 0) {
	obj67118_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj67124 
stopMovie_67120();
function stopMovie_67120() {
	window.obj67118_onTap_runningActionsCount = obj67118_onTap_runningActionsCount + 1;
	var myVideo = $("#obj67124")[0];
	myVideo.pause();
	window.obj67118_onTap_runningActionsCount = window.obj67118_onTap_runningActionsCount - 1;
if (window.obj67118_onTap_runningActionsCount < 0) {
	window.obj67118_onTap_runningActionsCount = 0;
} else if (window.obj67118_onTap_runningActionsCount == 0) {
	obj67118_onTap_actionGroup1();
}
}
















};
obj67118_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67118_onTap_activeActionGroupIndex = -1;
		$("#obj67118").trigger("obj67118_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67118) {
				console.warn("de-queueing event obj67118." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67118").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67118_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj67110
(function(){
	window.obj67118_onTap_runningActionsCount = obj67118_onTap_runningActionsCount + 1;

	var selector = "#obj67110";
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
					window.obj67118_onTap_runningActionsCount = window.obj67118_onTap_runningActionsCount - 1;
if (window.obj67118_onTap_runningActionsCount < 0) {
	window.obj67118_onTap_runningActionsCount = 0;
} else if (window.obj67118_onTap_runningActionsCount == 0) {
	obj67118_onTap_actionGroup2();
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
				window.obj67118_onTap_runningActionsCount = window.obj67118_onTap_runningActionsCount - 1;
if (window.obj67118_onTap_runningActionsCount < 0) {
	window.obj67118_onTap_runningActionsCount = 0;
} else if (window.obj67118_onTap_runningActionsCount == 0) {
	obj67118_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj67118_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67118_onTap_activeActionGroupIndex = -1;
		$("#obj67118").trigger("obj67118_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67118) {
				console.warn("de-queueing event obj67118." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67118").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67118_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj67124 
move_67123();
function move_67123() {
	window.obj67118_onTap_runningActionsCount = obj67118_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj67124");
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
			window.obj67118_onTap_runningActionsCount = window.obj67118_onTap_runningActionsCount - 1;
if (window.obj67118_onTap_runningActionsCount < 0) {
	window.obj67118_onTap_runningActionsCount = 0;
} else if (window.obj67118_onTap_runningActionsCount == 0) {
	obj67118_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj67118_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj67118_onTap_activeActionGroupIndex = -1;
		$("#obj67118").trigger("obj67118_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67118) {
				console.warn("de-queueing event obj67118." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67118").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67118_onTap_activeActionGroupIndex = 3;
	





















};
obj67110_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67110_onTap_activeActionGroupIndex = -1;
		$("#obj67110").trigger("obj67110_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67110) {
				console.warn("de-queueing event obj67110." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67110").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67110_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj67110 
hide_67113();
function hide_67113() {
	var selector = "#obj67110";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj67110_onTap_runningActionsCount = obj67110_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj67110_onTap_runningActionsCount = window.obj67110_onTap_runningActionsCount - 1;
if (window.obj67110_onTap_runningActionsCount < 0) {
	window.obj67110_onTap_runningActionsCount = 0;
} else if (window.obj67110_onTap_runningActionsCount == 0) {
	obj67110_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_67113(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj67110_onTap_runningActionsCount = window.obj67110_onTap_runningActionsCount - 1;
if (window.obj67110_onTap_runningActionsCount < 0) {
	window.obj67110_onTap_runningActionsCount = 0;
} else if (window.obj67110_onTap_runningActionsCount == 0) {
	obj67110_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj67124 
playPauseMovie_67112();
function playPauseMovie_67112() {
	window.obj67110_onTap_runningActionsCount = obj67110_onTap_runningActionsCount + 1;
	var myVideo = $("#obj67124")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj67110_onTap_runningActionsCount = window.obj67110_onTap_runningActionsCount - 1;
if (window.obj67110_onTap_runningActionsCount < 0) {
	window.obj67110_onTap_runningActionsCount = 0;
} else if (window.obj67110_onTap_runningActionsCount == 0) {
	obj67110_onTap_actionGroup1();
}
}

















};
obj67110_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67110_onTap_activeActionGroupIndex = -1;
		$("#obj67110").trigger("obj67110_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67110) {
				console.warn("de-queueing event obj67110." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67110").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67110_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj67118
(function(){
	window.obj67110_onTap_runningActionsCount = obj67110_onTap_runningActionsCount + 1;

	var selector = "#obj67118";
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
					window.obj67110_onTap_runningActionsCount = window.obj67110_onTap_runningActionsCount - 1;
if (window.obj67110_onTap_runningActionsCount < 0) {
	window.obj67110_onTap_runningActionsCount = 0;
} else if (window.obj67110_onTap_runningActionsCount == 0) {
	obj67110_onTap_actionGroup2();
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
				window.obj67110_onTap_runningActionsCount = window.obj67110_onTap_runningActionsCount - 1;
if (window.obj67110_onTap_runningActionsCount < 0) {
	window.obj67110_onTap_runningActionsCount = 0;
} else if (window.obj67110_onTap_runningActionsCount == 0) {
	obj67110_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj67110_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67110_onTap_activeActionGroupIndex = -1;
		$("#obj67110").trigger("obj67110_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67110) {
				console.warn("de-queueing event obj67110." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67110").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67110_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj67124 
move_67115();
function move_67115() {
	window.obj67110_onTap_runningActionsCount = obj67110_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj67124");
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
			window.obj67110_onTap_runningActionsCount = window.obj67110_onTap_runningActionsCount - 1;
if (window.obj67110_onTap_runningActionsCount < 0) {
	window.obj67110_onTap_runningActionsCount = 0;
} else if (window.obj67110_onTap_runningActionsCount == 0) {
	obj67110_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj67110_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj67110_onTap_activeActionGroupIndex = -1;
		$("#obj67110").trigger("obj67110_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67110) {
				console.warn("de-queueing event obj67110." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67110").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67110_onTap_activeActionGroupIndex = 3;
	





















};
obj88453_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88453_onTap_activeActionGroupIndex = -1;
		$("#obj88453").trigger("obj88453_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88453) {
				console.warn("de-queueing event obj88453." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88453").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88453_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj88458 
stopAudio_88455();
function stopAudio_88455() {
	window.obj88453_onTap_runningActionsCount = obj88453_onTap_runningActionsCount + 1;
	var myAudio = $("#obj88458")[0];
	myAudio.pause();
	window.obj88453_onTap_runningActionsCount = window.obj88453_onTap_runningActionsCount - 1;
if (window.obj88453_onTap_runningActionsCount < 0) {
	window.obj88453_onTap_runningActionsCount = 0;
} else if (window.obj88453_onTap_runningActionsCount == 0) {
	obj88453_onTap_actionGroup1();
}
}








};
obj88453_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88453_onTap_activeActionGroupIndex = -1;
		$("#obj88453").trigger("obj88453_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88453) {
				console.warn("de-queueing event obj88453." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88453").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88453_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj88453 
hide_88456();
function hide_88456() {
	var selector = "#obj88453";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj88453_onTap_runningActionsCount = obj88453_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj88453_onTap_runningActionsCount = window.obj88453_onTap_runningActionsCount - 1;
if (window.obj88453_onTap_runningActionsCount < 0) {
	window.obj88453_onTap_runningActionsCount = 0;
} else if (window.obj88453_onTap_runningActionsCount == 0) {
	obj88453_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_88456(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj88453_onTap_runningActionsCount = window.obj88453_onTap_runningActionsCount - 1;
if (window.obj88453_onTap_runningActionsCount < 0) {
	window.obj88453_onTap_runningActionsCount = 0;
} else if (window.obj88453_onTap_runningActionsCount == 0) {
	obj88453_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj88453_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88453_onTap_activeActionGroupIndex = -1;
		$("#obj88453").trigger("obj88453_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88453) {
				console.warn("de-queueing event obj88453." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88453").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88453_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj88448
(function(){
	window.obj88453_onTap_runningActionsCount = obj88453_onTap_runningActionsCount + 1;

	var selector = "#obj88448";
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
					window.obj88453_onTap_runningActionsCount = window.obj88453_onTap_runningActionsCount - 1;
if (window.obj88453_onTap_runningActionsCount < 0) {
	window.obj88453_onTap_runningActionsCount = 0;
} else if (window.obj88453_onTap_runningActionsCount == 0) {
	obj88453_onTap_actionGroup3();
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
				window.obj88453_onTap_runningActionsCount = window.obj88453_onTap_runningActionsCount - 1;
if (window.obj88453_onTap_runningActionsCount < 0) {
	window.obj88453_onTap_runningActionsCount = 0;
} else if (window.obj88453_onTap_runningActionsCount == 0) {
	obj88453_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj88453_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj88453_onTap_activeActionGroupIndex = -1;
		$("#obj88453").trigger("obj88453_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88453) {
				console.warn("de-queueing event obj88453." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88453").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88453_onTap_activeActionGroupIndex = 3;
	





















};
obj88448_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88448_onTap_activeActionGroupIndex = -1;
		$("#obj88448").trigger("obj88448_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88448) {
				console.warn("de-queueing event obj88448." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88448").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88448_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj88448 
hide_88450();
function hide_88450() {
	var selector = "#obj88448";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj88448_onTap_runningActionsCount = obj88448_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj88448_onTap_runningActionsCount = window.obj88448_onTap_runningActionsCount - 1;
if (window.obj88448_onTap_runningActionsCount < 0) {
	window.obj88448_onTap_runningActionsCount = 0;
} else if (window.obj88448_onTap_runningActionsCount == 0) {
	obj88448_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_88450(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj88448_onTap_runningActionsCount = window.obj88448_onTap_runningActionsCount - 1;
if (window.obj88448_onTap_runningActionsCount < 0) {
	window.obj88448_onTap_runningActionsCount = 0;
} else if (window.obj88448_onTap_runningActionsCount == 0) {
	obj88448_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj88448_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88448_onTap_activeActionGroupIndex = -1;
		$("#obj88448").trigger("obj88448_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88448) {
				console.warn("de-queueing event obj88448." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88448").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88448_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj88453
(function(){
	window.obj88448_onTap_runningActionsCount = obj88448_onTap_runningActionsCount + 1;

	var selector = "#obj88453";
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
					window.obj88448_onTap_runningActionsCount = window.obj88448_onTap_runningActionsCount - 1;
if (window.obj88448_onTap_runningActionsCount < 0) {
	window.obj88448_onTap_runningActionsCount = 0;
} else if (window.obj88448_onTap_runningActionsCount == 0) {
	obj88448_onTap_actionGroup2();
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
				window.obj88448_onTap_runningActionsCount = window.obj88448_onTap_runningActionsCount - 1;
if (window.obj88448_onTap_runningActionsCount < 0) {
	window.obj88448_onTap_runningActionsCount = 0;
} else if (window.obj88448_onTap_runningActionsCount == 0) {
	obj88448_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj88448_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88448_onTap_activeActionGroupIndex = -1;
		$("#obj88448").trigger("obj88448_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88448) {
				console.warn("de-queueing event obj88448." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88448").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88448_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj88458 
playAudio_88452();
function playAudio_88452() {
	window.obj88448_onTap_runningActionsCount = obj88448_onTap_runningActionsCount + 1;
	var myAudio = $("#obj88458")[0];
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
		    window.obj88448_onTap_runningActionsCount = window.obj88448_onTap_runningActionsCount - 1;
if (window.obj88448_onTap_runningActionsCount < 0) {
	window.obj88448_onTap_runningActionsCount = 0;
} else if (window.obj88448_onTap_runningActionsCount == 0) {
	obj88448_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj88448_onTap_runningActionsCount = window.obj88448_onTap_runningActionsCount - 1;
if (window.obj88448_onTap_runningActionsCount < 0) {
	window.obj88448_onTap_runningActionsCount = 0;
} else if (window.obj88448_onTap_runningActionsCount == 0) {
	obj88448_onTap_actionGroup3();
}
	}
}









};
obj88448_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj88448_onTap_activeActionGroupIndex = -1;
		$("#obj88448").trigger("obj88448_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88448) {
				console.warn("de-queueing event obj88448." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88448").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88448_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj39526: Event Touch Down
 *
 */
$("#obj39526").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj39526_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj39526_onTap is still running");
	return;
}
var obj39526_onTap_runningActionsCount = 0;
var obj39526_onTap_loopCount = 0;
obj39526_onTap_actionGroup0();
});










/*
 *
 *   obj39523: Event Touch Down
 *
 */
$("#obj39523").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj39523_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj39523_onTap is still running");
	return;
}
var obj39523_onTap_runningActionsCount = 0;
var obj39523_onTap_loopCount = 0;
obj39523_onTap_actionGroup0();
});










/*
 *
 *   obj39519: Event Touch Down
 *
 */
$("#obj39519").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj39519_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj39519_onTap is still running");
	return;
}
var obj39519_onTap_runningActionsCount = 0;
var obj39519_onTap_loopCount = 0;
obj39519_onTap_actionGroup0();
});



























































































































































































































































/*
 *
 *   obj39293: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj39293");
	var winTarget = document.getElementById("obj39293");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj39293").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj39293_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj39293_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj39293_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj39293_onTouchDown is still running");
	return;
}
var obj39293_onTouchDown_runningActionsCount = 0;
var obj39293_onTouchDown_loopCount = 0;
obj39293_onTouchDown_actionGroup0();
});



/*
 *
 *   obj39293: Event SCActionDragDrop39296_droppedOutsideTargetActions
 *
 */
$("#obj39293").bind("SCActionDragDrop39296_droppedOutsideTargetActions", function(event) {
	if (window.obj39293_SCActionDragDrop39296_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj39293_SCActionDragDrop39296_droppedOutsideTargetActions is still running");
	return;
}
var obj39293_SCActionDragDrop39296_droppedOutsideTargetActions_runningActionsCount = 0;
var obj39293_SCActionDragDrop39296_droppedOutsideTargetActions_loopCount = 0;
obj39293_SCActionDragDrop39296_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj39293: Event droppedInsideTargetActions_3
 *
 */
$("#obj39293").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj39293_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj39293_droppedInsideTargetActions_3 is still running");
	return;
}
var obj39293_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj39293_droppedInsideTargetActions_3_loopCount = 0;
obj39293_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj39293: Event droppedInsideTargetActions_2
 *
 */
$("#obj39293").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj39293_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj39293_droppedInsideTargetActions_2 is still running");
	return;
}
var obj39293_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj39293_droppedInsideTargetActions_2_loopCount = 0;
obj39293_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj39293: Event droppedInsideTargetActions
 *
 */
$("#obj39293").bind("droppedInsideTargetActions", function(event) {
	if (window.obj39293_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj39293_droppedInsideTargetActions is still running");
	return;
}
var obj39293_droppedInsideTargetActions_runningActionsCount = 0;
var obj39293_droppedInsideTargetActions_loopCount = 0;
obj39293_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj39547: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj39547");
	var winTarget = document.getElementById("obj39547");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj39547").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj39547_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj39547_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj39547_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj39547_onTouchDown is still running");
	return;
}
var obj39547_onTouchDown_runningActionsCount = 0;
var obj39547_onTouchDown_loopCount = 0;
obj39547_onTouchDown_actionGroup0();
});



/*
 *
 *   obj39547: Event SCActionDragDrop39550_droppedOutsideTargetActions
 *
 */
$("#obj39547").bind("SCActionDragDrop39550_droppedOutsideTargetActions", function(event) {
	if (window.obj39547_SCActionDragDrop39550_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj39547_SCActionDragDrop39550_droppedOutsideTargetActions is still running");
	return;
}
var obj39547_SCActionDragDrop39550_droppedOutsideTargetActions_runningActionsCount = 0;
var obj39547_SCActionDragDrop39550_droppedOutsideTargetActions_loopCount = 0;
obj39547_SCActionDragDrop39550_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj39547: Event droppedInsideTargetActions_3
 *
 */
$("#obj39547").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj39547_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj39547_droppedInsideTargetActions_3 is still running");
	return;
}
var obj39547_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj39547_droppedInsideTargetActions_3_loopCount = 0;
obj39547_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj39547: Event droppedInsideTargetActions_2
 *
 */
$("#obj39547").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj39547_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj39547_droppedInsideTargetActions_2 is still running");
	return;
}
var obj39547_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj39547_droppedInsideTargetActions_2_loopCount = 0;
obj39547_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj39547: Event droppedInsideTargetActions
 *
 */
$("#obj39547").bind("droppedInsideTargetActions", function(event) {
	if (window.obj39547_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj39547_droppedInsideTargetActions is still running");
	return;
}
var obj39547_droppedInsideTargetActions_runningActionsCount = 0;
var obj39547_droppedInsideTargetActions_loopCount = 0;
obj39547_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj39586: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj39586");
	var winTarget = document.getElementById("obj39586");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj39586").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj39586_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj39586_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj39586_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj39586_onTouchDown is still running");
	return;
}
var obj39586_onTouchDown_runningActionsCount = 0;
var obj39586_onTouchDown_loopCount = 0;
obj39586_onTouchDown_actionGroup0();
});



/*
 *
 *   obj39586: Event SCActionDragDrop39589_droppedOutsideTargetActions
 *
 */
$("#obj39586").bind("SCActionDragDrop39589_droppedOutsideTargetActions", function(event) {
	if (window.obj39586_SCActionDragDrop39589_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj39586_SCActionDragDrop39589_droppedOutsideTargetActions is still running");
	return;
}
var obj39586_SCActionDragDrop39589_droppedOutsideTargetActions_runningActionsCount = 0;
var obj39586_SCActionDragDrop39589_droppedOutsideTargetActions_loopCount = 0;
obj39586_SCActionDragDrop39589_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj39586: Event droppedInsideTargetActions_3
 *
 */
$("#obj39586").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj39586_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj39586_droppedInsideTargetActions_3 is still running");
	return;
}
var obj39586_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj39586_droppedInsideTargetActions_3_loopCount = 0;
obj39586_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj39586: Event droppedInsideTargetActions_2
 *
 */
$("#obj39586").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj39586_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj39586_droppedInsideTargetActions_2 is still running");
	return;
}
var obj39586_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj39586_droppedInsideTargetActions_2_loopCount = 0;
obj39586_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj39586: Event droppedInsideTargetActions
 *
 */
$("#obj39586").bind("droppedInsideTargetActions", function(event) {
	if (window.obj39586_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj39586_droppedInsideTargetActions is still running");
	return;
}
var obj39586_droppedInsideTargetActions_runningActionsCount = 0;
var obj39586_droppedInsideTargetActions_loopCount = 0;
obj39586_droppedInsideTargetActions_actionGroup0();
});





/*
 *
 *   obj67118: Event Touch Down
 *
 */
$("#obj67118").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj67118_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj67118_onTap is still running");
	return;
}
var obj67118_onTap_runningActionsCount = 0;
var obj67118_onTap_loopCount = 0;
obj67118_onTap_actionGroup0();
});










/*
 *
 *   obj67110: Event Touch Down
 *
 */
$("#obj67110").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj67110_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj67110_onTap is still running");
	return;
}
var obj67110_onTap_runningActionsCount = 0;
var obj67110_onTap_loopCount = 0;
obj67110_onTap_actionGroup0();
});










/*
 *
 *   obj88453: Event Touch Down
 *
 */
$("#obj88453").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj88453_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj88453_onTap is still running");
	return;
}
var obj88453_onTap_runningActionsCount = 0;
var obj88453_onTap_loopCount = 0;
obj88453_onTap_actionGroup0();
});










/*
 *
 *   obj88448: Event Touch Down
 *
 */
$("#obj88448").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj88448_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj88448_onTap is still running");
	return;
}
var obj88448_onTap_runningActionsCount = 0;
var obj88448_onTap_loopCount = 0;
obj88448_onTap_actionGroup0();
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
	
$("#obj39542").trigger('SCEventShow');
$("#obj39526").trigger('SCEventShow');
$("#obj39523").trigger('SCEventShow');
$("#obj39519").trigger('SCEventShow');
$("#obj39517").trigger('SCEventShow');
$("#obj39515").trigger('SCEventShow');
$("#obj39513").trigger('SCEventShow');
$("#obj39511").trigger('SCEventShow');
$("#obj39509").trigger('SCEventShow');
$("#obj39507").trigger('SCEventShow');
$("#obj39505").trigger('SCEventShow');
$("#obj39503").trigger('SCEventShow');
$("#obj39501").trigger('SCEventShow');
$("#obj39499").trigger('SCEventShow');
$("#obj39497").trigger('SCEventShow');
$("#obj39495").trigger('SCEventShow');
$("#obj39493").trigger('SCEventShow');
$("#obj39491").trigger('SCEventShow');
$("#obj39489").trigger('SCEventShow');
$("#obj39487").trigger('SCEventShow');
$("#obj39485").trigger('SCEventShow');
$("#obj39483").trigger('SCEventShow');
$("#obj39481").trigger('SCEventShow');
$("#obj39479").trigger('SCEventShow');
$("#obj39477").trigger('SCEventShow');
$("#obj39471").trigger('SCEventShow');
$("#obj39457").trigger('SCEventShow');
$("#obj39455").trigger('SCEventShow');
$("#obj39293").trigger('SCEventShow');
$("#obj39547").trigger('SCEventShow');
$("#obj39586").trigger('SCEventShow');
$("#obj67118").trigger('SCEventShow');
$("#obj67110").trigger('SCEventShow');
$("#obj88453").trigger('SCEventShow');
$("#obj88448").trigger('SCEventShow');
$("#obj88458").trigger('SCEventShow');
$("#obj94893").trigger('SCEventShow');
$("#obj67124").trigger('SCEventShow');
	
});