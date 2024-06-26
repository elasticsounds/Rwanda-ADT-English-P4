pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 3454;
pubcoder.page.title = pubcoder.page.title || "22";
pubcoder.page.number = pubcoder.page.number || 22;
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
var obj3460_onTap_activeActionGroupIndex = -1;
var obj3460_onTap_runningActionsCount = 0;
var obj3460_onTap_loopCount = 0;
var obj3457_onTap_activeActionGroupIndex = -1;
var obj3457_onTap_runningActionsCount = 0;
var obj3457_onTap_loopCount = 0;
var obj3463_onTap_activeActionGroupIndex = -1;
var obj3463_onTap_runningActionsCount = 0;
var obj3463_onTap_loopCount = 0;
var obj3508_onDrag_activeActionGroupIndex = -1;
var obj3508_onDrag_runningActionsCount = 0;
var obj3508_onDrag_loopCount = 0;
var obj3508_onTouchDown_activeActionGroupIndex = -1;
var obj3508_onTouchDown_runningActionsCount = 0;
var obj3508_onTouchDown_loopCount = 0;
var obj3508_SCActionDragDrop3511_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj3508_SCActionDragDrop3511_droppedOutsideTargetActions_runningActionsCount = 0;
var obj3508_SCActionDragDrop3511_droppedOutsideTargetActions_loopCount = 0;
var obj3508_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
var obj3508_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj3508_droppedInsideTargetActions_4_loopCount = 0;
var obj3508_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj3508_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj3508_droppedInsideTargetActions_3_loopCount = 0;
var obj3508_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj3508_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj3508_droppedInsideTargetActions_2_loopCount = 0;
var obj3508_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj3508_droppedInsideTargetActions_runningActionsCount = 0;
var obj3508_droppedInsideTargetActions_loopCount = 0;
var obj3716_onDrag_activeActionGroupIndex = -1;
var obj3716_onDrag_runningActionsCount = 0;
var obj3716_onDrag_loopCount = 0;
var obj3716_onTouchDown_activeActionGroupIndex = -1;
var obj3716_onTouchDown_runningActionsCount = 0;
var obj3716_onTouchDown_loopCount = 0;
var obj3716_SCActionDragDrop3719_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj3716_SCActionDragDrop3719_droppedOutsideTargetActions_runningActionsCount = 0;
var obj3716_SCActionDragDrop3719_droppedOutsideTargetActions_loopCount = 0;
var obj3716_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
var obj3716_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj3716_droppedInsideTargetActions_4_loopCount = 0;
var obj3716_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj3716_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj3716_droppedInsideTargetActions_3_loopCount = 0;
var obj3716_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj3716_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj3716_droppedInsideTargetActions_2_loopCount = 0;
var obj3716_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj3716_droppedInsideTargetActions_runningActionsCount = 0;
var obj3716_droppedInsideTargetActions_loopCount = 0;
var obj3766_onDrag_activeActionGroupIndex = -1;
var obj3766_onDrag_runningActionsCount = 0;
var obj3766_onDrag_loopCount = 0;
var obj3766_onTouchDown_activeActionGroupIndex = -1;
var obj3766_onTouchDown_runningActionsCount = 0;
var obj3766_onTouchDown_loopCount = 0;
var obj3766_SCActionDragDrop3769_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj3766_SCActionDragDrop3769_droppedOutsideTargetActions_runningActionsCount = 0;
var obj3766_SCActionDragDrop3769_droppedOutsideTargetActions_loopCount = 0;
var obj3766_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
var obj3766_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj3766_droppedInsideTargetActions_4_loopCount = 0;
var obj3766_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj3766_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj3766_droppedInsideTargetActions_3_loopCount = 0;
var obj3766_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj3766_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj3766_droppedInsideTargetActions_2_loopCount = 0;
var obj3766_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj3766_droppedInsideTargetActions_runningActionsCount = 0;
var obj3766_droppedInsideTargetActions_loopCount = 0;
var obj3816_onDrag_activeActionGroupIndex = -1;
var obj3816_onDrag_runningActionsCount = 0;
var obj3816_onDrag_loopCount = 0;
var obj3816_onTouchDown_activeActionGroupIndex = -1;
var obj3816_onTouchDown_runningActionsCount = 0;
var obj3816_onTouchDown_loopCount = 0;
var obj3816_SCActionDragDrop3819_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj3816_SCActionDragDrop3819_droppedOutsideTargetActions_runningActionsCount = 0;
var obj3816_SCActionDragDrop3819_droppedOutsideTargetActions_loopCount = 0;
var obj3816_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
var obj3816_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj3816_droppedInsideTargetActions_4_loopCount = 0;
var obj3816_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj3816_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj3816_droppedInsideTargetActions_3_loopCount = 0;
var obj3816_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj3816_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj3816_droppedInsideTargetActions_2_loopCount = 0;
var obj3816_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj3816_droppedInsideTargetActions_runningActionsCount = 0;
var obj3816_droppedInsideTargetActions_loopCount = 0;
var obj65310_onTap_activeActionGroupIndex = -1;
var obj65310_onTap_runningActionsCount = 0;
var obj65310_onTap_loopCount = 0;
var obj65302_onTap_activeActionGroupIndex = -1;
var obj65302_onTap_runningActionsCount = 0;
var obj65302_onTap_loopCount = 0;
var obj87073_onTap_activeActionGroupIndex = -1;
var obj87073_onTap_runningActionsCount = 0;
var obj87073_onTap_loopCount = 0;
var obj87068_onTap_activeActionGroupIndex = -1;
var obj87068_onTap_runningActionsCount = 0;
var obj87068_onTap_loopCount = 0;
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
		
obj3460_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3460_onTap_activeActionGroupIndex = -1;
		$("#obj3460").trigger("obj3460_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3460) {
				console.warn("de-queueing event obj3460." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3460").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3460_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_3462();
function goToPage_3462() {
	window.obj3460_onTap_runningActionsCount = obj3460_onTap_runningActionsCount + 1;
	$("#anchor135")[0].click();
	window.obj3460_onTap_runningActionsCount = window.obj3460_onTap_runningActionsCount - 1;
if (window.obj3460_onTap_runningActionsCount < 0) {
	window.obj3460_onTap_runningActionsCount = 0;
} else if (window.obj3460_onTap_runningActionsCount == 0) {
	obj3460_onTap_actionGroup1();
}
}





















};
obj3460_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3460_onTap_activeActionGroupIndex = -1;
		$("#obj3460").trigger("obj3460_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3460) {
				console.warn("de-queueing event obj3460." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3460").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3460_onTap_activeActionGroupIndex = 1;
	





















};
obj3457_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3457_onTap_activeActionGroupIndex = -1;
		$("#obj3457").trigger("obj3457_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3457) {
				console.warn("de-queueing event obj3457." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3457").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3457_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_3459();
function goToPage_3459() {
	window.obj3457_onTap_runningActionsCount = obj3457_onTap_runningActionsCount + 1;
	$("#anchor136")[0].click();
	window.obj3457_onTap_runningActionsCount = window.obj3457_onTap_runningActionsCount - 1;
if (window.obj3457_onTap_runningActionsCount < 0) {
	window.obj3457_onTap_runningActionsCount = 0;
} else if (window.obj3457_onTap_runningActionsCount == 0) {
	obj3457_onTap_actionGroup1();
}
}





















};
obj3457_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3457_onTap_activeActionGroupIndex = -1;
		$("#obj3457").trigger("obj3457_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3457) {
				console.warn("de-queueing event obj3457." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3457").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3457_onTap_activeActionGroupIndex = 1;
	





















};
obj3463_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3463_onTap_activeActionGroupIndex = -1;
		$("#obj3463").trigger("obj3463_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3463) {
				console.warn("de-queueing event obj3463." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3463").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3463_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_3465();
function goToPage_3465() {
	window.obj3463_onTap_runningActionsCount = obj3463_onTap_runningActionsCount + 1;
	$("#anchor137")[0].click();
	window.obj3463_onTap_runningActionsCount = window.obj3463_onTap_runningActionsCount - 1;
if (window.obj3463_onTap_runningActionsCount < 0) {
	window.obj3463_onTap_runningActionsCount = 0;
} else if (window.obj3463_onTap_runningActionsCount == 0) {
	obj3463_onTap_actionGroup1();
}
}





















};
obj3463_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3463_onTap_activeActionGroupIndex = -1;
		$("#obj3463").trigger("obj3463_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3463) {
				console.warn("de-queueing event obj3463." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3463").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3463_onTap_activeActionGroupIndex = 1;
	





















};
obj3508_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3508_onTouchDown_activeActionGroupIndex = -1;
		$("#obj3508").trigger("obj3508_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3508) {
				console.warn("de-queueing event obj3508." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3508").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3508_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj3508");
//	action: dragDrop
//	target: obj3508 
dragDrop_3511();
function dragDrop_3511() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj3508_onTouchDown_runningActionsCount = obj3508_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj3508');
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
	  	containerNode = $('#obj3488');
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
    	window.obj3508_onTouchDown_runningActionsCount = window.obj3508_onTouchDown_runningActionsCount - 1;
if (window.obj3508_onTouchDown_runningActionsCount < 0) {
	window.obj3508_onTouchDown_runningActionsCount = 0;
} else if (window.obj3508_onTouchDown_runningActionsCount == 0) {
	obj3508_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj3496","#obj3492","#obj3500","#obj3504");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3","droppedInsideTargetActions_4") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_3511 = false;
    	var dropped_id_3511;
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
					dropped_3511 = true;
					dropped_id_3511 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_3511) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj3508").trigger('SCActionDragDrop3511_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj3508_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3508_onTouchDown_activeActionGroupIndex = -1;
		$("#obj3508").trigger("obj3508_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3508) {
				console.warn("de-queueing event obj3508." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3508").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3508_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj3508_SCActionDragDrop3511_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3508_SCActionDragDrop3511_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj3508").trigger("obj3508_SCActionDragDrop3511_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3508) {
				console.warn("de-queueing event obj3508." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3508").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3508_SCActionDragDrop3511_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj3508 
move_92148();
function move_92148() {
	window.obj3508_SCActionDragDrop3511_droppedOutsideTargetActions_runningActionsCount = obj3508_SCActionDragDrop3511_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj3508");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 82;
	var moveY = 633;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj3508_SCActionDragDrop3511_droppedOutsideTargetActions_runningActionsCount = window.obj3508_SCActionDragDrop3511_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj3508_SCActionDragDrop3511_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj3508_SCActionDragDrop3511_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj3508_SCActionDragDrop3511_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj3508_SCActionDragDrop3511_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj3508_SCActionDragDrop3511_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3508_SCActionDragDrop3511_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj3508").trigger("obj3508_SCActionDragDrop3511_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3508) {
				console.warn("de-queueing event obj3508." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3508").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3508_SCActionDragDrop3511_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj3508_droppedInsideTargetActions_4_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3508_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj3508").trigger("obj3508_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3508) {
				console.warn("de-queueing event obj3508." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3508").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3508_droppedInsideTargetActions_4_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_3946();
function runjs_3946() {
	window.obj3508_droppedInsideTargetActions_4_runningActionsCount = obj3508_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj3504").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj3508_droppedInsideTargetActions_4_runningActionsCount = window.obj3508_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj3508_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj3508_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj3508_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj3508_droppedInsideTargetActions_4_actionGroup1();
}
	}, 1);
}







};
obj3508_droppedInsideTargetActions_4_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3508_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj3508").trigger("obj3508_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3508) {
				console.warn("de-queueing event obj3508." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3508").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3508_droppedInsideTargetActions_4_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_3947();
function runjs_3947() {
	window.obj3508_droppedInsideTargetActions_4_runningActionsCount = obj3508_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj3504").css("border-color", "#C00000"); $("#obj3504").css("border-width", "2px"); $("#obj3504").css("border-style", "solid"); $("#obj3504").css("border-radius", "10px"); $("#obj3504").css("-webkit-border-radius", "10px"); $("#obj3504").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj3508_droppedInsideTargetActions_4_runningActionsCount = window.obj3508_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj3508_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj3508_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj3508_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj3508_droppedInsideTargetActions_4_actionGroup2();
}
	}, 1);
}







};
obj3508_droppedInsideTargetActions_4_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3508_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj3508").trigger("obj3508_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3508) {
				console.warn("de-queueing event obj3508." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3508").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3508_droppedInsideTargetActions_4_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj3708 
hide_3948();
function hide_3948() {
	var selector = "#obj3708";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj3508_droppedInsideTargetActions_4_runningActionsCount = obj3508_droppedInsideTargetActions_4_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj3508_droppedInsideTargetActions_4_runningActionsCount = window.obj3508_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj3508_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj3508_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj3508_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj3508_droppedInsideTargetActions_4_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_3948(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj3508_droppedInsideTargetActions_4_runningActionsCount = window.obj3508_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj3508_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj3508_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj3508_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj3508_droppedInsideTargetActions_4_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj3508_droppedInsideTargetActions_4_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3508_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj3508").trigger("obj3508_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3508) {
				console.warn("de-queueing event obj3508." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3508").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3508_droppedInsideTargetActions_4_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_3949();
function runjs_3949() {
	window.obj3508_droppedInsideTargetActions_4_runningActionsCount = obj3508_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj3508").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj3508_droppedInsideTargetActions_4_runningActionsCount = window.obj3508_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj3508_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj3508_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj3508_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj3508_droppedInsideTargetActions_4_actionGroup4();
}
	}, 1);
}







};
obj3508_droppedInsideTargetActions_4_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3508_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj3508").trigger("obj3508_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3508) {
				console.warn("de-queueing event obj3508." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3508").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3508_droppedInsideTargetActions_4_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_3950();
function switchText_3950() {
	window.obj3508_droppedInsideTargetActions_4_runningActionsCount = obj3508_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj3866_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj3866_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj3866").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj3866_content");
			setTimeout(function () {
				window.obj3508_droppedInsideTargetActions_4_runningActionsCount = window.obj3508_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj3508_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj3508_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj3508_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj3508_droppedInsideTargetActions_4_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj3866 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj3508_droppedInsideTargetActions_4_runningActionsCount = window.obj3508_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj3508_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj3508_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj3508_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj3508_droppedInsideTargetActions_4_actionGroup5();
}
		}, 1);
	}
}






};
obj3508_droppedInsideTargetActions_4_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3508_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj3508").trigger("obj3508_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3508) {
				console.warn("de-queueing event obj3508." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3508").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3508_droppedInsideTargetActions_4_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj3508 
move_3951();
function move_3951() {
	window.obj3508_droppedInsideTargetActions_4_runningActionsCount = obj3508_droppedInsideTargetActions_4_runningActionsCount + 1;

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
	var targetObject = $("#obj3508");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 82;
	var moveY = 633;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj3508_droppedInsideTargetActions_4_runningActionsCount = window.obj3508_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj3508_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj3508_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj3508_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj3508_droppedInsideTargetActions_4_actionGroup6();
}
		}, 1);
	});
}



















};
obj3508_droppedInsideTargetActions_4_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3508_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj3508").trigger("obj3508_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3508) {
				console.warn("de-queueing event obj3508." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3508").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3508_droppedInsideTargetActions_4_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_3952();
function runjs_3952() {
	window.obj3508_droppedInsideTargetActions_4_runningActionsCount = obj3508_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj3504").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj3508_droppedInsideTargetActions_4_runningActionsCount = window.obj3508_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj3508_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj3508_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj3508_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj3508_droppedInsideTargetActions_4_actionGroup7();
}
	}, 1);
}







};
obj3508_droppedInsideTargetActions_4_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3508_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj3508").trigger("obj3508_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3508) {
				console.warn("de-queueing event obj3508." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3508").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3508_droppedInsideTargetActions_4_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_3953();
function runjs_3953() {
	window.obj3508_droppedInsideTargetActions_4_runningActionsCount = obj3508_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj3504").css("border-color", "#000000"); $("#obj3504").css("border-width", "1px"); $("#obj3504").css("border-style", "solid"); $("#obj3504").css("border-radius", "10px"); $("#obj3504").css("-webkit-border-radius", "10px"); $("#obj3504").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj3508_droppedInsideTargetActions_4_runningActionsCount = window.obj3508_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj3508_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj3508_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj3508_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj3508_droppedInsideTargetActions_4_actionGroup8();
}
	}, 1);
}







};
obj3508_droppedInsideTargetActions_4_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3508_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj3508").trigger("obj3508_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3508) {
				console.warn("de-queueing event obj3508." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3508").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3508_droppedInsideTargetActions_4_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj3708
(function(){
	window.obj3508_droppedInsideTargetActions_4_runningActionsCount = obj3508_droppedInsideTargetActions_4_runningActionsCount + 1;

	var selector = "#obj3708";
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
					window.obj3508_droppedInsideTargetActions_4_runningActionsCount = window.obj3508_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj3508_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj3508_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj3508_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj3508_droppedInsideTargetActions_4_actionGroup9();
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
				window.obj3508_droppedInsideTargetActions_4_runningActionsCount = window.obj3508_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj3508_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj3508_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj3508_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj3508_droppedInsideTargetActions_4_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj3508_droppedInsideTargetActions_4_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3508_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj3508").trigger("obj3508_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3508) {
				console.warn("de-queueing event obj3508." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3508").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3508_droppedInsideTargetActions_4_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_3955();
function runjs_3955() {
	window.obj3508_droppedInsideTargetActions_4_runningActionsCount = obj3508_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj3508").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj3508_droppedInsideTargetActions_4_runningActionsCount = window.obj3508_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj3508_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj3508_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj3508_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj3508_droppedInsideTargetActions_4_actionGroup10();
}
	}, 1);
}







};
obj3508_droppedInsideTargetActions_4_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3508_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj3508").trigger("obj3508_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3508) {
				console.warn("de-queueing event obj3508." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3508").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3508_droppedInsideTargetActions_4_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_3956();
function runjs_3956() {
	window.obj3508_droppedInsideTargetActions_4_runningActionsCount = obj3508_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj3508").css("border-color", "rgba(0,0,0,0)"); $("#obj3508").css("border-width", "0px"); $("#obj3508").css("border-style", "solid"); $("#obj3508").css("border-radius", "10px"); $("#obj3508").css("-webkit-border-radius", "10px"); $("#obj3508").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj3508_droppedInsideTargetActions_4_runningActionsCount = window.obj3508_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj3508_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj3508_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj3508_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj3508_droppedInsideTargetActions_4_actionGroup11();
}
	}, 1);
}







};
obj3508_droppedInsideTargetActions_4_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3508_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj3508").trigger("obj3508_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3508) {
				console.warn("de-queueing event obj3508." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3508").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3508_droppedInsideTargetActions_4_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj3875 
playAudio_3957();
function playAudio_3957() {
	window.obj3508_droppedInsideTargetActions_4_runningActionsCount = obj3508_droppedInsideTargetActions_4_runningActionsCount + 1;
	var myAudio = $("#obj3875")[0];
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
		    window.obj3508_droppedInsideTargetActions_4_runningActionsCount = window.obj3508_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj3508_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj3508_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj3508_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj3508_droppedInsideTargetActions_4_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj3508_droppedInsideTargetActions_4_runningActionsCount = window.obj3508_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj3508_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj3508_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj3508_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj3508_droppedInsideTargetActions_4_actionGroup12();
}
	}
}









};
obj3508_droppedInsideTargetActions_4_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3508_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj3508").trigger("obj3508_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3508) {
				console.warn("de-queueing event obj3508." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3508").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3508_droppedInsideTargetActions_4_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_3958();
function switchText_3958() {
	window.obj3508_droppedInsideTargetActions_4_runningActionsCount = obj3508_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj3866_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj3866_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj3866").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj3866_content");
			setTimeout(function () {
				window.obj3508_droppedInsideTargetActions_4_runningActionsCount = window.obj3508_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj3508_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj3508_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj3508_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj3508_droppedInsideTargetActions_4_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj3866 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj3508_droppedInsideTargetActions_4_runningActionsCount = window.obj3508_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj3508_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj3508_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj3508_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj3508_droppedInsideTargetActions_4_actionGroup13();
}
		}, 1);
	}
}






};
obj3508_droppedInsideTargetActions_4_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3508_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj3508").trigger("obj3508_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3508) {
				console.warn("de-queueing event obj3508." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3508").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3508_droppedInsideTargetActions_4_activeActionGroupIndex = 13;
	





















};
obj3508_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3508_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj3508").trigger("obj3508_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3508) {
				console.warn("de-queueing event obj3508." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3508").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3508_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_3932();
function runjs_3932() {
	window.obj3508_droppedInsideTargetActions_3_runningActionsCount = obj3508_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj3500").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj3508_droppedInsideTargetActions_3_runningActionsCount = window.obj3508_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj3508_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj3508_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj3508_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj3508_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj3508_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3508_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj3508").trigger("obj3508_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3508) {
				console.warn("de-queueing event obj3508." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3508").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3508_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_3933();
function runjs_3933() {
	window.obj3508_droppedInsideTargetActions_3_runningActionsCount = obj3508_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj3500").css("border-color", "#C00000"); $("#obj3500").css("border-width", "2px"); $("#obj3500").css("border-style", "solid"); $("#obj3500").css("border-radius", "10px"); $("#obj3500").css("-webkit-border-radius", "10px"); $("#obj3500").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj3508_droppedInsideTargetActions_3_runningActionsCount = window.obj3508_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj3508_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj3508_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj3508_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj3508_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj3508_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3508_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj3508").trigger("obj3508_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3508) {
				console.warn("de-queueing event obj3508." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3508").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3508_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj3710 
hide_3934();
function hide_3934() {
	var selector = "#obj3710";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj3508_droppedInsideTargetActions_3_runningActionsCount = obj3508_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj3508_droppedInsideTargetActions_3_runningActionsCount = window.obj3508_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj3508_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj3508_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj3508_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj3508_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_3934(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj3508_droppedInsideTargetActions_3_runningActionsCount = window.obj3508_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj3508_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj3508_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj3508_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj3508_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj3508_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3508_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj3508").trigger("obj3508_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3508) {
				console.warn("de-queueing event obj3508." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3508").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3508_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_3935();
function runjs_3935() {
	window.obj3508_droppedInsideTargetActions_3_runningActionsCount = obj3508_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj3508").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj3508_droppedInsideTargetActions_3_runningActionsCount = window.obj3508_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj3508_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj3508_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj3508_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj3508_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj3508_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3508_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj3508").trigger("obj3508_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3508) {
				console.warn("de-queueing event obj3508." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3508").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3508_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_3936();
function switchText_3936() {
	window.obj3508_droppedInsideTargetActions_3_runningActionsCount = obj3508_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj3866_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj3866_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj3866").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj3866_content");
			setTimeout(function () {
				window.obj3508_droppedInsideTargetActions_3_runningActionsCount = window.obj3508_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj3508_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj3508_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj3508_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj3508_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj3866 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj3508_droppedInsideTargetActions_3_runningActionsCount = window.obj3508_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj3508_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj3508_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj3508_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj3508_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj3508_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3508_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj3508").trigger("obj3508_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3508) {
				console.warn("de-queueing event obj3508." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3508").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3508_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj3508 
move_3937();
function move_3937() {
	window.obj3508_droppedInsideTargetActions_3_runningActionsCount = obj3508_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj3508");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 82;
	var moveY = 633;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj3508_droppedInsideTargetActions_3_runningActionsCount = window.obj3508_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj3508_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj3508_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj3508_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj3508_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj3508_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3508_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj3508").trigger("obj3508_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3508) {
				console.warn("de-queueing event obj3508." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3508").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3508_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_3938();
function runjs_3938() {
	window.obj3508_droppedInsideTargetActions_3_runningActionsCount = obj3508_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj3500").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj3508_droppedInsideTargetActions_3_runningActionsCount = window.obj3508_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj3508_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj3508_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj3508_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj3508_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj3508_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3508_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj3508").trigger("obj3508_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3508) {
				console.warn("de-queueing event obj3508." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3508").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3508_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_3939();
function runjs_3939() {
	window.obj3508_droppedInsideTargetActions_3_runningActionsCount = obj3508_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj3500").css("border-color", "#000000"); $("#obj3500").css("border-width", "1px"); $("#obj3500").css("border-style", "solid"); $("#obj3500").css("border-radius", "10px"); $("#obj3500").css("-webkit-border-radius", "10px"); $("#obj3500").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj3508_droppedInsideTargetActions_3_runningActionsCount = window.obj3508_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj3508_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj3508_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj3508_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj3508_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj3508_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3508_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj3508").trigger("obj3508_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3508) {
				console.warn("de-queueing event obj3508." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3508").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3508_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj3710
(function(){
	window.obj3508_droppedInsideTargetActions_3_runningActionsCount = obj3508_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj3710";
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
					window.obj3508_droppedInsideTargetActions_3_runningActionsCount = window.obj3508_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj3508_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj3508_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj3508_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj3508_droppedInsideTargetActions_3_actionGroup9();
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
				window.obj3508_droppedInsideTargetActions_3_runningActionsCount = window.obj3508_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj3508_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj3508_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj3508_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj3508_droppedInsideTargetActions_3_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj3508_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3508_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj3508").trigger("obj3508_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3508) {
				console.warn("de-queueing event obj3508." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3508").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3508_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_3941();
function runjs_3941() {
	window.obj3508_droppedInsideTargetActions_3_runningActionsCount = obj3508_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj3508").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj3508_droppedInsideTargetActions_3_runningActionsCount = window.obj3508_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj3508_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj3508_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj3508_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj3508_droppedInsideTargetActions_3_actionGroup10();
}
	}, 1);
}







};
obj3508_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3508_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj3508").trigger("obj3508_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3508) {
				console.warn("de-queueing event obj3508." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3508").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3508_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_3942();
function runjs_3942() {
	window.obj3508_droppedInsideTargetActions_3_runningActionsCount = obj3508_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj3508").css("border-color", "rgba(0,0,0,0)"); $("#obj3508").css("border-width", "0px"); $("#obj3508").css("border-style", "solid"); $("#obj3508").css("border-radius", "10px"); $("#obj3508").css("-webkit-border-radius", "10px"); $("#obj3508").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj3508_droppedInsideTargetActions_3_runningActionsCount = window.obj3508_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj3508_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj3508_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj3508_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj3508_droppedInsideTargetActions_3_actionGroup11();
}
	}, 1);
}







};
obj3508_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3508_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj3508").trigger("obj3508_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3508) {
				console.warn("de-queueing event obj3508." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3508").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3508_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj3875 
playAudio_3943();
function playAudio_3943() {
	window.obj3508_droppedInsideTargetActions_3_runningActionsCount = obj3508_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj3875")[0];
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
		    window.obj3508_droppedInsideTargetActions_3_runningActionsCount = window.obj3508_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj3508_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj3508_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj3508_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj3508_droppedInsideTargetActions_3_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj3508_droppedInsideTargetActions_3_runningActionsCount = window.obj3508_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj3508_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj3508_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj3508_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj3508_droppedInsideTargetActions_3_actionGroup12();
}
	}
}









};
obj3508_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3508_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj3508").trigger("obj3508_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3508) {
				console.warn("de-queueing event obj3508." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3508").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3508_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_3944();
function switchText_3944() {
	window.obj3508_droppedInsideTargetActions_3_runningActionsCount = obj3508_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj3866_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj3866_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj3866").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj3866_content");
			setTimeout(function () {
				window.obj3508_droppedInsideTargetActions_3_runningActionsCount = window.obj3508_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj3508_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj3508_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj3508_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj3508_droppedInsideTargetActions_3_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj3866 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj3508_droppedInsideTargetActions_3_runningActionsCount = window.obj3508_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj3508_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj3508_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj3508_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj3508_droppedInsideTargetActions_3_actionGroup13();
}
		}, 1);
	}
}






};
obj3508_droppedInsideTargetActions_3_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3508_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj3508").trigger("obj3508_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3508) {
				console.warn("de-queueing event obj3508." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3508").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3508_droppedInsideTargetActions_3_activeActionGroupIndex = 13;
	





















};
obj3508_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3508_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj3508").trigger("obj3508_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3508) {
				console.warn("de-queueing event obj3508." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3508").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3508_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_3914();
function runjs_3914() {
	window.obj3508_droppedInsideTargetActions_2_runningActionsCount = obj3508_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj3492").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj3508_droppedInsideTargetActions_2_runningActionsCount = window.obj3508_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj3508_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj3508_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj3508_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj3508_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj3508_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3508_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj3508").trigger("obj3508_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3508) {
				console.warn("de-queueing event obj3508." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3508").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3508_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_3915();
function runjs_3915() {
	window.obj3508_droppedInsideTargetActions_2_runningActionsCount = obj3508_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj3492").css("border-color", "#C00000"); $("#obj3492").css("border-width", "2px"); $("#obj3492").css("border-style", "solid"); $("#obj3492").css("border-radius", "10px"); $("#obj3492").css("-webkit-border-radius", "10px"); $("#obj3492").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj3508_droppedInsideTargetActions_2_runningActionsCount = window.obj3508_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj3508_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj3508_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj3508_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj3508_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj3508_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3508_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj3508").trigger("obj3508_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3508) {
				console.warn("de-queueing event obj3508." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3508").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3508_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj3714 
hide_3916();
function hide_3916() {
	var selector = "#obj3714";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj3508_droppedInsideTargetActions_2_runningActionsCount = obj3508_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj3508_droppedInsideTargetActions_2_runningActionsCount = window.obj3508_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj3508_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj3508_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj3508_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj3508_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_3916(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj3508_droppedInsideTargetActions_2_runningActionsCount = window.obj3508_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj3508_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj3508_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj3508_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj3508_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj3508_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3508_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj3508").trigger("obj3508_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3508) {
				console.warn("de-queueing event obj3508." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3508").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3508_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_3917();
function runjs_3917() {
	window.obj3508_droppedInsideTargetActions_2_runningActionsCount = obj3508_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj3508").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj3508_droppedInsideTargetActions_2_runningActionsCount = window.obj3508_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj3508_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj3508_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj3508_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj3508_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj3508_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3508_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj3508").trigger("obj3508_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3508) {
				console.warn("de-queueing event obj3508." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3508").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3508_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_3918();
function switchText_3918() {
	window.obj3508_droppedInsideTargetActions_2_runningActionsCount = obj3508_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj3866_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj3866_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj3866").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj3866_content");
			setTimeout(function () {
				window.obj3508_droppedInsideTargetActions_2_runningActionsCount = window.obj3508_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj3508_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj3508_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj3508_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj3508_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj3866 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj3508_droppedInsideTargetActions_2_runningActionsCount = window.obj3508_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj3508_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj3508_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj3508_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj3508_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj3508_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3508_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj3508").trigger("obj3508_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3508) {
				console.warn("de-queueing event obj3508." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3508").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3508_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj3508 
move_3919();
function move_3919() {
	window.obj3508_droppedInsideTargetActions_2_runningActionsCount = obj3508_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj3508");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 82;
	var moveY = 633;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj3508_droppedInsideTargetActions_2_runningActionsCount = window.obj3508_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj3508_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj3508_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj3508_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj3508_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj3508_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3508_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj3508").trigger("obj3508_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3508) {
				console.warn("de-queueing event obj3508." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3508").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3508_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_3920();
function runjs_3920() {
	window.obj3508_droppedInsideTargetActions_2_runningActionsCount = obj3508_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj3492").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj3508_droppedInsideTargetActions_2_runningActionsCount = window.obj3508_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj3508_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj3508_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj3508_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj3508_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj3508_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3508_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj3508").trigger("obj3508_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3508) {
				console.warn("de-queueing event obj3508." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3508").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3508_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_3921();
function runjs_3921() {
	window.obj3508_droppedInsideTargetActions_2_runningActionsCount = obj3508_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj3492").css("border-color", "#000000"); $("#obj3492").css("border-width", "1px"); $("#obj3492").css("border-style", "solid"); $("#obj3492").css("border-radius", "10px"); $("#obj3492").css("-webkit-border-radius", "10px"); $("#obj3492").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj3508_droppedInsideTargetActions_2_runningActionsCount = window.obj3508_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj3508_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj3508_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj3508_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj3508_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj3508_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3508_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj3508").trigger("obj3508_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3508) {
				console.warn("de-queueing event obj3508." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3508").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3508_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj3714
(function(){
	window.obj3508_droppedInsideTargetActions_2_runningActionsCount = obj3508_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj3714";
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
					window.obj3508_droppedInsideTargetActions_2_runningActionsCount = window.obj3508_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj3508_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj3508_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj3508_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj3508_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj3508_droppedInsideTargetActions_2_runningActionsCount = window.obj3508_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj3508_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj3508_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj3508_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj3508_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj3508_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3508_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj3508").trigger("obj3508_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3508) {
				console.warn("de-queueing event obj3508." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3508").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3508_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_3923();
function runjs_3923() {
	window.obj3508_droppedInsideTargetActions_2_runningActionsCount = obj3508_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj3508").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj3508_droppedInsideTargetActions_2_runningActionsCount = window.obj3508_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj3508_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj3508_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj3508_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj3508_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj3508_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3508_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj3508").trigger("obj3508_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3508) {
				console.warn("de-queueing event obj3508." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3508").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3508_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_3924();
function runjs_3924() {
	window.obj3508_droppedInsideTargetActions_2_runningActionsCount = obj3508_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj3508").css("border-color", "rgba(0,0,0,0)"); $("#obj3508").css("border-width", "0px"); $("#obj3508").css("border-style", "solid"); $("#obj3508").css("border-radius", "10px"); $("#obj3508").css("-webkit-border-radius", "10px"); $("#obj3508").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj3508_droppedInsideTargetActions_2_runningActionsCount = window.obj3508_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj3508_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj3508_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj3508_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj3508_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj3508_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3508_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj3508").trigger("obj3508_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3508) {
				console.warn("de-queueing event obj3508." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3508").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3508_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj3875 
playAudio_3925();
function playAudio_3925() {
	window.obj3508_droppedInsideTargetActions_2_runningActionsCount = obj3508_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj3875")[0];
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
		    window.obj3508_droppedInsideTargetActions_2_runningActionsCount = window.obj3508_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj3508_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj3508_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj3508_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj3508_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj3508_droppedInsideTargetActions_2_runningActionsCount = window.obj3508_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj3508_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj3508_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj3508_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj3508_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj3508_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3508_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj3508").trigger("obj3508_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3508) {
				console.warn("de-queueing event obj3508." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3508").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3508_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_3926();
function switchText_3926() {
	window.obj3508_droppedInsideTargetActions_2_runningActionsCount = obj3508_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj3866_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj3866_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj3866").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj3866_content");
			setTimeout(function () {
				window.obj3508_droppedInsideTargetActions_2_runningActionsCount = window.obj3508_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj3508_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj3508_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj3508_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj3508_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj3866 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj3508_droppedInsideTargetActions_2_runningActionsCount = window.obj3508_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj3508_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj3508_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj3508_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj3508_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj3508_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3508_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj3508").trigger("obj3508_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3508) {
				console.warn("de-queueing event obj3508." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3508").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3508_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj3508_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3508_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj3508").trigger("obj3508_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3508) {
				console.warn("de-queueing event obj3508." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3508").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3508_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_3889();
function runjs_3889() {
	window.obj3508_droppedInsideTargetActions_runningActionsCount = obj3508_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj3496").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj3508_droppedInsideTargetActions_runningActionsCount = window.obj3508_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj3508_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj3508_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj3508_droppedInsideTargetActions_runningActionsCount == 0) {
	obj3508_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj3508_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3508_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj3508").trigger("obj3508_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3508) {
				console.warn("de-queueing event obj3508." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3508").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3508_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_3893();
function switchText_3893() {
	window.obj3508_droppedInsideTargetActions_runningActionsCount = obj3508_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj3866_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj3866_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj3866").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj3866_content");
			setTimeout(function () {
				window.obj3508_droppedInsideTargetActions_runningActionsCount = window.obj3508_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj3508_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj3508_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj3508_droppedInsideTargetActions_runningActionsCount == 0) {
	obj3508_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj3866 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj3508_droppedInsideTargetActions_runningActionsCount = window.obj3508_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj3508_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj3508_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj3508_droppedInsideTargetActions_runningActionsCount == 0) {
	obj3508_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj3508_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3508_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj3508").trigger("obj3508_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3508) {
				console.warn("de-queueing event obj3508." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3508").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3508_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_3890();
function runjs_3890() {
	window.obj3508_droppedInsideTargetActions_runningActionsCount = obj3508_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj3496").css("border-color", "#058E3F"); $("#obj3496").css("border-width", "2px"); $("#obj3496").css("border-style", "solid"); $("#obj3496").css("border-radius", "10px"); $("#obj3496").css("-webkit-border-radius", "10px"); $("#obj3496").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj3508_droppedInsideTargetActions_runningActionsCount = window.obj3508_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj3508_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj3508_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj3508_droppedInsideTargetActions_runningActionsCount == 0) {
	obj3508_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj3508_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3508_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj3508").trigger("obj3508_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3508) {
				console.warn("de-queueing event obj3508." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3508").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3508_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj3712 
hide_3891();
function hide_3891() {
	var selector = "#obj3712";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj3508_droppedInsideTargetActions_runningActionsCount = obj3508_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj3508_droppedInsideTargetActions_runningActionsCount = window.obj3508_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj3508_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj3508_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj3508_droppedInsideTargetActions_runningActionsCount == 0) {
	obj3508_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_3891(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj3508_droppedInsideTargetActions_runningActionsCount = window.obj3508_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj3508_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj3508_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj3508_droppedInsideTargetActions_runningActionsCount == 0) {
	obj3508_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj3508_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3508_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj3508").trigger("obj3508_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3508) {
				console.warn("de-queueing event obj3508." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3508").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3508_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_3892();
function runjs_3892() {
	window.obj3508_droppedInsideTargetActions_runningActionsCount = obj3508_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj3508").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj3508_droppedInsideTargetActions_runningActionsCount = window.obj3508_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj3508_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj3508_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj3508_droppedInsideTargetActions_runningActionsCount == 0) {
	obj3508_droppedInsideTargetActions_actionGroup5();
}
	}, 1);
}







};
obj3508_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3508_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj3508").trigger("obj3508_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3508) {
				console.warn("de-queueing event obj3508." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3508").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3508_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj3876 
playAudio_3894();
function playAudio_3894() {
	window.obj3508_droppedInsideTargetActions_runningActionsCount = obj3508_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj3876")[0];
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
		    window.obj3508_droppedInsideTargetActions_runningActionsCount = window.obj3508_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj3508_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj3508_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj3508_droppedInsideTargetActions_runningActionsCount == 0) {
	obj3508_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj3508_droppedInsideTargetActions_runningActionsCount = window.obj3508_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj3508_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj3508_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj3508_droppedInsideTargetActions_runningActionsCount == 0) {
	obj3508_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj3508_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3508_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj3508").trigger("obj3508_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3508) {
				console.warn("de-queueing event obj3508." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3508").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3508_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90103();
function switchText_90103() {
	window.obj3508_droppedInsideTargetActions_runningActionsCount = obj3508_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj3866_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj3866_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj3866").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj3866_content");
			setTimeout(function () {
				window.obj3508_droppedInsideTargetActions_runningActionsCount = window.obj3508_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj3508_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj3508_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj3508_droppedInsideTargetActions_runningActionsCount == 0) {
	obj3508_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj3866 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj3508_droppedInsideTargetActions_runningActionsCount = window.obj3508_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj3508_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj3508_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj3508_droppedInsideTargetActions_runningActionsCount == 0) {
	obj3508_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj3508_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3508_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj3508").trigger("obj3508_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3508) {
				console.warn("de-queueing event obj3508." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3508").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3508_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj3716_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3716_onTouchDown_activeActionGroupIndex = -1;
		$("#obj3716").trigger("obj3716_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3716) {
				console.warn("de-queueing event obj3716." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3716").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3716_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj3716");
//	action: dragDrop
//	target: obj3716 
dragDrop_3719();
function dragDrop_3719() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj3716_onTouchDown_runningActionsCount = obj3716_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj3716');
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
	  	containerNode = $('#obj3488');
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
    	window.obj3716_onTouchDown_runningActionsCount = window.obj3716_onTouchDown_runningActionsCount - 1;
if (window.obj3716_onTouchDown_runningActionsCount < 0) {
	window.obj3716_onTouchDown_runningActionsCount = 0;
} else if (window.obj3716_onTouchDown_runningActionsCount == 0) {
	obj3716_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj3492","#obj3496","#obj3500","#obj3504");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3","droppedInsideTargetActions_4") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_3719 = false;
    	var dropped_id_3719;
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
					dropped_3719 = true;
					dropped_id_3719 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_3719) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj3716").trigger('SCActionDragDrop3719_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj3716_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3716_onTouchDown_activeActionGroupIndex = -1;
		$("#obj3716").trigger("obj3716_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3716) {
				console.warn("de-queueing event obj3716." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3716").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3716_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj3716_SCActionDragDrop3719_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3716_SCActionDragDrop3719_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj3716").trigger("obj3716_SCActionDragDrop3719_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3716) {
				console.warn("de-queueing event obj3716." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3716").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3716_SCActionDragDrop3719_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj3716 
move_92150();
function move_92150() {
	window.obj3716_SCActionDragDrop3719_droppedOutsideTargetActions_runningActionsCount = obj3716_SCActionDragDrop3719_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj3716");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 197;
	var moveY = 633;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj3716_SCActionDragDrop3719_droppedOutsideTargetActions_runningActionsCount = window.obj3716_SCActionDragDrop3719_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj3716_SCActionDragDrop3719_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj3716_SCActionDragDrop3719_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj3716_SCActionDragDrop3719_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj3716_SCActionDragDrop3719_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj3716_SCActionDragDrop3719_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3716_SCActionDragDrop3719_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj3716").trigger("obj3716_SCActionDragDrop3719_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3716) {
				console.warn("de-queueing event obj3716." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3716").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3716_SCActionDragDrop3719_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj3716_droppedInsideTargetActions_4_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3716_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj3716").trigger("obj3716_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3716) {
				console.warn("de-queueing event obj3716." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3716").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3716_droppedInsideTargetActions_4_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_3988();
function runjs_3988() {
	window.obj3716_droppedInsideTargetActions_4_runningActionsCount = obj3716_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj3504").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj3716_droppedInsideTargetActions_4_runningActionsCount = window.obj3716_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj3716_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj3716_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj3716_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj3716_droppedInsideTargetActions_4_actionGroup1();
}
	}, 1);
}







};
obj3716_droppedInsideTargetActions_4_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3716_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj3716").trigger("obj3716_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3716) {
				console.warn("de-queueing event obj3716." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3716").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3716_droppedInsideTargetActions_4_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_3989();
function runjs_3989() {
	window.obj3716_droppedInsideTargetActions_4_runningActionsCount = obj3716_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj3504").css("border-color", "#C00000"); $("#obj3504").css("border-width", "2px"); $("#obj3504").css("border-style", "solid"); $("#obj3504").css("border-radius", "10px"); $("#obj3504").css("-webkit-border-radius", "10px"); $("#obj3504").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj3716_droppedInsideTargetActions_4_runningActionsCount = window.obj3716_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj3716_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj3716_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj3716_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj3716_droppedInsideTargetActions_4_actionGroup2();
}
	}, 1);
}







};
obj3716_droppedInsideTargetActions_4_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3716_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj3716").trigger("obj3716_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3716) {
				console.warn("de-queueing event obj3716." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3716").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3716_droppedInsideTargetActions_4_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj3708 
hide_3990();
function hide_3990() {
	var selector = "#obj3708";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj3716_droppedInsideTargetActions_4_runningActionsCount = obj3716_droppedInsideTargetActions_4_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj3716_droppedInsideTargetActions_4_runningActionsCount = window.obj3716_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj3716_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj3716_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj3716_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj3716_droppedInsideTargetActions_4_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_3990(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj3716_droppedInsideTargetActions_4_runningActionsCount = window.obj3716_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj3716_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj3716_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj3716_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj3716_droppedInsideTargetActions_4_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj3716_droppedInsideTargetActions_4_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3716_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj3716").trigger("obj3716_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3716) {
				console.warn("de-queueing event obj3716." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3716").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3716_droppedInsideTargetActions_4_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_3991();
function runjs_3991() {
	window.obj3716_droppedInsideTargetActions_4_runningActionsCount = obj3716_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj3716").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj3716_droppedInsideTargetActions_4_runningActionsCount = window.obj3716_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj3716_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj3716_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj3716_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj3716_droppedInsideTargetActions_4_actionGroup4();
}
	}, 1);
}







};
obj3716_droppedInsideTargetActions_4_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3716_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj3716").trigger("obj3716_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3716) {
				console.warn("de-queueing event obj3716." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3716").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3716_droppedInsideTargetActions_4_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_3992();
function switchText_3992() {
	window.obj3716_droppedInsideTargetActions_4_runningActionsCount = obj3716_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj3866_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj3866_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj3866").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj3866_content");
			setTimeout(function () {
				window.obj3716_droppedInsideTargetActions_4_runningActionsCount = window.obj3716_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj3716_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj3716_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj3716_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj3716_droppedInsideTargetActions_4_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj3866 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj3716_droppedInsideTargetActions_4_runningActionsCount = window.obj3716_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj3716_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj3716_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj3716_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj3716_droppedInsideTargetActions_4_actionGroup5();
}
		}, 1);
	}
}






};
obj3716_droppedInsideTargetActions_4_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3716_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj3716").trigger("obj3716_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3716) {
				console.warn("de-queueing event obj3716." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3716").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3716_droppedInsideTargetActions_4_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj3716 
move_3993();
function move_3993() {
	window.obj3716_droppedInsideTargetActions_4_runningActionsCount = obj3716_droppedInsideTargetActions_4_runningActionsCount + 1;

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
	var targetObject = $("#obj3716");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 197;
	var moveY = 633;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj3716_droppedInsideTargetActions_4_runningActionsCount = window.obj3716_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj3716_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj3716_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj3716_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj3716_droppedInsideTargetActions_4_actionGroup6();
}
		}, 1);
	});
}



















};
obj3716_droppedInsideTargetActions_4_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3716_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj3716").trigger("obj3716_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3716) {
				console.warn("de-queueing event obj3716." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3716").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3716_droppedInsideTargetActions_4_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_3994();
function runjs_3994() {
	window.obj3716_droppedInsideTargetActions_4_runningActionsCount = obj3716_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj3504").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj3716_droppedInsideTargetActions_4_runningActionsCount = window.obj3716_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj3716_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj3716_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj3716_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj3716_droppedInsideTargetActions_4_actionGroup7();
}
	}, 1);
}







};
obj3716_droppedInsideTargetActions_4_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3716_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj3716").trigger("obj3716_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3716) {
				console.warn("de-queueing event obj3716." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3716").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3716_droppedInsideTargetActions_4_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_3995();
function runjs_3995() {
	window.obj3716_droppedInsideTargetActions_4_runningActionsCount = obj3716_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj3504").css("border-color", "#000000"); $("#obj3504").css("border-width", "1px"); $("#obj3504").css("border-style", "solid"); $("#obj3504").css("border-radius", "10px"); $("#obj3504").css("-webkit-border-radius", "10px"); $("#obj3504").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj3716_droppedInsideTargetActions_4_runningActionsCount = window.obj3716_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj3716_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj3716_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj3716_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj3716_droppedInsideTargetActions_4_actionGroup8();
}
	}, 1);
}







};
obj3716_droppedInsideTargetActions_4_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3716_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj3716").trigger("obj3716_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3716) {
				console.warn("de-queueing event obj3716." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3716").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3716_droppedInsideTargetActions_4_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj3708
(function(){
	window.obj3716_droppedInsideTargetActions_4_runningActionsCount = obj3716_droppedInsideTargetActions_4_runningActionsCount + 1;

	var selector = "#obj3708";
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
					window.obj3716_droppedInsideTargetActions_4_runningActionsCount = window.obj3716_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj3716_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj3716_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj3716_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj3716_droppedInsideTargetActions_4_actionGroup9();
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
				window.obj3716_droppedInsideTargetActions_4_runningActionsCount = window.obj3716_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj3716_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj3716_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj3716_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj3716_droppedInsideTargetActions_4_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj3716_droppedInsideTargetActions_4_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3716_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj3716").trigger("obj3716_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3716) {
				console.warn("de-queueing event obj3716." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3716").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3716_droppedInsideTargetActions_4_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_3997();
function runjs_3997() {
	window.obj3716_droppedInsideTargetActions_4_runningActionsCount = obj3716_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj3716").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj3716_droppedInsideTargetActions_4_runningActionsCount = window.obj3716_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj3716_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj3716_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj3716_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj3716_droppedInsideTargetActions_4_actionGroup10();
}
	}, 1);
}







};
obj3716_droppedInsideTargetActions_4_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3716_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj3716").trigger("obj3716_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3716) {
				console.warn("de-queueing event obj3716." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3716").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3716_droppedInsideTargetActions_4_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_3998();
function runjs_3998() {
	window.obj3716_droppedInsideTargetActions_4_runningActionsCount = obj3716_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj3716").css("border-color", "rgba(0,0,0,0)"); $("#obj3716").css("border-width", "0px"); $("#obj3716").css("border-style", "solid"); $("#obj3716").css("border-radius", "10px"); $("#obj3716").css("-webkit-border-radius", "10px"); $("#obj3716").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj3716_droppedInsideTargetActions_4_runningActionsCount = window.obj3716_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj3716_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj3716_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj3716_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj3716_droppedInsideTargetActions_4_actionGroup11();
}
	}, 1);
}







};
obj3716_droppedInsideTargetActions_4_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3716_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj3716").trigger("obj3716_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3716) {
				console.warn("de-queueing event obj3716." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3716").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3716_droppedInsideTargetActions_4_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj3875 
playAudio_3999();
function playAudio_3999() {
	window.obj3716_droppedInsideTargetActions_4_runningActionsCount = obj3716_droppedInsideTargetActions_4_runningActionsCount + 1;
	var myAudio = $("#obj3875")[0];
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
		    window.obj3716_droppedInsideTargetActions_4_runningActionsCount = window.obj3716_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj3716_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj3716_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj3716_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj3716_droppedInsideTargetActions_4_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj3716_droppedInsideTargetActions_4_runningActionsCount = window.obj3716_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj3716_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj3716_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj3716_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj3716_droppedInsideTargetActions_4_actionGroup12();
}
	}
}









};
obj3716_droppedInsideTargetActions_4_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3716_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj3716").trigger("obj3716_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3716) {
				console.warn("de-queueing event obj3716." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3716").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3716_droppedInsideTargetActions_4_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_4000();
function switchText_4000() {
	window.obj3716_droppedInsideTargetActions_4_runningActionsCount = obj3716_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj3866_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj3866_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj3866").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj3866_content");
			setTimeout(function () {
				window.obj3716_droppedInsideTargetActions_4_runningActionsCount = window.obj3716_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj3716_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj3716_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj3716_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj3716_droppedInsideTargetActions_4_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj3866 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj3716_droppedInsideTargetActions_4_runningActionsCount = window.obj3716_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj3716_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj3716_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj3716_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj3716_droppedInsideTargetActions_4_actionGroup13();
}
		}, 1);
	}
}






};
obj3716_droppedInsideTargetActions_4_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3716_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj3716").trigger("obj3716_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3716) {
				console.warn("de-queueing event obj3716." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3716").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3716_droppedInsideTargetActions_4_activeActionGroupIndex = 13;
	





















};
obj3716_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3716_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj3716").trigger("obj3716_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3716) {
				console.warn("de-queueing event obj3716." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3716").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3716_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_3974();
function runjs_3974() {
	window.obj3716_droppedInsideTargetActions_3_runningActionsCount = obj3716_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj3500").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj3716_droppedInsideTargetActions_3_runningActionsCount = window.obj3716_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj3716_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj3716_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj3716_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj3716_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj3716_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3716_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj3716").trigger("obj3716_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3716) {
				console.warn("de-queueing event obj3716." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3716").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3716_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_3975();
function runjs_3975() {
	window.obj3716_droppedInsideTargetActions_3_runningActionsCount = obj3716_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj3500").css("border-color", "#C00000"); $("#obj3500").css("border-width", "2px"); $("#obj3500").css("border-style", "solid"); $("#obj3500").css("border-radius", "10px"); $("#obj3500").css("-webkit-border-radius", "10px"); $("#obj3500").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj3716_droppedInsideTargetActions_3_runningActionsCount = window.obj3716_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj3716_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj3716_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj3716_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj3716_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj3716_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3716_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj3716").trigger("obj3716_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3716) {
				console.warn("de-queueing event obj3716." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3716").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3716_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj3710 
hide_3976();
function hide_3976() {
	var selector = "#obj3710";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj3716_droppedInsideTargetActions_3_runningActionsCount = obj3716_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj3716_droppedInsideTargetActions_3_runningActionsCount = window.obj3716_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj3716_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj3716_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj3716_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj3716_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_3976(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj3716_droppedInsideTargetActions_3_runningActionsCount = window.obj3716_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj3716_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj3716_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj3716_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj3716_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj3716_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3716_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj3716").trigger("obj3716_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3716) {
				console.warn("de-queueing event obj3716." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3716").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3716_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_3977();
function runjs_3977() {
	window.obj3716_droppedInsideTargetActions_3_runningActionsCount = obj3716_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj3716").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj3716_droppedInsideTargetActions_3_runningActionsCount = window.obj3716_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj3716_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj3716_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj3716_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj3716_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj3716_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3716_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj3716").trigger("obj3716_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3716) {
				console.warn("de-queueing event obj3716." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3716").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3716_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_3978();
function switchText_3978() {
	window.obj3716_droppedInsideTargetActions_3_runningActionsCount = obj3716_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj3866_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj3866_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj3866").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj3866_content");
			setTimeout(function () {
				window.obj3716_droppedInsideTargetActions_3_runningActionsCount = window.obj3716_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj3716_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj3716_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj3716_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj3716_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj3866 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj3716_droppedInsideTargetActions_3_runningActionsCount = window.obj3716_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj3716_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj3716_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj3716_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj3716_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj3716_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3716_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj3716").trigger("obj3716_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3716) {
				console.warn("de-queueing event obj3716." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3716").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3716_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj3716 
move_3979();
function move_3979() {
	window.obj3716_droppedInsideTargetActions_3_runningActionsCount = obj3716_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj3716");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 197;
	var moveY = 633;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj3716_droppedInsideTargetActions_3_runningActionsCount = window.obj3716_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj3716_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj3716_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj3716_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj3716_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj3716_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3716_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj3716").trigger("obj3716_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3716) {
				console.warn("de-queueing event obj3716." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3716").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3716_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_3980();
function runjs_3980() {
	window.obj3716_droppedInsideTargetActions_3_runningActionsCount = obj3716_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj3500").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj3716_droppedInsideTargetActions_3_runningActionsCount = window.obj3716_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj3716_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj3716_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj3716_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj3716_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj3716_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3716_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj3716").trigger("obj3716_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3716) {
				console.warn("de-queueing event obj3716." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3716").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3716_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_3981();
function runjs_3981() {
	window.obj3716_droppedInsideTargetActions_3_runningActionsCount = obj3716_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj3500").css("border-color", "#000000"); $("#obj3500").css("border-width", "1px"); $("#obj3500").css("border-style", "solid"); $("#obj3500").css("border-radius", "10px"); $("#obj3500").css("-webkit-border-radius", "10px"); $("#obj3500").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj3716_droppedInsideTargetActions_3_runningActionsCount = window.obj3716_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj3716_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj3716_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj3716_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj3716_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj3716_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3716_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj3716").trigger("obj3716_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3716) {
				console.warn("de-queueing event obj3716." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3716").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3716_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj3710
(function(){
	window.obj3716_droppedInsideTargetActions_3_runningActionsCount = obj3716_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj3710";
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
					window.obj3716_droppedInsideTargetActions_3_runningActionsCount = window.obj3716_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj3716_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj3716_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj3716_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj3716_droppedInsideTargetActions_3_actionGroup9();
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
				window.obj3716_droppedInsideTargetActions_3_runningActionsCount = window.obj3716_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj3716_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj3716_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj3716_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj3716_droppedInsideTargetActions_3_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj3716_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3716_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj3716").trigger("obj3716_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3716) {
				console.warn("de-queueing event obj3716." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3716").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3716_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_3983();
function runjs_3983() {
	window.obj3716_droppedInsideTargetActions_3_runningActionsCount = obj3716_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj3716").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj3716_droppedInsideTargetActions_3_runningActionsCount = window.obj3716_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj3716_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj3716_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj3716_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj3716_droppedInsideTargetActions_3_actionGroup10();
}
	}, 1);
}







};
obj3716_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3716_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj3716").trigger("obj3716_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3716) {
				console.warn("de-queueing event obj3716." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3716").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3716_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_3984();
function runjs_3984() {
	window.obj3716_droppedInsideTargetActions_3_runningActionsCount = obj3716_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj3716").css("border-color", "rgba(0,0,0,0)"); $("#obj3716").css("border-width", "0px"); $("#obj3716").css("border-style", "solid"); $("#obj3716").css("border-radius", "10px"); $("#obj3716").css("-webkit-border-radius", "10px"); $("#obj3716").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj3716_droppedInsideTargetActions_3_runningActionsCount = window.obj3716_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj3716_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj3716_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj3716_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj3716_droppedInsideTargetActions_3_actionGroup11();
}
	}, 1);
}







};
obj3716_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3716_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj3716").trigger("obj3716_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3716) {
				console.warn("de-queueing event obj3716." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3716").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3716_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj3875 
playAudio_3985();
function playAudio_3985() {
	window.obj3716_droppedInsideTargetActions_3_runningActionsCount = obj3716_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj3875")[0];
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
		    window.obj3716_droppedInsideTargetActions_3_runningActionsCount = window.obj3716_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj3716_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj3716_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj3716_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj3716_droppedInsideTargetActions_3_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj3716_droppedInsideTargetActions_3_runningActionsCount = window.obj3716_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj3716_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj3716_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj3716_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj3716_droppedInsideTargetActions_3_actionGroup12();
}
	}
}









};
obj3716_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3716_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj3716").trigger("obj3716_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3716) {
				console.warn("de-queueing event obj3716." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3716").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3716_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_3986();
function switchText_3986() {
	window.obj3716_droppedInsideTargetActions_3_runningActionsCount = obj3716_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj3866_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj3866_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj3866").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj3866_content");
			setTimeout(function () {
				window.obj3716_droppedInsideTargetActions_3_runningActionsCount = window.obj3716_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj3716_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj3716_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj3716_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj3716_droppedInsideTargetActions_3_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj3866 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj3716_droppedInsideTargetActions_3_runningActionsCount = window.obj3716_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj3716_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj3716_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj3716_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj3716_droppedInsideTargetActions_3_actionGroup13();
}
		}, 1);
	}
}






};
obj3716_droppedInsideTargetActions_3_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3716_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj3716").trigger("obj3716_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3716) {
				console.warn("de-queueing event obj3716." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3716").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3716_droppedInsideTargetActions_3_activeActionGroupIndex = 13;
	





















};
obj3716_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3716_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj3716").trigger("obj3716_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3716) {
				console.warn("de-queueing event obj3716." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3716").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3716_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_3960();
function runjs_3960() {
	window.obj3716_droppedInsideTargetActions_2_runningActionsCount = obj3716_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj3496").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj3716_droppedInsideTargetActions_2_runningActionsCount = window.obj3716_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj3716_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj3716_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj3716_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj3716_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj3716_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3716_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj3716").trigger("obj3716_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3716) {
				console.warn("de-queueing event obj3716." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3716").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3716_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_3961();
function runjs_3961() {
	window.obj3716_droppedInsideTargetActions_2_runningActionsCount = obj3716_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj3496").css("border-color", "#C00000"); $("#obj3496").css("border-width", "2px"); $("#obj3496").css("border-style", "solid"); $("#obj3496").css("border-radius", "10px"); $("#obj3496").css("-webkit-border-radius", "10px"); $("#obj3496").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj3716_droppedInsideTargetActions_2_runningActionsCount = window.obj3716_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj3716_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj3716_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj3716_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj3716_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj3716_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3716_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj3716").trigger("obj3716_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3716) {
				console.warn("de-queueing event obj3716." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3716").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3716_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj3712 
hide_3962();
function hide_3962() {
	var selector = "#obj3712";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj3716_droppedInsideTargetActions_2_runningActionsCount = obj3716_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj3716_droppedInsideTargetActions_2_runningActionsCount = window.obj3716_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj3716_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj3716_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj3716_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj3716_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_3962(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj3716_droppedInsideTargetActions_2_runningActionsCount = window.obj3716_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj3716_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj3716_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj3716_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj3716_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj3716_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3716_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj3716").trigger("obj3716_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3716) {
				console.warn("de-queueing event obj3716." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3716").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3716_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_3963();
function runjs_3963() {
	window.obj3716_droppedInsideTargetActions_2_runningActionsCount = obj3716_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj3716").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj3716_droppedInsideTargetActions_2_runningActionsCount = window.obj3716_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj3716_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj3716_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj3716_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj3716_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj3716_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3716_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj3716").trigger("obj3716_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3716) {
				console.warn("de-queueing event obj3716." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3716").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3716_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_3964();
function switchText_3964() {
	window.obj3716_droppedInsideTargetActions_2_runningActionsCount = obj3716_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj3866_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj3866_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj3866").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj3866_content");
			setTimeout(function () {
				window.obj3716_droppedInsideTargetActions_2_runningActionsCount = window.obj3716_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj3716_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj3716_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj3716_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj3716_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj3866 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj3716_droppedInsideTargetActions_2_runningActionsCount = window.obj3716_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj3716_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj3716_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj3716_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj3716_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj3716_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3716_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj3716").trigger("obj3716_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3716) {
				console.warn("de-queueing event obj3716." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3716").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3716_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj3716 
move_3965();
function move_3965() {
	window.obj3716_droppedInsideTargetActions_2_runningActionsCount = obj3716_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj3716");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 197;
	var moveY = 633;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj3716_droppedInsideTargetActions_2_runningActionsCount = window.obj3716_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj3716_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj3716_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj3716_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj3716_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj3716_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3716_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj3716").trigger("obj3716_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3716) {
				console.warn("de-queueing event obj3716." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3716").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3716_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_3966();
function runjs_3966() {
	window.obj3716_droppedInsideTargetActions_2_runningActionsCount = obj3716_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj3496").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj3716_droppedInsideTargetActions_2_runningActionsCount = window.obj3716_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj3716_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj3716_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj3716_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj3716_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj3716_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3716_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj3716").trigger("obj3716_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3716) {
				console.warn("de-queueing event obj3716." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3716").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3716_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_3967();
function runjs_3967() {
	window.obj3716_droppedInsideTargetActions_2_runningActionsCount = obj3716_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj3496").css("border-color", "#000000"); $("#obj3496").css("border-width", "1px"); $("#obj3496").css("border-style", "solid"); $("#obj3496").css("border-radius", "10px"); $("#obj3496").css("-webkit-border-radius", "10px"); $("#obj3496").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj3716_droppedInsideTargetActions_2_runningActionsCount = window.obj3716_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj3716_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj3716_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj3716_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj3716_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj3716_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3716_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj3716").trigger("obj3716_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3716) {
				console.warn("de-queueing event obj3716." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3716").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3716_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj3712
(function(){
	window.obj3716_droppedInsideTargetActions_2_runningActionsCount = obj3716_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj3712";
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
					window.obj3716_droppedInsideTargetActions_2_runningActionsCount = window.obj3716_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj3716_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj3716_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj3716_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj3716_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj3716_droppedInsideTargetActions_2_runningActionsCount = window.obj3716_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj3716_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj3716_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj3716_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj3716_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj3716_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3716_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj3716").trigger("obj3716_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3716) {
				console.warn("de-queueing event obj3716." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3716").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3716_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_3969();
function runjs_3969() {
	window.obj3716_droppedInsideTargetActions_2_runningActionsCount = obj3716_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj3716").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj3716_droppedInsideTargetActions_2_runningActionsCount = window.obj3716_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj3716_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj3716_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj3716_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj3716_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj3716_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3716_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj3716").trigger("obj3716_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3716) {
				console.warn("de-queueing event obj3716." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3716").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3716_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_3970();
function runjs_3970() {
	window.obj3716_droppedInsideTargetActions_2_runningActionsCount = obj3716_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj3716").css("border-color", "rgba(0,0,0,0)"); $("#obj3716").css("border-width", "0px"); $("#obj3716").css("border-style", "solid"); $("#obj3716").css("border-radius", "10px"); $("#obj3716").css("-webkit-border-radius", "10px"); $("#obj3716").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj3716_droppedInsideTargetActions_2_runningActionsCount = window.obj3716_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj3716_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj3716_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj3716_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj3716_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj3716_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3716_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj3716").trigger("obj3716_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3716) {
				console.warn("de-queueing event obj3716." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3716").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3716_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj3875 
playAudio_3971();
function playAudio_3971() {
	window.obj3716_droppedInsideTargetActions_2_runningActionsCount = obj3716_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj3875")[0];
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
		    window.obj3716_droppedInsideTargetActions_2_runningActionsCount = window.obj3716_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj3716_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj3716_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj3716_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj3716_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj3716_droppedInsideTargetActions_2_runningActionsCount = window.obj3716_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj3716_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj3716_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj3716_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj3716_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj3716_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3716_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj3716").trigger("obj3716_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3716) {
				console.warn("de-queueing event obj3716." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3716").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3716_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_3972();
function switchText_3972() {
	window.obj3716_droppedInsideTargetActions_2_runningActionsCount = obj3716_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj3866_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj3866_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj3866").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj3866_content");
			setTimeout(function () {
				window.obj3716_droppedInsideTargetActions_2_runningActionsCount = window.obj3716_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj3716_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj3716_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj3716_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj3716_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj3866 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj3716_droppedInsideTargetActions_2_runningActionsCount = window.obj3716_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj3716_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj3716_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj3716_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj3716_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj3716_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3716_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj3716").trigger("obj3716_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3716) {
				console.warn("de-queueing event obj3716." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3716").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3716_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj3716_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3716_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj3716").trigger("obj3716_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3716) {
				console.warn("de-queueing event obj3716." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3716").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3716_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_3882();
function runjs_3882() {
	window.obj3716_droppedInsideTargetActions_runningActionsCount = obj3716_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj3492").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj3716_droppedInsideTargetActions_runningActionsCount = window.obj3716_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj3716_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj3716_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj3716_droppedInsideTargetActions_runningActionsCount == 0) {
	obj3716_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj3716_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3716_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj3716").trigger("obj3716_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3716) {
				console.warn("de-queueing event obj3716." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3716").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3716_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_3886();
function switchText_3886() {
	window.obj3716_droppedInsideTargetActions_runningActionsCount = obj3716_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj3866_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj3866_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj3866").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj3866_content");
			setTimeout(function () {
				window.obj3716_droppedInsideTargetActions_runningActionsCount = window.obj3716_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj3716_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj3716_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj3716_droppedInsideTargetActions_runningActionsCount == 0) {
	obj3716_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj3866 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj3716_droppedInsideTargetActions_runningActionsCount = window.obj3716_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj3716_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj3716_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj3716_droppedInsideTargetActions_runningActionsCount == 0) {
	obj3716_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj3716_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3716_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj3716").trigger("obj3716_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3716) {
				console.warn("de-queueing event obj3716." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3716").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3716_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_3883();
function runjs_3883() {
	window.obj3716_droppedInsideTargetActions_runningActionsCount = obj3716_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj3492").css("border-color", "#058E3F"); $("#obj3492").css("border-width", "2px"); $("#obj3492").css("border-style", "solid"); $("#obj3492").css("border-radius", "10px"); $("#obj3492").css("-webkit-border-radius", "10px"); $("#obj3492").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj3716_droppedInsideTargetActions_runningActionsCount = window.obj3716_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj3716_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj3716_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj3716_droppedInsideTargetActions_runningActionsCount == 0) {
	obj3716_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj3716_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3716_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj3716").trigger("obj3716_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3716) {
				console.warn("de-queueing event obj3716." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3716").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3716_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj3714 
hide_3884();
function hide_3884() {
	var selector = "#obj3714";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj3716_droppedInsideTargetActions_runningActionsCount = obj3716_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj3716_droppedInsideTargetActions_runningActionsCount = window.obj3716_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj3716_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj3716_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj3716_droppedInsideTargetActions_runningActionsCount == 0) {
	obj3716_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_3884(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj3716_droppedInsideTargetActions_runningActionsCount = window.obj3716_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj3716_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj3716_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj3716_droppedInsideTargetActions_runningActionsCount == 0) {
	obj3716_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj3716_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3716_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj3716").trigger("obj3716_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3716) {
				console.warn("de-queueing event obj3716." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3716").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3716_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_3885();
function runjs_3885() {
	window.obj3716_droppedInsideTargetActions_runningActionsCount = obj3716_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj3716").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj3716_droppedInsideTargetActions_runningActionsCount = window.obj3716_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj3716_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj3716_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj3716_droppedInsideTargetActions_runningActionsCount == 0) {
	obj3716_droppedInsideTargetActions_actionGroup5();
}
	}, 1);
}







};
obj3716_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3716_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj3716").trigger("obj3716_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3716) {
				console.warn("de-queueing event obj3716." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3716").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3716_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj3876 
playAudio_3887();
function playAudio_3887() {
	window.obj3716_droppedInsideTargetActions_runningActionsCount = obj3716_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj3876")[0];
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
		    window.obj3716_droppedInsideTargetActions_runningActionsCount = window.obj3716_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj3716_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj3716_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj3716_droppedInsideTargetActions_runningActionsCount == 0) {
	obj3716_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj3716_droppedInsideTargetActions_runningActionsCount = window.obj3716_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj3716_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj3716_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj3716_droppedInsideTargetActions_runningActionsCount == 0) {
	obj3716_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj3716_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3716_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj3716").trigger("obj3716_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3716) {
				console.warn("de-queueing event obj3716." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3716").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3716_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90104();
function switchText_90104() {
	window.obj3716_droppedInsideTargetActions_runningActionsCount = obj3716_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj3866_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj3866_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj3866").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj3866_content");
			setTimeout(function () {
				window.obj3716_droppedInsideTargetActions_runningActionsCount = window.obj3716_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj3716_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj3716_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj3716_droppedInsideTargetActions_runningActionsCount == 0) {
	obj3716_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj3866 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj3716_droppedInsideTargetActions_runningActionsCount = window.obj3716_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj3716_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj3716_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj3716_droppedInsideTargetActions_runningActionsCount == 0) {
	obj3716_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj3716_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3716_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj3716").trigger("obj3716_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3716) {
				console.warn("de-queueing event obj3716." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3716").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3716_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj3766_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3766_onTouchDown_activeActionGroupIndex = -1;
		$("#obj3766").trigger("obj3766_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3766) {
				console.warn("de-queueing event obj3766." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3766").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3766_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj3766");
//	action: dragDrop
//	target: obj3766 
dragDrop_3769();
function dragDrop_3769() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj3766_onTouchDown_runningActionsCount = obj3766_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj3766');
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
	  	containerNode = $('#obj3488');
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
    	window.obj3766_onTouchDown_runningActionsCount = window.obj3766_onTouchDown_runningActionsCount - 1;
if (window.obj3766_onTouchDown_runningActionsCount < 0) {
	window.obj3766_onTouchDown_runningActionsCount = 0;
} else if (window.obj3766_onTouchDown_runningActionsCount == 0) {
	obj3766_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj3504","#obj3492","#obj3496","#obj3500");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3","droppedInsideTargetActions_4") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_3769 = false;
    	var dropped_id_3769;
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
					dropped_3769 = true;
					dropped_id_3769 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_3769) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj3766").trigger('SCActionDragDrop3769_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj3766_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3766_onTouchDown_activeActionGroupIndex = -1;
		$("#obj3766").trigger("obj3766_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3766) {
				console.warn("de-queueing event obj3766." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3766").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3766_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj3766_SCActionDragDrop3769_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3766_SCActionDragDrop3769_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj3766").trigger("obj3766_SCActionDragDrop3769_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3766) {
				console.warn("de-queueing event obj3766." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3766").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3766_SCActionDragDrop3769_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj3766 
move_92152();
function move_92152() {
	window.obj3766_SCActionDragDrop3769_droppedOutsideTargetActions_runningActionsCount = obj3766_SCActionDragDrop3769_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj3766");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 311;
	var moveY = 633;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj3766_SCActionDragDrop3769_droppedOutsideTargetActions_runningActionsCount = window.obj3766_SCActionDragDrop3769_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj3766_SCActionDragDrop3769_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj3766_SCActionDragDrop3769_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj3766_SCActionDragDrop3769_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj3766_SCActionDragDrop3769_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj3766_SCActionDragDrop3769_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3766_SCActionDragDrop3769_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj3766").trigger("obj3766_SCActionDragDrop3769_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3766) {
				console.warn("de-queueing event obj3766." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3766").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3766_SCActionDragDrop3769_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj3766_droppedInsideTargetActions_4_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3766_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj3766").trigger("obj3766_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3766) {
				console.warn("de-queueing event obj3766." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3766").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3766_droppedInsideTargetActions_4_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_4030();
function runjs_4030() {
	window.obj3766_droppedInsideTargetActions_4_runningActionsCount = obj3766_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj3500").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj3766_droppedInsideTargetActions_4_runningActionsCount = window.obj3766_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj3766_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj3766_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj3766_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj3766_droppedInsideTargetActions_4_actionGroup1();
}
	}, 1);
}







};
obj3766_droppedInsideTargetActions_4_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3766_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj3766").trigger("obj3766_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3766) {
				console.warn("de-queueing event obj3766." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3766").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3766_droppedInsideTargetActions_4_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_4031();
function runjs_4031() {
	window.obj3766_droppedInsideTargetActions_4_runningActionsCount = obj3766_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj3500").css("border-color", "#C00000"); $("#obj3500").css("border-width", "2px"); $("#obj3500").css("border-style", "solid"); $("#obj3500").css("border-radius", "10px"); $("#obj3500").css("-webkit-border-radius", "10px"); $("#obj3500").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj3766_droppedInsideTargetActions_4_runningActionsCount = window.obj3766_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj3766_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj3766_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj3766_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj3766_droppedInsideTargetActions_4_actionGroup2();
}
	}, 1);
}







};
obj3766_droppedInsideTargetActions_4_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3766_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj3766").trigger("obj3766_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3766) {
				console.warn("de-queueing event obj3766." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3766").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3766_droppedInsideTargetActions_4_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj3710 
hide_4032();
function hide_4032() {
	var selector = "#obj3710";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj3766_droppedInsideTargetActions_4_runningActionsCount = obj3766_droppedInsideTargetActions_4_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj3766_droppedInsideTargetActions_4_runningActionsCount = window.obj3766_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj3766_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj3766_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj3766_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj3766_droppedInsideTargetActions_4_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_4032(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj3766_droppedInsideTargetActions_4_runningActionsCount = window.obj3766_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj3766_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj3766_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj3766_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj3766_droppedInsideTargetActions_4_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj3766_droppedInsideTargetActions_4_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3766_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj3766").trigger("obj3766_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3766) {
				console.warn("de-queueing event obj3766." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3766").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3766_droppedInsideTargetActions_4_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_4033();
function runjs_4033() {
	window.obj3766_droppedInsideTargetActions_4_runningActionsCount = obj3766_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj3766").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj3766_droppedInsideTargetActions_4_runningActionsCount = window.obj3766_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj3766_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj3766_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj3766_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj3766_droppedInsideTargetActions_4_actionGroup4();
}
	}, 1);
}







};
obj3766_droppedInsideTargetActions_4_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3766_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj3766").trigger("obj3766_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3766) {
				console.warn("de-queueing event obj3766." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3766").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3766_droppedInsideTargetActions_4_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_4034();
function switchText_4034() {
	window.obj3766_droppedInsideTargetActions_4_runningActionsCount = obj3766_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj3866_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj3866_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj3866").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj3866_content");
			setTimeout(function () {
				window.obj3766_droppedInsideTargetActions_4_runningActionsCount = window.obj3766_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj3766_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj3766_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj3766_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj3766_droppedInsideTargetActions_4_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj3866 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj3766_droppedInsideTargetActions_4_runningActionsCount = window.obj3766_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj3766_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj3766_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj3766_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj3766_droppedInsideTargetActions_4_actionGroup5();
}
		}, 1);
	}
}






};
obj3766_droppedInsideTargetActions_4_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3766_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj3766").trigger("obj3766_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3766) {
				console.warn("de-queueing event obj3766." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3766").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3766_droppedInsideTargetActions_4_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj3766 
move_4035();
function move_4035() {
	window.obj3766_droppedInsideTargetActions_4_runningActionsCount = obj3766_droppedInsideTargetActions_4_runningActionsCount + 1;

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
	var targetObject = $("#obj3766");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 311;
	var moveY = 633;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj3766_droppedInsideTargetActions_4_runningActionsCount = window.obj3766_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj3766_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj3766_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj3766_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj3766_droppedInsideTargetActions_4_actionGroup6();
}
		}, 1);
	});
}



















};
obj3766_droppedInsideTargetActions_4_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3766_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj3766").trigger("obj3766_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3766) {
				console.warn("de-queueing event obj3766." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3766").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3766_droppedInsideTargetActions_4_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_4036();
function runjs_4036() {
	window.obj3766_droppedInsideTargetActions_4_runningActionsCount = obj3766_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj3500").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj3766_droppedInsideTargetActions_4_runningActionsCount = window.obj3766_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj3766_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj3766_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj3766_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj3766_droppedInsideTargetActions_4_actionGroup7();
}
	}, 1);
}







};
obj3766_droppedInsideTargetActions_4_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3766_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj3766").trigger("obj3766_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3766) {
				console.warn("de-queueing event obj3766." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3766").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3766_droppedInsideTargetActions_4_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_4037();
function runjs_4037() {
	window.obj3766_droppedInsideTargetActions_4_runningActionsCount = obj3766_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj3500").css("border-color", "#000000"); $("#obj3500").css("border-width", "1px"); $("#obj3500").css("border-style", "solid"); $("#obj3500").css("border-radius", "10px"); $("#obj3500").css("-webkit-border-radius", "10px"); $("#obj3500").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj3766_droppedInsideTargetActions_4_runningActionsCount = window.obj3766_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj3766_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj3766_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj3766_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj3766_droppedInsideTargetActions_4_actionGroup8();
}
	}, 1);
}







};
obj3766_droppedInsideTargetActions_4_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3766_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj3766").trigger("obj3766_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3766) {
				console.warn("de-queueing event obj3766." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3766").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3766_droppedInsideTargetActions_4_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj3710
(function(){
	window.obj3766_droppedInsideTargetActions_4_runningActionsCount = obj3766_droppedInsideTargetActions_4_runningActionsCount + 1;

	var selector = "#obj3710";
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
					window.obj3766_droppedInsideTargetActions_4_runningActionsCount = window.obj3766_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj3766_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj3766_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj3766_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj3766_droppedInsideTargetActions_4_actionGroup9();
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
				window.obj3766_droppedInsideTargetActions_4_runningActionsCount = window.obj3766_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj3766_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj3766_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj3766_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj3766_droppedInsideTargetActions_4_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj3766_droppedInsideTargetActions_4_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3766_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj3766").trigger("obj3766_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3766) {
				console.warn("de-queueing event obj3766." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3766").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3766_droppedInsideTargetActions_4_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_4039();
function runjs_4039() {
	window.obj3766_droppedInsideTargetActions_4_runningActionsCount = obj3766_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj3766").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj3766_droppedInsideTargetActions_4_runningActionsCount = window.obj3766_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj3766_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj3766_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj3766_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj3766_droppedInsideTargetActions_4_actionGroup10();
}
	}, 1);
}







};
obj3766_droppedInsideTargetActions_4_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3766_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj3766").trigger("obj3766_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3766) {
				console.warn("de-queueing event obj3766." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3766").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3766_droppedInsideTargetActions_4_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_4040();
function runjs_4040() {
	window.obj3766_droppedInsideTargetActions_4_runningActionsCount = obj3766_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj3766").css("border-color", "rgba(0,0,0,0)"); $("#obj3766").css("border-width", "0px"); $("#obj3766").css("border-style", "solid"); $("#obj3766").css("border-radius", "10px"); $("#obj3766").css("-webkit-border-radius", "10px"); $("#obj3766").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj3766_droppedInsideTargetActions_4_runningActionsCount = window.obj3766_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj3766_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj3766_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj3766_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj3766_droppedInsideTargetActions_4_actionGroup11();
}
	}, 1);
}







};
obj3766_droppedInsideTargetActions_4_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3766_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj3766").trigger("obj3766_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3766) {
				console.warn("de-queueing event obj3766." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3766").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3766_droppedInsideTargetActions_4_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj3875 
playAudio_4041();
function playAudio_4041() {
	window.obj3766_droppedInsideTargetActions_4_runningActionsCount = obj3766_droppedInsideTargetActions_4_runningActionsCount + 1;
	var myAudio = $("#obj3875")[0];
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
		    window.obj3766_droppedInsideTargetActions_4_runningActionsCount = window.obj3766_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj3766_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj3766_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj3766_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj3766_droppedInsideTargetActions_4_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj3766_droppedInsideTargetActions_4_runningActionsCount = window.obj3766_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj3766_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj3766_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj3766_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj3766_droppedInsideTargetActions_4_actionGroup12();
}
	}
}









};
obj3766_droppedInsideTargetActions_4_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3766_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj3766").trigger("obj3766_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3766) {
				console.warn("de-queueing event obj3766." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3766").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3766_droppedInsideTargetActions_4_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_4042();
function switchText_4042() {
	window.obj3766_droppedInsideTargetActions_4_runningActionsCount = obj3766_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj3866_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj3866_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj3866").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj3866_content");
			setTimeout(function () {
				window.obj3766_droppedInsideTargetActions_4_runningActionsCount = window.obj3766_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj3766_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj3766_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj3766_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj3766_droppedInsideTargetActions_4_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj3866 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj3766_droppedInsideTargetActions_4_runningActionsCount = window.obj3766_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj3766_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj3766_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj3766_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj3766_droppedInsideTargetActions_4_actionGroup13();
}
		}, 1);
	}
}






};
obj3766_droppedInsideTargetActions_4_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3766_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj3766").trigger("obj3766_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3766) {
				console.warn("de-queueing event obj3766." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3766").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3766_droppedInsideTargetActions_4_activeActionGroupIndex = 13;
	





















};
obj3766_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3766_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj3766").trigger("obj3766_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3766) {
				console.warn("de-queueing event obj3766." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3766").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3766_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_4016();
function runjs_4016() {
	window.obj3766_droppedInsideTargetActions_3_runningActionsCount = obj3766_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj3496").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj3766_droppedInsideTargetActions_3_runningActionsCount = window.obj3766_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj3766_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj3766_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj3766_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj3766_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj3766_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3766_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj3766").trigger("obj3766_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3766) {
				console.warn("de-queueing event obj3766." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3766").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3766_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_4017();
function runjs_4017() {
	window.obj3766_droppedInsideTargetActions_3_runningActionsCount = obj3766_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj3496").css("border-color", "#C00000"); $("#obj3496").css("border-width", "2px"); $("#obj3496").css("border-style", "solid"); $("#obj3496").css("border-radius", "10px"); $("#obj3496").css("-webkit-border-radius", "10px"); $("#obj3496").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj3766_droppedInsideTargetActions_3_runningActionsCount = window.obj3766_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj3766_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj3766_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj3766_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj3766_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj3766_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3766_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj3766").trigger("obj3766_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3766) {
				console.warn("de-queueing event obj3766." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3766").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3766_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj3712 
hide_4018();
function hide_4018() {
	var selector = "#obj3712";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj3766_droppedInsideTargetActions_3_runningActionsCount = obj3766_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj3766_droppedInsideTargetActions_3_runningActionsCount = window.obj3766_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj3766_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj3766_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj3766_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj3766_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_4018(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj3766_droppedInsideTargetActions_3_runningActionsCount = window.obj3766_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj3766_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj3766_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj3766_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj3766_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj3766_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3766_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj3766").trigger("obj3766_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3766) {
				console.warn("de-queueing event obj3766." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3766").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3766_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_4019();
function runjs_4019() {
	window.obj3766_droppedInsideTargetActions_3_runningActionsCount = obj3766_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj3766").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj3766_droppedInsideTargetActions_3_runningActionsCount = window.obj3766_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj3766_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj3766_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj3766_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj3766_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj3766_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3766_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj3766").trigger("obj3766_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3766) {
				console.warn("de-queueing event obj3766." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3766").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3766_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_4020();
function switchText_4020() {
	window.obj3766_droppedInsideTargetActions_3_runningActionsCount = obj3766_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj3866_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj3866_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj3866").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj3866_content");
			setTimeout(function () {
				window.obj3766_droppedInsideTargetActions_3_runningActionsCount = window.obj3766_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj3766_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj3766_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj3766_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj3766_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj3866 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj3766_droppedInsideTargetActions_3_runningActionsCount = window.obj3766_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj3766_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj3766_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj3766_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj3766_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj3766_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3766_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj3766").trigger("obj3766_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3766) {
				console.warn("de-queueing event obj3766." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3766").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3766_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj3766 
move_4021();
function move_4021() {
	window.obj3766_droppedInsideTargetActions_3_runningActionsCount = obj3766_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj3766");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 311;
	var moveY = 633;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj3766_droppedInsideTargetActions_3_runningActionsCount = window.obj3766_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj3766_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj3766_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj3766_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj3766_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj3766_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3766_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj3766").trigger("obj3766_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3766) {
				console.warn("de-queueing event obj3766." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3766").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3766_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_4022();
function runjs_4022() {
	window.obj3766_droppedInsideTargetActions_3_runningActionsCount = obj3766_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj3496").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj3766_droppedInsideTargetActions_3_runningActionsCount = window.obj3766_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj3766_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj3766_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj3766_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj3766_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj3766_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3766_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj3766").trigger("obj3766_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3766) {
				console.warn("de-queueing event obj3766." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3766").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3766_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_4023();
function runjs_4023() {
	window.obj3766_droppedInsideTargetActions_3_runningActionsCount = obj3766_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj3496").css("border-color", "#000000"); $("#obj3496").css("border-width", "1px"); $("#obj3496").css("border-style", "solid"); $("#obj3496").css("border-radius", "10px"); $("#obj3496").css("-webkit-border-radius", "10px"); $("#obj3496").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj3766_droppedInsideTargetActions_3_runningActionsCount = window.obj3766_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj3766_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj3766_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj3766_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj3766_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj3766_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3766_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj3766").trigger("obj3766_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3766) {
				console.warn("de-queueing event obj3766." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3766").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3766_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj3712
(function(){
	window.obj3766_droppedInsideTargetActions_3_runningActionsCount = obj3766_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj3712";
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
					window.obj3766_droppedInsideTargetActions_3_runningActionsCount = window.obj3766_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj3766_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj3766_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj3766_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj3766_droppedInsideTargetActions_3_actionGroup9();
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
				window.obj3766_droppedInsideTargetActions_3_runningActionsCount = window.obj3766_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj3766_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj3766_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj3766_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj3766_droppedInsideTargetActions_3_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj3766_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3766_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj3766").trigger("obj3766_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3766) {
				console.warn("de-queueing event obj3766." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3766").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3766_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_4025();
function runjs_4025() {
	window.obj3766_droppedInsideTargetActions_3_runningActionsCount = obj3766_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj3766").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj3766_droppedInsideTargetActions_3_runningActionsCount = window.obj3766_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj3766_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj3766_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj3766_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj3766_droppedInsideTargetActions_3_actionGroup10();
}
	}, 1);
}







};
obj3766_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3766_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj3766").trigger("obj3766_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3766) {
				console.warn("de-queueing event obj3766." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3766").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3766_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_4026();
function runjs_4026() {
	window.obj3766_droppedInsideTargetActions_3_runningActionsCount = obj3766_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj3766").css("border-color", "rgba(0,0,0,0)"); $("#obj3766").css("border-width", "0px"); $("#obj3766").css("border-style", "solid"); $("#obj3766").css("border-radius", "10px"); $("#obj3766").css("-webkit-border-radius", "10px"); $("#obj3766").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj3766_droppedInsideTargetActions_3_runningActionsCount = window.obj3766_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj3766_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj3766_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj3766_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj3766_droppedInsideTargetActions_3_actionGroup11();
}
	}, 1);
}







};
obj3766_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3766_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj3766").trigger("obj3766_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3766) {
				console.warn("de-queueing event obj3766." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3766").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3766_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj3875 
playAudio_4027();
function playAudio_4027() {
	window.obj3766_droppedInsideTargetActions_3_runningActionsCount = obj3766_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj3875")[0];
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
		    window.obj3766_droppedInsideTargetActions_3_runningActionsCount = window.obj3766_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj3766_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj3766_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj3766_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj3766_droppedInsideTargetActions_3_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj3766_droppedInsideTargetActions_3_runningActionsCount = window.obj3766_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj3766_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj3766_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj3766_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj3766_droppedInsideTargetActions_3_actionGroup12();
}
	}
}









};
obj3766_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3766_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj3766").trigger("obj3766_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3766) {
				console.warn("de-queueing event obj3766." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3766").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3766_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_4028();
function switchText_4028() {
	window.obj3766_droppedInsideTargetActions_3_runningActionsCount = obj3766_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj3866_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj3866_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj3866").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj3866_content");
			setTimeout(function () {
				window.obj3766_droppedInsideTargetActions_3_runningActionsCount = window.obj3766_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj3766_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj3766_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj3766_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj3766_droppedInsideTargetActions_3_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj3866 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj3766_droppedInsideTargetActions_3_runningActionsCount = window.obj3766_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj3766_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj3766_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj3766_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj3766_droppedInsideTargetActions_3_actionGroup13();
}
		}, 1);
	}
}






};
obj3766_droppedInsideTargetActions_3_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3766_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj3766").trigger("obj3766_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3766) {
				console.warn("de-queueing event obj3766." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3766").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3766_droppedInsideTargetActions_3_activeActionGroupIndex = 13;
	





















};
obj3766_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3766_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj3766").trigger("obj3766_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3766) {
				console.warn("de-queueing event obj3766." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3766").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3766_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_4002();
function runjs_4002() {
	window.obj3766_droppedInsideTargetActions_2_runningActionsCount = obj3766_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj3492").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj3766_droppedInsideTargetActions_2_runningActionsCount = window.obj3766_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj3766_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj3766_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj3766_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj3766_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj3766_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3766_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj3766").trigger("obj3766_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3766) {
				console.warn("de-queueing event obj3766." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3766").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3766_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_4003();
function runjs_4003() {
	window.obj3766_droppedInsideTargetActions_2_runningActionsCount = obj3766_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj3492").css("border-color", "#C00000"); $("#obj3492").css("border-width", "2px"); $("#obj3492").css("border-style", "solid"); $("#obj3492").css("border-radius", "10px"); $("#obj3492").css("-webkit-border-radius", "10px"); $("#obj3492").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj3766_droppedInsideTargetActions_2_runningActionsCount = window.obj3766_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj3766_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj3766_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj3766_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj3766_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj3766_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3766_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj3766").trigger("obj3766_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3766) {
				console.warn("de-queueing event obj3766." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3766").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3766_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj3714 
hide_4004();
function hide_4004() {
	var selector = "#obj3714";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj3766_droppedInsideTargetActions_2_runningActionsCount = obj3766_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj3766_droppedInsideTargetActions_2_runningActionsCount = window.obj3766_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj3766_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj3766_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj3766_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj3766_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_4004(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj3766_droppedInsideTargetActions_2_runningActionsCount = window.obj3766_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj3766_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj3766_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj3766_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj3766_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj3766_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3766_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj3766").trigger("obj3766_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3766) {
				console.warn("de-queueing event obj3766." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3766").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3766_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_4005();
function runjs_4005() {
	window.obj3766_droppedInsideTargetActions_2_runningActionsCount = obj3766_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj3766").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj3766_droppedInsideTargetActions_2_runningActionsCount = window.obj3766_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj3766_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj3766_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj3766_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj3766_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj3766_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3766_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj3766").trigger("obj3766_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3766) {
				console.warn("de-queueing event obj3766." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3766").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3766_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_4006();
function switchText_4006() {
	window.obj3766_droppedInsideTargetActions_2_runningActionsCount = obj3766_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj3866_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj3866_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj3866").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj3866_content");
			setTimeout(function () {
				window.obj3766_droppedInsideTargetActions_2_runningActionsCount = window.obj3766_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj3766_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj3766_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj3766_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj3766_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj3866 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj3766_droppedInsideTargetActions_2_runningActionsCount = window.obj3766_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj3766_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj3766_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj3766_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj3766_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj3766_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3766_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj3766").trigger("obj3766_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3766) {
				console.warn("de-queueing event obj3766." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3766").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3766_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj3766 
move_4007();
function move_4007() {
	window.obj3766_droppedInsideTargetActions_2_runningActionsCount = obj3766_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj3766");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 311;
	var moveY = 633;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj3766_droppedInsideTargetActions_2_runningActionsCount = window.obj3766_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj3766_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj3766_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj3766_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj3766_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj3766_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3766_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj3766").trigger("obj3766_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3766) {
				console.warn("de-queueing event obj3766." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3766").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3766_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_4008();
function runjs_4008() {
	window.obj3766_droppedInsideTargetActions_2_runningActionsCount = obj3766_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj3492").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj3766_droppedInsideTargetActions_2_runningActionsCount = window.obj3766_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj3766_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj3766_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj3766_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj3766_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj3766_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3766_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj3766").trigger("obj3766_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3766) {
				console.warn("de-queueing event obj3766." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3766").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3766_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_4009();
function runjs_4009() {
	window.obj3766_droppedInsideTargetActions_2_runningActionsCount = obj3766_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj3492").css("border-color", "#000000"); $("#obj3492").css("border-width", "1px"); $("#obj3492").css("border-style", "solid"); $("#obj3492").css("border-radius", "10px"); $("#obj3492").css("-webkit-border-radius", "10px"); $("#obj3492").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj3766_droppedInsideTargetActions_2_runningActionsCount = window.obj3766_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj3766_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj3766_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj3766_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj3766_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj3766_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3766_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj3766").trigger("obj3766_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3766) {
				console.warn("de-queueing event obj3766." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3766").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3766_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj3714
(function(){
	window.obj3766_droppedInsideTargetActions_2_runningActionsCount = obj3766_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj3714";
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
					window.obj3766_droppedInsideTargetActions_2_runningActionsCount = window.obj3766_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj3766_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj3766_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj3766_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj3766_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj3766_droppedInsideTargetActions_2_runningActionsCount = window.obj3766_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj3766_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj3766_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj3766_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj3766_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj3766_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3766_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj3766").trigger("obj3766_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3766) {
				console.warn("de-queueing event obj3766." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3766").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3766_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_4011();
function runjs_4011() {
	window.obj3766_droppedInsideTargetActions_2_runningActionsCount = obj3766_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj3766").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj3766_droppedInsideTargetActions_2_runningActionsCount = window.obj3766_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj3766_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj3766_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj3766_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj3766_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj3766_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3766_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj3766").trigger("obj3766_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3766) {
				console.warn("de-queueing event obj3766." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3766").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3766_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_4012();
function runjs_4012() {
	window.obj3766_droppedInsideTargetActions_2_runningActionsCount = obj3766_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj3766").css("border-color", "rgba(0,0,0,0)"); $("#obj3766").css("border-width", "0px"); $("#obj3766").css("border-style", "solid"); $("#obj3766").css("border-radius", "10px"); $("#obj3766").css("-webkit-border-radius", "10px"); $("#obj3766").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj3766_droppedInsideTargetActions_2_runningActionsCount = window.obj3766_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj3766_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj3766_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj3766_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj3766_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj3766_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3766_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj3766").trigger("obj3766_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3766) {
				console.warn("de-queueing event obj3766." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3766").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3766_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj3875 
playAudio_4013();
function playAudio_4013() {
	window.obj3766_droppedInsideTargetActions_2_runningActionsCount = obj3766_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj3875")[0];
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
		    window.obj3766_droppedInsideTargetActions_2_runningActionsCount = window.obj3766_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj3766_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj3766_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj3766_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj3766_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj3766_droppedInsideTargetActions_2_runningActionsCount = window.obj3766_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj3766_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj3766_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj3766_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj3766_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj3766_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3766_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj3766").trigger("obj3766_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3766) {
				console.warn("de-queueing event obj3766." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3766").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3766_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_4014();
function switchText_4014() {
	window.obj3766_droppedInsideTargetActions_2_runningActionsCount = obj3766_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj3866_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj3866_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj3866").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj3866_content");
			setTimeout(function () {
				window.obj3766_droppedInsideTargetActions_2_runningActionsCount = window.obj3766_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj3766_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj3766_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj3766_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj3766_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj3866 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj3766_droppedInsideTargetActions_2_runningActionsCount = window.obj3766_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj3766_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj3766_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj3766_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj3766_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj3766_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3766_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj3766").trigger("obj3766_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3766) {
				console.warn("de-queueing event obj3766." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3766").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3766_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj3766_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3766_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj3766").trigger("obj3766_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3766) {
				console.warn("de-queueing event obj3766." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3766").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3766_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_3903();
function runjs_3903() {
	window.obj3766_droppedInsideTargetActions_runningActionsCount = obj3766_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj3504").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj3766_droppedInsideTargetActions_runningActionsCount = window.obj3766_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj3766_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj3766_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj3766_droppedInsideTargetActions_runningActionsCount == 0) {
	obj3766_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj3766_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3766_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj3766").trigger("obj3766_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3766) {
				console.warn("de-queueing event obj3766." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3766").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3766_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_3907();
function switchText_3907() {
	window.obj3766_droppedInsideTargetActions_runningActionsCount = obj3766_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj3866_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj3866_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj3866").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj3866_content");
			setTimeout(function () {
				window.obj3766_droppedInsideTargetActions_runningActionsCount = window.obj3766_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj3766_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj3766_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj3766_droppedInsideTargetActions_runningActionsCount == 0) {
	obj3766_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj3866 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj3766_droppedInsideTargetActions_runningActionsCount = window.obj3766_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj3766_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj3766_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj3766_droppedInsideTargetActions_runningActionsCount == 0) {
	obj3766_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj3766_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3766_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj3766").trigger("obj3766_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3766) {
				console.warn("de-queueing event obj3766." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3766").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3766_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_3904();
function runjs_3904() {
	window.obj3766_droppedInsideTargetActions_runningActionsCount = obj3766_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj3504").css("border-color", "#058E3F"); $("#obj3504").css("border-width", "2px"); $("#obj3504").css("border-style", "solid"); $("#obj3504").css("border-radius", "10px"); $("#obj3504").css("-webkit-border-radius", "10px"); $("#obj3504").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj3766_droppedInsideTargetActions_runningActionsCount = window.obj3766_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj3766_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj3766_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj3766_droppedInsideTargetActions_runningActionsCount == 0) {
	obj3766_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj3766_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3766_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj3766").trigger("obj3766_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3766) {
				console.warn("de-queueing event obj3766." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3766").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3766_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj3708 
hide_3905();
function hide_3905() {
	var selector = "#obj3708";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj3766_droppedInsideTargetActions_runningActionsCount = obj3766_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj3766_droppedInsideTargetActions_runningActionsCount = window.obj3766_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj3766_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj3766_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj3766_droppedInsideTargetActions_runningActionsCount == 0) {
	obj3766_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_3905(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj3766_droppedInsideTargetActions_runningActionsCount = window.obj3766_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj3766_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj3766_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj3766_droppedInsideTargetActions_runningActionsCount == 0) {
	obj3766_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj3766_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3766_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj3766").trigger("obj3766_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3766) {
				console.warn("de-queueing event obj3766." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3766").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3766_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_3906();
function runjs_3906() {
	window.obj3766_droppedInsideTargetActions_runningActionsCount = obj3766_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj3766").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj3766_droppedInsideTargetActions_runningActionsCount = window.obj3766_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj3766_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj3766_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj3766_droppedInsideTargetActions_runningActionsCount == 0) {
	obj3766_droppedInsideTargetActions_actionGroup5();
}
	}, 1);
}







};
obj3766_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3766_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj3766").trigger("obj3766_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3766) {
				console.warn("de-queueing event obj3766." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3766").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3766_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj3876 
playAudio_3908();
function playAudio_3908() {
	window.obj3766_droppedInsideTargetActions_runningActionsCount = obj3766_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj3876")[0];
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
		    window.obj3766_droppedInsideTargetActions_runningActionsCount = window.obj3766_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj3766_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj3766_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj3766_droppedInsideTargetActions_runningActionsCount == 0) {
	obj3766_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj3766_droppedInsideTargetActions_runningActionsCount = window.obj3766_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj3766_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj3766_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj3766_droppedInsideTargetActions_runningActionsCount == 0) {
	obj3766_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj3766_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3766_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj3766").trigger("obj3766_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3766) {
				console.warn("de-queueing event obj3766." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3766").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3766_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90105();
function switchText_90105() {
	window.obj3766_droppedInsideTargetActions_runningActionsCount = obj3766_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj3866_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj3866_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj3866").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj3866_content");
			setTimeout(function () {
				window.obj3766_droppedInsideTargetActions_runningActionsCount = window.obj3766_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj3766_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj3766_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj3766_droppedInsideTargetActions_runningActionsCount == 0) {
	obj3766_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj3866 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj3766_droppedInsideTargetActions_runningActionsCount = window.obj3766_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj3766_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj3766_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj3766_droppedInsideTargetActions_runningActionsCount == 0) {
	obj3766_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj3766_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3766_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj3766").trigger("obj3766_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3766) {
				console.warn("de-queueing event obj3766." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3766").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3766_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj3816_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3816_onTouchDown_activeActionGroupIndex = -1;
		$("#obj3816").trigger("obj3816_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3816) {
				console.warn("de-queueing event obj3816." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3816").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3816_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj3816");
//	action: dragDrop
//	target: obj3816 
dragDrop_3819();
function dragDrop_3819() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj3816_onTouchDown_runningActionsCount = obj3816_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj3816');
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
	  	containerNode = $('#obj3488');
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
    	window.obj3816_onTouchDown_runningActionsCount = window.obj3816_onTouchDown_runningActionsCount - 1;
if (window.obj3816_onTouchDown_runningActionsCount < 0) {
	window.obj3816_onTouchDown_runningActionsCount = 0;
} else if (window.obj3816_onTouchDown_runningActionsCount == 0) {
	obj3816_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj3500","#obj3492","#obj3496","#obj3504");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3","droppedInsideTargetActions_4") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_3819 = false;
    	var dropped_id_3819;
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
					dropped_3819 = true;
					dropped_id_3819 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_3819) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj3816").trigger('SCActionDragDrop3819_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj3816_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3816_onTouchDown_activeActionGroupIndex = -1;
		$("#obj3816").trigger("obj3816_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3816) {
				console.warn("de-queueing event obj3816." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3816").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3816_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj3816_SCActionDragDrop3819_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3816_SCActionDragDrop3819_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj3816").trigger("obj3816_SCActionDragDrop3819_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3816) {
				console.warn("de-queueing event obj3816." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3816").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3816_SCActionDragDrop3819_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj3816 
move_92154();
function move_92154() {
	window.obj3816_SCActionDragDrop3819_droppedOutsideTargetActions_runningActionsCount = obj3816_SCActionDragDrop3819_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj3816");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 425;
	var moveY = 633;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj3816_SCActionDragDrop3819_droppedOutsideTargetActions_runningActionsCount = window.obj3816_SCActionDragDrop3819_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj3816_SCActionDragDrop3819_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj3816_SCActionDragDrop3819_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj3816_SCActionDragDrop3819_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj3816_SCActionDragDrop3819_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj3816_SCActionDragDrop3819_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3816_SCActionDragDrop3819_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj3816").trigger("obj3816_SCActionDragDrop3819_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3816) {
				console.warn("de-queueing event obj3816." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3816").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3816_SCActionDragDrop3819_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj3816_droppedInsideTargetActions_4_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3816_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj3816").trigger("obj3816_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3816) {
				console.warn("de-queueing event obj3816." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3816").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3816_droppedInsideTargetActions_4_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_4072();
function runjs_4072() {
	window.obj3816_droppedInsideTargetActions_4_runningActionsCount = obj3816_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj3504").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj3816_droppedInsideTargetActions_4_runningActionsCount = window.obj3816_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj3816_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj3816_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj3816_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj3816_droppedInsideTargetActions_4_actionGroup1();
}
	}, 1);
}







};
obj3816_droppedInsideTargetActions_4_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3816_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj3816").trigger("obj3816_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3816) {
				console.warn("de-queueing event obj3816." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3816").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3816_droppedInsideTargetActions_4_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_4073();
function runjs_4073() {
	window.obj3816_droppedInsideTargetActions_4_runningActionsCount = obj3816_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj3504").css("border-color", "#C00000"); $("#obj3504").css("border-width", "2px"); $("#obj3504").css("border-style", "solid"); $("#obj3504").css("border-radius", "10px"); $("#obj3504").css("-webkit-border-radius", "10px"); $("#obj3504").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj3816_droppedInsideTargetActions_4_runningActionsCount = window.obj3816_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj3816_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj3816_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj3816_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj3816_droppedInsideTargetActions_4_actionGroup2();
}
	}, 1);
}







};
obj3816_droppedInsideTargetActions_4_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3816_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj3816").trigger("obj3816_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3816) {
				console.warn("de-queueing event obj3816." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3816").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3816_droppedInsideTargetActions_4_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj3708 
hide_4074();
function hide_4074() {
	var selector = "#obj3708";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj3816_droppedInsideTargetActions_4_runningActionsCount = obj3816_droppedInsideTargetActions_4_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj3816_droppedInsideTargetActions_4_runningActionsCount = window.obj3816_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj3816_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj3816_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj3816_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj3816_droppedInsideTargetActions_4_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_4074(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj3816_droppedInsideTargetActions_4_runningActionsCount = window.obj3816_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj3816_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj3816_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj3816_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj3816_droppedInsideTargetActions_4_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj3816_droppedInsideTargetActions_4_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3816_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj3816").trigger("obj3816_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3816) {
				console.warn("de-queueing event obj3816." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3816").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3816_droppedInsideTargetActions_4_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_4075();
function runjs_4075() {
	window.obj3816_droppedInsideTargetActions_4_runningActionsCount = obj3816_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj3816").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj3816_droppedInsideTargetActions_4_runningActionsCount = window.obj3816_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj3816_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj3816_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj3816_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj3816_droppedInsideTargetActions_4_actionGroup4();
}
	}, 1);
}







};
obj3816_droppedInsideTargetActions_4_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3816_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj3816").trigger("obj3816_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3816) {
				console.warn("de-queueing event obj3816." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3816").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3816_droppedInsideTargetActions_4_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_4076();
function switchText_4076() {
	window.obj3816_droppedInsideTargetActions_4_runningActionsCount = obj3816_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj3866_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj3866_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj3866").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj3866_content");
			setTimeout(function () {
				window.obj3816_droppedInsideTargetActions_4_runningActionsCount = window.obj3816_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj3816_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj3816_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj3816_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj3816_droppedInsideTargetActions_4_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj3866 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj3816_droppedInsideTargetActions_4_runningActionsCount = window.obj3816_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj3816_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj3816_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj3816_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj3816_droppedInsideTargetActions_4_actionGroup5();
}
		}, 1);
	}
}






};
obj3816_droppedInsideTargetActions_4_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3816_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj3816").trigger("obj3816_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3816) {
				console.warn("de-queueing event obj3816." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3816").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3816_droppedInsideTargetActions_4_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj3816 
move_4077();
function move_4077() {
	window.obj3816_droppedInsideTargetActions_4_runningActionsCount = obj3816_droppedInsideTargetActions_4_runningActionsCount + 1;

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
	var targetObject = $("#obj3816");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 425;
	var moveY = 633;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj3816_droppedInsideTargetActions_4_runningActionsCount = window.obj3816_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj3816_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj3816_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj3816_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj3816_droppedInsideTargetActions_4_actionGroup6();
}
		}, 1);
	});
}



















};
obj3816_droppedInsideTargetActions_4_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3816_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj3816").trigger("obj3816_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3816) {
				console.warn("de-queueing event obj3816." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3816").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3816_droppedInsideTargetActions_4_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_4078();
function runjs_4078() {
	window.obj3816_droppedInsideTargetActions_4_runningActionsCount = obj3816_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj3504").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj3816_droppedInsideTargetActions_4_runningActionsCount = window.obj3816_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj3816_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj3816_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj3816_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj3816_droppedInsideTargetActions_4_actionGroup7();
}
	}, 1);
}







};
obj3816_droppedInsideTargetActions_4_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3816_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj3816").trigger("obj3816_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3816) {
				console.warn("de-queueing event obj3816." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3816").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3816_droppedInsideTargetActions_4_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_4079();
function runjs_4079() {
	window.obj3816_droppedInsideTargetActions_4_runningActionsCount = obj3816_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj3504").css("border-color", "#000000"); $("#obj3504").css("border-width", "1px"); $("#obj3504").css("border-style", "solid"); $("#obj3504").css("border-radius", "10px"); $("#obj3504").css("-webkit-border-radius", "10px"); $("#obj3504").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj3816_droppedInsideTargetActions_4_runningActionsCount = window.obj3816_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj3816_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj3816_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj3816_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj3816_droppedInsideTargetActions_4_actionGroup8();
}
	}, 1);
}







};
obj3816_droppedInsideTargetActions_4_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3816_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj3816").trigger("obj3816_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3816) {
				console.warn("de-queueing event obj3816." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3816").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3816_droppedInsideTargetActions_4_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj3708
(function(){
	window.obj3816_droppedInsideTargetActions_4_runningActionsCount = obj3816_droppedInsideTargetActions_4_runningActionsCount + 1;

	var selector = "#obj3708";
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
					window.obj3816_droppedInsideTargetActions_4_runningActionsCount = window.obj3816_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj3816_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj3816_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj3816_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj3816_droppedInsideTargetActions_4_actionGroup9();
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
				window.obj3816_droppedInsideTargetActions_4_runningActionsCount = window.obj3816_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj3816_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj3816_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj3816_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj3816_droppedInsideTargetActions_4_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj3816_droppedInsideTargetActions_4_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3816_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj3816").trigger("obj3816_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3816) {
				console.warn("de-queueing event obj3816." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3816").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3816_droppedInsideTargetActions_4_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_4081();
function runjs_4081() {
	window.obj3816_droppedInsideTargetActions_4_runningActionsCount = obj3816_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj3816").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj3816_droppedInsideTargetActions_4_runningActionsCount = window.obj3816_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj3816_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj3816_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj3816_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj3816_droppedInsideTargetActions_4_actionGroup10();
}
	}, 1);
}







};
obj3816_droppedInsideTargetActions_4_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3816_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj3816").trigger("obj3816_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3816) {
				console.warn("de-queueing event obj3816." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3816").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3816_droppedInsideTargetActions_4_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_4082();
function runjs_4082() {
	window.obj3816_droppedInsideTargetActions_4_runningActionsCount = obj3816_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj3816").css("border-color", "rgba(0,0,0,0)"); $("#obj3816").css("border-width", "0px"); $("#obj3816").css("border-style", "solid"); $("#obj3816").css("border-radius", "10px"); $("#obj3816").css("-webkit-border-radius", "10px"); $("#obj3816").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj3816_droppedInsideTargetActions_4_runningActionsCount = window.obj3816_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj3816_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj3816_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj3816_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj3816_droppedInsideTargetActions_4_actionGroup11();
}
	}, 1);
}







};
obj3816_droppedInsideTargetActions_4_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3816_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj3816").trigger("obj3816_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3816) {
				console.warn("de-queueing event obj3816." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3816").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3816_droppedInsideTargetActions_4_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj3875 
playAudio_4083();
function playAudio_4083() {
	window.obj3816_droppedInsideTargetActions_4_runningActionsCount = obj3816_droppedInsideTargetActions_4_runningActionsCount + 1;
	var myAudio = $("#obj3875")[0];
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
		    window.obj3816_droppedInsideTargetActions_4_runningActionsCount = window.obj3816_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj3816_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj3816_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj3816_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj3816_droppedInsideTargetActions_4_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj3816_droppedInsideTargetActions_4_runningActionsCount = window.obj3816_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj3816_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj3816_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj3816_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj3816_droppedInsideTargetActions_4_actionGroup12();
}
	}
}









};
obj3816_droppedInsideTargetActions_4_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3816_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj3816").trigger("obj3816_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3816) {
				console.warn("de-queueing event obj3816." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3816").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3816_droppedInsideTargetActions_4_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_4084();
function switchText_4084() {
	window.obj3816_droppedInsideTargetActions_4_runningActionsCount = obj3816_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj3866_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj3866_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj3866").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj3866_content");
			setTimeout(function () {
				window.obj3816_droppedInsideTargetActions_4_runningActionsCount = window.obj3816_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj3816_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj3816_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj3816_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj3816_droppedInsideTargetActions_4_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj3866 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj3816_droppedInsideTargetActions_4_runningActionsCount = window.obj3816_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj3816_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj3816_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj3816_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj3816_droppedInsideTargetActions_4_actionGroup13();
}
		}, 1);
	}
}






};
obj3816_droppedInsideTargetActions_4_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3816_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj3816").trigger("obj3816_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3816) {
				console.warn("de-queueing event obj3816." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3816").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3816_droppedInsideTargetActions_4_activeActionGroupIndex = 13;
	





















};
obj3816_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3816_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj3816").trigger("obj3816_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3816) {
				console.warn("de-queueing event obj3816." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3816").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3816_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_4058();
function runjs_4058() {
	window.obj3816_droppedInsideTargetActions_3_runningActionsCount = obj3816_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj3496").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj3816_droppedInsideTargetActions_3_runningActionsCount = window.obj3816_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj3816_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj3816_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj3816_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj3816_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj3816_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3816_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj3816").trigger("obj3816_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3816) {
				console.warn("de-queueing event obj3816." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3816").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3816_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_4059();
function runjs_4059() {
	window.obj3816_droppedInsideTargetActions_3_runningActionsCount = obj3816_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj3496").css("border-color", "#C00000"); $("#obj3496").css("border-width", "2px"); $("#obj3496").css("border-style", "solid"); $("#obj3496").css("border-radius", "10px"); $("#obj3496").css("-webkit-border-radius", "10px"); $("#obj3496").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj3816_droppedInsideTargetActions_3_runningActionsCount = window.obj3816_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj3816_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj3816_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj3816_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj3816_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj3816_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3816_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj3816").trigger("obj3816_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3816) {
				console.warn("de-queueing event obj3816." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3816").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3816_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj3712 
hide_4060();
function hide_4060() {
	var selector = "#obj3712";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj3816_droppedInsideTargetActions_3_runningActionsCount = obj3816_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj3816_droppedInsideTargetActions_3_runningActionsCount = window.obj3816_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj3816_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj3816_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj3816_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj3816_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_4060(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj3816_droppedInsideTargetActions_3_runningActionsCount = window.obj3816_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj3816_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj3816_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj3816_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj3816_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj3816_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3816_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj3816").trigger("obj3816_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3816) {
				console.warn("de-queueing event obj3816." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3816").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3816_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_4061();
function runjs_4061() {
	window.obj3816_droppedInsideTargetActions_3_runningActionsCount = obj3816_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj3816").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj3816_droppedInsideTargetActions_3_runningActionsCount = window.obj3816_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj3816_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj3816_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj3816_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj3816_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj3816_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3816_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj3816").trigger("obj3816_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3816) {
				console.warn("de-queueing event obj3816." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3816").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3816_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_4062();
function switchText_4062() {
	window.obj3816_droppedInsideTargetActions_3_runningActionsCount = obj3816_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj3866_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj3866_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj3866").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj3866_content");
			setTimeout(function () {
				window.obj3816_droppedInsideTargetActions_3_runningActionsCount = window.obj3816_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj3816_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj3816_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj3816_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj3816_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj3866 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj3816_droppedInsideTargetActions_3_runningActionsCount = window.obj3816_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj3816_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj3816_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj3816_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj3816_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj3816_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3816_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj3816").trigger("obj3816_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3816) {
				console.warn("de-queueing event obj3816." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3816").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3816_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj3816 
move_4063();
function move_4063() {
	window.obj3816_droppedInsideTargetActions_3_runningActionsCount = obj3816_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj3816");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 425;
	var moveY = 633;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj3816_droppedInsideTargetActions_3_runningActionsCount = window.obj3816_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj3816_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj3816_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj3816_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj3816_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj3816_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3816_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj3816").trigger("obj3816_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3816) {
				console.warn("de-queueing event obj3816." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3816").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3816_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_4064();
function runjs_4064() {
	window.obj3816_droppedInsideTargetActions_3_runningActionsCount = obj3816_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj3496").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj3816_droppedInsideTargetActions_3_runningActionsCount = window.obj3816_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj3816_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj3816_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj3816_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj3816_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj3816_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3816_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj3816").trigger("obj3816_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3816) {
				console.warn("de-queueing event obj3816." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3816").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3816_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_4065();
function runjs_4065() {
	window.obj3816_droppedInsideTargetActions_3_runningActionsCount = obj3816_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj3496").css("border-color", "#000000"); $("#obj3496").css("border-width", "1px"); $("#obj3496").css("border-style", "solid"); $("#obj3496").css("border-radius", "10px"); $("#obj3496").css("-webkit-border-radius", "10px"); $("#obj3496").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj3816_droppedInsideTargetActions_3_runningActionsCount = window.obj3816_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj3816_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj3816_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj3816_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj3816_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj3816_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3816_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj3816").trigger("obj3816_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3816) {
				console.warn("de-queueing event obj3816." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3816").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3816_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj3712
(function(){
	window.obj3816_droppedInsideTargetActions_3_runningActionsCount = obj3816_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj3712";
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
					window.obj3816_droppedInsideTargetActions_3_runningActionsCount = window.obj3816_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj3816_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj3816_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj3816_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj3816_droppedInsideTargetActions_3_actionGroup9();
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
				window.obj3816_droppedInsideTargetActions_3_runningActionsCount = window.obj3816_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj3816_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj3816_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj3816_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj3816_droppedInsideTargetActions_3_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj3816_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3816_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj3816").trigger("obj3816_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3816) {
				console.warn("de-queueing event obj3816." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3816").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3816_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_4067();
function runjs_4067() {
	window.obj3816_droppedInsideTargetActions_3_runningActionsCount = obj3816_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj3816").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj3816_droppedInsideTargetActions_3_runningActionsCount = window.obj3816_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj3816_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj3816_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj3816_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj3816_droppedInsideTargetActions_3_actionGroup10();
}
	}, 1);
}







};
obj3816_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3816_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj3816").trigger("obj3816_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3816) {
				console.warn("de-queueing event obj3816." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3816").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3816_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_4068();
function runjs_4068() {
	window.obj3816_droppedInsideTargetActions_3_runningActionsCount = obj3816_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj3816").css("border-color", "rgba(0,0,0,0)"); $("#obj3816").css("border-width", "0px"); $("#obj3816").css("border-style", "solid"); $("#obj3816").css("border-radius", "10px"); $("#obj3816").css("-webkit-border-radius", "10px"); $("#obj3816").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj3816_droppedInsideTargetActions_3_runningActionsCount = window.obj3816_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj3816_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj3816_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj3816_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj3816_droppedInsideTargetActions_3_actionGroup11();
}
	}, 1);
}







};
obj3816_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3816_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj3816").trigger("obj3816_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3816) {
				console.warn("de-queueing event obj3816." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3816").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3816_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj3875 
playAudio_4069();
function playAudio_4069() {
	window.obj3816_droppedInsideTargetActions_3_runningActionsCount = obj3816_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj3875")[0];
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
		    window.obj3816_droppedInsideTargetActions_3_runningActionsCount = window.obj3816_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj3816_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj3816_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj3816_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj3816_droppedInsideTargetActions_3_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj3816_droppedInsideTargetActions_3_runningActionsCount = window.obj3816_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj3816_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj3816_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj3816_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj3816_droppedInsideTargetActions_3_actionGroup12();
}
	}
}









};
obj3816_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3816_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj3816").trigger("obj3816_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3816) {
				console.warn("de-queueing event obj3816." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3816").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3816_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_4070();
function switchText_4070() {
	window.obj3816_droppedInsideTargetActions_3_runningActionsCount = obj3816_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj3866_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj3866_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj3866").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj3866_content");
			setTimeout(function () {
				window.obj3816_droppedInsideTargetActions_3_runningActionsCount = window.obj3816_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj3816_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj3816_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj3816_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj3816_droppedInsideTargetActions_3_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj3866 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj3816_droppedInsideTargetActions_3_runningActionsCount = window.obj3816_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj3816_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj3816_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj3816_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj3816_droppedInsideTargetActions_3_actionGroup13();
}
		}, 1);
	}
}






};
obj3816_droppedInsideTargetActions_3_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3816_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj3816").trigger("obj3816_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3816) {
				console.warn("de-queueing event obj3816." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3816").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3816_droppedInsideTargetActions_3_activeActionGroupIndex = 13;
	





















};
obj3816_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3816_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj3816").trigger("obj3816_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3816) {
				console.warn("de-queueing event obj3816." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3816").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3816_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_4044();
function runjs_4044() {
	window.obj3816_droppedInsideTargetActions_2_runningActionsCount = obj3816_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj3492").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj3816_droppedInsideTargetActions_2_runningActionsCount = window.obj3816_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj3816_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj3816_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj3816_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj3816_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj3816_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3816_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj3816").trigger("obj3816_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3816) {
				console.warn("de-queueing event obj3816." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3816").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3816_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_4045();
function runjs_4045() {
	window.obj3816_droppedInsideTargetActions_2_runningActionsCount = obj3816_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj3492").css("border-color", "#C00000"); $("#obj3492").css("border-width", "2px"); $("#obj3492").css("border-style", "solid"); $("#obj3492").css("border-radius", "10px"); $("#obj3492").css("-webkit-border-radius", "10px"); $("#obj3492").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj3816_droppedInsideTargetActions_2_runningActionsCount = window.obj3816_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj3816_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj3816_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj3816_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj3816_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj3816_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3816_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj3816").trigger("obj3816_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3816) {
				console.warn("de-queueing event obj3816." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3816").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3816_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj3714 
hide_4046();
function hide_4046() {
	var selector = "#obj3714";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj3816_droppedInsideTargetActions_2_runningActionsCount = obj3816_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj3816_droppedInsideTargetActions_2_runningActionsCount = window.obj3816_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj3816_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj3816_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj3816_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj3816_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_4046(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj3816_droppedInsideTargetActions_2_runningActionsCount = window.obj3816_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj3816_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj3816_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj3816_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj3816_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj3816_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3816_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj3816").trigger("obj3816_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3816) {
				console.warn("de-queueing event obj3816." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3816").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3816_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_4047();
function runjs_4047() {
	window.obj3816_droppedInsideTargetActions_2_runningActionsCount = obj3816_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj3816").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj3816_droppedInsideTargetActions_2_runningActionsCount = window.obj3816_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj3816_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj3816_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj3816_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj3816_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj3816_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3816_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj3816").trigger("obj3816_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3816) {
				console.warn("de-queueing event obj3816." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3816").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3816_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_4048();
function switchText_4048() {
	window.obj3816_droppedInsideTargetActions_2_runningActionsCount = obj3816_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj3866_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj3866_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj3866").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj3866_content");
			setTimeout(function () {
				window.obj3816_droppedInsideTargetActions_2_runningActionsCount = window.obj3816_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj3816_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj3816_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj3816_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj3816_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj3866 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj3816_droppedInsideTargetActions_2_runningActionsCount = window.obj3816_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj3816_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj3816_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj3816_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj3816_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj3816_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3816_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj3816").trigger("obj3816_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3816) {
				console.warn("de-queueing event obj3816." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3816").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3816_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj3816 
move_4049();
function move_4049() {
	window.obj3816_droppedInsideTargetActions_2_runningActionsCount = obj3816_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj3816");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 425;
	var moveY = 633;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj3816_droppedInsideTargetActions_2_runningActionsCount = window.obj3816_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj3816_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj3816_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj3816_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj3816_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj3816_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3816_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj3816").trigger("obj3816_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3816) {
				console.warn("de-queueing event obj3816." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3816").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3816_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_4050();
function runjs_4050() {
	window.obj3816_droppedInsideTargetActions_2_runningActionsCount = obj3816_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj3492").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj3816_droppedInsideTargetActions_2_runningActionsCount = window.obj3816_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj3816_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj3816_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj3816_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj3816_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj3816_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3816_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj3816").trigger("obj3816_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3816) {
				console.warn("de-queueing event obj3816." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3816").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3816_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_4051();
function runjs_4051() {
	window.obj3816_droppedInsideTargetActions_2_runningActionsCount = obj3816_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj3492").css("border-color", "#000000"); $("#obj3492").css("border-width", "1px"); $("#obj3492").css("border-style", "solid"); $("#obj3492").css("border-radius", "10px"); $("#obj3492").css("-webkit-border-radius", "10px"); $("#obj3492").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj3816_droppedInsideTargetActions_2_runningActionsCount = window.obj3816_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj3816_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj3816_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj3816_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj3816_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj3816_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3816_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj3816").trigger("obj3816_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3816) {
				console.warn("de-queueing event obj3816." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3816").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3816_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj3714
(function(){
	window.obj3816_droppedInsideTargetActions_2_runningActionsCount = obj3816_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj3714";
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
					window.obj3816_droppedInsideTargetActions_2_runningActionsCount = window.obj3816_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj3816_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj3816_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj3816_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj3816_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj3816_droppedInsideTargetActions_2_runningActionsCount = window.obj3816_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj3816_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj3816_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj3816_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj3816_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj3816_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3816_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj3816").trigger("obj3816_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3816) {
				console.warn("de-queueing event obj3816." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3816").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3816_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_4053();
function runjs_4053() {
	window.obj3816_droppedInsideTargetActions_2_runningActionsCount = obj3816_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj3816").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj3816_droppedInsideTargetActions_2_runningActionsCount = window.obj3816_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj3816_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj3816_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj3816_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj3816_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj3816_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3816_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj3816").trigger("obj3816_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3816) {
				console.warn("de-queueing event obj3816." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3816").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3816_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_4054();
function runjs_4054() {
	window.obj3816_droppedInsideTargetActions_2_runningActionsCount = obj3816_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj3816").css("border-color", "rgba(0,0,0,0)"); $("#obj3816").css("border-width", "0px"); $("#obj3816").css("border-style", "solid"); $("#obj3816").css("border-radius", "10px"); $("#obj3816").css("-webkit-border-radius", "10px"); $("#obj3816").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj3816_droppedInsideTargetActions_2_runningActionsCount = window.obj3816_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj3816_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj3816_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj3816_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj3816_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj3816_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3816_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj3816").trigger("obj3816_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3816) {
				console.warn("de-queueing event obj3816." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3816").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3816_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj3875 
playAudio_4055();
function playAudio_4055() {
	window.obj3816_droppedInsideTargetActions_2_runningActionsCount = obj3816_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj3875")[0];
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
		    window.obj3816_droppedInsideTargetActions_2_runningActionsCount = window.obj3816_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj3816_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj3816_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj3816_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj3816_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj3816_droppedInsideTargetActions_2_runningActionsCount = window.obj3816_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj3816_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj3816_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj3816_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj3816_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj3816_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3816_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj3816").trigger("obj3816_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3816) {
				console.warn("de-queueing event obj3816." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3816").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3816_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_4056();
function switchText_4056() {
	window.obj3816_droppedInsideTargetActions_2_runningActionsCount = obj3816_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj3866_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj3866_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj3866").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj3866_content");
			setTimeout(function () {
				window.obj3816_droppedInsideTargetActions_2_runningActionsCount = window.obj3816_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj3816_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj3816_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj3816_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj3816_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj3866 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj3816_droppedInsideTargetActions_2_runningActionsCount = window.obj3816_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj3816_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj3816_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj3816_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj3816_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj3816_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3816_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj3816").trigger("obj3816_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3816) {
				console.warn("de-queueing event obj3816." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3816").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3816_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj3816_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3816_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj3816").trigger("obj3816_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3816) {
				console.warn("de-queueing event obj3816." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3816").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3816_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_3896();
function runjs_3896() {
	window.obj3816_droppedInsideTargetActions_runningActionsCount = obj3816_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj3500").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj3816_droppedInsideTargetActions_runningActionsCount = window.obj3816_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj3816_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj3816_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj3816_droppedInsideTargetActions_runningActionsCount == 0) {
	obj3816_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj3816_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3816_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj3816").trigger("obj3816_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3816) {
				console.warn("de-queueing event obj3816." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3816").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3816_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_3900();
function switchText_3900() {
	window.obj3816_droppedInsideTargetActions_runningActionsCount = obj3816_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj3866_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj3866_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj3866").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj3866_content");
			setTimeout(function () {
				window.obj3816_droppedInsideTargetActions_runningActionsCount = window.obj3816_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj3816_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj3816_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj3816_droppedInsideTargetActions_runningActionsCount == 0) {
	obj3816_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj3866 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj3816_droppedInsideTargetActions_runningActionsCount = window.obj3816_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj3816_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj3816_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj3816_droppedInsideTargetActions_runningActionsCount == 0) {
	obj3816_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj3816_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3816_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj3816").trigger("obj3816_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3816) {
				console.warn("de-queueing event obj3816." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3816").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3816_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_3897();
function runjs_3897() {
	window.obj3816_droppedInsideTargetActions_runningActionsCount = obj3816_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj3500").css("border-color", "#058E3F"); $("#obj3500").css("border-width", "2px"); $("#obj3500").css("border-style", "solid"); $("#obj3500").css("border-radius", "10px"); $("#obj3500").css("-webkit-border-radius", "10px"); $("#obj3500").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj3816_droppedInsideTargetActions_runningActionsCount = window.obj3816_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj3816_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj3816_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj3816_droppedInsideTargetActions_runningActionsCount == 0) {
	obj3816_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj3816_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3816_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj3816").trigger("obj3816_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3816) {
				console.warn("de-queueing event obj3816." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3816").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3816_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj3710 
hide_3898();
function hide_3898() {
	var selector = "#obj3710";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj3816_droppedInsideTargetActions_runningActionsCount = obj3816_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj3816_droppedInsideTargetActions_runningActionsCount = window.obj3816_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj3816_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj3816_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj3816_droppedInsideTargetActions_runningActionsCount == 0) {
	obj3816_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_3898(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj3816_droppedInsideTargetActions_runningActionsCount = window.obj3816_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj3816_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj3816_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj3816_droppedInsideTargetActions_runningActionsCount == 0) {
	obj3816_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj3816_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3816_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj3816").trigger("obj3816_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3816) {
				console.warn("de-queueing event obj3816." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3816").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3816_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_3899();
function runjs_3899() {
	window.obj3816_droppedInsideTargetActions_runningActionsCount = obj3816_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj3816").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj3816_droppedInsideTargetActions_runningActionsCount = window.obj3816_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj3816_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj3816_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj3816_droppedInsideTargetActions_runningActionsCount == 0) {
	obj3816_droppedInsideTargetActions_actionGroup5();
}
	}, 1);
}







};
obj3816_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3816_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj3816").trigger("obj3816_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3816) {
				console.warn("de-queueing event obj3816." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3816").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3816_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj3876 
playAudio_3901();
function playAudio_3901() {
	window.obj3816_droppedInsideTargetActions_runningActionsCount = obj3816_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj3876")[0];
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
		    window.obj3816_droppedInsideTargetActions_runningActionsCount = window.obj3816_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj3816_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj3816_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj3816_droppedInsideTargetActions_runningActionsCount == 0) {
	obj3816_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj3816_droppedInsideTargetActions_runningActionsCount = window.obj3816_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj3816_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj3816_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj3816_droppedInsideTargetActions_runningActionsCount == 0) {
	obj3816_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj3816_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3816_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj3816").trigger("obj3816_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3816) {
				console.warn("de-queueing event obj3816." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3816").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3816_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90106();
function switchText_90106() {
	window.obj3816_droppedInsideTargetActions_runningActionsCount = obj3816_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj3866_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj3866_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj3866").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj3866_content");
			setTimeout(function () {
				window.obj3816_droppedInsideTargetActions_runningActionsCount = window.obj3816_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj3816_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj3816_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj3816_droppedInsideTargetActions_runningActionsCount == 0) {
	obj3816_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj3866 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj3816_droppedInsideTargetActions_runningActionsCount = window.obj3816_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj3816_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj3816_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj3816_droppedInsideTargetActions_runningActionsCount == 0) {
	obj3816_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj3816_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3816_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj3816").trigger("obj3816_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3816) {
				console.warn("de-queueing event obj3816." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3816").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3816_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj65310_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj65310_onTap_activeActionGroupIndex = -1;
		$("#obj65310").trigger("obj65310_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65310) {
				console.warn("de-queueing event obj65310." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65310").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65310_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj65310 
hide_65313();
function hide_65313() {
	var selector = "#obj65310";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj65310_onTap_runningActionsCount = obj65310_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj65310_onTap_runningActionsCount = window.obj65310_onTap_runningActionsCount - 1;
if (window.obj65310_onTap_runningActionsCount < 0) {
	window.obj65310_onTap_runningActionsCount = 0;
} else if (window.obj65310_onTap_runningActionsCount == 0) {
	obj65310_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_65313(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj65310_onTap_runningActionsCount = window.obj65310_onTap_runningActionsCount - 1;
if (window.obj65310_onTap_runningActionsCount < 0) {
	window.obj65310_onTap_runningActionsCount = 0;
} else if (window.obj65310_onTap_runningActionsCount == 0) {
	obj65310_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj65316 
stopMovie_65312();
function stopMovie_65312() {
	window.obj65310_onTap_runningActionsCount = obj65310_onTap_runningActionsCount + 1;
	var myVideo = $("#obj65316")[0];
	myVideo.pause();
	window.obj65310_onTap_runningActionsCount = window.obj65310_onTap_runningActionsCount - 1;
if (window.obj65310_onTap_runningActionsCount < 0) {
	window.obj65310_onTap_runningActionsCount = 0;
} else if (window.obj65310_onTap_runningActionsCount == 0) {
	obj65310_onTap_actionGroup1();
}
}
















};
obj65310_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj65310_onTap_activeActionGroupIndex = -1;
		$("#obj65310").trigger("obj65310_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65310) {
				console.warn("de-queueing event obj65310." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65310").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65310_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj65302
(function(){
	window.obj65310_onTap_runningActionsCount = obj65310_onTap_runningActionsCount + 1;

	var selector = "#obj65302";
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
					window.obj65310_onTap_runningActionsCount = window.obj65310_onTap_runningActionsCount - 1;
if (window.obj65310_onTap_runningActionsCount < 0) {
	window.obj65310_onTap_runningActionsCount = 0;
} else if (window.obj65310_onTap_runningActionsCount == 0) {
	obj65310_onTap_actionGroup2();
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
				window.obj65310_onTap_runningActionsCount = window.obj65310_onTap_runningActionsCount - 1;
if (window.obj65310_onTap_runningActionsCount < 0) {
	window.obj65310_onTap_runningActionsCount = 0;
} else if (window.obj65310_onTap_runningActionsCount == 0) {
	obj65310_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj65310_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj65310_onTap_activeActionGroupIndex = -1;
		$("#obj65310").trigger("obj65310_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65310) {
				console.warn("de-queueing event obj65310." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65310").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65310_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj65316 
move_65315();
function move_65315() {
	window.obj65310_onTap_runningActionsCount = obj65310_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj65316");
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
			window.obj65310_onTap_runningActionsCount = window.obj65310_onTap_runningActionsCount - 1;
if (window.obj65310_onTap_runningActionsCount < 0) {
	window.obj65310_onTap_runningActionsCount = 0;
} else if (window.obj65310_onTap_runningActionsCount == 0) {
	obj65310_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj65310_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj65310_onTap_activeActionGroupIndex = -1;
		$("#obj65310").trigger("obj65310_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65310) {
				console.warn("de-queueing event obj65310." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65310").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65310_onTap_activeActionGroupIndex = 3;
	





















};
obj65302_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj65302_onTap_activeActionGroupIndex = -1;
		$("#obj65302").trigger("obj65302_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65302) {
				console.warn("de-queueing event obj65302." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65302").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65302_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj65302 
hide_65305();
function hide_65305() {
	var selector = "#obj65302";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj65302_onTap_runningActionsCount = obj65302_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj65302_onTap_runningActionsCount = window.obj65302_onTap_runningActionsCount - 1;
if (window.obj65302_onTap_runningActionsCount < 0) {
	window.obj65302_onTap_runningActionsCount = 0;
} else if (window.obj65302_onTap_runningActionsCount == 0) {
	obj65302_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_65305(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj65302_onTap_runningActionsCount = window.obj65302_onTap_runningActionsCount - 1;
if (window.obj65302_onTap_runningActionsCount < 0) {
	window.obj65302_onTap_runningActionsCount = 0;
} else if (window.obj65302_onTap_runningActionsCount == 0) {
	obj65302_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj65316 
playPauseMovie_65304();
function playPauseMovie_65304() {
	window.obj65302_onTap_runningActionsCount = obj65302_onTap_runningActionsCount + 1;
	var myVideo = $("#obj65316")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj65302_onTap_runningActionsCount = window.obj65302_onTap_runningActionsCount - 1;
if (window.obj65302_onTap_runningActionsCount < 0) {
	window.obj65302_onTap_runningActionsCount = 0;
} else if (window.obj65302_onTap_runningActionsCount == 0) {
	obj65302_onTap_actionGroup1();
}
}

















};
obj65302_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj65302_onTap_activeActionGroupIndex = -1;
		$("#obj65302").trigger("obj65302_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65302) {
				console.warn("de-queueing event obj65302." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65302").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65302_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj65310
(function(){
	window.obj65302_onTap_runningActionsCount = obj65302_onTap_runningActionsCount + 1;

	var selector = "#obj65310";
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
					window.obj65302_onTap_runningActionsCount = window.obj65302_onTap_runningActionsCount - 1;
if (window.obj65302_onTap_runningActionsCount < 0) {
	window.obj65302_onTap_runningActionsCount = 0;
} else if (window.obj65302_onTap_runningActionsCount == 0) {
	obj65302_onTap_actionGroup2();
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
				window.obj65302_onTap_runningActionsCount = window.obj65302_onTap_runningActionsCount - 1;
if (window.obj65302_onTap_runningActionsCount < 0) {
	window.obj65302_onTap_runningActionsCount = 0;
} else if (window.obj65302_onTap_runningActionsCount == 0) {
	obj65302_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj65302_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj65302_onTap_activeActionGroupIndex = -1;
		$("#obj65302").trigger("obj65302_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65302) {
				console.warn("de-queueing event obj65302." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65302").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65302_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj65316 
move_65307();
function move_65307() {
	window.obj65302_onTap_runningActionsCount = obj65302_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj65316");
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
			window.obj65302_onTap_runningActionsCount = window.obj65302_onTap_runningActionsCount - 1;
if (window.obj65302_onTap_runningActionsCount < 0) {
	window.obj65302_onTap_runningActionsCount = 0;
} else if (window.obj65302_onTap_runningActionsCount == 0) {
	obj65302_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj65302_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj65302_onTap_activeActionGroupIndex = -1;
		$("#obj65302").trigger("obj65302_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65302) {
				console.warn("de-queueing event obj65302." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65302").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65302_onTap_activeActionGroupIndex = 3;
	





















};
obj87073_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87073_onTap_activeActionGroupIndex = -1;
		$("#obj87073").trigger("obj87073_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87073) {
				console.warn("de-queueing event obj87073." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87073").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87073_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj87078 
stopAudio_87075();
function stopAudio_87075() {
	window.obj87073_onTap_runningActionsCount = obj87073_onTap_runningActionsCount + 1;
	var myAudio = $("#obj87078")[0];
	myAudio.pause();
	window.obj87073_onTap_runningActionsCount = window.obj87073_onTap_runningActionsCount - 1;
if (window.obj87073_onTap_runningActionsCount < 0) {
	window.obj87073_onTap_runningActionsCount = 0;
} else if (window.obj87073_onTap_runningActionsCount == 0) {
	obj87073_onTap_actionGroup1();
}
}








};
obj87073_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87073_onTap_activeActionGroupIndex = -1;
		$("#obj87073").trigger("obj87073_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87073) {
				console.warn("de-queueing event obj87073." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87073").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87073_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj87073 
hide_87076();
function hide_87076() {
	var selector = "#obj87073";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj87073_onTap_runningActionsCount = obj87073_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj87073_onTap_runningActionsCount = window.obj87073_onTap_runningActionsCount - 1;
if (window.obj87073_onTap_runningActionsCount < 0) {
	window.obj87073_onTap_runningActionsCount = 0;
} else if (window.obj87073_onTap_runningActionsCount == 0) {
	obj87073_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_87076(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj87073_onTap_runningActionsCount = window.obj87073_onTap_runningActionsCount - 1;
if (window.obj87073_onTap_runningActionsCount < 0) {
	window.obj87073_onTap_runningActionsCount = 0;
} else if (window.obj87073_onTap_runningActionsCount == 0) {
	obj87073_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj87073_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87073_onTap_activeActionGroupIndex = -1;
		$("#obj87073").trigger("obj87073_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87073) {
				console.warn("de-queueing event obj87073." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87073").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87073_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj87068
(function(){
	window.obj87073_onTap_runningActionsCount = obj87073_onTap_runningActionsCount + 1;

	var selector = "#obj87068";
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
					window.obj87073_onTap_runningActionsCount = window.obj87073_onTap_runningActionsCount - 1;
if (window.obj87073_onTap_runningActionsCount < 0) {
	window.obj87073_onTap_runningActionsCount = 0;
} else if (window.obj87073_onTap_runningActionsCount == 0) {
	obj87073_onTap_actionGroup3();
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
				window.obj87073_onTap_runningActionsCount = window.obj87073_onTap_runningActionsCount - 1;
if (window.obj87073_onTap_runningActionsCount < 0) {
	window.obj87073_onTap_runningActionsCount = 0;
} else if (window.obj87073_onTap_runningActionsCount == 0) {
	obj87073_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj87073_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj87073_onTap_activeActionGroupIndex = -1;
		$("#obj87073").trigger("obj87073_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87073) {
				console.warn("de-queueing event obj87073." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87073").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87073_onTap_activeActionGroupIndex = 3;
	





















};
obj87068_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87068_onTap_activeActionGroupIndex = -1;
		$("#obj87068").trigger("obj87068_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87068) {
				console.warn("de-queueing event obj87068." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87068").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87068_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj87068 
hide_87070();
function hide_87070() {
	var selector = "#obj87068";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj87068_onTap_runningActionsCount = obj87068_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj87068_onTap_runningActionsCount = window.obj87068_onTap_runningActionsCount - 1;
if (window.obj87068_onTap_runningActionsCount < 0) {
	window.obj87068_onTap_runningActionsCount = 0;
} else if (window.obj87068_onTap_runningActionsCount == 0) {
	obj87068_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_87070(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj87068_onTap_runningActionsCount = window.obj87068_onTap_runningActionsCount - 1;
if (window.obj87068_onTap_runningActionsCount < 0) {
	window.obj87068_onTap_runningActionsCount = 0;
} else if (window.obj87068_onTap_runningActionsCount == 0) {
	obj87068_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj87068_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87068_onTap_activeActionGroupIndex = -1;
		$("#obj87068").trigger("obj87068_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87068) {
				console.warn("de-queueing event obj87068." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87068").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87068_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj87073
(function(){
	window.obj87068_onTap_runningActionsCount = obj87068_onTap_runningActionsCount + 1;

	var selector = "#obj87073";
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
					window.obj87068_onTap_runningActionsCount = window.obj87068_onTap_runningActionsCount - 1;
if (window.obj87068_onTap_runningActionsCount < 0) {
	window.obj87068_onTap_runningActionsCount = 0;
} else if (window.obj87068_onTap_runningActionsCount == 0) {
	obj87068_onTap_actionGroup2();
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
				window.obj87068_onTap_runningActionsCount = window.obj87068_onTap_runningActionsCount - 1;
if (window.obj87068_onTap_runningActionsCount < 0) {
	window.obj87068_onTap_runningActionsCount = 0;
} else if (window.obj87068_onTap_runningActionsCount == 0) {
	obj87068_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj87068_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87068_onTap_activeActionGroupIndex = -1;
		$("#obj87068").trigger("obj87068_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87068) {
				console.warn("de-queueing event obj87068." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87068").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87068_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj87078 
playAudio_87072();
function playAudio_87072() {
	window.obj87068_onTap_runningActionsCount = obj87068_onTap_runningActionsCount + 1;
	var myAudio = $("#obj87078")[0];
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
		    window.obj87068_onTap_runningActionsCount = window.obj87068_onTap_runningActionsCount - 1;
if (window.obj87068_onTap_runningActionsCount < 0) {
	window.obj87068_onTap_runningActionsCount = 0;
} else if (window.obj87068_onTap_runningActionsCount == 0) {
	obj87068_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj87068_onTap_runningActionsCount = window.obj87068_onTap_runningActionsCount - 1;
if (window.obj87068_onTap_runningActionsCount < 0) {
	window.obj87068_onTap_runningActionsCount = 0;
} else if (window.obj87068_onTap_runningActionsCount == 0) {
	obj87068_onTap_actionGroup3();
}
	}
}









};
obj87068_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj87068_onTap_activeActionGroupIndex = -1;
		$("#obj87068").trigger("obj87068_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87068) {
				console.warn("de-queueing event obj87068." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87068").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87068_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj3460: Event Touch Down
 *
 */
$("#obj3460").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj3460_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj3460_onTap is still running");
	return;
}
var obj3460_onTap_runningActionsCount = 0;
var obj3460_onTap_loopCount = 0;
obj3460_onTap_actionGroup0();
});










/*
 *
 *   obj3457: Event Touch Down
 *
 */
$("#obj3457").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj3457_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj3457_onTap is still running");
	return;
}
var obj3457_onTap_runningActionsCount = 0;
var obj3457_onTap_loopCount = 0;
obj3457_onTap_actionGroup0();
});










/*
 *
 *   obj3463: Event Touch Down
 *
 */
$("#obj3463").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj3463_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj3463_onTap is still running");
	return;
}
var obj3463_onTap_runningActionsCount = 0;
var obj3463_onTap_loopCount = 0;
obj3463_onTap_actionGroup0();
});





























































































































































































































/*
 *
 *   obj3508: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj3508");
	var winTarget = document.getElementById("obj3508");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj3508").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj3508_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj3508_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj3508_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj3508_onTouchDown is still running");
	return;
}
var obj3508_onTouchDown_runningActionsCount = 0;
var obj3508_onTouchDown_loopCount = 0;
obj3508_onTouchDown_actionGroup0();
});



/*
 *
 *   obj3508: Event SCActionDragDrop3511_droppedOutsideTargetActions
 *
 */
$("#obj3508").bind("SCActionDragDrop3511_droppedOutsideTargetActions", function(event) {
	if (window.obj3508_SCActionDragDrop3511_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj3508_SCActionDragDrop3511_droppedOutsideTargetActions is still running");
	return;
}
var obj3508_SCActionDragDrop3511_droppedOutsideTargetActions_runningActionsCount = 0;
var obj3508_SCActionDragDrop3511_droppedOutsideTargetActions_loopCount = 0;
obj3508_SCActionDragDrop3511_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj3508: Event droppedInsideTargetActions_4
 *
 */
$("#obj3508").bind("droppedInsideTargetActions_4", function(event) {
	if (window.obj3508_droppedInsideTargetActions_4_activeActionGroupIndex != -1) {
	console.warn("action list window.obj3508_droppedInsideTargetActions_4 is still running");
	return;
}
var obj3508_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj3508_droppedInsideTargetActions_4_loopCount = 0;
obj3508_droppedInsideTargetActions_4_actionGroup0();
});
/*
 *
 *   obj3508: Event droppedInsideTargetActions_3
 *
 */
$("#obj3508").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj3508_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj3508_droppedInsideTargetActions_3 is still running");
	return;
}
var obj3508_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj3508_droppedInsideTargetActions_3_loopCount = 0;
obj3508_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj3508: Event droppedInsideTargetActions_2
 *
 */
$("#obj3508").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj3508_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj3508_droppedInsideTargetActions_2 is still running");
	return;
}
var obj3508_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj3508_droppedInsideTargetActions_2_loopCount = 0;
obj3508_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj3508: Event droppedInsideTargetActions
 *
 */
$("#obj3508").bind("droppedInsideTargetActions", function(event) {
	if (window.obj3508_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj3508_droppedInsideTargetActions is still running");
	return;
}
var obj3508_droppedInsideTargetActions_runningActionsCount = 0;
var obj3508_droppedInsideTargetActions_loopCount = 0;
obj3508_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj3716: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj3716");
	var winTarget = document.getElementById("obj3716");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj3716").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj3716_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj3716_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj3716_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj3716_onTouchDown is still running");
	return;
}
var obj3716_onTouchDown_runningActionsCount = 0;
var obj3716_onTouchDown_loopCount = 0;
obj3716_onTouchDown_actionGroup0();
});



/*
 *
 *   obj3716: Event SCActionDragDrop3719_droppedOutsideTargetActions
 *
 */
$("#obj3716").bind("SCActionDragDrop3719_droppedOutsideTargetActions", function(event) {
	if (window.obj3716_SCActionDragDrop3719_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj3716_SCActionDragDrop3719_droppedOutsideTargetActions is still running");
	return;
}
var obj3716_SCActionDragDrop3719_droppedOutsideTargetActions_runningActionsCount = 0;
var obj3716_SCActionDragDrop3719_droppedOutsideTargetActions_loopCount = 0;
obj3716_SCActionDragDrop3719_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj3716: Event droppedInsideTargetActions_4
 *
 */
$("#obj3716").bind("droppedInsideTargetActions_4", function(event) {
	if (window.obj3716_droppedInsideTargetActions_4_activeActionGroupIndex != -1) {
	console.warn("action list window.obj3716_droppedInsideTargetActions_4 is still running");
	return;
}
var obj3716_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj3716_droppedInsideTargetActions_4_loopCount = 0;
obj3716_droppedInsideTargetActions_4_actionGroup0();
});
/*
 *
 *   obj3716: Event droppedInsideTargetActions_3
 *
 */
$("#obj3716").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj3716_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj3716_droppedInsideTargetActions_3 is still running");
	return;
}
var obj3716_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj3716_droppedInsideTargetActions_3_loopCount = 0;
obj3716_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj3716: Event droppedInsideTargetActions_2
 *
 */
$("#obj3716").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj3716_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj3716_droppedInsideTargetActions_2 is still running");
	return;
}
var obj3716_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj3716_droppedInsideTargetActions_2_loopCount = 0;
obj3716_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj3716: Event droppedInsideTargetActions
 *
 */
$("#obj3716").bind("droppedInsideTargetActions", function(event) {
	if (window.obj3716_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj3716_droppedInsideTargetActions is still running");
	return;
}
var obj3716_droppedInsideTargetActions_runningActionsCount = 0;
var obj3716_droppedInsideTargetActions_loopCount = 0;
obj3716_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj3766: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj3766");
	var winTarget = document.getElementById("obj3766");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj3766").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj3766_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj3766_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj3766_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj3766_onTouchDown is still running");
	return;
}
var obj3766_onTouchDown_runningActionsCount = 0;
var obj3766_onTouchDown_loopCount = 0;
obj3766_onTouchDown_actionGroup0();
});



/*
 *
 *   obj3766: Event SCActionDragDrop3769_droppedOutsideTargetActions
 *
 */
$("#obj3766").bind("SCActionDragDrop3769_droppedOutsideTargetActions", function(event) {
	if (window.obj3766_SCActionDragDrop3769_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj3766_SCActionDragDrop3769_droppedOutsideTargetActions is still running");
	return;
}
var obj3766_SCActionDragDrop3769_droppedOutsideTargetActions_runningActionsCount = 0;
var obj3766_SCActionDragDrop3769_droppedOutsideTargetActions_loopCount = 0;
obj3766_SCActionDragDrop3769_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj3766: Event droppedInsideTargetActions_4
 *
 */
$("#obj3766").bind("droppedInsideTargetActions_4", function(event) {
	if (window.obj3766_droppedInsideTargetActions_4_activeActionGroupIndex != -1) {
	console.warn("action list window.obj3766_droppedInsideTargetActions_4 is still running");
	return;
}
var obj3766_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj3766_droppedInsideTargetActions_4_loopCount = 0;
obj3766_droppedInsideTargetActions_4_actionGroup0();
});
/*
 *
 *   obj3766: Event droppedInsideTargetActions_3
 *
 */
$("#obj3766").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj3766_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj3766_droppedInsideTargetActions_3 is still running");
	return;
}
var obj3766_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj3766_droppedInsideTargetActions_3_loopCount = 0;
obj3766_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj3766: Event droppedInsideTargetActions_2
 *
 */
$("#obj3766").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj3766_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj3766_droppedInsideTargetActions_2 is still running");
	return;
}
var obj3766_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj3766_droppedInsideTargetActions_2_loopCount = 0;
obj3766_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj3766: Event droppedInsideTargetActions
 *
 */
$("#obj3766").bind("droppedInsideTargetActions", function(event) {
	if (window.obj3766_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj3766_droppedInsideTargetActions is still running");
	return;
}
var obj3766_droppedInsideTargetActions_runningActionsCount = 0;
var obj3766_droppedInsideTargetActions_loopCount = 0;
obj3766_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj3816: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj3816");
	var winTarget = document.getElementById("obj3816");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj3816").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj3816_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj3816_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj3816_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj3816_onTouchDown is still running");
	return;
}
var obj3816_onTouchDown_runningActionsCount = 0;
var obj3816_onTouchDown_loopCount = 0;
obj3816_onTouchDown_actionGroup0();
});



/*
 *
 *   obj3816: Event SCActionDragDrop3819_droppedOutsideTargetActions
 *
 */
$("#obj3816").bind("SCActionDragDrop3819_droppedOutsideTargetActions", function(event) {
	if (window.obj3816_SCActionDragDrop3819_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj3816_SCActionDragDrop3819_droppedOutsideTargetActions is still running");
	return;
}
var obj3816_SCActionDragDrop3819_droppedOutsideTargetActions_runningActionsCount = 0;
var obj3816_SCActionDragDrop3819_droppedOutsideTargetActions_loopCount = 0;
obj3816_SCActionDragDrop3819_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj3816: Event droppedInsideTargetActions_4
 *
 */
$("#obj3816").bind("droppedInsideTargetActions_4", function(event) {
	if (window.obj3816_droppedInsideTargetActions_4_activeActionGroupIndex != -1) {
	console.warn("action list window.obj3816_droppedInsideTargetActions_4 is still running");
	return;
}
var obj3816_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj3816_droppedInsideTargetActions_4_loopCount = 0;
obj3816_droppedInsideTargetActions_4_actionGroup0();
});
/*
 *
 *   obj3816: Event droppedInsideTargetActions_3
 *
 */
$("#obj3816").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj3816_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj3816_droppedInsideTargetActions_3 is still running");
	return;
}
var obj3816_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj3816_droppedInsideTargetActions_3_loopCount = 0;
obj3816_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj3816: Event droppedInsideTargetActions_2
 *
 */
$("#obj3816").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj3816_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj3816_droppedInsideTargetActions_2 is still running");
	return;
}
var obj3816_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj3816_droppedInsideTargetActions_2_loopCount = 0;
obj3816_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj3816: Event droppedInsideTargetActions
 *
 */
$("#obj3816").bind("droppedInsideTargetActions", function(event) {
	if (window.obj3816_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj3816_droppedInsideTargetActions is still running");
	return;
}
var obj3816_droppedInsideTargetActions_runningActionsCount = 0;
var obj3816_droppedInsideTargetActions_loopCount = 0;
obj3816_droppedInsideTargetActions_actionGroup0();
});





/*
 *
 *   obj65310: Event Touch Down
 *
 */
$("#obj65310").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj65310_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj65310_onTap is still running");
	return;
}
var obj65310_onTap_runningActionsCount = 0;
var obj65310_onTap_loopCount = 0;
obj65310_onTap_actionGroup0();
});










/*
 *
 *   obj65302: Event Touch Down
 *
 */
$("#obj65302").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj65302_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj65302_onTap is still running");
	return;
}
var obj65302_onTap_runningActionsCount = 0;
var obj65302_onTap_loopCount = 0;
obj65302_onTap_actionGroup0();
});










/*
 *
 *   obj87073: Event Touch Down
 *
 */
$("#obj87073").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj87073_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj87073_onTap is still running");
	return;
}
var obj87073_onTap_runningActionsCount = 0;
var obj87073_onTap_loopCount = 0;
obj87073_onTap_actionGroup0();
});










/*
 *
 *   obj87068: Event Touch Down
 *
 */
$("#obj87068").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj87068_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj87068_onTap is still running");
	return;
}
var obj87068_onTap_runningActionsCount = 0;
var obj87068_onTap_loopCount = 0;
obj87068_onTap_actionGroup0();
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
	
$("#obj3455").trigger('SCEventShow');
$("#obj3460").trigger('SCEventShow');
$("#obj3457").trigger('SCEventShow');
$("#obj3463").trigger('SCEventShow');
$("#obj3480").trigger('SCEventShow');
$("#obj3482").trigger('SCEventShow');
$("#obj3486").trigger('SCEventShow');
$("#obj3484").trigger('SCEventShow');
$("#obj3488").trigger('SCEventShow');
$("#obj3490").trigger('SCEventShow');
$("#obj3494").trigger('SCEventShow');
$("#obj3498").trigger('SCEventShow');
$("#obj3502").trigger('SCEventShow');
$("#obj3492").trigger('SCEventShow');
$("#obj3496").trigger('SCEventShow');
$("#obj3500").trigger('SCEventShow');
$("#obj3504").trigger('SCEventShow');
$("#obj3714").trigger('SCEventShow');
$("#obj3712").trigger('SCEventShow');
$("#obj3710").trigger('SCEventShow');
$("#obj3708").trigger('SCEventShow');
$("#obj3506").trigger('SCEventShow');
$("#obj3866").trigger('SCEventShow');
$("#obj3875").trigger('SCEventShow');
$("#obj3876").trigger('SCEventShow');
$("#obj3508").trigger('SCEventShow');
$("#obj3716").trigger('SCEventShow');
$("#obj3766").trigger('SCEventShow');
$("#obj3816").trigger('SCEventShow');
$("#obj65310").trigger('SCEventShow');
$("#obj65302").trigger('SCEventShow');
$("#obj87073").trigger('SCEventShow');
$("#obj87068").trigger('SCEventShow');
$("#obj87078").trigger('SCEventShow');
$("#obj94673").trigger('SCEventShow');
$("#obj65316").trigger('SCEventShow');
	
});